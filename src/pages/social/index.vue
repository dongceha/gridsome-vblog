<template>
<Layout>
    <div>
        <el-card shadow="never" style="min-height: 400px;margin-bottom: 20px;padding: 0px 0px 20px 0px">
            <el-tabs v-model="activeTab" type="card" @tab-click="onSelect">
                <el-tab-pane :label="'粉丝 '+followersTotal" name="followers" style="padding: 5px">
                    <div v-loading="followers.loading">
                        <div v-if="followers.list.length">
                            <el-row style="min-height: 200px; ">
                                <el-col :span="8" v-for="(item,index) in followers.list" :key="'followers'+index" style="padding: 10px">
                                    <el-card shadow="hover" style="font-size: 13px;color: #606266;line-height: 20px">
                                        <i class="el-icon-star-off"></i>&emsp;
                                        <a @click="$router.push(`/social/${item.name}`)" style=" text-decoration:none;cursor:pointer">{{item.name}}</a>
                                        <br>
                                        <i class="el-icon-message"></i>&emsp;
                                        <a :href="item.htmlUrl" target="_blank" style=" text-decoration:none;cursor:pointer">TA的主页</a>
                                        <br>
                                        <img :src="item.avatarUrl" style="width: 100%;border-radius:5px;margin-top: 5px">
                                    </el-card>
                                </el-col>
                            </el-row>
                            <div style="text-align: center;margin-top: 10px">
                                <el-pagination @current-change="onSelect" background layout="prev, pager, next" :current-page.sync="followers.query.page"
                                    :page-size="followers.query.pageSize" :total="followers.query.pageNumber*followers.query.pageSize">
                                </el-pagination>
                            </div>
                        </div>
                        <div style="min-height: 300px;margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center" v-else>
                            <font style="font-size: 30px;color:#dddddd ">
                                <b>(￢_￢) 没有一个粉丝</b>
                            </font>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane :label="'关注 '+followingTotal" name="following" style="padding: 5px">
                    <div v-loading="following.loading">
                        <div v-if="following.list.length">
                            <el-row style="min-height: 200px; ">
                                <el-col :span="8" v-for="(item,index) in following.list" :key="'following'+index" style="padding: 10px">
                                    <el-card shadow="hover" style="font-size: 13px;color: #606266;line-height: 20px">
                                        <i class="el-icon-star-off"></i>&emsp;
                                        <a @click="$router.push(`/social/${item.name}`)" style=" text-decoration:none;cursor:pointer">{{item.name}}</a>
                                        <br>
                                        <i class="el-icon-message"></i>&emsp;
                                        <a :href="item.htmlUrl" target="_blank" style=" text-decoration:none;cursor:pointer">TA的主页</a>
                                        <br>
                                        <img :src="item.avatarUrl" style="width: 100%;border-radius:5px;margin-top: 5px">
                                    </el-card>
                                </el-col>
                            </el-row>
                            <div style="text-align: center;margin-top: 10px">
                                <el-pagination @current-change="onSelect" background layout="prev, pager, next" :current-page.sync="following.query.page"
                                    :page-size="following.query.pageSize" :total="following.query.pageNumber*following.query.pageSize">
                                </el-pagination>
                            </div>
                        </div>
                        <div style="min-height: 300px;margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center" v-else>
                            <font style="font-size: 30px;color:#dddddd ">
                                <b>(￢_￢) 还没有关注一个人</b>
                            </font>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
</Layout>
</template>
<script>
    export default {
        data() {
            return {
                followersTotal: 123,
                followingTotal: 456,
                activeTab: "followers",
                followers: {
                    query: {
                        page: 1,
                        pageSize: 9,
                        pageNumber: 1
                    },
                    loading: false,
                    list: []
                },
                following: {
                    query: {
                        page: 1,
                        pageSize: 9,
                        pageNumber: 1
                    },
                    loading: false,
                    list: []
                }
            }
        },
        mounted() {
            this.onSelect()
        },
        methods: {
            onSelect() {
                switch (this.activeTab) {
                    case "followers":
                        this.listFollowers()
                        break
                    case "following":
                        this.listFollowing()
                        break
                    default:
                        break
                }
                console.log('switch')
            },
            listFollowers() {
                this.followers.list = [  {
                    "name": "lililiwj",
                    "id": 38744589,
                    "node_id": "MDQ6VXNlcjM4NzQ0NTg5",
                    "avatarUrl": "https://avatars1.githubusercontent.com/u/38744589?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/lililiwj",
                    "htmlUrl": "https://github.com/lililiwj",
                    "followers_url": "https://api.github.com/users/lililiwj/followers",
                    "following_url": "https://api.github.com/users/lililiwj/following{/other_user}",
                    "gists_url": "https://api.github.com/users/lililiwj/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/lililiwj/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/lililiwj/subscriptions",
                    "organizations_url": "https://api.github.com/users/lililiwj/orgs",
                    "repos_url": "https://api.github.com/users/lililiwj/repos",
                    "events_url": "https://api.github.com/users/lililiwj/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/lililiwj/received_events",
                    "type": "User",
                    "site_admin": false
                },
                {
                    "name": "shuanghewuyanzu",
                    "id": 38081886,
                    "node_id": "MDQ6VXNlcjM4MDgxODg2",
                    "avatarUrl": "https://avatars1.githubusercontent.com/u/38081886?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/shuanghewuyanzu",
                    "htmlUrl": "https://github.com/shuanghewuyanzu",
                    "followers_url": "https://api.github.com/users/shuanghewuyanzu/followers",
                    "following_url": "https://api.github.com/users/shuanghewuyanzu/following{/other_user}",
                    "gists_url": "https://api.github.com/users/shuanghewuyanzu/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/shuanghewuyanzu/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/shuanghewuyanzu/subscriptions",
                    "organizations_url": "https://api.github.com/users/shuanghewuyanzu/orgs",
                    "repos_url": "https://api.github.com/users/shuanghewuyanzu/repos",
                    "events_url": "https://api.github.com/users/shuanghewuyanzu/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/shuanghewuyanzu/received_events",
                    "type": "User",
                    "site_admin": false
                }]
            },
            listFollowing() {
                this.following.list = [{
                    "name": "kazupon",
                    "id": 72989,
                    "node_id": "MDQ6VXNlcjcyOTg5",
                    "avatarUrl": "https://avatars1.githubusercontent.com/u/72989?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/kazupon",
                    "htmlUrl": "https://github.com/kazupon",
                    "followers_url": "https://api.github.com/users/kazupon/followers",
                    "following_url": "https://api.github.com/users/kazupon/following{/other_user}",
                    "gists_url": "https://api.github.com/users/kazupon/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/kazupon/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/kazupon/subscriptions",
                    "organizations_url": "https://api.github.com/users/kazupon/orgs",
                    "repos_url": "https://api.github.com/users/kazupon/repos",
                    "events_url": "https://api.github.com/users/kazupon/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/kazupon/received_events",
                    "type": "User",
                    "site_admin": false
                },
                {
                    "name": "Jinjiang",
                    "id": 206848,
                    "node_id": "MDQ6VXNlcjIwNjg0OA==",
                    "avatarUrl": "https://avatars1.githubusercontent.com/u/206848?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/Jinjiang",
                    "htmlUrl": "https://github.com/Jinjiang",
                    "followers_url": "https://api.github.com/users/Jinjiang/followers",
                    "following_url": "https://api.github.com/users/Jinjiang/following{/other_user}",
                    "gists_url": "https://api.github.com/users/Jinjiang/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/Jinjiang/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/Jinjiang/subscriptions",
                    "organizations_url": "https://api.github.com/users/Jinjiang/orgs",
                    "repos_url": "https://api.github.com/users/Jinjiang/repos",
                    "events_url": "https://api.github.com/users/Jinjiang/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/Jinjiang/received_events",
                    "type": "User",
                    "site_admin": false
                }]
            },
        }
    }
</script>