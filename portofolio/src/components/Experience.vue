<template>
    <div class="bg-[#A3A9B0] text-[#EBEDEC] h-fit px-[150px] pt-[150px] pb-[100px] flex flex-col justify-center gap-4">
        <h1 class="text-center text-5xl font-extrabold">Work Experience</h1>
        <div class="flex flex-col timeline mt-8">

            <!-- First -->
            <div class="flex flex-row z-10 mb-10 gap-8">
                <div class="w-12 h-12 p-2.5 flex justify-center bg-[#EBEDEC] rounded-full">
                    <img src="../assets/icons/vector.svg">
                </div>
                <div class="flex flex-col gap-2 w-full bg-[#EBEDEC] text-[#A3A9B0] rounded-lg py-2 px-4">
                    <h2 class="text-2xl font-bold text-[#4C5870]">Internship Designer</h2>
                    <h3 class="text-lg">Gamelab Indonesia | August - October 2021</h3>
                    <p>
                        I work at Gamelab Indonesia as internship designer for 3 months.
                        My work is make a company's logo with a card name etc.(dummy), re-design some banner, and make a UI Kit for game.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.timeline {
    position: relative;
}

.timeline::before {
    content: " ";
    position: absolute;
    top: 20px;
    bottom: 0;
    width: 4px;
    background: #EBEDEC;
    left: 22px;
}
</style>