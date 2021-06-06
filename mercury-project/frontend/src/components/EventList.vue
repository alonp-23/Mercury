<template>
  <v-card max-width="300" class="mx-auto">

    <v-toolbar dark dense>
        <v-spacer></v-spacer>
      <v-toolbar-title>אירועים</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-list two-line>

      <v-list-item class="event-in-list" v-for="(event, index) in events" :key="event.title" :class="{ 'light-blue': (index % 2 === 0), 'dark-blue': (index % 2 !== 0)}">
        <v-list-item-content>
        <v-container>
            <v-row>   
          <v-col>
              <v-list-item-subtitle v-text="event.time"></v-list-item-subtitle>
            </v-col>
            <v-col>
          <v-list-item-title v-text="event.title"></v-list-item-title>
          <v-list-item-subtitle v-text="event.subtitle"></v-list-item-subtitle>
          </v-col>
            </v-row>
        </v-container>

        </v-list-item-content>

      </v-list-item>

    </v-list>
  </v-card>
</template>
        <!-- <div class="event-list-header md-layout">
        <div class="event-list-filters md-layout-item">
                <md-button class="md-icon-button md-accent">
        <md-icon>date_range</md-icon>
        </md-button>
                    <md-button class="md-icon-button md-accent">
        <md-icon>filter_alt</md-icon>
        </md-button>
            <md-button class="md-icon-button md-accent">
        <md-icon>place</md-icon>
        </md-button>
        </div>
        <span class="event-list-title md-headline md-layout-item">אירועים</span>
        </div>

        <md-list class="md-double-line">
        <md-list-item>
            <div class="md-list-item-text">12:34</div>
            <div class="md-list-item-text">
            <span>שם האירוע</span>
            <span>שם העבריין</span>
            </div>
        </md-list-item>

        <md-list-item>
            <div class="md-list-item-text">12:34</div>
            <div class="md-list-item-text">
            <span>שם האירוע</span>
            <span>שם העבריין</span>
            </div>
        </md-list-item>

        <md-list-item>
            <div class="md-list-item-text">12:34</div>
            <div class="md-list-item-text">
            <span>שם האירוע</span>
            <span>שם העבריין</span>
            </div>
        </md-list-item>

        <md-list-item>
            <div class="md-list-item-text">12:34</div>
            <div class="md-list-item-text">
            <span>שם האירוע</span>
            <span>שם העבריין</span>
            </div>
        </md-list-item>

        <md-list-item>
            <div class="md-list-item-text">12:34</div>
            <div class="md-list-item-text">
            <span>שם האירוע</span>
            <span>שם העבריין</span>
            </div>
        </md-list-item> -->

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
