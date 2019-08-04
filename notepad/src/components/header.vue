<template>
  <div class="header">
    <div class="logo">
      <img src="../assets/icons8_jack_64.png" />
      <span>Notepad</span>
    </div>
    <div class="nav-bar">
      <span class="all">
        <router-link to="/all">全部</router-link>
      </span>
      <span class="untreated">
        <router-link to="/untreated">待处理</router-link>
      </span>
      <span>
        <router-link to="/over">已完成</router-link>
      </span>
    </div>
    <router-link to="/add">
      <span class="btn-add"></span>
    </router-link>
  </div>
</template>

<script>
import Clock from "./Clock.vue";
export default {
  components: {
    Clock
  }
};
</script>

<style lang="less" scoped>
.header {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  background: #fff;
  z-index: 9999;
  height: 65px;
  padding: 10px;
  box-shadow: 0px 2px 2px #eee;
  .logo {
    display: inline-block;
    float: left;
    height: 65px;
    height: 65px;
    img {
      display: inline-block;
      float: left;
      width: 65px;
      height: 65px;
    }
    span {
      display: inline-block;
      float: left;
      font-size: 25px;
      font-weight: bold;
      padding-top: 35px;
      margin-left: 15px;
    }
  }
  .nav-bar {
    display: inline-block;
    float: left;
    height: auto;
    overflow: hidden;
    padding-top: 35px;
    padding-left: 20px;
    span {
      display: inline-block;
      width: 80px;
      text-align: center;
      a {
        display: inline-block;
        padding: 5px;
        transition: transfrom 2s;
      }
      a.active {
        border-bottom: 4px solid #81cde6;
      }
      a:hover {
        transform: translateY(-1px);
        border-bottom: 4px solid #81cde6;
      }
    }
  }
  .btn-add {
    display: inline-block;
    float: right;
    width: 50px;
    height: 50px;
    background: url(../assets/icon_add_hover.png) no-repeat center center;
    background-size: 30px;
    margin-top: 20px;
    transition: background;
  }
  .btn-add:hover {
    background-size: 70%;
  }
}
</style>
