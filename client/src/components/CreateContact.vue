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
    v-model="contact.name"
    label="Name"
    clearable
    color="blue" />
    <br>
    <v-text-field
    prepend-icon="sentiment_satisfied"
    type="text"
    name="surname"
    v-model="contact.surname"
    label="Surname"
    clearable
    color="blue" />
    <br>
    <v-text-field
    prepend-icon="phone"
    type="text"
    name="phonenumber"
    v-model="contact.phonenumber"
    label="Phone Number"
    clearable
    color="blue" />
    <br>
    <v-btn flat large color="blue" outline @click="create">Register</v-btn>
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
      contact: {
        name: '',
        surname: '',
        phonenumber: ''
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.contact)
        .every(key => !!this.contact[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      try {
        await AuthenticationService.post(this.contact)
        this.$router.push({
          name: 'contacts'
        })
      } catch (err) {
        console.log(err)
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
