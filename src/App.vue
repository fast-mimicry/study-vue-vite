<script setup>

</script>

<template>

  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="." />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + Vue</title>
  </head>

  <!-- rootです -->
  <div id="app" class="app-container">

    <!-- ナビゲーションHeaderです -->
    <nav>
      <ul class="header">
        <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
        <li><router-link :to="{ name: 'About' }">About</router-link></li>
        <li><router-link :to="{ name: 'NewPage' }">New Page</router-link></li>
      </ul>
    </nav>

    <!-- 表示ページを返します -->
    <div class="layout">
      <router-view />
    </div>

  </div>

</template>

<style scoped>

/* root-containerのスタイルです */
.layout {
  min-height: 90vh;
  display:flex;
  justify-content: center;
  flex-direction: column;
}

/* ナビゲーションヘッダーです */
nav {
  border-bottom: 1px solid #eaeaea;
}
.header {
  display:flex;
  justify-content: center;
  flex-direction: row;
  width:100%;
  height: 100%;
  padding:0
}

.header li {
  width: fit-content;
  padding: 8px 24px;
  font-size: 1.2rem;
  list-style: none;
}
.header li:hover,
.header li:focus,
.header li:active {
  color:#78a7dd;
  border-color: #0070f3;
}
</style>