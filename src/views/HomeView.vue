<template>
  <div class="min-h-screen flex items-center justify-center p-8">
    <div class="relative">
      <!-- Folder Image -->
      <img src="@/assets/closed-folder.png" alt="Case File" class="w-[600px] max-w-full">
      
      <!-- Mugshot -->
      <img src="@/assets/Profile.jpg" alt="Mugshot" 
           class="absolute top-6 right-8 w-32 border-4 border-white rotate-2">

      <!-- Paper Clip -->
      <img src="@/assets/paperclip.png" 
           class="absolute top-4 right-6 w-8 h-auto">

      <!-- Classified Stamp -->
      <div class="absolute top-1/3 left-1/4 transform -rotate-6">
        <div class="border-3 border-red-600 px-6 py-3 inline-block">
          <p class="text-red-600 font-bold text-2xl tracking-widest">CLASSIFIED</p>
        </div>
      </div>
      
      <!-- Open Button -->
      <button class="absolute bottom-8 left-1/2 transform -translate-x-1/2 
                     bg-red-800 text-white px-6 py-3 rounded-lg font-bold font-special
                     hover:bg-red-700 transition-colors cursor-pointer">
        OPEN FILE
      </button>
    </div>
  </div>
</template>