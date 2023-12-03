<template>
    <v-layout style="background-color: #FCF8F3; color: black;">
        <v-container class="py-12">
            <v-row>
                <v-col class="my-12" md='5'>
                    <v-show class="pa-5">
                        <v-card-title class="font-weight-bold text-h4">50+ Beautiful rooms <br>inspiration</v-card-title>
                        <v-card-text class="mr-6">
                            <v-subheader class="">Shop for the best furniture collection in the world. Lorem ipsum dolor sit amet consectetur adipisicing.</v-subheader>
                        </v-card-text>
                        <v-card-actions class="">
                            <v-btn variant="elevated" elevation-1 size="x-large" color="#B88E2F" text-color="white">Explore More</v-btn>
                        </v-card-actions>
                    </v-show>
                </v-col>
                <v-col md='3'>
                    <v-img class="d-flex justify-center align-end"  src="../assets/Rectangle.png">
                        <v-row class="mb-5" no-gutters>
                            <v-col class="d-flex text-right justify-end align-end">
                                <v-card 
                                style="background-color: rgba(255, 243, 227, 0.48); color: rgb(0, 0, 0);"
                                elevation="0"
                                max-height="130"
                                max-width="160"
                                rounded=" 0">
                                        <v-card-subtitle class="pt-3">01- Bedroom</v-card-subtitle>
                                        <v-card-title >Inner Peace</v-card-title>
                                </v-card>
                            </v-col>
                            <v-col class="d-flex justify-start align-end">
                                    <v-btn
                                    :ripple="false"
                                    rounded="0"
                                    elevation="0"
                                    style="background:rgba(140, 136, 132, 0.48) ;"><v-icon>mdi-arrow-right</v-icon></v-btn>
                            </v-col>
                        </v-row>
                    </v-img>
                </v-col>
                <v-col md='4'>
                    <v-window
                        v-model="onboarding"
                        show-arrows="hover"
                    >
                        <v-window-item
                        v-for="card in cards"
                        :key="card.length"
                        >
                        <v-card
                            rounded="0"
                            elevation="0"
                            height="350"
                            style="background-color: rgba(255, 255, 255, 0);"
                            class="d-flex align-center justify-center ma-2"
                        >
                            <v-img :src="getImageSrc(card.imageSrc)"></v-img>
                        </v-card>
                        </v-window-item>
                    </v-window>
                </v-col>
            </v-row>
        </v-container>
    </v-layout>
    <v-layout>
        <v-container>
             <h4 class="pt-12 subheading text-center">Share your setup with</h4>
             <h1 class="text-center">#FuniroFurniture</h1>
        </v-container>
    </v-layout>
    <v-layout>
        <v-row class="py-12" no-gutters>
            <v-col>
                <v-row no-gutters class="d-flex justify-start align-end">
                    <v-col>
                        <v-img 
                        max-height="350" src="../assets/Rectangle36.png"></v-img>
                    </v-col>
                    <v-col md="10" class="pl-2">
                            <v-img src="../assets/footerhero.png"></v-img>
                    </v-col>
                </v-row>
                <v-row no-gutters class="d-flex justify-start align-start pt-2">
                    <v-col>
                        <v-img 
                        max-height="350" src="../assets/Rectangle37.png"></v-img>
                    </v-col>
                    <v-col md="8" class="pl-2">
                            <v-img src="../assets/Rectangle39.png"></v-img>
                    </v-col>
                </v-row>
            </v-col>
            <v-col md="3" class="px-2 d-flex justify-center align-center">
                <v-img max-height="390" src="../assets/Rectangle40.png"></v-img>
            </v-col>
            <v-col>
                <v-row no-gutters class="d-flex justify-start align-end">
                    <v-col>
                        <v-img 
                        max-height="350"
                         src="../assets/Rectangle43.png"></v-img>
                    </v-col>
                    <v-col md="" class="pl-2">
                            <v-img max-height="350" src="../assets/Rectangle45.png"></v-img>
                    </v-col>
                </v-row>
                <v-row no-gutters class="d-flex justify-start align-start pt-2">
                    <v-col>
                        <v-img 
                        max-height="350" src="../assets/Rectangle41.png"></v-img>
                    </v-col>
                    <v-col  class="pl-2">
                            <v-img src="../assets/Rectangle44.png"></v-img>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>    
    </v-layout>
    <v-layout style="background-color: #FFF3E3; color: black;">
        <v-container>
            <v-row class="py-12" no-gutters>
                <v-col>
                    <v-img max-height="60" src="../assets/price.png"></v-img>
                </v-col>
                <v-col>
                    <v-row>
                        <v-card-title>High Quality</v-card-title>
                    </v-row>
                    <v-row>
                        <v-card-subtitle>crafted from top materials</v-card-subtitle>
                    </v-row>
                </v-col>
                <v-col>
                    <v-img max-height="60" src="../assets/right.png"></v-img>
                </v-col>
                <v-col>
                    <v-row>
                        <v-card-title>Warranty Protection</v-card-title>
                    </v-row>
                    <v-row>
                        <v-card-subtitle>Over 2 years</v-card-subtitle>
                    </v-row>
                </v-col>
                <v-col>
                    <v-img max-height="60" src="../assets/shipping.png"></v-img>
                </v-col>
                <v-col>
                    <v-row>
                        <v-card-title>Free Shipping</v-card-title>
                    </v-row>
                    <v-row>
                        <v-card-subtitle>Order over 150 $</v-card-subtitle>
                    </v-row>
                </v-col>
                <v-col>
                    <v-img max-height="60" src="../assets/customer-support.png"></v-img>
                </v-col>
                <v-col>
                    <v-row>
                        <v-card-title>24 / 7 Support</v-card-title>
                    </v-row>
                    <v-row>
                        <v-card-subtitle>Dedicated support</v-card-subtitle>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-layout>
</template>
<script>
import diningImage from '@/assets/dining.png';
import bedroomImage from '@/assets/bedroom.png';
import livingImage from '@/assets/living.png';
export default {
    data: () => ({
        onboarding: 0,
      cards: [
        { imageSrc: diningImage},
        { imageSrc: bedroomImage },
        { imageSrc: livingImage}
      ]
    }),
    methods:{
        getImageSrc(image) {  
        // Assuming your images are in the public directory
        return image;
        }
    }
}
</script>
<style >
</style>