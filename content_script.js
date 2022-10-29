chrome.runtime.onMessage.addListener(function (msg, sender, response) {
  window.localStorage.setItem('_key_', msg);
  response();
  window.location.reload();
});


window.parent.postMessage('测试123-------------', '*');
console.log('-=---window.parent',window.parent)