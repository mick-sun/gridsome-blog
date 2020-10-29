<template>
  <Layout>
    <el-card v-for="(repo, key) in repositories" :key="key" shadow="hover" style="margin-bottom: 20px">
      <div slot="header">
        <el-row :gutter="10">
         <el-col :span="16">
           <a style="margin: 0"><i class="el-icon-service"></i> {{ repo.name }}</a>
         </el-col>
          <el-col :span="8">
            <div style="text-align: right">
              <a type="text" :href="repo.url" style="padding: 3px 0px;">
                <i class="el-icon-back"></i>
                前往GitHub
              </a>
              <el-button type="text" style="padding: 3px 0px; margin-left: 8px;">
                <i class="el-icon-share"></i>
              </el-button>
            </div>
          </el-col>
        </el-row>
      </div>
      <p style="font-size: 0.9rem;
    line-height: 1.5;
    color: rgb(96, 108, 113);">最近更新: {{ repo.updatedAt }}</p>
      <div style="font-size: 16px" v-html="mdToHtml(repo.description)"></div>
      <div style="font-size: 1.1rem; color: rgb(48, 49, 51); padding: 10px 0px 0px;">
        <el-row>
          <el-col :span="8" style="padding-top: 5px;">
            <el-tooltip class="item" effect="dark" :content="`start ${repo.stargazerCount}`">
              <i class="el-icon-star-off" style="margin: 0px 5px 0px 15px;"></i>
            </el-tooltip>
            {{ repo.stargazerCount }}
            <el-tooltip class="item" effect="dark" :content="`watch ${repo.watchers.totalCount}`">
              <i class="el-icon-view" style="margin: 0px 5px 0px 15px;"></i>
            </el-tooltip>
            {{ repo.watchers.totalCount }}
            <el-tooltip class="item" effect="dark" :content="`start ${repo.forkCount}`">
              <i class="el-icon-bell" style="margin: 0px 5px 0px 15px;"></i>
            </el-tooltip>
            {{ repo.forkCount }}
          </el-col>
          <el-col :span="16" style="text-align: right;">
            <el-tag type="info" effect="dark" v-if="repo.licenseInfo">
              {{ repo.licenseInfo.name }}
            </el-tag>
            <el-tag
                v-for="lang in repo.languages.nodes"
                :key="lang.name"
                :color="lang.color"
                style="color: #fff; margin-left: 8px;"
                :style="{borderColor: lang.color}"
            >{{ lang.name }}</el-tag>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </Layout>
</template>
<page-query>
query {
  metadata {
    githubData {
      user {
        repositories {
          nodes {
            name
            url
            description
            stargazerCount
            forkCount
            updatedAt
            watchers {
              totalCount
            }
            languages {
              nodes {
                name
                id
                color
              }
            }
            licenseInfo {
              id
              name
            }
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
  name: 'Project',
  metaInfo: {
    title: 'Hello, world!'
  },
  computed: {
    repositories () {
      return this.$page.metadata.githubData.user.repositories.nodes
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
