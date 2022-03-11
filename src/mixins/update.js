export default {
  data () {
    return {
      // refresh variables
      refreshing: false,
      registration: null,
      updateExists: false,
      deferredPrompt: null
    }
  },

  created () {
    // Listen for our custom event from the SW registration
    document.addEventListener('swUpdated', this.updateAvailable, { once: true })

    // Prevent multiple refreshes
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (this.refreshing) return
      this.refreshing = true
      // Here the actual reload of the page occurs
      window.location.reload()
    })
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      // Stash the event so it can be triggered later.
      this.deferredPrompt = e
    })
  },

  methods: {
    async dismiss () {
      this.deferredPrompt = null
    },
    async install () {
      this.deferredPrompt.prompt()
    },
    // Store the SW registration so we can send it a message
    // We use `updateExists` to control whatever alert, toast, dialog, etc we want to use
    // To alert the user there is an update they need to refresh for
    updateAvailable (event) {
      this.registration = event.detail
      this.updateExists = true

      this.$q.notify({
        message: '업데이트가 있습니다.',
        color: 'red',
        timeout: 0,
        actions: [
          {
            label: 'Update',
            color: 'white',
            handler: () => {
              this.refreshApp()
            }
          }
        ]
      })
    },

    // Called when the user accepts the update
    refreshApp () {
      this.updateExists = false
      // Make sure we only send a 'skip waiting' message if the SW is waiting
      if (!this.registration || !this.registration.waiting) return
      // send message to SW to skip the waiting and activate the new SW
      this.registration.waiting.postMessage({ type: 'SKIP_WAITING' })
    }
  }
}
