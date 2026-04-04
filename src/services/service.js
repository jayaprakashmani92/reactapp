import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { auth, db } from "../firebase";

// ✅ Business logic (Firebase)
const authService = {
  async registerUser(formData) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const user = userCredential.user;

      await set(ref(db, "users/" + user.uid), {
        uid: user.uid,
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        username: formData.username
      });

      return { success: true };
    } catch (error) {
      return { success: false, message: error.message };
    }
  },

  async getAllUsers() {
    try {
      const snapshot = await get(ref(db, "users"));

      if (snapshot.exists()) {
        const data = snapshot.val();

        return Object.keys(data).map((key) => ({
          id: key,
          ...data[key]
        }));
      }

      return [];
    } catch (error) {
      return [];
    }
  }
};

export default authService;