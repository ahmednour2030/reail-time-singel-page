<template>
    <div>
        <vue-simplemde v-model="reply.reply" ref="markdownEditor" />

        <v-card-actions class="mb-6">
            <v-btn  dark small class="mb-3 info pa-2" @click="update">Save
                <!-- <v-icon color="green">Save</v-icon> -->
            </v-btn>

            <v-btn small class="mb-3" @click="cancel"> Cancel
                <!-- <v-icon color="black">Cancel</v-icon> -->
            </v-btn>
        </v-card-actions>
    </div>
</template>

<script>
import VueSimplemde from 'vue-simplemde'
export default {
    props:['reply'],
    methods:{

        cancel(){
            EventBus.$emit('cancelEditing');
        },
        update(){
            axios.patch(`/api/question/${this.reply.question_slug}/reply/${this.reply.id}`,{body:this.reply.reply})
            .then(res => this.cancel())
        }
    }
}
</script>

<style>

</style>
