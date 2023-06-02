<template>
  <div
    class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-100"
  >
    <div class="lds-dual-ring"></div>
  </div>
</template>

<script>
export default {
  name: "h-spinner",
};
</script>

<style scoped>
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
