<template lang="">
  <div>
    <q-btn class="q-pl-sm" @click="show = !show">Toogle</q-btn>
    <Transition>
      <Greating-Msg v-if="show" :greeting="string" />
    </Transition>
  </div>
</template>
<script>
import GreatingMsg from "../views/GreatingMsg.vue";
import { reactive, ref } from "vue";
export default {
  components: {
    GreatingMsg,
  },
  setup() {
    //we can define data attribute with const
    //reactive same like ref but it handle with object type

    const string = reactive({ msg: "hello", name: "Haider" });
    setTimeout(() => {
      (string.msg = "hy"), (string.name = "Ibrahim");
    }, 3000);
    return {
      string,
      show: ref(false),
    };
  },
};
</script>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
