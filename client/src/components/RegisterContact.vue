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
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {

  data () {
    return {
      name: 'Dawid',
      surname: 'Zębacki',
      phonenumber: '664545106'
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.registerContact({
        name: this.name,
        surname: this.password,
        phonenumber: this.phonenumber
      })
      console.log(response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
