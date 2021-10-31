import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$api = axios.create({
    // Env variable not working
    baseURL: process.env.API_BASE_URL || 'http://localhost:4000',
    timeout: 1000,
})
