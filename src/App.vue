<template>
  <div class="app"></div>
  <RouterView />
</template>

<style>
body {
  background-image: url('@/assets/background-image.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  margin: 0;
}

a {
  text-decoration: none;
  color: black;
}

button {
  border-radius: 10px;
  margin-left: 5px;
  margin-bottom: 2px;
}
</style>
