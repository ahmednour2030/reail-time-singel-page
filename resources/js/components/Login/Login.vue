<template>
    <div class="p-1 col-md-6 offset-md-3 ">
        <v-card
        class="mx-auto p-12 m-12"
        max-width="600"
    >
            <v-card-title>
                Login
            </v-card-title>
        <v-divider></v-divider>
        <v-form @submit.prevent="login">
            <div class="p-1 col-md-9 offset-md-1">

                <v-text-field
                    v-model="form.email"
                    type="email"
                    label="E-mail"
                    required
                ></v-text-field>

                <v-text-field
                    v-model="form.password"
                    type="password"
                    label="password"
                    required
                ></v-text-field>

            </div>
               <v-divider></v-divider>
                <div class="text-center">
                    <v-btn
                    class="white--text my-3"
                    x-large
                    width="300"
                    color="info"
                    type="submit"
                    >Login</v-btn>
                </div>
            </v-form>
        </v-card>
    </div>
</template>

<script>
export default {
    data(){
        return {
            form: {
                email:null,
                password:null
            }
        }
    },
    created(){
        if(User.loggedIn()){
            this.$router.push({name:'forum'})
        }
    },
    methods:{
        login(){
            User.login(this.form)
        }
    }
};
</script>

<style></style>
