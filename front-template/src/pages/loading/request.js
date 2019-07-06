/*
 * @Author: godkun(github)
 * @LastEditors: godkun(github)
 * @Description: model 层
 * @Date: 2019-04-01 00:58:18
 * @LastEditTime: 2019-06-25 02:02:37
 */

import Service from '@/core/services/service.js'
import { showError } from '_util/index'

export default {
  async getUserInfo(params, ctx) {
    try {
      let result = await Service.laBa(params)
      console.log('getUserInfo',  )
      if (result.status == '1') {
        ctx.isprovicy = result.data.isread
        ctx.isSetStore = result.data.issetstore;
        let time=new Date();
        let m=time.getMonth()+1;
        let d=time.getDate();
       
        //console.log(m+d,esult.data.issetstore);
        if(m+""+d=="630"&&result.data.issetstore==1){
          window.location.href="/xiaoheiping/friends/";
          return;
        }
      } 
      else if(result.status === '0'){
        window.location.href='/xiaoheiping/'
      }
      else {
        // ctx.$gtToast('网络错误， 请稍后再试')
      }
    } catch (err) {
      // ctx.$gtToast('网络错误， 请稍后再试')
    }
  },

  async setProvicy(params, ctx) {
    try {
      let result = await Service.laBa(params)
      if (result.status === '1') {
        ctx.isprovicy = 1
      }  else if(result.status === '0'){
        window.location.href='/xiaoheiping/'
      }else {
        // ctx.$gtToast('网络错误， 请稍后再试')
      }
    } catch (err) {
      // ctx.$gtToast('网络错误， 请稍后再试')
    }
  }
}
