<template>
  <v-layout class="mt-5">
    <v-flex>
      <v-container>
        <v-row>
          <v-col cols="0" md="2" />
          <v-col cols="12" md="8">
            <people-list headline="Friends" :items="friends" />
          </v-col>
          <v-col cols="0" md="2" />
        </v-row>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import PeopleList from '~/components/PeopleList.vue'

export default {
  components: {
    PeopleList,
  },

  data: () => ({}),
  computed: {
    friends() {
      return this.$store.getters['friends/get']
    },
  },

  created() {
    this.$store.dispatch('fetchFriends')
  },
}
</script>
