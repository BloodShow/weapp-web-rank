import Rank from '../../service/rank'

Page({
  data: {
    rankList: [],
    imageUrl: '',
    imageUrls: ['https://upload.jianshu.io/users/upload_avatars/3100736/ac238e47-6978-4e2a-86f5-9d15aba2f914.jpg', '', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1966241482,3635901778&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3289087239,3379578403&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=235964461,1252733691&fm=27&gp=0.jpg', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=680844055,1184814108&fm=11&gp=0.jpg']
  },
  onLoad() {
    this.getHotData();
    console.log();
  },
  onPullDownRefresh() {
  },
  getHotData() {
    wx.showNavigationBarLoading()
    Rank.getHotList(rankList => {
      this.setData({ rankList })
      wx.stopPullDownRefresh()
      wx.hideNavigationBarLoading()
    })
  },
  getTrendData() {
    wx.showNavigationBarLoading()
    Rank.getTrendList(rankList => {
      this.setData({ rankList })
      wx.stopPullDownRefresh()
      wx.hideNavigationBarLoading()
    })
  },
  tapRankItem(event) {
    const index = event.currentTarget.dataset.index
    const rankList = this.data.rankList
    rankList[index].open = !rankList[index].open
    this.setData({ rankList })
  },
  onShareAppMessage: function () {
    this.imageUrl = this.data.imageUrls[Math.floor(Math.random() * this.data.imageUrls.length)];
    return {
      title: '前端最火的框架都在这里了！',
      // desc: '前端最火的框架都在这里了！',
      path: '/pages/index/index',
      imageUrl: this.imageUrl
    }
  }
})
