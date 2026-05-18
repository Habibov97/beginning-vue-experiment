<template>
  <header class="bg-white shadow-sm">
    <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
      <div class="text-xl font-semibold text-gray-800">Logo</div>

      <nav class="hidden md:flex space-x-6 text-gray-600 font-medium">
        <router-link to="/" class="hover:text-black transition">Home</router-link>
        <router-link :to="{ name: 'contact' }" class="hover:text-black transition">Contact</router-link>
        <div class="relative group">
          <button class="hover:text-black transition flex items-center gap-1">
            Product
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <!-- Dropdown -->
          <div
            class="absolute left-0 top-full w-44 pt-2 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200"
          >
            <router-link to="/product-list" class="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-t-lg">
              Product List
            </router-link>
            <router-link to="/product" class="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-b-lg">
              Product Details
            </router-link>
          </div>
        </div>
      </nav>

      <div class="hidden md:block">
        <form>
          <router-link
            :to="{ name: 'login' }"
            class="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition cursor-pointer"
            >Login</router-link
          >
        </form>
      </div>
    </div>
  </header>
</template>

<script setup></script>
