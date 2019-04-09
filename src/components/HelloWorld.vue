<template>
  <div class="hello">
    <ls-common-table
      :columns="columns"
      :data="list"
      :loading="loading"
      :page="page"
      :queryData="queryData"></ls-common-table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      columns: [
        {
          type: 'index',
        },
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '科目',
          key: 'class'
        },
        {
          title: '成绩',
          key: 'score'
        }
      ],
      list: [],
      loading: false,
      page: {
        pageSize: 10,
        total: 0,
        current: 1
      },
      initList: []
    }
  },
  beforeMount () {
    for (let i = 0; i < 50; i++) {
      this.initList.push({
        name: '小明',
        class: '数学',
        score: parseInt(Math.random() * 100)
      })
    }
    this.page.total = this.initList.length
  },
  mounted () {
    this.queryData(1)
  },
  methods: {
    queryData (d) {
      this.loading = true
      setTimeout(() => {
        this.list = this.initList.slice(0).splice(this.page.pageSize * (d - 1), this.page.pageSize)
        this.loading = false
      }, 500)
    }
  }
}
</script>

<style scoped>
.hello {
  height: 600px;
}
</style>
