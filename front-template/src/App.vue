<template>
  <div id="app">
    <keep-alive>
      <transition name="page">
        <router-view/>
      </transition>
    </keep-alive>
    <!-- <aloading v-if="isaloading"></aloading> -->
  </div>
</template>
<script src='./app.js'>
</script>

<style lang="stylus">
.sprite-enter-active, .sprite-leave-active
  transition  all .3s

.sprite-enter, .sprite-leave-to
  opacity  0

.page-enter-active, .page-leave-active
  transition  all .5s
.page-enter, .page-leave-to
  transform translate(0,500px)
  opacity  0
</style>
