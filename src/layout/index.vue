<template>
  <div class="layout-container">
    <el-container class="container">
      <el-aside width="200px">
        <Aside />
      </el-aside>
      <el-container>
        <el-header>
          <Nav />
        </el-header>
        <el-main>
          <Main />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { Aside, Nav, Main } from "./components/index";
export default {
  data() {
    return {};
  },
  components: {
    Aside,
    Nav,
    Main
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.layout-container {
  height: 100%;
  .container {
    height: 100%;
  }
  .el-header {
    background-color: rgba($color: #000000, $alpha: 0.1);
    color: #333;
    text-align: center;
    line-height: 60px;
    border-bottom: 1px solid rgb(233, 231, 231);
  }
  .el-breadcrumb {
    height: 60px;
    line-height: 60px;
  }
}
</style>
