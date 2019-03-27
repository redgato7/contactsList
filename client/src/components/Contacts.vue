<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
        <v-flex xs12>

      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    <v-data-table
      :headers="headers"
      :items="contacts"
      :search="search"
    >
      <template v-slot:items="props">
        <td class="text-xs-left">{{ props.item.phonenumber }}</td>
        <td class="text-xs-left">{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.surname }}</td>
        <td class="text-xs-right">
          <router-link :to="{path: `${props.item.id}/edit`}">

                  <v-icon> edit </v-icon>
          </router-link>
          <router-link :to="{path: `${props.item.id}`}">

                  <v-icon> delete </v-icon>
          </router-link>
        </td>

      </template>
      <v-alert v-slot:no-results :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
    </v-data-table>
    <v-btn flat large color="blue"
     outline :to="{name: 'registercontact'}">
            Add new contact
          </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {

  data () {
    return {
      contacts: null,
      search: '',
      headers: [
        {
          text: 'Phone number',
          align: 'left',
          sortable: false,
          value: 'phonenumber'
        },
        {text: 'Name', value: 'name'},
        {text: 'Surname', value: 'surname'}
      ]
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
    async register () {
      try {
        await AuthenticationService.post({
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
