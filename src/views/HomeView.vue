<script>
export default {
  data() {
    return {
      username: ''
    }
  },
  methods: {
    iniciar() {
      this.$router.push({
        path: '/chats',
        query: {
          variable1: 1
        },
        replace: true
      }) // thus.$router.replace('/chat')
    }
    
  }
}
</script>

<template>
  <main>
    <h3>Introduce tu nombre de usuario</h3>
    <input type="text" placeholder="username" v-model="username">
    <button @click="iniciar">Iniciar Sesion</button>
  </main>
</template>
