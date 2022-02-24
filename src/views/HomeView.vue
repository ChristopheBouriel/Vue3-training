<template>
  <div id="intro">
      <!-- <slot name="welcome"></slot>
      <slot></slot> -->
      <p>Promotion sur la Quatre Fromages</p>
      <p>Nouveauté - Pizza Royale</p>
      <p>Jeu concours</p>
      <Likes />
  </div>
  <div id="product-menu">
      <Products />
  </div>
</template>

<script>
import Likes from "../components/Likes.vue"
export default {
  name: "Home",
  components: {
    Likes
  },
  data() {
    return {};
  },
  methods: {},
  computed: {}
};
</script>

<style>
#intro {
  background-image: url(../assets/images/pizza-menu.jpg);
  background-position: bottom;
  background-size: cover;
  height: 300px;
  padding: 3%;
  width: 100%;
}
#intro p {
  color: white;
  font-size: 1em;
  font-weight: bold;
  text-shadow: black 0.1em 0.1em 0.2em;
}
#product-menu {
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
}
section {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>