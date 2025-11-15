<template>
    <div class="grid-cols-12 grid gap-4">
        <!-- card data imgURL, title, tags, date -->
        <div v-for="(post, index) in data" :key="index" @click.stop="goTo(post.id)"
            class="overflow-hidden rounded-lg shadow-lg border-gray-400 col-span-12 md:col-span-3 pb-4">
            <!-- Card -->
            <div class="relative">
                <img :src="`${imgURL}/${post.cover_url}`" class="object-cover" alt=""></img>

                <div class="flex gap-2 absolute bottom-2 left-1">
                    <!-- tags -->
                    <div v-for="value in post.tags"
                        class="bg-black/60 rounded-full px-2 py-0 text-[11px] font-semibold text-gray-100 flex-wrap">
                        <span>{{ value }}</span>
                    </div>
                </div>
            </div>
            <div class="m-2 space-y-2">
                <h2 class="text-sm text-gray-700 line-clamp-3 leading-6 text-justify">{{ post.title }}</h2>

                <div class="flex justify-between items-center text-sm text-gray-600">
                    <h4>
                        <!-- date -->
                        {{ post.formatted_date }}
                    </h4>

                    <h4 class="bg-red-600/60 rounded-full px-2 text-sm font-semibold text-gray-100">
                        READ
                    </h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const imgURL = useRuntimeConfig().public.imageUrl;
const apiURL = useRuntimeConfig().public.apiUrl;

const props = defineProps({
    program: {
        type: String,
        default: 'all'
    }
})
const router = useRouter();
const { data, pending, error } = await useFetch(`${apiURL}/posts/${props.program}`);

console.log(data.value);

function goTo(postId) {
    router.push({ name: 'post-id', params: { id: postId } })
}

</script>