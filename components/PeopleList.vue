<template>
  <v-card class="mx-auto" max-height="500" max-width="500">
    <v-card-title class="headline">{{ headline }}</v-card-title>
    <v-card-text>
      <v-data-table :headers="headers" :items="items" />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    headline: {
      type: String,
      required: true,
      default: 'People',
    },
    items: {
      type: Array,
      required: true,
    },
  },

  data: () => ({
    headers: [
      { text: 'Name', value: 'name' },
      { text: 'Phone', value: 'phone' },
      { text: 'Reference', value: 'reference' },
    ],
  }),
}
</script>
