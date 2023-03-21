<template>
  <div id="view-employee">
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>{{ this.name }}</h4>
      </li>
      <li class="collection-item">Employee ID#:{{ this.employee_id }}</li>
      <li class="collection-item">Department:{{ this.dept }}</li>
      <li class="collection-item">position:{{ this.position }}</li>
    </ul>
    <router-link to="/" class="btn grey">Back</router-link>
    <button @click="deleteEmployee" class="btn red">Delete</button>

    <div class="fixed-action-btn">
      <router-link
        v-bind:to="{ name: 'edit-employee', param: { employee_id } }"
        class="btn-floating btn-large red"
      >
        <i class="fa fa-pencil"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import db from "./firebaseInit";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";

export default {
  name: "view-employee",
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
      console.log("doc", doc);
      this.employee_id = doc.data().employee_id;
      this.name = doc.data().name;
      this.dept = doc.data().dept;
      this.position = doc.data().position;
    });
  },

  methods: {
    async deleteEmployee() {
      if (confirm("Are you sure")) {
        const q = query(
          collection(db, "employees"),
          where("employee_id", "==", this.$route.params.employee_id)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          this.docId = doc.id;
        });
        await deleteDoc(doc(db, "employees", this.docId));
        this.$router.push({ path: "/" });
      }
    },
  },
};
</script>

<style>
</style>