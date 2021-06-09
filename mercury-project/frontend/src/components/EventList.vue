<template>
  <v-card class="events-side-bar wrapper" width=23vw height=80vh>

    <v-toolbar height="100%" dark dense>
      <v-container>
        <v-row>


      <v-col class="ml-0 pl-0">
      <v-toolbar-title class="mt-2">אירועים</v-toolbar-title>
      <v-toolbar-title class="text-subtitle-2 mt-2 ml-3">{{dateToDisplay}}</v-toolbar-title>
      </v-col>

      <v-col class="mr-0 pr-0">
           <v-btn
              icon
              color="white"
              @click.stop="openFilterDialog('region')">
              <v-icon>mdi-map-marker</v-icon>
            </v-btn>

            <v-btn
              icon
              color="white"
              @click.stop="openFilterDialog('time')">
              <v-icon>mdi-calendar-month</v-icon>
            </v-btn>

            <v-btn
              icon
              color="white"
              @click.stop="openFilterDialog('type')">
              <v-icon>mdi-filter</v-icon>
            </v-btn>

            <v-btn
              icon
              color="white"
              @click.stop="openFilterDialog('map')">
              <v-icon>mdi-map-legend</v-icon>
            </v-btn>

      <v-toolbar-title class="text-subtitle-2 mr-15">{{this.filterDialog.selectedItem}}</v-toolbar-title>
      </v-col>

            <!---------- FILTER DIALOG ---------->
        <div class="text-center" width=40vw>
          <v-dialog
            v-model="filterDialog.showDialog"
            width=40vw>

            <v-card width=100%>
              <v-card-title class="text-t1 white--text event-filter-card-title">
                סינון אירועים
              </v-card-title>

              <v-select v-if="filterDialog.filterBy === 'type' || filterDialog.filterBy === 'region'"
                v-model="filterDialog.selectedItem"
                :items="filterDialog.filterItems"
                filled
                return-object
                label="ערך מבוקש"
              ></v-select>

              <Iframe 
                v-else-if="filterDialog.filterBy === 'map'"
                class="mt-10 mr-10"
                width=700vw
                height=700vh
                src=http://map3-service-tmzmap3.apps.openforce.openforce.biz/#/brain>
              </Iframe>

              <v-row v-else class="center mt-5 mr-16">
                <v-date-picker 
                width="30vw" 
                v-model="filterDialog.selectedDate"
                color="#1d2b4b"></v-date-picker>
              </v-row>

            <v-card-actions class="justify-center">
                  <v-btn
                    v-if="filterDialog.filterBy !== 'map'"
                    class="white--text ml-2 mt-5"
                    rounded
                    big
                    color="#1d2b4b"
                    @click="filterEvents(filterDialog.filterBy)">
                    סנן
                  </v-btn>                 
            </v-card-actions>
            </v-card>
          </v-dialog>
        </div>


      </v-row>
      </v-container>
    </v-toolbar>

    <v-list two-line>
      <v-list-item-group>
    <template v-for="(eventItem, index) in eventsPages[currPage]">
      <v-hover v-slot:default="{ hover }">
      <v-list-item 
      height=10%
      class="event-in-list"  

      :key="eventItem.id"
     

      :class="{ 'light-color': (index % 2 === 0), 'dark-color': (index % 2 !== 0)}"
      @click.stop="openDialog(eventItem)">


      <template v-slot:default="{ active, toggle }">
    <v-expand-transition>
        <v-overlay
          absolute
          :value="hover">
        </v-overlay>
    </v-expand-transition>

        <v-list-item-content>
        <v-container>
            <v-row>  

              <v-col>
              <v-list-item-title  class="white--text font-weight-bold">{{eventItem.event_name}}</v-list-item-title>
              <v-list-item-subtitle class="white--text mt-1">{{eventItem.criminal}}</v-list-item-subtitle>
              </v-col>

              <v-col>
                <v-list-item-subtitle class="text-subtitle-1 white--text mr-16 mt-3">{{convertDateToDayTime(eventItem.event_time)}}</v-list-item-subtitle>
              </v-col>

            </v-row>
        </v-container>
        </v-list-item-content>

<!---------- DIALOG ---------->
        <div class="text-center">
          <v-dialog
            v-model="dialog.showDialog"
            width=23vw>

            <v-card>
              <v-card-title class="white--text event-info-card-title">
                <p class="text-h5 font-weight-bold mt-3">פירוט האירוע</p>
                <img src='../assets/icon.png' height=40 width=40>
              </v-card-title>
              <v-card-text class="text-h5 font-weight-bold mt-6">
                {{ dialog.content.eventName}} ב{{ dialog.content.eventRegion}}
              </v-card-text>
              <v-card-text class="text-h6 font-weight-medium">
                האירוע התרחש ב{{ convertDateToDayTime(dialog.content.eventTime) }} ע"י {{ dialog.content.criminal}}
              </v-card-text>
              <v-card-text class="text-subtitle-1">
                {{ dialog.content.eventDescription }}
              </v-card-text>
            </v-card>
          </v-dialog>
        </div>

      </template>
      </v-list-item>
      </v-hover>
            </template>

          <div class="fixed-wrapper">
            <v-list-item
                class="fixed">
              <v-btn
              class="next-page-btn"
              color="white"
              icon
              @click.stop="nextEventsToDisplay()">
              <v-icon dark large>mdi-arrow-down-bold</v-icon>
            </v-btn>

            <v-btn
              color="white prev-page-btn"
              icon
              @click.stop="prevEventsToDisplay()">
              <v-icon dark large>mdi-arrow-up-bold</v-icon>
            </v-btn>
          </v-list-item>
          </div>

      </v-list-item-group>
    </v-list>

    </v-card>
</template>
    
<script>
import axios from 'axios'

export default {
  name: 'EventList',
  data() {
      return {
          eventTypes: [],
          eventRegions: ['כל האירועים','ברונקס','מנהטן','קווינס','ברוקלין','סטייטן איילנד'],
          events: [],
          filteredEvents: [],
          dialog: {
            showDialog: false,
            dialogIcon: '../assets/icon.png',
            content: {
              criminal: '',
              eventTime: '',
              eventType: '',
              eventName: '',
              eventDescription: '',
              eventRegion: ''
            }
          },
          filterDialog: {
            showDialog: false,
            filterItems: [],
            filterBy: null,
            selectedItem: 'כל האירועים',
            selectedDate: null
          },
          currPage: 0
      }
        //TODO: CALIBARI WHITE TEXT
  },
  beforeMount() {
    this.filterDialog.selectedDate = this.getCurrentISOString().replace(/T.*/,'');
  },
  async created() {
    this.events = await this.fetchEvents();
    this.eventTypes = (await this.fetchEventTypes()).map((eventType) => eventType.event_name)
    this.eventTypes.unshift('כל האירועים')
    this.events = this.events.filter((event) => event.event_time !== null)
    this.filteredEvents = this.events.filter((event) => (event.event_time).replace(/T.*/,'') === this.filterDialog.selectedDate)
  },
  computed: {
    dateToDisplay() {
      return this.filterDialog.selectedDate.split('-').reverse().join('/')
    },
    eventsPages() {
      const pages = []
      let i
      let j
      let page
      const chunk = 7;

      for (i=0, j=this.filteredEvents.length; i<j; i+=chunk) {
          page = this.filteredEvents.slice(i,i+chunk);
          pages.push(page)
      }

      return pages;
    }
  },
  methods: {
    fetchEvents() {
      return axios.get('http://siton-backend-securityapp3.apps.openforce.openforce.biz/reports')
      .then(res => { 
        return res.data
      })
    },
    fetchEventTypes() {
      return axios.get('http://siton-backend-securityapp3.apps.openforce.openforce.biz/reports/events')
      .then(res => { 
        return res.data
      })
    },
    openFilterDialog(filterBy) {
      this.filterDialog.showDialog = true
      this.filterDialog.filterBy = filterBy
      switch(filterBy) {
        case 'type': this.filterDialog.filterItems = this.eventTypes;
        break;
        case 'region': this.filterDialog.filterItems = this.eventRegions;
        break;
      }
    },
    openDialog(eventItem) {
      this.dialog.showDialog = true,
      this.dialog.content.criminal= eventItem.criminal;
      this.dialog.content.eventName = eventItem.event_name;
      this.dialog.content.eventType = eventItem.event_type;
      this.dialog.content.eventTime = eventItem.event_time;
      this.dialog.content.eventDescription = eventItem.event_description;
      this.dialog.content.eventRegion = eventItem.region;
    },
    filterEvents(filterBy) {
      this.filterDialog.showDialog = false
      if(this.filterDialog.selectedItem === 'כל האירועים') {
        this.filteredEvents = this.events.filter((event) => (event.event_time).replace(/T.*/,'') === this.filterDialog.selectedDate)
      } else {
        switch(filterBy) {
          case 'type': {
            console.log(this.filterDialog.selectedItem)
            this.filteredEvents = this.events.filter((event) => event.event_type === this.filterDialog.selectedItem && 
            (event.event_time).replace(/T.*/,'') === this.filterDialog.selectedDate)
          }
          break;
          case 'region': this.filteredEvents = this.events.filter((event) => event.region === this.filterDialog.selectedItem &&
           (event.event_time).replace(/T.*/,'') === this.filterDialog.selectedDate)
          break;
          case 'time': {
            this.filteredEvents = this.events.filter((event) => (event.event_time).replace(/T.*/,'') === this.filterDialog.selectedDate)
            this.filterDialog.selectedItem = 'כל האירועים'
          }
        }
      }
    },
    convertDateToDayTime(date) {
      return new Date(date).toLocaleTimeString('en',{ timeStyle: 'short', hour12: false, timeZone:'UTC' });
    },
    getCurrentISOString() {
      var tzoffset = (new Date()).getTimezoneOffset() * 60000;
      return (new Date(Date.now() - tzoffset)).toISOString();
    },
    convertDateToDisplay(date) {
      return date.toLocaleDateString('he-IL', {timeZone:'Asia/Jerusalem'}).replace(/\D/g,'/')
    },
    nextEventsToDisplay() {
      if(this.currPage < this.eventsPages.length - 1) {
        this.currPage = this.currPage + 1;
      }
    },
    prevEventsToDisplay() {
      if(this.currPage !== 0) {
        this.currPage = this.currPage - 1;
      }
    }
  }
}
</script>

<style scoped>

v-toolbar {
  align-content: center;
}

div.v-select__selection.v-select__selection--comma {
  color: black;
}

.event-info-card-title {
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.87);
}

.event-filter-card-title {
  background-color: rgba(0, 0, 0, 0.87);
}

.events-side-bar.theme--light.v-card {
    background: rgba(124,127,141,0.7);
    border-radius: 15px;
}

.v-list {
    padding: 0;
}

.dark-color {
    background-color: #141d33;
}

.light-color {
    background-color: #1d2b4b;
}

.next-page-btn {
  margin-right: 7vw;
  margin-left: 2vw;
}

/* Main site body */
.wrapper {
    position: relative;/* Ensure absolute positioned child elements are relative to this*/
}

/* Absolute positioned wrapper for the element you want to fix position */
.fixed-wrapper {
    width: 23vw;
    position: absolute;
    /* Move this out to the left of the site body, leaving a 20px gutter */
}

/* The element you want to fix the position of */
.fixed {
    width: 23vw;
    height: 8vh;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.87);
    bottom: 3vh;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    /* Do not set top / left! */
}

.div {
  color: black !important;
}

</style>
