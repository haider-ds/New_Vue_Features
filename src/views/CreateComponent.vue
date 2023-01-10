<template lang="">
  <div class="q-pl-lg">

  <ModalCreate :data="data" />

  </div>
</template>
<script>
import { onDeactivated, ref } from "vue";
import ModalCreate from "@/components/ModalCreate.vue";
export default {
  setup() {
    onDeactivated(() => {
      console.log('deactivated');
    });


    return {
      isOpen: ref(false),
      data: ref([]),

      openModal() {
        this.isOpen = true
      }

    };
  },
  components: {
    ModalCreate
  },
  methods: {

  },
  activated() {
    console.log("activated");
  },
  mounted() {

  }
};
</script>
<style lang=""></style>
