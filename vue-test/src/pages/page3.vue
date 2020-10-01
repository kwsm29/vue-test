<template>
    <main class="l-main">
      <p>page3です</p>
    </main>
</template>

<style>

</style>

<script>
export default {
  head: {
    title() {
      return {
        inner: 'contact',
        separator: '|',
        complement: 'Vueテスト',
      }
    },
    meta() {
      return [
        { name: 'description', content: 'contactページです' }
      ]
    },
  },
}
</script>