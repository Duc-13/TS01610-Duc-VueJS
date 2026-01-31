<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-sm-4">
                <h3>Thêm học sinh</h3>
                <form @submit.prevent="submitForm">
                    <div class="mb-3 mt-3">
                        <label for="name" class="form-label">Họ tên:</label>
                        <input type="text" class="form-control" v-model="student.name" id="name" required />
                    </div>

                    <div class="mb-3">
                        <label for="score" class="form-label">Điểm:</label>
                        <input type="number" max="10" min="0" class="form-control" v-model="student.score" id="score" required />
                    </div>

                    <div class="mb-3">
                        <label for="dob" class="form-label">Ngày sinh:</label>
                        <input type="date" class="form-control" v-model="student.dob" id="dob" required />
                    </div>

                    <button type="submit" class="btn btn-success">
                        {{ isEditing ? 'Cập nhật' : 'Thêm' }}
                    </button>
                </form>
            </div>

            <div class="col-sm-8">
                <h3>Danh sách học sinh</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Họ và tên</th>
                            <th>Điểm</th>
                            <th>Ngày sinh</th>
                            <th colspan="2"></th> </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(stu, index) in students" :key="index" class="align-middle">
                            <td>{{ stu.name }}</td>
                            <td>{{ stu.score }}</td>
                            <td>{{ stu.dob }}</td>
                            <td class="text-end">
                                <button class="btn btn-warning btn-sm me-2" @click="editstudent(index)">Sửa</button>
                                <button class="btn btn-danger btn-sm" @click="deletestudent(index)">Xóa</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'

// Dữ liệu mẫu ban đầu
const students = ref([
    { name: 'Nguyễn Chí Hùng', score: 8, dob: '2006-01-01' },
    { name: 'Pham Thị Lan', score: 9, dob: '2006-05-15' }

])

// Biến quản lý trạng thái form
const student = ref({
    name: '',
    score: null,
    dob: ''
})
let isEditing = ref(false)
let editingIndex = ref(null)
function submitForm() {
    if (isEditing.value) {
        // Cập nhật thông tin học sinh
        // { ... student.value } sẽ tạo một bản sao mới của đối tượng student. value
        students.value[editingIndex.value] = { ...student.value }
        isEditing.value = false
        editingIndex.value = null
    } else {
        // Thêm học sinh mới
        students.value.push({ ...student.value })
    }
    resetForm()
}
function editstudent(index) {
    student.value = { ...students.value[index] }
    isEditing.value = true
    editingIndex.value = index
}
function deletestudent(index) {
    students.value.splice(index, 1)
}
function resetForm() {
    student.value = {
        name: '',
        score: null,
        dob: ''
    }
}
</script>