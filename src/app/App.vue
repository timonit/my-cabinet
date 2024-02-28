<script setup lang="ts">
import { useCityStore } from '@/entities/city/model';
import { useCompanyStore } from '@/entities/company/model';
import { RouterView } from 'vue-router';

const companyStore = useCompanyStore();
const cityStore = useCityStore();

companyStore.fetch();
cityStore.fetch();
</script>

<template>
  <RouterView />
</template>
