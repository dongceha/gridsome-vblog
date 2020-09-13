<template>
  <Layout>
      <div style="min-height: 600px">
        <el-card shadow="never" style="min-height: 400px" v-if="blog.id">
            <div slot="header">
                <span>{{blog.title}}</span>
            </div>
            <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
                发布 {{blog.createTime}}
                <br> 更新 {{blog.updateTime}}
            </div>
            <div style="font-size: 1.1rem;line-height: 1.5;color: #303133;border-bottom: 1px solid #E4E7ED;padding: 5px 0px 5px 0px">
                <pre style="font-family: '微软雅黑'">{{blog.description}}</pre>
            </div>
            <div v-html="blog.content" class="markdown-body" style="padding-top: 20px"></div>
        </el-card>
        <el-card shadow="never" style="margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center" v-if="!blog.id">
            <font style="font-size: 30px;color:#dddddd ">
                <b>没有更新 ╮(๑•́ ₃•̀๑)╭</b>
            </font>
        </el-card>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  data() {
      return {
          blog: {
              id: 1,
              title: '2018.5.19 更新',
              createTime: '2018-05-19 01:10:06',
              updateTime: '2018-05-19 01:10:06',
              description: `1 增加使用帮助\n2 改进readme不存在时的情况`,
              content: `<p><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3979458867,1275607581&fm=26&gp=0.jpg"></p>`
          }
      }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
.markdown-body img {
    max-width: 100%;
    box-sizing: content-box;
    background-color: #fff;
}
</style>