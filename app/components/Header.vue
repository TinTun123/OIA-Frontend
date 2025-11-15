<template>
    <header class="bg-[#fbf6e2] shadow-md">
        <div class="mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
            <!-- Logo + Title -->
            <div class="flex items-center space-x-3">
                <NuxtLink to="/" class="flex items-center">
                    <img src="/OIA-logo.svg" alt="Logo" class="h-10 w-10 object-cover rounded-md" />
                </NuxtLink>
                <span class="text-gray-600 font-medium text-sm">Overseas Ayarwaddy Association</span>
            </div>

            <!-- Desktop Nav -->
            <nav class="hidden lg:flex space-x-6 items-center relative">
                <NuxtLink to="/" class="hover:text-blue-600">
                    <UButton label="Home" color="neutral" variant="outline" />
                </NuxtLink>

                <!-- About dropdown -->
                <div class="relative group z-9999">
                    <UDropdownMenu :items="aboutUsItems" :content="{
                        align: 'start',
                        side: 'bottom',
                        sideOffset: 20
                    }" :ui="{
                        content: 'bg-white border border-gray-300 rounded-md shadow-md flex flex-col z-9999',
                        item: 'w-full px-4 py-2 hover:bg-gray-100 cursor-pointer transition'
                    }">
                        <UButton label="About us" color="neutral" variant="outline" />
                    </UDropdownMenu>
                </div>

                <NuxtLink to="/stories" class="hover:text-blue-600">
                    <UButton label="Stories" color="neutral" variant="outline" />
                </NuxtLink>

                <!-- Services dropdown -->
                <div class="relative group">
                    <UDropdownMenu :items="items" :content="{
                        align: 'start',
                        side: 'bottom',
                        sideOffset: 20
                    }" :ui="{
                        content: 'bg-white border border-gray-300 rounded-md shadow-md flex flex-col',
                        item: 'w-full px-4 py-2 hover:bg-gray-100 cursor-pointer transition'
                    }">
                        <UButton label="Services" color="neutral" variant="outline" />
                    </UDropdownMenu>
                </div>

                <!-- Language toggle -->
                <button @click="toggleLang"
                    class="ml-4 text-sm px-3 py-1 rounded bg-yellow-100 hover:bg-yellow-200 flex items-center gap-2 cursor-pointer">

                    <div v-if="lang === 'en-US'" class="w-6">
                        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" id="flag-icons-mm" viewBox="0 0 640 480">
                            <path fill="#fecb00" d="M0 0h640v480H0z" />
                            <path fill="#34b233" d="M0 160h640v320H0z" />
                            <path fill="#ea2839" d="M0 320h640v160H0z" />
                            <g transform="translate(320 256.9)scale(176.87999)">
                                <path id="mm-a" fill="#fff" d="m0-1 .3 1h-.6z" />
                                <use xlink:href="#mm-a" width="100%" height="100%" transform="rotate(-144)" />
                                <use xlink:href="#mm-a" width="100%" height="100%" transform="rotate(-72)" />
                                <use xlink:href="#mm-a" width="100%" height="100%" transform="rotate(72)" />
                                <use xlink:href="#mm-a" width="100%" height="100%" transform="rotate(144)" />
                            </g>
                        </svg>
                    </div>
                    <div v-else class="w-6">
                        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" id="flag-icons-sh"
                            viewBox="0 0 640 480">
                            <path fill="#012169" d="M0 0h640v480H0z" />
                            <path fill="#FFF"
                                d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0z" />
                            <path fill="#C8102E"
                                d="m424 281 216 159v40L369 281zm-184 20 6 35L54 480H0zM640 0v3L391 191l2-44L590 0zM0 0l239 176h-60L0 42z" />
                            <path fill="#FFF" d="M241 0v480h160V0zM0 160v160h640V160z" />
                            <path fill="#C8102E" d="M0 193v96h640v-96zM273 0v480h96V0z" />
                        </svg>
                    </div>

                    {{ lang === 'en-US' ? 'Myanmar' : 'English' }}

                </button>
            </nav>

            <!-- Mobile Hamburger -->
            <button @click="mobileOpen = true" class="lg:hidden text-2xl">
                &#9776;
            </button>
        </div>

        <!-- Mobile Menu -->
        <transition name="fade">
            <div v-if="mobileOpen" class="fixed inset-0 bg-black bg-opacity-30 z-40" @click.self="mobileOpen = false">
                <div class="bg-white w-85 h-full p-4 z-50 fixed right-0 top-0 shadow-lg">
                    <button @click="mobileOpen = false" class="text-3xl mb-6">&times;</button>

                    <ul class="">
                        <li class="border-b px-0 pt-2 pb-4 border-gray-600">
                            <NuxtLink to="/" @click="mobileOpen = false" class="block">Home
                            </NuxtLink>
                        </li>

                        <li>
                            <div>
                                <button @click="mobileAboutOpen = !mobileAboutOpen"
                                    class="w-full text-left px-0 py-4 border-b border-gray-600">
                                    About Us
                                </button>
                                <div v-if="mobileAboutOpen" class="pl-4 bg-gray-50">
                                    <NuxtLink to="/who-we-are" class="block px-4 py-4 border-b border-gray-600">Our
                                        Mission</NuxtLink>
                                    <NuxtLink to="/history" class="block px-4 py-4 border-b border-gray-600">History
                                    </NuxtLink>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div>
                                <button @click="mobileServicesOpen = !mobileServicesOpen"
                                    class="w-full text-left px-0 py-4 border-b border-gray-600">
                                    Services
                                </button>
                                <div v-if="mobileServicesOpen" class="pl-4 bg-gray-50">
                                    <NuxtLink v-for="service in services" :to="service.to"
                                        class="block px-4 py-4 border-b border-gray-600">
                                        {{ service.title }}</NuxtLink>
                                </div>
                            </div>
                        </li>
                        <li>
                            <NuxtLink to="/stories" class="block px-0 py-4 border-b border-gray-600">Stories</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/publication" class="block px-0 py-4 border-b border-gray-600">Publications
                            </NuxtLink>
                        </li>


                        <li>
                            <button @click="toggleLang"
                                class="text-sm px-3 py-1 rounded-b-lg shadow-lg border-yellow-200 bg-yellow-100 hover:bg-yellow-200">
                                {{ lang === 'en-US' ? 'Myanmar' : 'English' }}
                                <svg v-if="lang === 'en-US'" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" id="flag-icons-mm" viewBox="0 0 640 480">
                                    <path fill="#fecb00" d="M0 0h640v480H0z" />
                                    <path fill="#34b233" d="M0 160h640v320H0z" />
                                    <path fill="#ea2839" d="M0 320h640v160H0z" />
                                    <g transform="translate(320 256.9)scale(176.87999)">
                                        <path id="mm-a" fill="#fff" d="m0-1 .3 1h-.6z" />
                                        <use xlink:href="#mm-a" width="100%" height="100%" transform="rotate(-144)" />
                                        <use xlink:href="#mm-a" width="100%" height="100%" transform="rotate(-72)" />
                                        <use xlink:href="#mm-a" width="100%" height="100%" transform="rotate(72)" />
                                        <use xlink:href="#mm-a" width="100%" height="100%" transform="rotate(144)" />
                                    </g>
                                </svg>
                                <svg v-else xmlns="http://www.w3.org/2000/svg" id="flag-icons-sh" viewBox="0 0 640 480">
                                    <path fill="#012169" d="M0 0h640v480H0z" />
                                    <path fill="#FFF"
                                        d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0z" />
                                    <path fill="#C8102E"
                                        d="m424 281 216 159v40L369 281zm-184 20 6 35L54 480H0zM640 0v3L391 191l2-44L590 0zM0 0l239 176h-60L0 42z" />
                                    <path fill="#FFF" d="M241 0v480h160V0zM0 160v160h640V160z" />
                                    <path fill="#C8102E" d="M0 193v96h640v-96zM273 0v480h96V0z" />
                                </svg>

                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </transition>
    </header>
</template>

<script setup>
import { ref } from 'vue'

const isMobileOpen = ref(false)
const mobileAboutOpen = ref(false)
const mobileServicesOpen = ref(false)

const imgURL = useRuntimeConfig().public.imageUrl;
const apiURL = useRuntimeConfig().public.apiUrl;
const { data: services, pending: servicePending, error: serviceErr } = await useFetch(`${apiURL}/services`);

console.log(services.value);

const items = computed(() => {
    if (!services.value) return []

    return services.value.map(service => ({
        label: service.title,
        to: `/services/${service.title}` // or any path you want
    }))
})

const aboutUsItems = ref([
    {
        label: 'Who we are',
        to: '/who-we-are'
    },
    {
        label: 'What we do',
        to: '/what-we-do'
    },
    {
        label: 'Publication',
        to: '/Publication'
    },

    {
        label: 'Contact us',
        to: '/contact-us'
    },
])

const mobileOpen = ref(false)
const lang = useState('lang', () => 'en-US')

const toggleLang = () => {
    lang.value = lang.value === 'en-US' ? 'mm' : 'en-US'
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
