<template>
  <div class="about">
    <pieChartCard
      :suspects="this.pplOfIntrest.filter(person => !person.is_wanted).length"
      :wanted="this.pplOfIntrest.filter(person => person.is_wanted).length"
    />
    <wantedChart />
  </div>
</template>

<script>
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
      //api
      this.pplOfIntrest = [
        {
          first_name: "ישראל",
          last_name: "ישראלי",
          id: 456346,
          person_img_url: "https://ps.w.org/ultimate-member/assets/icon-256x256.png?rev=2143339",
          is_wanted: false,
          phone_number: 1234567,
          address: "דרדר 51, מצפה נשר"
        },
        {
          first_name: "שאול",
          last_name: "שאולה",
          id: 3452345,
          person_img_url: "https://www.pngarts.com/files/11/Avatar-Free-PNG-Image.png",
          is_wanted: true,
          phone_number: 143234,
          address: "דרדר 51, מצפה נשר"
        },
        {
          first_name: "דובים",
          last_name: "ביער",
          id: 3452345,
          person_img_url: "https://www.pngarts.com/files/11/Avatar-Free-PNG-Image.png",
          is_wanted: true,
          phone_number: 241324,
          address: "דרדר 51, מצפה נשר"
        }
      ];
    }
  }
};
</script>
