/*
 * @Author: godkun(github)
 * @LastEditors: godkun(github)
 * @Description: 序列帧
 * @Date: 2019-04-26 11:02:57
 * @LastEditTime: 2019-06-27 00:42:39
 */

import Server from './request.js'
import { cceBurry } from '_util/index.js'
import pageloading from '../../components/loading/main.vue'

export default {
  name: 'homeloading',
  data() {
    return {
      showPlay: true,
      videoUrl: '',
      videoSrc: '',
      poster: '',
      isShowImg: false,
      ended: false,
      inited: false,
      isShow: true,
      loading1: null,
      loading2: null,
      isShowBtn: false,
      showloading: true,
      isShowPoster: true,
      isShowPlayBtn: true,
      isPlay: true,
      isprovicy: '0',
      isSetStore: 0,
      dialogConfigs: {
        tipDialog: {
          visible: false,
          popType: 0
        }
      }
    }
  },
  components: {
    pageloading: pageloading
  },

  async created() {
    this.loadPageData()
  },

  mounted() {
    console.log('88888')
    this.startrLoading()
    // 只挂载一次
    if (!this.inited) {
      console.log('77777777')
      // this.$nextTick(() => {
      let video = this.$refs.video
      console.log('cccc', video)

      video.addEventListener('loadstart', () => {
        this.loadStart()
        console.log('startloading')
      })
      // ended
      video.addEventListener('ended', () => {
        this.playover()
      })
      // this.videoSrc = 'http://ccegroup.file.alimmdn.com/yanyige/loading2-3.mp4'
      // })
    }
    this.inited = true
  },

  watch: {
    $route(to, from) {
      this.refresh()
    },
    videoUrl(a, b) {
      console.log(a, b)
    }
  },

  methods: {

    play() {
      console.log('88888888888')
      this.showPlay = true
      this.showloading = false
      this.isShowImg = false
      this.$refs.video.play()
    },

    async loadPageData() {
      const params = {
        action: 'getuserinfo'
      }

      // const params1 = {
      //   action: 'getstores'
      // }
      await Server.getUserInfo(params, this)
      // await Server.getStores(params1, this)
    },

    start() {
      // console.log(this.$route)
      console.log(687687)
      this.showloading = false
      this.videoSrc = 'http://ccegroup.file.alimmdn.com/yanyige/loading2-3.mp4'
      this.$refs.video.play()
    },

    hide() {
      this.isShow = false
    },
    playover() {
      console.log('endedkkkkkkkk')
      // 播放结束触发事件
      this.ended = true
      this.isShowBtn = true
      this.isPlay = false
    },
    clickskip(){
      this.ended = true;
      this.showPlay=false;
      this.isShowBtn = true;
      this.ended = true;
      this.isPlay = false
    },
    startrLoading() {
      this.handleLoading()
    },

    // 正在 loading 中
    handleLoading() {
      console.log('ended')
      if (this.$refs['myloading']) {
        this.$refs['myloading'].setPercent()
      }
    },

    // 加载完成后
    async handleLoaded() {
      this.showloading = false
      this.isShow = false
      this.ended = true
      // this.isShowImg = true
    },

    finish() {
      this.showloading = false
      this.isShowImg = true
      this.showPlay = false
      // this.start()
    },

    goHome() {
      this.isShowImg = false
      cceBurry('b1')
      this.showPlay = false
      if (this.isprovicy !== '1') {
        this.dialogConfigs = {
          tipDialog: {
            visible: true,
            popType: 3
          }
        }
        return
      } else {
        if (this.isSetStore === 0) {
          this.$router.replace({
            name: 'collect-info'
          })
        } else {
          this.$router.replace({
            name: 'xzt'
          })
        }
      }
    },

    loadStart() {},

    async hideProtocol() {
      const param = {
        action: 'setprovicy'
      }

      await Server.setProvicy(param, this)

      this.dialogConfigs = {
        tipDialog: {
          visible: false
        }
      }

      if (this.isSetStore === 0) {
        this.$router.replace({
          name: 'collect-info'
        })
      } else {
        this.$router.replace({
          name: 'xzt'
        })
      }
    },
    // play() {
    //   this.isShowImg = true
    //   let video = this.$refs.video
    //   video.play()
    //   // setTimeout(() => {
    //   //   this.isShowPoster = false
    //   //   this.isShowPlayBtn = false
    //   // }, 100)
    // },

    close() {
      this.dialogConfigs.tipDialog.visible = false
      this.$router.replace({
        name: 'collect-info'
      })
    }
  }
}
