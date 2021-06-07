<template>
  <v-card max-width="300">

    <v-toolbar dark dense>
      <v-container>
        <v-row>

      <v-column>
      <v-toolbar-title class="mt-2">אירועים</v-toolbar-title>
      </v-column>

        <v-column class="mr-15">
           <v-btn
              icon
              color="white"
            >
              <v-icon>mdi-map-marker</v-icon>
            </v-btn>

             <v-btn
              icon
              color="white"
            >
              <v-icon>mdi-calendar-month</v-icon>
            </v-btn>

             <v-btn
              icon
              color="white"
            >
              <v-icon>mdi-filter</v-icon>
            </v-btn>
      </v-column>

      </v-row>
      </v-container>
    </v-toolbar>

    <v-list two-line>

      <v-list-item-group>
      <v-list-item 
      class="event-in-list" 
      v-for="(event, index) in events" 
      :key="event.title"
      :class="{ 'light-blue': (index % 2 === 0), 'dark-blue': (index % 2 !== 0)}">
        <v-list-item-content>
        <v-container>
            <v-row>   
           <v-col>
          <v-list-item-title  class="white--text">{{event.title}}</v-list-item-title>
          <v-list-item-subtitle class="white--text">{{event.subtitle}}</v-list-item-subtitle>
          </v-col>
          <v-col>
              <v-list-item-subtitle class="white--text">{{event.time}}</v-list-item-subtitle>
            </v-col>
            </v-row>
        </v-container>
        </v-list-item-content>
      </v-list-item>
      </v-list-item-group>

    </v-list>
  </v-card>
</template>
    
<script>
export default {
  name: 'EventList',
  props: {
  },
    data() {
        return {
            events: [
                {
                time: '12:34',
                subtitle: 'שם העבריין',
                title: 'שם האירוע',
                },
                {
                    time: '12:34',
                subtitle: 'שם העבריין',
                title: 'שם האירוע',
                },
                {
                    time: '12:34',
                subtitle: 'שם העבריין',
                title: 'שם האירוע',
                },
            ]
        }

        //TODO: CALIBARI WHITE TEXT
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

.dark-blue {
    background-color: #001a33;
}

.light-blue {
    background-color: #00264d;
}
</style>
