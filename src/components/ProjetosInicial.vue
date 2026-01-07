<template>
  <section id="project" class="py-[6%] px-[5%] bg-[#1A1E23]  border-t border-[#12F7D6] font-mono">
    <h2 class="text-[2rem] sm:text-[2.6rem] uppercase tracking-[3px] font-bold text-center mb-[50px] text-white font-mono ">
      PROJETOS
    </h2>
    <p class="text-center text-white font-mono text-[1.2rem] sm:text-base font-regular mx-[2rem] sm:mx-[6rem] md:mx-[10rem] leading-[1.6] ">
      É um prazer tê-lo aqui. Sinta-se à vontade para explorar os projetos que desenvolvi ao longo da minha jornada para me tornar uma Programadora Front-End.
    </p>

    <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px] mt-[80px] justify-items-center">
      <!-- Projeto -->
      <li
        v-for="(project, index) in projects"
        :key="index"
        class=" w-full max-w-[350px] rounded-xl overflow-hidden shadow-md flex flex-col"
      >
        <!-- Faixa colorida -->
        

        <!-- Conteúdo -->
        <div class="p-6 flex flex-col flex-grow  bg-[#292F36]">
          <!-- Botões -->
          <div class="flex gap-3 mb-4 ">
            <a
              :href="project.code"
              target="_blank"
              class="bg-[#12F7D6] text-black text-sm font-semibold px-4 py-2 rounded-md hover:bg-gray-300 transition"
            >
              <i class="fas fa-code"></i> Code
            </a>
            <a
              :href="project.live"
              target="_blank"
              class=" text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-gray-300 transition border border-[#12F7D6]"
            >
              <i class="fas fa-external-link-alt"></i> Live
            </a>
          </div>

          <!-- Título e Descrição -->
          <h3 class="font-bold text-xl text-white mb-2">{{ project.title }}</h3>
          <p class="text-white text-sm mb-4">{{ project.description }}</p>

          <!-- Tecnologias -->
          <div class="flex flex-wrap gap-2 mt-auto">
            <span
              v-for="(tech, i) in project.technologies"
              :key="i"
              class="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
const projects = [
 {
  title: "Reading Diary",
  description:
    "Um espaço digital onde você pode registrar todos os livros que já leu, compartilhar suas opiniões e planejar suas próximas leituras.",
  code: "https://github.com/gabriella-muniz/reading-diary",
  live: "https://gabriella-muniz.github.io/reading-diary/",
  technologies: ["HTML","Vue.js", "TailwindCSS", "JavaScript", "LocalStorage"],
  headerColor: "bg-gradient-to-r from-blue-500 to-purple-500",
},
{
  title: "Movie Popular",
  description:
    "Aplicação web que permite aos usuários explorar uma coleção de filmes populares divididos por gênero.",
  code: "https://github.com/gabriella-muniz/movie-popular",
  live: "https://gabriella-muniz.github.io/movie-popular/#/",
  technologies: ["HTML", "Vue.js", "TailwindCSS", "JavaScript", "API", "Axios"],
  headerColor: "bg-gradient-to-r from-blue-500 to-purple-500",
},
{
  title: "Valorant Infos",
  description:
    "Aplicação web onde o usuário pode explorar informações sobre agentes, mapas e armas do jogo Valorant, utilizando dados obtidos de uma API.",
  code: "https://github.com/gabriella-muniz/valorant-info",
  live: "https://valorant-info-green.vercel.app/",
  technologies: ["HTML", "Vue.js", "TailwindCSS", "JavaScript", "API", "Axios"],
  headerColor: "bg-gradient-to-r from-blue-500 to-purple-500",
},


  {
    title: "Catpédia",
    description:
      "Aplicativo web simples que consome a The Cat API para mostrar dados de raças de gatos, com gráficos e análise.",
    code: "https://github.com/gabriella-muniz/catpedia",
    live: "https://gabriella-muniz.github.io/catpedia/",
    technologies: ["HTML", "CSS", "JavaScript", "API","Axios", "Chart.js"],
    headerColor: "bg-gradient-to-r from-green-500 to-emerald-600",
  },
  {
    title: "Calculadora",
    description:
      "Calculadora responsiva e funcional feita com HTML, CSS, JavaScript e Bootstrap para operações básicas.",
    code: "https://github.com/gabriella-muniz/calculadora",
    live: "https://gabriella-muniz.github.io/calculadora/",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    headerColor: "bg-gradient-to-r from-pink-500 to-rose-600",
  },
  {
    title: "Catálogo de Filmes",
    description:
      "Projeto de catálogo de filmes com HTML semântico, CSS Grid, Flexbox e responsividade com media queries.",
    code: "https://github.com/gabriella-muniz/movie-on",
    live: "https://gabriella-muniz.github.io/movie-on/",
    technologies: ["HTML", "CSS", "JavaScript"],
    headerColor: "bg-gradient-to-r from-yellow-500 to-orange-600",
  },
  {
    title: "Jogo Encontre o Número",
    description:
      "Jogo interativo em que o usuário tenta adivinhar um número aleatório entre 1 e 20, com dicas e contagem de tentativas.",
    code: "https://github.com/gabriella-muniz/jogo-encontre-o-numero",
    live: "https://gabriella-muniz.github.io/jogo-encontre-o-numero/",
    technologies: ["HTML", "CSS", "JavaScript"],
    headerColor: "bg-gradient-to-r from-indigo-500 to-violet-600",
  },
  {
    title: "Meu Primeiro Site",
    description:
      "Desafio do Curso em Vídeo de HTML5 e CSS3. Estrutura básica de um site com layout simples e boas práticas.",
    code: "https://github.com/gabriella-muniz/desafio1-html-css",
    live: "https://gabriella-muniz.github.io/desafio1-html-css/",
    technologies: ["HTML", "CSS"],
    headerColor: "bg-gradient-to-r from-cyan-500 to-sky-600",
  },
];
</script>


<style scoped>
.video-background {
  width: 500px; 
  height: 190px; 
  object-fit: cover; 
}
</style>
