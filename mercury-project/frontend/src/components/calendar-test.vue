<template>
  <v-calendar
    :attributes='attributes'
    />
</template>

<script>
    export default {
      data() {
        const todos = [
          {
            description: 'Take Noah to basketball practice.',
            isComplete: false,
            dates: { weekdays: 6 }, // Every Friday
            color: 'red',
          },
        ];
        return {
          incId: todos.length,
          todos,
        };
      },
      computed: {
        attributes() {
          return [
            // Attributes for todos
            ...this.todos.map(todo => ({
              dates: todo.dates,
              dot: {
                color: todo.color,
                class: todo.isComplete ? 'opacity-75' : '',
              },
              popover: {
                label: todo.description,
              },
              customData: todo,
            })),
          ];
        },
      },
    };
</script>

<style scoped>

</style>