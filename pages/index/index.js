//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    showtab: 0, //顶部选项卡索引
    tabnum: 5,   //一行显示多少个
    // tab切换
    currentTab: 0,
    scroll_left:'',
    products: [{ title: '选项一' }, { title: '选项二' }, { title: '选项三' }, { title: '选项四' }, { title: '选项五' }, { title: '选项六' }, { title: '选项七' }, { title: '选项八' }, { title: '选项九' }, { title: '选项十' }, { title: '选项十一' }]
  },
 
  onLoad: function () {
    
  },
  setTab: function (e) {

    var that = this
    that.setData({
      showtab: e.currentTarget.dataset.tabindex,
     
    })
    if (this.data.currentTab === e.currentTarget.dataset.tabindex) {
      return false;
    } else {
      that.setData({
        currentTab: e.currentTarget.dataset.tabindex
      })
    }

  },
  /**
  * 滑动切换tab
  */
  bindChange: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current,
      showtab: e.detail.current,
      scroll_left: app.globalData.screenWidth / 5 * e.detail.current
    });
    console.log(e.detail.current)
    // if (e.detail.current>=4){
    //   this.setData({
    //     scroll_left: app.globalData.screenWidth / 5 * e.detail.current
    //   })
    // }else{
    //   this.setData({
    //     scroll_left: 0
    //   })
    // }
  },

})
