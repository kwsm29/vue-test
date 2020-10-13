<template>
    <main class="l-main">
      <div class="l-container">
        <form class="p-form" @submit.prevent="submitForm" >
          <div class="group">
            <label for="name" class="required">名前</label>
            <div class="form-row">
              <div class="col">
                <input type="name" autocomplete="family-name" v-model="form.familyName" placeholder="姓" @blur="$v.form.familyName.$touch()" :class="{invalid: $v.form.familyName.$error}" class="formItem">
                <small v-if="$v.form.familyName.$error">名字を入力してください</small>
              </div>
              <div class="col">
                <input type="text" autocomplete="given-name" v-model="form.givenName" placeholder="名" @blur="$v.form.givenName.$touch()" :class="{invalid: $v.form.givenName.$error}" class="formItem">
                <small v-if="$v.form.givenName.$error">名前を入力してください</small>
              </div>
            </div>
          </div>
          <div class="group">
              <label for="address">出身地</label>
                <select name="address" v-model="form.address">
                    <option disabled selected value>選択してください</option>
                    <option value="東京">東京</option>
                    <option value="青森">青森</option>
                    <option value="埼玉">埼玉</option>
                    <option value="神奈川">神奈川</option>
                </select>
          </div>
          <div class="group">
            <label for="name" class="required">電話番号</label>
            <input type="tel" v-model="form.tel" maxlength="11"  autocomplete="tel" placeholder="電話番号" @blur="$v.form.tel.$touch()" :class="{invalid: $v.form.tel.$error}" class="formItem">
            <div v-if="$v.form.tel.$error">
                <small v-if="!$v.form.tel.required">電話番号が入力されていません。</small>
                <small v-if="!$v.form.tel.numeric">電話番号の形式が正しくありません。</small>
            </div>
          </div>
          <div class="group">
            <label for="name" class="required">メールアドレス</label>
            <input type="email" v-model="form.email"  autocomplete="email" placeholder="メールアドレス" autocorrect="off" autocapitalize="off" @blur="$v.form.email.$touch()" :class="{invalid: $v.form.email.$error}" class="formItem" list="suggestions">
            <datalist id="suggestions">
              <option v-for="domain in domains" :value="getSuggest(domain)"></option>
            </datalist>
            <div v-if="$v.form.email.$error">
                <small v-if="!$v.form.email.required">メールドレスが入力されていません。</small>
                <small v-if="!$v.form.email.email">メールアドレスの形式が正しくありません。</small>
            </div>
          </div>
          <button type="submit" class="submitBtn">確認</button>
        </form>
      </div>
    </main>
</template>

<style>

</style>

<script>

import { required ,email,numeric } from 'vuelidate/lib/validators'

export default {
　　data() {
      return {
          title: 'contact',
          domains: [
            "@gmail.com",
            "@yahoo.co.jp",
            "@ezweb.ne.jp",
            "@docomo.ne.jp",
            "@softbank.ne.jp"
          ]
      }
  },
  validations: {
      form: {
        familyName: {required},
        givenName: {required},
        tel: {required,numeric},
        email: {required,email},
      },
  },
  methods: {
    getSuggest: function (domain) {
      if ((this.form.email.match(/@/g) || []).length === 1) {
        const emailUserName = this.form.email.split('@')[0]
        return emailUserName + domain
      } else {
        return null
      }
    },
    submitForm(){
        this.$v.$touch();
        if(this.$v.$invalid){
            console.log(this.$v.$invalid)
            console.log('バリデーションエラー');
        }else{
            console.log('submit');
            this.$router.push('./confirm')
        }
    },
  },
    props: {
        form: Object
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