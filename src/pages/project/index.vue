<template>
<Layout>
    <div style="min-height: 600px" v-loading="loading">
        <el-card shadow="never" style="margin-bottom: 20px">
            <el-input placeholder="请输入关键字" v-model="searchKey" clearable style="width: 300px"></el-input>
            <!-- <el-button @click="search" icon="el-icon-search" style="margin-left: 10px" circle plain></el-button> -->
            <el-button @click="$share()" icon="el-icon-share" type="warning" style="margin-left: 10px" plain circle></el-button>
        </el-card>

        <div v-if="projects&&projects.length>0">
            <el-card shadow="hover" v-for="({node: item},index) in projects" :key="'pro'+index" style="margin-bottom: 20px">
                <div slot="header">
                    <el-row>
                        <el-col :span="16">
                            <span>
                                <a style="text-decoration:none;cursor:pointer" @click="goDetails(item.id)">
                                    <i class="el-icon-service"></i>&nbsp;&nbsp; {{item.title}}
                                </a>
                            </span>
                        </el-col>
                        <el-col :span="8">
                            <div style="text-align: right;">
                                <el-button @click="goGithub(item.url)" style="padding: 3px 0" type="text" icon="el-icon-back">前往GitHub</el-button>
                                <el-button @click="$share('/project/'+item.id)" style="padding: 3px 0" type="text" icon="el-icon-share"></el-button>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
                    最近更新 {{item.updated_at}}
                </div>
                <div v-html="mdToHtml(item.description)" style="font-size: 1.1rem;line-height: 1.5;color: #303133;padding: 10px 0px 0px 0px">
                </div>
                <div style="font-size: 1.1rem;color: #303133;padding: 10px 0px 0px 0px">
                    <el-row>
                        <el-col :span="16" style="padding-top: 5px">
                            <el-tooltip effect="dark" :content="'star '+item.star" placement="bottom">
                                <i class="el-icon-star-off" style="margin: 0px 5px 0px 0px"></i>
                            </el-tooltip>
                            {{item.mark}}
                            <el-tooltip effect="dark" :content="'watch '+item.mark" placement="bottom">
                                <i class="el-icon-view" style="margin: 0px 5px 0px 15px"></i>
                            </el-tooltip>
                            {{item.watch}}
                            <el-tooltip effect="dark" :content="'fork '+item.fork" placement="bottom">
                                <i class="el-icon-bell" style="margin: 0px 5px 0px 15px"></i>
                            </el-tooltip>
                            {{item.fork}}
                        </el-col>
                        <el-col :span="8" style="text-align: right;">
                            <el-tag size="small" type="danger" v-if="item.license">{{item.license}}</el-tag>
                            <el-tag size="small" v-if="item.tag" type="success">{{item.tag.title}}</el-tag>
                        </el-col>
                    </el-row>
                </div>
            </el-card>
            <div style="text-align: center">
                <!-- <el-pagination @current-change="list" background layout="prev, pager, next" :current-page.sync="query.page" :page-size="query.pageSize"
                    :total="query.pageNumber*query.pageSize">
                </el-pagination> -->
            </div>
        </div>

        <el-card shadow="never" style="margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center" v-if="!projects||projects.length==0">
            <font style="font-size: 30px;color:#dddddd ">
                <b>还没有开源项目 (╯°Д°)╯︵ ┻━┻</b>
            </font>
        </el-card>
    </div>
</Layout>
</template>
<page-query>
query {
  projects: allStrapiProjects {
    pageInfo {
      totalItems
      totalPages
    }
    edges {
      node {
        id
        github
        url
        title
        fork
        mark
        watch
        descript
        description
        tag{
          id
          title
        }
        created_at
        updated_at
      }
    }
  }
}
</page-query>
<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()
    export default {
        data() {
            return {
                query: {
                    page: 1,
                    pageSize: 5,
                    pageNumber: 1
                },
                loading: false,
                searchKey: "",
                // projects: [],
                token: 123
            }
        },
        mounted() {
            // this.list()
        },
        computed: {
            projects() {
                console.log(this.$page.projects)
                const edges = this.$page.projects.edges
                const projects = edges.filter(({node}) => {
                    return node.title.indexOf(this.searchKey) > -1
                })
                return projects
            },
        },
        methods: {
            mdToHtml(markdown) {
                return md.render(markdown)
            },
            goDetails(id) {
                this.$router.push("/project/" + id)
            },
            goGithub(url) {
                window.open(url)
            }
        }
    }
</script>