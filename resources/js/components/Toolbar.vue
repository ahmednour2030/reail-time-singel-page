<template>
    <v-card color="grey lighten-4" flat height="55px" tile>

        <v-toolbar dense color="indigo" dark>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title >
            <router-link class="white--text" to="/">Bitfumes</router-link>
        </v-toolbar-title>

            <v-spacer></v-spacer>
            <app-notificaion v-if="loggedIn"></app-notificaion>

            <router-link
            v-for="item in items"
            :key="item.title"
            :to="item.to"
            v-if="item.show"
           >
                <v-btn text large>{{item.title}}</v-btn>
            </router-link>

        </v-toolbar>

    </v-card>
</template>

<script>
import AppNotificaion from './AppNotification'
export default {
    components:{
        AppNotificaion
    },
    data(){
        return {
            loggedIn: User.loggedIn(),
            items:[
                {title: 'Forum', to:'/forum',show:true},
                {title: 'Ask Question', to:'/ask',show: User.loggedIn()},
                {title: 'Category', to:'/category',show: User.admin()},
                {title: 'Login', to:'/login',show: !User.loggedIn()},
                {title: 'Singup', to:'/signup',show: !User.loggedIn()},
                {title: 'Logout', to:'/logout',show: User.loggedIn()},
            ]
        }
    },
    created(){
        EventBus.$on('logout', ()=> {
            User.logout()
        })
    }
};
</script>

<style></style>
