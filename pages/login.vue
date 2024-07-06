<script setup lang="ts">
/*
login page 

query params:
* redirect: relative URL to redirect on successfull login
* customer_id: lemon squeezy customer id to wait for in supabase fct

See https://github.com/nuxtbase/auth-ui-vue/blob/main/src/App.vue


*/

//import { ThemeSupa, ThemeMinimal, ViewType } from "@supabase/auth-ui-shared"
import { Auth } from "@nuxtbase/auth-ui-vue"
import { ThemeSupa } from "@supabase/auth-ui-shared"
//import type { Provider } from "@supabase/supabase-js"
import { useIntervalFn } from '@vueuse/core'
import type { Pausable } from '@vueuse/shared'
//import { getSocialLoginProviders } from "~~/src/tools"
import type { Provider } from "@supabase/supabase-js"
import { promiseTimeout, useTimeoutFn } from "@vueuse/core"

//const runtimeConfig = useRuntimeConfig()
const colorMode = useColorMode()
const supabase = useSupabaseClient()
const user = useSupabaseUser()
const route = useRoute()
const url = useRequestURL()
const toast = useMyToast()


definePageMeta({ layout: "front" })

//const providers = getSocialLoginProviders()
const providers = ref<Provider[]>([])
const isOpen = ref(true)


// get pp base request url (works on client AND server side)
const url2 = url.origin + url.pathname
// from https://www.mysite.com/a/b/c/login get https://www.mysite.com/a/b/c
const urlParent = url2.substring(0, url2.lastIndexOf("/"))

// default short redirect URL
// Warning: distinct redirect short (inner) and redirect long (from supabase)
// redirectShort = '/welcome' or '/console'
const defaultRedirectShort = "/confirm"

// with use the given redirect URL or the default one
const redirectShort = (route.query.redirect
  ? decodeURIComponent(route.query.redirect)
  : defaultRedirectShort) as string

// redirectLong : the full URL that supbase auth will redirect to
// example : https://textile.document.leagal/welcome
// example : https://arundo-tech.gitlab.io/paxpar-front/welcome
// example : https://uat.paxpar.tech/welcome
const redirectLong = `${urlParent}${redirectShort}`

console.debug({ providers, url, urlParent, redirectShort, redirectLong })

const emailRedirectTo = redirectLong

const DELAY = 3000 //ms

const CUSTOMER_STATUS_PERIOD = 1000 //ms
//TODO: move to supabase client
const CUSTOMER_STATUS_URL = "https://cgsszvazemkfneqlgpkb.supabase.co/functions/v1/onboard-status"

// the lemonsqueezy user to wait for 
const invitation_email = ref(route.query.invitation_email)

const isMounted = ref(false)

const description = ref("Sign in with social auth provider or with an email magic link")

watch(
  user,
  async () => {
    // user defined, login succeeded, move to target ...
    if (user.value) {
      description.value = `Connecting user ${user.value?.email} ...`  
      await promiseTimeout(DELAY)
      return navigateTo(redirectShort)
    }
  },
  { immediate: true }
)




onMounted(async () => {
  // Don't access deploy_conf in script setup, it will raise an error on generate
  // access in after the page is mounted
  //providers.value = getSocialLoginProviders()
  //console.debug('deploy_conf', deploy_conf)
  //console.debug('window.deploy_conf', window.deploy_conf)
  //
  //providers.value = deploy_conf?.login?.social as Provider[]

  console.debug("mounted login emailRedirectTo=", emailRedirectTo)
  console.debug({ url })

  if (invitation_email.value) {
    description.value = `Waiting for invitation confirmation ${invitation_email.value}, close this window et check your email ...`

  }

  const { isPending } = useTimeoutFn(() => {
    //console.debug('useTimeoutFn')
    //console.debug('deploy_conf', deploy_conf)
    //console.debug('window.deploy_conf', window.deploy_conf)
    providers.value = deploy_conf?.login?.social as Provider[]
    isMounted.value = true
  }, DELAY)


})


const ui = {
  icon: {
    base: 'text-green-500 dark:text-green-400'
  } as any,
  footer: {
    base: 'ml-16'
  } as any
}


</script>


<template>

  <UDashboardModal v-model="isOpen" title="Login" :description="description" icon="heroicons:user" prevent-close
    :close-button="null" :ui="ui">

    <!--
      <p>invitation_email: {{ invitation_email }}</p>
      <p>isMounted: {{ isMounted }}</p>
      -->

    <template v-if="invitation_email">
    </template>
    <template v-else>
      <Auth v-if="isMounted" class="w-full" :supabaseClient="supabase" :appearance="{
        theme: ThemeSupa,
      }" view="magic_link" :providers="providers" :redirectTo="emailRedirectTo" socialLayout="horizontal" :queryParams="{
        //access_type: 'offline',
        //prompt: 'consent',
        //hd: 'domain.com'
      }" :dark="colorMode.value === 'dark'" :show-links="false" />

      <UProgress v-else animation="carousel" class="h-16" />
    </template>
  </UDashboardModal>
</template>

<style>
/* fix the black text bug on dark theme */
.dark #email.supabase-auth-ui_ui-input {
  color: white;
}
</style>