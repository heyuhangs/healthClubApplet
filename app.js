var wanzikun_0x2167 = ['JjIrU', 'model', 'search', 'FlWeJ', 'globalData', 'request', '/config/get-value', 'HFtaJ', 'sIXJM', 'data', 'code', 'setStorageSync', 'value', 'YueNG', 'goodReputation', 'FSIDi', 'usinfo', 'LYpaS', 'showModal', 'rSlQm', 'token', 'uid', 'score', 'PMScn', 'recharge_amount_min', 'qcILz', 'ZBxLq', 'yYAKu', 'iphone', 'QxiXe', 'nYBGT', 'PjyGJ', 'result', 'rRebO', 'kanjiaList', 'config.js', 'FlLRR', '/user/wxapp/login', 'kulaC', 'TXPNT', 'kAWga', 'DhLLP', '/user/check-token', 'QKSyR', 'login', 'GGaqu', 'QbOyw', 'mzWAt', 'QXOPe', 'CDdtB', 'eUPIW', 'IyPWO', 'hideLoading', 'fjAeq', 'url', 'siteInfo', 'subDomain', 'shareProfile', 'POST', 'application/x-www-form-urlencoded', 'order', 'xURwd', '/template-msg/put', 'NOwZL', 'ObPNe', 'immediately', 'mbxFU', 'gmJwR', 'jDZKI', 'iPhone X', '无法登录，请重试', 'hggsX', 'tVvAn', 'FVlQo', 'pUTsz', 'mallName', '/score/send/rule', '/shop/goods/kanjia/list', 'urls', 'getSystemInfo'];
(function (_0x15f3d8, _0x3a1dbf) {
    var _0x143f07 = function (_0x465e2f) {
        while (--_0x465e2f) {
            _0x15f3d8['push'](_0x15f3d8['shift']());
        }
    };
    _0x143f07(++_0x3a1dbf);
}(wanzikun_0x2167, 0x135));
var wanzikun_0x1f1d = function (_0x1f64a4, _0x59d287) {
    _0x1f64a4 = _0x1f64a4 - 0x0;
    var _0x53a4cd = wanzikun_0x2167[_0x1f64a4];
    return _0x53a4cd;
};
App({
    onLaunch: function () {
        var _0x4b3d7f = this;
        _0x4b3d7f[wanzikun_0x1f1d('0x9')]();
    },
    getUserInfo(){
        const self = this;
      return new Promise(function (resolve, reject) {
          wx.login({
              success: function (res) {
                  // wx.showToast({
                  //     title: JSON.stringify(res),
                  //     icon: 'none',
                  //     duration: 200000
                  // })
                  if (res.code) {
                      wx.request({
                          url: self.globalData.url + `userImpl/getWxInfo?code=${res.code}`,
                          method: "get",
                          success: function (res) {
                              if (res.statusCode == 200) {
                                  self.globalData.wxUser = res.data.wxInfo;
                                  self.globalData.userInfo = res.data.userInfo;
                                  if(res.data.userInfo != ''){
                                      wx.setStorage({
                                          key: 'userKey',
                                          data: res.data.userInfo.USER_ID,
                                          success: function (res) {
                                          }
                                      });
                                  }
                                  resolve(res.data);
                              } else {
                                  wx.showToast({
                                      title: 'openId获取失败无法登陆，请联系管理员!',
                                      icon: 'none',
                                      duration: 2000
                                  })
                                  reject('后台取OpenID失败，无法登陆，请联系管理员!')
                              }
                          },
                          fail: function () {
                              wx.showToast({
                                  title: 'openId获取失败无法登陆，请联系管理员!',
                                  icon: 'none',
                                  duration: 2000
                              })
                              reject('后台取OpenID失败，无法登陆，请联系管理员!')
                          }
                      })
                  } else {
                      wx.showToast({
                          title: '后台取OpenID失败，无法登陆，请联系管理员!',
                          icon: 'none',
                          duration: 2000
                      })
                      reject('后台取OpenID失败，无法登陆，请联系管理员!')
                  }
              },
              fail: function () {
                  wx.showToast({
                      title: '后台取OpenID失败，无法登陆，请联系管理员!',
                      icon: 'none',
                      duration: 2000
                  })
                  reject('后台取OpenID失败，无法登陆，请联系管理员!')
              }
          })
      })
    },
    'siteInfo': require(wanzikun_0x1f1d('0x2e')),
    'urls': function () {
        var _0x1c129e = {
            'fjAeq': function (_0x35f3a9, _0x3332d3) {
                return _0x35f3a9 + _0x3332d3;
            }
        };
        var _0x4f0fe5 = this;
        _0x4f0fe5[wanzikun_0x1f1d('0xf')][wanzikun_0x1f1d('0x9')] = _0x1c129e[wanzikun_0x1f1d('0x40')](_0x4f0fe5['siteInfo'][wanzikun_0x1f1d('0x41')], _0x4f0fe5[wanzikun_0x1f1d('0x42')][wanzikun_0x1f1d('0x43')]);
        _0x4f0fe5['globalData']['share'] = _0x4f0fe5[wanzikun_0x1f1d('0x42')][wanzikun_0x1f1d('0x44')];
    },
    globalData: {
        // wxUser: {
        //     errcode: null,
        //     openid: 'oxPYE5vJxfvIuMqV3ptTXElfY1oE',
        //     WX_NICKNAME: '._.',
        //     WX_IMG: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLH2ZL2ZbyudBGXxVgR82bSf7I260ibeZ7ZQA9AGbagxYSEmX4PxicP2wfCDz3862ZANlR89TTVP2zQ/132',
        // },
        wxUser: '',
        // userInfo: {
        //     PHONE: '15524444266',
        //     PASSWORD: '',
        //     NAME: '',
        //     BANKCODE: '123123',
        //     BANKNAME: '123123',
        //     PAR_ID: '123123123',
        //     USER_ID: '39',
        //     JJB: '1000',
        //     GWB: '300'
        // },
        payId: '',
        userInfo: '',
        Urls: {},
        url: 'http://localhost:8888/FXK_war_exploded/'
        // url: 'http://f22t435363.imwork.net/FXK/'
        // url: 'https://www.guime99.com/'
    }
});
