<template>
  <section id="about" class="py-[10%] px-[5%] bg-[#222831] border-t border-[#00adb5]">
    <div class="section-about pt-16 md:pt-2 ">
      <h2 class="text-[2rem] sm:text-[2.6rem] uppercase tracking-[3px] font-bold text-center relative mb-[30px] sm:mb-[50px] text-[#F4F6F9] font-font">
        SOBRE MIM
      </h2>
      <p class="text-center block text-[#00adb5] text-[1.2rem] sm:text-[1.4rem] font-medium mx-[2rem] sm:mx-[6rem] md:mx-[10rem] leading-[1.6] font-font2">
        Agora você terá a oportunidade de descobrir um pouco mais a meu respeito.
      </p>

      <div class="px-[2%] sm:px-[5%] grid grid-cols-1 md:grid-cols-2 gap-[20px] sm:gap-[60px] text-left pt-[30px] sm:pt-[52px] pl-[10px]">
        <div>
          <h3 class="font-bold text-[1.5rem] sm:text-[1.8rem] text-[#F4F6F9] mb-[20px] sm:mb-[30px] font-font">
            Get to know me!
          </h3>
          <p class="text-[1.1rem] sm:text-[1.2rem] text-[#F4F6F9] leading-[1.7] font-font2 mb-[10px]">
            Me chamo <strong class="text-[#00adb5]">Gabriella Muniz</strong>, tenho 24 anos e moro em Recife-PE. Sou Formanda em Análise e Desenvolvimento de Sistemas e <strong class="text-[#00adb5]">Desenvolvedora Front End formada pela Softex Pernambuco</strong>, além de ser formada em Soluções de <strong class="text-[#00adb5]">TechDesing pela CESAR School</strong>.
          </p>

          <p class="text-[1.1rem] sm:text-[1.2rem] text-[#F4F6F9] leading-[1.7] font-font2">
            Meu objetivo é contribuir para a criação de interfaces digitais que não apenas sejam visualmente atraentes, mas também altamente funcionais e acessíveis a todos os usuários. Quero criar <strong class="text-[#00adb5]">soluções que tornem a experiência online mais agradável e eficiente.</strong>
          </p>
          <a class="bg-[#00adb5] text-[#F4F6F9] py-[1rem] sm:py-[1.2rem] px-[2.5rem] sm:px-[3.5rem] text-[0.9rem] sm:text-[1rem] uppercase tracking-wider font-bold rounded-lg shadow-md transition-transform transform hover:translate-y-[-5px] inline-block mt-[20px] sm:mt-[30px] font-font" href="#project">
            PROJETOS
          </a>
        </div>

        <div class="font-font">
          <h3 class="font-bold text-[1.5rem] sm:text-[1.8rem] text-[#F4F6F9] mb-[20px] sm:mb-[30px] ">
            Minhas Habilidades
          </h3>
          <ul class="flex flex-wrap">
            <li class="py-[0.8rem] sm:py-[1rem] px-[1.5rem] sm:px-[2rem] mb-[1rem] mr-[1rem] bg-[#00adb5] rounded-[5px] font-semibold text-[#F4F6F9]">HTML</li>
            <li class="py-[0.8rem] sm:py-[1rem] px-[1.5rem] sm:px-[2rem] mb-[1rem] mr-[1rem] bg-[#00adb5] rounded-[5px] font-semibold text-[#F4F6F9]">CSS</li>
            <li class="py-[0.8rem] sm:py-[1rem] px-[1.5rem] sm:px-[2rem] mb-[1rem] mr-[1rem] bg-[#00adb5] rounded-[5px] font-semibold text-[#F4F6F9]">JavaScript</li>
            <li class="py-[0.8rem] sm:py-[1rem] px-[1.5rem] sm:px-[2rem] mb-[1rem] mr-[1rem] bg-[#00adb5] rounded-[5px] font-semibold text-[#F4F6F9]">Git</li>
            <li class="py-[0.8rem] sm:py-[1rem] px-[1.5rem] sm:px-[2rem] mb-[1rem] mr-[1rem] bg-[#00adb5] rounded-[5px] font-semibold text-[#F4F6F9]">React</li>
            <li class="py-[0.8rem] sm:py-[1rem] px-[1.5rem] sm:px-[2rem] mb-[1rem] mr-[1rem] bg-[#00adb5] rounded-[5px] font-semibold text-[#F4F6F9]">Vue.js</li>
            <li class="py-[0.8rem] sm:py-[1rem] px-[1.5rem] sm:px-[2rem] mb-[1rem] mr-[1rem] bg-[#00adb5] rounded-[5px] font-semibold text-[#F4F6F9]">Golang</li>
            <li class="py-[0.8rem] sm:py-[1rem] px-[1.5rem] sm:px-[2rem] mb-[1rem] mr-[1rem] bg-[#00adb5] rounded-[5px] font-semibold text-[#F4F6F9]">Node.js</li>
            <li class="py-[0.8rem] sm:py-[1rem] px-[1.5rem] sm:px-[2rem] mb-[1rem] mr-[1rem] bg-[#00adb5] rounded-[5px] font-semibold text-[#F4F6F9]">Tailwind</li>
            <li class="py-[0.8rem] sm:py-[1rem] px-[1.5rem] sm:px-[2rem] mb-[1rem] mr-[1rem] bg-[#00adb5] rounded-[5px] font-semibold text-[#F4F6F9]">PostgreSQL</li>
            <li class="py-[0.8rem] sm:py-[1rem] px-[1.5rem] sm:px-[2rem] mb-[1rem] mr-[1rem] bg-[#00adb5] rounded-[5px] font-semibold text-[#F4F6F9]">Bootstrap</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutInicial",
};
</script>

<style scoped>
p {
  font-size: 1.4rem;
}
</style>
