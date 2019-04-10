<template>
  <div class="common-table">
    <Table
      :columns="columns"
      :data="data"
      :loading="loading"
      @on-selection-change="handleSelectChange"></Table>

    <Page
      v-show="data.length > 0 && page.current > 0"
      :total="page.total"
      :page-size="page.pageSize"
      show-total
      show-sizer
      :current.sync="page.current"
      @on-change="changePage"
      @on-page-size-change="changePageSize"></Page>
  </div>
</template>

<script>
export default {
  name: 'ls-common-table',
  props: {
    columns: {
      type: Array,
      default () {
        return []
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    queryData: {
      type: Function,
      default () {}
    },
    data: {
      type: Array,
      default () {
        return []
      }
    },
    page: {
      type: Object,
      default () {
        return {
          pageSize: 10,
          total: 0,
          current: 1
        }
      }
    }
  },
  data () {
    return {}
  },
  methods: {
    changePage (num) {
      this.queryData(num)
    },
    changePageSize (size) {
      this.page.pageSize = size
      this.page.current = 1
      this.queryData(this.page.current)
    },
    handleSelectChange (selection) {
      this.$emit('on-selectChange', selection)
    }
  }
}
</script>

<style>
  .common-table .ivu-table td,
  .common-table .ivu-table th {
    border: none !important;
  }

  .common-table .ivu-table::before,
  .common-table .ivu-table::after {
    background-color: transparent;
  }

  .common-table .ivu-table-body {
    height: calc(100% - 50px);
    overflow-y: auto;
    overflow-x: hidden;
  }
</style>
<style scoped>
  .common-table {
    position: relative;
    height: 100%;
  }
  .common-table .ivu-table-wrapper {
    height: 100%;
    border: none !important;
  }
  .common-table .ivu-page {
    margin-top: 10px;
  }
</style>
