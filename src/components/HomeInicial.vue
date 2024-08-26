<template>
  <section id="home" class="bg-[#222831] grid grid-cols-1 md:grid-cols-2 items-center py-[8%] px-[8%] min-h-[60vh] ">
    <!-- Texto à esquerda -->
    <div class="h-full flex flex-col justify-center text-center md:text-left pt-16 md:pt-0">
      <h1 class="text-[#F4F6F9] text-[2rem] sm:text-[2.8rem] uppercase tracking-widest font-bold leading-tight font-font">
        OLÁ, MEU NOME É GABRIELLA MUNIZ
      </h1>
      <p class="text-[#00adb5] text-[1.2rem] sm:text-[1.4rem] leading-relaxed my-[20px] sm:my-[30px] font-font2 font-medium">
        Desenvolvedora Front End apaixonada por programação e design de interfaces. Minha expertise está em transformar visões criativas em experiências digitais cativantes e funcionais, sempre com um olhar atento à estética e à usabilidade.
      </p>
      <div class="flex justify-center md:justify-start">
        <a class="bg-[#00adb5] text-[#F4F6F9] py-[1rem] sm:py-[1.2rem] px-[2.5rem] sm:px-[3.5rem] text-[0.9rem] sm:text-[1rem] uppercase tracking-wider font-bold rounded-lg shadow-md transition-transform transform hover:translate-y-[-5px] font-font" href="#project">
          PROJETOS
        </a>
      </div>
    </div>
    <!-- Imagem à direita -->
    <div class="h-full flex justify-center items-center mt-8 md:mt-0 pt-16 md:pt-0">
      <img src="../assets/foto2.png" alt="Gabriella Muniz" class="rounded-lg w-full max-w-[300px] sm:max-w-[400px] md:max-w-[600px]">
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeInicial'
}
</script>
