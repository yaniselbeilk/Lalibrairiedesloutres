<template>
  <div class="backgroundImage">
    <img src="../assets/plancher-bois-brun.jpg">
  </div>
  <span style="display: inline-block; padding-top: 120px;"></span>
  <div class="book-details each-book-souhait">
    <div class="book-details__image-container">
      <span v-if="dataBook.volumeInfo.imageLinks != undefined">
        <img v-bind:src="dataBook.volumeInfo.imageLinks.thumbnail" alt="Image du livre" />
      </span>
      <span v-if="dataBook.volumeInfo.imageLinks == undefined">
        <p>Image non trouvé</p>
      </span>
    </div>
    <div class="book-details__info">
      <div style="display: flex; margin-bottom: 20px;">
        <h2 style="width:100%;">{{ dataBook.volumeInfo.title }}</h2>
        <div class="book-details__favorite">
          <span v-if="!selected">
            <button class="favorite-button favorite-button-add" v-on:click="addToListSouhait()">
              <span>Ajouter à mes souhaits</span>
            </button>
          </span>
          <span v-if="selected">
            <button class="favorite-button favorite-button-remove" v-on:click="removeToListSouhait()">
              <span>Supprimer de mes souhaits</span>
            </button>
          </span>
        </div>
      </div>
      <p class="book-details__synopsis" v-html="dataBook.volumeInfo.description" v-if="dataBook.volumeInfo.description != undefined"></p>
      <p class="book-details__author" v-if="dataBook.volumeInfo.authors != undefined">
        par
        <label v-for="authors in dataBook.volumeInfo.authors">{{ authors }}</label>
      </p>
      <p class="book-details__publication-date" v-if="dataBook.volumeInfo.printedPageCount != undefined">Publié le {{ dataBook.volumeInfo.publishedDate }}</p>
      <div class="book-details__stats">
        <div class="book-details__stat" v-if="dataBook.volumeInfo.printedPageCount != undefined">
          <span class="book-details__label">Pages :</span>
          <span class="book-details__value">{{ dataBook.volumeInfo.printedPageCount }}</span>
        </div>
        <div class="book-details__stat" v-if="dataBook.volumeInfo.categories != undefined">
          <span class="book-details__label">Catégorie :</span>
          <span class="book-details__value" v-for="categorie in dataBook.volumeInfo.categories">{{ categorie }}</span>
        </div>
        <div class="book-details__stat" v-if="dataBook.volumeInfo.language != undefined">
          <span class="book-details__label">Langue :</span>
          <span class="book-details__value">{{ dataBook.volumeInfo.language }}</span>
        </div>
        <div class="book-details__stat" v-if="dataBook.saleInfo.listPrice =! undefined">
          <span class="book-details__label">Prix : </span>
          <span class="book-details__value">{{ dataBook.saleInfo.listPrice.amount }}€</span>
        </div>
        <div class="book-details__stat" v-if="dataBook.saleInfo.isEbook != undefined">
          <span class="book-details__label">Ebook ? : </span>
          <span class="book-details__value">
            <label v-if="dataBook.saleInfo.isEbook">Oui</label>
            <label v-if="!dataBook.saleInfo.isEbook">Non</label>
          </span>
        </div>
        <div class="book-details__stat" v-if="dataBook.saleInfo.country != undefined">
          <span class="book-details__label">Pays de vente : </span>
          <span class="book-details__value">{{ dataBook.saleInfo.country }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "ConnexionGoogle",
  data() {
    return {
      dataBook: {},
      selected: false
    }
  },
  methods: {
    addToListSouhait() {
      let uri = window.location.href.split('/');
      let Id_Livre = uri[uri.length - 1];
      let that = this;
      axios.post(import.meta.env.VITE_URL_BACKEND + '/add_souhait', {
        livre_id: Id_Livre,
        utilisateur_id: $cookies.get("connexion")
      }).then(function (response) {
        if (Object.keys(response.data).includes("error")) {
          console.log(response.data.error);
        } else {
          that.selected = true;
          console.log(response.data.success);
        }
      });
    },
    removeToListSouhait() {
      let uri = window.location.href.split('/');
      let Id_Livre = uri[uri.length - 1];
      let that = this;
      axios.post(import.meta.env.VITE_URL_BACKEND + '/remove_souhait', {
        livre_id: Id_Livre,
        utilisateur_id: $cookies.get("connexion")
      }).then(function (response) {
        if (Object.keys(response.data).includes("error")) {
          console.log(response.data.error);
        } else {
          that.selected = false;
          console.log(response.data.success);
        }
      });
    }
  },
  created() {
    let uri = window.location.href.split('/');
    let Id_Livre = uri[uri.length - 1];
    let that = this;
    const ApiKey = import.meta.env.VITE_KEY_API_GOOGLE;
    axios.get('https://www.googleapis.com/books/v1/volumes/' + Id_Livre + '?key=' + ApiKey, {})
      .then(function (response) {
        that.dataBook = response.data;
      });
    axios.get(import.meta.env.VITE_URL_BACKEND + '/get_list_souhait/' + $cookies.get("connexion"), {})
      .then(function (response) {
        response.data.forEach(el => {
          if (el.livre_id == Id_Livre) {
            that.selected = true;
          }
        });
      });
  }
}
</script>