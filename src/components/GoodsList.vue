<template>
  <div class="list-wrapper">
    <div class="list-header van-hairline--top-bottom">
      <div :class="{active: type == 'all'}"
      @click="changeType('all')">综合</div>
      <div :class="{active: type == 'sale'}"
      @click="changeType('sale')">销量</div>
      <div class="price" :class="{'price-up': type == 'price-up', 'price-down': type == 'price-down'}"
      @click="changeType('price')">价格</div>
    </div>
    <div class="list-content">
      <!-- 下拉刷新 -->
      <van-pull-refresh
        v-model="isLoading"
        @refresh="onRefresh"
      >
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <goods-card
          v-for="item in goodsList"
          :key="item.id"
          v-bind="item"></goods-card>
          <van-cell />
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import goodsCard from './GoodCard'
export default {
  components: {
    goodsCard
  },
  data () {
    return {
      type: 'price-up', // 根据类名排序
      isLoading: false,
      loading: false,
      finished: false,
    }
  },
  methods: {
    changeType(type) {
      if (type == 'all') {
        this.type = 'all'
      } else if (type == 'sale') {
        this.type = 'sale'
      } else {
        if (this.type == 'price-up') {
          this.type = 'price-down'
        } else {
          this.type = 'price-up'
        }
      }
    },
    onRefresh () {
    },
    onLoad () {
    }
  },
  computed: {
    ...mapState({
      goodsList: (state) => state.goodsList,
    })
  }
}
</script>

<style lang='less'>
  .list-header {
    width: 296px;
    position: relative;
    top: 0;
    left: 79px;
    box-sizing: border-box;
    padding: 0 8px;
    display: flex;
    justify-content: flex-end;
    > div {
      width: 50px;
      height: 25px;
      line-height: 25px;
      text-align: center;
      color: #cecece;
      position: relative;
    }
    .active, .price-up, .price-down{
      color: #ff1a90;
      font-weight: bold;
    }
    .price::after {
      content:'';
      border: 4px solid transparent;
      border-top-color: #aaa;
      position: absolute;
      bottom: 4px;
      right: 0;
    }
    .price::before {
      content:'';
      border: 4px solid transparent;
      border-bottom-color: #aaa;
      position: absolute;
      top: 4px;
      right: 0;
    }
    .price-up::before {
      border-bottom-color: #ff1a90;
    }
    .price-down::after {
      border-top-color: #ff1a90;
    }
  }
</style>