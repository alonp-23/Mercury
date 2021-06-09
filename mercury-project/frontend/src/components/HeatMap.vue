<template>
  <div class="hello">
    <line-chart
      :chart-data="{
        labels,
        datasets: [
          {
            data,
            label,
            borderColor,
            fill
          }
        ]
      }"
    ></line-chart>
  </div>
</template>

<script>
import LineChart from "./LineChart.js";
import api from "../api/api";

export default {
  name: "HeatMap",
  components: {
    LineChart
  },
  data() {
    return {
      currentMonth: 0,
      labels: [],
      label: "כמות פוסטים",
      borderColor: "#3e95cd",
      fill: false,
      posts: [
        {
          date: "1",
          postCount: 1
        },
        {
          date: "2",
          postCount: 2
        },
        {
          date: "3",
          postCount: 5
        },
        {
          date: "1",
          postCount: 3
        },
        {
          date: "1",
          postCount: 9
        },
        {
          date: "1",
          postCount: 12
        },
        {
          date: "1",
          postCount: 15
        },
        {
          date: "1",
          postCount: 18
        },
        {
          date: "1",
          postCount: 26
        },
        {
          date: "1",
          postCount: 20
        },
        {
          date: "1",
          postCount: 20
        },
        {
          date: "1",
          postCount: 5
        },
        {
          date: "1",
          postCount: 7
        },
        {
          date: "1",
          postCount: 0
        },
        {
          date: "1",
          postCount: 0
        },
        {
          date: "1",
          postCount: 20
        },
        {
          date: "1",
          postCount: 10
        },
        {
          date: "1",
          postCount: 5
        },
        {
          date: "1",
          postCount: 7
        },

        {
          date: "1",
          postCount: 10
        },
        {
          date: "1",
          postCount: 13
        },
        {
          date: "1",
          postCount: 9
        },
        {
          date: "1",
          postCount: 5
        },
        {
          date: "1",
          postCount: 7
        },
        {
          date: "1",
          postCount: 8
        },
        {
          date: "1",
          postCount: 5
        },
        {
          date: "1",
          postCount: 3
        },
        {
          date: "1",
          postCount: 2
        }
      ]
    };
  },

  props: {
    personId: {
      type: String,
      required: true
    }
  },

  computed: {
    data() {
      return this.posts.map(post => post.postCount);
    }
  },

  created() {
    this.currentMonth = new Date().getMonth() + 1;
    this.currentDay = new Date().getDay() + 1;
    this.lables = [];
    for (let i = 0; i < 7; i++) {
      if (currentDay - i > 1) labels.push(`${currentDay - i}`);
      else labels.push(`${getDate(currentMonth) + currentDay - i}`);
    }
    this.labals.map(day => `${day}.${this.currentMonth}`);
  },

  async mounted() {
    const response = await api.lists().postsAmount(this.personId);
    const data = response.data;
    this.posts = data;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
