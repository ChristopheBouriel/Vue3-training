
<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink :to="{name: 'about'}">About</RouterLink> <!-- En utilisant les routes nommées -->
      </nav>
    </div>
  </header>
  <!--<section>
    <HomeView>
      <template v-slot:welcome>
        <p>Bienvenue !</p>
      </template>
      <p>Promotion sur la Quatre Fromages</p>
      <p>Nouveauté - Pizza Royale</p>
      <p>Jeu concours</p>
    </HomeView>
    
  </section>
  Exemple d'utilisation des slots devenu caduc pour la suite du projet-->
  <RouterView />
</template>

<script lang="ts">
  //import { RouterLink, RouterView } from "vue-router";
  import HomeView from "./views/HomeView.vue"; /** Si le composant est enregistré localement, il n'est 
                                              * disponible que pour une utilisation dans le composant
                                              * dans lequel il a été importé
                                              * Pour pouvoir l'utiliser n'importe où, il faut l'enregistrer
                                              * autrement : voir fichier main.js*/
  export default {
    name: "App",
    components: {
      HomeView
    },
    data() {
      return {

      }
    }
  }
</script>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  font-weight: normal;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
