<template>
    <main class="l-main">
      <div class="l-container">
        <ul class="p-list">
          <li v-for="item in animal" :key="item.id" class="c-card">
            <figure><img :src="item.img" alt=""></figure>
            {{ item.name }}
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
import Vue from 'vue'
//コンポーネントのscriptは eport defaultde で囲む
export default {
　　data() {
      return {
          title: 'toop',
          animal: [
            {name: 'いぬ',
            img : require('@/assets/images/dog.png')}
            // 'ねこ',
            // 'うさぎ',
            // 'ぞう',
          ],
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