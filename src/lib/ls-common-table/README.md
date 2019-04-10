# ls-common-table
基于 Vue 和 iView 的表格与分页组合.

**注意：**因为使用的iView的组件，所以项目中的入口文件main.js中要引入iView。像下面这样：

    import iView from 'iview'
    import 'iview/dist/styles/iview.css'
    Vue.use(iView)

#### 插件安装

    npm i ls-common-table

#### 插件引用

    import Vue from 'vue'
    import lsCommonTable from 'ls-common-table'
    
    Vue.use(lsCommonTable)

#### 基本用法

    <ls-common-table
      :columns="columns"
      :data="list"
      :loading="loading"
      :page="page"
      :queryData="queryData"></ls-common-table>

#### API

[查看 iView table](https://www.iviewui.com/components/table) / [查看 iView page](https://www.iviewui.com/components/table)

参数 | 说明 | 类型 | 默认值
---  |---   | ---  | ---
columns | 表格列的配置描述 | Array | []
data | 显示的结构化数据 | Array | []
loading | 表格是否加载中 | Boolean | false
page | 分页对象,包含当前页码、数据总数、每页条数 | Object | {pageSize: 10,total: 0,current: 1}

#### Event

事件名 | 说明 | 参数
---    | ---  | ---
queryData | 页码改变和切换每页条数时的回调 | --

#### Build Setup

    # install dependencies
    npm install
    
    # serve with hot reload at localhost:8080
    npm run dev
    
    # build for production with minification
    npm run build