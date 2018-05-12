<template>
  <v-layout column>
    <v-flex row xs12 sm6 offset-md-1>
      <v-toolbar color="indigo" dark>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>Discover</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex v-bind="{ [`xs${card.flex}`]: true }" v-for="card in cards" :key="card.title">
              <v-card>
                <v-card-media :src="card.src" height="250px">
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline white--text" v-text="card.title"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-card-media :src="card.src" height="250px" @mouseover="hoverMe = true" @mouseleave="hoverMe = (!checked?false:true)">
                    <v-container fill-height fluid>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline white--text" v-text="card.title"></span>
                        </v-flex>

                        <v-flex d-flex flex-start>
                          <v-checkbox v-model="checked" id="checkbox" class="diCheckbox pt-1" hide-details></v-checkbox>
                          <label for="checkbox">{{ checked }}</label>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-media>

                  <v-spacer></v-spacer>

                  <v-btn icon>
                    <i class="material-icons">face</i>
                    <v-icon>favorite</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>bookmark</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>share</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
              <!-- A placer en dehors du layout principal pour avoir le mouse leave  -->
              <v-card>
                <div class="myHoverClass" :class="{'isActiv': hoverMe, 'isNotActiv': !hoverMe}">
                  <h1>Toto fais du vélo !!!</h1>
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
                </div>
              </v-card>

            </v-flex>
          </v-layout>

        </v-container>
      </v-card>
    </v-flex>
  </v-layout>

</template>


<script>
export default {
  data: () => ({
    checked: false,
    hoverMe: false,
    cards: [
      {
        title: 'Sydney',
        src: '/static/sydney.jpg',
        flex: 12
      },
      {
        title: 'Paris',
        src: '/static/effeil.jpg',
        flex: 6
      },
      {
        title: 'Venice',
        src: '/static/venice.jpg',
        flex: 6
      },
      {
        title: 'Tokyo',
        src: '/static/tokyo.jpg',
        flex: 6
      }
    ]
  }),
  methods: {
    // toggleBlock() {
    //   if (!this.hoverMe) {
    //     this.hoverMe = this.checked;
    //   }
    // }
  }
};
</script>

<style scoped>
.isActiv {
  display: block;
}

.isNotActiv {
  display: none;
}

.hoverOne {
  background: blueviolet;
}

.myHoverClass {
  height: 250px;
  background: blue;
}
</style>
