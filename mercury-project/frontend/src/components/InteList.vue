<template>
<div>
     <v-card max-width="500" class="mx-auto">
    <v-toolbar  dark>
      <v-toolbar-title>ציר מודיעיני</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    
    <v-list>
        <v-chip class="mr-2" @click="show_wanted = false" label>
        <v-icon left v-if="!show_wanted">mdi-checkbox-marked-circle</v-icon>                       
        חשודים
        </v-chip>
        <v-chip class="mr-2" @click="show_wanted = true" label> 
        <v-icon left v-if="show_wanted">mdi-checkbox-marked-circle</v-icon>            
        מבוקשים
        </v-chip>      
      <v-list-item
        v-for="person in pplList"
        :key="person.name"
      >
      <v-list-item-avatar>
          <v-img :src="avatar(person)"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
            <v-list-item-title v-text="full_name(person.first_name,person.last_name)" ></v-list-item-title>
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

        <v-img 
        contain
            :src="avatar(person)"
            height="150" />
          

        <v-card-text>
          שם: {{full_name(person.first_name,person.last_name)}} <br>
          תעודת זהות: {{person.id}} <br>
          כתובת: {{person.address}} <br>
          טלפון: {{person.phone_number}}
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
  data: ()=> {
    return {
      pplOfIntrest: [{first_name: "ישראל", last_name:"ישראלי", id: 456346, 
      person_img_url: "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg", 
      is_wanted: false, phone_number:1234567, address:"דרדר 51, מצפה נשר"},
      {first_name: "שאול", last_name:"שאולה" , id: 3452345, person_img_url: "https://www.pngarts.com/files/11/Avatar-Free-PNG-Image.png", 
      is_wanted: true, phone_number:1234567, address:"דרדר 51, מצפה נשר"}],
      dialog: false,
      show_wanted:false
    }
  },
  computed: {    
    pplList: function () {
      return this.pplOfIntrest.filter(person=> person.is_wanted && this.show_wanted || !person.is_wanted && !this.show_wanted)
    },
      
  },
  methods: {
      full_name: function(first_name,last_name){return `${first_name} ${last_name}`},
      avatar: function(person){return person.person_img_url}  
  }
  
};
</script>
<style >
div{
    font-family: Calibri,Candara,Segoe,Segoe UI,Optima,Arial,sans-serif;
}
</style>