<template>
  <div class="page">
    <div
      class="list"
      v-for="(item, index) in dataList"
      :key="index"
      @click="handleClick(item, index)"
    >
      <div
        v-if="isGuessed[index] === false"
        style="width:100%; height:100%;display:flex;align-items:center;justify-content:center"
      >
        {{ item }}
      </div>
      <div v-else style="width:100%; height:100%">
        <img
          :src="require('../assets/card-blue-back-2.png')"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dataList: [],
      isGuessed: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    handleClick(val, index) {
      this.$confirm("此操作将标记这个词语, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.showIdentity(val, index);
        })
        .catch(() => {
          this.$message({
            showClose: true,
            type: "info",
            message: "已取消标记"
          });
        });
    },

    // 初始化猜词数据
    getData() {
      axios.get("/static/json/data.json").then(res => {
        console.log(res.data);
        this.dataList = res.data.data;
      });
      for (var i = 0; i < 25; i++) {
        this.isGuessed[i] = false;
      }
    },

    showIdentity(val, index) {
      // 这里调用后台，来获得身份信息
      console.log(this.isGuessed[index]);
      this.$set(this.isGuessed, index, true);
      console.log(this.isGuessed[index]);
      // 根据返回值加载图片
    }
  }
};
</script>

<style scoped>
.page {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}
.list {
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% / 5 - 20px);
  height: calc(100% / 5 - 20px);
  cursor: pointer;
  background-color: #cad5eb;
  border-radius: 10px;
}
</style>
