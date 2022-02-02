<template>
  <div class="home">
    <SignUpForm :handleSubmit="handleSubmit" />
  </div>
</template>

<script>
// @ is an alias to /src
import SignUpForm from '../components/Form.vue'
import { getUsers, createUser } from '../services/userService'
export default {
  name: 'Home',
  components: { SignUpForm },
  data() {
    return {
      users: [],
    }
  },
  created: async function () {
    this.users = await getUsers()
  },
  methods: {
    handleSubmit: async function (user) {
      const newUser = await createUser(user)
      this.users = [...this.users, newUser]
      this.$router.push({ name: 'User', params: { id: newUser.id } })
    },
  },
}
</script>
