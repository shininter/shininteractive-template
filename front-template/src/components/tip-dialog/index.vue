<template>
  <div v-if="isShow">
    <div v-show="isShow" @click="close" class="mask"></div>

    <!-- 一天七天打卡 -->
    <div v-show="isShow && popType === 1" class="tip-dialog">
      <!-- <div class="close-icon" @click="close"></div> -->
      <div @click="close" class="content bg1">
        <div class="tip">
          {{tip}}
        </div>
      </div>
    </div>

    <!-- 打卡信息 -->
    <div v-show="isShow && popType === 2" class="tip-dialog" :dat="signNum">
      <div @click="close" class="content-bg2 bg2">
        <div class="box-1" :class="signNum >= 0 ? 'signIn' : 'noSignIn'">
          <div class="desc">
            收集信息成功
          </div>
          <img class="img" :src='imgList.dialog.xuanZhong'></img>
        </div>
        <div class="box-2" :class="signNum >=1 ? 'signIn' : 'noSignIn'">
       <div class="desc">
          试用第1天打卡
          </div>
          <img v-show='signNum==2' class="img" :src='imgList.dialog.xuanZhong' ></img>
          <img v-show='signNum!=2' class="img" :src='imgList.dialog.noXuanZhong'></img>
          </div>
        <div class="box-3" :class=" signNum >=2 ? 'signIn' : 'noSignIn'">
       <div class="desc">
          试用第7天打卡
          </div>
          <img v-show='signNum==7' class="img" :src='imgList.dialog.xuanZhong'></img>
          <img v-show='signNum!=7' class="img" :src='imgList.dialog.noXuanZhong'></img>
        </div>
      <div class="footer" >
        <img class="btn" @click="go"  alt>
      </div>
      </div>
    </div>

    <!-- 打卡公约 -->
    <div v-show="isShow && popType === 3" class="tip-dialog">
      <div class="content bg3">
        <div class="word-1">shininter</div>
        <div class="word-2">shininter </div>
        <div class="btn"
          @click='queRen'>
          确认
        </div>
      </div>
    </div>

    <!-- 打卡完成弹窗 -->
    <div v-show="isShow && popType ===4" class="tip-dialog">
      <div @click="close" class="content bg4 layout">
        <div class="line-1">打卡完成</div>
        <div class="line-2">星球送出的惊喜礼物</div>
        <div class="line-3" >正在光速朝你飞奔</div>
      </div>
    </div>

  </div>
</template>

<script>

import { imgList } from '_util/index'
export default {
  name: 'TipDialog',
  props: {
    isShow: {
      type: Boolean,
      value: false
    },
    popType: {
      type: Number,
      value: 0
    },
    signNum: {
      type: Number,
      value: 0
    },
    title: {
      type: String,
      value: ''
    },
    tip: {
      type: String
    },
    isSignIn: {
      type: Boolean,
    }
  },
  data() {
    return {
      imgList: imgList
    }
  },
  mounted() {
  },
  methods: {
    close() {
      this.$emit('close')
    },
    queRen() {
      this.$emit('queRen')
    },
    share() {
      this.$emit('share')
    },
    go() {
      window.location = '/xiaoheiping/friends/index.html'
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './index.styl';
</style>
