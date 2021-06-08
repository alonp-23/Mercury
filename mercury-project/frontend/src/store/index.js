import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pplOfIntrest: [],
    suspectNo: 0,
    wantedNo: 0,
  },
  mutations: {
    initPplArr(state) {
      //init data from server
      const pplArray = [
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
      state.pplOfIntrest=pplArray;
      state.suspectNo=pplArray.filter(person => person.is_wanted).length;
      state.wantedNo=pplArray.filter(person => !person.is_wanted).length;
    },
    getPplArr(state) {
      return state.pplOfIntrest;
    }
  },
  actions: {},
  modules: {}
});
