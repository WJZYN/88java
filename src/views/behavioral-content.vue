<template>
  <div>
    <v-header :data="learning"></v-header>
    <v-body :data="learning"></v-body>
  </div>
</template>

<script>
import VHeader from '@/components/behavioral-content/header.vue'
import VBody from '@/components/behavioral-content/body.vue'

export default {
  components: {
    VHeader,
    VBody,
  },
  computed: {
    learning() {
      return this.$store.state.targetLearning
    },
  },
  mounted() {
    if (JSON.stringify(this.$store.state.targetLearning) == '{}') {
      this.$store.state.targetLearning = JSON.parse(window.localStorage.getItem('toTargetLearning'))
    }
  },
}
</script>
