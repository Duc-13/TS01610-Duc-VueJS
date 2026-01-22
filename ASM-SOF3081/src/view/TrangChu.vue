<template>
  <div class="container mt-4">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div
        class="col"
        v-for="(post, index) in posts"
        :key="index"
      >
        <PostCard
          :image="post.image"
          :title="post.title"
          :description="post.description"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import PostCard from '@/components/PostCard.vue'

const posts = [
  {
    image: '/images/video1.jpg',
    title: 'Đi xa hơn để trưởng thành',
    description: 'Tuổi trẻ chỉ nghĩ đến những chuyến đi, đợi mong một ngày được ...'
  },
  {
    image: '/images/tap-piltes.jpg',
    title: 'Pilates phục hồi cột sống',
    description: 'Ngoài việc giúp duy trì vóc dáng, cải thiện sự linh hoạt ...'
  },
  {
    image: '/images/sesameoil_300x300.jpg',
    title: '10 công dụng từ dầu dừa',
    description: 'Dầu dừa như một loại kem dưỡng ẩm tự nhiên cho cơ thể ...'
  },
  {
    image: '/images/spinach_300x300.jpg',
    title: 'Lợi ích khi ăn rau mỗi ngày',
    description: 'Tiêu thụ rau xanh hàng ngày sẽ giúp tăng cường thị lực ...'
  }
]
</script>
