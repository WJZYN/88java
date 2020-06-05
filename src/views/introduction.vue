<template>
  <div class="introduction">
    <v-info></v-info>
    <v-book></v-book>
  </div>
</template>

<script>
import VInfo from '@/components/introduction/info.vue'
import VBook from '@/components/introduction/book.vue'

export default {
  components: {
    VInfo,
    VBook,
  },
}
</script>
