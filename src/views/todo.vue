<!--
  untitle

  @since 2022-03-03
  @author kdydesign.kim
-->

<template>
  <div class="q-pa-xl">
    <div class="row justify-center q-gutter-md">
      <q-intersection
        v-for="index in 60"
        :key="index"
        transition="scale"
        class="example-item"
      >
        <todo-list/>
      </q-intersection>
    </div>
  </div>
</template>

<script>
import TodoList from '@/components/todo-list'

export default {
  name: 'to-do',
  components: { TodoList }
}
</script>

<style lang="sass" scoped>
.example-item
  height: 230px
  width: 200px
</style>
