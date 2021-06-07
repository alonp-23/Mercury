<template>
  <v-card max-width="400">

    <v-toolbar dark dense>
      <v-container>
        <v-row>

      <v-col>
      <v-toolbar-title class="mt-2">אירועים</v-toolbar-title>
      </v-col>

        <v-col>
           <v-btn
              icon
              color="white"
              @click.stop="openFilterDialog('county')">
              <v-icon>mdi-map-marker</v-icon>
            </v-btn>

             <v-btn disabled
              icon
              color="white">
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

              <v-select
                v-model="filterDialog.selectedItem"
                :items="filterDialog.filterItems"
                filled
                return-object
                label="סוגי אירועים"
              ></v-select>

            <v-card-actions>
                  <v-btn
                    class="ml-2 mt-5"
                    outlined
                    rounded
                    small
                    @click="filterEvents(filterDialog.filterBy)"
                  >
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
      v-for="(event, index) in filteredEvents" 
      :key="event.eventId"
      :class="{ 'light-color': (index % 2 === 0), 'dark-color': (index % 2 !== 0)}"
      @click.stop="openDialog(event.description)">
        <v-list-item-content>
        <v-container>
            <v-row>  

              <v-col>
              <v-list-item-title  class="white--text">{{event.eventType}}</v-list-item-title>
              <v-list-item-subtitle class="white--text">{{event.criminalName}}</v-list-item-subtitle>
              </v-col>

              <v-col>
                <v-list-item-subtitle class="white--text">{{event.eventTime}}</v-list-item-subtitle>
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
                מידע נוסף על האירוע
              </v-card-title>
              <v-card-text class="text-subtitle-1 mt-5">
                {{ dialog.content }}
              </v-card-text>
              <iframe src="http://map3-service-tmzmap3.apps.openforce.openforce.biz/#/brain"></iframe>
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
export default {
  name: 'EventList',
  data() {
      return {
          eventTypes: ['הכל','גניבה','רצח','שוחד'],
          eventCounties: ['הכל','ברונקס','מנהטן','קווינס','ברוקלין','סטייטן איילנד'],
          events:[
              {
                eventId: 1,
                eventTime: '12:34',
                criminalName: 'רוני דניאל',
                eventType: 'גניבה',
                eventDescription: 'גנב רכב שחנה מחוץ לביתו',
                eventCounty: 'ברוקלין',
                lat: '',
                long: ''
              },
              {
                eventId: 2,
                eventTime: '12:37',
                criminalName: 'ארנולד וייס',
                eventType: 'רצח',
                description: 'רצח אדם שתפס את חנייתו' ,
                eventCounty: 'מנהטן',   
                lat: '',
                long: ''          
              },
              {
                eventId: 3,               
                eventTime: '12:34',
                criminalName: 'אנה לוי',
                eventType: 'שוחד',
                description: 'ניסתה לשחד שופט כשנשפט על העלמת מס',   
                eventCounty: 'ברוקלין', 
                lat: '',
                long: ''
              }     
          ],
          filteredEvents: null,
          dialog: {
            showDialog: false,
            content: ''
          },
          filterDialog: {
            showDialog: false,
            filterItems: [],
            filterBy: null,
            selectedItem: null
          },
      }
        //TODO: CALIBARI WHITE TEXT
  },
  mounted() {
    this.filteredEvents = this.events;
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
    openDialog(description) {
      this.dialog.showDialog = true,
      this.dialog.content = description
    },
    filterEvents(filterBy) {
      this.filterDialog.showDialog = false
      if(filterBy === 'type') {
        if(this.filterDialog.selectedItem === 'הכל') {
          this.filteredEvents = this.events
        } else {
          this.filteredEvents = this.events.filter((event) => event.eventType === this.filterDialog.selectedItem)
        }
      } else if(filterBy === 'county') {
        if(this.filterDialog.selectedItem === 'הכל') {
          this.filteredEvents = this.events
        } else {
          console.log(this.filterDialog.selectedItem)
          this.filteredEvents = this.events.filter((event) => event.eventCounty === this.filterDialog.selectedItem)
        }
      }
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
