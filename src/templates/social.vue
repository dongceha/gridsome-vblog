<template>
<Layout>
    <div>
        <el-card shadow="never" style="min-height: 400px;margin-bottom: 20px;">
            <div slot="header" class="clearfix">
                <span>{{$page.social.name}}</span>
                <el-button @click="$router.go(-1)" style="float: right; padding: 3px 0" type="text" icon="el-icon-d-arrow-left">返回</el-button>
            </div>
            <el-row>
                <el-col :span="9" style="padding: 0px 10px 20px 0px">
                    <img :src="GRIDSOME_API_URL + $page.social.img.url" style="width: 100%;border-radius:5px;">
                    <div style="padding: 10px">
                        <font style="font-size: 26px;line-height: 40px;font-weight: 600">{{$page.social.name}}
                            <br>
                        </font>
                        <font style="font-size: 20px;font-style: normal;font-weight: 300;line-height: 35px;color: #666;">{{$page.social.name}}
                            <br>
                        </font>
                        <font style="font-size: 14px;line-height: 20px;color:#606266;" v-if="$page.social.address">
                            <i class="el-icon-location-outline"></i>&nbsp;&nbsp;{{$page.social.address}}
                            <br>
                        </font>
                        <font style="font-size: 14px;line-height: 20px;color:#606266;" v-if="$page.social.email">
                            <i class="el-icon-message"></i>&nbsp;&nbsp;{{$page.social.email}}
                            <br>
                        </font>
                        <font style="font-size: 14px;color:#606266;" v-if="$page.social.blog">
                            <i class="el-icon-edit-outline"></i>&nbsp;&nbsp;
                            <a href="javascript:void(0)" target="_blank">{{$page.social.blog}}</a>
                            <br>
                        </font>
                    </div>

                </el-col>
                <el-col :span="15" style="padding: 0px 20px 20px 10px">
                    <div style="width: 100%;min-height: 300px; border-radius:5px; border: 1px solid #EBEEF5;padding: 10px;font-size: 16px;
                    color: #6a737d;" v-if="$page.social.descript" v-html="mdToHtml($page.social.descript)"></div>
                    <div style="width: 100%;min-height: 300px; border-radius:5px; border: 1px solid #EBEEF5;padding: 30px;text-align: center;
                    font-size: 30px;color:#dddddd" v-else>
                        <b>◔ ‸◔？没有简介</b>
                    </div>
                </el-col>
            </el-row>

        </el-card>
    </div>
</Layout>
</template>
<page-query>
query ($id: ID!){
  social: strapiSocials (id: $id) {
    id
    name
    descript
    img{
      url
    }
    address
    updated_at
    created_at
  }
}
</page-query>
<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()
    export default {
        data() {
            return {
                loading: false,
                githubUsername: this.$route.params.name,
                name: 'lililiwj',
                avatarUrl: 'https://avatars1.githubusercontent.com/u/38744589?v=4',
                htmlUrl: 'https://github.com/lililiwj',
                blog: 'GitHub-Leewj.github.io',
                location: null,
                email: null,
                bio: null,
                followers: 1,
                following: 2,
                publicRepos: 1
            }
        },
        mounted() {
        },
        methods: {
            mdToHtml(markdown) {
                return md.render(markdown)
            }
        }
    }
</script>