<template>
  <v-card
    max-width="450"
    class="mx-auto"
  >
    <v-toolbar
      color="cyan"
      dark
      dense
      class="mt-2"
    >
      <v-toolbar-title>Category</v-toolbar-title>

    </v-toolbar>
    <v-list v-for="category in categories" :key="category.id" class="ml-2">
        <v-divider class="mb-1"></v-divider>
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title>
                    {{category.name}}
                </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-list>

  </v-card>
</template>


<script>
  export default {

      data(){
          return {
              categories:{}
          }
      },
      created(){
          axios.get('/api/category')
          .then(res => this.categories = res.data.data)
      }

  }
</script>

</script>

<style>

</style>
