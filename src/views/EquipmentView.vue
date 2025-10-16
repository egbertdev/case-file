<template>
  <MainLayout>
    <h1 class="text-3xl md:text-4xl font-special mb-6 md:mb-8">EQUIPMENT LOCKER</h1>

    <!-- Frontend Tools -->
    <div class="mb-6 md:mb-8">
      <h2 class="text-xl md:text-2xl font-special mb-3 md:mb-4 border-b border-gray-300 pb-2">
        FRONTEND TOOLS
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        <div class="bg-amber-50 p-3 md:p-4 rotate-1 shadow-lg border border-amber-200 font-special">
          <h3 class="font-bold text-base md:text-lg text-center">VUE.JS</h3>
        </div>
        <div class="bg-blue-50 p-3 md:p-4 -rotate-1 shadow-lg border border-blue-200 font-special">
          <h3 class="font-bold text-base md:text-lg text-center">REACT</h3>
        </div>
        <div class="bg-green-50 p-3 md:p-4 rotate-2 shadow-lg border border-green-200 font-special">
          <h3 class="font-bold text-base md:text-lg text-center">TAILWIND</h3>
        </div>
      </div>
    </div>

    <!-- Backend Tools -->
    <div class="mb-6 md:mb-8">
      <h2 class="text-xl md:text-2xl font-special mb-3 md:mb-4 border-b border-gray-300 pb-2">
        BACKEND TOOLS
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        <div
          class="bg-purple-50 p-3 md:p-4 -rotate-2 shadow-lg border border-purple-200 font-special"
        >
          <h3 class="font-bold text-base md:text-lg text-center">LARAVEL</h3>
        </div>
        <div class="bg-pink-50 p-3 md:p-4 rotate-1 shadow-lg border border-pink-200 font-special">
          <h3 class="font-bold text-base md:text-lg text-center">NODE.JS</h3>
        </div>
        <div
          class="bg-indigo-50 p-3 md:p-4 -rotate-1 shadow-lg border border-indigo-200 font-special"
        >
          <h3 class="font-bold text-base md:text-lg text-center">EXPRESS</h3>
        </div>
        <div class="bg-red-50 p-3 md:p-4 rotate-2 shadow-lg border border-red-200 font-special">
          <h3 class="font-bold text-base md:text-lg text-center">PYTHON</h3>
        </div>
        <div
          class="bg-green-50 p-3 md:p-4 -rotate-1 shadow-lg border border-green-200 font-special"
        >
          <h3 class="font-bold text-base md:text-lg text-center">FLASK</h3>
        </div>
      </div>
    </div>

    <!-- Database Tools -->
    <div class="mb-6 md:mb-8">
      <h2 class="text-xl md:text-2xl font-special mb-3 md:mb-4 border-b border-gray-300 pb-2">
        DATABASE TOOLS
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        <div
          class="bg-yellow-50 p-3 md:p-4 -rotate-1 shadow-lg border border-yellow-200 font-special"
        >
          <h3 class="font-bold text-base md:text-lg text-center">MYSQL</h3>
        </div>
        <div class="bg-teal-50 p-3 md:p-4 rotate-1 shadow-lg border border-teal-200 font-special">
          <h3 class="font-bold text-base md:text-lg text-center">POSTGRESQL</h3>
        </div>
        <div
          class="bg-orange-50 p-3 md:p-4 -rotate-2 shadow-lg border border-orange-200 font-special"
        >
          <h3 class="font-bold text-base md:text-lg text-center">MONGODB</h3>
        </div>
      </div>
    </div>

    <!-- DevOps Tools -->
    <div>
      <h2 class="text-xl md:text-2xl font-special mb-3 md:mb-4 border-b border-gray-300 pb-2">
        DEV-OPS TOOLS
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        <div class="bg-gray-50 p-3 md:p-4 rotate-1 shadow-lg border border-gray-200 font-special">
          <h3 class="font-bold text-base md:text-lg text-center">DOCKER</h3>
        </div>
        <div class="bg-gray-50 p-3 md:p-4 -rotate-1 shadow-lg border border-gray-200 font-special">
          <h3 class="font-bold text-base md:text-lg text-center">GIT</h3>
        </div>
        <div class="bg-gray-50 p-3 md:p-4 rotate-2 shadow-lg border border-gray-200 font-special">
          <h3 class="font-bold text-base md:text-lg text-center">AWS</h3>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue'
</script>
