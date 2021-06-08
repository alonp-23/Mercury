<template>
<div>
  <v-card class="mx-auto" :max-width=width id="list_card" dark>
    <v-toolbar-title class="white--text intelTitle">
      ציר מודיעיני
      <v-spacer></v-spacer>      
    </v-toolbar-title>   
    <v-divider></v-divider>
     <v-chip class="mr-2 ma-3" @click="show_wanted = false" label>
            <v-icon left v-if="!show_wanted">mdi-checkbox-marked-circle</v-icon>                       
            חשודים
            </v-chip>
        <v-chip class="mr-2 ma-3" @click="show_wanted = true" label> 
            <v-icon left v-if="show_wanted">mdi-checkbox-marked-circle</v-icon>            
            מבוקשים
        </v-chip>  
    <v-virtual-scroll
      :items="pplList"
      :item-height="50"      
      :height=height
      id = "scroll"
    >
      <template v-slot:default="{ item }">          
        <v-list-item id="list_item" class="rounded-xl ma4" >
          <v-list-item-avatar>
                <v-img :src="avatar(item)"></v-img>
            </v-list-item-avatar>

          <v-list-item-content>
                <v-list-item-title v-text="full_name(item.first_name,item.last_name)" ></v-list-item-title>
                <v-list-item-subtitle id="item_content" v-text="item.id"></v-list-item-subtitle>
            </v-list-item-content>

          <v-dialog v-model="dialog" width="500">      
                <template v-slot:activator="{ on, attrs }">        
                    <v-list-item-action 
                        v-bind="attrs"
                        v-on="on">
                        <v-btn icon>
                            <v-icon color="white" >mdi-arrow-left</v-icon>
                        </v-btn>
                    </v-list-item-action>
                </template>
                <v-card>

                    <v-card-title class="headline grey lighten-2">
                    {{full_name(item.first_name,item.last_name)}}
                    </v-card-title>

                    <v-img 
                        contain
                        :src="avatar(item)"
                        max-height="150" 
                        class="ma-3"/>          

                    <v-card-text>          
                    תעודת זהות: {{item.id}} <br>
                    כתובת: {{item.address}} <br>
                    טלפון: {{item.phone_number}}
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
      </template>
    </v-virtual-scroll>
  </v-card>
</div>
    
</template>

<script>
export default {
  name: 'InteList',
  props: {
      width: {
          default: 500
      },
      height: {
          default: 500
      }
  },
  data: ()=> {
    return {
      pplOfIntrest: [{first_name: "ישראל", last_name:"ישראלי", id: 456346, 
      person_img_url: "https://ps.w.org/ultimate-member/assets/icon-256x256.png?rev=2143339", 
      is_wanted: false, phone_number:1234567, address:"דרדר 51, מצפה נשר"},
      {first_name: "שאול", last_name:"שאולה" , id: 3452345, person_img_url: "https://www.pngarts.com/files/11/Avatar-Free-PNG-Image.png", 
      is_wanted: true, phone_number:1234567, address:"דרדר 51, מצפה נשר"},
      {first_name: "דובים", last_name:"ביער" , id: 3452345, person_img_url: "https://www.pngarts.com/files/11/Avatar-Free-PNG-Image.png", 
      is_wanted: true, phone_number:1234567, address:"דרדר 51, מצפה נשר"}],
      dialog: false,
      show_wanted:false,      
    }
  },
  computed: {    
    pplList: function () {
      return this.pplOfIntrest.filter(person=> person.is_wanted && this.show_wanted || !person.is_wanted && !this.show_wanted)
    }      
  },
  methods: {
      full_name: function(first_name,last_name){return `${first_name} ${last_name}`},
      avatar: function(person){return person.person_img_url},
      genRandomIndex (length) {
        return Math.ceil(Math.random() * (length - 1))
      }
  }  
};
</script>
<style >
    div{
        font-family: Calibri,Candara,Segoe,Segoe UI,Optima,Arial,sans-serif;
        color:white;    
    }
    .intelTitle{
      background: #282828; 
    }
    #list_card{
        background-color: rgba(124, 127, 141, 0.7);
        border-radius: 5%;
    }
    #list_item{
        background-color: #141d33;                   
    }
    #item_content{
        color:white;
    }
    #scroll{
        margin: 6px;
    }
</style>