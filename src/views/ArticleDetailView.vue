<template>
  <div class="pt-32 px-4 md:px-20 lg:px-32 min-h-screen">
    <div v-if="article" class="max-w-4xl mx-auto">
      <div class="mb-8">
        <p class="text-xs font-bold mb-2"><span class="text-gray-500 text-4xl">{{ article.date.split('/')[0] }}</span>/{{ article.date.split('/')[1] }}/{{ article.date.split('/')[2] }}</p>
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Article NO.{{ article.id }} - {{ article.title }}</h1>
        <div class="bg-black w-64 h-1 rounded-none mb-6"></div>
      </div>
      
      <div class="mb-10">
        <img :src="article.image" :alt="article.title" class="w-full h-96 object-cover mb-8">
        <div class="prose max-w-none">
          <p class="whitespace-pre-line">{{ article.content }}</p>
        </div>
      </div>
      
      <div class="mt-10 mb-20">
        <router-link to="/articles" class="flex items-center text-lg hover:underline">
          <span class="mr-2">←</span> 返回文章列表
        </router-link>
      </div>
    </div>
    
    <div v-else class="flex flex-col items-center justify-center h-64">
      <p class="text-2xl">文章不存在</p>
      <router-link to="/articles" class="mt-4 text-lg hover:underline">返回文章列表</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { articles, Article } from '@/data/articles';

const route = useRoute();
const article = ref<Article | null>(null);

onMounted(() => {
  const id = parseInt(route.params.id as string);
  article.value = articles.find(a => a.id === id) || null;
});
</script> 