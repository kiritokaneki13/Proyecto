<template>
  <div class="welcome-container" v-if="showWelcome">
    <h1>Bienvenido a nuestra aplicación</h1>
    <p>Por favor, elige una opción:</p>
    <div class="buttons">
      <button @click="goToLogin" class="button-login">Iniciar Sesión</button>
      <button @click="goToRegister" class="button-register">Registrarse</button>
    </div>
    <div class="buttons"> <!-- Usando la misma estructura -->
      <button @click="goToPassenger" class="button-passenger">Soy pasajero</button>
    </div>
  </div>
  <router-view v-else></router-view>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      showWelcome: true
    }
  },
  watch: {
    '$route'(to) {
      // Muestra el welcome si la ruta es "/"
      this.showWelcome = to.path === '/';
    }
  },
  methods: {
    goToLogin() {
      this.$router.push({ name: 'login' });
    },
    goToRegister() {
      this.$router.push({ name: 'register' });
    },
    goToPassenger() {
      this.$router.push({ name: 'pasajero' });
    }
  }
}
</script>

<style>
/* Estilos globales */
html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

/* Contenedor principal */
.welcome-container {
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centrado vertical */
  align-items: center; /* Centrado horizontal */
  height: 100%;
  width: 100%;
  background: linear-gradient(to bottom right, #42a5f5, #66bb6a); /* Fondo dinámico */
  color: #ffffff;
  font-family: 'Poppins', sans-serif;
  text-align: center;
}

/* Título */
h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3); /* Sombra ligera */
}

/* Texto */
p {
  font-size: 1.5rem;
  margin-bottom: 30px;
}

/* Botones */
.buttons {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

.button-login, .button-register, .button-passenger {
  padding: 12px 25px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  transition: transform 0.2s, box-shadow 0.3s;
  color: white;
}

.button-login {
  background-color: #64b5f6; /* Azul vibrante */
}

.button-register {
  background-color: #81c784; /* Verde vibrante */
}

.button-passenger {
  background-color: #ffb74d; /* Naranja vibrante */
}

.button-login:hover, .button-register:hover, .button-passenger:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>