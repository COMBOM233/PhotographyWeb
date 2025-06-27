<template>
    <section id="store-section" class="border-t border-stone-500 relative bg-store-section">
        <StoreSection></StoreSection>
    </section>
    
</template>

<script setup>
    import StoreSection from '@/sections/StoreSection.vue';
</script>

<style scoped>
    .bg-store-section {
        background-image: url('@/assets/styleTitle/style_bg.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }
</style>