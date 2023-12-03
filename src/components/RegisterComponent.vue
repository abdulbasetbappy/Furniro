<template>
    <v-card
    class="mx-auto my-12"
    max-width="500"
    >
      <v-card-title class="text-center">
          <h2 class="display-2">Sign Up</h2>
      </v-card-title>
      <v-form @submit.prevent="onHandleSubmit">
        <v-container class="py-9 px-12">
          <v-row class="mx-1">
              <v-text-field
                  :rules="nameRules"
                  v-model="first_name"
                  color="primary"
                  label="First name"
                  variant="underlined"
                  class="mr-3"
              ></v-text-field>
      
              <v-text-field
                  v-model="last_name"
                  :rules="nameRules"
                  color="primary"
                  label="Last name"
                  variant="underlined"
              ></v-text-field>
          </v-row>
    
          <v-text-field
            v-model="email"
            :rules="emailRules"
            color="primary"
            label="Email"
            variant="underlined"
          ></v-text-field>
    
          <v-text-field
            :rules="passRules"
            :type="showPassword ? 'text' : 'password'"
            v-model="password"
            color="primary"
            label="Password"
            placeholder="Enter your password"
            variant="underlined"
          >
            <template v-slot:append>
              <v-icon @click="PasswordVisibility('password')" color="grey">
                {{ showPassword ? "mdi-eye-off" : "mdi-eye"}}
              </v-icon>
            </template>
          </v-text-field>

          <v-text-field
            :rules="conPassRules"
            :type="showCPassword ? 'text' : 'password'"
            v-model="Confirm_password"
            color="primary"
            label="Confirm Password"
            placeholder="Enter your password"
            variant="underlined"
          >
            <template v-slot:append>
              <v-icon @click="PasswordVisibility('Confirm_password')" color="grey">
                {{ showCPassword ? "mdi-eye-off" : "mdi-eye"  }}
              </v-icon>
            </template>
          </v-text-field>
    
          <v-checkbox
            v-model="terms"
            color="secondary"
            label="I agree to site terms and conditions"
          ></v-checkbox>
          <v-btn
            :loading="loading"
            block
            color="#B88F30"
            size="large"
            type="submit"
            variant="elevated"
            class="my-4"
          >
            Sign Up
          </v-btn>
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
            :loading="loading"
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
            :loading="loading"
            block
            color="#B88F30"
            size="large"
            variant="text"
            prepend-icon="mdi-apple"
            class="my-4"
          >
          With Apple
          </v-btn>
        </v-container>
      </v-form>
    </v-card>
  </template>
  <script>
    export default {
      data() {
        return {
          first_name: '',
          last_name: '',
          nameRules:[
            value => !!value||''|| 'Name is required',
            value => (value && value.length > 3) || 'Name must at least 3 characters',
          ],
          email: '',
          emailRules:[
            value => !!value||''|| 'E-mail is required',
            value => (value && value.length > 5) || 'E-mail must at least 3 characters',
            value => /.+@.+\..+/.test(value) || 'E-mail must be valid',],
          password: '',
          passRules:[
            value => !!value||''|| 'Password is required',
            value => (value && value.length >= 8) || 'Password must be at least 8 characters long',
            value => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/.test(value) || 'Password must include at least one uppercase letter, one lowercase letter, and one number',
          ],
          Confirm_password: '',
          conPassRules:[
          value => !!value||''|| 'Password is required',
          value => (value === this.password) || 'Passwords do not match',
          ],
          terms: false,
          loading: false,
          showPassword: false,
          showCPassword: false,
        };
      },
      methods:{
        onHandleSubmit(){
          const data = {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            password: this.password,
            Confirm_password: this.Confirm_password,
            terms: this.terms,
          }
          fetch('https://fakestoreapi.com/users',{
            method:"POST",
            body:JSON.stringify(data),
            })
            .then(res => {
              // Check if the response status is 200
              if (res.status === 200) {
                console.log('Registration successful');
                this.$router.push('/login');
              } else {
                console.log('Registration failed');
                this.$router.push('/register');
              }
              return res.json(); // return the parsed JSON if needed
            })
            .then(json=>console.log(json))
            .catch(error => {
              // Handle errors here
              console.error('Error during registration:', error);
      });
        },
        PasswordVisibility(field) {
          if (field === 'password') {
            this.showPassword = !this.showPassword;
          } else if (field === 'Confirm_password') {
            this.showCPassword = !this.showCPassword;
          }
        },
      }
    }
  </script>