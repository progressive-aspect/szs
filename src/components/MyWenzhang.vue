<template>
  <div>
    <div class="title">
      <h3>文章标题</h3>
    </div>
    <template>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="文章标题" width="400">
        </el-table-column>
        <el-table-column prop="name" label="作者"> </el-table-column>
        <el-table-column prop="liulan" label="浏览量"> </el-table-column>
        <el-table-column prop="huifu" label="回复"> </el-table-column>
        <el-table-column fixed="right" label="操作" width="120">
          <template slot-scope="scope">
            <el-button
              @click="deleteRow(scope.$index, tableData)"
              size="mini"
              type="danger"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "MyWenzhang",
  data() {
    return {
      tableData: null,
    };
  },
  methods: {
    async fn() {
      let { data } = await axios.get("/api/wen");
      console.log(data);
      this.tableData = data;
    },
    handleDelete(index, row) {
      console.log(index, row);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then((index) => {
          this.deleteRow(index);
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    async deleteRow(index, rows) {
      rows.splice(index, 1);
    },
  },
  created() {
    this.fn();
  },
};
</script>
<style scoped>
.title {
}
</style>