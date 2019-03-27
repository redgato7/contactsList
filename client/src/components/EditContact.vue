<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
        <v-flex xs12>
    <div>
    <h1>
      Are you sure that you want to edit this contact?
    </h1>
    <br>
    <p> Type new valueas and push the <strong>Edit</strong> button if you are 100% sure.<br>
       If you want to go back, press the <strong>Cancel</strong> button</p>
    </div>
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
    <v-btn flat large color="blue" outline
    :to="{name: 'contacts'}">Cancel</v-btn>
    or
    <v-btn flat large color="blue" outline @click="register"
    >Edit</v-btn>
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
        name: null,
        surname: null,
        phonenumber: null
      }
    }
  },
  methods: {
    async save () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.contact)
        .every(key => !!this.contact[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Type something.'
        return
      }

      const contactId = this.$store.state.route.params.contactId
      try {
        await AuthenticationService.put(this.contact)
        this.$router.push({
          name: 'contact',
          params: {
            contactId: contactId
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    try {
      const contactId = this.$store.state.route.params.contactId
      this.contact = (await AuthenticationService.show(contactId)).data
    } catch (err) {
      console.log(err)
    }
  }
}

</script>

<style scoped>

@media (min-width: 100px) { /* sm */
    .form-button {
      margin-top: 20px;
    }
}

@media (min-width: 600px) { /* sm */
    .form-button {
      margin-top: 20px;
      margin-left: 51%;
    }
}

@media (min-width: 992px) { /* md */
  .form-button {
    margin-top: 20px;
    margin-left: 51%;
  }
}

@media (min-width: 1200px) { /* lg */
  .form-button {
    margin-top: 20px;
    margin-left: 51%;
  }
}

.form-title{
  font-size: 30px;
  display:inline-block;
  color: #00796B;
  margin-bottom: 30px;
  border-bottom: solid;
}

.form{
padding-left: 20px;
padding-right: 20px;
padding-bottom: 20px;

}

</style>
