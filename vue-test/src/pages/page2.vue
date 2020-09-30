<template>
    <p>page2です</p>
</template>

<style>

</style>

<script>
export default {
　　data() {
      return {
          title: 'about',
      }
  },
  head: {
    title() {
      return {
        inner: this.title,
        separator: '|',
        complement: 'Vueテスト',
      }
    },
    meta() {
      return [
        { name: 'description', content: 'トップページです' }
      ]
    },
  }
}
</script>