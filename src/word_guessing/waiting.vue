<template>
<div class="login-page">
 
    <div>
        等待集合！！
    </div>
    <div style="text-align:center" >  
       <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="账号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="group"
        label="队伍"
        width="180">
      </el-table-column>
      <el-table-column
        prop="role"
        label="角色">
      </el-table-column>
    </el-table>
    </div>

    <el-button type="danger" style="margin-top:100px" @click="handleClick()">开始游戏</el-button>
</div>

</template>

<script>
export default {
    data() {
      return {
        tableData: [{
            group: '蓝色方',
            name: '王小虎',
            role: '猜词者'
          }, {
            group: '蓝色方',
            name: '王小虎',
            role: '猜词者'
          }, {
            group: '红色方',
            name: '王小虎',
            role: '描述者'
          }, {
            group: '红色方',
            name: '王小虎',
            role: '描述者'
          }]
      }
    },

    methods: {
        handleClick(){
            this.$router.push('/guessing')
        }
    }
}
</script>

<style>
.login-page {
   width: 500px;
   height: 500px;
   position: absolute;
   left:50%;
   top:50%;
   margin-top: -50px;
   margin-left: -50px;
}
</style>