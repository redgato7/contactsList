<template>
  <div>
    <h1>
      Register your contact here.
    </h1>
    <input
    type="text"
    name="name"
    v-model="name"
    placeholder="name" />
    <br>
    <input
    type="text"
    name="surname"
    v-model="surname"
    placeholder="surname" />
    <br>
    <input
    type="text"
    name="phonenumber"
    v-model="phonenumber"
    placeholder="phone number" />
    <br>
    <button @click="register"> Register </button>
    <div class="error" v-html="error" />
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {

  data () {
    return {
      name: 'Dawid',
      surname: 'Zebacki',
      phonenumber: '664545106',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.registerContact({
          name: this.name,
          surname: this.surname,
          phonenumber: this.phonenumber
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
