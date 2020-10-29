<template>
  <div class="layout">
    <header class="masthead" style="background-image: url('/home-bg.jpg')">
      <div class="overlay"></div>
      <div class="site-heading">
        <h1>Mick</h1>
        <span class="subheading">欢迎来到Mick的个人博客</span>
        <div class="follow-me">
          <a
              class="el-button el-button--primary is-plain"
              href="https://github.com/mick-sun"
          >
            Github主页
          </a>
          <a
              class="el-button is-plain"
              href="https://github.com/mick-sun/gridsome-blog"
          >
            博客源码
          </a>
        </div>
      </div>
    </header>
    <main class="main-container">
      <el-row class="tac" :gutter="30">
        <el-col :span="6">
          <el-menu class="el-menu-vertical-demo" router @select="onSelect" :default-active="activeIndex">
            <el-menu-item index="index" :route="{ path: '/' }">
              <i class="el-icon-star-off"></i>
              <span slot="title">最新动态</span>
            </el-menu-item>
            <el-menu-item index="social">
              <i class="el-icon-mobile-phone"></i>
              <span slot="title">社交圈</span>
            </el-menu-item>
            <el-menu-item index="blog">
              <i class="el-icon-edit-outline"></i>
              <span slot="title">博客列表</span>
            </el-menu-item>
            <el-menu-item index="project">
              <i class="el-icon-service"></i>
              <span slot="title">开源项目</span>
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="18">
          <div class="container">
            <slot/>
          </div>
        </el-col>
      </el-row>
    </main>
    <footer class="footer">
      <el-row>
        <el-col :span="10">
          <div>
            <span>© 2020 Mick &nbsp;&nbsp;</span>
            <a href="https://github.com/mick-sun">Profile &nbsp;&nbsp;</a>
            <a href="https://github.com/mick-sun/gridsome-blog"
            >GS Blog &nbsp;&nbsp;</a
            >
          </div>
        </el-col>
        <el-col :span="4" style="text-align: center">
          <i class="el-icon-eleme" style="font-size: 18px"></i>
        </el-col>
        <el-col :span="10">
          <div style="float: right">
            <a href="https://developer.github.com/">GitHub-API&nbsp;&nbsp;</a>
            <a href="https://cn.vuejs.org/">Vue.js&nbsp;&nbsp;</a>
            <a href="https://element.eleme.io/">Element UI</a>
          </div>
        </el-col>
      </el-row>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  name: 'Layout',
  data () {
    return {
      activeIndex: 'index'
    }
  },
  created () {
    this.activeIndex = this.$route.path.substr(1) ? this.$route.path.substr(1) : 'index'
  },
  methods: {
    onSelect (index) {
      this.activeIndex = index
    }
  }
}
</script>

<style scoped>
header.masthead {
  margin-bottom: 50px;
  background: no-repeat center center;
  background-color: #868e96;
  background-attachment: scroll;
  position: relative;
  background-size: cover;
}

header.masthead .overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #212529;
  opacity: 0.5;
}

header.masthead .site-heading {
  padding: 60px 0;
  color: white;
  position: relative;
  z-index: 9;
}

header.masthead .site-heading {
  text-align: center;
}

header.masthead .site-heading h1 {
  font-size: 50px;
  margin-top: 0;
}

header.masthead .site-heading .subheading {
  font-size: 24px;
  font-weight: 300;
  line-height: 1.1;
  display: block;
  margin: 10px 0 0;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.follow-me {
  padding-top: 50px;
}

.follow-me .el-button {
  text-decoration: none;
  color: #333;
}

.blog-source {
  display: flex;
  align-items: center;
}

.main-container {
  width: 1024px;
  margin: 0 auto;
  padding-bottom: 50px;
}

.main-container .el-menu {
  border: 1px solid #e6e6e6;
  border-radius: 4px;
}

.footer {
  width: 1024px;
  margin: 0 auto;
  border-top: 1px solid #e6e6e6;
  padding: 50px 0 30px;
  color: #888;
}
</style>
