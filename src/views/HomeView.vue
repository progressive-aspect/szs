<template>
  <div class="home">
    <el-container>
      <el-header>
        <div class="left">ElementUI 管理后台</div>
        <div class="right">
          <span>amdin</span>
          <el-dropdown>
            <i class="el-icon-arrow-down" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-container class="heng">
        <el-aside>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#222d32"
            text-color="#fff"
            active-text-color="#ffd04b"
            :router="true"
          >
            <el-menu-item index="1">
              <i class="el-icon-burger"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-s-finance"></i>
                <span>文章管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">
                  <i class="el-icon-apple"></i>
                  <span>文章列表</span>
                </el-menu-item>
                <el-menu-item index="2-2">
                  <i class="el-icon-pear"></i>
                  <span>多层路由示例</span>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>
<style scoped>
.heng {
  display: flex;
  justify-content: center;
  align-content: center;
}
.el-header {
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.left {
  width: 300px;
  height: 100%;
  line-height: 60px;
  color: #fff;
  text-align: center;
  background: #0079d9;
}
.right {
  width: 85%;
  height: 100%;
  line-height: 60px;
  color: #fff;
  background: #0086f1;
  display: flex;
  justify-content: flex-end;
}
.el-aside {
  height: 93vh;
  background: #222d32;
}
</style>
