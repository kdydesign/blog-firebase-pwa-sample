<!--
  untitle

  @since 2022-03-03
  @author kdydesign.kim
-->

<template>
  <div class="q-pa-xl">
    <div class="row justify-center q-gutter-md">
      <q-input
          v-model="name"
          outlined
          label="Todo Name"
          class="fit"
      >
        <template v-slot:append>
          <q-btn round dense flat icon="add"
                 @click="addTodo"/>
        </template>
      </q-input>

      <div class="col fit">
        <div v-for="(c, i) in todoList"
             :key="i"
             class="row todo-item">
          <q-checkbox v-model="c.check" :label="c.label" style="width:100%"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'add-todo',
  data () {
    return {
      name: void 0,
      check: false,
      todoList: []
    }
  },
  methods: {
    addTodo () {
      this.todoList.push({
        check: false,
        label: this.name
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.todo-item ::v-deep
  .q-checkbox__label
    text-overflow: ellipsis
    white-space: nowrap
    overflow: hidden
</style>
