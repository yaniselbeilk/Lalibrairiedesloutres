<template :key="ListeSouhait">
  <div class="backgroundImage">
    <img src="../assets/librairie1.png">
  </div>
  <div style="padding-top: 100px;">
    <h1 style="text-align: center">
      <span style="background-color: white; padding: 10px 20px; border-radius: 30px;">
        Votre liste de souhait
      </span>
    </h1>
    <div v-for="book in dataSouhait">
      <div class="book-details each-book-souhait">
        <!-- Partie gauche (image) -->
        <div class="book-details__image-container">
          <img v-bind:src="book.volumeInfo.imageLinks.thumbnail" alt="Image du livre" />
        </div>
        <!-- Partie droite (informations) -->
        <div class="book-details__info">
          <div style="display: flex; margin-bottom: 20px;">
            <h2 style="margin-bottom: 20px; width:100%;">
              <a v-bind:href="'/OneBook/' + book.id" target="_blank" class="book-details_link">
                {{ book.volumeInfo.title }}
              </a>
            </h2>
            <div class="book-details__favorite">
              <button class="favorite-button favorite-button-remove" v-on:click="removeToListSouhait(book.id)">
                <span>Supprimer de mes souhaits</span>
              </button>
            </div>
          </div>
          <p class="book-details__publication-date">Publié le {{ book.volumeInfo.publishedDate }}</p>
          <div class="book-details__stat">
            <span class="book-details__label">Catégorie :</span>
            <span class="book-details__value" v-for="categorie in book.volumeInfo.categories">{{ categorie }}</span>
          </div>
          <div class="book-details__stat">
            <span class="book-details__label">Pages :</span>
            <span class="book-details__value">{{ book.volumeInfo.printedPageCount }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'ListeSouhait',
  data() {
    return {
      error: '',
      dataSouhait: []
    }
  },
  methods: {
    GetListSouhait(that) {
      that.dataSouhait = [];
      const ApiKey = import.meta.env.VITE_KEY_API_GOOGLE;
      axios.get(import.meta.env.VITE_URL_BACKEND + '/get_list_souhait/' + $cookies.get("connexion"), {})
        .then(function (response) {
          if (Object.keys(response.data).includes("error")) {
            that.error = response.data.error;
          } else {
            that.error = response.data;
            response.data.forEach(el => {
              axios.get('https://www.googleapis.com/books/v1/volumes/' + el.livre_id + '?key=' + ApiKey, {})
                .then(function (response) {
                  that.dataSouhait.push(response.data)
                });
            });
          }
        });
    },
    removeToListSouhait(Id_Livre) {
      let that = this;
      axios.post(import.meta.env.VITE_URL_BACKEND + '/remove_souhait', {
        livre_id: Id_Livre,
        utilisateur_id: $cookies.get("connexion")
      }).then(function (response) {
        if (Object.keys(response.data).includes("error")) {
          console.log(response.data.error);
        } else {
          console.log(response.data.success);
          that.GetListSouhait(that);
        }
      });
    }
  },
  created() {
    this.GetListSouhait(this);
  }
}
</script>