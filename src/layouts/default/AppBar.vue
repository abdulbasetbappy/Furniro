<template>
  <v-card
    flat
    height="100px"
    rounded="0"
    class="d-flex align-center justify-center"
    elevation="0"
  >
    <v-container >
        <v-row class="d-flex align-center justify-center py-6">
          <v-col class="justify-start" sm="9" xs="9" md="3">
            <v-sheet class="d-flex align-center">
              <v-img  max-height="50" max-width="50"  src="../../assets/logo.svg"></v-img>
              <h2 class="pl-3" color="grey-darken-3">Funiro.</h2>
            </v-sheet>
          </v-col>
          <v-col class="d-sm-none d-none d-md-flex " md="6">
            <v-layout class="d-flex justify-center align-center" >
                <v-btn size="x-large" variant="plain" to="/" :ripple="false">Home</v-btn>
                <v-btn size="x-large" variant="plain" to="/shop" :ripple="false">Shop</v-btn>
                <v-btn size="x-large" variant="plain" to="/about" :ripple="false">About</v-btn>
                <v-btn size="x-large" variant="plain" to="/contact" :ripple="false">Contact</v-btn>
            </v-layout>
          </v-col>
          <v-col class="d-none d-sm-none d-md-flex " md="3">
            <v-layout class="d-flex justify-end align-center" >
              <v-btn density="comfortable" variant='plain' size="large" icon="mdi-magnify"></v-btn>
              <v-btn density="comfortable" variant="plain" size="x-large" to="/Cart" :ripple="false"> <v-badge :content="19"><v-icon>mdi-cart-outline</v-icon></v-badge></v-btn>
                <v-btn to="/login" density="comfortable" variant='plain' size="large" 
                 prepend-icon @click="onLogout"><v-icon>{{v_icon}}</v-icon>{{ btn_name }}</v-btn>
            </v-layout>
          </v-col>
          <v-col class="d-md-none" xs="2" sm="2">
            <v-layout class="d-flex justify-end align-center">
              <v-app-bar-nav-icon size="x-large" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            </v-layout>
            <v-navigation-drawer
            v-model="drawer"
            location="right"
            temporary
            z-index="9999"
            >
            <v-card
            class="mt-5 ml-5 mr-5 d-block align-center"
            elevation="0">
            <v-sheet class="d-flex align-center justify-start">
              <v-img  max-height="50" max-width="50"  src="../../assets/logo.svg"></v-img>
              <h2>Furniro</h2>
            </v-sheet>
              <v-list
                :items="items"
              ></v-list>
            </v-card>
            </v-navigation-drawer>
          </v-col>
        </v-row>
    </v-container>
  </v-card>
</template>
<script>
import { useAuthStore } from '@/store/auth';

export default {
  data: () => ({
    drawer: false,
    btn_name: '',
    v_icon: '',
    items: [
      {
        title: 'Home',
        value: 'Home',
      },
      {
        title: 'Shop',
        value: 'Shop',
      },
      {
        title: 'About',
        value: 'About',
      },
      {
        title: 'Contact',
        value: 'Contact',
      },
    ],
  }),
  methods: {
    async checkToken() {
      const authStore = useAuthStore();
      authStore.checkAuth();
      if(this.isAuthenticated){
        this.btn_name = 'Logout';
        this.v_icon = 'mdi-logout'
      } else{
        this.btn_name = 'Login';
        this.v_icon = 'mdi-login'
        this.$router.push('/login');
      }
    },
    onLogout() {
      // Access the logout action from the store
      const authStore = useAuthStore();
      authStore.logout();
      this.btn_name = 'login';
      this.$router.push('/');
      this.checkToken();
    },
  },
  computed: {
    isAuthenticated(){
      return useAuthStore().isAuthenticated;
    }
  },
  mounted() {
      const authStore = useAuthStore();
      authStore.checkAuth();
      if(this.isAuthenticated){
        this.btn_name = 'Logout';
        this.v_icon = 'mdi-logout'
      } else{
        this.btn_name = 'Login';
        this.v_icon = 'mdi-login'
      }
  
  },
};
</script>
<style scoped>
</style>