<template>

    <div class="mx-4 md:mx-14 lg:mx-24 space-y-12 mt-12">
        <div class="text-[24px] text-gray-600 font-semibold">
            {{ isEng ? data.title : data.title_bur }}
        </div>
        <div class="flex justify-between">
            <div class="flex gap-4 items-center">
                <div v-for="(tag, index) in data.tags" :key="index"
                    class="rounded-full bg-gray-700 text-white text-sm font-medium px-2 py-1">
                    <h4>{{ tag }}</h4>
                </div>

            </div>

            <div>
                <h4>{{ data.formatted_date }}</h4>
            </div>
        </div>
        <div class="mx-auto lg:w-[60vw] aspect-1">
            <img :src="`${imgUrl}/${data.cover_url}`" class="w-full h-full" alt="">
        </div>
        <div class="text-gray-600 text-base text-justify" v-html="isEng ? data.content : data.content_bur">

        </div>

        <div class="grid grid-cols-12 gap-4">
            <div v-for="(img, index) in data.images" :key="index"
                class="col-span-12 md:col-span-4 lg:col-span-3 aspect-1">
                <img :src="`${imgUrl}/${img}`" alt="" class="w-full h-full">
            </div>
        </div>
        <h1 class="text-[24px] text-gray-600 pl-2 border-r-4 border-red-400 uppercase font-semibold">Related posts</h1>

        <CardLists :program="data.type" />

    </div>
</template>

<script setup>

useHead({
    title: "Activities",
    meta: [
        { content: "OIA - overseas Ayarwaddy Association", property: 'description' },
    ]
});


const lang = useState('lang')
const isEng = computed(() => lang.value === 'en-US');

const route = useRoute();
const imgUrl = useRuntimeConfig().public.imageUrl;
const apiUrl = useRuntimeConfig().public.apiUrl;
const { data, pending, error } = await useFetch(`${apiUrl}/post/${route.params.id}`)

</script>