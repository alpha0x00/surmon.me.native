/*
*
* Api service
*
*/

import showToast from '@app/utils/toast';

// api
const baseApi = 'https://api.surmon.me';
const fetchService = (url, options = {}) => {
  return fetch(url, options)
  .then(response => {
    return response.json();
  })
  .then(json => {
    showToast(json.message);
    return json;
  })
  .catch(error => {
    showToast('网络错误');
    console.warn(error);
  });
};

// apis
export default class Api {

  // 获取文章列表
  static getArticleList() {
    return fetchService(`${baseApi}/article`)
  }

  // 获取文章详情
  static getArticleDetail(article_id) {
    return fetchService(`${baseApi}/article/${article_id}`)
  }

  // 给文章或主站点赞
  static likeArticleOrSite(article_id) {
    return fetchService(`${baseApi}/like`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstParam: 'yourValue',
        secondParam: 'yourOtherValue',
      })
    })
  }

  // 获取用户信息
  static getUserInfo() {
    return fetchService(`${baseApi}/auth`)
  }
}
