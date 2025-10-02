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
        sort: [{ index: 1 }],
      }"
      v-slot="{ list }"
    >
      <div
        v-for="post in list"
        :key="post._path"
        class="bg-white rounded-md overflow-hidden mb-8 drop-shadow"
      >
        <div class="h-[320px] relative">
          <img :src="post.thumbnail" class="w-full h-full object-cover object-top absolute" />
        </div>
        <div class="p-4">
          <div>
            <h2 class="text-2xl font-semibold">
              {{ post.title }}
            </h2>
            <!-- <div class="text-sm text-gray-500 mt-px mb-2">
              {{ new Date(post.datePosted).toLocaleDateString() }}
            </div> -->
            <p>{{ post.description }}</p>
          </div>
          <div class="flex justify-end mt-4">
            <button
              class="bg-white rounded-md px-4 py-2 text-gray-800 drop-shadow hover:bg-softblue hover:text-gray-100 font-bold"
              @click.prevent="navigateTo(`/${post.slug}`)"
            >
                Read More <fa icon="fa fa-arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </ContentList>
  </main>
</template>
