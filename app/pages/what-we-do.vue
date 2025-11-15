<script setup>
useHead({
    title: "What we do - OIA",
    meta: [
        { name: "description", content: "Learn about who we are." }
    ]
});

const apiUrl = useRuntimeConfig().public.apiUrl;

const { data: programPages, pending: programPending, error: programError } = await useFetch(`${apiUrl}/program-pages`);
const { data: homeCarousel, pending: carouselPending, error: carouselError } = await useFetch(`${apiUrl}/carousal/what we do`);

</script>

<template>
    <div>
        <MyCarousals :items="homeCarousel.slides" />

        <div class="mx-4 md:mx-16 lg:mx-24 space-y-16 mt-4">
            <h1 class="text-[24px] text-gray-600 pl-2 border-r-4 border-red-400 uppercase font-semibold">
                What we do
            </h1>
            <ClientOnly>
                <ProgramCard v-for="(program, index) in programPages" :description="program.description"
                    :description_bur="program.description_bur" :title="program.name" :title_bur="program.name_bur"
                    :align-right="index % 2 === 0 ? true : false" :img-u-r-l="program.img_url" :reason="program.reason"
                    :reason_bur="program.reason_bur" :programId="program.id" />
            </ClientOnly>


        </div>
    </div>
</template>