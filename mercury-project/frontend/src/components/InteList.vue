<template>
<div>
     <v-card max-width="500" class="mx-auto">
    <v-toolbar color="indigo" dark>
      <v-toolbar-title>ציר מודיעיני</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.title"
      >
        <v-list-item-content>
            <v-list-item-title v-text="item.name"></v-list-item-title>
          <v-list-item-subtitle v-text="item.id"></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar>
          <v-img :src="item.avatar"></v-img>
        </v-list-item-avatar>
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
      items: [{name: "ישראל ישראלי" , id: 456346, avatar: "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg", is_wanted: false},
      {name: "שאול שאולה" , id: 3452345, avatar: "https://www.pngarts.com/files/11/Avatar-Free-PNG-Image.png", is_wanted: false}]
    }
  }
};
</script>