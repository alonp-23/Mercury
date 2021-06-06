<template>
<div>
     <v-card max-width="500" class="mx-auto">
    <v-toolbar color="indigo" dark>
      <v-toolbar-title>ציר מודיעיני</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-list>
      <v-list-item
        v-for="person in pplOfIntrest"
        :key="person.name"
      >
      <v-list-item-avatar>
          <v-img :src="person.avatar"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
            <v-list-item-title v-text="person.name"></v-list-item-title>
          <v-list-item-subtitle v-text="person.id"></v-list-item-subtitle>
        </v-list-item-content>

          <v-dialog v-model="dialog" width="500">
      
    <template v-slot:activator="{ on, attrs }">        
        <v-list-item-action 
          v-bind="attrs"
          v-on="on">
          <v-btn icon>
            <v-icon color="grey lighten-1" >mdi-information</v-icon>
          </v-btn>
        </v-list-item-action>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2">
          מידע נוסף
        </v-card-title>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            סגור
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

        
      </v-list-item>
    </v-list>
    
  </v-card>
</div>
    
</template>

<script>
export default {
  name: 'InteList',
  data: function () {
    return {
      pplOfIntrest: [{name: "ישראל ישראלי" , id: 456346, avatar: "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg", is_wanted: false},
      {name: "שאול שאולה" , id: 3452345, avatar: "https://www.pngarts.com/files/11/Avatar-Free-PNG-Image.png", is_wanted: false}],
      dialog: false,
    }
  }
};
</script>