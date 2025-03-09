<template>
  <div class="home-view">
    <div class="content">
      <h1 class="name">Jorge Gabriel Adrian Adanza</h1>
      <p class="subtitle">Software Developer | Gamer</p>
      <router-link to="/app" class="btn">Go To App</router-link>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.home-view {
  background-image: url('@/assets/background-image.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.home-view::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
}

.content {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  z-index: 2;
  backdrop-filter: blur(10px);
  animation: fadeIn 1.5s ease-in-out;
}

.name {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #fff;
  text-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
}

.subtitle {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: #ddd;
}

.btn {
  background-color: #00c4cc;
  color: #fff;
  padding: 0.75rem 2rem;
  text-decoration: none;
  border-radius: 50px;
  transition:
    transform 0.3s,
    background-color 0.3s;
  font-weight: bold;
  box-shadow: 0 5px 20px rgba(0, 196, 204, 0.4);
}

.btn:hover {
  background-color: #009ea3;
  transform: scale(1.05);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
