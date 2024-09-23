<script setup lang="ts">
import { Link } from '@inertiajs/vue3'

// eslint-disable-next-line vue/require-default-prop
defineProps({ user: Object })
</script>

<template>
    <div class="max-w-md  m-24 rounded overflow-hidden shadow-lg">
      <div class="px-6 py-4">
        <h2 class="font-bold text-2xl mb-2">Logined</h2>
        <p class="mt-3 mb-3 text-gray-600 text-base">
          {{ user.name }}でログインされています。
        </p>
        <Link href="/login-as-user" class="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded">
          FREE LOGIN
        </Link>
        <Link href="/logout" class="mt-4 bg-orange-500 text-white font-bold py-2 px-4 rounded">
          LOGOUT
        </Link>
      </div>
    </div>
</template>

<style>
.greeting {
    color: red;
    font-weight: bold;
}
</style>
