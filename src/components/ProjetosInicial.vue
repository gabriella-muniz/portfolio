<template>
  <section id="project" class="py-[10%] px-[5%] bg-[#F4F6F9]">
    <h2 class="text-[2rem] sm:text-[2.6rem] uppercase tracking-[3px] font-bold text-center relative mb-[30px] sm:mb-[50px] text-[#3A3A3D]">
      PROJETOS
    </h2>
    <p class="text-center block text-[#222222] text-[1.2rem] sm:text-[1.4rem] font-medium mx-[2rem] sm:mx-[6rem] md:mx-[10rem] leading-[1.6] font-font2">
      Olá, é um prazer tê-lo aqui. Sinta-se à vontade para explorar os projetos que desenvolvi ao longo da minha jornada para me tornar uma Programadora Front-End.
    </p>

    <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] sm:gap-[30px] justify-items-center mt-[50px] sm:mt-[100px]">
      <!-- Projeto 1 -->
      <li class="flex flex-col justify-between items-center w-full max-w-[300px] sm:max-w-[350px] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105">
        <div class="h-[150px] sm:h-[200px] overflow-hidden">
          <img class="w-full h-full object-cover" src="../assets/projetos.png" alt="Catpédia Project" />
        </div>
        <div class="p-4 sm:p-6 flex flex-col gap-[15px] sm:gap-[20px] text-center flex-grow">
          <h3 class="font-bold text-[1.5rem] sm:text-[1.8rem] text-[#3A3A3D]">Catpédia</h3>
          <p class="text-[1rem] sm:text-[1.2rem] text-[rgb(34,34,34)] leading-[1.7] text-justify font-font2">
            Catpédia é um aplicativo web simples criado para exibir informações sobre raças de gatos diferentes. As informações são obtidas de uma API pública de gatos (https://thecatapi.com/). O objetivo é consumir essa API e exibir os dados em uma página da web de forma clara e organizada, incluindo gráficos de análise.
          </p>
        </div>
        <a class="bg-[#3A3A3D] text-[#F4F6F9] py-2 sm:py-3 px-4 sm:px-6 text-xs sm:text-sm uppercase tracking-wider font-bold rounded-md shadow-lg transition-transform duration-300 hover:translate-y-[-5px] mb-4 sm:mb-6" href="https://gabriella-muniz.github.io/catpedia/" target="_blank">
          Acesse Aqui
        </a>
      </li>

      <!-- Projeto 2 -->
      <li class="flex flex-col justify-between items-center w-full max-w-[300px] sm:max-w-[350px] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105">
        <div class="h-[150px] sm:h-[200px] overflow-hidden">
          <img class="w-full h-full object-cover" src="../assets/projetos.png" alt="Projeto Calculadora" />
        </div>
        <div class="p-4 sm:p-6 flex flex-col gap-[15px] sm:gap-[20px] text-center flex-grow">
          <h3 class="font-bold text-[1.5rem] sm:text-[1.8rem] text-[#3A3A3D]">Projeto Calculadora</h3>
          <p class="text-[1rem] sm:text-[1.2rem] text-[rgb(34,34,34)] leading-[1.7] text-justify font-font2">
            Criação de uma calculadora simples utilizando HTML, CSS e JavaScript, e também utilizei a biblioteca Bootstrap. Esta calculadora possui uma interface amigável e responsiva para realizar cálculos básicos. Os números e operadores são apresentados em botões Bootstrap, e o resultado é exibido em um campo de entrada de texto.
          </p>
        </div>
        <a class="bg-[#3A3A3D] text-[#F4F6F9] py-2 sm:py-3 px-4 sm:px-6 text-xs sm:text-sm uppercase tracking-wider font-bold rounded-md shadow-lg transition-transform duration-300 hover:translate-y-[-5px] mb-4 sm:mb-6" href="https://gabriella-muniz.github.io/calculadora/" target="_blank">
          Acesse Aqui
        </a>
      </li>

      <!-- Projeto 3 -->
      <li class="flex flex-col justify-between items-center w-full max-w-[300px] sm:max-w-[350px] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105">
        <div class="h-[150px] sm:h-[200px] overflow-hidden">
          <img class="w-full h-full object-cover" src="../assets/projetos.png" alt="Catálogo de Filmes" />
        </div>
        <div class="p-4 sm:p-6 flex flex-col gap-[15px] sm:gap-[20px] text-center flex-grow">
          <h3 class="font-bold text-[1.5rem] sm:text-[1.8rem] text-[#3A3A3D]">Catálogo de Filmes</h3>
          <p class="text-[1rem] sm:text-[1.2rem] text-[rgb(34,34,34)] leading-[1.7] text-justify font-font2">
            Esse projeto consiste em um catálogo de filmes, desenvolvido usando tecnologias web modernas, como HTML, CSS e JavaScript. A plataforma foi criada para aprimoramento das minhas habilidades com tais tecnologias. Outros conceitos envolvidos neste projeto foram: a) Tags semânticas HTML; b) CSS Grid; c) CSS Flexbox; d) Media Queries para garantir responsividade.
          </p>
        </div>
        <a class="bg-[#3A3A3D] text-[#F4F6F9] py-2 sm:py-3 px-4 sm:px-6 text-xs sm:text-sm uppercase tracking-wider font-bold rounded-md shadow-lg transition-transform duration-300 hover:translate-y-[-5px] mb-4 sm:mb-6" href="https://gabriella-muniz.github.io/movie-on/" target="_blank">
          Acesse Aqui
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'ProjetosInicial',
};
</script>
