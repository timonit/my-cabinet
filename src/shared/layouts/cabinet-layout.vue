<script setup lang="ts"></script>

<template>
  <v-layout>
    <slot name="header"></slot>

    <v-main class="mt-10 mx-10 d-flex justify-center">
      <slot></slot>
    </v-main>
  </v-layout>
</template>
