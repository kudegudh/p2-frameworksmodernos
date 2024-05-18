<template>
  <googleAuth></googleAuth>
  <v-row align="center">
    <div>
      <v-text-field
        v-model="user.name"
        :rules="rules"
        hide-details="auto"
        label="Nome"
      ></v-text-field>
      <v-textarea
        v-model="user.text"
        :rules="rules"
        hide-details="auto"
        label="Texto"
      ></v-textarea>

      <v-btn
        @click="userCreate()"
      >Create</v-btn>
    </div>

    <v-col v-for="user in users" :key="user.id"
    :cols="breakcols[1]">
      <v-card>
        <v-card-title>
          {{ user.name }}          
        </v-card-title>

        <v-card-text>
          <v-textarea :model-value="user.text">
          </v-textarea>
        </v-card-text>

        <v-card-actions>
          <v-btn @click="userDelete(user.id)">
            Delete
          </v-btn>
          <v-btn>
            Update
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
  console.log(window.localStorage.getItem(key));

  import { useUserStore } from '@/stores/user'
  import { ref, onMounted, computed } from 'vue';
  import { useDisplay } from 'vuetify';
  import { collection, addDoc, onSnapshot, deleteDoc, doc, updateDoc 
  } from 'firebase/firestore';
  import database from '@/plugins/firebase';

  const usersCollection = collection(database, 'users');

  const users = ref([]);
  const shortBio = ref({});

  const user = ref({})

  const { lg, md, sm } = useDisplay();

  onMounted(() => {
    onSnapshot(usersCollection, (snapshot) => {
      users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      shortBio.value = users.value[0];
    }); 
  });

  const userCreate = async () => {
    await addDoc(usersCollection, {...user.value })
    user.value = {}
  }

  const userDelete = async (id) => {
    await deleteDoc(doc(usersCollection, id))
  }

  const breakcols = computed(() => {
    return lg.value ? [6]
            : md.value ? [4]
            : sm.value ? [6]
            : [12];
  });

  const rules = [
    value => !!value || 'Required.',
    value => (value && value.length >= 3) || 'Min 3 characters',
  ]
</script>