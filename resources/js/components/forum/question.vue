<template>
    <div>
        <v-card
        class="mx-auto mt-2"
        max-width=""
         >
        <!-- <v-img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        height="200px"
        ></v-img> -->

        <v-card-title>
            <router-link :to="data.path">
              {{data.title}}
            </router-link>
        </v-card-title>

        <v-card-subtitle class="grey--text">
        {{data.user}} said {{data.created_at}}
        </v-card-subtitle>

            <v-divider></v-divider>

            <v-card-text>
            {{data.body}}
            </v-card-text>
         </v-card>
          <!-- <br> -->
    </div>
</template>

<script>
export default {
    props:['data']
}
</script>

<style>

</style>
