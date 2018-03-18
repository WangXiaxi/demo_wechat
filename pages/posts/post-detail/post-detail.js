import { postData } from '../../../data/post.js'
import { dataGetKey } from '../../../common/js/common.js'

Page({
  onLoad: function(option) {
    this.setData({
    	detailData: dataGetKey('id', option.id, postData)
	})

	wx.setStorageSync('key', '猜猜擦')
  }
})