<template>
    <div class="page">
        <p>{{ counter }}</p>
        <button @click="counter += 1" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            click!
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            counter: 0,
        }
    },
}
</script>
