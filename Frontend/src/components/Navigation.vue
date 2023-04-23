<template>
  <nav>
    <img src="./../assets/logo-loutre.png" alt="Un logo de loutre" width="96" height="96">
    <div id="menu">
      <router-link to="/"><span class="link">Accueil</span></router-link>
      <router-link to="/recherche"><span class="link">Recherche</span></router-link>
      <span class="link">Notre Équipe!</span>
    </div>
    <div id="login" v-if="!islogin">
      <router-link to="/Inscription"><span class="link">Inscription</span></router-link>
      <router-link to="/connexion"><span class="link">Connexion</span></router-link>
    </div>
    <div id="login" v-if="islogin">
      <router-link to="/Liste-Souhait"><span class="link">Liste de souhait</span></router-link>
      <span class="link">
        <p v-on:click="deconnexion()" class="deconnexion">Déconnexion</p>
      </span>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'nav',
  data() {
    return {
      islogin: false
    }
  },
  methods: {
    deconnexion() {
      $cookies.remove("connexion");
      this.islogin = false;
    }
  },
  created() {
    if($cookies.get("connexion") != null) {
      this.islogin = true;
    }
  }
}
</script>

<style>
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
  box-shadow: 0px 0px 10px black;
  font-family: acme;
  font-size: 25px;
}
#login {
  display: flex;
  align-items: center;
}

a{
  text-decoration: none;
}

.link{
  margin: 0px 10px;
  padding: 10px;
  border-radius: 15px;
  color:var(--vt-c-black-soft);
}
.link:hover {
  cursor: pointer;
  color: var(--vt-c-blue);
}
.link:visited{
  color: black;
}

.deconnexion{
  cursor: pointer;
}
</style>