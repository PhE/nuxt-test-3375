<script setup lang="ts">
import { useFullscreen } from '@vueuse/core'

const zoom = defineModel<boolean>()
//const title = defineModel('title')

const props = withDefaults(
  defineProps<{
    //modelValue?: boolean
    showHeader?: boolean
    showZoomButton?: boolean
    windowOnly?: boolean
  }>(),
  {
    //modelValue: false,
    showHeader: false,
    showZoomButton: false,
    windowOnly: false,
  }
)

const { isFullscreen, enter, exit, toggle } = useFullscreen()

watch(
  () => zoom.value,
  async (newValue) => {
    //console.debug("watching zoom changes ...")
    //toggle()
    if (newValue && !props.windowOnly) {
      await enter()
    } else {
      await exit()
    }
  }
)

watch(
  () => isFullscreen.value,
  (newValue) => {
    // if fullscreen is turned off and `zoom' is turned on ...
    if ((!newValue) && (zoom.value)) {
      // .. then turn `zoom` off
      zoom.value = false
    }
  }
)
</script>

<template>
  <div>
    <UButton v-if="showZoomButton" color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
      @click="zoom = true" />

    <slot />

    <UModal v-model="zoom" fullscreen>
      <UCard :ui="{
          base: 'h-full flex flex-col',
          rounded: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
          body: {
            base: 'grow',
          },
        }">
        <template #header v-if="showHeader">
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
              Modal
            </h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
              @click="zoom = false" />
          </div>
        </template>

        <div class="h-full bg-slate-900">
          <slot />
        </div>
      </UCard>
    </UModal>
  </div>
</template>
