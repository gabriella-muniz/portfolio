<template>
  <section 
    id="home"
    class="bg-[#1A1E23] grid grid-cols-1 md:grid-cols-2 items-center px-8 sm:px-20 py-24 min-h-screen font-mono border-t border-[#12F7D6] gap-10"
  >

    <!-- COLUNA ESQUERDA (TEXTO) -->
    <div>
      <!-- TAG <h1> -->
      <span class="text-[#12F7D6] text-sm">&lt;h1&gt;</span>

      <h1 class="text-white font-bold leading-[1.1] mb-1 text-4xl sm:text-5xl md:text-6xl">
        Hey<br />
        I'm <span class="text-[#12F7D6]">Gabriella</span>,<br />
        Front-End Developer
      </h1>

      <!-- TAG </h1> -->
      <span class="text-[#12F7D6] block text-sm mb-8">&lt;/h1&gt;</span>

      <!-- TAG <p> -->
      <span class="text-[#12F7D6] text-sm">&lt;p&gt;</span>

      <p class="text-white max-w-2xl text-base sm:text-lg leading-relaxed mb-1">
        Apaixonada por programação e design de interfaces. Minha expertise está em 
        transformar visões criativas em experiências digitais cativantes e funcionais, 
        sempre com um olhar atento à estética e à usabilidade.
      </p>

      <!-- TAG </p> -->
      <span class="text-[#12F7D6] text-sm mb-8">&lt;/p&gt;</span>

      <!-- ÍCONES SOCIAIS -->
      <div class="flex gap-6 text-[1.8rem] text-[#12F7D6] mt-4">
        <a href="https://www.linkedin.com/in/gabriellamaria081199/" target="_blank"><i class="bi bi-linkedin"></i></a>
        <a href="https://github.com/gabriella-muniz" target="_blank"><i class="bi bi-github"></i></a>
        <a href="https://www.instagram.com/gaabimunizz/" target="_blank"><i class="bi bi-instagram"></i></a>
      </div>
    </div>

    <!-- COLUNA DIREITA (IMAGEM) -->
   <div class="flex justify-center items-center">

      <img 
        src="../assets/fotooficial.jpg" 
        alt="Gabriella Muniz" 
        class="
      rounded-2xl w-full max-w-[300px] sm:max-w-[200px] md:max-w-[400px]"
      >
    </div>

  </section>
</template>

<script>
export default {
  name: 'HomeCentral'
}
</script>
