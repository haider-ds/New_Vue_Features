<template>
  <div class="about">
    <h1>{{ count }}</h1>
    <button @click="increment()">click</button>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";

// reactive state
const count = ref(0);

// functions that mutate state and trigger updates
function increment() {
  count.value++;
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`);
});
</script>
