<template>
  <MainLayout>
    <h1 class="text-3xl md:text-4xl font-special mb-6 md:mb-8">ACTIVE CASES</h1>

    <div class="space-y-6 md:space-y-8">
      <!-- Case 1 -->
      <div class="bg-paper border border-gray-300 rounded-lg p-4 md:p-6">
        <div
          class="flex flex-col md:flex-row md:justify-between md:items-start mb-3 md:mb-4 gap-2 md:gap-0"
        >
          <h2 class="text-xl md:text-2xl font-special">CASE #001: MULTITENANT SAAS</h2>
          <span
            class="bg-green-100 text-green-800 px-2 py-1 rounded font-special text-sm self-start md:self-auto"
            >CLOSED</span
          >
        </div>
        <p class="font-lora text-base md:text-lg mb-3 md:mb-4">
          Enterprise-level software architecture supporting multiple independent tenants with
          isolated data, authentication, and billing systems.
        </p>
        <div class="flex flex-col md:flex-row gap-3 md:gap-4 md:space-x-4">
          <RouterLink
            to="/cases/multitenant-saas"
            class="bg-red-800 text-white px-4 py-2 rounded font-special hover:bg-red-700 transition-colors text-center md:text-left"
          >
            VIEW FILE
          </RouterLink>
          <span
            class="font-lora text-gray-600 text-sm md:text-base self-center text-center md:text-left"
            >Vue • Laravel • MySQL • Docker</span
          >
        </div>
      </div>

      <!-- Case 2 -->
      <div class="bg-paper border border-gray-300 rounded-lg p-4 md:p-6">
        <div
          class="flex flex-col md:flex-row md:justify-between md:items-start mb-3 md:mb-4 gap-2 md:gap-0"
        >
          <h2 class="text-xl md:text-2xl font-special">CASE #002: BOOKING APPLICATION</h2>
          <span
            class="bg-green-100 text-green-800 px-2 py-1 rounded font-special text-sm self-start md:self-auto"
            >CLOSED</span
          >
        </div>
        <p class="font-lora text-base md:text-lg mb-3 md:mb-4">
          Full-stack reservation system with real-time availability, payment processing, and admin
          dashboard for business management.
        </p>
        <div class="flex flex-col md:flex-row gap-3 md:gap-4 md:space-x-4">
          <RouterLink
            to="/cases/booking-app"
            class="bg-red-800 text-white px-4 py-2 rounded font-special hover:bg-red-700 transition-colors text-center md:text-left"
          >
            VIEW FILE
          </RouterLink>
          <span
            class="font-lora text-gray-600 text-sm md:text-base self-center text-center md:text-left"
            >React • Node.js • MongoDB • Stripe</span
          >
        </div>
      </div>

      <!-- Case 3 -->
      <div class="bg-paper border border-gray-300 rounded-lg p-4 md:p-6">
        <div
          class="flex flex-col md:flex-row md:justify-between md:items-start mb-3 md:mb-4 gap-2 md:gap-0"
        >
          <h2 class="text-xl md:text-2xl font-special">CASE #003: MQL5 PORTFOLIO</h2>
          <span
            class="bg-green-100 text-green-800 px-2 py-1 rounded font-special text-sm self-start md:self-auto"
            >ACTIVE</span
          >
        </div>
        <p class="font-lora text-base md:text-lg mb-3 md:mb-4">
          Specialized algorithmic trading systems and technical indicators for financial markets
          using MQL5 programming language.
        </p>
        <div class="flex flex-col md:flex-row gap-3 md:gap-4 md:space-x-4">
          <RouterLink
            to="/cases/mql5-portfolio"
            class="bg-red-800 text-white px-4 py-2 rounded font-special hover:bg-red-700 transition-colors text-center md:text-left"
          >
            VIEW FILE
          </RouterLink>
          <span
            class="font-lora text-gray-600 text-sm md:text-base self-center text-center md:text-left"
            >MQL5 • MetaTrader • Algorithmic Trading</span
          >
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue'
import { RouterLink } from 'vue-router'
</script>
