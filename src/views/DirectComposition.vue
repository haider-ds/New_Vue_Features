<template>
  <div class="about">
    <h1>{{ returnedValue.count }}</h1>
    <button @click="returnedValue.increment">click</button>
  </div>
</template>
<script>
import counter from "../composables/counter";
export default {
  setup() {
    // reactive state
    const returnedValue = counter(10);

    return {
      returnedValue,
    };
  },
};
</script>
