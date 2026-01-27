<template>
  <div class="container mt-4">
    <h3 class="mb-3 text-uppercase fw-bold">Danh sách bài viết của bạn</h3>

    <button class="btn btn-primary mb-3">
      <i class="bi bi-plus-circle"></i> Đăng bài viết
    </button>

    <div class="table-responsive">
      <table class="table table-hover table-bordered">
        <thead class="table-dark">
          <tr>
            <th style="width: 50px">STT</th>
            <th>Tiêu đề</th>
            <th>Ngày đăng</th>
            <th class="text-center"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in danhSachBaiViet" :key="item.id">
            <td>{{ index + 1 }}</td>
            <td class="fw-bold text-primary">{{ item.tieuDe }}</td>
            <td>{{ item.ngayDang }}</td>
            <td class="text-center">
              <button class="btn btn-sm btn-outline-primary me-2">Xem thống kê</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const danhSachBaiViet = ref([
  { id: 1, tieuDe: "Phương pháp tập Pilates phục hồi cột sống", ngayDang: "21/01/2026" },
  { id: 2, tieuDe: "9  tác dụng tuyệt vời của quả cam", ngayDang: "15/01/2026" },
  { id: 3, tieuDe: "Lợi ích khi ăn rau mỗi ngày", ngayDang: "04/01/2026" },
]);
</script>

<style scoped>
.table th {
  vertical-align: middle;
}
</style>