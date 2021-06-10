<template>
  <div>
    <v-card class="mx-auto" :max-width="width" id="list_card">
      <v-card-title class="white--text" id="title">
        ציר מודיעיני
        <v-spacer></v-spacer>
      </v-card-title>
      <v-divider></v-divider>
      <v-chip class="mr-2 ma-3" @click="show_wanted = false" label>
        <v-icon left v-if="!show_wanted">mdi-checkbox-marked-circle</v-icon>
        חשודים
      </v-chip>
      <v-chip class="mr-2 ma-3" @click="show_wanted = true" label>
        <v-icon left v-if="show_wanted">mdi-checkbox-marked-circle</v-icon>
        מבוקשים
      </v-chip>
      <v-virtual-scroll :items="pplList" :item-height="50" :height="height" id="scroll">
        <template v-slot:default="{ item }">
          <v-list-item id="list_item" class="rounded-xl ma4">
            <v-list-item-avatar>
              <v-img :src="item.person.personImageURL"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title
                v-text="full_name(item.person.firstName, item.person.lastName)"
              ></v-list-item-title>
              <v-list-item-subtitle id="item_content" v-text="item.personId"></v-list-item-subtitle>
            </v-list-item-content>

            <v-btn icon @click="openDialog(item)">
              <v-icon color="white">mdi-arrow-left</v-icon>
            </v-btn>

            
          </v-list-item>
        </template>
      </v-virtual-scroll>
      <v-dialog v-model="dialog" >
              <v-card id="dialogCard">
                <v-card-title class="headline lighten-2" id="dialog_card_title"> </v-card-title>

                <profilePage v-bind:personId="dialogPerson.personId.toString()" />
                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="white" text @click="dialog = false" id="closeBtn">
                    סגור
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
    </v-card>
  </div>
</template>

<script>
import ProfilePage from "@/components/ProfilePage.vue";
export default {
  name: "InteList",
  components: {
    ProfilePage
  },
  props: {
    width: {
      default: 500
    },
    height: {
      default: 500
    },
    pplOfIntrest: {
      type: Array,
      required: true
    }
  },
  data: () => {
    return {
      dialog: false,
      show_wanted: false,
      dialogPerson: {
        personId: 456346,
        person: {}
      }
    };
  },
  computed: {
    pplList: function() {
      return this.pplOfIntrest.filter(
        person => (person.wanted && this.show_wanted) || (!person.wanted && !this.show_wanted)
      );
    }
  },
  methods: {
    full_name: function(firstName, lastName) {
      return `${firstName} ${lastName}`;
    },
    openDialog(person) {
      this.dialog = true;
      this.dialogPerson = person;
    }
  }
};
</script>
<style scoped>
div {
  font-family: Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif;
  color: white;
}
.intelTitle {
  background: #282828;
}
#list_card {
  background-color: rgba(124, 127, 141, 0.7);
  border-radius: 5%;
}
#list_item {
  background-color: #141d33;
}
#item_content {
  color: white;
}
#scroll {
  margin: 6px;
}
#title {
  background-color: #141d33;
}
#dialog_card_title {
  background-color: #141d33;
}
#dialogCard{
  background-color: rgb(124, 127, 141, 0.8) 
}
#closeBtn{
  background-color: #141d33;
  font-size: large;
}
</style>
