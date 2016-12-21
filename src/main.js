import Vue from 'vue'
import ApolloClient, { createNetworkInterface, addTypename } from 'apollo-client'
import VueApollo from 'vue-apollo'
import { VueRouter, router } from './router'

import './styles.js'

// Apollo GraphQL Connection
const networkInterface = createNetworkInterface({
    uri: 'http://45.55.42.190:3030/api/graphql',
    transportBatching: true
})

const apolloClient = new ApolloClient({
    networkInterface,
    queryTransformer: addTypename
})

Vue.use(VueApollo, { apolloClient })
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
    router,
    el: '#app',
    template: '<router-view></router-view>'
})
