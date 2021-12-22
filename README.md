# netflixclone-vue
git clone https://github.com/anilkumar2711/netflixclone-vue.git



Vue CLI Instalation
/*
Node JS should be installed in the machine 
*/
npm install -g @vue/cli

check Vue version from below command

vue --version

upgrade Vue CLI by below command

npm update -g @vue/cli

For building or serving the single Vue Component 

npm install -g @vue/cli @vue/cli-service-global

vue serve MyComponent.vue

vue build MyComponent.vue

Creating the project via Vue CLI

vue create [project-name]

Add VueX to Existing project

npm install vuex --save

Add bellow lines in main.js file

import Vuex from 'vuex'
Vue.use(Vuex)

Vuex requires Promise (opens new window). If your supporting browsers do not implement Promise (e.g. IE), you can use a polyfill library, such as es6-promise (opens new window).


<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.js"></script>

add above line in public/index.html
