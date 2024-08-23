<template>
  <header class="bg-[#222831] flex justify-center items-center px-8 py-4 font-font fixed top-0 left-0 right-0 z-50">
    <!-- Botão hambúrguer ou X para telas pequenas -->
    <button @click="toggleMenu" class="md:hidden block focus:outline-none absolute right-4 top-4">
      <svg v-if="!isOpen" class="h-6 w-6 text-[#00adb5]" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
      <svg v-else class="h-6 w-6 text-[#00adb5]" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>

    <!-- Menu -->
    <nav :class="isOpen ? 'block' : 'hidden'" class="md:flex md:items-center md:space-x-6 w-full md:w-auto">
      <ul :class="{'md:flex md:space-x-6 flex flex-row': true}" class="font-bold text-center">
        <li>
          <a :class="{'text-xs': isOpen, 'text-sm': !isOpen}" class="block px-5 py-2 text-[#F4F6F9] hover:text-[#00adb5] text-[1.5rem]" href="#home">INÍCIO</a>
        </li>
        <li>
          <a :class="{'text-xs': isOpen, 'text-sm': !isOpen}" class="block px-5 py-2 text-[#F4F6F9] hover:text-[#00adb5] text-[1.5rem]" href="#about">SOBRE</a>
        </li>
        <li>
          <a :class="{'text-xs': isOpen, 'text-sm': !isOpen}" class="block px-5 py-2 text-[#F4F6F9] hover:text-[#00adb5] text-[1.5rem]" href="#project">PROJETOS</a>
        </li>
        <li>
          <a :class="{'text-xs': isOpen, 'text-sm': !isOpen}" class="block px-5 py-2 text-[#F4F6F9] hover:text-[#00adb5] text-[1.5rem]" href="#contact">CONTATO</a>
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
      isOpen: false, // Controla a abertura do menu em telas pequenas
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
/* Adicione qualquer estilo adicional necessário */
</style>
