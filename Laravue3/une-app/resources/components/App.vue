<script setup lang="ts">
import { ref, Ref } from "vue";

const count:Ref<number> = ref(0);
</script>

<template>
    <div class="max-w-md  m-24 rounded overflow-hidden shadow-lg">
      <img class="w-full" src="https://picsum.photos/400/300" alt="Blog Image">
      <div class="px-6 py-4">
        <h2 class="font-bold text-2xl mb-2">Tailwind</h2>
        <p class="mt-3 text-gray-600 text-base">
        texttexttexttexttexttexttexttexttexttext
        </p>
        <button class="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded">
            Read More
        </button>
        <p class="count">{{ count }}</p>
      </div>
    </div>
</template>

<style>
.greeting {
    color: red;
    font-weight: bold;
}
</style>
