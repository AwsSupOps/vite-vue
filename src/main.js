import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

//import { Amplify } from 'aws-amplify';
//import config from './aws-exports.js';

import { Amplify } from 'aws-amplify';
import config from './amplifyconfiguration.json';

Amplify.configure(config);


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
