<script setup lang="ts">
import { CabinetLayout } from '@/shared/layouts';
import { AppHeader } from '@/widgets';

const title = 'My cabinet';
</script>

<template>
  <CabinetLayout>
    <template v-slot:header>
      <AppHeader :title="title" />
    </template>
    <h1>timon</h1>
  </CabinetLayout>
</template>
