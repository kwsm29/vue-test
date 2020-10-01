<template>
    <main class="l-main">
      <p>page2です</p>
    </main>
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