<template>
  <v-layout>
    <v-row>
      <v-card
      rounded="0"
      width="100%"
      cover
      class="pa-12"
      elevation="0"
      image="../assets/Hero-Image.png">
        <v-container class="pa-12">
            <v-col class="col-6 offset-6">
              <v-card
              height="420"
              elevation="0"
              class="d-block justify-center align-center"
              max-width="620"
              color="#FFF3E3"
              >
                <v-card-subtitle class="my-11 ml-6">
                <h3 class="text-h6 text-uppercase font-weight-bold">New Arrivals</h3>
              </v-card-subtitle>
                <v-card-title class="ml-6 mb-4">
                  <h1 class="text-h3 font-weight-bold caption">Discover Our <br>New Collection</h1>
                </v-card-title>
                <v-card-text class=" ml-6 mr-6">
                  <v-subheader class="subheading">Shop for the best furniture collection in the world. Lorem ipsum dolor sit amet consectetur adipisicing.</v-subheader>
                </v-card-text>
                <v-card-actions class="ml-6">
                  <v-btn variant="tonal" size="x-large" color="#B88E2F" text-color="white">Buy Now</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
        </v-container>
      </v-card>
    </v-row>
  </v-layout>
  <v-layout
  class="py-12">
    <v-row>
      <v-container>
      <h1 class="d-flex justify-center align-center">Browse The Range</h1>
      <p class="d-flex justify-center align-cente pb-12">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, non?</p>
      <v-row>
        <v-col v-for="card in cards" :key="card">
          <v-card-image>
            <v-img :src="getImageSrc(card.imageSrc)"></v-img>
          </v-card-image>
          <v-card-title class="d-flex justify-center align-center py-8">{{ card.cardTitle }}</v-card-title>
        </v-col>
      </v-row>
      </v-container>
    </v-row>
  </v-layout>
  <FooterHeroComponent/>
</template>

<script>
import FooterHeroComponent from '@/components/FooterHeroComponent.vue';
import diningImage from '@/assets/dining.png';
import bedroomImage from '@/assets/bedroom.png';
import livingImage from '@/assets/living.png';
export default {
  components: {
    FooterHeroComponent
  },
  data() {
    return {
      cards: [
        { imageSrc: diningImage, cardTitle: 'Dining' },
        { imageSrc: bedroomImage, cardTitle: 'Bedroom' },
        { imageSrc: livingImage, cardTitle: 'Living' }
      ]
    };
  },
  methods: {
    getImageSrc(image) {  
      // Assuming your images are in the public directory
      return image;
    }
  }
};
</script>
