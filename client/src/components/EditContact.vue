<template>
  <v-layout>
    <div>
      {{contact.id}}
    </div>
  </v-layout>
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
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.contacts = (await AuthenticationService.index(value)).data
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
        this.error = 'Please fill in all the required fields.'
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
