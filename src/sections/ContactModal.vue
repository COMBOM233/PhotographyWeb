<template>
    <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" @click.self="closeModal">
        <div class="relative flex flex-col bg-white p-8 rounded-lg w-1/2 h-1/2 items-center justify-center">
            <AnimatedContent>
                <p class="text-5xl font-semibold">即刻联系我们</p>
            </AnimatedContent>
            <img src="@/assets/QRcode/QRcode_pic.jpg" alt="QRCODE" class="w-1/2 h-1/2 object-scale-down">
            <div class="flex w-full h-max text-2xl mt-2 text-xs items-center justify-center">
                <h1>DONT SCAN THIS IT LEADS TO NOTHING</h1>
            </div>
            <div class="absolute left-48 top-30 w-40 h-1/2 flex flex-col items-center justify-center">
                <TextGenerate :words="xian" :duration="0.7" class="text-5xl font-semibold" />
                <TextGenerate :words="zai" :duration="0.7" class="text-5xl font-semibold" />
            </div>
            <div class="absolute right-48 top-30 w-40 h-1/2 flex flex-col items-center justify-center">
                <TextGenerate :words="li" :duration="0.7" class="text-5xl font-semibold" />
                <TextGenerate :words="ke" :duration="0.7" class="text-5xl font-semibold" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TextGenerate from '@/components/TextGenerate.vue';
import AnimatedContent from '@/components/AnimatedContent.vue';
const xian = ref("现")
const zai = ref("在")
const li = ref("立")
const ke = ref("刻")

const emit = defineEmits(['close']);

const closeModal = () => {
    emit('close');
}
</script>