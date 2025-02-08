<template>
  <div class="relative flex items-center justify-center h-[35vh] text-center px-6">
    <div
      class="absolute inset-0 bg-gradient-to-r from-[#f3f4f6] via-[#e5e7eb] to-[#f3f4f6] dark:from-[#111827] dark:via-[#1f2937] dark:to-[#111827]"
    ></div>

    <div class="relative z-10 max-w-4xl">
      <h1
        class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center leading-[1.3] text-transparent animate-gradient-text"
      >
        Organizing projects to simplify your workflow
      </h1>
    </div>
  </div>
</template>

<style scoped>
@keyframes gradientText {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

.animate-gradient-text {
  background: linear-gradient(90deg, #1f2937, #4b5563, #6b7280);
  background-size: 400% 100%;
  background-clip: text;
  color: transparent;
  animation: gradientText 20s linear infinite;
}
</style>
