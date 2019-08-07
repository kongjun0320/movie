<template>
  <div class="cinema">
    <Hh title="影院"></Hh>
    <section class="search-box">
      <section class="city">
        <span>大连</span>
        <i class="iconfont icon-lower-triangle"></i>
      </section>
      <section class="search">
        <i class="iconfont icon-sousuo"></i>
        <span>搜影院</span>
      </section>
    </section>
    <nav class="navbar">
      <section class="item">
        <span>全城</span>
        <i class="iconfont icon-lower-triangle"></i>
      </section>
      <section class="item">
        <span>品牌</span>
        <i class="iconfont icon-lower-triangle"></i>
      </section>
      <section class="item">
        <span>特色</span>
        <i class="iconfont icon-lower-triangle"></i>
      </section>
    </nav>
    <section class="cinema-box">
      <div class="cinema-inner">
        <section class="item">
          <h3 class="title">
            华夏国际影城（三墩店）
            <span class="price">
              <i>31</i> 元起
            </span>
          </h3>
          <div class="address clearFix">
            <span>西湖区公平路同仁汇广场三楼</span>
            <span>2.2km</span>
          </div>
          <section class="tag">
            <span class="allowRefund">退</span>
            <span class="endorse">改签</span>
            <span class="snack">小吃</span>
            <span class="vipTag">折扣卡</span>
          </section>

        </section>
        <section class="item">
          <h3 class="title">
            华夏国际影城（三墩店）
            <span class="price">
              <i>31</i> 元起
            </span>
          </h3>
          <div class="address clearFix">
            <span>西湖区公平路同仁汇广场三楼</span>
            <span>2.2km</span>
          </div>
          <section class="tag">
            <span class="allowRefund">退</span>
            <span class="endorse">改签</span>
            <span class="snack">小吃</span>
            <span class="vipTag">折扣卡</span>
          </section>
          <div class="discount">
            <img src="../../assets/images/card.png" alt />
            <p class="txt">开卡特惠，首单2张最高立减8元</p>
          </div>
        </section>
        <section class="item">
          <h3 class="title">
            华夏国际影城（三墩店）
            <span class="price">
              <i>31</i> 元起
            </span>
          </h3>
          <div class="address clearFix">
            <span>西湖区公平路同仁汇广场三楼</span>
            <span>2.2km</span>
          </div>
          <section class="tag">
            <span class="allowRefund">退</span>
            <span class="endorse">改签</span>
            <span class="snack">小吃</span>
            <span class="vipTag">折扣卡</span>
          </section>
          <div class="discount">
            <img src="../../assets/images/card.png" alt />
            <p class="txt">开卡特惠，首单2张最高立减8元</p>
          </div>
        </section>
        <section class="item">
          <h3 class="title">
            华夏国际影城（三墩店）
            <span class="price">
              <i>31</i> 元起
            </span>
          </h3>
          <div class="address clearFix">
            <span>西湖区公平路同仁汇广场三楼</span>
            <span>2.2km</span>
          </div>
          <section class="tag">
            <span class="allowRefund">退</span>
            <span class="endorse">改签</span>
            <span class="snack">小吃</span>
            <span class="vipTag">折扣卡</span>
          </section>
          <div class="discount">
            <img src="../../assets/images/card.png" alt />
            <p class="txt">开卡特惠，首单2张最高立减8元</p>
          </div>
        </section>
        <section class="item">
          <h3 class="title">
            华夏国际影城（三墩店）
            <span class="price">
              <i>31</i> 元起
            </span>
          </h3>
          <div class="address clearFix">
            <span>西湖区公平路同仁汇广场三楼</span>
            <span>2.2km</span>
          </div>
          <section class="tag">
            <span class="allowRefund">退</span>
            <span class="endorse">改签</span>
            <span class="snack">小吃</span>
            <span class="vipTag">折扣卡</span>
          </section>
          <div class="discount">
            <img src="../../assets/images/card.png" alt />
            <p class="txt">开卡特惠，首单2张最高立减8元</p>
          </div>
        </section>
        <section class="item">
          <h3 class="title">
            华夏国际影城（三墩店）
            <span class="price">
              <i>31</i> 元起
            </span>
          </h3>
          <div class="address clearFix">
            <span>西湖区公平路同仁汇广场三楼</span>
            <span>2.2km</span>
          </div>
          <section class="tag">
            <span class="allowRefund">退</span>
            <span class="endorse">改签</span>
            <span class="snack">小吃</span>
            <span class="vipTag">折扣卡</span>
          </section>
          <div class="discount">
            <img src="../../assets/images/card.png" alt />
            <p class="txt">开卡特惠，首单2张最高立减8元</p>
          </div>
        </section>
      </div>
    </section>
    <TabBar></TabBar>
  </div>
</template>
<script>
import Hh from "../../components/Hh";
import TabBar from "../../components/TabBar";
import BScroll from "better-scroll";
export default {
  name: "Cinema",
  components: {
    Hh,
    TabBar
  },
   mounted() {
    let bScroll = new BScroll(".cinema-box");
  }
};
</script>
<style lang="scss" scoped>
.cinema {
  .search-box {
    background: #f5f5f5;
    font-size: 15px;
    color: #666;
    height: 0.44rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e6e6e6;
    .city {
      padding-left: 0.15rem;
    }
    .search {
      flex: 1;
      height: 0.28rem;
      line-height: 0.28rem;
      font-size: 13px;
      color: #b2b2b2;
      margin-left: 0.18rem;
      border: 0.5px solid #e6e6e6;
      border-radius: 5px;
      margin-right: 0.15rem;
      background: #fff;
      text-align: center;
    }
  }
  .navbar {
    padding: 12px 0px;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #e6e6e6;
    .item {
      text-align: center;
      border-right: 1px solid #e6e6e6;
      font-size: 13px;
      flex: 1;
      color: #666;
    }
  }
  .cinema-box {
    position: absolute;
    top: 1.35rem;
    left: 0;
    right: 0;
    bottom: 0.5rem;
    overflow-x: hidden;
    overflow-y: auto;
    .cinema-inner {
      padding: 0 0.15rem;
      .item {
        padding: 0.13rem 0;
        border-bottom: 1px solid #e6e6e6;
        .title {
          font-size: 16px;
          color: #000;
          .price {
            font-size: 11px;
            color: #f03d37;
            i {
              font-size: 18px;
            }
          }
        }
        .address {
          margin-top: 0.06rem;
          font-size: 13px;
          color: #666;
          span:nth-of-type(1) {
            float: left;
          }
          span:nth-of-type(2) {
            float: right;
          }
        }
        .tag {
          font-size: 25px;
          span {
            font-size: 10px;
            padding: 0.02rem 0.04rem;
            margin: 0 0.03rem;
            border-radius: 3px;
          }
          .allowRefund {
            color: #589daf;
            border: 1px solid #589daf;
          }
          .endorse {
            color: #589daf;
            border: 1px solid #589daf;
          }
          .snack {
            color: #f90;
            border: 1px solid #f90;
          }
          .vipTag {
            color: #f90;
            border: 1px solid #f90;
          }
        }
        .discount {
          padding-top: 0.1rem;
          color: #999;
          font-size: 11px;
          position: relative;
          p {
            padding-top: 0.03rem;
            padding-left: 0.18rem;
          }
          img {
            position: absolute;
            top: 0.1rem;
            left: 0;
            width: 0.15rem;
            height: 0.14rem;
          }
        }
      }
    }
  }
}
</style>
