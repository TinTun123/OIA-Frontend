<template>
    <MyCarousals :items="carousals.slides" />
    <div class="mx-4 md:mx-14 lg:mx-24 my-12 space-y-12">
        <div class="space-y-6" v-for="(story, index) in data" :key="index">
            <h3 :id="isEng ? story.title : story.title_bur"
                class="text-gray-600 font-semibold pl-4 border-l-4 border-[#E29D9D] text-[20px]">{{
                    isEng ? story.title : story.title_bur }}</h3>

            <div v-for="(block, index) in story.blocks" :key="index">
                <div v-if="block.type === 'text'" class="text-justify text-base leading-8"
                    v-html="isEng ? block.text : block.text_bur">

                </div>
                <QuoteImg v-else :img-u-r-l="`${imgUrl}/${block.image_url}`"
                    :quote="isEng ? block.text : block.text_bur" />
            </div>

        </div>
    </div>

</template>


<script setup>
useHead({
    title: "Stories",
    meta: [
        { name: "description", content: "Learn about who we are." }
    ]
});

const lang = useState('lang')
const isEng = computed(() => lang.value === 'en-US');
const imgUrl = useRuntimeConfig().public.imageUrl;
const apiUrl = useRuntimeConfig().public.apiUrl;


const { data, pending, error } = await useFetch(`${apiUrl}/stories`);
const { data: carousals, pending: carousalPending, error: carousaError } = await useFetch(`${apiUrl}/carousal/stories`)


</script>