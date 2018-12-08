import request from '../utils/request'
import qs from 'qs'

const HTTP_SECRET = { secret: true };


// 获取推荐列
export const postMain = (num) => request.get('post/getRecommendPost', {
  params: {
    pageNum: num | 0,
  }
});


// 长文提交
export const publishText = (parm) => request.post('post/publishPost', parm);
