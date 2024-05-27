<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
<template>
    <nav class="bg-white shadow dark:bg-gray-800">
        <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
            
            <RouterLink  to="/" class="text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">home</RouterLink>
        </div>
    </nav>
</template>