<script>
export default {
    data() {
        return {
            greeting: "Hello World!",
        };
    },
};
</script>

<template>
  <div>
    <p class="greeting">{{ greeting }}</p>
  </div>
</template>

<style>
.greeting {
    color: red;
    font-weight: bold;
}
</style>
