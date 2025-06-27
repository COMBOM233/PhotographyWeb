<template>
    <!-- 这是一个实现底部渐隐层效果的组件 -->
    <div class="bottom-fade-container" :style="containerStyle">
      <!-- 插槽支持任意内容 -->
      <slot />
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';

  const props = defineProps({
    fadeHeight: {
      type: Number,
      default: 50 // 默认高度为50px
    }
  });

  const containerStyle = computed(() => ({
    '--fade-height': `${props.fadeHeight}px`
  }));
  </script>
  
  <style scoped>
  .bottom-fade-container {
    position: relative; /* 为伪元素定位提供基准 */
  }
  
  /* 底部渐隐层 */
  .bottom-fade-container::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: var(--fade-height); /* 使用CSS变量控制高度 */
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%); /* 从透明到不透明的线性渐变 */
    pointer-events: none; /* 确保不阻挡交互事件 */
  }
  </style>