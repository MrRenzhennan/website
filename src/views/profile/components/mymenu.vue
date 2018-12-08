<template>
<div class="tags">
        <div class="tags-all">
          <div class="tags-item">
            <div class="setting active">Blog 12</div>
            <div class="setting">Comments 31</div>
            <div class="setting">Replies</div>
            <div class="setting">BookMarks</div>
          </div>
          <div class="tags-item">
            <div class="setting">Wallet</div>
            <div class="setting">Setting</div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  data() {
    return {
      search: ""
    };
  },
  methods: {
  }
};
</script>
<style scoped>
.tags {
  background-color: #ffffff;
  padding: 20px;
  padding-left: 50px;
  padding-right: 50px;
  border-bottom: 1px solid #eeeeee;
}
.tags-all {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tags-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.setting {
  margin-right: 20px;
}
.active {
  color: #409EFF;
}
.tags-line {
  background-color: #eeeeee;
  height: 1px;
}
</style>
