<template>
  <van-tabbar v-model="active" fixed router>
    <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
    <van-tabbar-item icon="apps-o" to="/home/classify">分类</van-tabbar-item>
    <van-tabbar-item icon="cart-o" to="/home/shopping">购物车</van-tabbar-item>
    <van-tabbar-item icon="user-circle-o" to="/home/my">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style>

</style>
