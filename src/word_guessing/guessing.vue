<template>
  <div class="page">
    <div
      class="list"
      v-for="(item, index) in dataList"
      :key="index"
      @click="handleClick(item)"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dataList: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    handleClick(val) {
      alert(val);
    },
    getData() {
      axios.get("/static/json/data.json").then(res => {
        console.log(res.data);
        this.dataList = res.data.data;
      });
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
