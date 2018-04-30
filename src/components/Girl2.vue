<template>
  <div>
    <div>
      <h2>{{ msg }}</h2>
      <b-btn v-b-modal.modal1>Launch demo modal</b-btn>

      <!-- Modal Component  -->
      <b-modal id="modal1" title="Bootstrap-Vue">
        <p class="my-4"> from modal!</p>
        <div>
          <b-img :src="require('@/assets/zoesaldana.jpg')" fluid alt="Responsive image" />
        </div>
        <!-- b-img-responsive-1.vue -->
      </b-modal>
    </div>

    <!-- modal-1.vue -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: require('../assets/zoesaldana.jpg'),
      msg: 'Here is the Girl2 vue'
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