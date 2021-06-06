<template>
    <md-list-item>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <md-avatar>
          <img src={{prson.img}} alt="People">
        </md-avatar>

        <div class="md-list-item-text">
          <span>{{person.name}}</span>
          <span>{{person.id}}</span>
        </div>

        <md-button class="md-icon-button md-list-action">
          <md-icon class="far fa-caret-square-down"></md-icon>
        </md-button>
      </md-list-item>
</template>

<script>
export default {
    props: {
    person: {
      type: Object,
      default: {name: "hello", id: "000", img: "https://img.freepik.com/free-vector/unicat-unicorn-cat-funny-isolated-white_337838-6.jpg?size=626&ext=jpg"},
    }
  }
}
</script>