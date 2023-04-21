<template>
  <div class="book-details">
    <div class="book-details__image-container">
      <img v-bind:src="dataBook.volumeInfo.imageLinks.thumbnail" alt="Image du livre" />
    </div>
    <div class="book-details__info">
      <h2>{{dataBook.volumeInfo.title}}</h2>
      <p class="book-details__synopsis" v-html="dataBook.volumeInfo.description"></p>
      <p class="book-details__author">
        par
        <label v-for="authors in dataBook.volumeInfo.authors">{{authors}}</label>
      </p>
      <p class="book-details__publication-date">Publié le {{ dataBook.volumeInfo.publishedDate }}</p>
      <div class="book-details__stats">
        <div class="book-details__stat">
          <span class="book-details__label">Pages :</span>
          <span class="book-details__value">{{ dataBook.volumeInfo.printedPageCount }}</span>
        </div>
        <div class="book-details__stat">
          <span class="book-details__label">Catégorie :</span>
          <span class="book-details__value" v-for="categorie in dataBook.volumeInfo.categories">{{ categorie }}</span>
        </div>
        <div class="book-details__stat">
          <span class="book-details__label">Langue :</span>
          <span class="book-details__value">{{ dataBook.volumeInfo.language }}</span>
        </div>
        <div class="book-details__stat">
          <span class="book-details__label">Prix : </span>
          <span class="book-details__value">{{ dataBook.saleInfo.listPrice.amount }}€</span>
        </div>
        <div class="book-details__stat">
          <span class="book-details__label">Ebook ? : </span>
          <span class="book-details__value">
            <label v-if="dataBook.saleInfo.isEbook">Oui</label>
            <label v-if="!dataBook.saleInfo.isEbook">Non</label>
          </span>
        </div>
        <div class="book-details__stat">
          <span class="book-details__label">Pays de vente : </span>
          <span class="book-details__value">{{ dataBook.saleInfo.country }}</span>
        </div>
        <div class="book-details__favorite">
          <span v-if="!selected">
            <button class="favorite-button" v-on:click="addToListSouhait()">
              <span>Ajouter à ma liste de souhait</span>
            </button>
          </span>
          <span v-if="selected">
            <p>Vous avez ajouter ce livre a votre liste de souhait</p>
            <button class="favorite-button" v-on:click="removeToListSouhait()">
                <span>Supprimer de ma liste de souhait</span>
              </button>
          </span>
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