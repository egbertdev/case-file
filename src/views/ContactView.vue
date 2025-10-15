<template>
  <MainLayout>
    <h1 class="text-4xl font-special mb-8">CONTACT PROTOCOLS</h1>

    <div class="space-y-8">
      <!-- Status Card -->
      <div class="bg-paper border border-gray-300 rounded-lg p-6 font-lora">
        <h2 class="text-2xl font-special mb-4">OPERATIONAL STATUS</h2>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <h3 class="font-bold text-lg">CURRENT LOCATION</h3>
            <p class="text-gray-600">Nairobi, Kenya</p>
          </div>
          <div>
            <h3 class="font-bold text-lg">STATUS</h3>
            <p class="text-green-600">Available for investigations</p>
          </div>
          <div>
            <h3 class="font-bold text-lg">RESPONSE TIME</h3>
            <p class="text-gray-600">24-48 hours</p>
          </div>
          <div>
            <h3 class="font-bold text-lg">TIMEZONE</h3>
            <p class="text-gray-600">EAT (UTC+3)</p>
          </div>
        </div>
      </div>

      <!-- Communication Channels -->
      <div>
        <h2 class="text-2xl font-special mb-4">COMMUNICATION CHANNELS</h2>
        <div class="grid grid-cols-3 gap-4 font-lora">
          <a
            href="mailto:your-email@example.com"
            class="bg-paper p-4 border border-gray-300 rounded hover:shadow-md transition-shadow"
          >
            <h3 class="font-bold text-lg">📧 ENCRYPTED MESSAGE</h3>
            <p class="text-gray-600">Primary Channel</p>
          </a>

          <a
            href="https://wa.me/your-number"
            class="bg-paper p-4 border border-gray-300 rounded hover:shadow-md transition-shadow"
          >
            <h3 class="font-bold text-lg">💬 DIRECT MESSAGE</h3>
            <p class="text-gray-600">Urgent Matters</p>
          </a>

          <a
            href="https://tiktok.com/@your-profile"
            class="bg-paper p-4 border border-gray-300 rounded hover:shadow-md transition-shadow"
          >
            <h3 class="font-bold text-lg">🎬 OBSERVE SUBJECT</h3>
            <p class="text-gray-600">Content & Updates</p>
          </a>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center border-t border-gray-300 pt-6">
        <p class="font-lora text-lg mb-4">Ready to discuss your next investigation?</p>
        <a
          href="mailto:your-email@example.com"
          class="bg-red-800 text-white px-8 py-3 rounded-lg font-special hover:bg-red-700 transition-colors inline-block"
        >
          INITIATE CONTACT
        </a>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue'
</script>
