<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
        <v-flex xs12>
    <div>
    <h1>
      Are you sure that you want to delete this contact?
    </h1>
    <br>
    <p>Press <strong>Delete</strong> button if you are 100% sure.<br>
       If you want to go back, press the <strong>Cancel</strong> button</p>
    </div>
    <!-- <v-text-field
    prepend-icon="sentiment_very_satisfied"
    type="text"
    name="name"
    v-model="contact.name"
    label="Name"
    disable
    color="blue" />
    <br>
    <v-text-field
    prepend-icon="sentiment_satisfied"
    type="text"
    name="surname"
    v-model="contact.surname"
    label="Surname"
    disable
    color="blue" />
    <br>
    <v-text-field
    prepend-icon="phone"
    type="text"
    name="phonenumber"
    v-model="contact.phonenumber"
    label="Phone Number"
    disable
    color="blue" />
    <br>
    <v-btn flat large color="blue" outline
    :to="{name: 'contacts'}">Cancel</v-btn>
    or
    <v-btn flat large color="blue" outline @click="unsetAsContactEntirely"
    >Delete</v-btn> -->
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
  },
  methods: {
    async unsetAsContactEntirely () {
      try {
        await AuthenticationService.delete(this.contact.id)
        this.contact = null
        this.$router.push({
          name: 'contacts'
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    try {
      const contactId = this.route.params.contactId
      this.contact = (await AuthenticationService.show(contactId)).data
    } catch (err) {
      console.log(err)
    }
  }
}

</script>

<style scoped>

</style>
