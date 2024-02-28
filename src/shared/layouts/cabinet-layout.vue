<script setup lang="ts">
import { ref } from 'vue';

const order = ref(false);
</script>

<template>
  <v-layout>
    <slot name="header"></slot>

    <v-main>
      <slot></slot>
    </v-main>
  </v-layout>
</template>
