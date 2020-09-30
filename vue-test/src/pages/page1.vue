<template>
    <p>トップページです</p>
</template>

<style scoped>
 p {
     color: red;
 }
</style>

<script>
export default {
　　data() {
      return {
          title: 'toop',
      }
  },
  head: {
    title() {
      return {
        inner: 'トップページ',
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