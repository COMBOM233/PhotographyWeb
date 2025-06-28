<template>
    <!-- Navbar start -->
    <nav class="w-screen fixed bg-opacity-90 bg-white p-4 lg:px-20 flex justify-between z-50">
		<!-- Logo start -->
		<div class="h-full flex flex-col justify-center">
			<p class="tracking-widest font-semibold text-2xl">捕风捉影</p>
			<p class="tracking-widest font-light">PHOTOGRAPHY</p>
		</div>
		<!-- Logo end -->

		<!-- Toggler start -->
		<button role="menubar" class="md:hidden" @click="navToggle()">
			<img src="@/assets/menu_toggle.png" alt="menu" class="w-8 h-8">
		</button>
		<!-- Toggler end -->

		<!-- Menu content start -->
		<div class="absolute left-0 right-0 translate-y-16 bg-opacity-90 bg-white md:bg-none md:bg-opacity-0 shadow hidden md:flex flex-col gap-4 items-center p-4 md:flex-row md:static md:shadow-none md:translate-y-0" role="menu" aria-expanded="false">
			<!-- Links start -->
			<router-link to="/" role="menuitem" class="relative group">
				<p class="mx-4" style="font-size: 20px;">首页</p>
				<span class="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
			</router-link>

			<router-link to="/style" role="menuitem" class="relative group">
				<p class="mx-4" style="font-size: 20px;">风格</p>
				<span class="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
			</router-link>

			<router-link to="/about" role="menuitem" class="relative group">
				<p class="mx-4" style="font-size: 20px;">品牌</p>
				<span class="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
			</router-link>

			<router-link to="/store" role="menuitem" class="relative group">
				<p class="mx-4" style="font-size: 20px;">门店</p>
				<span class="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
			</router-link>

			<router-link to="/playground" role="menuitem" class="relative group">
				<p class="mx-4" style="font-size: 20px;">花絮</p>
				<span class="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
			</router-link>

			<router-link to="/articles" role="menuitem" class="relative group">
				<p class="mx-4" style="font-size: 20px;">文章</p>
				<span class="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
			</router-link>

			<button class="btn" role="menuitem" @click="showContactModal = true">
				联系我们
			</button>
			<!-- Links end -->
		</div>
		<!-- Menu content end -->
	</nav>
    <!-- Navbar end -->
    
    <!-- 联系我们弹窗 -->
    <ContactModal v-if="showContactModal" @close="showContactModal = false" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ContactModal from '@/sections/ContactModal.vue';

const showContactModal = ref(false);

const navToggle = (): void => {
    const menu = document.querySelector("[role='menu']") as HTMLElement;
    const isExpanded = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', (!isExpanded).toString());
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
};
</script>

<style>
/* 删除之前的 @keyframes underline 动画，因为我们现在使用 transition 实现 */
</style>