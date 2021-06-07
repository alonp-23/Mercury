<template>
<div>
     <v-card max-width="500" class="mx-auto">
    <v-toolbar color="indigo" dark>
      <v-toolbar-title>ציר מודיעיני</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-list>
        <v-chip class="mr-2" @click="show_wanted = false" label> 
                   
        חשודים
        </v-chip>
        <v-chip class="mr-2" @click="show_wanted = true" label>
        מבוקשים
        </v-chip>      
      <v-list-item
        v-for="person in pplList"
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
            <v-icon color="grey lighten-1" >mdi-arrow-left</v-icon>
          </v-btn>
        </v-list-item-action>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2">
          מידע נוסף
        </v-card-title>

        <v-card-text>
          מידע נוסף
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
import { mdiCheckboxMarkedCircleOutline } from '@mdi/js';
export default {
  name: 'InteList',
  data: ()=> {
    return {
      pplOfIntrest: [{name: "ישראל ישראלי" , id: 456346, avatar: "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg", is_wanted: false},
      {name: "שאול שאולה" , id: 3452345, avatar: "https://www.pngarts.com/files/11/Avatar-Free-PNG-Image.png", is_wanted: true}],
      dialog: false,
      show_wanted:false
    }
  },
  computed: {    
    pplList: function () {
      return this.pplOfIntrest.filter(person=> person.is_wanted && this.show_wanted || !person.is_wanted && !this.show_wanted)
    }
  }
};
</script>