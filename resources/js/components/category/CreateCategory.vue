<template>
    <div>
        <v-alert v-if="errors" type="error">
           Please give category name.
        </v-alert>
        <v-card>
        <v-card-title>
            Create New Category
        </v-card-title>
        <v-divider></v-divider>
        <v-form @submit.prevent="submit">
            <div class="p-1 col-md-9 offset-md-1">

        <v-text-field
            v-model="form.name"
            type="text"
            label="Category Name"
            required
        ></v-text-field>
            </div>
            <v-divider></v-divider>
                <div class="text-center">
                    <v-btn
                    v-if="editSlug"
                    class="white--text my-3"
                    :disabled="disabled"
                    x-large
                    width="200"
                    color="pink"
                    type="submit"
                    >Update</v-btn>

                    <v-btn
                    v-else
                    class="white--text my-3"
                    :disabled="disabled"
                    x-large
                    width="200"
                    color="info"
                    type="submit"
                    >Create</v-btn>


                  <v-btn
                    x-large
                    color=""
                    type="submit"
                    width="200"
                    >Cancel</v-btn>
                </div>
            </v-form>
        </v-card>
        <v-card color="mt-4">
            <v-toolbar color="cyan" dark dense>
             <v-toolbar-title>Categories</v-toolbar-title>
            </v-toolbar>

            <v-list v-for="(category,index) in categories" :key="category.id"  class="ml-2">
                <v-divider class="mb-3"></v-divider>
                <v-list-titl>
                    <v-list-tile-actions>
                        <v-btn icon @click="edit(index)">
                            <v-icon color="blue darken-2">edit</v-icon>
                        </v-btn>
                    </v-list-tile-actions>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            {{category.name}}
                        </v-list-tile-title>
                    </v-list-tile-content>

                    <v-list-tile-actions class="mr-2" style="float:right">

                        <v-btn icon @click="destroy(category.slug)">
                            <v-icon color="red darken-2" >delete</v-icon>
                        </v-btn>

                    </v-list-tile-actions>
                </v-list-titl>
            </v-list>
        </v-card>

    </div>
</template>

<script>
export default {

    data(){
        return {
            form :{
                name:null,
            },
            categories:{},
            editSlug:null,
            errors:null
        }
    },
    created(){
        if (!User.admin()) {
            this.$router.push('/forum')
        }
        axios.get('/api/category')
        .then(res => this.categories = res.data.data)
    },
    methods:{
        submit(){
            this.editSlug ? this.update() : this.create()
        },
        create(){
            axios.post('/api/category',this.form)
            .then(res => {
                this.categories.unshift(res.data)
                this.form.name = null
            })
            .catch(error => this.errors = error.response.data.errors)
        },
        update(){
            axios.patch(`/api/category/${this.editSlug}`,this.form)
            .then(res => {
                this.categories.unshift(res.data)
                this.form.name = null
            })
        },
        destroy(slug, index){
            axios.delete(`/api/category/${slug}`)
            .then(res => this.categories.splice(index,1))
        },
        edit(index){
            this.form.name = this.categories[index].name
            this.editSlug = this.categories[index].slug
            this.categories.splice(index,1)
        }
    },

    computed:{
        disabled(){
            return !this.form.name
        }
    }

}
</script>

<style>

</style>
