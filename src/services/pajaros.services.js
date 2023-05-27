import axios from 'axios';

const BASE_URL = 'https://aves.ninjas.cl/api/birds';

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
        axios.get('BASE_URL')
          .then(response => {
            this.birds = response.data;
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  }
  

export { listaPajaros, getDetails };
