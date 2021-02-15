<template>
  <div class="classify-wrapper">
    <div class="search-btn">
      <van-icon name="search" />
      <span>特价几十块</span>
    </div>
    <one-tab></one-tab>
    <template v-if="showContent">
      <side-bar></side-bar>
      <goods-list></goods-list>
    </template>
    <van-loading color="#1989fa" vertical v-else />
  </div>
</template>

<script>
import OneTab from '@/components/OneTab.vue'
import SideBar from '@/components/SideBar.vue'
import GoodsList from '@/components/GoodsList.vue'
import { mapState } from 'vuex';
export default {
  components: {
    OneTab,
    SideBar,
    GoodsList
  },
  computed: {
    ...mapState({
      showContent: 'showContent',
      sidelList: 'sideList'
    })
  }
}
</script>

<style lang="less">
  .classify-wrapper {
    width: 375px;
    .search-btn {
      width: 355px;
      height: 33px;
      line-height: 33px;
      background: orangered;
      margin: 0 auto;
      border-radius: 10px;
      font-size: 14px;
      text-align: center;
      >*{
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
</style>
