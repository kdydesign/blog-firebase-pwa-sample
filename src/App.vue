<template>
  <div id="app">
    <layout-view />
  </div>
</template>

<script>
import UpdateMixins from '@/mixins/update'

import LayoutView from '@/layouts/layout'

export default {
  name: 'App',
  mixins: [UpdateMixins],
  components: {
    LayoutView
  }
}
</script>

<style>
</style>
