<!-- src/pages/BaiViet.vue -->
<template>
  <div>
    <div class="container mt-4">
      <h3 class="mb-3">Danh sách bài viết</h3>

      <button class=" btn btn-primary mb-3">Đăng bài viết</button>

      <table class="table table-bordered">
        <thead class="table-light">
          <tr>
            <th>#</th>
            <th>Tiêu đề</th>
            <th>Ngày đăng</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 5" :key="i">
            <td>{{ i }}</td>
            <td>Bài viết {{ i }}</td>
            <td>01/01/2026</td>
            <td>
              <button class="btn btn-sm btn-primary">Xem</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
</script>
