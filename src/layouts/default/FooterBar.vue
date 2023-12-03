<template>
    <v-card
    flat
    rounded="0"
    class="d-flex align-center justify-center h-auto "
    >
        <v-container class="flex-wrap">
        <v-row class="d-flex align-center justify-center align-stretch">
            <v-col md="4" class="flex-column">
                <v-sheet>
                    <h2 class="pl-3 mb-10">Funiro.</h2>
                    <p class="pl-3 mb-15">400 University Drive Suite 200 Coral <br>Gables,<br>FL 33134 USA</p>
                </v-sheet>
            </v-col>
            <v-col class="flex-column">
                <v-sheet class="d-block" >
                    <h3 class="pl-4">Links</h3>
                    <v-btn variant='plain' to="/" :ripple="false" class="justify-start" height="45" block>Home</v-btn>
                    <v-btn variant='plain' to="/shop" :ripple="false" class="justify-start" height="45" block>Shop</v-btn>
                    <v-btn variant='plain' to="/about" :ripple="false" class="justify-start" height="45" block>About</v-btn>
                    <v-btn variant='plain' to="/contact" :ripple="false" class="justify-start" height="45" block>Contact</v-btn>
                </v-sheet>
            </v-col >
            <v-col class="flex-column">
                 <v-sheet class="d-block align-start" >
                    <h3 class="pl-4">Help</h3>
                    <v-btn variant='plain' :ripple="false" to="/Payment" class="justify-start" height="45" block>Payment</v-btn>
                    <v-btn variant='plain' :ripple="false" to="/Return" class="justify-start" height="45" block>Return</v-btn>
                    <v-btn variant='plain' :ripple="false" to="/Privacy-Policies" class="justify-start" height="45" block>Privacy Policies</v-btn>
                    <v-btn variant='plain' :ripple="false" to="/Affiliate" class="justify-start" height="45" block>Affiliate</v-btn>
                </v-sheet>
            </v-col>
            <v-col class="flex-column">
                <v-sheet>
                    <h3>Newsletter</h3>
                    <v-row  no-gutters class="d-flex align-center justify-center">
                        <v-col md="10">
                            <v-text-field
                                v-model="email"
                                :rules="[rules.required, rules.email]"
                                label="E-mail"
                                variant="underlined"
                            ></v-text-field>
                        </v-col>
                        <v-col md="2">
                            <v-btn
                              variant="plain">    
                              <v-icon
                                size="large"
                                icon="mdi-chat-outline"
                                >
                              </v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-col>
        </v-row>
        <v-row>
            <v-divider></v-divider>
        </v-row>
        <v-row>
            <v-footer>
                {{ new Date().getFullYear() }} — <strong>Funiro.</strong><p>All Rights Reserved.</p>
            </v-footer>
        </v-row>
        </v-container>
    </v-card>
</template>
<script>
  export default {
    data () {
      return {
        email: '',
        rules: {
          required: value => !!value || 'Required.',
          counter: value => value.length <= 20 || 'Max 20 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
        },
      }
    },
  }
</script>