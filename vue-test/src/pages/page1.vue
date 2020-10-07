<template>
    <main class="l-main">
      <div class="l-container">

        <div class="p-search">
          どうぶつ検索：<input type="text" v-model="searchAnimal" placeholder="どうぶつ">
        </div>
        <ul class="p-list">
          <li v-for="item in fillterAnimal" :key="item.id" class="c-card">
            <p class="name">{{ item.name }}</p>
            <figure><img :src="require('../assets/images/' + item.img )" alt=""></figure>
          </li>
        </ul>

        <div class="p-search">
          フルーツ検索：<input type="text" v-model="searchFruits" placeholder="フルーツ">
        </div>
        <ul class="p-list">
          <li v-for="item in fillterFruits" :key="item.id" class="c-card">
            {{ item }}
          </li>
        </ul>
      </div>
    </main>
</template>

<style>
</style>

<script defer>
import animals from '../assets/json/animal.json'

//コンポーネントのscriptは eport defaultde で囲
export default {
　　data() {
      return {
          title: 'top',
          searchAnimal:'',
          searchFruits:'',
          animal: animals,
          fruits: [
            'りんご',
            'みかん',
            'ぶどう',
            'いちご',
          ],
      }
  },
  computed: {
    fillterAnimal() {
      return this.animal.filter(v => v.name.match(this.searchAnimal))
    },
    fillterFruits() {
      return this.fruits.filter(v => v.match(this.searchFruits))
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