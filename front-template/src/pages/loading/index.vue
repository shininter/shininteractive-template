<template>
  <div class="homevideo page main-view" @click="start">
    <pageloading
      @finish='finish'
      ref="myloading"
      v-show="showloading"
      ></pageloading>

    <img
      @click="goHome"
     
      class="btn" v-show='isPlay === false'>
    </img>

    <video
      @click="play"
      v-show='showloading === false && showPlay === true'
      class="video"
      ref="video"
      autoplay="autoplay"
      width="750"
      height="1314"
     
      x5-video-player-type="h5"
      x5-playsinline='playsinline'
      playsinline='playsinline'
      webkit-playsinline="playsinline"
    >

    </video>
    <div class="vide-last" v-show='isPlay === false'></div>
    <div class="skip"  v-show='showloading === false && showPlay === true' @click="clickskip"></div>
    <div
      @click="play"
      v-show='isShowImg === true' class="video-cover">
      <img
        @click="play"
       alt>
    </div>

    <transition name="sprite">
      <tip-dialog
        :popType="dialogConfigs.tipDialog.popType"
        @close="close"
        @queRen='hideProtocol'
        :isShow="dialogConfigs.tipDialog.visible"
        :tip="dialogConfigs.tipDialog.tip"
        :isSignIn="dialogConfigs.tipDialog.isSignIn"
      ></tip-dialog>
    </transition>

  </div>
</template>
<script src='./index.js'></script>
<style lang="stylus" scoped>
 @import './index.styl';
 
</style>
