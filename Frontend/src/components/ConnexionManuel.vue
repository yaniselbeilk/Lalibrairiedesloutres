<script setup>
import GoogleLogo from '../assets/google.svg';
import { getGoogleUrl } from '../utils/getGoogleUrl.js';

const from = '/';
</script>

<template>
  <!-- Flex de toute la page-->
    <!-- Background -->
    <div class="backgroundImage">
      <img src="../assets/librairie1.png">
    </div>
    <!-- Partie connexion -->
    <span style="padding-top:120px; display: inline-block;"></span>
    <div class="TemplateConnexion">
      <h1>Connexion</h1>
      <div class="flexForm">
        <input type="text" class="text" v-model="pseudo" placeholder="Pseudo" v-on:input="disableButton()">
        <input type="text" class="text" v-model="password" placeholder="Mot de passe" v-on:input="disableButton()">
        <p style="color:red">{{ error }}</p>
        <button v-on:click="connexion()" class="inscription" id="connexion" disabled>Se connecter</button>
      </div>
      <div class="ou">
        <label class="border"></label>
        <label>Ou</label>
        <label class="border"></label>
      </div>
      <h3 style="margin-bottom:20px">Connectez vous avec votre compte google</h3>
      <div class="social-auth">
        <a :href="getGoogleUrl(from)" class="google-auth">
          <img :src="GoogleLogo" alt="Google Logo" />
        </a>
      </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'FromText',
  data() {
    return {
      pseudo: '',
      password: '',
      error: ''
    }
  },
  methods: {
    connexion() {
      let that = this;
      if (this.isValid()) {
        axios.post(import.meta.env.VITE_URL_BACKEND + '/connexion', {
          pseudo: this.pseudo,
          password: this.password
        }).then(function (response) {
          if (Object.keys(response.data).includes("error")) {
            that.error = response.data.error;
          }else{
            that.retour = "";
            $cookies.set('connexion', response.data.user.id, '1d');
            window.location.href = `/`
          }
        });
      }
    },
    isValid() {
      if (this.pseudo != "" && this.password != "") {
        return true;
      } else {
        return false;
      }
    },
    disableButton() {
      if (this.isValid()) {
        document.getElementById("connexion").disabled = false;
      } else {
        document.getElementById("connexion").disabled = true;
      }
    }
  }
}
</script>

<style>
.backgroundImage{
  position: fixed;
  top:0;
  height:100vh;
}
.TemplateConnexion{
  background-color: white;
  width: 50%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 10px 10px 20px black;
}
</style>