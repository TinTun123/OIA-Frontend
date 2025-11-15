<template>
    <div class="mx-4 md:mx-12 lg:mx-24 mt-12">
        <h1 class="text-[24px] text-gray-600 font-semibold pl-4 border-l-4 border-red-400">{{ services.title }}</h1>

        <div v-for="(form, index) in services.forms" :key="index"
            class="p-4 rounded-lg bg-white shadow-lg border border-gray-200 mt-4 form_content"
            v-html="isEng ? form.form_data : form.form_data_bur">

        </div>
    </div>
</template>

<script setup>
const apiUrl = useRuntimeConfig().public.apiUrl;
const lang = useState('lang')
const isEng = computed(() => lang.value === 'en-US');
const route = useRoute();
const { data: services, pending, error } = await useFetch(`${apiUrl}/forms`, { query: { name: route.params.name } })

console.log(services.value);

</script>