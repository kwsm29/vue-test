<template>
    <main class="l-main">
      <p>トップページです</p>
    </main>
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