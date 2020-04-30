<template>
    <v-card
    class="mx-auto mb-3"
    max-width="900">
        <vue-simplemde v-model="body" ref="markdownEditor" />
        <v-btn color="info" class="ma-2" @click="submit">Add Comment</v-btn>
    </v-card>
</template>

<script>
import VueSimplemde from 'vue-simplemde'

export default {
    props:['questionSlug'],
    data (){
        return {
            body:null
        }
    },
    methods:{
        submit(){
            axios.post(`/api/question/${this.questionSlug}/reply`,{body:this.body})
            .then(res => {
                this.body = ''
                EventBus.$emit('newReply',res.data.reply)
                window.scrollTo(0,0)
            })
        }
    }
}
</script>

<style>

</style>
