<template>
  <div class="h-screen md:h-auto md:min-h-screen flex items-center justify-center p-4 md:p-8 outer">
    <div class="relative inner">
      <!-- Open Folder Background -->
      <img
        src="@/assets/open-folder.webp"
        alt="Open File"
        class="w-[95vw] max-w-[800px] mobile-folder-height"
      />

      <!-- Hamburger Menu for Mobile -->
      <button
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="absolute top-4 right-4 md:hidden bg-paper p-2 rounded-lg border border-gray-400 font-special text-sm hover:shadow-md transition-all z-20"
      >
        ☰
      </button>

      <!-- Mobile Menu Dropdown -->
      <div
        v-if="isMobileMenuOpen"
        class="absolute top-12 right-4 md:hidden bg-paper border border-gray-400 rounded-lg shadow-xl z-20 min-w-[140px]"
      >
        <RouterLink
          to="/personnel"
          class="block px-4 py-2 border-b border-gray-300 font-special text-sm hover:bg-amber-50"
          @click="isMobileMenuOpen = false"
        >
          PERSONNEL
        </RouterLink>
        <RouterLink
          to="/equipment"
          class="block px-4 py-2 border-b border-gray-300 font-special text-sm hover:bg-amber-50"
          @click="isMobileMenuOpen = false"
        >
          EQUIPMENT
        </RouterLink>
        <RouterLink
          to="/cases"
          class="block px-4 py-2 border-b border-gray-300 font-special text-sm hover:bg-amber-50"
          @click="isMobileMenuOpen = false"
        >
          CASES
        </RouterLink>
        <RouterLink
          to="/contact"
          class="block px-4 py-2 border-b border-gray-300 font-special text-sm hover:bg-amber-50"
          @click="isMobileMenuOpen = false"
        >
          CONTACT
        </RouterLink>
        <RouterLink
          to="/"
          class="block px-4 py-2 font-special text-sm hover:bg-amber-50"
          @click="isMobileMenuOpen = false"
        >
          HOME
        </RouterLink>
      </div>

      <!-- Desktop Navigation -->
      <div class="absolute top-6 left-12 hidden md:flex space-x-1">
        <RouterLink
          to="/personnel"
          class="bg-paper px-4 py-2 rounded-t-lg border border-gray-400 border-b-0 font-special text-sm hover:shadow-md transition-all"
          :class="{
            'shadow-xl border-b-paper -mb-px relative z-10 scale-105 font-bold bg-amber-100':
              $route.path === '/personnel',
          }"
        >
          PERSONNEL
        </RouterLink>
        <RouterLink
          to="/equipment"
          class="bg-paper px-4 py-2 rounded-t-lg border border-gray-400 border-b-0 font-special text-sm hover:shadow-md transition-all"
          :class="{
            'shadow-xl border-b-paper -mb-px relative z-10 scale-105 font-bold bg-amber-100':
              $route.path === '/equipment',
          }"
        >
          EQUIPMENT
        </RouterLink>
        <RouterLink
          to="/cases"
          class="bg-paper px-4 py-2 rounded-t-lg border border-gray-400 border-b-0 font-special text-sm hover:shadow-md transition-all"
          :class="{
            'shadow-xl border-b-paper -mb-px relative z-10 scale-105 font-bold bg-amber-100':
              $route.path === '/cases',
          }"
        >
          CASES
        </RouterLink>
        <RouterLink
          to="/contact"
          class="bg-paper px-4 py-2 rounded-t-lg border border-gray-400 border-b-0 font-special text-sm hover:shadow-md transition-all"
          :class="{
            'shadow-xl border-b-paper -mb-px relative z-10 scale-105 font-bold bg-amber-100':
              $route.path === '/contact',
          }"
        >
          CONTACT
        </RouterLink>
      </div>

      <!-- Desktop Home Button -->
      <RouterLink
        to="/"
        class="absolute top-6 right-12 hidden md:block bg-paper px-3 py-2 rounded-t-lg border border-gray-400 border-b-0 font-special text-sm hover:shadow-md transition-all"
      >
        HOME
      </RouterLink>

      <!-- Paper Stack Area - Adjusted for taller folder -->
      <div
        class="absolute top-16 left-6 right-4 bottom-10 md:top-20 md:left-12 md:right-12 md:bottom-10 bg-paper p-4 md:p-6 shadow-[inset_2px_0_4px_rgba(0,0,0,0.1)] rounded-sm overflow-y-auto paper-scrollbar"
        style="
          background-image: url('@/assets/paper-texture.png');
          background-blend-mode: overlay;
          background-size: cover;
        "
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)
</script>

<style scoped>
@media (max-width: 768px) {
  .mobile-folder-height {
    height: 100%;
  }
  .inner {
    height: 100%;
  }
}
</style>
