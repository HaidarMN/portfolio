<template>
    <div class="fixed z-50 bg-[#EBEDEC] text-[#4C5870] px-[10px] sm:px-[25px] lg:px-[50px] py-4 w-screen shadow-md flex flex-row justify-between items-center">
        <a href="#">
            <img src="../../assets/vue.svg" class="h-[35px]">
        </a>
        <div class="flex flex-row gap-2 sm:gap-4 items-center font-bold text-[10px] md:text-sm lg:text-base">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#project">Projects</a>
            <a href="#contact">Contact</a>
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