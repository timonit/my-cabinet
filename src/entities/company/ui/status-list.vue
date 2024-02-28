<script setup lang="ts">
import { useCompanyStore } from '@/entities/company/model';
import type { Level } from './types';
import StatusListItem from './status-list-item.vue';

const companyStore = useCompanyStore();

const computeLevel = (val: number): Level => {
  if (val < 100) return 'low';
  if (val > 130) return 'high';
  if (val >= 100) return 'medium';
  return 'unknown';
};
</script>

<template>
  <v-list lines="two">
    <StatusListItem
      label="Количество товаров:"
      :value="companyStore.getStatusProp('totalProducts')"
      :level="computeLevel(companyStore.getStatusProp('totalProducts'))"
    />

    <StatusListItem
      label="Товар в наличии:"
      :value="companyStore.getStatusProp('availableProducts')"
      :level="computeLevel(companyStore.getStatusProp('availableProducts'))"
    />

    <StatusListItem
      label="Товар без наличии:"
      :value="companyStore.getStatusProp('nonAvailableProducts')"
      :level="computeLevel(companyStore.getStatusProp('nonAvailableProducts'))"
    />
  </v-list>
</template>
