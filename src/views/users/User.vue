<template>
  <div class="container">
    <div class="row">
      <div class="col"></div>
      <div class="col">
        <div class="card text-white bg-primary mt-3">
          <div class="card-header">User Details</div>
          <div class="card-body">
            <div class="list-group">
              <a class="list-group-item list-group-item-action">
                Name:
                <strong class="text-info">{{ user.fullName }}</strong>
              </a>
              <a class="list-group-item list-group-item-action">
                Email: <strong class="text-info">{{ user.email }}</strong>
              </a>
              <a class="list-group-item list-group-item-action">
                Gender: <strong class="text-info">{{ user.gender }}</strong>
              </a>
              <a class="list-group-item list-group-item-action">
                Password: <strong class="text-info">{{ user.password }}</strong>
              </a>
              <a class="list-group-item list-group-item-action">
                Terms:
                <strong class="text-info">{{
                  user.terms ? 'Accepted' : 'Not Accepted'
                }}</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
import { getUser } from '../../services/userService'
export default {
  name: 'User',
  props: ['id'],
  data() {
    return {
      user: {},
    }
  },
  created: async function () {
    this.user = await getUser(this.id)
  },
}
</script>

<style scoped></style>
