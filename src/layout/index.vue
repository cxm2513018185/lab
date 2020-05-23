<template>
  <div class="layout-container">
    <el-container>
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
  .el-header {
    background-color: #e4e4e4;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-breadcrumb {
    height: 60px;
    line-height: 60px;
  }
}
</style>
