<script setup>
import {ref} from 'vue';
import {useQuasar} from 'quasar';
import {useRouter} from 'vue-router';

const $q = useQuasar();
const router = useRouter();

const email = ref(null);
const password = ref(null);

const onSubmit = () => {
  if (email.value === null || password.value === null) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: 'Email and password are required',
      position: 'top'
    });
  } else {
    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: 'Logged in',
      position: 'top'
    });
    router.push({name: 'home'});
  }
}

</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="flex flex-center blue-gradient">
        <q-card class="my_card">
          <q-form @submit="onSubmit" class="q-gutter-md">
            <q-card-section class="text-center">
              <div class="text-accent  text-h6">Sign In</div>
              <div class="text-grey-8">Sign in below to access your account</div>
            </q-card-section>
            <q-card-section class="q-pb-none q-pt-none">
              <q-input
                dense
                outlined
                v-model="email"
                class="q-mt-md"
                label="Email"
                hint="Your email"
                lazy-rules
                :rules="[val => val && val.length > 0 || 'Email is required']"
              >
                <template v-slot:prepend>
                  <q-icon name="email"/>
                </template>
              </q-input>
              <q-input
                dense
                outlined
                v-model="password"
                class="q-mt-md"
                label="Password"
                hint="Your password"
                lazy-rules
                :rules="[val => val && val.length > 0 || 'Password is required']"
              >
                <template v-slot:prepend>
                  <q-icon name="lock"/>
                </template>
              </q-input>
            </q-card-section>
            <q-card-section class="q-pt-none">
              <q-btn
                type="submit"
                class="full-width q-mt-md"
                color="accent"
                label="Sign In"
                style="border-radius: 10px;"
              />
            </q-card-section>
            <q-card-section class="text-center q-pt-none">
              <div class="text-grey-8">Don't have an account?
                <router-link to="/register" class="text-dark text-weight-bold" style="text-decoration:none">Sign up
                </router-link>
              </div>
            </q-card-section>
          </q-form>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped lang="scss">

.my_card {
  width: 25rem;
  border-radius: 8px;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.7);
}

@media (max-width: 600px) {
  .my_card {
    width: 20rem;
  }
}
</style>
