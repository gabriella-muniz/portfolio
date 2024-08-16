<template>
  <section id="home" class="bg-[#F4F6F9] grid grid-cols-1 md:grid-cols-2 items-center py-[5%] px-[8%] min-h-[60vh]">
    <!-- Texto à esquerda -->
    <div class="h-full flex flex-col justify-center text-center md:text-left">
      <h1 class="text-[#3A3A3D] text-[2rem] sm:text-[2.8rem] uppercase tracking-widest font-bold leading-tight font-font">
        OLÁ, MEU NOME É GABRIELLA MUNIZ
      </h1>
      <p class="text-[#3A3A3D] text-[1.2rem] sm:text-[1.4rem] leading-relaxed my-[20px] sm:my-[30px] font-font2 font-medium">
        Sou apaixonada pelo mundo da programação e design de interfaces digitais. Desenvolvedora Front End formada.
      </p>
      <div class="flex justify-center md:justify-start">
        <a class="bg-[#3A3A3D] text-[#F4F6F9] py-[1rem] sm:py-[1.2rem] px-[2.5rem] sm:px-[3.5rem] text-[0.9rem] sm:text-[1rem] uppercase tracking-wider font-bold rounded-lg shadow-md transition-transform transform hover:translate-y-[-5px] font-font" href="#project">
          PROJETOS
        </a>
      </div>
    </div>
    <!-- Imagem à direita -->
    <div class="h-full flex justify-center items-center mt-8 md:mt-0">
      <img src="../assets/foto.png" alt="Gabriella Muniz" class="rounded-lg w-full max-w-[300px] sm:max-w-[400px] md:max-w-[600px]">
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeInicial'
}
</script>
