<template>
  <div class="homevideo page main-view" @click="start">
    <pageloading
      @finish='finish'
      ref="myloading"
      v-show="showloading"
      ></pageloading>

    <img
      @click="goHome"
      src='../../assets/gif/gif_2.gif'
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
      src="../../assets/video/fa.mp4"
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
        src="../../assets/images/common/1.jpg" alt>
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
 .vide-last
  background url('../../assets/images/loading/lancomebottom.jpg')
  position absolute
  width 100%
  height 100%
  bottom  0px
  left 0px
  background-size 100% 100%
 .skip
  background url('../../assets/images/skip.png')
  position absolute
  width 67px
  height 31px
  bottom  20px
  left 20px
  background-size 100% 100%
.homevideo
  width 750px
  height 100%
  overflow  hidden
  .img
    position fixed
    left 0
    top 0
</style>
