<template>
  <div>
    <div>
      <h2>{{ msg }}</h2>
      <b-btn v-b-modal.modal1>Launch demo modal</b-btn>

      <!-- Modal Component -->
      <b-modal id="modal1" title="Bootstrap-Vue">
        <p class="my-4"> from modal!</p>
        <div>
          <b-img src="https://lorempixel.com/1024/400/" fluid alt="Responsive image" />
        </div>
        <!-- b-img-responsive-1.vue -->
      </b-modal>
    </div>

    <!-- modal-1.vue -->
    <b-container fluid class="p-4 bg-dark">
      <b-row>
        <b-col>
          <b-img thumbnail fluid src="https://lorempixel.com/250/250/people/4/" alt="Thumbnail" />
        </b-col>
        <b-col>
          <b-img thumbnail fluid src="https://lorempixel.com/250/250/people/8/" alt="Thumbnail" />
        </b-col>
        <b-col>
          <b-img thumbnail fluid src="https://lorempixel.com/250/250/people/5/" alt="Thumbnail" />
        </b-col>
        <b-col>
          <b-img thumbnail fluid src="https://lorempixel.com/250/250/people/6/" alt="Thumbnail" />
        </b-col>
        <b-col>
          <b-img thumbnail fluid src="https://lorempixel.com/250/250/people/3/" alt="Thumbnail" />
        </b-col>
      </b-row>
    </b-container>

    <!-- Deuxième rangée -->
    <b-container fluid class="p-4 bg-dark">
      <b-row>
        <b-col>
          <b-img thumbnail fluid src="https://lorempixel.com/250/250/people/7/" alt="Thumbnail" />
        </b-col>
        <b-col>
          <b-img thumbnail fluid src="https://lorempixel.com/250/250/people/1/" alt="Thumbnail" />
        </b-col>
        <b-col>
          <b-img thumbnail fluid src="https://lorempixel.com/250/250/people/9/" alt="Thumbnail" />
        </b-col>
        <b-col>
          <b-img thumbnail fluid src="https://lorempixel.com/250/250/people/2/" alt="Thumbnail" />
        </b-col>
        <b-col>
          <b-img thumbnail fluid src="https://lorempixel.com/250/250/people/1/" alt="Thumbnail" />
        </b-col>
      </b-row>
    </b-container>

    <!-- Troisième rangée -->
    <b-container fluid class="p-4 bg-dark">
      <b-row>
        <b-col>
          <b-img thumbnail fluid src="https://lorempixel.com/250/250/fashion/7/" alt="Thumbnail" />
        </b-col>
        <b-col>
          <b-img thumbnail fluid src="https://lorempixel.com/250/250/fashion/1/" alt="Thumbnail" />
        </b-col>
        <b-col>
          <b-img thumbnail fluid src="https://lorempixel.com/250/250/fashion/9/" alt="Thumbnail" />
        </b-col>
        <b-col>
          <b-img thumbnail fluid src="https://lorempixel.com/250/250/fashion/8/" alt="Thumbnail" />
        </b-col>
        <b-col>
          <b-img thumbnail fluid src="https://lorempixel.com/250/250/fashion/1/" alt="Thumbnail" />
        </b-col>
      </b-row>
    </b-container>
  </div>

</template>

<script>
import 'video.js/dist/video-js.css';
import { videoPlayer } from 'vue-video-player';

export default {
  data() {
    return {
      msg: 'Here is the Girl1 vue'
    };
  },

  computed: {
    // activeClasses() {
    //   return {
    //     'is-active': this.isActive
    //   };
    // }
  }
};
</script>

<style scoped>

</style>