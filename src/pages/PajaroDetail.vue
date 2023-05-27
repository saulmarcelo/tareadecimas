<template>
    <div>
    <h1>Lista de Pájaros</h1>
    <ul>
      <li v-for="bird in birds" :key="bird.id">
        <p>Name:{{ bird.name.spanish }}</p>
        
        <p><img :src="bird.images.main" /></p>
      </li>
    </ul>
  </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        birds: []
      };
    },
    created() {
      this.fetchBirds();
    },
    methods: {
      fetchBirds() {
        axios.get('https://aves.ninjas.cl/api/birds')
          .then(response => {
            this.birds = response.data;
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  }
  </script>
  