<template>
  <view class="page">
    <view id="rod" class="content" @touchstart="handleTouchStart" @touchmove="handleTouch" @touchend="handleTouchEnd">
      <view class="rod" :style="myStyle">
        <image class="logo" src="https://cms.lxbznkj.com/favicon.png"></image>
      </view>
    </view>
  </view>
</template>

<script>
  import { writeBLECharacteristicValue } from '@/utils/bluetooth2';

  export default {
    data() {
      return {
        startX: 0, // 触摸开始的X坐标
        endX: 0, // 触摸结束的X坐标
        isSwiping: false, // 是否正在滑动
        knobX: 0,
        knobY: 0,
        myStyle: {
          transform: 'rotate(0deg)'
        }
      };
    },
    onReady() {
      writeBLECharacteristicValue('0xff');
      uni
        .createSelectorQuery()
        .select('#rod')
        .boundingClientRect((rect) => {
          this.knobX = rect.left + rect.width / 2;
          this.knobY = rect.top + rect.height / 2;
        })
        .exec();
    },
    onLoad() {},
    methods: {
      handleTouchStart(event) {
        this.startX = event.touches[0].clientX;
        this.temp = event.touches[0].clientX;
        this.isSwiping = true;
      },
      handleTouch(event) {
        this.deltaX = event.touches[0].clientX - this.knobX;
        this.deltaY = event.touches[0].clientY - this.knobY;
        let angleRad = Math.atan2(this.deltaY, this.deltaX);
        let angleDeg = (angleRad * 180) / Math.PI;
        let rotationAngle = (angleDeg + 180) % 360;
        this.myStyle.transform = `rotate(${rotationAngle}deg)`;
        console.log(rotationAngle);
        this.isSwiping = true;
      },
      handleTouchEnd(event) {
        if (this.isSwiping) {
          this.endX = event.changedTouches[0].clientX;
          const deltaX = this.endX - this.startX;
          if (Math.abs(deltaX) > 30) {
            // 滑动超过30px判定为滑动
            // 左滑
            if (deltaX < 0) {
              console.log('左滑');
              // 左滑逻辑
            } else {
              console.log('右滑');
              // 右滑逻辑
            }
          }
          this.isSwiping = false;
        }
      },
      handleClick() {
        if (!this.isSwiping) {
          console.log('点击事件');
          // 点击事件逻辑
        }
      }
    }
  };
</script>

<style>
  .page {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .text-area {
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 36rpx;
    color: #8f8f94;
  }
</style>
