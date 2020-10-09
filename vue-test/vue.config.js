module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/sass/style.scss";` //グローバルで読みたいファイル名
      }
    }
  },
  productionSourceMap: true, //これはmapファイルの生成有無。作りたくない場合はfalseでOK。
};
