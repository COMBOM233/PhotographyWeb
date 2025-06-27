<template>
    <div class="relative flex flex-col items-center justify-center w-full h-max bg-white">
        <div class="relative flex flex-row items-center justify-center w-1/2 h-96">
            <p class="text-xs font-bold mb-44 mr-4"><span class="text-gray-500 text-4xl">26</span>/6/2025</p>
            <div class="flex flex-row items-center w-full h-96">
                <img src="@/assets/portfolio/portfolio9.jpg" alt="article_1" class="w-80 h-64 object-cover mr-4">
                <div class="flex flex-col w-full h-64">
                    <p class="text-4xl font-bold">Article NO.1 - Skating Girl</p>
                    <div class="bg-black w-64 h-1 rounded-none"></div>
                    <div class="relative w-full h-full">
                        <HeightFadeContent :fadeHeight="100">
                            <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan
                                ligula ac ipsum bibendum suscipit. Nunc luctus libero lectus, et semper neque commodo
                                in. Duis luctus, ligula eget ultrices fringilla, urna libero cursus est, at lobortis
                                metus justo in sapien. Maecenas sit amet urna sed ligula rutrum sollicitudin. Fusce
                                luctus pellentesque augue, ac porttitor lectus ultrices eget. Nullam commodo orci ut
                                tincidunt volutpat. Curabitur in sagittis nisi. Quisque porta turpis at ipsum ultricies
                                laoreet. Fusce quam orci, gravida sit amet facilisis at, faucibus ut turpis. Vestibulum
                                aliquam massa lacus, condimentum tempus nisl iaculis a. Ut accumsan cursus velit. Nunc
                                commodo nulla ut laoreet malesuada. Sed ultrices porta metus.</p>
                        </HeightFadeContent>
                        <p class="text-sm absolute bottom-0 right-0">查看详情-></p>
                    </div>
                </div>
            </div>
            <div class="absolute bottom-0 bg-black w-full h-1 rounded-none"></div>
        </div>
        <div class="relative flex flex-row items-center justify-center w-1/2 h-96">
            <p class="text-xs font-bold mb-44 mr-4"><span class="text-gray-500 text-4xl">24</span>/6/2025</p>
            <div class="flex flex-row items-center w-full h-96">
                <img src="@/assets/portfolio/portfolio8.jpg" alt="article_2" class="w-80 h-64 object-cover mr-4">
                <div class="flex flex-col w-full h-64">
                    <p class="text-4xl font-bold">Article NO.2 - Working Man</p>
                    <div class="bg-black w-64 h-1 rounded-none"></div>
                    <div class="relative w-full h-full">
                        <HeightFadeContent :fadeHeight="100">
                            <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan
                                ligula ac ipsum bibendum suscipit. Nunc luctus libero lectus, et semper neque commodo
                                in. Duis luctus, ligula eget ultrices fringilla, urna libero cursus est, at lobortis
                                metus justo in sapien. Maecenas sit amet urna sed ligula rutrum sollicitudin. Fusce
                                luctus pellentesque augue, ac porttitor lectus ultrices eget. Nullam commodo orci ut
                                tincidunt volutpat. Curabitur in sagittis nisi. Quisque porta turpis at ipsum ultricies
                                laoreet. Fusce quam orci, gravida sit amet facilisis at, faucibus ut turpis. Vestibulum
                                aliquam massa lacus, condimentum tempus nisl iaculis a. Ut accumsan cursus velit. Nunc
                                commodo nulla ut laoreet malesuada. Sed ultrices porta metus.</p>
                        </HeightFadeContent>
                        <p class="text-sm absolute bottom-0 right-0">查看详情-></p>
                    </div>
                </div>
            </div>
            <div class="absolute bottom-0 bg-black w-full h-1 rounded-none"></div>
        </div>
    </div>
</template>
<script setup>
import HeightFadeContent from '../components/HeightFadeContent.vue'
</script>