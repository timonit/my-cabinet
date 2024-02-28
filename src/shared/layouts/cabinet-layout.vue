<script setup lang="ts">
</script>

<template>
  <v-layout>
    <slot name="header"></slot>

    <v-main class="ma-10">
      <slot></slot>
    </v-main>
  </v-layout>
</template>
