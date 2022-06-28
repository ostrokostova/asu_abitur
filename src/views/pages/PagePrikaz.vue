<template>
  <div>
    <PageBase title="Приказы на зачисление" :links="links">
      <template #content>
          <p>Зачислений еще не было</p>
      </template>
    </PageBase>
  </div>
</template>

<script setup>
import PageBase from "@/components/PageBase";
import {ref} from "vue";

const links = ref([
  {name: 'Приказы на зачисление', url: '/prikaz'}
])
</script>

<style scoped>

</style>
