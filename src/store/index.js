import Vue from 'vue';
import Vuex from 'vuex';
import api from '../api/index' // api接口

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sideList: [], // 存放二级导航栏数据
    showContent: true, // 加载图案
    size: 5, // 数量
    goodsList: [], // 商品列表数据
  },
  mutations: {
    setSideList(state,list) {
      state.sideList = list
    },
    // 加载loading
    setShowContent(state, bool) {
      state.showContent = bool
      console.log(bool)
    },
    // 加载商品列表
    setGoodsList (state, list) {
      // 滚动加载每次将已有值和新值合并
      state.goodsList = [...state.goodsList, ...list]
    }
  },
  actions: {
    async getSideListt ( { commit }, type ) {
      commit('setShowContent', false)
      // 发请求
      const value = await api.getSideList(type)
      commit('setSideList', value)
      commit('setShowContent', true)
    },
    async getGoodsList({ state },options) {
      const { page, type, sortType } = options
      const value = await api.getGoodsList(type, page, state.size, sortType)
      this.commit('setGoodsList', value.list)
      console.log(value)
    }
  },
});
