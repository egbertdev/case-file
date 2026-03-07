<template>
  <MainLayout>
    <h1 class="text-3xl md:text-4xl font-special mb-6 md:mb-8">CONTACT PROTOCOLS</h1>

    <div class="space-y-6 md:space-y-8">
      <div class="bg-paper border border-gray-300 rounded-lg p-4 md:p-6 font-lora">
        <h2 class="text-xl md:text-2xl font-special mb-3 md:mb-4 uppercase">Operational Status</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <div>
            <h3 class="font-bold text-base md:text-lg">CURRENT LOCATION</h3>
            <p class="text-gray-600 text-sm md:text-base">Kenya (+254)</p>
          </div>
          <div>
            <h3 class="font-bold text-base md:text-lg">STATUS</h3>
            <p class="text-green-600 text-sm md:text-base">Available for investigations</p>
          </div>
          <div>
            <h3 class="font-bold text-base md:text-lg">RESPONSE TIME</h3>
            <p class="text-gray-600 text-sm md:text-base">24-48 hours</p>
          </div>
          <div>
            <h3 class="font-bold text-base md:text-lg">TIMEZONE</h3>
            <p class="text-gray-600 text-sm md:text-base">EAT (UTC+3)</p>
          </div>
        </div>
      </div>

      <div>
        <h2 class="text-xl md:text-2xl font-special mb-3 md:mb-4 uppercase">
          Communication Channels
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 font-lora">
          <a
            href="https://wa.me/254759793284"
            target="_blank"
            class="bg-paper p-3 md:p-4 border border-gray-300 rounded hover:shadow-md transition-shadow"
          >
            <h3 class="font-bold text-base md:text-lg uppercase">💬 Direct Message</h3>
            <p class="text-gray-600 text-sm md:text-base">Primary Channel</p>
          </a>

          <a
            href="mailto:joelegbertdev@gmail.com?subject=Case%20Inquiry&body=Hello,%20I%20would%20like%20to%20discuss%20a%20potential%20project."
            class="bg-paper p-3 md:p-4 border border-gray-300 rounded hover:shadow-md transition-shadow"
          >
            <h3 class="font-bold text-base md:text-lg uppercase">📧 Encrypted Message</h3>
            <p class="text-gray-600 text-sm md:text-base">Formal Inquiries</p>
          </a>

          <a
            href="https://github.com/egbertdev"
            target="_blank"
            class="bg-paper p-3 md:p-4 border border-gray-300 rounded hover:shadow-md transition-shadow"
          >
            <h3 class="font-bold text-base md:text-lg uppercase">💻 Source Files</h3>
            <p class="text-gray-600 text-sm md:text-base">Repository Access</p>
          </a>

          <a
            href="https://www.tiktok.com/@egbert_joel"
            target="_blank"
            class="bg-paper p-3 md:p-4 border border-gray-300 rounded hover:shadow-md transition-shadow"
          >
            <h3 class="font-bold text-base md:text-lg uppercase">🎬 Observe Subject</h3>
            <p class="text-gray-600 text-sm md:text-base">Content & Updates</p>
          </a>
        </div>
      </div>

      <div class="text-center border-t border-gray-300 pt-4 md:pt-6">
        <p class="font-lora text-base md:text-lg mb-3 md:mb-4">
          Ready to discuss your next investigation?
        </p>
        <a
          href="https://wa.me/254759793284"
          target="_blank"
          class="bg-red-800 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg font-special text-sm md:text-base hover:bg-red-700 transition-colors inline-block uppercase tracking-widest"
        >
          Initiate Contact
        </a>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue'
</script>
