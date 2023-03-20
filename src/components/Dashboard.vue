<template>
  <div id="dashboard">
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>Employees</h4>
      </li>
      <li
        v-for="employee in employees"
        v-bind:key="employee.id"
        class="collection-item"
      >
        <div class="chip">{{ employee.dept }}</div>
        {{ employee.name }}

        <router-link
          class="secondary-content"
          v-bind:to="{
            name: 'view-employee',
            params: { employee_id: employee.employee_id },
          }"
        >
          <i class="fa fa-eye"></i>
        </router-link>
      </li>
    </ul>
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
      employees: [],
    };
  },
  async created() {
    const db = getFirestore(app);
    const citiesCol = collection(db, "employees");
    const citySnapshot = await getDocs(citiesCol);
    citySnapshot.forEach((doc) => {
      this.employees.push({
        id: doc.id,
        employee_id: doc.data().employee_id,
        name: doc.data().name,
        dept: doc.data().dept,
        position: doc.data().position,
      });
    });
  },
};
</script>

<style>
</style>