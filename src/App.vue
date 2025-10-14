<template>
  <div class="desk">
    <router-view/>
  </div>
</template>

<style>
.desk {
  background: url('./assets/wood-texture.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  padding: 20px;
  position: relative;
}

.desk::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at center,
    transparent 30%,
    rgba(0, 0, 0, 0.7) 100%
  );
  pointer-events: none;
  z-index: 1;
}

.desk > * {
  position: relative;
  z-index: 2;
}
</style>