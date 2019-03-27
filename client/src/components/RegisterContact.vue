<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
        <v-flex xs12>
    <div>
    <h1>
      Register your contact here.
    </h1>
    <v-text-field
    prepend-icon="sentiment_very_satisfied"
    type="text"
    name="name"
    v-model="name"
    label="Name"
    clearable
    color="blue" />
    <br>
    <v-text-field
    prepend-icon="sentiment_satisfied"
    type="text"
    name="surname"
    v-model="surname"
    label="Surname"
    clearable
    color="blue" />
    <br>
    <v-text-field
    prepend-icon="phone"
    type="text"
    name="phonenumber"
    v-model="phonenumber"
    label="Phone Number"
    clearable
    color="blue" />
    <br>
    <v-btn flat large color="blue" outline @click="register">Register</v-btn>
    <div class="error" v-html="error" />
  </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {

  data () {
    return {
      name: '',
      surname: '',
      phonenumber: '',
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

h1 {
  color: #2196F3;
}

</style>
