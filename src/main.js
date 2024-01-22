import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { Amplify } from 'aws-amplify';
import config from './aws-exports.js';


//Amplify.configure(config);
Amplify.configure(config,
    {
        API: {
          GraphQL:  {
            headers: async () => ({
              'Authorization': 'myAuthToken'
            })
          }
        }
      });

createApp(App).mount('#app')
