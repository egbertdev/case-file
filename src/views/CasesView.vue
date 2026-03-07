<template>
  <MainLayout>
    <h1 class="text-3xl md:text-4xl font-special mb-6 md:mb-8 text-gray-900">ACTIVE CASES</h1>

    <div class="space-y-6 md:space-y-8">
      <div class="bg-paper border border-gray-300 rounded-lg p-4 md:p-6 shadow-sm">
        <div
          class="flex flex-col md:flex-row md:justify-between md:items-start mb-3 md:mb-4 gap-2 md:gap-0"
        >
          <h2 class="text-xl md:text-2xl font-special uppercase text-gray-900">
            CASE #001: BWANDERA MARKETPLACE
          </h2>
          <span
            class="bg-green-100 text-green-800 px-2 py-1 rounded font-special text-sm self-start md:self-auto"
            >COMPLETED</span
          >
        </div>
        <p class="font-lora text-base md:text-lg mb-3 md:mb-4 text-gray-700 leading-relaxed">
          A multi-vendor digital marketplace for architectural blueprints. Engineered with secure
          M-Pesa/PayPal payment flows, vendor dashboards, and automated file delivery.
        </p>
        <div class="flex flex-col md:flex-row gap-3 md:gap-4 items-center">
          <a
            href="https://bwandera.onrender.com"
            target="_blank"
            class="w-full md:w-auto bg-red-800 text-white px-6 py-2 rounded font-special hover:bg-red-700 transition-colors text-center uppercase tracking-wider"
          >
            VIEW FILE
          </a>
          <span class="font-lora text-gray-600 text-sm md:text-base italic"
            >Laravel 12 • Vue 3 • MySQL • TailwindCSS</span
          >
        </div>
      </div>

      <div class="bg-paper border border-gray-300 rounded-lg p-4 md:p-6 shadow-sm">
        <div
          class="flex flex-col md:flex-row md:justify-between md:items-start mb-3 md:mb-4 gap-2 md:gap-0"
        >
          <h2 class="text-xl md:text-2xl font-special uppercase text-gray-900">
            CASE #002: SPEED-TO-LEAD ENGINE
          </h2>
          <span
            class="bg-blue-100 text-blue-800 px-2 py-1 rounded font-special text-sm self-start md:self-auto"
            >IN-FIELD</span
          >
        </div>
        <p class="font-lora text-base md:text-lg mb-3 md:mb-4 text-gray-700 leading-relaxed">
          AI-driven lead qualification system. Utilizes Gemini Flash for real-time lead analysis and
          triage, orchestrated via Make.com for instantaneous CRM routing.
        </p>
        <div class="flex flex-col md:flex-row gap-3 md:gap-4 items-center">
          <a
            href="https://youtu.be/2REism2BuJs"
            target="_blank"
            class="w-full md:w-auto bg-red-800 text-white px-6 py-2 rounded font-special hover:bg-red-700 transition-colors text-center uppercase tracking-wider"
          >
            WATCH DEMO
          </a>
          <span class="font-lora text-gray-600 text-sm md:text-base italic"
            >Gemini Flash • Make.com • Webhooks • Automation</span
          >
        </div>
      </div>

      <div class="bg-paper border border-gray-300 rounded-lg p-4 md:p-6 shadow-sm">
        <div
          class="flex flex-col md:flex-row md:justify-between md:items-start mb-3 md:mb-4 gap-2 md:gap-0"
        >
          <h2 class="text-xl md:text-2xl font-special uppercase text-gray-900">
            CASE #003: ALGOPILOT SYSTEMS
          </h2>
          <span
            class="bg-green-100 text-green-800 px-2 py-1 rounded font-special text-sm self-start md:self-auto"
            >ACTIVE</span
          >
        </div>
        <p class="font-lora text-base md:text-lg mb-3 md:mb-4 text-gray-700 leading-relaxed">
          Specialized technical analysis infrastructure for MT5 and TradingView. Implements Fair
          Value Gap (FVG) scanners and recursive multi-timeframe divergence logic.
        </p>
        <div class="flex flex-col md:flex-row gap-3 md:gap-4 items-center">
          <a
            href="https://algopilot.netlify.app"
            target="_blank"
            class="w-full md:w-auto bg-red-800 text-white px-6 py-2 rounded font-special hover:bg-red-700 transition-colors text-center uppercase tracking-wider"
          >
            VIEW FILE
          </a>
          <span class="font-lora text-gray-600 text-sm md:text-base italic"
            >MQL5 • Pine Script v5 • MT5 API • TradingView</span
          >
        </div>
      </div>

      <div class="bg-paper border border-gray-300 rounded-lg p-4 md:p-6 shadow-sm">
        <div
          class="flex flex-col md:flex-row md:justify-between md:items-start mb-3 md:mb-4 gap-2 md:gap-0"
        >
          <h2 class="text-xl md:text-2xl font-special uppercase text-gray-900">
            CASE #004: CASE-STYLED INTERFACE
          </h2>
          <span
            class="bg-green-100 text-green-800 px-2 py-1 rounded font-special text-sm self-start md:self-auto"
            >STABLE</span
          >
        </div>
        <p class="font-lora text-base md:text-lg mb-3 md:mb-4 text-gray-700 leading-relaxed">
          Personal portfolio system designed with an investigative aesthetic. Built to demonstrate
          custom UI layouts, state-driven CSS animations, and high-performance frontend
          architecture.
        </p>
        <div class="flex flex-col md:flex-row gap-3 md:gap-4 items-center">
          <button
            disabled
            class="w-full md:w-auto bg-gray-400 text-white px-6 py-2 rounded font-special cursor-not-allowed text-center uppercase tracking-wider"
          >
            ACTIVE VIEW
          </button>
          <span class="font-lora text-gray-600 text-sm md:text-base italic"
            >Vue 3 • Vite • CSS Animations • Netlify</span
          >
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue'
</script>
