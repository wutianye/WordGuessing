<template>
  <div class="page">
    <div class="list"> {{dataList[0]}}</div>
    <div class="list">{{dataList[0]}}</div>
    <div class="list">{{dataList[0]}}</div>
    <div class="list">{{dataList[0]}}</div>
    <div class="list">{{dataList[0]}}</div>
    <div class="list">{{dataList[0]}}</div>
    <div class="list">{{dataList[0]}}</div>
    <div class="list">{{dataList[0]}}</div>
    <div class="list">{{dataList[0]}}</div>
    <div class="list">{{dataList[0]}}</div>
    <div class="list">{{dataList[0]}}</div>
    <div class="list">{{dataList[0]}}</div>
    <div class="list">{{dataList[0]}}</div>
    <div class="list">{{dataList[0]}}</div>
    <div class="list">{{dataList[0]}}</div>
    <div class="list">{{dataList[0]}}</div>
    <div class="list">{{dataList[0]}}</div>

    <div class="list">{{dataList[0]}}</div>

    <div class="list">{{dataList[0]}}</div>
    <div class="list">{{dataList[0]}}</div>
    <div class="list">{{dataList[0]}}</div>
    <div class="list">{{dataList[0]}}</div>
    <div class="list">{{dataList[0]}}</div>
    <div class="list">{{dataList[0]}}</div>
    <div class="list">{{dataList[0]}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataList: ['恒星', '象牙',
        '老板娘',
        '血',
        '指挥家',
        '汽油',
        '假期',
        '夹克',
        '技师',
        '天才',
        '鞋',
        '射线',
        '绳子',
        '盲点',
        '罗宾汉',
        '飞鸟',
        '显微镜',
        '坑',
        '垃圾桶',
        '浆果',
        '寺庙',
        '痕迹',
        '鹰',
        '喷射',
        '自行车',
        '企鹅',
        '书签',
        '遗体',
        '恶作剧',
        '易拉罐'
      ]
    }
  }
}
</script>

<style scoped>
.page {
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  flex-wrap: wrap;
}
.list {
  height: 18%;
  width: 18%;
  border-radius: 10px;
  background-color: #cad5eb;
}
</style>
