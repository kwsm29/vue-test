<template>
    <main class="l-main">
        <div class="l-container">
            <div class="p-form">
                <div class="group">
                  <p class="item">名前：</p>
                  <div class="form-row">
                    <p>{{ form.familyName }}</p>
                    <p>{{ form.givenName }}</p>
                  </div>
                </div>
                <div class="group">
                  <p class="item">電話番号：</p>
                  <p>{{ form.tel }}</p>
                </div>
                <div class="group">
                  <p class="item">メールアドレス：</p>
                  <p>{{ form.email }}</p>
                </div>
                <div class="btnBox">
                  <button v-on:click="$router.back()" class="submitBtn">戻る</button>
                  <router-link to="./complete" tag="button" class="submitBtn">送信</router-link>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
  props: {
    form: Object
  }
}
</script>