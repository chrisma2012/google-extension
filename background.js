// let color = '#3aa757';

// chrome.runtime.onInstalled.addListener(reason => {
//   chrome.storage.sync.set({ color });
//   console.log('Default background color set to %cgreen', `color: ${color}`);
//   console.log(chrome);
//   // console.log(confirmButton)
// });

//动态配置重定向
chrome.declarativeNetRequest.updateDynamicRules(
  {
    addRules: [
      {
        id: 1,
        priority: 1,
        action: {
          type: 'redirect',
          redirect: {
            url: 'http://192.168.56.1:9000/?env=beta&debug=1#/index',
          },
        },
        condition: {
          urlFilter: 'localhost:9000',
          resourceTypes: ['main_frame'],
        },
      },
    ],
    removeRuleIds: [1],
  },
  function () {
    console.log('---------这是动态配置规则后的回调函数');
  }
);
