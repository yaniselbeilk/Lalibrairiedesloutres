<template>
  <header>
    <nav>
      <img src="ressources/logo-loutre.png" alt="Un logo de loutre" width="96" height="96">
      <div id="menu">
        <span>Accueil</span>
        <span>Recherche</span>
        <span>Notre Équipe!</span>
      </div>
      <div id="login">
        <span>Inscription</span>
        <span>Connexion</span>
      </div>
    </nav>
    <div id="bienvenue"> 
      <h1>Bienvenue dans la librairie des loutres !</h1>
    </div>
    <!--
    <div id="presentation">
      <h1>La librairie des loutres !</h1>
      <p>
        La librairie des loutres La librairie des loutres La librairie des loutres La librairie des loutres La librairie des loutres La librairie des loutres
        La librairie des loutres La librairie des loutres La librairie des loutres La librairie des loutres La librairie des loutres La librairie des loutres
        La librairie des loutres La librairie des loutres La librairie des loutres La librairie des loutres La librairie des loutres La librairie des loutres
        La librairie des loutres La librairie des loutres La librairie des loutres La librairie des loutres La librairie des loutres La librairie des loutres
        La librairie des loutres La librairie des loutres La librairie des loutres La librairie des loutres La librairie des loutres La librairie des loutres
        La librairie des loutres La librairie des loutres La librairie des loutres La librairie des loutres La librairie des loutres La librairie des loutres
        La librairie des loutres La librairie des loutres La librairie des loutres La librairie des loutres La librairie des loutres La librairie des loutres
        La librairie des loutres La librairie des loutres La librairie des loutres La librairie des loutres La librairie des loutres La librairie des loutres
        La librairie des loutres La librairie des loutres La librairie des loutres La librairie des loutres La librairie des loutres La librairie des loutres
        La librairie des loutres La librairie des loutres La librairie des loutres La librairie des loutres La librairie des loutres La librairie des loutres
        La librairie des loutres La librairie des loutres La librairie des loutres La librairie des loutres La librairie des loutres La librairie des loutres
        La librairie des loutres La librairie des loutres La librairie des loutres La librairie des loutres La librairie des loutres La librairie des loutres
        La librairie des loutres La librairie des loutres La librairie des loutres La librairie des loutres La librairie des loutres La librairie des loutres
        La librairie des loutres La librairie des loutres La librairie des loutres La librairie des loutres La librairie des loutres La librairie des loutres
      </p>
    </div>
  -->
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
  height: 100px;
  background-color: #eaf1f8;
  box-shadow: 0px 0px 10px black;;
}
#bienvenue{
  top: 100px;
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
/*
#presentation {
  isolation: isolate;
  background-image: url(../../ressources/librairie-background.jpeg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin: 100px auto;
  padding: 50px;
  width: 100%;
  text-align: center;
  box-shadow: 0px 0px 10px black;
}

#presentation::after {
  content: '';
  position: absolute;
  z-index: -1;
  inset: 0;
  background: var(--vt-c-black-soft);
  opacity: .6;
  border-radius: 20px;
}

#presentation>p {
  text-align: justify;
}
*/
</style>