<script setup lang="ts">
import { useCompanyStore } from '@/entities/company/model';

const companyStore = useCompanyStore();

const color: {[p: string]: string} = {
  low: 'red',
  medium: 'primary',
  high: 'green',
  unknown: 'default',
}

const computeColor = (val: number): string => {
  if (val < 100) return color['low'];
  if (val > 130) return color['high'];
  if (val >= 100 ) return color['medium'];
  return color['unknown'];
}
</script>

<template>
  <v-card class="w-100 pa-2" style="max-width: 800px;" :loading="companyStore.fetching">
    <template v-if="companyStore.company">
      <v-card-title class="text-primary text-wrap my-sm-5 text-sm-h4 text-xs-h6 font-weight-black">{{ companyStore.company.name }}</v-card-title>
      
      <v-divider></v-divider>
      <v-card-subtitle class="mt-5 text-wrap">Текущая дата: {{ companyStore.today.toLocaleString() }}</v-card-subtitle>

      <v-list lines="two">
        <v-list-item title="Количество товаров:">
          <template v-slot:append>
            <v-chip :color="computeColor(companyStore.getStatusProp('totalProducts'))">
              {{ companyStore.getStatusProp('totalProducts') }}
            </v-chip>
          </template>
        </v-list-item>
        
        <v-list-item title="Товар в наличии:">
          <template v-slot:append>
            <v-chip :color="computeColor(companyStore.getStatusProp('availableProducts'))">
              {{ companyStore.getStatusProp('availableProducts') }}
            </v-chip>
          </template>
        </v-list-item>
        
        <v-list-item title="Товар без наличии:">
          <template v-slot:append>
            <v-chip :color="computeColor(companyStore.getStatusProp('nonAvailableProducts'))">
              {{ companyStore.getStatusProp('nonAvailableProducts') }}
            </v-chip>
          </template>
        </v-list-item>
      </v-list>
    </template>
  </v-card>
</template>
