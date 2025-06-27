<template>
	<!-- Navbar start -->
	<navbar-element></navbar-element>
	<!-- Navbar end -->

	<!-- Rendered view start -->
	<router-view></router-view>
	<!-- Rendered view end -->

	<!-- Footer start -->
	<footer-element></footer-element>
	<!-- Footer end -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavbarElement from '@/components/NavbarElement.vue';
import FooterElement from '@/components/FooterElement.vue';

export default defineComponent({
	components: {
		FooterElement,
		NavbarElement
	}
});
</script>

<style>

</style>
