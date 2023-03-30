<script setup>

</script>

<template>

  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="." />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + Vue</title>
  </head>

  <div class="app-container">
    <!-- Headerです -->
    <nav>
      <ul class="link">
        <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
        <li><router-link :to="{ name: 'NewPage' }">New Page</router-link></li>
        <li><router-link :to="{ name: 'NewPage2' }">New Page 2</router-link></li>
      </ul>
    </nav>
    <router-view />

  </div>

</template>

<style scoped>

.app-container {
  min-height: 90vh;
  display:flex;
  justify-content: center;
  flex-direction: column;
}

.nav {
  position: fixed;
  top:0;
  width: fit-content;
  border-bottom: 1px solid #eaeaea;
}

.link {
  display:flex;
  justify-content: space-between;
  /* flex-direction: row; */
  width:100%;
}

.link li {
  width: fit-content;
  padding: 8px 24px;
  font-size: 1.2rem;
  list-style: none;
}
</style>