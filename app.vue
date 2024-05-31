<script setup lang="ts">
useHead({
  link: [
    { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' }
  ]
})
</script>

<template>
  <div class="max-w-3xl px-4 mx-auto">
    <!-- Header -->
    <header class="pt-8 pb-4 flex flex-col items-start gap-4">
      <div>
        <h1 class="text-2xl font-semibold hover:text-sky-300">
          <NuxtLink to="/">
            Kim-Lan's DevLog
          </NuxtLink>
        </h1>
        <p class="text-gray-500">Developer. Always learning something new. DevLog made with Nuxt Content and Tailwind CSS.</p>
      </div>
      <div>
        <NuxtLink to="https://github.com/Kim-Lan" target="_blank">
          <button class="bg-white rounded px-2 py-px text-gray-800 hover:bg-sky-300 drop-shadow">
            <i class="fa fa-github"></i> GitHub
          </button>
        </NuxtLink>
      </div>
    </header>

    <!-- Main Content -->
    <NuxtPage />
  </div>
</template>

<style>
body {
  @apply bg-gray-100
}
</style>
