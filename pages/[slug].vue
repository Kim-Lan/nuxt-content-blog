<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return `${titleChunk} | Kim-Lan's DevLog`;
  }
})

const route = useRoute();
const slug = route.params.slug;
</script>

<template>
  <main class="py-8 mb-8">
    <BackButton />
    <div class="bg-white rounded-md drop-shadow my-3">
      <ContentDoc :path="`/posts/${slug}`" v-slot="{ doc }">
        <!-- Header -->
        <div>
          <div class="text-center p-5">
            <h2 class="text-4xl font-semibold">{{ doc.title }}</h2>
            <!-- <div class="text-gray-500 text-sm mt-2">
              {{ new Date(doc.datePosted).toLocaleDateString() }}
            </div> -->
          </div>
          <img :src="doc.thumbnail" class="w-full h-full object-cover" />
        </div>

        <!-- Content -->
        <div class="content p-5">
          <ContentRenderer :value="doc"></ContentRenderer>
        </div>
      </ContentDoc>
    </div>
    <BackButton />
  </main>
</template>

<style>
.content p:not(:last-child),
.content blockquote:not(:last-child),
.content h1:not(:last-child),
.content h2:not(:last-child),
.content h3:not(:last-child),
.content h4:not(:last-child),
.content pre:not(:last-child),
.content table:not(:last-child) {
  @apply mb-4;
}

.content li {
  @apply mb-2;
}

.content li:last-child {
  @apply mb-4;
}

.content h1 {
  @apply text-3xl font-bold;
}
.content h2 {
  @apply text-2xl font-bold;
}
.content h3 {
  @apply text-xl font-bold;
}
.content h4 {
  @apply text-lg font-bold;
}
.content h5 {
  @apply text-base font-bold;
}

.content ul {
  @apply ml-4;
  list-style-type: disc;
}
</style>
