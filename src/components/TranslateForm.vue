<template>
  <div id="translateForm">
    <form v-on:submit="formSubmit">
        <input class="textStyle" type="text" v-model="textToTranslate" placeholder="Enter a Word...">
        <select class="selectStyle" v-model="language">
          <option value="hi">Hindi</option>
          <option value="ja">Japanese</option>
          <option value="ta">Tamil</option>
          <option value="mr">Marathi</option>
          <option value="gu">Gujarati</option>
        </select>
        <input class="inpBtn" type="submit" value="Translate">
    </form>
  </div>
</template>

<script>

export default {
  name: 'translateForm',
  data(){
    return {
      textToTranslate:'',
      language:''
    }
  },
  created() {
    this.language = 'hi';
  },
  methods: {
    formSubmit(e){
      this.$emit('formSubmit', this.textToTranslate, this.language);
      e.preventDefault();
    }
  }
  
}
</script>

<style>
  .textStyle {
    font-size: 1.5rem;
    height: 40px;
    font-weight: 400; 
  }

  .selectStyle {
    font-size: 1.5rem;
    height: 47px;
    font-weight: 400;
    margin-left: 6px;
    margin-right: 6px;
  }

  .inpBtn {
    color: #fff;
    background-color: #00539f;
    border: 2px solid #00539f;
    border-radius: 20px;
    cursor: pointer;
    font-size: 1.6rem;
    font-weight: 600;
    height: 47px;
    min-width: 200px;
    padding: 0 24px;
    transition: box-shadow 0.3s;
    font-family: inherit;
  }
</style>
