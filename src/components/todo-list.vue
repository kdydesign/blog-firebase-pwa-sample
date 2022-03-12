<!--
  untitle

  @since 2022-03-03
  @author kdydesign.kim
-->

<template>
  <q-card class="q-ma-sm"
          @click="test">
    <img src="https://cdn.quasar.dev/img/mountains.jpg">

    <q-card-section>
      <div class="text-h6">Card</div>
      <div class="text-subtitle2">by John Doe</div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'todo-list',
  methods: {
    test () {
      this.$router.push('/add-todo')
    }
  }
}
</script>
