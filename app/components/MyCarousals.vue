<template>
    <div class="overflow-x-hidden">
        <UCarousel :items="items" dots :autoplay="{ delay: 3000 }" :ui="{
            item: 'basis-1/1', dot: 'w-4 h-1 bg-gray-400 data-[state=active]:bg-gray-200', dots: 'absolute right-4 bottom-4 flex gap-2'
        }" class="w-full mx-auto relative" v-slot="{ item }">


            <div class="relative w-full h-[80vh]">
                <a :href="`#${item.description}`">
                    <img :src="`${imgUrl}/${item.image_url}`" class="min-w-screen h-full object-cover" />
                </a>


                <!-- TEXT OVERLAY -->
                <div
                    class="absolute bottom-12 left-4 right-4 lg:mr-12 md:right-auto md:left-8 flex flex-col justify-center items-start px-4 py-2 rounded-lg  bg-white">
                    <p class="text-base drop-shadow-lg text-gray-600 font-semibold">{{ lang === 'en-US' ?
                        item.description : item.description_bur }}</p>
                </div>
            </div>
        </UCarousel>
    </div>
</template>

<script setup>
const imgUrl = useRuntimeConfig().public.imageUrl;

const lang = useState('lang')
const isEng = computed(() => lang.value === 'en-US');

const props = defineProps({
    items: {
        type: Array,
        required: true,
        default: [
            {
                image: 'https://picsum.photos/640/640?random=1',
                description: "We provide the best cleaning services in Sydney."
            },
            {
                image: "https://picsum.photos/640/640?random=2",
                description: "Our staff are skilled professionals ready to serve."
            },
            {
                image: "https://picsum.photos/640/640?random=3",
                description: "We offer competitive rates for all business sizes."
            }
        ]
    }
});

</script>