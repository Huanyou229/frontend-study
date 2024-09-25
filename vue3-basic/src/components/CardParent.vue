<template>
    <div>
        <Card>
            <template #header>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur maxime cupiditate id quo
                    necessitatibus, reiciendis quisquam officia vel illo quas voluptatum odio laborum mollitia, maiores
                    aliquam atque provident ducimus distinctio.
                </p>
            </template>

            <p>这是中间的主体这是中间的主体这是中间的主体这是中间的主体</p>

            <template #footer>
                <p>
                    这是文件的底部这是文件的底部这是文件的底部这是文件的底部这是文件的底部这是文件的底部这是文件的底部
                </p>
            </template>
        </Card>
    </div>
</template>

<script setup lang="ts">
import Card from './Card.vue';
</script>

<style scoped></style>