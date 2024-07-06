<script setup lang="ts">
/*

Sample url in supabase invitation email:
http://localhost:3000/confirm#access_token=eyJhbGciOiJIUzI1NiIsImtpZCI6IkVsVURmT1hxWWxJK3lzZzciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2Nnc3N6dmF6ZW1rZm5lcWxncGtiLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiJmMzhhOWY3NC0yZDQ3LTQxMzUtODFiMC02NGY2NTk4MTY4YTIiLCJhdWQiOlsiYXV0aGVudGljYXRlZCJdLCJleHAiOjE3MjAxMDMxMTYsImlhdCI6MTcyMDA5OTUxNiwiZW1haWwiOiJwaGlsaXBwZS5lbnR6bWFubitsb2cxMEBnbWFpbC5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImVtYWlsIiwicHJvdmlkZXJzIjpbImVtYWlsIl19LCJ1c2VyX21ldGFkYXRhIjp7InBwIjp7InBheHBhci50ZWNoIjp7InBsYW5zIjpbeyJwcm9kdWN0X25hbWUiOiJQX0ZSRUUiLCJyZW5ld3NfYXQiOiIyMDI5LTA3LTAyVDEzOjI1OjAzLjEwMVoiLCJyb2xlcyI6WyJDSEVDSyIsIkhPTUUiXX1dfX19LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6Im90cCIsInRpbWVzdGFtcCI6MTcyMDA5OTUxNn1dLCJzZXNzaW9uX2lkIjoiMDQxMWJmNGUtNTZmMy00ZDVlLWFjNTYtYmNmMzVjNjEwYmFkIiwiaXNfYW5vbnltb3VzIjpmYWxzZX0.62AG5_ciRXJ7OqpLDMb20MzIYkjbT-qy5R11iOID5jg&expires_at=1720103116&expires_in=3600&refresh_token=gA2D0xd2mXz49EpgRu0Dhw&token_type=bearer&type=invite

http://localhost:3000/confirm
  #access_token=eyJhbGciOiJIUzI1NiIsImtpZCI6IkVsVURmT1hxWWxJK3lzZzciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2Nnc3N6dmF6ZW1rZm5lcWxncGtiLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiJkMmNiNTEzZC03ZGI1LTQxMWQtYjhjZC1jNGJhMGViNmM0MjYiLCJhdWQiOlsiYXV0aGVudGljYXRlZCJdLCJleHAiOjE3MjAxMDg4MTEsImlhdCI6MTcyMDEwNTIxMSwiZW1haWwiOiJwaGlsaXBwZS5lbnR6bWFubitsb2czMEBnbWFpbC5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImVtYWlsIiwicHJvdmlkZXJzIjpbImVtYWlsIl19LCJ1c2VyX21ldGFkYXRhIjp7InBwIjp7InBheHBhci50ZWNoIjp7InBsYW5zIjpbeyJwcm9kdWN0X25hbWUiOiJQX0ZSRUUiLCJyZW5ld3NfYXQiOiIyMDI5LTA3LTAyVDE0OjU5OjM5LjQ5MFoiLCJyb2xlcyI6WyJDSEVDSyIsIkhPTUUiXX1dfX19LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6Im90cCIsInRpbWVzdGFtcCI6MTcyMDEwNTIxMX1dLCJzZXNzaW9uX2lkIjoiZDU4MjM2MTAtYzI0OS00MTMyLWIxMzQtOTNiYzMxZjY3ZTU5IiwiaXNfYW5vbnltb3VzIjpmYWxzZX0.A9eTwuCm6T4MXHaGEkaSYPjB7VlZO-0CfLpMr5gQHlM
  &expires_at=1720108811
  &expires_in=3600
  &refresh_token=iyBSwHzl3BbO73Xu8azwPg
  &token_type=bearer
  &type=invite


TODO: Handle redirect with cookie: http://supabase.nuxtjs.org/authentication#redirect-path

*/

import { promiseTimeout } from "@vueuse/core"



const user = useSupabaseUser()
const url = useRequestURL()

console.debug({ url })

const DELAY = 3000 //ms

const access_token_in_hash = url.hash.includes('#access_token')
const description = ref("Waiting for confirmation ...")



watch(
  user,
  async () => {
    if (user.value) {
      description.value = "User authenticated ..."
      await promiseTimeout(DELAY)
      return navigateTo("/")
    }
  },
  { immediate: true }
)

const ui = {
  icon: {
    base: "text-orange-500 dark:text-orange-400",
  } as any,
  footer: {
    base: "ml-16",
  } as any,
}


onMounted(async () => {
  if (access_token_in_hash === true) {
    description.value = "invitation confirmed, please login ..."
    await promiseTimeout(DELAY)
    //TODO: pass the email y decoding the access_token with the email within
    navigateTo("/login")
  }
})

</script>

<template>
  <ppw-modal :modelValue="true" content-slot title="Login in progress ..." :description="description"
    icon="heroicons:user" :close-button="null" :ui="ui">
    <UProgress animation="carousel" />
  </ppw-modal>
</template>
