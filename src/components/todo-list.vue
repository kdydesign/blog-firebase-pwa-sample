<!--
  목록
-->

<template>
  <q-card
    class="q-ma-sm"
    @click="getTodo"
  >
    <q-img
      :src="thumb"
      :ratio="4/3"
    />
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
  data () {
    return {
      thumb: void 0
    }
  },
  async beforeMount () {
    const result = await this.$DB_GET(this.title)

    console.log('-. ', result)
    this.thumb = await this.$GET_STORAGE(result.thumb)
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
