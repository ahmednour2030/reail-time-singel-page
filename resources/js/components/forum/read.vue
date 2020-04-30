<template>
    <div v-if="question">
        <edit-question
         v-if="editing"
        :data = question
        ></edit-question>

        <show-question
        v-else
        :data = question
        ></show-question>

        <replies :question="question"></replies>

        <new-reply v-if="loggedIn" :questionSlug="question.slug"></new-reply>
        <div v-else>
            <v-card
            class="mx-auto mb-3 pa-4"
            max-width="900"  >
                    <router-link  e to="/login">Login in to Reply</router-link>
            </v-card>
        </div>

    </div>
</template>

<script>
import ShowQuestion from './ShowQuestion'
import EditQuestion from './editQuestion'
import Replies from '../reply/replies'
import NewReply from '../reply/newReply'

export default {

    components:{
        ShowQuestion,
        EditQuestion,
        Replies,
        NewReply
    },
    data(){
        return {
            question:null,
            editing: false
        }
    },
    created(){
        this.listen()
        this.getQuestion()
    },
    computed:{
        loggedIn(){
            return User.loggedIn()
        }
    },
    methods: {
        listen(){
            EventBus.$on('startEditing', ()=>{
                this.editing = true
            })

            EventBus.$on('cancelEditing', ()=>{
                this.editing = false
            })
        },
        getQuestion(){
            axios.get(`/api/question/${this.$route.params.slug}`)
            .then(res => this.question = res.data.data)
        }
    }
}
</script>

<style>

</style>
