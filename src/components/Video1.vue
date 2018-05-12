<template>
  <div>
    <video width="320" height="240" controls controlsList="nodownload">
      <source :src="require('@/assets/RomanVirgo.mp4')" type="video/mp4"> Your browser does not support the video tag.
    </video>

    <video width="320" height="240" controls>
      <source :src="require('@/assets/videoplayback.mp4')" type="video/mp4"> Your browser does not support the video tag.
    </video>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

</style>
