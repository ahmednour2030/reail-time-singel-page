<template>
    <div>
        <v-card
        class="mx-auto"
        max-width="900"
         >
        <!-- <v-img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        height="200px"
        ></v-img> -->

        <v-card-title>
            <router-link :to="data.path">
              {{data.title}}
            </router-link>
        <v-spacer></v-spacer>
        <v-btn color="teal" dark> {{replyCount}} Replies</v-btn>
        </v-card-title>

        <v-card-subtitle class="grey--text">
          {{data.user}} said {{data.created_at}}
        </v-card-subtitle>

            <v-divider></v-divider>

            <v-card-text v-html="body">
                 <!-- {{data.body}} -->
            </v-card-text>
            <v-card-actions v-if="own">
                <v-spacer></v-spacer>

                <v-btn icon @click="edit">
                    <v-icon color="blue darken-2">edit</v-icon>
                </v-btn>

                <v-btn icon @click="destory">
                    <v-icon color="red darken-2" >delete</v-icon>
                </v-btn>

            </v-card-actions>
         </v-card>
          <br>
    </div>
</template>

<script>

export default {
    props:['data'],
    data(){
        return {
            own : User.own(this.data.user_id),
            replyCount:this.data.reply_count
        }
    },
    computed:{
        body(){
           return md.parse(this.data.body)
        },
    },

    created(){
        EventBus.$on('newReply',()=>{
            this.replyCount++
        });

        Echo.private('App.User.' + User.id())
            .notification((notification) => {
                this.replyCount++
            });

        EventBus.$on('deleteReply',()=>{
            this.replyCount--
        });

        Echo.channel('deleteReplyChannel')
        .listen('DeleteReplyEvent',(e) => {
            this.replyCount--
        })
    },
    methods:{
        destory(){
            axios.delete(`/api/question/${this.data.slug}`)
            .then(res = this.$router.push('/forum'))
            .catch(error = console.log(error.response.data))
        },
        edit(){
            EventBus.$emit('startEditing')
        }
    }

}
</script>

<style>

</style>
