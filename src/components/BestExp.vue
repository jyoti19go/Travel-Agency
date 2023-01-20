<template>
    <div class="relative" >
        <div class="w-32 h-36 ">
            <img class="z-0 absolute rounded-md" src="../assets/landing.jpg" alt="">
        </div>
        <div class="flex flex-col relative items-center bottom-3">
            <h1 class="z-2 text-white font-normal text-sm tracking-tighter ">{{ name }}</h1>
            <div class="flex relative  ">
                <font-awesome-icon class=" pr-[2px] w-2 h-2 z-2 text-white" icon="fa-solid fa-star" />
                <font-awesome-icon class=" pr-[2px] w-2 h-2 z-2 text-white" icon="fa-solid fa-star" />
                <font-awesome-icon class=" pr-[2px] w-2 h-2 z-2 text-white" icon="fa-solid fa-star" />
                <font-awesome-icon class=" pr-[2px] w-2 h-2 z-2 text-white" icon="fa-solid fa-star" />
                <font-awesome-icon class=" pr-[2px] w-2 h-2 z-2 text-white" icon="fa-solid fa-star" />
            </div>
        </div>
    </div>

</template>
<script>


export default {
    name: 'BestExp',
    props: {
        name: String,
        imgURL: String,
    }

}
</script>
