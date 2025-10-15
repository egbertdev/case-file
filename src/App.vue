<template>
  <div class="desk">
    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
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
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, transparent 30%, rgba(0, 0, 0, 0.7) 100%);
  pointer-events: none;
  z-index: 1;
}

.desk > * {
  position: relative;
  z-index: 2;
}

/* Page transitions - slower version */
.page-enter-active,
.page-leave-active {
  transition:
    opacity 0.5s,
    transform 0.5s; /* Changed from 0.3s to 0.5s */
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
