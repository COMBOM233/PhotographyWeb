<template>
  <!-- 
  这是一个实现渐变出现动画的组件 FadeContent
   -->
  <div ref="contentRef">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, onBeforeUnmount, defineComponent, PropType } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type AnimationDirection = 'vertical' | 'horizontal';

export default defineComponent({
  name: 'AnimatedContent',
  props: {
    distance: {
      type: Number as PropType<number>,
      default: 100
    },
    direction: {
      type: String as PropType<AnimationDirection>,
      default: 'horizontal',
      validator: (value: string): boolean => ['vertical', 'horizontal'].includes(value)
    },
    reverse: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    duration: {
      type: Number as PropType<number>,
      default: 0.8
    },
    ease: {
      type: String as PropType<string>,
      default: 'power3.out'
    },
    initialOpacity: {
      type: Number as PropType<number>,
      default: 0
    },
    animateOpacity: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    scale: {
      type: Number as PropType<number>,
      default: 1
    },
    threshold: {
      type: Number as PropType<number>,
      default: 0.1
    },
    delay: {
      type: Number as PropType<number>,
      default: 0
    }
  },
  setup(props) {
    const contentRef = ref<HTMLElement | null>(null)

    onMounted(() => {
      const el = contentRef.value
      if (!el) return

      const axis = props.direction === 'horizontal' ? 'x' : 'y'
      const offset = props.reverse ? -props.distance : props.distance
      const startPct = (1 - props.threshold) * 100

      gsap.set(el, {
        [axis]: offset,
        scale: props.scale,
        opacity: props.animateOpacity ? props.initialOpacity : 1
      })

      gsap.to(el, {
        [axis]: 0,
        scale: 1,
        opacity: 1,
        duration: props.duration,
        ease: props.ease,
        delay: props.delay,
        scrollTrigger: {
          trigger: el,
          start: `top ${startPct}%`,
          toggleActions: 'play none none none',
          once: true
        }
      })
    })

    onBeforeUnmount(() => {
      ScrollTrigger.getAll().forEach(t => t.kill())
      if (contentRef.value) {
        gsap.killTweensOf(contentRef.value)
      }
    })

    return {
      contentRef
    }
  }
})
</script> 