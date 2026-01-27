<template>
  <div class="container py-5">
    <div class="row g-5">

      <div class="col-lg-4 col-md-5">
        <div class="card border-0 shadow-sm p-4 text-center">
          <h3 class="mb-4 fw-bold">Thông tin cá nhân</h3>

          <div class="mb-4">
            <img src="/images/avatar.png" class="rounded-circle img-thumbnail shadow-sm" alt="Avatar"
              style="width: 180px; height: 180px; object-fit: cover;" />
          </div>

          <form class="text-start">
            <div class="mb-3">
              <label class="form-label">Họ tên</label>
              <input type="text" class="form-control" />
            </div>

            <div class="mb-3">
              <label class="form-label">Email</label>
              <input type="text" class="form-control" />
            </div>

            <div class="mb-4">
              <label class="form-label">Mật khẩu</label>
              <input type="text" class="form-control" />
            </div>

            <button class="btn btn-success w-100 py-2">
              <i class="bi bi-save me-2"></i> Cập nhật thông tin
            </button>
          </form>
        </div>
      </div>

      <div class="col-lg-8 col-md-7">
        <div class="card border-0 shadow-sm p-4 h-100">
          <h4 class="text-primary mb-4 fw-bold">
            <i class="bi bi-graph-up-arrow me-2"></i>Thống kê báo cáo
          </h4>

          <div class="list-group shadow-sm">
            <a href="#"
              class="list-group-item list-group-item-action d-flex justify-content-between align-items-center py-3">
              <span><i class="bi bi-journal-text me-2 text-secondary"></i>Số bài viết đã viết</span>
              <span class="badge bg-primary rounded-pill">3</span>
            </a>
            <a href="#"
              class="list-group-item list-group-item-action d-flex justify-content-between align-items-center py-3">
              <span><i class="bi bi-people me-2"></i>Số lượng người theo dõi</span>
              <span class="badge bg-primary rounded-pill">60</span>
            </a>
            <a href="#"
              class="list-group-item list-group-item-action d-flex justify-content-between align-items-center py-3">
              <span><i class="bi bi-star me-2 text-warning"></i>Đánh giá trung bình</span>
              <span class="badge bg-warning text-dark rounded-pill">4.2/5</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
</script>
