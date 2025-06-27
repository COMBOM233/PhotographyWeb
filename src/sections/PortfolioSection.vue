<template>
    <!-- Portfolio section start -->
	<section id="portfolio-section" class="px-4 lg:px-8 py-16 relative">
        <!-- Text wrapper start -->
        <div class="flex gap-8 flex-col md:flex-row">
            <!-- Main text start -->
            <h1 class="uppercase text-5xl mb-4 font-semibold">
                作品展示
            </h1>
            <p class="capitalize xl:w-1/2 text-stone-500 mb-8">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolores distinctio reiciendis obcaecati ea.
            </p>
            <!-- Main text end -->
        </div>
        <!-- Text wrapper end -->

        <!-- Carousel start -->
        <div class="relative w-full max-w-[640px] mx-auto aspect-[640/427] overflow-hidden rounded-xl">
            <!-- Images -->
            <div class="relative w-full h-full">
                <transition-group name="slide">
                    <div v-for="(image, index) in images" 
                         :key="image.id"
                         v-show="currentIndex === index"
                         class="absolute w-full h-full">
                        <img 
                            :src="image.src" 
                            :alt="image.alt"
                            class="w-full h-full object-contain transition-opacity duration-500"
                        />
                        <AnimatedContent>
                            <div ref="descRef" class="absolute top-0 left-0 right-0 bg-black/50 text-white p-4 text-center">
                                <p class="text-lg font-medium">{{ image.description }}</p>
                            </div>
                        </AnimatedContent>
                    </div>
                </transition-group>
            </div>

            <!-- Navigation dots -->
            <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                <button 
                    v-for="(image, index) in images" 
                    :key="image.id"
                    @click="goToSlide(index)"
                    class="w-3 h-3 rounded-full transition-colors duration-300"
                    :class="currentIndex === index ? 'bg-white' : 'bg-white/50'"
                ></button>
            </div>

            <!-- Navigation arrows -->
            <button 
                @click="prevSlide" 
                class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
            >
                <i class="fa-solid fa-chevron-left"></i>
            </button>
            <button 
                @click="nextSlide" 
                class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
            >
                <i class="fa-solid fa-chevron-right"></i>
            </button>
        </div>
        <!-- Carousel end -->

        <!-- "More" link start -->
        <a href="#" class="text-end">
            <p class="font-semibold text-lg group relative">
                <span>Show more photos </span>
                <i class="fa-solid fa-arrow-right"></i>
            </p>
        </a>
        <!-- "More" link end -->

        <!-- Circle start -->
        <div class="bg-neutral-300 h-64 w-64 rounded-full absolute top-0 left-0 mt-16 -z-20"></div>
        <!-- Circle end -->
	</section>
	<!-- Portfolio section end -->
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import AnimatedContent from '@/components/AnimatedContent.vue';
import { gsap } from 'gsap';

const images = [
    { id: 2, src: require('@/assets/portfolio/portfolio2.jpg'), alt: 'Portfolio 2', description: '自然风光摄影 - 捕捉大自然的壮丽瞬间' },
    { id: 4, src: require('@/assets/portfolio/portfolio4.jpg'), alt: 'Portfolio 4', description: '人像摄影 - 记录最真实的情感表达' },
    { id: 5, src: require('@/assets/portfolio/portfolio5.jpg'), alt: 'Portfolio 5', description: '建筑摄影 - 展现城市之美' },
    { id: 6, src: require('@/assets/portfolio/portfolio6.jpg'), alt: 'Portfolio 6', description: '街拍摄影 - 定格生活中的精彩瞬间' },
];

const currentIndex = ref(0);
const timer = ref(null);
const descRef = ref(null);

const triggerDescAnimation = () => {
    if (!descRef.value) return;
    gsap.set(descRef.value, { x: 100, opacity: 0 });
    gsap.to(descRef.value, { x: 0, opacity: 1, duration: 0.5, clearProps: 'all' });
};

const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % images.length;
    nextTick(() => {
        triggerDescAnimation();
    });
};

const prevSlide = () => {
    currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
    nextTick(() => {
        triggerDescAnimation();
    });
};

const goToSlide = (index) => {
    currentIndex.value = index;
    nextTick(() => {
        triggerDescAnimation();
    });
};

const startTimer = () => {
    timer.value = setInterval(nextSlide, 5000);
};

const stopTimer = () => {
    if (timer.value) {
        clearInterval(timer.value);
        timer.value = null;
    }
};

onMounted(() => {
    startTimer();
    nextTick(() => {
        triggerDescAnimation();
    });
});

onUnmounted(() => {
    stopTimer();
});
</script>

<style>
.slide-enter-active,
.slide-leave-active {
    transition: all 0.5s ease;
}

.slide-enter-from {
    opacity: 0;
    transform: translateX(100%);
}

.slide-leave-to {
    opacity: 0;
    transform: translateX(-100%);
}
</style>