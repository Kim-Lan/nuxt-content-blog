<script setup lang="ts">
useHead({
  title: 'Kim-Lan\'s DevLog',
})
</script>

<template>
  <main class="py-8">
    <ContentList
      path="/posts"
      :query="{
        where: [{ draft: false }],
        sort: [{ datePosted: -1 }],
      }"
      v-slot="{ list }"
    >
      <div
        v-for="post in list"
        :key="post._path"
        class="bg-white rounded-md overflow-hidden mb-8 drop-shadow hover:bg-softblue hover:text-gray-100"
      >
        <NuxtLink :to="`/${post.slug}`">
          <div class="h-[320px] relative">
            <img :src="post.thumbnail" class="w-full h-full object-cover absolute" />
          </div>
          <div class="p-4">
            <h2 class="text-2xl font-semibold">
              {{ post.title }}
            </h2>
            <!-- <div class="text-sm text-gray-500 mt-px mb-2">
              {{ new Date(post.datePosted).toLocaleDateString() }}
            </div> -->
            <p>{{ post.description }}</p>
          </div>
        </NuxtLink>
      </div>
    </ContentList>
  </main>
</template>
