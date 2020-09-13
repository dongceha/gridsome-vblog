<template>
    <div>
        <el-card shadow="never">
            <el-menu :default-active="active" @select="onSelect">
                <el-menu-item
                    v-for="item in constantRouterMap"
                    :key="item.path"
                    :index="item.path">
                    <i :class="item.icon"></i>
                    <span slot="title">{{item.title}}</span>
                </el-menu-item>
            </el-menu>
        </el-card>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        data() {
            return {
                constantRouterMap: [
                    {
                        path: '1',
                        icon: 'el-icon-star-off',
                        title: '最新动态'
                    },
                    {
                        path: '2',
                        icon: 'el-icon-mobile-phone',
                        title: '社交圈'
                    },
                    {
                        path: '3',
                        icon: 'el-icon-edit-outline',
                        title: '博客列表'
                    },
                    {
                        path: '4',
                        icon: 'el-icon-service',
                        title: '开源项目'
                    },
                ],
                active: "",
                parentUrl: "",
                menuList: []
            }
        },
        computed: {
            ...mapGetters([
                'token',
                'githubUsername',
                'mini'
            ])
        },
        mounted() {
            let arr = this.$route.path.split("/")
            this.active = "/" + arr[1] + "/" + arr[2]
        },
        methods: {
            onSelect(index) {
                this.$router.push(index)
            },
            // openTokenDialog() {
            //     this.$refs.tokenDialog.open(() => {
           
            //     })
            // },
            cancellation() {
                this.$store.dispatch("Cancellation")
            }
        }
    }
</script>