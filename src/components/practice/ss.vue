<template>
  <div class="category-container">
    <div class="category">
      <span
        class="category-tag"
        :class="{ active: id === index }"
        v-for="(list, index) in tags"
        @click="trigger(index, list)"
        :key="index"
      >
        {{ list.name }}
      </span>

      <div>
        <span
          class="category-sort"
          :class="{ active_sort: sort_id === index }"
          v-for="(list, index) in tags2"
          @click="trigger_sort(index, list)"
          :key="index"
        >
          {{ list.name }}
        </span>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: [
        { name: 'MCQ' }
      ],
      tags2: [{ name: 'Week 1' }, { name: 'Week 2' }, { name: 'Week 3' }, { name: 'Week 4' }],
      id: 0,
      sort_id: 0,
      sort_id2: 0,
    }
  },
  methods: {
    trigger(index, list) {
      this.id = index
      this.$emit('my-filter', list.name)
    },
    trigger_sort(index, list) {
      this.sort_id = index
      this.$emit('my-sort', list.name)
    },

    trigger_sort2(index, list) {
      this.sort_id2 = index
      this.$emit('my-sort2', list.name)
    },
  },
}
</script>

<style lang="scss" scoped>
.category-container {
  background-color: #D8D8D8;
  width: 100%;
  box-shadow: 0 2px 8px 0 rgba(7, 17, 27, 0.1);
  .category {
    width: 1200px;
    margin: auto;
    padding: 40px 0;
  }
}
.category-tag {
  display: inline-block;
  cursor: pointer;
  margin-right: 48px;
  font-size: 16px;
  color: #07111b;
  line-height: 40px;
  height: 40px;
  font-weight: bold;
}
.active {
  color: #c80;
  border-bottom: 3px solid #c80;
}
.category-sort {
  margin-top: 32px;
  display: inline-block;
  padding: 0 12px;
  font-size: 12px;
  line-height: 30px;
  color: #4d555d;
  height: 30px;
  margin-right: 12px;
  border-radius: 12px;
}
.active_sort {
  background-color: #545c63;
  color: #fff;
}

</style>
