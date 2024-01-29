<script setup>
  import * as mutations from './graphql/mutations';
  import { generateClient } from 'aws-amplify/api';
  import { onMounted, ref } from 'vue';
  
 // const getAuthToken = () => 'myAuthToken';
  //const lambdaAuthToken = getAuthToken();

  const name = ref('');
  const description = ref('');

  const client = generateClient();
  
  

  async function addTodo() {
    if (!name.value || !description.value) return;
    const todo = { name: name.value, description: description.value };
    // await client.graphql({
    //   query: mutations.createTodo,
    //   variables: { input: todo },
    //   //authToken: lambdaAuthToken
    
  const res = await client.graphql({
  query: mutations.createTodo,
  variables: { input: todo },
  authMode: 'lambda',
  authToken: 'myAuthToken',
      
    });
    name.value = '';
    description.value = '';
  }
</script>
<template>
  <div id="app">
    <h1>Todo App</h1>
    <input type="text" v-model="name" placeholder="Todo name" />
    <input type="text" v-model="description" placeholder="Todo description" />
    <button v-on:click="addTodo">Create Todo</button>
  </div>
</template>