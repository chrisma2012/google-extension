function $(dom) {
  return document.getElementById(dom);
}

async function getKey() {
  const params = {
    name: $('config1id').value,
    deviceId: 'XgSEmmWysRkDANkaxxk6my7n',
    deviceType: 20,
    channel: 0,
  };
  const apiData = {
    appid: '1',
    pbENV: 'beta',
    pbServer: 'mizhua',
    apiDomain: 'https://beta.2tianxin.com',
  };
  const res = await window.apiGetDevLogin(params, apiData);
  window.parent.postMessage(res.loginToken, '*');
}

$('confirmButton1').addEventListener('click', () => {
  getKey();
});

$('confirmButton2').addEventListener('click', () => {});

 
