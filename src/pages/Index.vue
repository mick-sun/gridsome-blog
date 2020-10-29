<template>
  <Layout>
    <el-card shadow="never">
      <h1 slot="header" style="margin: 0">{{ gist.files[0].name }}</h1>
      <p>发布: {{ gist.pushedAt }}</p>
      <p>更新: {{ gist.updatedAt }}</p>
      <div v-html="mdToHtml(gist.description)"></div>
      <el-divider></el-divider>
      <div class="content" v-for="(file, key) in gist.files" :key="key">
        <div v-html="mdToHtml(file.text)"></div>
      </div>
    </el-card>
  </Layout>
</template>
<page-query>
query {
  metadata {
    githubData {
      user {
        gists {
          nodes {
            files {
              text
              name
            }
            description
            id
            pushedAt
            updatedAt
          }
        }
      }
    }
  }
}

</page-query>
<script>
import MarkdownIt from "markdown-it";
const md = new MarkdownIt();
export default {
  name: "Index",
  metaInfo: {
    title: "Hello, world!",
  },
  computed: {
    gist() {
      return this.$page.metadata.githubData.user.gists.nodes[0];
    },
  },
  methods: {
    mdToHtml(markdown) {
      return md.render(markdown);
    },
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
img{
  max-width: 100%;
}
</style>
