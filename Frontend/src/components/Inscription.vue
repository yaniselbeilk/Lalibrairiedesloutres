<script setup>
import GoogleLogo from '../assets/google.svg';
import { getGoogleUrl } from '../utils/getGoogleUrl.js';

const from = '/';
</script>

<template>
    <!-- Flex de toute la page-->
    <div class="flexCentral">
        <!-- Partie de gauche -->
        <div class="halfLeft" style="overflow: hidden;">
            <img src="../assets/librairie1.png">
        </div>
        <!-- Partie de droite -->
        <div class="halfRight">
            <h1>Inscrivez-vous</h1>
            <h3>pour profiter de nos fonctionnalités !</h3>
            <div class="flexForm">
                <input type="text" class="text" v-model="pseudo" placeholder="Pseudo" v-on:input="IsFormFull()">
                <input type="text" class="text" v-model="email" placeholder="Email" v-on:input="IsFormFull()">
                <input type="text" class="text" v-model="password" placeholder="Mot de passe" v-on:input="VerifOfPassword()">
                <input type="text" class="text" v-model="verifPassword" placeholder="Confirmer mot de passe" v-on:input="VerifOfPassword()">
                <p style="color:red">{{ retour }}</p>
                <button v-on:click="inscription()" class="inscription" id="inscription" disabled>S'inscrire</button>
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

    </div>
</template>

<script>
import axios from "axios"
export default {
    name: 'FromText',
    data() {
        return {
            pseudo: '',
            email:'',
            password: '',
            verifPassword: '',
            errorPassword:'',
            retour: ''
        }
    },
    methods: {
        VerifOfPassword() {
            this.IsFormFull()
            if (this.verifPassword != this.password) {
                this.errorPassword = 'Vos deux mot de passe doivent être les mêmes';
                document.getElementById("inscription").disabled = true;
            } else {
                this.errorPassword = '';
                document.getElementById("inscription").disabled = false;
            }
        },
        IsFormFull() {
            if (this.verifPassword=="" || this.password=="" || this.pseudo=="" || this.email=="") {
                document.getElementById("inscription").disabled = true;
            } else {
                document.getElementById("inscription").disabled = false;
            }
        },
        inscription() {
            let that = this;
            if (this.verifPassword == this.password) {
                axios.post(import.meta.env.VITE_URL_BACKEND + '/inscription', {
                    pseudo: this.pseudo,
                    password: this.password,
                    email: this.email
                }).then(function (response) {
                    if (response.data != null) {
                        if (Object.keys(response.data).includes("success")) {
                            that.retour = "";
                            $cookies.set('connexion', response.data.utilisateur_id, '1d');
                            that.$router.push({ path: '/' })
                        }
                        if (Object.keys(response.data).includes("error")) {
                            that.retour = response.data.error;
                        }
                    }
                });
            }
        }
    }
}
</script>

<style>
body {
    font-family: Roboto, sans-serif;
    font-size: 1.6rem;
}

.flexCentral{
    display: flex;
    padding-top: 90px;
    height:100vh;
}
.halfLeft{
    width: 50%;
    overflow: hidden;
}


.halfRight {
    width: 50%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
h1{
    font-size: 48px;
    color:#0074C6;
}
h3{
    font-size: 24px;
    color: #0088E2;
}
.flexForm{
    display: flex;
    flex-direction: column;
    gap:8px;
    width: 50%;
    margin-top: 20px;
}
input.text{
    padding: 10px 20px;
    width: 100%;
    border-radius: 10px;
    border: 1px lightgrey solid;
}
button.inscription{
    padding: 10px 20px;
    width: 100%;
    font-size: 20px;
    font-weight: bold;
    background-color: #0074C6;
    color: white;
    border-radius: 10px;
    border:none;
}
button.inscription:hover{
    cursor: pointer;
    background-color: #0082D8;
}
button.inscription:disabled{
    cursor:no-drop;
    background-color: #93BCD6;
}

.ou{
    margin: 30px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap:8px;
    font-size: 24px;
}
.border{
    border-bottom:1px black solid;
    width: 50px;
    height: 1px;
}
</style>