<template>
  <nav>
    <img src="ressources/logo-loutre.png" alt="Un logo de loutre" width="96" height="96">
    <div id="menu">
      <router-link to="/"><span>Accueil</span></router-link>
      <span>Recherche</span>
      <span>Notre Équipe!</span>
    </div>
    <div id="login">
      <IconBooks></IconBooks>
      <router-link to="/Inscription"><span>Inscription</span></router-link>
      <span>Connexion</span>
    </div>
  </nav>
</template>
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
</style>