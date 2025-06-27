<template>
    <section id="article-section" class="border-t border-stone-500 relative bg-article-section">
        <ArticleTitle></ArticleTitle>
        <ArticleSection></ArticleSection>
    </section>
    
</template>

<script setup>
    import ArticleTitle from '@/sections/ArticleTitle.vue';
    import ArticleSection from '@/sections/ArticleSection.vue';
</script>

<style scoped>
    .bg-article-section {
        background-image: url('@/assets/styleTitle/style_bg.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }
</style>