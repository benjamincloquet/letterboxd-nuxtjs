<template>
  <main class="flex flex-col gap-4 items-center font-sans pt-8">
    <p class="text-8xl">{{ error.statusCode || 'Error' }}</p>
    <p>{{ error.message }}</p>
    <h1>Oops ! An error occurred.</h1>
    <NuxtLink class="underline" to="/">Take me back home</NuxtLink>
  </main>
</template>

<script>
export default {
  layout: 'error',
  props: ['error'], // you can set a custom layout for the error page
}
</script>
