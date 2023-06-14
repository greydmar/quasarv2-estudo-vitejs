<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue';
import Widget01 from './components/Widget01.vue';
</script>


<template>
<Widget01 expanded="true"/>  
<!-- <QCardSection>
  <Widget01 expanded="true"/>  
</QCardSection>
</QCard> -->
</template>

<style lang="scss" scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
