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
        @mouseover="speakHint(`${$t('settings.details')}`)"
        @mouseout="stopSpeaking()"
      >
        <font-awesome-icon icon="ellipsis" />
      </v-btn>

      <v-dialog v-model="dialog" max-width="450">
        <v-card>
          <v-card-title
            class="text-h5"
            @mouseover="speakText($event)"
            @mouseout="stopSpeaking()"
          >
            {{ $t("settings.speechSynthesisOptions") }}
          </v-card-title>

          <v-card-text>
            <div class="speech-synthesis-form-container">
              <form class="speech-synthesis-form">
                <h4 @mouseover="speakText($event)" @mouseout="stopSpeaking()">
                  {{ $t("settings.voicesAndSpeedRatesSelection") }}
                </h4>

                <div class="form-group" v-if="voiceList.length">
                  <label
                    for="voices"
                    @mouseover="speakText($event)"
                    @mouseout="stopSpeaking()"
                    >{{ $t("settings.voiceSelection") }}</label
                  >
                  <div
                    @mouseover="
                      speakHint(
                        `${voiceList[selectedVoice].name} ${voiceList[selectedVoice].lang}`
                      )
                    "
                    @mouseout="stopSpeaking()"
                  >
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
                </div>

                <div class="form-group" v-if="voiceList.length">
                  <label
                    for="voices"
                    @mouseover="speakText($event)"
                    @mouseout="stopSpeaking()"
                    >{{ $t("settings.speedRateSelection") }}</label
                  >
                  <select
                    class="form-control"
                    id="rates"
                    v-model="selectedRate"
                    @mouseover="speakHint(`${rates[selectedRate]}`)"
                    @mouseout="stopSpeaking()"
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
                    @mouseover="speakText($event)"
                    @mouseout="stopSpeaking()"
                  >
                    {{ $t("settings.save") }}
                  </button>
                  <button
                    type="button"
                    class="btn btn-success grouped-button"
                    @click="[cancelSpeechSynthesisSettings(), (dialog = false)]"
                    @mouseover="speakText($event)"
                    @mouseout="stopSpeaking()"
                  >
                    {{ $t("settings.cancel") }}
                  </button>
                </div>
              </form>
            </div>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green darken-1"
              text
              @click="dialog = false"
              @mouseover="speakText($event)"
              @mouseout="stopSpeaking()"
            >
              {{ $t("settings.close") }}
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
      speechSynthesis: window.speechSynthesis,
      voiceList: [],
      textToSpeech: new window.SpeechSynthesisUtterance(),
      rates: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
      selectedRate: 3,
      dialog: false,
      areSettingsSaved: false,
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
    eventBus.$on(
      "setup-speech-synthesis-options",
      this.setUpSpeechSynthesisOptions
    );
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
      let rightElementsContainer = document.querySelector(
        ".right-elements-container"
      );
      let rightElements = document.querySelectorAll(".right-element");
      let navbarTogglerBottomBar = document.querySelector(
        ".navbar-toggler .bottom-bar"
      );
      let localeChanger = document.querySelector(".locale-changer");

      navbarToggler.addEventListener("click", function () {
        clicksCounter++;

        if (clicksCounter % 2 !== 1) {
          this.clicksCounterStatus = "positive";
          navbarExpandLg.style.height = "initial";
          body.style.position = "initial";
          navbarToggler.style.position = "relative";
          navbarToggler.style.left = 0;

          navbarBrand.style.marginLeft = 0 + "px";

          navbarSupportedContent.style.display = "none";
          mainNavigation.classList.remove("text-center");

          mainNavigationListItems.forEach((mainNavigationListItem) => {
            mainNavigationListItem.style.padding = "0px 8px";
          });

          mainNavigationListItemsLinks.forEach((mainNavigationListItemLink) => {
            mainNavigationListItemLink.style.fontSize = "14px";
          });

          rightElementsContainer.style.flexDirection = "row";
          rightElementsContainer.style.textAlign = "initial";

          rightElements.forEach((rightElement) => {
            rightElement.style.textAlign = "initial";
            rightElement.style.padding = "0px 15px";
            rightElement.style.marginLeft = 0 + "px";
          });

          navbarTogglerTopBar.style.top = "0";
          navbarTogglerBottomBar.style.top = "20px";
          navbarToggler.style.border = "none";

          localeChanger.style.marginLeft = 0 + "px";
        } else {
          this.clicksCounterStatus = "negative";

          navbarExpandLg.style.height = "100vh";
          body.style.position = "fixed";
          navbarToggler.style.position = "absolute";
          navbarToggler.style.top = "8%";
          navbarToggler.style.left = 50 + "%";

          navbarBrand.style.marginLeft = 18 + "px";
          navbarBrand.style.marginRight = 0 + "px";

          navbarExpandLgContainerFluid.classList.add("justify-content-center");
          navbarSupportedContent.style.display = "block";
          navbarSupportedContent.style.textAlign = "center";
          mainNavigation.classList.remove("text-center");

          mainNavigationListItems.forEach((mainNavigationListItem) => {
            mainNavigationListItem.style.paddingTop = "10px";
            mainNavigationListItem.style.paddingBottom = "10px";
          });

          mainNavigationListItemsLinks.forEach((mainNavigationListItemLink) => {
            mainNavigationListItemLink.style.fontSize = "14px";
          });

          rightElementsContainer.style.flexDirection = "column";
          rightElementsContainer.style.textAlign = "center";

          rightElements.forEach((rightElement) => {
            rightElement.style.textAlign = "center";
            rightElement.style.padding = "10px 0px";
            rightElement.style.marginLeft = 28 + "px";
          });

          navbarTogglerTopBar.style.top = "10px";
          navbarTogglerBottomBar.style.top = "10px";
          navbarToggler.style.padding = "11px";
          navbarToggler.style.border = "2px" + " " + "solid";
          navbarToggler.style.borderRadius = "17px";

          localeChanger.style.marginLeft = 28 + "px";
        }
      });
    },
    setUpSpeechSynthesisOptions(currentLocale) {
      if (!currentLocale) {
        currentLocale = localStorage.getItem("currentLocale") || "en";
      }

      this.voiceList = this.speechSynthesis.getVoices();
      this.voiceList = [
        ...this.voiceList.filter((v) => v.lang.split("-")[0] === currentLocale),
      ];

      this.speechSynthesis.onvoiceschanged = () => {
        this.voiceList = this.speechSynthesis.getVoices();
        this.voiceList = [
          ...this.voiceList.filter(
            (v) => v.lang.split("-")[0] === currentLocale
          ),
        ];

        if (localStorage.getItem("selectedVoice")) {
          this.selectedVoice =
            this.voiceList.length >
            JSON.parse(localStorage.getItem("selectedVoice")) + 1
              ? JSON.parse(localStorage.getItem("selectedVoice"))
              : 0;
        } else {
          this.selectedVoice = 0;
        }

        this.selectedRate =
          JSON.parse(localStorage.getItem("selectedRate")) || 3;
        this.areSettingsSaved = localStorage.getItem("settingsStatus") || false;
      };

      if (localStorage.getItem("selectedVoice")) {
              this.selectedVoice =
        this.voiceList.length >
        JSON.parse(localStorage.getItem("selectedVoice")) + 1
          ? JSON.parse(localStorage.getItem("selectedVoice"))
          : 0;
      } else {
        this.selectedVoice = 0;
      }

      this.selectedRate = JSON.parse(localStorage.getItem("selectedRate")) || 3;
    },
    convertTextToSpeech(innerText) {
      if (this.areSettingsSaved) {
        this.textToSpeech.text = `${innerText}`;
        this.textToSpeech.voice = this.voiceList[this.selectedVoice];
        let speechSynthesisUtterance = new SpeechSynthesisUtterance(
          this.textToSpeech.text
        );
        speechSynthesisUtterance.voice = this.textToSpeech.voice;
        speechSynthesisUtterance.rate = this.selectedRate;
        this.speechSynthesis.speak(speechSynthesisUtterance);
      }
    },
    stopTextToSpeechConversion() {
      if (this.speechSynthesis.speaking) {
        this.speechSynthesis.cancel();
      }
    },
    saveSpeechSynthesisSettings() {
      this.areSettingsSaved = true;
      localStorage.setItem("selectedVoice", JSON.stringify(this.selectedVoice));
      localStorage.setItem("selectedRate", JSON.stringify(this.selectedRate));
      localStorage.setItem("settingsStatus", this.areSettingsSaved);
    },
    cancelSpeechSynthesisSettings() {
      this.areSettingsSaved = false;
      localStorage.removeItem("selectedVoice");
      localStorage.removeItem("selectedRate");
      localStorage.setItem("settingsStatus", this.areSettingsSaved);
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
