<template>
  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Gender</th>
        <th scope="col">Terms</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id" class="table-active">
        <th scope="row">
          <router-link :to="{ name: 'User', params: { id: user.id } }">{{
            user.fullName.toUpperCase()
          }}</router-link>
        </th>
        <td>{{ user.email }}</td>
        <td>{{ user.gender }}</td>
        <td>{{ user.terms ? 'Agreed' : 'Not Agreed' }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { getUsers } from '../../services/userService'
export default {
  name: 'Users',
  data() {
    return {
      users: [],
    }
  },
  created: async function () {
    this.users = await getUsers()
  },
}
</script>
