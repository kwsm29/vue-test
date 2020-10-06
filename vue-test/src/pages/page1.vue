<template>
    <main class="l-main">
      <div class="l-container">
        <ul class="p-list">
          <li v-for="item in animal" :key="item.id" class="c-card">
            <p class="name">{{ item.name }}</p>
            <figure><img :src="require('../assets/images/' + 
             item.img )" alt=""></figure>
          </li>
        </ul>
        <ul class="p-list">
          <li v-for="item in fruits" :key="item.id" class="c-card">
            {{ item }}
          </li>
        </ul>
      </div>
    </main>
</template>

<style>
</style>

<script defer>
import animal from '../assets/json/animal.json'

//コンポーネントのscriptは eport defaultde で囲
export default {
　　data() {
      return {
          title: 'toop',
          animal: animal,
          fruits: [
            'りんご',
            'みかん',
            'ぶどう',
            'いちご',
          ],
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