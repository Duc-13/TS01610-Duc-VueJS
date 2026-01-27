<template>
    <nav class="navbar navbar-expand-lg bg-white border-bottom shadow-sm">
        <div class="collapse navbar-collapse" id="mainNavbar">
            <!-- LEFT MENU -->
            <ul class="navbar-nav ms-4 text--bs-primary">
                <li class="nav-item">
                    <a class="nav-link" href="#">Trang chủ</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Thời sự</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Thế giới</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Kinh doanh</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Khoa học công nghệ</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Góc nhìn</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Spotlight</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Bất động sản</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sức khỏe</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Giải trí</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Thể thao</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Pháp luật</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Giáo dục</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Đời sống</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Xe</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Du lịch</a>
                </li>
            </ul>
        </div>
    </nav>
    <div class="container my-4">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <div class="col" v-for="(post, index) in posts" :key="index">
                <div class="card h-100 shadow-sm border-0">
                    <img :src="post.image" class="card-img-top object-fit-cover" :alt="post.title" style="height: 180px;">

                    <div class="card-body">
                        <h5 class="card-title fw-bold">{{ post.title }}</h5>
                        <p class="card-text text-muted small">{{ post.description }}</p>
                    </div>

                    <div class="card-footer bg-transparent border-0 pb-3">
                        <router-link 
                            :to="{ name: 'detail', params: { id: post.id } }" 
                            class="btn btn-sm btn-outline-primary"
                        >
                            Đọc tiếp
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const posts = [
    {
        id:1,
        image: '/images/video1.jpg',
        title: 'Đi xa hơn để trưởng thành',
        description: 'Tuổi trẻ chỉ nghĩ đến những chuyến đi, đợi mong một ngày được khám phá những vùng đất mới để thấy mình lớn khôn.'
    },
    {
        id:2,
        image: '/images/tap-piltes.jpg',
        title: 'Pilates phục hồi cột sống',
        description: 'Ngoài việc giúp duy trì vóc dáng, cải thiện sự linh hoạt, bộ môn này còn giúp giảm đau mỏi vai gáy cực hiệu quả.'
    },
    {
        image: '/images/sesameoil_300x300.jpg',
        title: '10 công dụng từ dầu dừa',
        description: 'Dầu dừa như một loại kem dưỡng ẩm tự nhiên cho cơ thể, đồng thời hỗ trợ tốt cho việc chăm sóc tóc.'
    },
    {
        image: '/images/spinach_300x300.jpg',
        title: 'Lợi ích khi ăn rau mỗi ngày',
        description: 'Tiêu thụ rau xanh hàng ngày sẽ giúp tăng cường thị lực, cải thiện hệ tiêu hóa và làm đẹp da.'
    },
    {
        image: '/images/tim-mach.jpg',
        title: 'Tập Pilates có thể cải thiện sức khoe tim mạch của bạn',
        description: 'Tập Pilates không chỉ giúp bạn cổ một cơ thể khỏe mạnh và linh hoạt mà còn có nhiều lợi ích cho sức khỏe tim mạch'
    },
    {
        image: '/images/orange_300x300.jpg',
        title: '9 tác dụng tuyệt vời của quả cam',
        description: 'Cam là loại trái cây phổ biến nhất thế giới với lượng calo thấp và nguồn dinh dưỡng cao.'
    },
]
</script>

<style scoped>
/* Giúp ảnh không bị méo khi kích thước khác nhau */
.object-fit-cover {
    object-fit: cover;
}

/* Hiệu ứng khi rê chuột vào Card */
.card {
    transition: transform 0.2s ease-in-out;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1) !important;
}
</style>