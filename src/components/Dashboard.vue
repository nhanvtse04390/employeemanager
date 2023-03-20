<template>
  <div id="dashboard">
    <h3>dashboard</h3>
    <div class="fixed-action-btn">
      <router-link to="/new" class="btn-floating btn-large red">
        <i class="fa fa-plus"></i>
      </router-link>
    </div>
  </div>
</template>
<script>
import app from "./firebaseInit";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
export default {
  name: "dashboard",
  data() {
    return {
      employee: [],
    };
  },
  async created() {
    const db = getFirestore(app);
    console.log(db);
    const citiesCol = collection(db, "employees");
    console.log("==1", citiesCol);
    const citySnapshot = await getDocs(citiesCol);
    console.log("==2", citySnapshot);
    citySnapshot.forEach((doc) => {
      const data = {
        id: doc.id,
        employee_id: doc.data().employee_id,
      };
      console.log(data);
    });
  },
};
</script>

<style>
</style>