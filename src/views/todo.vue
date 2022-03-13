<!--
  untitle

  @since 2022-03-03
  @author kdydesign.kim
-->

<template>
  <div class="q-pa-xl">
    <q-btn
      label="추가"
      color="blue"
      class="q-ma-sm"
      @click="$router.push('/add-todo')"
    />

    <div class="row q-col-gutter-md">
      <q-intersection
        v-for="(key, idx) in todoList"
        :key="idx"
        transition="scale"
        class="q-col-4 example-item"
      >
        <todo-list :title="idx" />
      </q-intersection>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

import TodoList from '@/components/todo-list'

const todoStoreHelper = createNamespacedHelpers('todoStore')

export default {
  name: 'ToDo',
  components: { TodoList },
  data () {
    return {
      list: []
    }
  },
  computed: {
    ...todoStoreHelper.mapState([
      'todoList'
    ])
  },
  async beforeMount () {
    const list = await this.$DB_GET_LIST()

    this.saveTodoList(list)
  },
  methods: {
    ...todoStoreHelper.mapMutations([
      'saveTodoList'
    ])
  }
}
</script>

<style lang="sass" scoped>
.example-item
  height: 200px
  width: 200px
</style>
