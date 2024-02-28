<script setup lang="ts">
import { useCityStore } from '@/entities/city/model';

const cityStore = useCityStore();
</script>

<template>
  <v-btn color="primary">
    {{ cityStore.selected?.name || 'City' }}

    <v-menu activator="parent">
      <v-list @update:selected="(items: any[]) => cityStore.select(items[0])">
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
