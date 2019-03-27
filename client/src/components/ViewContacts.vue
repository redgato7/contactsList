<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
        <v-flex xs12>
          <div
            v-for="contact in contacts"
            :key="contact.name">
            {{contact.name}}
            {{contact.surname}}
            {{contact.phonenumber}}
          </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      contacts: [
        {
        name: "Dave",
        surname: "Zebacky",
        phonenumber: "664446664"
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
