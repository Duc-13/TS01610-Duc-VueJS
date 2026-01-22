<template>
  <div class="card h-100 shadow-sm">
    <img
      :src="image"
      class="card-img-top"
      :alt="title"
      style="height: 200px; object-fit: cover"
    />

    <div class="card-body">
      <h6 class="card-title fw-bold">
        {{ title }}
      </h6>

      <p class="card-text small text-muted">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>
