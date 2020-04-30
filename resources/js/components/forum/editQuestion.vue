<template>
    <div>
        <v-card
        class="mx-auto"
        max-width=""
         >

        <v-card-title>
            Update Your Question
        </v-card-title>

        <v-divider></v-divider>

           <v-card-text>
           <v-form @submit.prevent="update">
                <div class="p-1 col-md-9 offset-md-1">

                    <v-text-field
                        v-model="form.title"
                        type="text"
                        label="Title"
                        required
                    ></v-text-field>

                    <vue-simplemde v-model="form.body" ref="markdownEditor" />

                </div>

                <v-divider></v-divider>

                <v-card-actions>

                    <v-btn
                    class="white--text my-3"
                    large
                    color="info"
                    type="submit"
                    width="100"
                    >Save</v-btn>

                    <v-btn
                    @click="cancel"
                    large
                    color=""
                    type="submit"
                    width="100"
                    >Cancel</v-btn>


                </v-card-actions>
            </v-form>
            </v-card-text>
         </v-card>

    </div>
</template>

<script>
import VueSimplemde from 'vue-simplemde'
export default {
    props :['data'],
    components: {
      VueSimplemde
    },
    data(){
        return{
            form :{
                title:null,
                body:null
            },
            //  categories: {},
            //  errors: {}
        }
    },
    created() {
        this.form = this.data
    },
    // update(){
    //     axios.get('/api/category')
    //     .then(res => this.categories = res.data.data)
    //},
    methods:{
        update(){
            axios.patch(`/api/question/${this.form.slug}`, this.form)
            .then(res => this.cancel())
            .catch(error => this.errors = error.response.data.error )
        },
        cancel(){
            EventBus.$emit('cancelEditing')
        }
    }

}
</script>

<style>

</style>
