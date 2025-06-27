<template>
    <div class="relative flex flex-col items-center justify-center w-full h-96">

    </div>
    <div class="relative flex flex-col items-center justify-center w-full h-96">
        <AnimatedContent class="absolute left-0 bottom-20">
            <h1 class="uppercase text-5xl mb-4 font-semibold text-white">
                LEARN MORE ABOUT US
            </h1>
        </AnimatedContent>
        <AnimatedContent class="absolute left-0 bottom-0">
            <p class="uppercase text-5xl mb-4 font-semibold text-white">
                进 一 步 了 解 我 们
            </p>
        </AnimatedContent>
        <AnimatedContent class="absolute left-2 bottom-20">
            <div class="bg-white w-64 h-1 rounded-none"></div>
        </AnimatedContent>

    </div>
    <div class="relative flex flex-col items-center w-full h-max bg-white">
        <div class="flex flex-col w-5/12 h-max">
            <p class="text-5xl font-semibold">品牌介绍</p>
            <div class="bg-gray-500 w-48 h-1 rounded-none mt-4"></div>
            <div class="flex flex-row mt-4 text-stone-500 w-full">
                <TextGenerate :words="brandText" :duration="0.4" class="text-1xl" />
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AnimatedContent from '@/components/AnimatedContent.vue'
import TextGenerate from '@/components/TextGenerate.vue'

// 将长文本内容存储在变量中
const brandText = ref(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan ligula ac ipsum bibendum
suscipit. Nunc luctus libero lectus, et semper neque commodo in. Duis luctus, ligula eget ultrices
fringilla, urna libero cursus est, at lobortis metus justo in sapien. Maecenas sit amet urna sed ligula
rutrum sollicitudin. Fusce luctus pellentesque augue, ac porttitor lectus ultrices eget. Nullam commodo
orci ut tincidunt volutpat. Curabitur in sagittis nisi. Quisque porta turpis at ipsum ultricies laoreet.
Fusce quam orci, gravida sit amet facilisis at, faucibus ut turpis. Vestibulum aliquam massa lacus,
condimentum tempus nisl iaculis a. Ut accumsan cursus velit. Nunc commodo nulla ut laoreet malesuada.
Sed ultrices porta metus. Integer in consectetur nisl, ac congue ipsum. Curabitur pulvinar tellus
sodales, hendrerit massa eget, ultricies eros.

Proin metus purus, scelerisque a rhoncus id, viverra et nibh. Phasellus tempus, ligula et pulvinar
vestibulum, mauris tellus rutrum lacus, ut ultrices magna risus quis velit. Curabitur non nulla odio.
Suspendisse nibh nunc, tristique eu sodales eu, convallis sit amet dui. Integer faucibus orci nec ex
fermentum elementum. Aenean tincidunt euismod metus ut convallis. Nam sagittis mi tellus. Vivamus eget
ipsum vitae metus iaculis viverra ut at justo. Etiam ultricies rhoncus lacinia. Donec tristique faucibus
fermentum. Maecenas scelerisque eu felis ut lacinia. Ut elementum sapien vel nulla suscipit, quis mollis
ex porta. Aenean id consectetur quam. Suspendisse quis sodales nisl.

Aenean eu mi vel nunc sodales congue. Vestibulum sed sem eget augue varius egestas aliquet vel nisi.
Vivamus ullamcorper ligula ac urna laoreet imperdiet. Integer malesuada lacinia justo id dignissim.
Aliquam dictum nec odio vitae lacinia. Pellentesque interdum sapien et sagittis eleifend. Maecenas
ullamcorper sem velit, nec euismod lorem porta eu. Donec nec mi in ipsum rutrum consequat.

Vivamus vel orci tellus. Cras aliquet scelerisque magna non lacinia. Duis et convallis arcu, eu
hendrerit dolor. Vivamus euismod et libero et pretium. Duis id lorem nisl. Maecenas tellus risus, varius
a est ac, convallis viverra purus. Donec a ligula porta, mollis velit sit amet, viverra arcu. Vivamus
faucibus urna neque, eu placerat nunc suscipit nec. Vivamus vitae ipsum nibh. Sed cursus sollicitudin
justo, congue convallis nisl mollis sit amet. Pellentesque egestas eu arcu eu euismod. Suspendisse
lacinia nisl felis, id fringilla diam dapibus a. Fusce tellus mauris, lacinia eu velit nec, vulputate
ultricies tortor. Sed eu viverra urna. Vestibulum fringilla convallis erat dignissim porttitor.

Sed aliquet consectetur mi, in iaculis eros faucibus in. Quisque tempus dolor quis eros fermentum,
luctus aliquam sapien fringilla. Mauris auctor lectus sed risus varius, sed volutpat enim laoreet. Nam
risus nisl, facilisis id nunc nec, elementum pulvinar turpis. Proin sodales, erat ut ultricies commodo,
erat est mattis lectus, et laoreet tortor felis id quam. Aenean vestibulum sed ipsum aliquet tempor.
Maecenas massa augue, aliquam sed sagittis non, eleifend vitae dui. Nam convallis lacinia eros, eget
rhoncus massa vulputate sit amet. Etiam ac nulla orci. Orci varius natoque penatibus et magnis dis
parturient montes, nascetur ridiculus mus. Ut non nisi id elit posuere imperdiet.`)
</script>