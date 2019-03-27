<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
        <v-flex xs12>
    <div>
    <h1>
      Register your contact here. {{contact.id}}
    </h1>
    <v-text-field
          maxlength="50"
          counter="50"
          label="Nazwa contactu [100g]"
          v-model="contact.name"
          disabled
        ></v-text-field>
    <br>
    <v-text-field
          maxlength="50"
          counter="50"
          label="Nazwa contactu [100g]"
          v-model="contact.surname"
          disabled
        ></v-text-field>
    <br>
    <v-text-field
          maxlength="50"
          counter="50"
          label="Nazwa contactu [100g]"
          v-model="contact.phonenumber"
          disabled
        ></v-text-field>
    <br>
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
        this.error = 'Wypełnij wymagane pola.'
        return
      }

      const contactId = this.$store.state.route.params.contactId
      try {
        await AuthenticationService.put(this.contact)
        this.$router.push({
          name: 'contacts',
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
      this.contact = (await AuthenticationService.show(contactId))
    } catch (err) {
      console.log(err)
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
