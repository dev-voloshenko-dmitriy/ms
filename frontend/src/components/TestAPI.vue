<script setup lang="ts">
import axios from 'axios';


let test: any = '';

axios
    .get('http://localhost:8181/front-test-api/',
        {
          headers: {"Access-Control-Allow-Origin": "*"}
        }
    )
    .then(response => (console.log(response)));
</script>

<template>
  <div>
    1
    {{ test.status }}
  </div>
</template>

<style scoped>

</style>