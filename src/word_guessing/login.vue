<template>
<div class="login-page">

    <div style="text-align:center" >  
       <el-input placeholder="请输入内容" v-model="input1">
         <template slot="prepend">账号</template>
       </el-input> 
       <el-input placeholder="请输入内容" v-model="input2">
         <template slot="prepend">密码</template>
       </el-input>              
       <el-input placeholder="请输入内容" v-model="input3">
         <template slot="prepend">房间</template>
       </el-input>    
    </div>

    <el-button type="danger" style="margin-top:100px" @click="handleClick()">进入游戏</el-button>
</div>

</template>

<script>
export default {
    data() {
      return {
        input1: '',
        input2: '',
        input3: ''
      }
    },

    methods: {
        handleClick(){
            this.$router.push('/waiting')
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