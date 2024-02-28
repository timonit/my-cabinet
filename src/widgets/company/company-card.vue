<script setup lang="ts">
import { useCityStore } from '@/entities/city/model';
import { useCompanyStore } from '@/entities/company/model';
import 'moment/dist/locale/ru';
import momentTZ from 'moment-timezone';
import { StatusList } from '@/entities/company/ui';

const companyStore = useCompanyStore();
const cityStore = useCityStore();

const getCurrentDate = (): string => {
  return momentTZ(companyStore.today)
    .tz('asia/almaty')
    .locale(['ru'])
    .format('DD MMMM YYYY г., HH:mm:ss');
};
</script>

<template>
  <v-card class="w-100 pa-2" style="max-width: 800px" :loading="companyStore.fetching">
    <template v-if="companyStore.company && !companyStore.fetching && cityStore.selected">
      <v-card-title class="text-primary text-wrap my-sm-3 text-sm-h4 text-xs-h6 font-weight-black">
        {{ companyStore.company.name }}
      </v-card-title>

      <v-card-item :subtitle="getCurrentDate()" :title="cityStore.selected?.name" />

      <v-divider></v-divider>

      <StatusList />
    </template>

    <v-alert v-else title="Выберите город" color="warning" />
  </v-card>
</template>
