<template>
  <div class="laboratory-container">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-input
          v-model="query.labName"
          placeholder="请输入实验室名称"
          prefix-icon="el-icon-search"
          size="small"
        ></el-input>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" size="small" icon="el-icon-search">搜索</el-button>
      </el-col>
      <el-col :span="6" :offset="10">
        <el-button size="small" icon="el-icon-plus" @click="openAddDialog">添加</el-button>
      </el-col>
    </el-row>

    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="labNum" label="实验室编号"></el-table-column>
      <el-table-column prop="labName" label="实验室名称"></el-table-column>
      <el-table-column prop="techName" label="创建人"></el-table-column>
      <el-table-column label="操作">
        <el-row>
          <el-button type="primary" size="small" icon="el-icon-edit" @click="openEditDialog">编辑</el-button>
          <el-button type="danger" size="small" icon="el-icon-delete" @click="del">删除</el-button>
        </el-row>
      </el-table-column>
    </el-table>
    <!-- 对话框-添加 -->
    <el-dialog title="实验室管理-添加" :visible.sync="addDialogFormVisible">
      <el-form :model="form">
        <el-form-item label="实验室编号" :label-width="formLabelWidth">
          <el-input v-model="form.labNum" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="实验室名称" :label-width="formLabelWidth">
          <el-input v-model="form.labName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="创建人" :label-width="formLabelWidth">
          <el-input v-model="form.techName" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addDialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addDialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 对话框-编辑 -->
    <el-dialog title="实验室管理-编辑" :visible.sync="editDialogFormVisible">
      <el-form :model="form">
        <el-form-item label="实验室编号" :label-width="formLabelWidth">
          <el-input v-model="form.labNum" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="实验室名称" :label-width="formLabelWidth">
          <el-input v-model="form.labName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="创建人" :label-width="formLabelWidth">
          <el-input v-model="form.techName" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editDialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="editDialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="query.pageNo"
      :page-sizes="[5, 10, 20, 30]"
      :page-size="query.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="rows"
    ></el-pagination>
  </div>
</template>

<script>
import { labList } from "@/api/article";
export default {
  data() {
    return {
      tableData: [
        {
          labNum: "2016-05-02",
          labName: "王小虎",
          techName: "上海市普陀区金沙江路 1518 弄"
        },
        {
          labNum: "2016-05-04",
          labName: "王小虎",
          techName: "上海市普陀区金沙江路 1517 弄"
        },
        {
          labNum: "2016-05-01",
          labName: "王小虎",
          techName: "上海市普陀区金沙江路 1519 弄"
        },
        {
          labNum: "2016-05-03",
          labName: "王小虎",
          techName: "上海市普陀区金沙江路 1516 弄"
        }
      ], //用于接收后台传过来的数据
      rows: 1, //总条数
      pages: 1, //总页数
      query: {
        pageNo: 1, //当前页码数
        pageSize: 10, //一页显示的条数
        labName: "" //查询的字段
      },
      addDialogFormVisible: false,
      editDialogFormVisible: false,
      form: {
        labNum: "",
        labName: "",
        techName: ""
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    del() {
      this.$confirm("此操作将永久删除该条信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    openAddDialog() {
      this.addDialogFormVisible = true;
    },
    openEditDialog() {
      this.editDialogFormVisible = true;
    }
    // 请求后端接口
    // getList() {
    //   labList(this.query)
    //     .then(res => {
    //       console.log(res);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }
  }
  // mounted() {
  //   this.getList();
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
