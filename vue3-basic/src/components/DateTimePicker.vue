<template>
    <input type="date" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
    <input type="time" :value="timeValue" @input="$emit('update:timeValue', $event.target.value)" />
</template>
<script setup lang="ts">
defineProps({
    modelValue: String,
    timeValue: String
})
</script>