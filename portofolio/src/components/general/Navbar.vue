<template>
    <div class="fixed z-30 bg-[#EBEDEC] text-[#4C5870] px-[10px] sm:px-[25px] lg:px-[50px] py-4 w-screen shadow-md grid grid-cols-2 sm:flex sm:flex-row justify-between items-center">
        <a href="#">
            <img src="../../assets/vue.svg" class="h-[35px]">
        </a>

        <div class="hidden sm:flex sm:flex-row gap-2 sm:gap-4 items-center font-bold text-[10px] md:text-sm lg:text-base">
            <a v-for="link in links" :href="'#' + link" class="capitalize">{{ link }}</a>
            <a 
                href="Resume.pdf"
                class="rounded-md px-4 py-2 border border-[#4C5870] hover:bg-[#4C5870] hover:text-[#EBEDEC] transition duration-150 ease-in-out w-fit"
                target="_blank"
            >
                Resume
            </a>
        </div>

        <div class="sm:hidden justify-self-end flex items-center">
            <img
                @click="menuShow"
                src="../../assets/icons/menu.svg"
                class="focus:ring focus:ring-[#4C5870] rounded cursor-pointer"
            >
        </div>

        <div v-if="menu == true" class="flex flex-col col-span-2 gap-3 mt-3 items-center font-bold text-xs">
            <a v-for="link in links" :href="'#' + link" class="capitalize">{{ link }}</a>
            <a 
                href="Resume.pdf"
                class="rounded-md px-4 py-2 border border-[#4C5870] hover:bg-[#4C5870] hover:text-[#EBEDEC] transition duration-150 ease-in-out w-fit"
                target="_blank"
            >
                Resume
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menu: false,
            links: ["about", "skills", "experience", "projects", "contact"]
        }
    },

    methods: {
        menuShow() {
            this.menu = !this.menu
            console.log(this.menu);
        }
    }
}
</script>