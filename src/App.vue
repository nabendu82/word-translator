<template>
  <div id="app">
    <h1>Translator Word</h1>
    <h5>Created with ❤️ in 🇮🇳 with Vue.js</h5>
    <TranslateForm v-on:formSubmit="translateText"></TranslateForm>
    <TranslateOutput v-text="translatedText"></TranslateOutput>
  </div>
</template>

<script>
import TranslateForm from './components/TranslateForm.vue'
import TranslateOutput from './components/TranslateOutput'

export default {
  name: 'app',
  components: {
    TranslateForm,
    TranslateOutput
  },
  data: function(){
    return {
      translatedText:''
    }
  },
  methods: {
    translateText:function(text, language) {
      this.$http.get(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180913T161428Z.12318f9a2ba0ba41.e96fcf08abc5d4ea04120527171b69fcf7a0ab22&lang=${language}&text=${text}`)
        .then(response => {
          this.translatedText = response.body.text[0];    
        })
    }
  }
}
</script>

<style>
#app {
  display: grid;
  justify-content: center;
  justify-items: center;
  align-items: center;

}
</style>
