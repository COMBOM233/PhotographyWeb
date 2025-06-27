<template>
  <section id="style-section" class="border-t border-stone-500 relative bg-style-section">
      <BrandSection></BrandSection>
  </section>
  
</template>

<script setup>
import BrandSection from '../sections/BrandSection.vue';
</script>

<style scoped>
  .bg-style-section {
      background-image: url('@/assets/styleTitle/style_bg.png');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-attachment: fixed;
  }
</style>