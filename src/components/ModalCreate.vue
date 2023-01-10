<template lang="">
    <q-btn color="secondary" class="q-mr-md" label="Create User" @click="openModal()" style="float:right"/>
    <br/>
    <br/>
    <br/>
   
<q-table title="" :loading="Userstore.loading"  :rows="Userstore.users" :columns="columns" color="primary" row-key="name"
    class="no-shadow q-mx-lg q-pt-md" hide-bottom />
 
    <Teleport to="#modal">
<CreatePage @closeModal="closeModal" :isOpen="isOpen"/>
      </Teleport>

</template>
<script>
// const getuser = async() => {
//   await new Promise(resolve => setTimeout(resolve,3000))
//   this.apiService(
//       `employees`,
//       "GET",
//       {}
//     )
//       .then((res) => {
//      console.log(res.data);
//      const row=res.data;
//       })
//       .finally(() => {
//         this.loading = false;
//       });
//       return row
// }
import { onDeactivated, ref } from "vue";
import { userStore } from "../store/User";
import CreatePage from "./CreatPage.vue"
export default {
  props: {
    data: {
      type: Array,
    }
  },
  setup() {
    // const rows= await getuser();
    //   onDeactivated(() => {
    //       console.log('deactivated');
    //   });
    const Userstore = userStore();
    return {
      isOpen: ref(false),
      name: ref(""),
      email: ref(""),
      Userstore,
      data: ref([]),
      address: ref(""),
      country: ref(""),
      columns: [
        {
          name: "name",
          required: true,
          label: "Name",
          align: "left",
          field: "name"
        },
        {
          name: "email",
          required: true,
          label: "Email",
          align: "left",
          field: "email"
        },
        {
          name: "address",
          align: "left",
          label: "Address",
          field: "address",
        },
        {
          name: "country",
          align: "left",
          label: "Country",
          field: "country",
        },



      ],

      openModal() {
        this.isOpen = true
      },

    };
  },
  methods: {
    getUser() {
      this.Userstore.getAllUsers();
    },
    closeModal()
    {
      this.isOpen = false;
      this.Userstore.getAllUsers();
    }
  },
  components: {
    CreatePage
  },
  activated() {
    console.log("activated");
  },
  mounted() {
    this.getUser();
  },
};
</script>
<style lang=""></style>
