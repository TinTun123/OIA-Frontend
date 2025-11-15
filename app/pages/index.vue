<template>
    <MyCarousals :items="data.slides" />

    <section class="mx-4 md:mx-16 lg:mx-[98px] mt-12 space-y-4">
        <h1 class="text-[24px] text-gray-600 pl-2 border-r-4 border-red-400 uppercase font-semibold">What is happening
            now!</h1>

        <cardLists program="all"></cardLists>
    </section>
</template>

<script setup>

useHead({
    title: "OIA",
    meta: [
        { name: "description", content: "Learn about who we are." }
    ]
});


const apiUrl = useRuntimeConfig().public.apiUrl;

const { data, pending, error } = await useFetch(`${apiUrl}/carousal/home`);
</script>
