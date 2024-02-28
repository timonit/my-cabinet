<script setup lang="ts">
import CompanyCard from '@/widgets/company/company-card.vue';
import { CabinetLayout } from '@/shared/layouts';
import { AppHeader } from '@/widgets';

const title = 'My cabinet';
</script>

<template>
  <CabinetLayout>
    <template v-slot:header>
      <AppHeader :title="title" />
    </template>
    
    <CompanyCard />
  </CabinetLayout>
</template>
