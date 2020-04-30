<template>
    <div class="p-1 col-md-6 offset-md-3 ">
        <v-card
        class="mx-auto p-12 m-12"
        max-width="600"
    >
            <v-card-title>
                Signup
            </v-card-title>
        <v-divider></v-divider>
        <v-form @submit.prevent="signup">
            <div class="p-1 col-md-9 offset-md-1">

                <v-text-field
                    v-model="form.name"
                    type="text"
                    label="Name"
                    required
                ></v-text-field>
                <span class="red--text" v-if="errors.name">{{errors.name[0]}}</span>

                <v-text-field
                    v-model="form.email"
                    type="email"
                    label="E-mail"
                    required
                ></v-text-field>
                <span class="red--text" v-if="errors.email">{{errors.email[0]}}</span>

                <v-text-field
                    v-model="form.password"
                    type="password"
                    label="Password"
                    required
                ></v-text-field>
                <span class="red--text" v-if="errors.password">{{errors.password[0]}}</span>

                <v-text-field
                    v-model="form.password_confirmation"
                    type="password"
                    label="Password_confirmation"
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
                    >Signup</v-btn>
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
                name:null,
                email:null,
                password:null,
                password_confirmation:null
            },
            errors:{}
        }
    },
    created(){
        if(User.loggedIn()){
            this.$router.push({name:'forum'})
        }
    },
    methods:{
        signup(){
            axios.post('/api/auth/signup', this.form)
            .then(res =>{
                User.responseAfterLogin(res)
                this.$router.push({name:'forum'})
            })
            .catch(error => this.errors = error.response.data.errors)
        }
    }
};
</script>

<style></style>
