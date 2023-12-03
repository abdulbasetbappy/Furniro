<template lang="">
    <div class="lottieContainer">
        <div class="lottie" ref="lottieContainer"></div>
    </div>
    <div class='btn__link'>
        <router-link to="/">
            <v-btn color="#B88E2F" class='my-10' dark>Back to Home</v-btn>
        </router-link>
    </div>
</template>
<script>
import lottie from 'lottie-web';
import animationData from '@/assets/404Animation.json';
export default {
    
    mounted() {
    // Create a ref to the container element
    const container = this.$refs.lottieContainer;

    // Initialize Lottie player
    const lottiePlayer = lottie.loadAnimation({
      container,
      renderer: 'svg', // Choose the appropriate renderer (svg, canvas, html)
      loop: true, // Set to true if you want the animation to loop
      autoplay: true, // Set to true if you want the animation to play automatically
      animationData, // Pass the animation JSON data
    });
  },
}
</script>
<style scoped>
.lottieContainer{
        display: flex;
        justify-content: center;
        align-items: start;
    .lottieContainer .lottie{
        width: 500px;
        height: 500px;
    }
}
.btn__link{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}
</style>