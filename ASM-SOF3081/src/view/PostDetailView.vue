<template>
  <div class="bg-light min-vh-100">
    <div class="container py-5">
      <div class="row g-4">
        <div class="col-md-8">
          <div class="bg-white p-4 rounded shadow-sm">
            <h3 class="text-primary fw-bold mb-4">
              Phương pháp tập Pilates giúp phục hồi chấn thương cột sống
            </h3>

            <img
              src="/images/tap-pilates1.jpg"
              class="img-fluid rounded mb-4 shadow-sm w-100"
              alt="Pilates"
            />

            <p class="text-muted lh-lg">
              Tập Pilates có thể vẫn còn khá xa lạ với người Việt, nhưng tại các nước phương Tây thì đây chính là phương pháp tập thể dục giúp duy trì vóc dáng, tăng cường ý chí và cải thiện sự linh hoạt. Đặc biệt, các bài tập Pilates còn có khả năng trị đau lưng, là giải pháp hữu hiệu để phục hồi chấn thương cột sống.
            </p>

            <h5 class="text-primary fw-bold mt-4">
              Pilates giúp phục hồi chấn thương cột sống nhanh chóng
            </h5>

            <p class="lh-lg">
              Một trong những căn bệnh ngày càng phổ biến, đặc biệt là dân văn phòng, đó là đau lưng, thoát vị đĩa đệm. Tuy nhiên, nếu điều trị không đúng cách có thể dẫn đến nhiều biến chứng nguy hiểm.
            </p>

            <img
              src="/images/tap-piltes.jpg"
              class="img-fluid rounded mb-4 shadow-sm w-100"
              alt="Pilates Exercises"
            />

            <h6 class="fw-bold text-dark">Phương pháp tập Pilates Cat Cow</h6>
            <p class="mb-2">Các bước thực hiện:</p>
            <ul class="ms-3 lh-lg text-secondary">
              <li>Bắt đầu với tư thế 4 điểm. Vai và cổ tay phải thẳng hàng và vuông góc với thảm.</li>
              <li>Hít vào, võng lưng, nâng cằm lên, mở rộng ngực.</li>
              <li>Thở ra, cong xương cụt, nâng cong lưng.</li>
              <li>Lặp lại động tác từ 5–7 lần.</li>
            </ul>

            <div class="alert alert-info mt-4">
              <h6 class="fw-bold mb-1">Lời kết</h6>
              <p class="mb-0 small">
                Trên đây là phương pháp tập Pilates giúp phục hồi chấn thương cột sống nhanh chóng. Bạn cần duy trì tập luyện đều đặn và kết hợp chế độ ăn uống khoa học.
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card shadow-sm border-0 p-3 mb-4 sticky-top" style="top: 20px;">
            <h6 class="fw-bold mb-3">Bình luận bài viết tại đây</h6>
            <textarea
              class="form-control mb-3 border-light-subtle"
              rows="3"
              placeholder="Nhập bình luận của bạn..."
            ></textarea>
            <button class="btn btn-success w-100 fw-bold">
              Gửi bình luận
            </button>

            <hr class="my-4" />

            <h6 class="fw-bold border-bottom pb-2 mb-3">
              Danh sách các bình luận:
            </h6>
            <ul class="list-unstyled">
              <li v-for="(comment, index) in comments" :key="index" class="mb-3 pb-2 border-bottom">
                <div class="d-flex align-items-center mb-1">
                  <div class="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-2" style="width: 30px; height: 30px; font-size: 12px;">
                    {{ comment.user.charAt(0) }}
                  </div>
                  <strong class="small text-dark">{{ comment.user }}</strong>
                </div>
                <p class="text-muted mb-0 ps-4 small">{{ comment.content }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'

// Dữ liệu mẫu cho bình luận để demo Vue binding
const comments = [

]
</script>

<style scoped>
/* Chỉnh sửa thêm để bài viết trông chuyên nghiệp hơn */
.lh-lg {
  line-height: 1.8;
}

img {
  transition: transform 0.3s ease;
}

img:hover {
  transform: scale(1.01);
}

.card {
  border-radius: 12px;
}
</style>