<template>
  <v-container>
    <googleAuth></googleAuth>

    <div v-if="authStore.user">
      <div>{{ authStore.user }}</div>
    </div>
    <div v-else>
      nao foi
    </div>
  </v-container>
</template>

<script setup>
import { onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();

onMounted(async () => {
  await authStore.getUser();
});
</script>