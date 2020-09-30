<template>
    <p>page3です</p>
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