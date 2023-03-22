<template>
  <div id="edit-employee">
    <h3>Edit Employee</h3>
    <div class="row">
      <form @submit.prevent="updateEmployee" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="employee_id" required />
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="name" required />
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="dept" required />
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="position" required />
          </div>
        </div>
        <button type="submit" class="btn">Submit</button>
        <router-link to="/" class="btn grey">Cancel</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import db from "./firebaseInit";
import {
  collection,
  query,
  where,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

export default {
  name: "edit-employee",
  data() {
    return {
      employee_id: null,
      name: null,
      dept: null,
      position: null,
      docId: null,
    };
  },

  async created() {
    const q = query(
      collection(db, "employees"),
      where("employee_id", "==", this.$route.params.employee_id)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      this.docID = doc.id;
      this.employee_id = doc.data().employee_id;
      this.name = doc.data().name;
      this.dept = doc.data().dept;
      this.position = doc.data().position;
    });
  },

  methods: {
    async updateEmployee() {
      console.log("==S",this.docId)
      const frankDocRef = doc(db, "employees", this.docId);
      await updateDoc(frankDocRef, {
        employee_id: this.employee_id,
        name: this.name,
        dept: this.dept,
        position: this.position,
      });
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style>
</style>