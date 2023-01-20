<template>
    <div class=" absolute w-[320px] h-[650px] rounded-3xl bg-white overflow-y-scroll no-scrollbar">
        <div class="flex justify-between mt-6 mr-6 ml-6">
            <div class="flex items-center">
                <img class="pr-3" src="../assets/pic.png" alt="" />
                <h1 class="text-lg font-bold "><span class="text-red-500">Hi,</span>Smith!</h1>
            </div>
            <button v-on:click="showMenu()">
                <ion-icon class="text-3xl cursor-pointer"  name="menu-outline"></ion-icon>
            </button>
        </div>
        <div class="  bg-red-400 w-full  mt-2 text-white">
            <ul class="" :class="{ hidden: showMobileMenu}">
                <li class="mb-3 py-1 cursor-pointer hover:bg-white hover:text-red-400"  v-for="item in menu" :key="item.name">
                    <a class="p-6" :href=menu.link> {{ item.name }}</a>
                </li>
            </ul>
        </div>
        <div class=" p-4 flex overflow-x-scroll no-scrollbar">
            <ul class="flex opacity-70  ">
                <li  class="p-1 hover:text-red-400 cursor-pointer"  v-for="item in links" :key="item.name">
                    <a  :href=links.link> {{ item.name }}</a>
                </li>
            </ul>
        </div>
        <div class="flex items-center bg-gray-100 border-2 border-gray-100 rounded-lg py-1 px-2 mr-3 ml-3 text-gray-700 leading-tight">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-4 h-4 mr-2 opacity-50">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>

            <input class="appearance-none outline-none bg-gray-100" type="text" placeholder="Search">
        </div>
        <div class="bg-red-20 flex justify-center">
            <div class="bg-red-50 p-3 rounded-md m-4 hover:bg-red-400 cursor-pointer "><font-awesome-icon class="w-6 h-6 text-red-400 hover:text-white" icon="fa-solid fa-house" /></div>
            <div class="bg-red-50 p-3 rounded-md m-4 hover:bg-red-400 cursor-pointer"><font-awesome-icon class="w-6 h-6 text-red-400  hover:text-white" icon="fa-solid fa-utensils" /></div>
            <div class="bg-red-50 p-3 rounded-md m-4 hover:bg-red-400 cursor-pointer"><font-awesome-icon class="w-6 h-6 text-red-400  hover:text-white" icon="fa-solid fa-plane-departure" /></div>
            <div class="bg-red-50 p-3 rounded-md m-4 hover:bg-red-400 cursor-pointer"><font-awesome-icon class="w-6 h-6 text-red-400  hover:text-white" icon="fa-solid fa-calendar-days" /></div>
        </div>
        <div>
            <h1 class="font-bold opacity-90 text-lg ml-4">Best Experiences</h1>
        </div>
        <div class="flex ml-4 mt-6 overflow-x-scroll  no-scrollbar">
            <BestExp  name="Awesome Place"  />
            <BestExp class="left-[20px]" name="Awesome Place"/>
            <BestExp class="left-10" name="Awesome Place" />
        </div>
        <div class="mb-10">
            <Card/>
        <Card/>
        </div>
        <div class="relative">
            <NavBar/>
        </div>
    </div>
    
</template>

<script>

import BestExp from './BestExp.vue';
import NavBar from './NavBar.vue';
import Card from './Card.vue';

export default {
    name: "HomePage",

    components:{
        BestExp, NavBar, Card
    },

    data() {
        return {
            showMobileMenu: true,
            links: [
                { name: "Popular", link: "#" },
                { name: "Feature", link: "#" },
                { name: "Other", link: "#" },
                { name: "Asia", link: "#" },
                { name: "Europe", link: "#" },
                { name: "Africa", link: "#" },
                { name: "America", link: "#" },
            ],
            menu: [
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
