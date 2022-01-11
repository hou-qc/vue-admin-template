<template>
  <div class="box">
    <el-button
      type="primary"
      icon="el-icon-plus"
      style="margin-bottom: 30px"
    >添加</el-button>
    <el-table style="width: 100%" border>
      <el-table-column align="center" prop="date" label="序号" width="100" />
      <el-table-column
        align="center"
        prop="name"
        label="品牌名称"
        width="400"
      />
      <el-table-column align="center" prop="address" label="品牌 LOGO" />
      <el-table-column width="300" align="center" prop="address" label="操作" />
    </el-table>
    <el-pagination
      style="text-align: center; margin: 30px"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="prev, pager, next, jumper,->,total, sizes"
      :total="400"
    />
  </div>
</template>

<script>
import { getBaseTrademark } from '@/api/product/tradeMark'
export default {
  name: 'TradeMark',

  data() {
    return {}
  },

  async mounted() {
    const data = await getBaseTrademark({ page: 1, limit: 3 })
    console.log(data)
  },

  methods: {}
}
</script>

<style lang="scss" scoped>
// .box {
//   position: relative;
//   .pagination {
//     margin: 30px auto;
//     display: flex;
//     justify-content: center;

//     // display: inline-block;
//     // position: absolute;
//     // left: 0;
//     // right: 0;
//     // bottom: 0;
//     // top: 0;
//   }
// }
</style>
