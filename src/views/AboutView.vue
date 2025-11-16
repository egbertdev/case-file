<template>
  <MainLayout>
    <!-- Personnel File Content -->
    <div class="space-y-6 md:space-y-8">
      <!-- Identity Section -->
      <div class="border-b border-gray-300 pb-3 md:pb-4">
        <h1 class="text-3xl md:text-4xl font-special mb-2">IDENTITY</h1>
        <p class="text-lg md:text-xl font-lora"><strong>Name:</strong> Egbert Joel</p>
        <p class="text-lg md:text-xl font-lora"><strong>Title:</strong> Full-Stack Developer</p>
        <p class="text-base md:text-lg font-lora text-gray-600">
          "Solving digital mysteries through clean code and architecture"
        </p>
      </div>

      <!-- History & Motives -->
      <div class="border-b border-gray-300 pb-3 md:pb-4">
        <h2 class="text-2xl md:text-3xl font-special mb-3 md:mb-4">HISTORY & MOTIVES</h2>
        <p class="font-lora text-base md:text-lg leading-relaxed">
          Started investigating code mysteries 3 years ago after discovering a passion for turning
          complex problems into elegant solutions. What began as curiosity about how websites work
          evolved into a full-scale operation into full-stack development. Currently specializing in
          uncovering architectural flaws and building scalable systems that stand up to
          interrogation.
        </p>
      </div>

      <!-- Specialties -->
      <div class="border-b border-gray-300 pb-3 md:pb-4">
        <h2 class="text-2xl md:text-3xl font-special mb-3 md:mb-4">SPECIALTIES</h2>
        <ul class="font-lora text-base md:text-lg space-y-1 md:space-y-2">
          <li>• Problem Solving & Debugging</li>
          <li>• System Architecture Investigation</li>
          <li>• UI/UX Forensics</li>
          <li>• API Integration Decryption</li>
        </ul>
      </div>

      <!-- Background -->
      <div>
        <h2 class="text-2xl md:text-3xl font-special mb-3 md:mb-4">BACKGROUND</h2>
        <p class="font-lora text-base md:text-lg leading-relaxed">
          A background in mechanical engineering, focused on building robust software systems. I
          approach code like a complex machine—every part must fit and function perfectly.
        </p>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue'
</script>
