<template>
</template>

<script>
export default {
  name: "ConnexionGoogle",
  created() {
    let uri = window.location.href.split('/');
    let id = uri[uri.length - 1];
    $cookies.set('connexion', id, '1d');
    this.$router.push({ path: '/' })
  }
}
</script>