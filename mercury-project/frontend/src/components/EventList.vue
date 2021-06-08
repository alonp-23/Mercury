<template>
  <v-card width="700">

    <v-toolbar dark dense>
      <v-container width="400">
        <v-row>

      <v-col>
      <v-toolbar-title class="mt-2">אירועים</v-toolbar-title>
      </v-col>

      <v-col>
      <v-toolbar-title class="text-subtitle-2 mt-3">{{dateToDisplay}} {{this.filterDialog.selectedItem}}</v-toolbar-title>
            </v-col>
      <!-- <v-col>
      <v-toolbar-title class="mt-2">{{this.filterDialog.selectedDate}}</v-toolbar-title>
      </v-col> -->

        <v-col>
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

              <v-row v-else justify="center mt-5">
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

      </v-col>

      </v-row>
      </v-container>
    </v-toolbar>

    <v-list two-line>
      <v-list-item-group>
      <v-list-item 
      class="event-in-list" 
      v-for="(eventItem, index) in filteredEvents" 
      :key="eventItem.id"
      :class="{ 'light-color': (index % 2 === 0), 'dark-color': (index % 2 !== 0)}"
      @click.stop="openDialog(eventItem)">
        <v-list-item-content>
        <v-container>
            <v-row>  

              <v-col>
              <v-list-item-title  class="white--text">{{eventItem.eventName}}</v-list-item-title>
              <v-list-item-subtitle class="white--text">{{eventItem.criminal}}</v-list-item-subtitle>
              </v-col>

              <v-col>
                <v-list-item-subtitle class="white--text">{{convertDateToDayTime(eventItem.eventTime)}}</v-list-item-subtitle>
              </v-col>

            </v-row>
        </v-container>

<!---------- DIALOG ---------->
        <div class="text-center">
          <v-dialog
            v-model="dialog.showDialog"
            width="400">

            <v-card>
              <v-card-title class="text-t1 grey lighten-2">
                פירוט האירוע
              </v-card-title>
              <v-card-text class="text-h5 font-weight-bold mt-5">
                {{ dialog.content.eventName}} ב{{ dialog.content.eventCounty}}
              </v-card-text>
              <v-card-text class="text-h6 font-weight-medium mt-5">
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
      </v-list-item-group>
    </v-list>
  </v-card>
</template>
    
<script>
import eventsData from '../data/events.json'


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
  mounted() {
    this.events = eventsData;
    this.filteredEvents = this.events.filter((event) => (event.eventTime).replace(/T.*/,'') === this.filterDialog.selectedDate);
  },
  computed: {
    dateToDisplay() {
      return this.filterDialog.selectedDate.split('-').reverse().join('/')
    }
  },
  methods: {
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
      this.dialog.content.eventName = eventItem.eventName;
      this.dialog.content.eventType = eventItem.eventType;
      this.dialog.content.eventTime = eventItem.eventTime;
      this.dialog.content.eventDescription = eventItem.eventDescription;
      this.dialog.content.eventCounty = eventItem.eventCounty;
    },
    filterEvents(filterBy) {
      this.filterDialog.showDialog = false
      if(this.filterDialog.selectedItem === 'כל האירועים') {
        this.filteredEvents = this.events.filter((event) => (event.eventTime).replace(/T.*/,'') === this.filterDialog.selectedDate)
      } else {
        switch(filterBy) {
          case 'type': this.filteredEvents = this.events.filter((event) => event.eventType === this.filterDialog.selectedItem && (event.eventTime).replace(/T.*/,'') === this.filterDialog.selectedDate)
          break;
          case 'county': this.filteredEvents = this.events.filter((event) => event.eventCounty === this.filterDialog.selectedItem && (event.eventTime).replace(/T.*/,'') === this.filterDialog.selectedDate)
          break;
          case 'time': {
            this.filteredEvents = this.events.filter((event) => (event.eventTime).replace(/T.*/,'') === this.filterDialog.selectedDate)
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
    align-content: center
}

.v-list {
    padding: 0;
}

.dark-color {
    background-color: #141d33	;
}

.light-color {
    background-color:#1d2b4b
}
</style>
