<template>
    <div v-if="show" class="modal-backdrop-custom" @click.self="close">

        <div class="modal-dialog-custom" @click.stop>
            <div class="modal-content p-4">
                <!-- HEADER -->
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h5 class="fw-bold mb-0">ĐĂNG KÝ</h5>
                    <button class="btn-close" @click="close"></button>
                </div>

                <!-- TAB -->
                <ul class="nav nav-tabs mb-3">
                    <li class="nav-item">
                        <button class="nav-link" :class="{ active: tab === 'register' }" @click="tab = 'register'"
                            type="button">
                            Đăng ký
                        </button>
                    </li>
                </ul>

                <!-- REGISTER -->
                <div>
                    <h4 class="mb-3">Form Đăng Ký</h4>
                    <input class="form-control mb-2" placeholder="Họ và tên" />
                    <input class="form-control mb-2" placeholder="Email" />
                    <input class="form-control mb-2" placeholder="Số điện thoại" />
                    <input type="password" class="form-control mb-2" placeholder="Mật khẩu" />
                    <input type="password" class="form-control mb-3" placeholder="Xác nhận mật khẩu" />
                    <button class="btn btn-success w-100">Đăng ký</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue'

defineProps({
    show: Boolean
})

const emit = defineEmits(['close'])
const tab = ref('register')

const close = () => emit('close')
</script>


<style scoped>
.modal-backdrop-custom {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    /* nền tối hơn */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1050;
}

.modal-dialog-custom {
    width: 480px;
    max-height: 90vh;
    overflow-y: auto;
}

.modal-content {
    border-radius: 14px;
    background: #ffffff;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
}
</style>
