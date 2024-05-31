<script setup lang="ts">
</script>

<template>
  <div class="max-w-3xl px-4 mx-auto">
    <!-- Header -->
    <header class="pt-8 pb-4 flex flex-col items-start gap-4">
      <div>
        <NuxtLink to="/">
          <div class="flex flex-row items-center gap-2 mb-px">
            <img src="/images/KL-logo.png" width="30px" />
            <h1 class="text-2xl font-semibold hover:text-softblue">
                Kim-Lan's DevLog
            </h1>
          </div>
        </NuxtLink>
        <p class="text-gray-500">Developer. Always learning something new. DevLog made with Nuxt Content and Tailwind CSS.</p>
      </div>
      <div>
          <button
            class="bg-white rounded-md px-2 py-px text-gray-800 drop-shadow hover:bg-softblue hover:text-gray-100"
            @click.prevent="navigateTo('https://github.com/Kim-Lan', { open: { target: '_blank' }})"
          >
            <i class="fa fa-github"></i> GitHub
          </button>
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
