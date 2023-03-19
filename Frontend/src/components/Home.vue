<script setup>
import IconBooks from "./icons/IconBooks.vue"
import { RouterLink } from 'vue-router';
</script>
<template>
  <header>
    <nav>
      <img src="ressources/logo-loutre.png" alt="Un logo de loutre" width="96" height="96">
      <div id="menu">
        <span><router-link to="/">Accueil</router-link></span>
        <span>Recherche</span>
        <span>Notre Équipe!</span>
      </div>
      <div id="login">
        <IconBooks></IconBooks>
        <span><router-link to="/Inscription">Inscription</router-link></span>
        <span>Connexion</span>
      </div>
    </nav>
    <div id="bienvenue"> 
      <h1>Bienvenue dans la librairie des loutres !</h1>
      <form>
        <input v-model="recherche" type="text" placeholder="Rechercher une oeuvre" />
      </form>
    </div>
    <router-view></router-view>
  </header>
</template>

<style>
header {
  font-family: acme;
  font-size: 25px;
  background-image: url(../../ressources/librairie-background.jpeg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100svh;
  width: 100%;
}
nav {
  position: fixed;
  z-index: 9;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  height: 90px;
  background-color: #eaf1f8;
  box-shadow: 0px 0px 10px black;;
}
#login {
  display: flex;
  align-items: center;
}
#menu>span,
#login>span {
  margin: 0px 10px;
  padding: 10px;
  color:  var(--vt-c-black-soft);
  border-radius: 15px;
}

#menu>span:hover, #login> span:hover {
  cursor: pointer;
  color: var(--vt-c-blue);
}

#bienvenue{
  top: 90px;
  color: var(--vt-c-black-soft);
  background-color: rgba(199, 213, 255, 0.5);
  height: 300px;
  margin: auto;
  text-align: center;
}
#bienvenue>h1 {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  font-size: 50px;
}
#bienvenue>form {
  position: relative;
  top: 65%;
  transform: translateY(-20%);
}
#bienvenue>form>input{
  font-size: 30px;
  height: 80px;
  width: 50%;
}
</style>