<template>
  <div class="min-h-screen flex items-center justify-center p-8">
    <div class="relative">
      <!-- Open Folder Background -->
      <img src="@/assets/open-folder.png" alt="Open File" class="w-[800px] max-w-full" />

      <!-- Folder Tabs Navigation -->
      <div class="absolute top-6 left-12 flex space-x-1">
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

      <!-- Home Button -->
      <RouterLink
        to="/"
        class="absolute top-6 right-12 bg-paper px-3 py-2 rounded-t-lg border border-gray-400 border-b-0 font-special text-sm hover:shadow-md transition-all"
      >
        HOME
      </RouterLink>

      <!-- Paper Stack Area -->
      <div
        class="absolute top-24 left-16 right-16 bottom-16 bg-paper p-8 shadow-[inset_2px_0_4px_rgba(0,0,0,0.1)] rounded-sm overflow-y-auto paper-scrollbar"
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
</script>
