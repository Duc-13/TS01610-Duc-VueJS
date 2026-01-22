<!-- src/pages/CaNhan.vue -->
<template>
  <div>
    <div class="container mt-4">
      <h3>Thông tin cá nhân</h3>

      <div class="d-flex mb-3">
              <img
                src="/images/avatar.png"
                width="300"
                height="300"
                class="rounded-circle"
                alt="..."
              />
            </div>

      <form class="col-md-4">
        <div class="mb-3">
          <label class="form-label">Họ tên</label>
          <input type="text" class="form-control" />
        </div>

        <div class="mb-3">
          <label class="form-label">Email</label>
          <input type="email" class="form-control" />
        </div>

        <div class="mb-3">
          <label class="form-label">Mật khẩu</label>
          <input type="email" class="form-control" />
        </div>

        <button class="btn btn-success">Cập nhật</button>
      </form>
    </div>
  </div>
</template>

<script setup>
</script>
