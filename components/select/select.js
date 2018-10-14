// components/select/select.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    sex: '男',
    area: '全部',
    areadata: [
      {
        value: '全部',
        id: 1,
      },
      {
        value: '同城',
        id: 0,
      }
    ],
    sexdata:  [
      {
        value:'男',
        id:1,
      },
      {
        value: '女',
        id: 0,
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindSexChange: function (e) {
      let SexIndex = e.detail.value;
      let currentId = this.data.sexdata[SexIndex].id;
      console.log('picker发送选择改变，携带值为', currentId)
      this.setData({
        sex: this.data.sexdata[SexIndex].value
      })
    },
    bindAreaChange: function (e) {
      let AreaIndex = e.detail.value;
      let currentId = this.data.areadata[AreaIndex].id;
      console.log('picker发送选择改变，携带值为', currentId)
      this.setData({
        area: this.data.areadata[AreaIndex].value
      })
    }
  }
})
