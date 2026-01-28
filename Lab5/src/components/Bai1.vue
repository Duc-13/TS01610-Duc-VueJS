<template>
    <div class="p-5">
        <p>{{ message }}</p>
        <button class="btn btn-dark" @click="updateMessage">Thay đổi thông điệp</button>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const message = ref('Thông điệp 1');
const updateMessage = () => {
    message.value = 'Thông điệp 2';
};
</script>