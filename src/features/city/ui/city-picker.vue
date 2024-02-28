<script setup lang="ts">
import { useCityStore } from '@/entities/city/model';
import { setCurrentCompany } from '@/features/company';

const cityStore = useCityStore();

const selectCity = (items: any[]) => {
  cityStore.select(items[0]);
  setCurrentCompany(items[0]);
};
</script>

<template>
  <v-btn color="primary">
    {{ cityStore.selected?.name || 'City' }}

    <v-menu activator="parent">
      <v-list @update:selected="selectCity">
        <v-list-item
          v-for="item in cityStore.cities"
          :key="item.code"
          :value="item.code"
          :active="cityStore.selected && item.code === cityStore.selected.code"
        >
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-btn>
</template>
