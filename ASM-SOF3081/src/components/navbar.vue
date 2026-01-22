<template>
    <nav class="navbar navbar-expand-lg bg-white border-bottom shadow-sm">
        <div class="container-fluid px-4">
            <!-- LOGO -->
            <router-link to="/home" class="navbar-brand d-flex align-items-center">

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

                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <i class="fa-solid fa-circle-info me-1"></i> Giới thiệu
                        </a>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                            <i class="fa-solid fa-user me-1"></i> Tài khoản
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a class="dropdown-item" href="#" @click.stop.prevent="openAuthModal">
                                    Đăng nhập / Đăng ký
                                </a>

                                <AuthModal :show="showAuthModal" @close="showAuthModal = false" />

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
import AuthModal from './AuthModal.vue'

const showAuthModal = ref(false)

const openAuthModal = () => {
    showAuthModal.value = true
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
