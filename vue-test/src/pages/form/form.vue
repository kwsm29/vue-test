<template>
    <main class="l-main">
      <div class="l-container">
        <form class="p-form" v-on:submit="$router.push('./confirm')">
          <div class="group">
            <label for="name">名前：</label>
            <div class="form-row">
              <div class="col">
                <input type="text" v-model="form.familyName" autocomplete="family-name" placeholder="名字" required>
                <small v-bind:class="{'is-hide':validation.familyName}">{{ errorMessage.familyName }}</small>
              </div>
              <div class="col">
                <input type="text" v-model="form.givenName" autocomplete="given-name" placeholder="名前">
                <small v-bind:class="{'is-hide':validation.givenName}">{{ errorMessage.givenName }}</small>
              </div>
            </div>
          </div>
          <div class="group">
            <label for="name">電話番号：</label>
            <input type="tel" v-model="form.tel"  autocomplete="tel" placeholder="電話番号">
            <small v-bind:class="{'is-hide':validation.tel}">{{ errorMessage.tel }}</small>
          </div>
          <div class="group">
            <label for="name">メールアドレス：</label>
            <input type="email" v-model="form.email"  autocomplete="email" placeholder="メールアドレス" autocorrect="off" autocapitalize="off">
            <small v-bind:class="{'is-hide':validation.email}">{{ errorMessage.email }}</small>
          </div>
          <button type="submit" v-bind:disabled="!isValid" class="submitBtn">確認</button>
        </form>
      </div>
    </main>
</template>

<style>

</style>

<script>
export default {
　　data() {
      return {
          title: 'about',
          errorMessage: {
            familyName: '名字を入力してください',
            givenName: '名前を入力してください',
            tel: '電話番号を入力してください',
            email: 'メールアドレスを入力してください',
          }
      }
  },
  computed: {
    validation() {
      const form = this.form
        return {
          familyName : !!form.familyName,
          givenName : !!form.givenName,
          tel : (() => {
            if(!!form.tel) {
              form.tel.replace(/[━.*‐.*―.*－.*\-.*ー.*\-]/gi,'')
              if (!form.tel.match(/^(0[5-9]0[0-9]{8}|0[1-9][1-9][0-9]{7})$/)) {
                return false
              }
              return true
            } else {
              return false
            }
          })(),
          email : (() => {
            if(!!form.email) {
              if (!form.email.match(/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/)) {
                return false
              }
              return true
            } else {
              return false
            }
          })()
        }
      },
      isValid() {
        var validation = this.validation
        return Object.keys(validation).every(function (key) {
          return validation[key]
      })
    }
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