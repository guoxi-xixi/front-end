<template>
  <div>
    <!-- 添加用户按钮 -->
    <el-button type="primary" @click="dialogVisible = true"
      >添加新用户</el-button
    >
    <!-- 用户表格 -->
    <el-table :data="userList" border stripe>
      <!-- 索引列 -->
      <el-table-column type="index" label="#"></el-table-column>
      <!-- 渲染用户信息 -->
      <el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="年龄" prop="age"></el-table-column>
      <el-table-column label="头衔" prop="position"></el-table-column>
      <el-table-column label="创建时间">
        <template #default="scope">
          {{ scope.row.addtime | dateFormat }}
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <!-- v-slot:default="scope" -->
        <!-- #default="scope" -->
        <!-- v-if="scope" -->
        <template v-slot="{ row }">
          <div>
            <router-link :to="/users/ + row.id">详情</router-link>&nbsp;
            <a href="#" @click.prevent="onRemove(row.id)">删除</a>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <!-- 添加用户对话框 -->
    <el-dialog
      title="添加新用户"
      :visible.sync="dialogVisible"
      width="50%"
      @close="onDialogClosed"
    >
      <el-form
        :model="form"
        label-width="80px"
        :rules="formRules"
        ref="myAddForm"
      >
        <el-form-item label="用户姓名" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="用户年龄" prop="age">
          <el-input v-model.number="form.age"></el-input>
        </el-form-item>
        <el-form-item label="用户头衔" prop="position">
          <el-input v-model="form.position"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="onAddNewUser">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "UserList",
  data() {
    // 声明校验年龄的函数
    let checkAge = (rule, value, callback) => {
      if (!Number.isInteger(value)) {
        return callback(new Error("请填写整数！"));
      }
      if (value > 100 || value < 1) {
        return callback(new Error("年龄必须在 1 到 100 之间"));
      }
      // 都满足条件直接返回
      callback();
    };
    return {
      // 用户列表数据
      userList: [],
      // 控制添加对话框的显示与隐藏
      dialogVisible: false,
      // 要采集的用户信息对象
      form: {
        name: "",
        age: "",
        position: "",
      },
      // 表单的验证规则对象
      formRules: {
        name: [
          { required: true, message: "请输入用户姓名！", trigger: "blur" },
          {
            min: 2,
            max: 15,
            message: "长度在 2 到 15 个字符",
            trigger: "blur",
          },
        ],
        age: [
          { required: true, message: "请输入用户年龄！", trigger: "blur" },
          { validator: checkAge, trigger: "blur" },
        ],
        position: [
          { required: true, message: "请输入用户头衔！", trigger: "blur" },
          {
            min: 1,
            max: 10,
            message: "长度在 1 到 10 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    // 获取用户列表的数据
    async getUserList() {
      // 请求用户的列表数据
      const { data: res } = await this.$http.get("/api/users");
      console.log(res);
      if (res.status !== 0) return console.log("用户列表数据请求失败");
      this.userList = res.data;
    },
    // 监听对话框关闭的事件
    onDialogClosed() {
      // 拿到Form组件的引用，调用 resetFields 函数，重置表单
      this.$refs.myAddForm.resetFields();
    },
    // 添加用户事件
    onAddNewUser() {
      // validate 是 element-ui Form Methods方法，对表单进行验证
      this.$refs.myAddForm.validate(async (valid) => {
        console.log(valid);
        if (!valid) return; // valid是 boolean，是否通过验证
        // 需要执行添加的业务处理
        const { data: res } = await this.$http.post("/api/users", this.form);
        console.log(res);
        if (res.status !== 0) return this.$message.Error("添加用户失败！");
        // element-ui 提供的 toast 提示
        this.$message.success("添加成功！");
        // 添加成功关闭 dialog
        this.dialogVisible = false;
        // 添加成功调用获取信息列表同步数据
        this.getUserList();
      });
    },
    async onRemove(id) {
      const confirmResult = await this.$confirm(
        "此操作将永久删除该用户, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      ).catch((err) => err);
      console.log(confirmResult);
      // 判断是否惦记了确认按钮
      if (confirmResult !== "confirm") return this.$message.info("取消删除！");
      // 发起请求，删除指定id的数据
      const { data: res } = await this.$http.delete("/api/users/" + id);
      if (res.status !== 0) return this.$message.error("删除失败！");
      // 提示删除成功，并刷新列表
      this.$message.success("删除成功！");
      this.getUserList();
    },
  },
  created() {
    this.getUserList();
  },
};
</script>

<style lang="less" scoped>
</style>