<template>
  <div class="modal-wrapper" :class="{'show' : show}">
    <div>
      <SuccessMessage />
    </div>
  </div>
</template>

<script>
import SuccessMessage from "@/components/Content/SuccessMessage";
export default {
  name: "CustomModal",
  components: {SuccessMessage},
  props: {
    show: Boolean
  }
}
</script>

<style scoped>
.modal-wrapper {
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .3);
  z-index: 101;
}
.modal-wrapper.show {
  display: unset;
}
</style>
