<template>
  <Layout>
    <el-card v-for="(gist, key) in gists" :key="key" shadow="hover" style="margin-bottom: 20px">
      <h2 slot="header" style="margin: 0">{{ gist.files[0].name }}</h2>
      <p style="font-size: 0.9rem;
    line-height: 1.5;
    color: rgb(96, 108, 113);">最近更新: {{ gist.updatedAt }}</p>
      <div style="font-size: 18px" v-html="mdToHtml(gist.description)"></div>
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
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt()
export default {
  name: 'Blog',
  metaInfo: {
    title: 'Hello, world!'
  },
  computed: {
    gists () {
      return this.$page.metadata.githubData.user.gists.nodes
    }
  },
  methods: {
    mdToHtml (markdown) {
      return md.render(markdown)
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

img {
  max-width: 100%;
}
</style>
