<template>
    <div class="relative flex flex-col items-center justify-center w-full h-max bg-white">
        <div v-for="article in articles" :key="article.id" class="relative flex flex-row items-center justify-center w-10/12 md:w-1/2 h-96">
            <div class="flex flex-col w-max h-max">
                <p class="text-xs font-bold mb-4 md:mb-44 mr-4"><span class="text-gray-500 text-4xl">{{ article.date.split('/')[0] }}</span>/{{ article.date.split('/')[1] }}/{{ article.date.split('/')[2] }}</p>
                <p class="text-4xl font-bold md:hidden">Article NO.{{ article.id }} - {{ article.title }}</p>
                <router-link :to="`/articles/${article.id}`" class="text-2xl md:hidden mt-4 hover:underline">查看详情-></router-link>
            </div>

            <div class="flex flex-row items-center w-full h-96">
                <router-link :to="`/articles/${article.id}`" class="w-40 h-64 md:w-80 md:h-64 mr-4">
                    <img :src="article.image" :alt="`article_${article.id}`" class="w-full h-full object-cover hover:opacity-80 transition-opacity">
                </router-link>
                <div class="flex flex-col w-full h-64 hidden md:block">
                    <p class="text-4xl font-bold">Article NO.{{ article.id }} - {{ article.title }}</p>
                    <div class="bg-black w-64 h-1 rounded-none"></div>
                    <div class="relative w-full h-full">
                        <HeightFadeContent :fadeHeight="180">
                            <p class="text-sm font-sans">{{ article.content }}</p>
                        </HeightFadeContent>
                        <router-link :to="`/articles/${article.id}`" class="text-sm absolute bottom-0 right-0 hover:underline">查看详情-></router-link>
                    </div>
                </div>
            </div>
            <div class="absolute bottom-0 bg-black w-full h-1 rounded-none"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import HeightFadeContent from '../components/HeightFadeContent.vue';
import { articles } from '../data/articles';
</script>