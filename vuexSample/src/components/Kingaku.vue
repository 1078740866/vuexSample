<template>
  <div>
    <h1>This is a emit sample</h1>
    <component-a></component-a>
    <hr />
    <p>合計金額: {{ sum_kingaku }} 円</p>
  </div>
</template>

<script>
import ComponentA from './ComponentA.vue';
export default {
  components: { ComponentA },
  data() {
    return {
    };
  },
  computed: {
    sum_kingaku() {
      return this.$store.getters.sum_kingaku;
    },
  },
};
</script>
<style>
p {
  font-size: 40px;
}
</style>
