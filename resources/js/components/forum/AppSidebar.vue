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
        <v-divider class="mb-3"></v-divider>
        <v-list-tile>
            <v-list-tile-content>
                <v-list-tile-title>
                    {{category.name}}
                </v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
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
