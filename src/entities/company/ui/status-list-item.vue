<script setup lang="ts">
import type { Level } from './types';

const props = defineProps<{
  label: string;
  level: Level;
  value: number | string;
}>();

const color: { [p: string]: string; } = {
  low: 'red',
  medium: 'primary',
  high: 'green',
  unknown: 'default',
};
</script>

<template>
  <v-list-item :title="props.label">
    <template v-slot:append>
      <v-chip :color="color[level]"> {{ props.value }} </v-chip>
    </template>
  </v-list-item>
</template>
