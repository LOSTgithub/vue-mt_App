<template>
<!-- 二级导航栏页面 -->
  <div class="side-bar-wrapper" ref="side">
    <div v-for="(item, ind) in sideList"
     :key="ind"
     :class="{active: index === ind}"
     @touchend="scrollTo(ind, $event)"
     @touchstart="move = false"
     @touchmove="move = true">
     {{ind ==  0 ? '全部' : item}}
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import tool from '@/util/tools.js'
export default {
  data() {
    return {
      index: 0, // 判断active
      move: false
    }
  },
  methods: {
    ...mapActions(['getGoodsList']),
    scrollTo (ind, e) {
      if (this.move) {
        return
      }
      this.index = ind
      const { side } = this.$refs
      const sonTop = e.target.getBoundingClientRect().top;
      const sonHeight = e.target.offsetHeight
      const pTop = side.getBoundingClientRect().top
      const pHeight = side.offsetHeight
      tool.moveTo(side.scrollTop, sonTop + sonHeight / 2 - pTop - pHeight / 2, side, 'scrollTop')
      // 获取二级菜单栏商品页
      this.getGoodsList({ type: this.sideList[ind], page: 1, sortType: 'all' })
    },
  },
  mounted () {
    // 默认加载第0个
    this.getGoodsList({ type: this.sideList[0], page: 1, sortType: 'all' })
  },
  computed: {
    ...mapState ({
      sideList: 'sideList'
    })
  }
}
</script>

<style lang='less' scoped>
  .side-bar-wrapper {
    position: fixed;
    top: 135px;
    left: 0;
    width: 79px;
    bottom: 1.33333rem;
    background: #f8f8f8;
    overflow: auto;
     div {
      width: 100%;
      text-align: center;
      font-size: 12px;
      height: 40px;
      line-height: 40px;
      position: relative;
    }
    .active {
      font-weight: bold;
      color: #ff1a90;
    }
    .active::before {
      position: absolute;
      width: 6px;
      height: 18px;
      background: #ff1a90;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      content: '';
    }
  }
  .side-bar-wrapper::-webkit-scrollbar{
    width: 0px;
    background: none;
  }
</style>