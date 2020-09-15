/* eslint-disable no-console */
<template>
  <v-layout class="mt-5">
    <v-flex>
      <v-container>
        <v-row>
          <v-col cols="0" md="2" />
          <v-col cols="12" md="8">
            <v-card class="mx-auto" max-height="500" max-width="500">
              <v-card-title class="headline">Login</v-card-title>
              <v-card-subtitle>
                Welcome! Please enter your email and password.
              </v-card-subtitle>
              <v-card-text>
                <v-text-field
                  v-model="user.email"
                  prepend-icon="mdi-account"
                  :error="error"
                  label="Email"
                  @input="error = false"
                />
                <v-text-field
                  v-model="user.password"
                  :type="showPassword ? 'password' : 'text'"
                  prepend-icon="mdi-lock"
                  :append-icon="!showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :error="error"
                  label="Password"
                  @input="error = false"
                  @click:append="showPassword = !showPassword"
                />
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn @click="login()">Sign in</v-btn>
                <v-spacer />
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="0" md="2" />
        </v-row>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  layout: 'base',

  data: () => ({
    user: {
      email: '',
      password: '',
    },
    showPassword: false,
    error: false,
  }),

  methods: {
    async login() {
      const authorized = await this.$store.dispatch('login', this.user)
      // eslint-disable-next-line no-console
      console.log(authorized)
      if (!authorized) this.setAlerts()
      else {
      }
    },
    setAlerts() {
      this.error = true
    },
  },
}
</script>
