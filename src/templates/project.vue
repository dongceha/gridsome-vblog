<template>
<Layout>
    <div style="min-height: 600px">
        <el-card shadow="never" style="min-height: 400px">
            <div slot="header">
                <el-row>
                    <el-col :span="12">
                        <span>{{project.title}}</span>
                    </el-col>
                    <el-col :span="12">
                        <div style="text-align: right;">
                            <el-button @click="$share()" style="padding: 3px 0" type="text" icon="el-icon-share">分享</el-button>
                            <el-button @click="goGithub(project.url)" style="padding: 3px 0" type="text" icon="el-icon-back">前往GitHub</el-button>
                            <el-button @click="more" style="padding: 3px 0" type="text" icon="el-icon-more-outline">更多项目</el-button>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
                发布 {{project.created_at}}
                <br> 更新 {{project.updated_at}}
            </div>
            <div v-html="mdToHtml(project.description)"  style="font-size: 1.1rem;line-height: 1.5;color: #303133;padding: 20px 0px 0px 0px">
            </div>
            <div style="font-size: 1.1rem;color: #303133;padding: 15px 0px 15px 0px;border-bottom: 1px solid #E4E7ED;">
                <el-row>
                    <el-col :span="16"  style="padding-top: 5px">
                        <el-tooltip effect="dark" :content="'star '+project.mark" placement="bottom">
                            <i class="el-icon-star-off" style="margin: 0px 5px 0px 0px"></i>
                        </el-tooltip>
                        {{project.mark}}
                        <el-tooltip effect="dark" :content="'watch '+project.watch" placement="bottom">
                            <i class="el-icon-view" style="margin: 0px 5px 0px 15px"></i>
                        </el-tooltip>
                        {{project.watch}}
                        <el-tooltip effect="dark" :content="'fork '+project.fork" placement="bottom">
                            <i class="el-icon-bell" style="margin: 0px 5px 0px 15px"></i>
                        </el-tooltip>
                        {{project.fork}}
                    </el-col>
                    <el-col :span="8" style="text-align: right;">
                        <el-tag size="small" type="danger" v-if="project.license">{{project.license}}</el-tag>
                        <el-tag size="small" v-if="project.tag" type="success">{{project.tag.title}}</el-tag>
                    </el-col>

                </el-row>


            </div>
        </el-card>
    </div>
</Layout>
</template>
<page-query>
query ($id: ID!){
  project: strapiProjects (id: $id) {
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
</page-query>
<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()
    export default {
        data() {
            return {
                // project: {
                //     id: '72989',
                //     name: "lililiwj",
                //     url: 'html_url',
                //     stargazersCount: 'https://api.github.com/users/lililiwj/subscriptions',
                //     watchersCount: 3,
                //     forksCount: 2,
                //     language: 'javascript',
                //     description: 'hahahaha',
                //     license: 'MIT',
                //     content: '<p>GitHub-Leewj.github.io</p>',
                //     createTime: '2018-04-26T03:44:58Z',
                //     updateTime: '2019-01-30T09:25:07Z'
                // },
                loading: false,
                token: '123'
            }
        },
        computed: {
            project() {
                return this.$page.project
            }
        },
        methods: {
            mdToHtml(markdown) {
                return md.render(markdown)
            },
            goGithub(url) {
                window.open(url)
            },
            more() {
                this.$router.push('/project')
            }
        }
    }
</script>