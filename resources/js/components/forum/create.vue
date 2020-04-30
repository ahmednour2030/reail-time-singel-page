<template>
    <div>
        <v-card
        class="mx-auto"
        max-width=""
         >
        <v-card-title>
            Write Your Question
        </v-card-title>

        <v-card-subtitle class="grey--text">

        </v-card-subtitle>

            <v-divider></v-divider>

           <v-card-text>
           <v-form @submit.prevent="create">
                <div class="p-1 col-md-9 offset-md-1">
                    <span class="red--text" v-if="errors.title">{{errors.title[0]}}</span>
                    <v-text-field
                        v-model="form.title"
                        type="text"
                        label="Title"
                        required
                    ></v-text-field>
                    <span class="red--text" v-if="errors.category_id">{{errors.category_id[0]}}</span>
                    <v-select
                        :items="categories"
                        item-text="name"
                        item-value="id"
                        v-model="form.category_id"
                        label="Cateory"
                        autocomplete
                    ></v-select>
                    <span class="red--text" v-if="errors.body">{{errors.body[0]}}</span>

                    <vue-simplemde v-model="form.body" ref="markdownEditor" />

                </div>
                <v-divider></v-divider>
                <div class="my-2 col-md-9">
                    <v-btn
                    large
                    color="info"
                    type="submit"
                    :disabled="disabled"
                    >Create</v-btn>
                </div>
            </v-form>
            </v-card-text>
         </v-card>

    </div>
</template>

<script>
import VueSimplemde from 'vue-simplemde'
export default {
    components: {
      VueSimplemde
    },
    data(){
        return{
            form :{
                title:null,
                category_id:null,
                body:null
            },
             categories: {},
             errors: {}
        }
    },
    created(){
        axios.get('/api/category')
        .then(res => this.categories = res.data.data)
    },
    methods:{
        create(){
            axios.post('/api/question', this.form)
            .then(res => this.$router.push(res.data.path))
            .catch(error => this.errors = error.response.data.errors)
        }
    },
    computed:{
        disabled(){
            return !(this.form.title && this.form.body && this.form.category_id)
        }
    }

}
</script>

<style>

</style>
