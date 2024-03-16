<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid navigation-container">
      <button
        class="navbar-toggler collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @mouseover="speakHint(`${$t('navigationBar.mobileMenu')}`)"
        @mouseout="stopSpeaking()"
      >
        <span class="toggler-icon top-bar"></span>
        <span class="toggler-icon middle-bar"></span>
        <span class="toggler-icon bottom-bar"></span>
      </button>
      <a class="navbar-brand mt-2 mt-lg-0" href="#">
        <img
          src="../assets/images/rockstodons-logo-removebg-preview.png"
          height="15"
          alt="MDB Logo"
          loading="lazy"
          @mouseover="speakHint(`${$t('navigationBar.logo')}`)"
          @mouseout="stopSpeaking()"
        />
      </a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul
          class="navbar-nav main-navigation mt-1 me-auto ml-auto mr-auto mb-2 mb-lg-0"
        >
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              @mouseover="speakText($event)"
              @mouseout="stopSpeaking()"
            >
              {{ $t("navigationBar.navigationLinks.catalogue") }}
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              @mouseover="speakText($event)"
              @mouseout="stopSpeaking()"
            >
              {{ $t("navigationBar.navigationLinks.soundtracks") }}
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              @mouseover="speakText($event)"
              @mouseout="stopSpeaking()"
            >
              {{ $t("navigationBar.navigationLinks.newAlbums") }}
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              @mouseover="speakText($event)"
              @mouseout="stopSpeaking()"
            >
              {{ $t("navigationBar.navigationLinks.genres") }}
            </a>
          </li>
        </ul>
      </div>
      <div class="d-flex align-items-center">
        <div class="right-element search-bar">
          <a
            class="text-reset me-3"
            href="#"
            @mouseover="speakHint(`${$t('navigationBar.searchIcon')}`)"
            @mouseout="stopSpeaking()"
          >
            <font-awesome-icon icon="search" />
          </a>
        </div>
        <div class="right-element">
          <button type="button" class="btn btn-danger sign-up-button">
            <font-awesome-icon icon="lock" class="lock-icon" />
            <span
              @mouseover="speakHint(`${$t('navigationBar.signUpButton')}`)"
              @mouseout="stopSpeaking()"
              >Sign Up</span
            >
          </button>
        </div>
        <div class="right-element shopping-cart">
          <a
            class="text-reset me-3"
            href="#"
            @mouseover="speakHint(`${$t('navigationBar.shoppingCartIcon')}`)"
            @mouseout="stopSpeaking()"
          >
            <font-awesome-icon icon="shopping-cart" />
          </a>
        </div>
        <div
          @mouseover="speakHint(`${$t('navigationBar.languagesSelection')}`)"
          @mouseout="stopSpeaking()"
        >
          <v-select
            class="locale-changer"
            v-model="$i18n.locale"
            v-on:change="saveCurrentLocaleInLocalStorage($i18n.locale)"
            :items="languages"
            item-title="text"
            item-value="code"
          >
          </v-select>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { eventBus } from "@/main";

export default {
  name: "NavigationBar",
  data() {
    return {
      languages: [
        {
          code: "en",
          text: "EN",
        },
        {
          code: "bg",
          text: "BG",
        }
      ],
    };
  },
  methods: {
    saveCurrentLocaleInLocalStorage(currentLocale) {
      eventBus.$emit("setup-speech-synthesis-options", currentLocale);
      localStorage.setItem("currentLocale", currentLocale);
    },
  },
};
</script>

<style scoped>
.locale-changer {
  width: 70px;
}
</style>
