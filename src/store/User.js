import { defineStore } from "pinia";
const baseUrls = process.env.BACKEND_URL;
import axios from "axios";
export const userStore = defineStore("user", {
    state: () => ({
        users: [],
        name: null,
        loading: false,
        email: null,
        address: null,
        country: null,
    }),
    actions: {
        async createUser(form) {
            console.log(form);
            this.loading = true;
            await axios.post(`${baseUrls}/employees`, {
                name: form.name,
                email: form.email,
                adddress: form.address,
                country: form.country,

            })
                .then((response) => {
                    console.log(response);

                    this.loading = false;
                      this.$router.push('/data') 
                }, (err) => {
                    console.log(err);
                    this.loading = false;
                    console.log(err.response.data, "user error");
                });

        },

        async getAllUsers() {
            await axios.get(`${baseUrls}/employees`).then((res) => {
                console.log(res);
                this.users = res.data;
                this.loading = false;
            })

        },


    },
    getters: {

    }

}
);
