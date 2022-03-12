<!--
  untitle

  @since 2022-03-03
  @author kdydesign.kim
-->

<template>
  <div class="q-pa-xl">
    <div class="row q-col-gutter-md">
      <q-intersection
        v-for="index in 6"
        :key="index"
        transition="scale"
        class="q-col-4 example-item"
      >
        <todo-list />
      </q-intersection>
    </div>
  </div>
</template>

<script>
import TodoList from '@/components/todo-list'

export default {
  name: 'ToDo',
  components: { TodoList }
}
</script>

<style lang="sass" scoped>
.example-item
  height: 200px
  width: 200px
</style>
