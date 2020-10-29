<template>
  <Layout>
    <el-card shadow="never">
      <h3 slot="header">社交圈</h3>
      <el-row :gutter="20">
        <el-col :span="8" v-for="item in followers" :key="item.name" style="margin-bottom: 20px">
          <el-card :body-style="{ padding: 0 }" shadow="hover">
            <img height="225px" :src="item.node.avatarUrl" class="image" />
            <div style="padding: 14px">
              <span>{{ item.node.name || '--'}}</span>
              <div class="bottom clearfix">
                <a :href="item.node.url">Ta的主页</a>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </Layout>
</template>
<page-query>
query {
  metadata {
    githubData {
      user {
        followers {
          edges {
            node {
              avatarUrl
              name
              url
            }
          }
        }
      }
    }
  }
}
</page-query>
<script>
export default {
  name: "Social",
  metaInfo: {
    title: "Hello, world!",
  },
  computed: {
    followers() {
      return this.$page.metadata.githubData.user.followers.edges;
    },
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
