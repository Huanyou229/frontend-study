<template>
	<div @click="update">
		{{ message }}
	</div>
</template> <script setup>
	import { ref } from 'vue'
	const message = ref('hello world')
	const update = () => {
		message.value = '你好，世界' }
</script>