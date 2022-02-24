<template>
  <div id="section-likes">
    <div class="div1">{{ nbrLikes }}</div>
    <div class="div2" @click="addLikes()">J'aime</div>
    <div class="div3">{{ info }}</div>
  </div>
</template>

<!-- Avec références réactives
<script lang="ts">
import { ref, computed } from "vue";
export default {
  name: "Likes",
  
  setup() {
      const nbrLikes = ref(7);
      const message = ref("aiment cette page");
      function addLikes() {
          nbrLikes.value++; /** .value parce que c'est une référence réactive, un objet qui
                              * encapsule mon entier : si j'incrémente l'objet ça ne peut pas
                              * fonctionner*/
      }
      const info = computed(() => {
          return nbrLikes.value + " " + message.value;
      })
      return { nbrLikes, addLikes, message, info }
  }
};
</script>-->

<!-- Avec syntaxe réactive
<script lang="ts">
import { reactive, computed, toRefs } from "vue";
export default {
  name: "Likes",
  
  setup() {
      const event: any = reactive({
          nbrLikes: 7,
          message: "aiment cette page",
          info: computed(() => {
            return event.nbrLikes + " " + event.message;
        })
      })

      function addLikes() {
          event.nbrLikes++; /** .value parce que c'est une référence réactive, un objet qui
                              * encapsule mon entier : si j'incrémente l'objet ça ne peut pas
                              * fonctionner*/
      }
      
      return { ...toRefs(event), addLikes }  // L'emploi de toRefs permet de déstructurer l'objet réactif et de supprimer le event.xxx dans le template
  }

  
};-->

<script lang="ts">
import useLikes from "../use/use.likes.vue";
export default {
  name: "Likes",
  
  setup() {
      //return useLikes(); La syntaxe ci-dessous permet de savoir précisemment d'où viennent les propriétés lorsqu'on importe plusieurs fonctions de composition
      const { nbrLikes, addLikes, message, info } = useLikes();
      return { nbrLikes, addLikes, message, info }
    }
};

</script>

<style scoped>
.div1 {
  background-image: url("../assets/images/heart.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  color: black;
  font-size: 1em;
  font-weight: bold;
  height: 50px;
  width: 60px;
}
.div2 {
  background-color: #4a6bbb;
  height: 35px;
  margin-left: 20px;
  line-height: 35px;
  margin-top: 10px;
  color: white;
  font-size: 1em;
  border-radius: 10px;
  padding: 0px 20px;
  cursor: pointer;
}
.div2:hover {
  background-color: #2d3e6d;
}
.div3 {
  color: white;
  margin-left: 10px;
}
#section-likes {
  display: flex;
  line-height: 56px;
  height: 60px;
}
</style>