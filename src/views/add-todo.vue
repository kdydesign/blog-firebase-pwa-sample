<!--
  추가화면
-->

<template>
  <div class="q-pa-xl">
    <div class="row justify-center q-gutter-md q-pb-md">
      <q-input
        v-model="name"
        outlined
        label="Todo Name"
        class="col"
        @keydown.enter="addTodo"
      >
        <template #append>
          <q-btn
            round
            dense
            flat
            icon="add"
            @click="addTodo"
          />
        </template>
      </q-input>

      <q-btn
        label="저장"
        color="blue"
        @click="saveTodo"
      />

      <q-file
        ref="file"
        v-model="files"
        label="Pick files"
        style="display:none"
      />

      <q-btn
        color="blue"
        icon="image"
        @click="$refs.file.pickFiles()"
      />
    </div>

    <div class="col fit">
      <q-scroll-area
        style="width:100%;height:500px"
      >
        <div
          v-for="(c, i) in todoList"
          :key="i"
          class="row todo-item"
        >
          <q-checkbox
            v-model="c.check"
            :label="c.label"
            style="width:96%"
          />

          <q-btn
            flat
            dense
            color="grey-7"
            icon="delete"
            @click="removeTodo(i)"
          />
        </div>
      </q-scroll-area>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const todoStoreHelper = createNamespacedHelpers('todoStore')

export default {
  name: 'AddTodo',
  data () {
    return {
      files: void 0,
      name: void 0,
      check: false,
      todoList: []
    }
  },
  computed: {
    ...todoStoreHelper.mapState([
      'todo'
    ])
  },
  beforeMount () {
    if (this.todo) {
      this.todoList = this.todo
    }
  },
  methods: {
    addTodo () {
      if (this.name === void 0) {
        this.$q.notify({
          message: '입력되지않았습니다.',
          color: 'red',
          timeout: 2000
        })

        return
      }

      this.todoList.push({
        check: false,
        label: this.name
      })

      this.name = void 0
    },
    removeTodo (idx) {
      this.todoList.splice(idx, 1)
    },
    saveTodo () {
      this.$SAVE_STORAGE(this.files)
      this.$DB_SAVE(this.todoList, this.files.name)
    }
  }
}
</script>

<style lang="sass" scoped>
.todo-item
  display: flex
  flex-direction: row
  flex-wrap: nowrap

  &:hover
    transition: 0.5s
    background: rgba(245, 245, 245, 0.68)

.todo-item ::v-deep
  .q-checkbox__label
    text-overflow: ellipsis
    white-space: nowrap
    overflow: hidden
</style>
