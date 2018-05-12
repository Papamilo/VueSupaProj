<template>
  <!-- Début de la card -->
  <v-card class="menuCard pa-0 elevation-2 f-basis-0 my-2" @mouseover="isBlockAct = true" @mouseleave="isBlockAct = (!checked?false:true)">
    <v-card-title class="pa-0">

      <v-layout row>
        <v-flex d-flex-start pl-1>
          <span class="green--text exclamation1" v-show="recetteInfo.myprdNonRef">!</span>
          <span class="red--text exclamation2" v-show="recetteInfo.prdSaison">!</span>
          <span class="pl-1">{{recette.recetteLabel}}</span>
        </v-flex>
      </v-layout>
    </v-card-title>
    <!-- Fin Première ligne -->

    <v-layout v-for="convive in recette.convives" :key="recette.recetteId + convive.conviveId">
      <v-flex>
        <MenuRepasRecetteCardDetail v-for="regroupementRegime in convive.regroupementRegimes" :key="convive.conviveId + regroupementRegime.regroupementRegimeId" :regroupementRegime="regroupementRegime" :editing="editing" :quantiteRepas="quantiteRepas" :repasId="repasId" :familleId="familleId" :date="date" :recetteId="recette.recetteId" :conviveId="convive.conviveId">
        </MenuRepasRecetteCardDetail>
      </v-flex>
    </v-layout>

    <!-- Fin Deuxième ligne-->
    <!-- </v-card-actions> -->
    <v-card-actions class="pa-0 myUpHere">
      <v-layout row :class="{'isAct': isBlockAct, 'isNotAct': !isBlockAct}">
        <v-flex class="pt-1">
          <span v-for="convive in recette.convives" :key="'recetteConvive_'+convive">
            <span v-for="regroupementRegime in convive.regroupementRegimes" :key="'regroupementregimeRegroupementRegime_'+regroupementRegime">
              <span v-for="regime in regroupementRegime.regimes" :key="'regroupementRegime_'+regime">
                {{regime.regimeLabel}}
              </span>
            </span>
          </span>
        </v-flex>
        <v-flex>
          <v-tooltip bottom>
            <v-btn slot="activator" depressed icon small>
              <v-icon v-if="!recetteInfo.recetteReport " class="material-icons dark">repeat</v-icon>
            </v-btn>
            <span v-for="convive in recette.convives" :key="'recetteConvive_'+convive">
              <span v-for="regroupementRegime in convive.regroupementRegimes" :key="'regroupementregimeRegroupementRegime_'+regroupementRegime">
                {{regroupementRegime.observation}}
                <pre>{{observationToto}}</pre>
              </span>
            </span>
            <!-- <span>Tooltip {{regroupementRegimes.observation}}</span> -->
          </v-tooltip>

          <v-btn depressed icon small>
            <v-icon v-if="!recetteInfo.observate " class="material-icons dark">chat_bubble</v-icon>
          </v-btn>
        </v-flex>
        <v-flex d-flex flex-start>
          <v-checkbox v-model="checked" id="checkbox" class="diCheckbox pt-1" hide-details></v-checkbox>
          <label for="checkbox">{{ checked }}</label>
        </v-flex>
        <v-flex>
          <v-btn icon small>
            <v-icon class="material-icons">remove_red_eye</v-icon>
          </v-btn>
          <v-btn icon right small>
            <v-icon class="material-icons " ligth>autorenew</v-icon>
          </v-btn>
          <v-btn icon right small>
            <v-icon class="material-icons" ligth>delete</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-card-actions>

  </v-card>
  <!-- Fin de la card  -->

</template>

<script>
import MenuRepasRecetteCardDetail from '@/components/MenuRepasRecetteCardDetail';
export default {
  components: {
    MenuRepasRecetteCardDetail
  },
  props: {
    recette: Object,
    editing: Boolean,
    quantiteRepas: null,
    repasId: null,
    familleId: null,
    date: null,
    observationToto: 'ceci est une obsertvation'
  },

  data: () => ({
    isBlockAct: false,
    checked: false
  }),

  computed: {
    recetteInfo() {
      let recetteInfo = {
        myprdNonRef: 0,
        prdSaison: 0,
        recetteReport: 0,
        observate: ''
      };

      if (!this.recette) {
        return;
      }
      this.recette.convives.forEach(convive => {
        convive.regroupementRegimes.forEach(regroupementRegime => {
          if (recetteInfo.myprdNonRef < regroupementRegime.prdNonRef)
            recetteInfo.myprdNonRef = regroupementRegime.prdNonRef;
          if (recetteInfo.prdSaison < regroupementRegime.prdSaisonnier)
            recetteInfo.prdSaison = regroupementRegime.prdSaisonnier;
          if (recetteInfo.recetteReport < regroupementRegime.recetteReport)
            recetteInfo.recetteReport = regroupementRegime.recetteReport;
          recetteInfo.observate += regroupementRegime.observation;
        });
      });
      return recetteInfo;
    },
    tauxPrises: {
      get() {
        return this.recette.convives;
      },
      set() {}
    }
  },

  methods: {
    toggleBlock() {
      if (!this.isBlockAct) {
        this.isBlockAct = this.checked;
      }
    }
  }
};
</script>

<style scoped>
.input>>>input {
  font-size: 14px;
  text-align: right;
  width: 40px;
  height: 22px;
}

.input>>>.input-group__input {
  min-height: 22px;
}

.exclamation1 {
  font-size: 20px;
  max-width: 8px;
  min-width: 4px;
}

.exclamation2 {
  font-size: 20px;
  max-width: 8px;
  min-width: 4px;
}

.material-icons {
  font-size: 20px;
}

.isAct {
  display: block;
}

.isNotAct {
  display: none;
}

.myUpHere {
  height: 42px;
}
</style>
