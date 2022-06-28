<template>
  <PageBase title="Образовательные программы СПО">
    <template #content>
      <router-link to="/educationprogram/spo/zi">Земельно имущественные</router-link>
    </template>
  </PageBase>
</template>

<script>
import PageBase from "@/components/PageBase";
export default {
  name: "PageEducationProgramSPO",
  components: {PageBase}
}
</script>

<style scoped>

</style>
