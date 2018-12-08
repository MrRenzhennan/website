import {
  TOPICLIST,
  PICLIST,
} from './mutations-types'


import {
  setStore,
  getStore,
} from '../utils/cache'

const mutations = {
  [PICLIST](state, picList){
  setStore('PIC_LIST', picList);
  state.picList = picList;
  },

  [TOPICLIST](state, topicList){
    setStore('TOPIC_LIST', topicList);
    state.topicList = topicList
  },
}

export default mutations
