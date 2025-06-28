<template>
  <div class="relative flex flex-col md:flex-row justify-center w-svw h-max bg-white">
    <div class="w-full h-full md:absolute md:left-24 md:top-0 md:w-max md:h-max">
      <ClientOnly>
        <CardContainer>
          <CardBody
            class="group/card relative size-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 sm:w-[30rem] dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
            <CardItem :translate-z="50" class="text-xl font-bold text-neutral-600 dark:text-white">
              风格A
            </CardItem>
            <CardItem as="p" translate-z="60" class="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300">
              Sry for the repeating images, I'm too lazy to find a new one
            </CardItem>
            <CardItem :translate-z="100" class="mt-4 w-full">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                height="1000" width="1000" class="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                alt="thumbnail" />
            </CardItem>
          </CardBody>
        </CardContainer>
      </ClientOnly>
    </div>
    <div class="w-full h-full md:w-max md:h-max">
      <ClientOnly>
        <CardContainer>
          <CardBody
            class="group/card relative size-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 sm:w-[30rem] dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
            <CardItem :translate-z="50" class="text-xl font-bold text-neutral-600 dark:text-white">
              风格B
            </CardItem>
            <CardItem as="p" translate-z="60" class="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300">
              Sry for the repeating images, I'm too lazy to find a new one
            </CardItem>
            <CardItem :translate-z="100" class="mt-4 w-full">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                height="1000" width="1000" class="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                alt="thumbnail" />
            </CardItem>
          </CardBody>
        </CardContainer>
      </ClientOnly>
    </div>

    <div class="w-full h-full md:absolute md:right-24 md:top-0 md:w-max md:h-max">
      <ClientOnly>
        <CardContainer>
          <CardBody
            class="group/card relative size-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 sm:w-[30rem] dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
            <CardItem :translate-z="50" class="text-xl font-bold text-neutral-600 dark:text-white">
              风格C
            </CardItem>
            <CardItem as="p" translate-z="60" class="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300">
              Sry for the repeating images, I'm too lazy to find a new one
            </CardItem>
            <CardItem :translate-z="100" class="mt-4 w-full">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                height="1000" width="1000" class="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                alt="thumbnail" />
            </CardItem>
          </CardBody>
        </CardContainer>
      </ClientOnly>
    </div>

  </div>
  <div class="relative flex flex-row justify-center w-svw h-10 bg-white"></div>
  <div class="relative flex flex-col md:flex-row justify-center w-svw h-max bg-white">
    <div class="w-full h-full md:absolute md:left-24 md:top-0 md:w-max md:h-max">
      <ClientOnly>
        <CardContainer>
          <CardBody
            class="group/card relative size-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 sm:w-[30rem] dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
            <CardItem :translate-z="50" class="text-xl font-bold text-neutral-600 dark:text-white">
              风格D
            </CardItem>
            <CardItem as="p" translate-z="60" class="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300">
              Sry for the repeating images, I'm too lazy to find a new one
            </CardItem>
            <CardItem :translate-z="100" class="mt-4 w-full">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                height="1000" width="1000" class="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                alt="thumbnail" />
            </CardItem>
          </CardBody>
        </CardContainer>
      </ClientOnly>
    </div>
    <div class="w-full h-full md:w-max md:h-max">
      <ClientOnly>
        <CardContainer>
          <CardBody
            class="group/card relative size-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 sm:w-[30rem] dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
            <CardItem :translate-z="50" class="text-xl font-bold text-neutral-600 dark:text-white">
              风格E
            </CardItem>
            <CardItem as="p" translate-z="60" class="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300">
              Sry for the repeating images, I'm too lazy to find a new one
            </CardItem>
            <CardItem :translate-z="100" class="mt-4 w-full">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                height="1000" width="1000" class="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                alt="thumbnail" />
            </CardItem>
          </CardBody>
        </CardContainer>
      </ClientOnly>
    </div>
    <div class="w-full h-full md:absolute md:right-24 md:top-0 md:w-max md:h-max">
      <ClientOnly>
        <CardContainer>
          <CardBody
            class="group/card relative size-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 sm:w-[30rem] dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
            <CardItem :translate-z="50" class="text-xl font-bold text-neutral-600 dark:text-white">
              风格F
            </CardItem>
            <CardItem as="p" translate-z="60" class="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300">
              Sry for the repeating images, I'm too lazy to find a new one
            </CardItem>
            <CardItem :translate-z="100" class="mt-4 w-full">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                height="1000" width="1000" class="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                alt="thumbnail" />
            </CardItem>
          </CardBody>
        </CardContainer>
      </ClientOnly>
    </div>
  </div>
  <div class="relative flex flex-row justify-center w-svw h-10 bg-white"></div>

</template>

<script setup lang="ts">
import { CardContainer, CardBody, CardItem } from "@/components/ui/card-3d";
</script>