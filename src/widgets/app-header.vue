<script setup lang="ts">
import { CityPicker } from '@/features/city';

const props = defineProps<{
  title?: string;
}>();
</script>

<template>
  <v-app-bar :title="props.title">
    <template v-slot:append>
      <CityPicker />
    </template>
  </v-app-bar>
</template>
