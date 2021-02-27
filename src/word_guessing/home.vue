<template>
<div id="building">

    <div style="text-align:center" >  
       <el-button type="danger" style="margin-top:100px" @click="handleClick()">行动代号</el-button>                 
    </div>
</div>

</template>

<script>
export default {
    methods: {
        handleClick(){
            this.$router.push('/login')
        }
    }
}
</script>

<style>
#building{
background:url("../assets/background1.jpg");
width:100%;	
height:100%;
position:fixed;
background-size:100% 100%;}
</style>