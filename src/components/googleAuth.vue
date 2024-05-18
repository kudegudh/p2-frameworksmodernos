<template>
  <v-card>
    <v-card-title>
      {{ userStore.user.displayName }} {{ userStore.user.email }}
    </v-card-title>
    <v-card-actions>
      <v-btn v-if="!!userStore.isLoggedIn" @click="userStore.logout">Logout</v-btn>
      <v-btn v-else @click="userStore.authWithGoogle">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { useUserStore } from '@/stores/user'

const userStore = useUserStore();
</script>