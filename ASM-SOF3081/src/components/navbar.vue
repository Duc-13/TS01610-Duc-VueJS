<template>
    <nav class="navbar navbar-expand-lg bg-white border-bottom shadow-sm">
        <div class="container-fluid px-4">
            <!-- LOGO -->
            <router-link class="nav-link navbar-brand d-flex align-items-center" to="/home">
                <img src="/images/logo-energy-pilates.png" alt="Energy Pilates" height="40" class="me-2" />
            </router-link>

            <!-- TOGGLER -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- MENU -->
            <div class="collapse navbar-collapse" id="mainNavbar">
                <!-- LEFT MENU -->
                <ul class="navbar-nav ms-4">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/posts">
                            <i class="fa-solid fa-list me-1"></i> Bài viết
                        </router-link>

                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                            <i class="fa-solid fa-user me-1"></i> Tài khoản
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a class="dropdown-item" href="#" @click.stop.prevent="openDangNhap">
                                    Đăng nhập
                                </a>
                                <DangNhap :show="showDangNhap" @close="showDangNhap = false" />
                            </li>
                            <li>
                                <a class="dropdown-item" href="#" @click.stop.prevent="openDangKy">
                                    Đăng ký
                                </a>
                                <DangKy :show="showDangKy" @close="showDangKy = false" />
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Đổi mật khẩu</a>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/profile">
                                    Thông tin cá nhân
                                </router-link>
                            </li>

                        </ul>
                    </li>
                </ul>

                <!-- RIGHT MENU -->
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                            <i class="fa-solid fa-globe me-1"></i> Ngôn ngữ
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><a class="dropdown-item" href="#">Tiếng Việt</a></li>
                            <li><a class="dropdown-item" href="#">English</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue'
import DangKy from './DangKy.vue'
import DangNhap from './DangNhap.vue'

const showDangNhap = ref(false)
const openDangNhap = () => {
    showDangNhap.value = true
}

const showDangKy = ref(false)
const openDangKy = () => {
    showDangKy.value = true
}
</script>



<style scoped>
.nav-link {
    font-weight: 500;
}

.navbar-brand img {
    object-fit: contain;
}
</style>
