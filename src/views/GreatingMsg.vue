<template lang="">
  <div>
    <h1>{{ props.greeting.msg }} {{ greeting.name }}</h1>
  </div>
</template>
<script>
import { onMounted } from "vue";
export default {
  name: "GreetingMsg",
  props: ["greeting"],

  setup(props) {
    onMounted(async () => {
      console.log("Greeting", props.greeting);
    });
    return {
      props,
    };
  },
};
</script>
<style lang=""></style>
