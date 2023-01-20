<template>
    <div class="w-[320px] h-[650px] rounded-3xl bg-white">
        <img class="absolute w-[320px] h-[650px] rounded-3xl z-0" src='../assets/landing.jpg' alt="">
        <div class="z-2 relative text-white m-4 flex justify-between">
            <button id="menu" v-on:click="showMenu()">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-8 h-8  cursor-pointer">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
           <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6  cursor-pointer">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
           </button>
        </div>
            <ul class="z-3 ml-4 cursor-pointer text-white relative" :class="{ hidden: showMobileMenu}" >
            <li class="p-1 hover:text-red-600" v-for="item in links" :key="item.name">
                <a :href=links.link > {{ item.name }}</a>
            </li>
         </ul>

        <div class="z-3 mt-12 relative flex flex-col justify-center items-center">
            <h1 class=" text-2xl tracking-wide font-bold text-white">Discover The World</h1>
            <h2 class="text-white w-2/3 text-center mb-6 mt-4 opacity-80">We are here to help you to discover the world
                easily</h2>
            <button class="p-1 pr-6 pl-6 rounded-lg text-sm font-medium bg-red-500 text-white hover:bg-red-600">Let's
                Go</button>
        </div>
         
    </div>
</template>


<script>



export default {
    name: 'LandingPage',

   

    data(){
        return{
            showMobileMenu: true ,
            showMobileProfile: true,
            links: [
            {name : "Home", link : "#"},
            {name : "About", link : "#"},
            {name : "Services", link : "#"},
            {name : "Contact", link : "#"},
        ],
        
        }
    },
   methods:{
    showMenu(){
        this.showMobileMenu = !this.showMobileMenu;
    },
    
   }

}
</script>
