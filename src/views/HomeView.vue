<template>
  <div class="min-h-screen flex items-center justify-center p-8">
    <div class="relative">
      <!-- Folder Image -->
      <img
        src="@/assets/closed-folder.png"
        alt="Case File"
        class="w-[600px] max-w-full folder-entrance"
      />

      <!-- Mugshot -->
      <img
        src="@/assets/Profile.jpg"
        alt="Mugshot"
        class="absolute top-6 right-8 w-32 border-4 border-paper rotate-2 mugshot-entrance"
      />

      <!-- Paper Clip -->
      <img
        src="@/assets/paperclip.png"
        class="absolute top-4 right-6 w-8 h-auto mugshot-entrance"
      />

      <!-- Classified Stamp -->
      <div class="absolute top-1/3 left-1/4 transform -rotate-6">
        <div class="border-3 border-red-600 px-6 py-3 inline-block stamp-entrance">
          <p class="text-red-600 font-bold text-2xl tracking-widest typewriter-text">CLASSIFIED</p>
        </div>
      </div>

      <!-- Open Button -->
      <RouterLink
        to="/personnel"
        class="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-red-800 text-white px-6 py-3 rounded-lg font-bold font-special hover:bg-red-700 transition-colors cursor-pointer button-entrance"
      >
        OPEN FILE
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
/* Homepage animations - scoped to this component only */
.folder-entrance {
  animation: slideUp 0.8s ease-out;
}

.mugshot-entrance {
  animation: slideFromRight 0.6s ease-out 0.4s both;
}

.button-entrance {
  animation: slideFromBottom 0.6s ease-out 0.8s both;
}

.stamp-entrance {
  animation: fadeIn 0.5s ease-out 1.2s both;
}

.typewriter-text {
  overflow: hidden;
  border-right: 2px solid #dc2626;
  animation: typing 1s steps(10) 1.2s both;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideFromRight {
  from {
    opacity: 0;
    transform: translateX(30px) rotate(2deg);
  }
  to {
    opacity: 1;
    transform: translateX(0) rotate(2deg);
  }
}

@keyframes slideFromBottom {
  from {
    opacity: 0;
    transform: translate(-50%, 20px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
    border-right: none;
  }
}
</style>
