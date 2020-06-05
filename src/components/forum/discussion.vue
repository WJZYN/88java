<template>
  <div>
    <div class="bg">
      <el-table
        :data="tableData"
        :row-style="{height:'50px'}"
        highlight-current-row
        style="width: 100%"
      >
        <el-table-column prop="Discussion" label="Discussion" width="800"></el-table-column>
        <el-table-column prop="User" label="Started by" width="300"></el-table-column>
        <el-table-column prop="Replies" label="Replies" width="200" align="center"></el-table-column>
        <el-table-column prop="Date" label="Last Post" width="300"></el-table-column>
      </el-table>
    </div>

    <div class="button-container">
      <button class="button" id='add'> Add a new topic</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          Discussion: "A question about final exam",
          User: "Jianning Qu",
          Replies: "1",
          Date: "Wed, 3 Jun 2020"
        },
        {
          Discussion: "Question about the iteration amount of group project",
          User: "Yitong Zhou",
          Replies: "2",
          Date: "Fri, 29 May 2020"
        },
        {
          Discussion: "Question about file classification",
          User: "Shangdian Liu",
          Replies: "1",
          Date: "Thu, 28 May 2020"
        },
        {
          Discussion: "Command line compilation problem",
          User: "Shenhu Zhang",
          Replies: "1",
          Date: "Thu, 28 May 2020"
        },
        {
          Discussion: "A question about the Test Programs",
          User: "Ji Ma",
          Replies: "1",
          Date: "Wed, 27 May 2020"
        },
        {
          Discussion: "A question about the report",
          User: "Yulin Zhao",
          Replies: "1",
          Date: "Wed, 27 May 2020"
        },
        {
          Discussion: "Question about report",
          User: "Zuoqiao Cui",
          Replies: "3",
          Date: "Wed, 27 May 2020"
        }
      ]
    };
  }
};
</script>

<style>
.el-table tr {
  text-align: left;
}
</style>

<style lang="scss" scoped>
.bg {
  width: 100%;
  height: 500;
  padding: 30px 20px;
}
.button-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .button {
    width: 150px;
    height: 40px;
    margin:0 auto;
  }
}
</style>