<template>
    <div class="w-[320px] h-[650px] rounded-3xl bg-white overflow-hidden no-scrollbar fixed">
        <div class="fixed w-[320px] h-12">
            <img class="rounded-t-3xl" src="../assets/singlepage.jpg" alt="">
        </div>
        <div class="flex fixed">
            <h1 class="relative text-white font-bold top-[170px] ml-4 ">Grimentz Switzerland</h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 rounded-lg shadow-2xl ml-16 top-48 relative fill-red-400 text-red-400 bg-white p-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
        </div>
        <div class="relative  top-[220px]">
            <h1 class="text-sm ml-4 mb-2 font-bold text-gray-400 tracking-wide"><span class="text-red-500">$99</span>/Day</h1>
        <h1 class=" text-black font-bold ml-4 ">Grimentz Switzerland</h1>
        <p class="text-gray-500 ml-4 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

       <div class="body h-40 w-40 mt-6">
        <div class="slide-container ">
        <span class="slider-span" id="slider-span1"></span>
        <span class="slider-span" id="slider-span2"></span>
        <span class="slider-span" id="slider-span3"></span>

        <div class="image-slider">
            <div class="slides-div" id="slide-1">
                <img src="../assets/single.jpg" alt="" class="img" id="img1">
                <a href="#slider-span1" class="button" id="button-1"></a>
            </div>
            <div class="slides-div" id="slide-2">
                <img src="../assets/singlepage.jpg" alt="" class="img" id="img2">
                <a href="#slider-span2" class="button" id="button-2"></a>
            </div>
            <div class="slides-div" id="slide-3">
                <img src="../assets/landing.jpg" alt="" class="img" id="img3">
                <a href="#slider-span3" class="button" id="button-3"></a>
            </div>
        </div>
    </div>
       </div>
           <div class="flex justify-center items-center cursor-pointer">
                <button class="text-white font-bold rounded-md bg-red-500 pt-2 pb-2 pr-20 pl-20 mt-16 cursor-pointer hover:bg-red-900 " >Book Trip now</button>
           </div>
        </div>
    </div>
</template>
<script>



export default {
    
}
</script>

<style scoped>
        .body{
            display: flex;
            align-items: center;
           
           
        }

        .slide-container {
            width: 100px;
            height:100px;
            display: flex;
            align-items: center;
            overflow: hidden;
        }

        .image-slider{
            width: 100%;
            position: absolute;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 1s;
        }
        
        .slides-div {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .img{
            position: relative;
            width: 180px;
            height: 150px;
            transition: 0.5s;
        }

        .button {
            position: absolute;
            width: 180px;
            height: 150px;
            transition: 0.5s;
            /* background-color: rgba(67, 67, 151, 0.2); */
        }

        #slider-span1:target ~ .image-slider #img1,
        #slider-span1:target ~.image-slider #button-1{
            width:240px;
            height: 200px;
            background-color: transparent;
        }
        #slider-span2:target ~ .image-slider #img2,
        #slider-span2:target ~.image-slider #button-2{
            width:240px;
            height: 200px;
            background-color: transparent;
        }
        #slider-span3:target ~ .image-slider #img3,
        #slider-span3:target ~.image-slider #button-3{
            width:240px;
            height: 200px;
            background-color: transparent;
        }

        #slider-span1:target ~.image-slider{
            left:10%;
        }
        #slider-span2:target ~.image-slider{
            left:0%;
        }
        #slider-span3:target ~.image-slider{
            left:-10%;
        }
    </style>