<template lang="">
          <div class="modal-overlay" v-if="isOpen">
            <div class="modal">
                <q-tabs v-model="tab" dense class="text-grey" active-color="primary" indicator-color="primary" align="left"
            narrow-indicator>
            <q-tab name="basic_fields" no-caps label="Add Basic Data" />
            <q-tab name="additional_fields" no-caps label="Add Additional Data" />
          </q-tabs>
          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="basic_fields">
                <p>Create User</p>
    <div class="row " >
      <div class="col-6">
        <span>Name</span>
        <q-input  v-model="form.name" :dense="true" outlined color="primary" id="txtSearch"   placeholder="Type Name here"  />
      </div>
      <div class="col-6 q-pl-sm">
        <span>Email</span>
        <q-input type="text" outlined :dense="true"  v-model="form.email" placeholder="Type Email here" />
      </div>
      </div>
      <div class="row  q-pt-md">
      <div class="col-6">
        <span>Address</span>
        <q-input type="text" outlined  :dense="true" placeholder="Type Address here" v-model="form.address" />
      </div>
      <div class="col-6 q-pl-sm">
        <span>country</span>
        <q-input type="text" outlined  :dense="true" placeholder="Type Country Name here" v-model="form.country" />
      </div>
      
    </div>
  
              
            </q-tab-panel>

            <q-tab-panel name="additional_fields">
              <div class="row">
                
                <div class="col-6">
        <span>Date of Birth</span>
        <q-input  v-model="form.Dob" :dense="true" outlined color="primary" id="txtSearch"   placeholder="Type Name here"  />
      </div>
      <div class="col-6 q-pl-sm">
        <span>Phone</span>
        <q-input type="text" outlined :dense="true"  v-model="form.phone" placeholder="Type Email here" />
      </div>
      <div class="col-6 q-pt-md">
        <span>City</span>
        <q-input  v-model="form.city" :dense="true" outlined color="primary" id="txtSearch"   placeholder="Type Name here"  />
      </div>
      <div class="col-6 q-pl-sm q-pt-md">
        <span>State</span>
        <q-input type="text" outlined :dense="true"  v-model="form.state" placeholder="Type Email here" />
      </div>
      
              </div>
            </q-tab-panel>
          </q-tab-panels>
          <div class="row  q-pt-md"  >
    <div class="col-6">
      <q-btn color="secondary" class="floar-right" @click="addUser()" :loading="Userstore.loading" ripple>Create</q-btn>
      </div>
      </div>

    </div>
</div>
</template>
<script>
import { ref } from 'vue';
import { userStore } from "../store/User";
export default {
  props: ["isOpen"],
  setup() {
    const Userstore = userStore();
    return {
      form: ref({
        name: '',
        email: '',
        address: '',
        country: '',

      }),
      Userstore,
      loading: ref(false),
      // name: ref(""),
      // email: ref(""),
      // address: ref(""),
      // country: ref(""),
      tab: ref("basic_fields"),
    }
  },
  methods: {
    closeModal() {
        this.$emit("closeModal");
      },
    addUser()
    {
      try {
        this.Userstore.createUser(this.form);
        this.closeModal();
        }
        catch (error) { 
        console.log(error);
    }
    }
  },
}
</script>
<style scoped>
.modal-overlay {
  display: grid;
  place-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, .4)
}

.modal {
  position: relative;
  width: 800px;
  padding: 20px;
  margin: 20px;
  border-radius: 6px;
  background: #F9FAFB;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, .3),
    0 4px 6px -2px rgba(0, 0, 0, .05),
    0 2px 4px -1px rgba(0, 0, 0, .06)
}
</style>