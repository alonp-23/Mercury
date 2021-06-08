<template>
  <v-card class="events-side-bar" width=500 height=90%>

    <v-toolbar dark dense>
      <v-container>
        <v-row>


      <v-toolbar-title class="mt-2 ml-2">אירועים</v-toolbar-title>
      <v-toolbar-title class="text-subtitle-2 mt-3 ml-3 mr-3">{{dateToDisplay}}</v-toolbar-title>

           <v-btn
              icon
              color="white"
              @click.stop="openFilterDialog('county')">
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

            <v-btn disabled
              icon
              color="white"
              @click.stop="openFilterDialog('type')">
              <v-icon>mdi-map-legend</v-icon>
            </v-btn>

      <v-toolbar-title class="text-subtitle-2 mt-3 mr-3">{{this.filterDialog.selectedItem}}</v-toolbar-title>

            <!---------- FILTER DIALOG ---------->
        <div class="text-center">
          <v-dialog
            v-model="filterDialog.showDialog"
            width="400"
            >

            <v-card>
              <v-card-title class="text-t1 grey lighten-2">
                סינון אירועים
              </v-card-title>

              <v-select v-if="filterDialog.filterBy === 'type' || filterDialog.filterBy === 'county'"
                v-model="filterDialog.selectedItem"
                :items="filterDialog.filterItems"
                filled
                return-object
                label="ערך מבוקש"
              ></v-select>

              <v-row v-else class="center mt-5 mr-14">
                <v-date-picker v-model="filterDialog.selectedDate"></v-date-picker>
              </v-row>

            <v-card-actions>
                  <v-btn
                    class="ml-2 mt-5"
                    outlined
                    rounded
                    small
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

    <!-- <v-list two-line>
      <v-list-item-group> -->

      <v-virtual-scroll
        :items="events"
        height="20%"
        item-height="90">
      <template v-slot:default="{ index, eventItem }">


      <v-list-item 
      height=10%
      class="event-in-list" 
      v-for="(eventItem, index) in filteredEvents" 
      :key="eventItem.id"
      :class="{ 'light-color': (index % 2 === 0), 'dark-color': (index % 2 !== 0)}"
      @click.stop="openDialog(eventItem)">
        <v-list-item-content>
        <v-container>
            <v-row>  

              <v-col>
              <v-list-item-title  class="white--text font-weight-bold">{{eventItem.event_name}}</v-list-item-title>
              <v-list-item-subtitle class="white--text mt-1">{{eventItem.criminal}}</v-list-item-subtitle>
              </v-col>

              <v-col>
                <v-list-item-subtitle class="white--text mr-15">{{convertDateToDayTime(eventItem.event_time)}}</v-list-item-subtitle>
              </v-col>

            </v-row>
        </v-container>

<!---------- DIALOG ---------->
        <div class="text-center">
          <v-dialog
            v-model="dialog.showDialog"
            width="400">

            <v-card>
              <v-card-title class="grey lighten-2 event-info-card-title">
                <p class="text-h5 font-weight-bold mt-3">פירוט האירוע</p>
                <img src='../icon.png' height=40 width=40>
              </v-card-title>
              <v-card-text class="text-h5 font-weight-bold mt-3">
                {{ dialog.content.eventName}} ב{{ dialog.content.eventCounty}}
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

        </v-list-item-content>
      </v-list-item>

      </template>
      </v-virtual-scroll>

      <!-- </v-list-item-group>
    </v-list> -->
  </v-card>
</template>
    
<script>
import eventsData from '../data/events.json'
import axios from 'axios'

export default {
  name: 'EventList',
  data() {
      return {
          eventTypes: ['כל האירועים','גניבה','רצח','שוחד'],
          eventCounties: ['כל האירועים','ברונקס','מנהטן','קווינס','ברוקלין','סטייטן איילנד'],
          events: [],
          filteredEvents: null,
          dialog: {
            showDialog: false,
            dialogIcon: '../icon.png',
            content: {
              criminal: '',
              eventTime: '',
              eventType: '',
              eventName: '',
              eventDescription: '',
              eventCounty: ''
            }
          },
          filterDialog: {
            showDialog: false,
            filterItems: [],
            filterBy: null,
            selectedItem: 'כל האירועים',
            selectedDate: null
          },
      }
        //TODO: CALIBARI WHITE TEXT
  },
  beforeMount() {
    this.filterDialog.selectedDate = this.getCurrentISOString().replace(/T.*/,'');
  },
  async created() {
    this.events = await this.fetchEvents()
  },
  mounted() {
    this.filteredEvents = this.events.filter((event) => (event.event_time).replace(/T.*/,'') === this.filterDialog.selectedDate);
  },
  computed: {
    dateToDisplay() {
      return this.filterDialog.selectedDate.split('-').reverse().join('/')
    }
  },
  methods: {
    fetchEvents() {
      return axios.get('http://siton-backend-securityapp3.apps.openforce.openforce.biz/reports')
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
        case 'county': this.filterDialog.filterItems = this.eventCounties;
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
      this.dialog.content.eventCounty = eventItem.event_county;
    },
    filterEvents(filterBy) {
      this.filterDialog.showDialog = false
      if(this.filterDialog.selectedItem === 'כל האירועים') {
        this.filteredEvents = this.events.filter((event) => (event.event_time).replace(/T.*/,'') === this.filterDialog.selectedDate)
      } else {
        switch(filterBy) {
          case 'type': this.filteredEvents = this.events.filter((event) => event.event_type === this.filterDialog.selectedItem && (event.event_time).replace(/T.*/,'') === this.filterDialog.selectedDate)
          break;
          case 'county': this.filteredEvents = this.events.filter((event) => event.event_county === this.filterDialog.selectedItem &&
           (event.event_time).replace(/T.*/,'') === this.filterDialog.selectedDate)
          break;
          case 'time': {
            this.filteredEvents = this.events.filter((event) => (event.event_time).replace(/T.*/,'') === this.filterDialog.selectedDate)
            console.log(this.filteredEvents)
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
    }
  }
}
</script>

<style scoped>

v-toolbar {
    align-content: center;
}

.event-info-card-title {
  justify-content: space-between;
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
    background-color :#1d2b4b;
}
</style>
