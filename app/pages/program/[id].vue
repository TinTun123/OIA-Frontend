<template>
    <div class="space-y-8 mx-4 md:mx-16 lg:mx-24">
        <!-- cover image -->
        <div class="aspect-1">
            <img :src="program.cover_url" class="w-full h-full" alt="">
        </div>

        <!-- Program title -->
        <div class="flex justify-start mb-12">
            <h1 class="text-[24px] text-gray-500 font-semibold pb-2 border-b-4 border-[#e29d9d]">
                {{ isEng ? program.name : program.name_bur }}
            </h1>
        </div>

        <!-- body block -->
        <div v-html="isEng ? program.content : program.content_bur" class="program-content"></div>
        <!-- Note content -->
        <div>

        </div>


        <!-- text over image -->
        <div class="rounded-lg overflow-hidden relative">
            <div class="h-100">
                <img :src="program.img_url" class="w-full h-full" alt="">
            </div>

            <div
                class="md:absolute md:left-0 md:top-0 md:bottom-0 md:right-[50%] bg-black md:bg-black/80 text-white text-lg flex items-center justify-start">
                <div class="p-4 ">
                    <p class="text-justify uppercase">{{ isEng ? program.quote : program.quote_bur }}
                    </p>

                    <NuxtLink to="/what-we-do"
                        class="text-[12px] font-semibold self-end text-white px-2 uppercase border border-white rounded-full cursor-pointer hover:bg-black/10 transition">
                        PROGRAMS
                    </NuxtLink>
                </div>

            </div>
        </div>

        <h1 class="text-[24px] text-[#6c757d] font-semibold uppercase pt-4 border-t-4 border-[#e29d9d]">
            Program Activities
        </h1>

        <CardLists :program="programtype" />
    </div>

</template>

<script setup>

const lang = useState('lang')
const isEng = computed(() => lang.value === 'en-US');

const apiUrl = useRuntimeConfig().public.apiUrl;
const route = useRoute();
const { data, pending, error } = await useFetch(`${apiUrl}/program-pages/${route.params.id}`);

useHead({
    title: data.value.name,
    meta: [
        { name: "description", content: "Learn about who we are." }
    ]
});
const program = computed(() => {
    return data.value;
})
const programtype = computed(() => {
    switch (data.value.name) {
        case 'Protection Program (HRDs, GBV & Child Protection)':
            return 'Protection (HRDs, GBV & Child Protection)';
        case 'Food Security':
            return 'Food Security';
        case 'Vocational Training':
            return 'Training';
        case 'Advocacy':
            return 'Advocacy';
        case 'Emergency Response':
            return 'Emergency Response';
        case 'Referral Health and Education Services':
            return 'Health & Education';
        case 'Organizational Development':
            return 'Organizational Development';
        default:
            break;
    }
    return data.value;
})


</script>

<style scoped></style>