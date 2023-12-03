
<template>

    <v-card class="mx-auto my-12 px-9 py-12" max-width="500">
        <v-card-title class="text-center">
            <h2 class="display-2">Sign In</h2>
        </v-card-title>
      <v-form
        @submit.prevent="onSubmit"
      >
        <v-text-field
          v-model="email"
          :readonly="loading"
          class="mb-2"
          clearable
          label="Email"
        ></v-text-field>

        <v-text-field
          v-model="password"
          :readonly="loading"
          clearable
          :type="showPassword ? 'text' : 'password'"
          label="Password"
          placeholder="Enter your password"
        >
          <template v-slot:append>
            <v-icon @click="PasswordVisibility" color="grey">
              {{ showPassword ? "mdi-eye-off" : "mdi-eye" }}
            </v-icon>
          </template>
        </v-text-field>
        <v-row class="d-flex justify-center align-center">
            <v-checkbox
            v-model="Remember"
            color="secondary"
            label="Remember ?"
            class="d-flex justify-start align-center"
            ></v-checkbox>
            <router-link to="/forget">Forget Password?</router-link>
        </v-row>

        <v-row class="d-flex align-center justify-start">
            <v-col>
                <v-divider :thickness="1"></v-divider>
            </v-col>
            <v-col class="text-center" md="2">
                <h3 >OR</h3>
            </v-col>
            <v-col>
                <v-divider :thickness="2"></v-divider>
            </v-col>
        </v-row>
        <v-btn
          block
          color="#B88F30"
          size="large"
          variant="text"
          prepend-icon="mdi-google"
          class="my-4"
        >
         With Google
        </v-btn>
        <v-btn
          block
          color="#B88F30"
          size="large"
          variant="text"
          prepend-icon="mdi-apple"
          class="my-4"
        >
         With Apple
        </v-btn>


        <v-btn
          :loading="loading"
          block
          color="#B88F30"
          size="large"
          type="submit"
          variant="elevated"
          class="my-4"
        >
          Sign In
        </v-btn>
      </v-form>
      <p class="text-center">Didn't have an Account ? <router-link to="/register">Sign up here</router-link></p>
    </v-card>
</template>

<script>
import { useAuthStore } from '@/store/auth';
  export default {
    data(){
      return{
        showPassword: false,
        email: '',
        password: '',       
        Remember: false,
        loading: false,
      }
    },

    methods: {
      async  onSubmit () {
        this.loading = true;
      const { email, password, Remember } = this;
      const authStore = useAuthStore();
      try {
        await authStore.login(email, password);
        // Save email to local storage if "Remember Me" is checked
        if (Remember) {
          localStorage.setItem('rememberedEmail', email);
        } else {
          localStorage.removeItem('rememberedEmail');
        }
      } finally {
        this.loading = false;
      }
      },
      // Add a method to check if there is a remembered email in local storage
      checkRememberedEmail() {
        const rememberedEmail = localStorage.getItem('rememberedEmail');
        if (rememberedEmail) {
          this.email = rememberedEmail;
          this.Remember = true;
        }
      },
      PasswordVisibility(){
        this.showPassword = !this.showPassword;
      },
      checkToken() {
      // Read token from local storage
        const token = localStorage.getItem('token');

        // Check if token is present
        if (token) {
          console.log('Token:', token);

          // You can use the token in your API requests or perform other actions
        } else {
          console.log('Token not found in local storage');
        }
      },

      
    },
    mounted() {
      this.checkRememberedEmail();
      this.checkToken();
    },
  }
</script>
<style >
    
</style>