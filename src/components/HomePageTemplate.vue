<template>
  <div class="rockstodons-app-container">
    <NavigationBar />
    <MastheadHeader />
    <MainContent />
    <PageFooter />

    <v-row justify="center">
      <v-btn
        class="speech-synthesis-button"
        color="primary"
        dark
        @click.stop="dialog = true"
      >
        <font-awesome-icon icon="ellipsis" />
      </v-btn>

      <v-dialog v-model="dialog" max-width="450">
        <v-card>
          <v-card-title class="text-h5">
            Define Speech Synthesis Options
          </v-card-title>

          <v-card-text>
            <div class="speech-synthesis-form-container">
              <form class="speech-synthesis-form">
                <h4>Select Voices and Speed Rates</h4>

                <div class="form-group" v-if="voiceList.length">
                  <label for="voices">Select a voice</label>
                  <select
                    class="form-control"
                    id="voices"
                    v-model="selectedVoice"
                  >
                    <option
                      v-for="(voice, index) in voiceList"
                      :data-lang="voice.lang"
                      :key="index"
                      :value="index"
                    >
                      {{ voice.name }} ({{ voice.lang }})
                    </option>
                  </select>
                </div>

                <div class="form-group" v-if="voiceList.length">
                  <label for="voices">Select speed rate</label>
                  <select
                    class="form-control"
                    id="rates"
                    v-model="selectedRate"
                  >
                    <option
                      v-for="(rate, index) in rates"
                      :key="index"
                      :value="index"
                    >
                      {{ rate }}
                    </option>
                  </select>
                </div>

                <div
                  class="btn-group mt-5"
                  role="group"
                  aria-label="Speech Synthesis Options"
                >
                  <button
                    type="button"
                    class="btn btn-success grouped-button mr-3"
                    @click="[saveSpeechSynthesisSettings(), (dialog = false)]"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    class="btn btn-success grouped-button"
                    @click="[cancelSpeechSynthesisSettings(), (dialog = false)]"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog = false">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import NavigationBar from "./NavigationBar.vue";
import MastheadHeader from "./MastheadHeader.vue";
import MainContent from "./MainContent.vue";
import PageFooter from "./PageFooter.vue";

import { eventBus } from "../main";

export default {
  name: "HomePageTemplate",
  data() {
    return {
      name: "",
      selectedVoice: 0,
      synth: window.speechSynthesis,
      voiceList: [],
      textToSpeech: new window.SpeechSynthesisUtterance(),
      rates: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
      selectedRate: 3,
      dialog: false,
      settingsSaved: false,
    };
  },
  components: {
    NavigationBar,
    MastheadHeader,
    MainContent,
    PageFooter,
  },
  mounted() {
    this.setUpResponsiveNavbar();
    this.setUpSpeechSynthesisOptions();
    eventBus.$on("speak-text", this.convertTextToSpeech);
    eventBus.$on("speak-hint", this.convertTextToSpeech);
    eventBus.$on("stop-speaking", this.stopTextToSpeechConversion);
  },
  methods: {
    setUpResponsiveNavbar() {
      let clicksCounter = 0;
      let navbarToggler = document.querySelector(".navbar-toggler");
      navbarToggler.style.border = "transparent";
      let navbarExpandLg = document.querySelector(".navbar.navbar-expand-lg");
      let body = document.querySelector("body");
      let navbarBrand = document.querySelector(".navbar-brand");
      let navbarExpandLgContainerFluid = document.querySelector(
        ".navbar.navbar-expand-lg .container-fluid"
      );
      let navbarSupportedContent = document.querySelector(
        "#navbarSupportedContent"
      );
      let mainNavigationListItems = document.querySelectorAll(
        ".main-navigation li"
      );
      let mainNavigation = document.querySelector(".main-navigation");
      let mainNavigationListItemsLinks = document.querySelectorAll(
        ".main-navigation li a"
      );
      let navbarTogglerTopBar = document.querySelector(
        ".navbar-toggler .top-bar"
      );
      let rightElements = document.querySelectorAll(".right-element");
      let navbarTogglerBottomBar = document.querySelector(
        ".navbar-toggler .bottom-bar"
      );
      navbarToggler.addEventListener("click", function () {
        clicksCounter++;
        if (clicksCounter % 2 !== 1) {
          this.clicksCounterStatus = "positive";
          navbarExpandLg.style.height = "initial";
          body.style.overflow = "initial";
          navbarToggler.style.position = "relative";
          if (navbarBrand.classList.contains("d-none")) {
            navbarBrand.classList.remove("d-none");
          }
          navbarBrand.classList.add("d-block");
          navbarExpandLgContainerFluid.classList.remove(
            "justify-content-center"
          );
          navbarSupportedContent.style.display = "none";
          mainNavigation.classList.remove("text-center");
          mainNavigationListItems.forEach((li) => {
            li.style.padding = "0px 8px";
          });
          mainNavigationListItemsLinks.forEach((a) => {
            a.style.fontSize = "14px";
          });
          rightElements.forEach((re) => {
            if (re.classList.contains("d-none")) {
              re.classList.remove("d-none");
            }
            re.classList.add("d-block");
          });
          navbarTogglerTopBar.style.top = "0";
          navbarTogglerBottomBar.style.top = "20px";
          navbarToggler.style.border = "none";
        } else {
          this.clicksCounterStatus = "negative";
          navbarExpandLg.style.height = "100vh";
          body.style.overflow = "hidden";
          navbarToggler.style.position = "absolute";
          navbarToggler.style.top = "8%";
          if (navbarBrand.classList.contains("d-block")) {
            navbarBrand.classList.remove("d-block");
          }
          navbarBrand.classList.add("d-none");
          navbarExpandLgContainerFluid.classList.add("justify-content-center");
          navbarSupportedContent.style.display = "block";
          navbarSupportedContent.style.textAlign = "center";
          mainNavigation.classList.remove("text-center");
          mainNavigationListItems.forEach((li) => {
            li.style.paddingTop = "10px";
            li.style.paddingBottom = "10px";
          });
          mainNavigationListItemsLinks.forEach((a) => {
            a.style.fontSize = "14px";
          });
          rightElements.forEach((re) => {
            if (re.classList.contains("d-block")) {
              re.classList.remove("d-block");
            }
            re.classList.add("d-none");
          });
          navbarTogglerTopBar.style.top = "10px";
          navbarTogglerBottomBar.style.top = "10px";
          navbarToggler.style.padding = "11px";
          navbarToggler.style.border = "2px" + " " + "solid";
          navbarToggler.style.borderRadius = "17px";
        }
      });
    },
    setUpSpeechSynthesisOptions() {
      this.voiceList = this.synth.getVoices();
      this.synth.onvoiceschanged = () => {
        this.voiceList = this.synth.getVoices();
        this.voiceList.splice(3, 1);
        this.voiceList = this.voiceList.slice(0, 3);
      };
      this.selectedVoice =
        JSON.parse(localStorage.getItem("selectedVoice")) || 0;
      this.selectedRate = JSON.parse(localStorage.getItem("selectedRate")) || 3;
      this.settingsSaved = localStorage.getItem("settingsStatus");
      console.log(this.settingsSaved);
    },
    convertTextToSpeech(innerText) {
      if (this.settingsSaved) {
        this.textToSpeech.text = `${innerText}`;
        this.textToSpeech.voice = this.voiceList[this.selectedVoice];
        let utterance = new SpeechSynthesisUtterance(this.textToSpeech.text);
        utterance.voice = this.textToSpeech.voice;
        utterance.rate = this.selectedRate;
        this.synth.speak(utterance);
      }
    },
    stopTextToSpeechConversion() {
      if (this.synth.speaking) {
        this.synth.cancel();
      }
    },
    saveSpeechSynthesisSettings() {
      this.settingsSaved = true;
      localStorage.setItem("selectedVoice", JSON.stringify(this.selectedVoice));
      localStorage.setItem("selectedRate", JSON.stringify(this.selectedRate));
      localStorage.setItem("settingsStatus", this.settingsSaved);
    },
    cancelSpeechSynthesisSettings() {
      this.settingsSaved = false;
      localStorage.removeItem("selectedVoice");
      localStorage.removeItem("selectedRate");
      localStorage.setItem("settingsStatus", this.settingsSaved);
    },
  },
};
</script>


<style>
@import "../assets/styles/template-style.css";

.speech-synthesis-button {
  position: absolute !important;
  bottom: 20px !important;
  right: 20px !important;
  width: 65px !important;
  height: 65px !important;
  border-radius: 40px !important;
}

.navbar-toggler:focus {
  box-shadow: none !important;
}

.grouped-button {
  border-radius: 4px !important;
}
</style>
