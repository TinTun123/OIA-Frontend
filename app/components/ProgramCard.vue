<template>
    <div class="flex flex-col lg:flex-row gap-4">
        <div :class="alignRight ? 'lg:order-1' : 'lg:order-2'" data-aos="fade-right"
            class="flex-1 flex items-center justify-center ">
            <div class="aspect-1 bg-white z-10 rounded-lg overflow-hidden relative">
                <img :src="imgURL" class="w-full h-full" alt=""></img>
                <div
                    class="p-3 absolute bottom-0 left-0 right-0 rounded-lg z-20 bg-black/70 space-y-4 flex flex-col items-start">
                    <h3 class="text-white text-sm font-semibold pb-2 border-b-3 border-[#e29d9d] uppercase">WHY IT
                        MATTER
                    </h3>
                    <p class="text-white text-sm text-justify line-clamp-3">
                        {{ isEng ? reason : reason_bur }}
                    </p>
                    <NuxtLink :to="{ name: 'program-id', params: { id: programId } }"
                        class="text-[12px] font-semibold self-end text-white px-2 uppercase border border-white rounded-full cursor-pointer hover:bg-black/10 transition">
                        Read</NuxtLink>
                </div>
            </div>

            <div :class="alignRight ? '-left-3 -bottom-3' : '-right-3 -bottom-3'"
                class="absolute hidden md:block bg-[#e29d9d] z-0 w-80 h-100 rounded-xl">

            </div>
        </div>
        <div :class="alignRight ? 'lg:order-2' : 'lg:order-1'" data-aos="fade-up-left" class="flex-1 relative">
            <div :class="alignRight ? 'pr-2' : 'pl-2'" class="flex flex-col items-start gap-4 bg-white z-999 relative">
                <h3 class="text-[24px] text-gray-500 font-semibold">{{ isEng ? title : title_bur }}</h3>

                <h4 class="text-gray-400 text-base border-b-4 border-[#e29d9d] italic">PROGRAMS</h4>
                <p class="text-base text-gray-500 text-justify leading-8">
                    {{ isEng ? description : description_bur }}
                </p>
            </div>


            <div :class="alignRight ? '-top-2 -right-2' : '-top-2 -left-2'" class="absolute bg-[#e29d9d] z-0 w-50 h-30">

            </div>
        </div>
    </div>
</template>

<script setup>
const lang = useState('lang')
const isEng = computed(() => lang.value === 'en-US');

const props = defineProps({
    alignRight: {
        type: Boolean,
        required: true,
        default: true
    },
    imgURL: {
        type: String,
        required: true,
        default: "/bxs_image.svg"
    },
    title: String,
    title_bur: String,
    reason: String,
    reason_bur: String,
    description: String,
    description_bur: String,
    programId: Number
});


</script>

<style scoped></style>