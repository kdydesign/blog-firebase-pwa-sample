<!--
  untitle

  @since 2022-03-03
  @author kdydesign.kim
-->

<template>
  <q-card
    class="q-ma-sm"
    @click="getTodo"
  >
    <img src="https://cdn.quasar.dev/img/mountains.jpg">

    <q-card-section>
      <div class="text-subtitle2">
        {{ title }}
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const todoStoreHelper = createNamespacedHelpers('todoStore')

export default {
  name: 'TodoList',
  props: ['title'],
  beforeMount () {
  },
  methods: {
    ...todoStoreHelper.mapMutations([
      'getTodoStore'
    ]),
    async getTodo () {
      const result = await this.$DB_GET(this.title)
      console.log(result)
      this.getTodoStore(result)
      this.$router.push('/add-todo')
    }
  }
}
</script>
