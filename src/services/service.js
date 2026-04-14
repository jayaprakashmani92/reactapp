import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set, get, remove, update  } from "firebase/database";   
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
// service.js
async  updateUser(id, userData) { 
  const response = set(ref(db, "users/" + id), {
         uid: id,
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        username: userData.username
  });
  return response;
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
      console.error("Error fetching users:", error);
      return [];
    }
  },

  async deleteUser(userId) {
    try {
      await remove(ref(db, "users/" + userId));
      return { success: true };
    } catch (error) {
      console.error("Error deleting user:", error);
      return { success: false, message: error.message };
    }
  }
};

// ✅ Export as default
export default authService;
