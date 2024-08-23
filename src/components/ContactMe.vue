<template>
    <section id="contact" class="bg-[#222831] min-h-screen flex items-center justify-center py-12 px-4 font-font border-t border-[#00adb5]">
      <div class="w-full max-w-4xl bg-[#2c323b] rounded-lg shadow-md py-8 px-6">
        <h2 class="text-2xl font-bold mb-4 text-[#00adb5]">Entre em Contato</h2>
        <form @submit.prevent="sendEmail" class="space-y-4">
          <div>
            <label for="name" class="block text-sm font-medium text-[#00adb5]">Nome:</label>
            <input
              type="text"
              id="name"
              v-model="name"
              required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-[#00adb5]">Email:</label>
            <input
              type="email"
              id="email"
              v-model="email"
              required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
          </div>
          <div>
            <label for="message" class="block text-sm font-medium text-[#00adb5]">Mensagem:</label>
            <textarea
              id="message"
              v-model="message"
              required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full bg-[#00adb5] text-white py-2 px-4 rounded-md shadow-sm hover:bg-[#5A5A5D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  </template>
  
  <script>
  import emailjs from 'emailjs-com';
  
  export default {
    data() {
      return {
        name: '',
        email: '',
        message: ''
      };
    },
    methods: {
      // Método para enviar o e-mail usando emailjs
      sendEmail() {
        emailjs.send('service_dawmlok', 'template_kbkjsut', {
          from_name: this.name,
          from_email: this.email,
          message: this.message
        }, 'E2VWYuuKq0TdFkGD1')
        .then(() => {
          // Exibe um alerta se o e-mail for enviado com sucesso
          alert('Email enviado com sucesso!');
          // Limpa os campos do formulário
          this.name = '';
          this.email = '';
          this.message = '';
        }, () => {
          // Exibe um alerta se houver uma falha no envio do e-mail
          alert('Falha ao enviar o e-mail.');
        });
      }
    }
  };
  </script>
  
  
  