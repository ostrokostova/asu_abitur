<template>
  <MainSection />
  <NavigationForAbiturient />
  <ThirtySection />
  <FortySection />
  <SixthSection />
  <SeventhSection />
  <EightSection />
  <FooterSection />
</template>

<script>
import NavigationForAbiturient from "@/views/sections/SecondSection";
import FortySection from "@/views/sections/FortySection";
import ThirtySection from "@/views/sections/ThirtySection";
import SixthSection from "@/views/sections/SixthSection";
import MainSection from "@/views/sections/MainSection";
import EightSection from "@/views/sections/EightSection";
import SeventhSection from "@/views/sections/SeventhSection";
import FooterSection from "@/views/sections/FooterSection";

export default {
  components: {
    FooterSection,
    SeventhSection,
    EightSection,
    MainSection,
    SixthSection,
    ThirtySection,
    FortySection,
    NavigationForAbiturient,
  }
}
</script>

<style scoped>

</style>
