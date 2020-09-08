<template>
  <div class="about">
    <Page2 msg="วิชาเลือก"/>
  </div>
  
</template>

<script>
import Page2 from "@/components/Page2.vue";

export default {
  name: "About",
  components: {
    Page2,
  },
};
</script>
<style>
div.about h1 {
  font-size: 200 px;
}
</style>
