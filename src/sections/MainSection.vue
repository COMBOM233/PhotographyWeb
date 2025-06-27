<template>
	<!-- Main section start -->
	<section class="h-screen px-12 lg:px-32 py-32 mb-8">
		<div class="w-full md:w-1/2 h-full flex flex-col md:justify-center ">
			<!-- Main text start -->
			<h1 class="uppercase text-5xl mb-4 font-semibold ">
				向您介绍我们的工作室成员
			</h1>
			<p class="capitalize xl:w-1/2 text-stone-500">
				对不起, 我没有专业的肖像图片, 只有基米图片
			</p>
			<!-- Main text end -->

			<!-- Social links start -->
			<div class="flex mt-3 gap-8">
				<a href="#">
					<i class="fa-brands fa-instagram socialIcon"></i>
				</a>
				<a href="#">
					<i class="fa-brands fa-linkedin socialIcon"></i>
				</a>
				<a href="#">
					<i class="fa-brands fa-facebook socialIcon"></i>
				</a>
				<a href="#">
					<i class="fa-brands fa-dribbble socialIcon"></i>
				</a>
				<a href="#">
					<i class="fa-brands fa-pinterest socialIcon"></i>
				</a>
			</div>
			<!-- Social links end -->
		</div>

		<!-- Photographer image start -->
		<div class="absolute bottom-0 right-0 h-2/5 sm:h-1/2 md:h-3/5 lg:h-4/6">
			<AnimatedDisplay :testimonials="testimonials" :autoplay="true" :duration="5000" />
		</div>

		<!-- Photographer image end -->

		<!-- "More" button start -->
		<div class="w-full h-20 flex justify-start md:justify-center items-center">
			<a href="#about-section">
				<i
					class="fa-solid fa-arrow-down transition text-stone-100 text-xl bg-stone-700 rounded-full shadow p-4 hover:-translate-y-2 hover:shadow-xl"></i>
			</a>
		</div>
		<!-- "More" button end -->

	</section>
	<!-- Main section end -->
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AnimatedDisplay from '@/components/AnimatedDisplay.vue';
import pic1 from '@/assets/cats/cat1.jpeg';
import pic2 from '@/assets/cats/cat2.jpg';
import pic3 from '@/assets/cats/cat3.png';
// 导入图片


const testimonials = ref([
	{
		quote:
			"这是凶狠基米, 敢和他对视5秒说明你冷血指数爆表",
		name: "凶狠基米",
		designation: "不知为何看起来很愤怒",
		image: pic1,
	},
	{
		quote:
			"这是困倦基米, 他看起来很困, 但是实际上他非常困",
		name: "困倦基米",
		designation: "不知为何看起来很疲惫",
		image: pic2,
	},
	{
		quote:
			"这是派派基米, 他身后的显示器似乎是他最爱的游戏",
		name: "派派基米",
		designation: "不知为何看起来很开心",
		image: pic3,
	}
])
</script>

<style></style>