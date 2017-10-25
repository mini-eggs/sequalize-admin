<template>
  <section>
    <div>Models:</div>
    <br/>
    <div v-for="(model, index) in models" :key="index">
      {{ model.name }}
    </div>
  </section>
</template>

<script>
import ConnectModels from "../containers/models";

const component = {
  name: "SequalizeAdminExampleComponent",

  mounted() {
    this.requestModels();
  }
};

export default ConnectModels(component);
</script>

<style scoped>
section {
  padding: 50px;
  background-color: #f7f7f7;
}
</style>