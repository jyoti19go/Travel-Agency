import { createApp } from 'vue'
import App from './App.vue'
import router from './routes';


import './assets/style.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCalendarDays, faGear, faHeart, faHouse, faMagnifyingGlass, faPlaneDeparture, faStar, faUserSecret, faUtensils } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret, faHouse, faUtensils, faPlaneDeparture, faCalendarDays, faStar, faGear, faMagnifyingGlass, faHeart)

createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
