import router from "@/router";
import { defineStore } from "pinia";
import { getApp } from "firebase/app";
import { getAuth, 
  signInWithPopup, GoogleAuthProvider, signOut
} from "firebase/auth";

const auth = getAuth(getApp());

export const useUserStore = defineStore("user", {
  state: () => ({
    user: {}
  }),
  getters:{
    isLoggedIn: (state) => !!state.user.uid,
    getProfile: (state) => {
      return {
        email: state.user.email,
        displayName: state.user.displayName,
        photoURL: state.user.photoURL
      };
    }
  },
  actions: {
    async authWithGoogle(){
      try {
        const provider = new GoogleAuthProvider();
        const userCredential = await signInWithPopup(auth, provider);
        
        this.user = userCredential.user;

        router.push("/cards");
      } catch (error) {
        console.log(error);
      }
    },
    async logout() {
      try {
        await signOut(auth);
        
        this.user = {};
        router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  },
});
