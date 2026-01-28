<template>
<div class="container">
<h3>Nhập điểm số của bạn: </h3>
<input type="number" v-model.number="score" />
<p v-if="score < 1 || score > 10" style="color: red">Vui lòng nhập điểm từ 1 đến 10 !</p>
<p v-else-if="score <= 3">Yếu</p>
<p v-else-if="score <= 6">Trung bình</p>
<p v-else-if="score <= 8">Khá</p>
<p v-else>Giỏi</p>
</div>
</template>

<script setup>
import { ref } from 'vue';

const score = ref('1');

</script>