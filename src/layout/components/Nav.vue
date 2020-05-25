<template>
  <div class="nav-container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="(item, i) in items" :key="i">{{item.meta.title}}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-dropdown>
      <span class="el-dropdown-link">
        退出
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <span @click="logout()">退出</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    };
  },
  methods: {
    getRouter() {
      // console.log(this.$route.matched);
      this.items = this.$route.matched;
    },
    logout() {
      this.$router.push("/login");
    }
  },
  created() {
    this.getRouter();
  },
  watch: {
    // 监听路由变化
    $route(to, from, next) {
      this.getRouter();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.nav-container {
  .el-dropdown-link {
    cursor: pointer;
  }
  .el-dropdown {
    position: absolute;
    top: 0px;
    right: 20px;
  }
}
</style>
