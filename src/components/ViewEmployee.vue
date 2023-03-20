<template>
  <div id="view-employee">
    <h3>view-employee</h3>
  </div>
</template>

<script>
import app from "./firebaseInit";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

export default {
  name: "view-employee",
  data() {
    return {
      employee_id: null,
      name: null,
      dept: null,
      position: null,
    };
  },
  async created() {
    const db = getFirestore(app);
    const citiesCol = collection(db, "employees");
  },
};
</script>

<style>
</style>