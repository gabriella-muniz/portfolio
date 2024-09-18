<template>
  <section id="project" class="py-[10%] px-[5%] bg-[#222831] border-t border-[#00adb5]">
    <h2
      class="text-[2rem] sm:text-[2.6rem] uppercase tracking-[3px] font-bold text-center relative mb-[30px] sm:mb-[50px] text-[#F4F6F9] pt-16 md:pt-2 font-font"
    >
      PROJETOS
    </h2>
    <p
      class="text-center block text-[#00adb5] text-[1.2rem] sm:text-[1.4rem] font-medium mx-[2rem] sm:mx-[6rem] md:mx-[10rem] leading-[1.6] font-font2"
    >
      É um prazer tê-lo aqui. Sinta-se à vontade para explorar os projetos que desenvolvi ao longo
      da minha jornada para me tornar uma Programadora Front-End.
    </p>

    <ul
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] sm:gap-[30px] justify-items-center mt-[50px] sm:mt-[100px]"
    >

    <!-- Projeto 1 -->
    <li
        class="bg-[#2c323b] flex flex-col justify-between items-center w-full max-w-[300px] sm:max-w-[350px] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105"
      >
        <div class="h-[150px] sm:h-[200px] overflow-hidden">
          <video autoplay loop muted playsinline class="video-background">
            <source :src="videoSrc" type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </div>
        <div class="p-4 sm:p-6 flex flex-col gap-[15px] sm:gap-[20px] text-center flex-grow">
          <h3 class="font-bold text-[1.5rem] sm:text-[1.8rem] text-[#00adb5] font-font">
            Reading Diary
          </h3>
          <p
            class="text-[1rem] sm:text-[1.2rem] text-[#F4F6F9] leading-[1.7]  font-font2"
          >
          Um espaço digital onde você pode registrar todos os livros que já leu, compartilhar suas opiniões e planejar suas próximas leituras. Com o Diário de Leitura, você pode definir metas de leitura, acompanhar seu progresso e criar uma lista de desejos literária!
          </p>
        </div>
        <a
          class="bg-[#00adb5] text-[#F4F6F9] py-2 sm:py-3 px-4 sm:px-6 text-xs sm:text-sm uppercase tracking-wider font-bold rounded-md shadow-lg transition-transform duration-300 hover:translate-y-[-5px] mb-4 sm:mb-6 font-font"
          href="https://gabriella-muniz.github.io/reading-diary/"
          target="_blank"
        >
          Acesse Aqui
        </a>
      </li>
      <!-- Projeto 2 -->
      <li
        class="bg-[#2c323b] flex flex-col justify-between items-center w-full max-w-[300px] sm:max-w-[350px] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105"
      >
        <div class="h-[150px] sm:h-[200px] overflow-hidden">
          <video autoplay loop muted playsinline class="video-background">
            <source :src="videoSrc" type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </div>
        <div class="p-4 sm:p-6 flex flex-col gap-[15px] sm:gap-[20px] text-center flex-grow">
          <h3 class="font-bold text-[1.5rem] sm:text-[1.8rem] text-[#00adb5] font-font">Catpédia</h3>
          <p
            class="text-[1rem] sm:text-[1.2rem] text-[#F4F6F9] leading-[1.7]  font-font2"
          >
            Catpédia é um aplicativo web simples criado para exibir informações sobre raças de gatos
            diferentes. As informações são obtidas de uma API pública de gatos
            (The Cat API). O objetivo é consumir essa API e exibir os dados em uma página
            da web de forma clara e organizada, incluindo gráficos de análise.
          </p>
        </div>
        <a
          class="bg-[#00adb5] text-[#F4F6F9] py-2 sm:py-3 px-4 sm:px-6 text-xs sm:text-sm uppercase tracking-wider font-bold rounded-md shadow-lg transition-transform duration-300 hover:translate-y-[-5px] mb-4 sm:mb-6 font-font"
          href="https://gabriella-muniz.github.io/catpedia/"
          target="_blank"
        >
          Acesse Aqui
        </a>
      </li>

      <!-- Projeto 3 -->
      <li
        class="bg-[#2c323b] flex flex-col justify-between items-center w-full max-w-[300px] sm:max-w-[350px] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105"
      >
        <div class="h-[150px] sm:h-[200px] overflow-hidden">
          <video autoplay loop muted playsinline class="video-background">
            <source :src="videoSrc" type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </div>
        <div class="p-4 sm:p-6 flex flex-col gap-[15px] sm:gap-[20px] text-center flex-grow">
          <h3 class="font-bold text-[1.5rem] sm:text-[1.8rem] text-[#00adb5] font-font">
            Projeto Calculadora
          </h3>
          <p
            class="text-[1rem] sm:text-[1.2rem] text-[#F4F6F9] leading-[1.7] font-font2"
          >
            Criação de uma calculadora simples utilizando HTML, CSS e JavaScript, e também utilizei
            a biblioteca Bootstrap. Esta calculadora possui uma interface amigável e responsiva para
            realizar cálculos básicos. 
          </p>
        </div>
        <a
          class="bg-[#00adb5] text-[#F4F6F9] py-2 sm:py-3 px-4 sm:px-6 text-xs sm:text-sm uppercase tracking-wider font-bold rounded-md shadow-lg transition-transform duration-300 hover:translate-y-[-5px] mb-4 sm:mb-6 font-font"
          href="https://gabriella-muniz.github.io/calculadora/"
          target="_blank"
        >
          Acesse Aqui
        </a>
      </li>

      <!-- Projeto 4 -->
      <li
        class="bg-[#2c323b] flex flex-col justify-between items-center w-full max-w-[300px] sm:max-w-[350px] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105"
      >
        <div class="h-[150px] sm:h-[200px] overflow-hidden">
          <video autoplay loop muted playsinline class="video-background">
            <source :src="videoSrc" type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </div>
        <div class="p-4 sm:p-6 flex flex-col gap-[15px] sm:gap-[20px] text-center flex-grow">
          <h3 class="font-bold text-[1.5rem] sm:text-[1.8rem] text-[#00adb5] font-font">
            Catálogo de Filmes
          </h3>
          <p
            class="text-[1rem] sm:text-[1.2rem] text-[#F4F6F9] leading-[1.7]  font-font2"
          >
            Esse projeto consiste em um catálogo de filmes, desenvolvido usando tecnologias web
            modernas, como HTML, CSS e JavaScript. neste projeto
            foram: a) Tags semânticas HTML; b) CSS Grid; c) CSS Flexbox; d) Media Queries para
            garantir responsividade.
          </p>
        </div>
        <a
          class="bg-[#00adb5] text-[#F4F6F9] py-2 sm:py-3 px-4 sm:px-6 text-xs sm:text-sm uppercase tracking-wider font-bold rounded-md shadow-lg transition-transform duration-300 hover:translate-y-[-5px] mb-4 sm:mb-6 font-font"
          href="https://gabriella-muniz.github.io/movie-on/"
          target="_blank"
        >
          Acesse Aqui
        </a>
      </li>

       <!-- Projeto 5 -->
       <li
        class="bg-[#2c323b] flex flex-col justify-between items-center w-full max-w-[300px] sm:max-w-[350px] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105"
      >
        <div class="h-[150px] sm:h-[200px] overflow-hidden">
          <video autoplay loop muted playsinline class="video-background">
            <source :src="videoSrc" type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </div>
        <div class="p-4 sm:p-6 flex flex-col gap-[15px] sm:gap-[20px] text-center flex-grow">
          <h3 class="font-bold text-[1.5rem] sm:text-[1.8rem] text-[#00adb5] font-font">
            Encontre o número (Jogo)
          </h3>
          <p
            class="text-[1rem] sm:text-[1.2rem] text-[#F4F6F9] leading-[1.7]  font-font2"
          >
          Nesse projeto o usuário tenta adivinhar um número entre 1 e 20. O jogo dá dicas se o número é maior ou menor do que o número correto e mostra o total de tentativas até o acerto. O jogo foi criado com HTML, CSS e Javascript.
          </p>
        </div>
        <a
          class="bg-[#00adb5] text-[#F4F6F9] py-2 sm:py-3 px-4 sm:px-6 text-xs sm:text-sm uppercase tracking-wider font-bold rounded-md shadow-lg transition-transform duration-300 hover:translate-y-[-5px] mb-4 sm:mb-6 font-font"
          href="https://gabriella-muniz.github.io/jogo-encontre-o-numero/"
          target="_blank"
        >
          Acesse Aqui
        </a>
      </li>

       <!-- Projeto 6 -->
       <li
        class="bg-[#2c323b] flex flex-col justify-between items-center w-full max-w-[300px] sm:max-w-[350px] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105"
      >
        <div class="h-[150px] sm:h-[200px] overflow-hidden">
          <video autoplay loop muted playsinline class="video-background">
            <source :src="videoSrc" type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </div>
        <div class="p-4 sm:p-6 flex flex-col gap-[15px] sm:gap-[20px] text-center flex-grow">
          <h3 class="font-bold text-[1.5rem] sm:text-[1.8rem] text-[#00adb5] font-font">
            Meu Primeiro Site
          </h3>
          <p
            class="text-[1rem] sm:text-[1.2rem] text-[#F4F6F9] leading-[1.7]  font-font2"
          >
          Esse projeto foi um desafio proposto pelo Professor Guanabara através do curso HTML 5 e CSS3 do Curso em vídeo.
          </p>
        </div>
        <a
          class="bg-[#00adb5] text-[#F4F6F9] py-2 sm:py-3 px-4 sm:px-6 text-xs sm:text-sm uppercase tracking-wider font-bold rounded-md shadow-lg transition-transform duration-300 hover:translate-y-[-5px] mb-4 sm:mb-6 font-font"
          href="https://gabriella-muniz.github.io/desafio1-html-css/"
          target="_blank"
        >
          Acesse Aqui
        </a>
      </li>

      
    </ul>
  </section>
</template>

<script>
import videoSrc from '../assets/projetos.mp4';

export default {
  name: 'ProjetosInicial',
  data() {
    return {
      videoSrc 
    }
  }
}
</script>

<style scoped>
.video-background {
  width: 500px; 
  height: 190px; 
  object-fit: cover; 
}
</style>
