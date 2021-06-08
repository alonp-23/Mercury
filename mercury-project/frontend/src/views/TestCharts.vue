<template>
  <div class="about">
    <iteList :pplOfIntrest="this.pplOfIntrest" />
    <pieChartCard
      :suspects="this.pplOfIntrest.filter(person => !person.wanted).length"
      :wanted="this.pplOfIntrest.filter(person => person.wanted).length"
    />
    <wantedChart :wantedNo="this.pplOfIntrest.filter(person => person.wanted).length" />
  </div>
</template>

<script>
import axios from "axios";
import pieChartCard from "@/components/pieChartCard.vue";
import iteList from "@/components/InteList.vue";
import wantedChart from "@/components/wantedChart.vue";
export default {
  name: "Home",
  components: {
    pieChartCard,
    iteList,
    wantedChart
  },
  methods: {},
  data: () => {
    return {
      pplOfIntrest: [],
      dialog: false,
      show_wanted: false
    };
  },
  created() {
    this.initPplArr();
  },
  methods: {
    initPplArr() {
      /*axios
        .get(`http://jsonplaceholder.typicode.com/posts`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.posts = response.data;
        })
        .catch(e => {
          this.errors.push(e);
        });
      */
      this.pplOfIntrest = [
        {
          personId: "32345678",
          person: {
            id: "32345678",
            firstName: "סיוון",
            lastName: "סתיו",
            phoneNumber: "0574442348",
            address: "רחוב ספציפי ביישוב נידח",
            personImageURL:
              "http://www.coogfans.com/uploads/db5902/original/3X/8/1/81173237ffa580ef710b0862fdddaac163274db1.jpeg"
          },
          started: "2021-06-08T00:00:00.000+00:00",
          wanted: false
        },
        {
          personId: "42345678",
          person: {
            id: "42345678",
            firstName: "עידו",
            lastName: "עדלייב",
            phoneNumber: "0538849546",
            address: "רחוב נידח בעיר מרכזית",
            personImageURL: "https://i.ytimg.com/vi/VpWsxqBkpcw/maxresdefault.jpg"
          },
          started: "2003-03-04T00:00:00.000+00:00",
          wanted: true
        },
        {
          personId: "22345678",
          person: {
            id: "22345678",
            firstName: "עדן",
            lastName: "קרסר",
            phoneNumber: "059242947",
            address: "כתובת אחרת אבל ספציפית באותה מידה",
            personImageURL:
              "https://pbs.twimg.com/profile_images/653700295395016708/WjGTnKGQ_400x400.png"
          },
          started: "2021-06-08T12:36:48.774+00:00",
          wanted: false
        }
      ];
    }
  }
};
</script>
