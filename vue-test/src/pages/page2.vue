<template>
    <main class="l-main">
      <div class="l-container">
        <p>page2</p>
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
          // form: {
          //   familyName:'',
          //   givenName:'',
          //   tel:'',
          //   email:'',
          // },
          // errorMessage: {
          //   familyName: '名字を入力してください',
          //   givenName: '名前を入力してください',
          //   tel: '電話番号を入力してください',
          //   email: 'メールアドレスを入力してください',
          // }
      }
  },
  // computed: {
  //   validation() {
  //     const form = this.form
  //       return {
  //         familyName : !!form.familyName,
  //         givenName : !!form.givenName,
  //         tel : (() => {
  //           if(!!form.tel) {
  //             form.tel.replace(/[━.*‐.*―.*－.*\-.*ー.*\-]/gi,'')
  //             if (!form.tel.match(/^(0[5-9]0[0-9]{8}|0[1-9][1-9][0-9]{7})$/)) {
  //               return false
  //             }
  //             return true
  //           } else {
  //             return false
  //           }
  //         })(),
  //         email : (() => {
  //           if(!!form.email) {
  //             if (!form.email.match(/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/)) {
  //               return false
  //             }
  //             return true
  //           } else {
  //             return false
  //           }
  //         })()
  //       }
  //     },
  //     isValid() {
  //       var validation = this.validation
  //       return Object.keys(validation).every(function (key) {
  //         return validation[key]
  //     })
  //   }
  // },
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