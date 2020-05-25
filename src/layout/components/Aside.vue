<template>
  <el-menu
    router
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="/home">
      <i class="el-icon-menu"></i>
      <span slot="title">应用监控</span>
    </el-menu-item>
    <el-menu-item index="/laboratory/index">
      <i class="el-icon-setting"></i>
      <span slot="title">实验室管理</span>
    </el-menu-item>
    <el-menu-item index="/recruit/index">
      <i class="el-icon-setting"></i>
      <span slot="title">招聘管理</span>
    </el-menu-item>
    <el-menu-item index="/enroll/index">
      <i class="el-icon-setting"></i>
      <span slot="title">报名管理</span>
    </el-menu-item>
    <el-menu-item index="/interview/index">
      <i class="el-icon-setting"></i>
      <span slot="title">面试管理</span>
    </el-menu-item>
    <el-menu-item index="/work/index">
      <i class="el-icon-setting"></i>
      <span slot="title">工作管理</span>
    </el-menu-item>
    <el-menu-item index="/repair/index">
      <i class="el-icon-setting"></i>
      <span slot="title">维修管理</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.el-menu-vertical-demo {
  height: 100%;
}
</style>
