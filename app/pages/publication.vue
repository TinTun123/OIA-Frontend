<template>
    <MyCarousals :items="homeCarousel.slides" />

    <div class="mx-4 md:mx-16 lg:mx-24 space-y-4">
        <h1 class="text-[24px] text-gray-600 pl-2 border-r-4 border-red-400 uppercase font-semibold mt-6">
            Publication
        </h1>

        <p class="text-base text-gray-600 text-justify">
            In this section, you will find a collection of our research papers, reports, and announcements that reflect
            our ongoing efforts to promote knowledge, raise awareness, share experiences, and uphold our mandate. Each
            publication is carefully prepared to provide reliable information, practical insights, our core values, and
            evidence-based recommendations for communities, policymakers, and partners.
        </p>

        <div class="space-y-3">
            <div v-for="(items, type) in data" :key="type"
                class=" border border-gray-400 rounded-xl shadow-lg bg-white">
                <!-- Accordion Header -->
                <button @click="toggle(type)" class="w-full flex items-center justify-between px-5 py-4 text-left">
                    <span class="font-medium text-gray-600">
                        {{ type }}
                    </span>

                    <svg class="w-5 h-5 text-gray-500 transition-transform duration-300"
                        :class="{ 'rotate-180': open === type }" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
                    </svg>
                </button>

                <!-- Content -->
                <div class="px-5 text-gray-700 transition-all overflow-hidden" :class="{
                    'max-h-0 py-0': open !== type,
                    'max-h-[300px] py-4': open === type
                }">
                    <div v-for="(pub, index) in items" :key="index">
                        <h1 class="text-base font-medium text-gray-600 my-4">{{ pub.title }}</h1>
                        <div v-html="pub.content"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>

useHead({
    title: "Publication",
    meta: [
        { name: "description", content: "Learn about who we are." }
    ]
});

const apiUrl = useRuntimeConfig().public.apiUrl;
const { data, pending, error } = await useFetch("http://localhost:8000/api/publications");
const { data: homeCarousel, pending: carouselPending, error: carouselError } = await useFetch(`${apiUrl}/carousal/what we do`);

const open = ref(null)

const toggle = (id) => {
    open.value = open.value === id ? null : id
}
</script>