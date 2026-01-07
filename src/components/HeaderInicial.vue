<template>
  <header class="bg-[#1A1E23] flex justify-end items-center px-8 py-4 font-mono fixed top-0 left-0 right-0 z-50">
    <!-- Botão hambúrguer ou X para telas pequenas -->
    <button @click="toggleMenu" class="md:hidden block focus:outline-none absolute right-4 top-4">
      <svg v-if="!isOpen" class="h-6 w-6 text-[#12F7D6]" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
      <svg v-else class="h-6 w-6 text-[#12F7D6]" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>

    <!-- Menu -->
    <nav :class="isOpen ? 'block' : 'hidden'" class="md:flex md:items-center md:space-x-6 w-full md:w-auto">
      <ul :class="{'md:flex md:space-x-6 flex flex-row': true}" class="font-medium text-center">
        <li>
          <a :class="{'text-xs': isOpen, 'text-base': !isOpen}" class="block px-5 py-2 text-[#12F7D6] text-[1.5rem]" href="#home">Início</a>
        </li>
        <li>
          <a :class="{'text-xs': isOpen, 'text-base': !isOpen}" class="block px-5 py-2 text-[#12F7D6] text-[1.5rem]" href="#about">Sobre</a>
        </li>
        <li>
          <a :class="{'text-xs': isOpen, 'text-base': !isOpen}" class="block px-5 py-2 text-[#12F7D6] text-[1.5rem]" href="#project">Projetos</a>
        </li>
        <li>
          <a :class="{'text-xs': isOpen, 'text-base': !isOpen}" class="block px-5 py-2 text-[#12F7D6] text-[1.5rem]" href="#contact">Contato</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderInicial',
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
