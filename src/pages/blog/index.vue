<template>
<Layout>
    <div style="min-height: 600px" v-loading="loading">
        <el-card shadow="never" style="margin-bottom: 20px">
            <el-input placeholder="请输入关键字" v-model="searchKey" clearable style="width: 300px"></el-input>
            <el-button @click="$share()" style="margin-left: 10px" icon="el-icon-share" type="warning" plain circle></el-button>
            <el-button type="primary" icon="el-icon-edit" round plain style="float: right;" @click="goAdd">写博文</el-button>
        </el-card>

        <div v-if="blogs&&blogs.length>0">
            <el-card
              shadow="hover"
              v-for="({node: item},index) in blogs"
              :key="'p'+index"
              style="margin-bottom: 20px"
              v-if="!item.hide">
                <div slot="header">
                    <el-row>
                        <el-col :span="16">
                            <span>
                                <a style="text-decoration:none;cursor:pointer" @click="goDetails(item.id)">
                                    <i class="el-icon-edit-outline"></i>&nbsp;&nbsp; {{item.title}}
                                </a>
                            </span>
                        </el-col>
                        <el-col :span="8">
                            <div style="text-align: right;">
                                <el-button @click="$share('/blog/'+item.id)" style="padding: 3px 0" type="text" icon="el-icon-share"></el-button>
                                <el-button @click="editBlog(index)" style="padding: 3px 0" type="text" icon="el-icon-edit" v-if="token"></el-button>
                                <el-button @click="deleteBlog(index)" style="padding: 3px 0" type="text" icon="el-icon-delete" v-if="token"></el-button>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
                    最近更新 {{item.updated_at}}
                </div>
                <div style="font-size: 1.1rem;line-height: 1.5;color: #303133;padding: 10px 0px 0px 0px">
                    {{item.descript}}
                </div>
            </el-card>
            <div style="text-align: center">
                <!-- <el-pagination @current-change="list" background layout="prev, pager, next" :current-page.sync="query.page" :page-size="query.pageSize"
                    :total="query.pageNumber*query.pageSize">
                </el-pagination> -->
            </div>

        </div>

        <el-card shadow="never" style="margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center" v-if="!blogs||blogs.length==0">
            <font style="font-size: 30px;color:#dddddd ">
                <b>还没有博客 (╯°Д°)╯︵ ┻━┻</b>
            </font>
        </el-card>
    </div>
</Layout>
</template>
<page-query>
query {
  blogs: allStrapiBlogLists {
    edges {
      node{
        id
        title
        descript
        name
        created_at
        updated_at
        img{
          url
        }
      }
    }
  }
}
</page-query>
<script>
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
                // blogs: [],
                token: '123'
            }
        },
        mounted() {
            // this.list()
        },
        computed: {
            blogs() {
                const edges = this.$page.blogs.edges
                const blog = edges.filter(({node}) => {
                    return node.title.indexOf(this.searchKey) > -1
                })
                return blog
            },
        },
        methods: {
            editBlog(index) {
                if (!this.token) {
                    this.$message({
                        message: '请绑定有效的Token',
                        type: 'warning'
                    })
                    return
                }
                this.$router.push('/blog/edit/' + this.blogs[index].id)
            },
            deleteBlog(index) {
                this.$confirm('是否永久删除该博客?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    let blog = this.blogs[index]
                    GistApi.delete(blog.id).then((result) => {
                        this.$message({
                            message: '删除成功',
                            type: 'success'
                        })
                        this.blogs.splice(index, 1)
                    })
                })
            },
            goAdd() {
                if (!this.token) {
                    this.$message({
                        message: '请绑定有效的Token',
                        type: 'warning'
                    })
                    return
                }
                this.$router.push('/blog/add')
            },
            goDetails(id) {
                this.$router.push("/blog/" + id)
            }
        }
    }
</script>