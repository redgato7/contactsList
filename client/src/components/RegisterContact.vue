<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
        <v-flex xs12>
    <div>
    <h1>
      Add your new contact here.
    </h1>
    <br>
    <p>Fill up all the inputs and then press <strong>Register</strong> button.<br>
       If you want to just check a contact list press the <strong>Contacts</strong> button </p>
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
    <v-btn flat large color="blue" outline
    :to="{name: 'contacts'}">Contacts list</v-btn>
    or
    <v-btn flat large color="blue" outline @click="register"
    >Register</v-btn>
    <div class = "err" v-html="error" />
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
    // async register () {
    //   this.error = null
    //   const areAllFieldsFilledIn = Object
    //     .keys(this.contact)
    //     .every(key => !!this.contact[key])
    //   if (!areAllFieldsFilledIn) {
    //     this.error = 'Please fill fields.'
    //     return
    //   }
    //   try {
    //     await AuthenticationService.registerContact(this.contact)
    //     this.$router.push({
    //       name: 'contacts'
    //     })
    //   } catch (err) {
    //     console.log(err)
    //   }
    // }
    async register () {
      try {
        await AuthenticationService.registerContact({
          name: this.name,
          surname: this.surname,
          phonenumber: this.phonenumber
        })
        this.$router.push({
          name: 'contacts'
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
p {
  color: #2196F3;
}

</style>
