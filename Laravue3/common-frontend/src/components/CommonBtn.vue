<template>
  <button
    class="common-button"
    :class="`btn-${btnSize}`"
  >
    {{ btnText }}
  </button>
</template>

<script setup lang="ts">
defineProps({
  btnText: {
    type: String,
    default: 'common'
  },
  btnSize: {
    type: String,
    default: 'medium',
    validator (value: string) {
      return ['large', 'medium', 'small'].includes(value);
    }
  },
});
</script>

<style scoped>
.common-button {
  background: orange;
  color: black;
  border: none;
  outline: none;
  font-weight: bold;
}
.btn-large {
  width: 800px;
}
.btn-medium {
  width: 400px;
}
.btn-small {
  width: 200px;
}
</style>
