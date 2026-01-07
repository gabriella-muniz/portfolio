<template>
  <section id="about" class="py-20 px-[6%] bg-[#1A1E23]">
    <h2 class="text-[2rem] font-bold font-mono tracking-wide mb-2">
      <span class="text-[#12F7D6]">Sobre Mim</span>
    </h2>

    <p class="text-white text-base mb-4 max-w-xl">
      Agora você terá a oportunidade de descobrir um pouco mais a meu respeito.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-14">

      <!-- COLUNA ESQUERDA -->
      <div>


        <!-- BOX GET TO KNOW ME — alinhamento superior com a coluna direita -->
        <div class="bg-[#292F36] rounded-2xl p-8 shadow-xl font-mono mt-4">

          <span class="text-[#12F7D6] text-sm block mb-1">&lt;h3&gt;</span>
          <h3 class="text-lg text-white font-bold mb-1">Get to know me!</h3>
          <span class="text-[#12F7D6] text-sm block mb-4">&lt;/h3&gt;</span>

          <span class="text-[#12F7D6] text-sm block mb-1">&lt;p&gt;</span>
          <p class="text-[17px] text-white leading-[1.6] font-mono mb-3 max-w-2xl text-justify">
            Me chamo <strong class="text-[#12F7D6]">Gabriella Muniz</strong>, tenho 26 anos e moro em Recife-PE.
            Sou Formanda em Análise e Desenvolvimento de Sistemas e
            <strong class="text-[#12F7D6]">Desenvolvedora Front End formada pela Softex Pernambuco</strong>,
            além de ser formada em Soluções de
            <strong class="text-[#12F7D6]">TechDesign pela CESAR School</strong>.
          </p>
          <span class="text-[#12F7D6] text-sm block mb-3">&lt;/p&gt;</span>

          <span class="text-[#12F7D6] text-sm block mb-1">&lt;p&gt;</span>
          <p class="text-[1.05rem] sm:text-[17px] text-[#F4F6F9] leading-[1.7] font-mono mb-0 max-w-2xl text-justify">
            Meu objetivo é contribuir para soluções inovadoras que elevam a experiência do usuário.
            Gosto de socializar e tenho experiência ensinando e ajudando outras pessoas.
          </p>
          <span class="text-[#12F7D6] text-sm block mt-2">&lt;/p&gt;</span>

        </div>
      </div>


      <!-- COLUNA DIREITA -->
      <div class="flex flex-col gap-6 font-mono">

        <!-- HABILIDADES — agora alinhada com a caixa da esquerda -->
        <div class="bg-[#292F36] rounded-2xl p-8 shadow-xl mt-4">
          <h3 class="text-2xl text-white font-semibold mb-6">Minhas Habilidades</h3>

          <ul class="flex flex-wrap">
            <li v-for="skill in skills" :key="skill"
              class="py-2 px-5 mb-3 mr-3 bg-transparent border border-[#12F7D6] text-white rounded-full font-semibold text-sm">
              {{ skill }}
            </li>
          </ul>
        </div>

        <!-- EXPERIÊNCIA -->
        <div>
          <div class="bg-[#292F36] rounded-xl py-8 px-6 text-center shadow-lg">
            <h3 class="text-[#12F7D6] text-[1.5rem] font-bold">2+</h3>
            <p class="text-white mt-2">Anos de Experiência</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "AboutInicial",
  data() {
    return {
      skills: [
        "HTML", "CSS", "JavaScript", "Git", "GitHub", "Responsive Design", "Bootstrap",
        "Tailwind", "React", "React Native", "Vue.js", "Figma", "UX/UI", "Node.js",
        "API REST", "PostgreSQL", "Golang", "Docker"
      ]
    };
  }
};
</script>
