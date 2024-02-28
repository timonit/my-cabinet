<script setup lang="ts">
import { useCompanyStore } from '@/entities/company/model';

const companyStore = useCompanyStore();
</script>

<template>
  <v-card :loading="companyStore.fetching">
    <template v-if="companyStore.company">
      <v-card-title class="text-wrap">{{ companyStore.company.name }}</v-card-title>

      <v-card-subtitle>Текущая дата: {{ companyStore.today.toLocaleString() }}</v-card-subtitle>

      <v-card-item subtitle="Общее количество товаров:">
        {{ companyStore.getStatusProp('totalProducts') }}
      </v-card-item>

      <v-card-item subtitle="Товар в наличии:">
        {{ companyStore.getStatusProp('availableProducts') }}
      </v-card-item>

      <v-card-item subtitle="Товар без наличии:">
        {{ companyStore.getStatusProp('nonAvailableProducts') }}
      </v-card-item>
    </template>
  </v-card>
</template>
