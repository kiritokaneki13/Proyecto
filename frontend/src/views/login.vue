<template>
  <div class="login-container">
    <h2>Iniciar Sesión</h2>
    <form class="login-form" @submit.prevent="login">
      <div class="form-group">
        <label for="email">Correo Electrónico</label>
        <input v-model="credentials.email" type="email" placeholder="Correo" required />
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input v-model="credentials.password" type="password" placeholder="Contraseña" required />
      </div>
      <button type="submit">Ingresar</button>
    </form>
    <p v-if="message" :class="messageClass">{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      credentials: {
        email: '',
        password: ''
      },
      message: '',
      messageClass: ''
    }
  },
  methods: {
    login() {
      // Aquí iría la lógica para iniciar sesión
      // Por ejemplo, enviar una petición al backend con axios
      console.log('Iniciando sesión con', this.credentials)
      // Ejemplo de manejo:
      // this.$router.push({ path: '/' });
    }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  min-height: 100vh;
  background: linear-gradient(135deg, #b3d9ff, #e6f7ff);
  font-family: 'Poppins', sans-serif;
}

h2 {
  font-size: 28px;
  color: #00509e;
  margin-bottom: 20px;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 400px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-size: 14px;
  font-weight: 600;
  color: #003366;
  margin-bottom: 5px;
}

.form-group input {
  padding: 10px;
  font-size: 14px;
  border: 1px solid #80bfff;
  border-radius: 5px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.form-group input:focus {
  border-color: #0073e6;
  outline: none;
  box-shadow: 0px 0px 5px rgba(0, 115, 230, 0.5);
}

button {
  padding: 12px;
  font-size: 16px;
  background-color: #0073e6;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
  background-color: #005bb5;
  transform: scale(1.05);
}

.success {
  color: #4caf50;
  font-weight: bold;
  margin-top: 10px;
}

.error {
  color: #f44336;
  font-weight: bold;
  margin-top: 10px;
}
</style>