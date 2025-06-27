<template>
    <section id="playground-section" class="px-12 lg:px-32 py-16 border-t border-stone-500 relative">
        <h1 class="uppercase text-5xl mb-4 mt-16 font-semibold ">
			这个页面用于测试各种样式和动画效果，部署后替换为实际页面
		</h1>
        <div class="relative">
            <animated-content ref="animatedContent">
                <div class="relative">
                    <h1 class="text-2xl font-medium">{{ currentText }}</h1>
                </div>
            </animated-content>
            <AnimatedContent>
                
            </AnimatedContent>
        </div>
    </section>
    <section id="StyleTest-section" class="px-12 lg:px-32 py-16 border-t border-stone-500 relative">
        <h1 class="uppercase text-5xl mb-4 mt-16 font-semibold ">
			StyleTest
		</h1>
        <div class="relative border-4 w-max">
            <img src="@/assets/styleTitle/style1.jpg" alt="StyleTest" class="w-500 h-500 transition-opacity duration-500">
            <div class="absolute inset-y-0 inset-x-52 flex flex-col items-center justify-center w-max">
                <h2 class="text-4xl font-bold mb-4 text-white">摄影的艺术</h2>
                <p class="text-xl text-white">捕捉每一个珍贵的瞬间</p>
            </div>
        </div>
    </section>

    <AnimationTest></AnimationTest>
    <section id="HeightFadeContent-section" class="px-12 lg:px-32 py-16 border-t border-stone-500 relative">
        <HeightFadeContent :fadeHeight="100">
            <p class="text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan ligula ac ipsum bibendum suscipit. Nunc luctus libero lectus, et semper neque commodo in. Duis luctus, ligula eget ultrices fringilla, urna libero cursus est, at lobortis metus justo in sapien. Maecenas sit amet urna sed ligula rutrum sollicitudin. Fusce luctus pellentesque augue, ac porttitor lectus ultrices eget. Nullam commodo orci ut tincidunt volutpat. Curabitur in sagittis nisi. Quisque porta turpis at ipsum ultricies laoreet. Fusce quam orci, gravida sit amet facilisis at, faucibus ut turpis. Vestibulum aliquam massa lacus, condimentum tempus nisl iaculis a. Ut accumsan cursus velit. Nunc commodo nulla ut laoreet malesuada. Sed ultrices porta metus.</p>
        </HeightFadeContent>
    </section>
    <section id="TextGenerate-section" class="px-12 lg:px-32 py-16 border-t border-stone-500 relative">
        <div class="flex flex-col items-center justify-center w-full h-max">
            <TextGenerate duration="0.4" words="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan ligula ac ipsum bibendum suscipit. Nunc luctus libero lectus, et semper neque commodo in. Duis luctus, ligula eget ultrices fringilla, urna libero cursus est, at lobortis metus justo in sapien. Maecenas sit amet urna sed ligula rutrum sollicitudin. Fusce luctus pellentesque augue, ac porttitor lectus ultrices eget. Nullam commodo orci ut tincidunt volutpat. Curabitur in sagittis nisi. Quisque porta turpis at ipsum ultricies laoreet. Fusce quam orci, gravida sit amet facilisis at, faucibus ut turpis. Vestibulum aliquam massa lacus, condimentum tempus nisl iaculis a. Ut accumsan cursus velit. Nunc commodo nulla ut laoreet malesuada. Sed ultrices porta metus." class="text-2xl"></TextGenerate>
          </div>  
    </section>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import AnimatedContent from '@/components/AnimatedContent.vue'
import { gsap } from 'gsap'
import AnimationTest from '@/sections/AnimationTest.vue'
import HeightFadeContent from '../components/HeightFadeContent.vue'
import TextGenerate from '../components/TextGenerate.vue'

const texts = [
    '无人爱苦',
    '亦无人寻之欲之',
    '乃因其苦'
]
const currentText = ref(texts[0])
const animatedContent = ref(null)
let intervalId = null

const triggerAnimation = () => {
    const el = animatedContent.value.$el
    if (!el) return

    // 重置元素状态
    gsap.set(el, {
        x: 100,
        transformOrigin: 'center center'
    })

    // 执行动画
    gsap.to(el, {
        x: 0,
        clearProps: 'all'
    })
}

const rotateText = () => {
    const currentIndex = texts.indexOf(currentText.value)
    const nextIndex = (currentIndex + 1) % texts.length
    currentText.value = texts[nextIndex]
    triggerAnimation()
}

onMounted(() => {
    intervalId = setInterval(rotateText, 3000) // 每3秒切换一次文本
})

onUnmounted(() => {
    if (intervalId) {
        clearInterval(intervalId)
    }
})
</script>

<style scoped>
.relative {
    position: relative;
}

.text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}

/* 可选：添加半透明背景使文字更加清晰 */
.text-overlay-bg {
    background-color: rgba(0, 0, 0, 0.3);
    padding: 10px;
    border-radius: 5px;
}
</style>