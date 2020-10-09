<template>
    <main class="l-main">
      <div class="l-container">
        <div>
          <div>
            <!-- 入力 -->
            <span v-if="$route.meta.isConfirm">> 確認</span>
          </div>
          <!-- <router-view v-bind:form.sync="form"></router-view> -->
        </div>
        <router-view v-bind:form.sync="form"></router-view>
      </div>
    </main>
</template>

<style>

</style>

<script>
export default {
　　data() {
      return {
          title: 'contact',
          form: {
            familyName:'',
            givenName:'',
            tel:'',
            email:'',
          },
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
        { name: 'description', content: 'お問い合わせページです' }
      ]
    },
  }
}
</script>