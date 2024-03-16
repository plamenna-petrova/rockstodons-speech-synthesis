<template>
  <main class="py-5">
    <section class="pt-5">
      <div class="container-fluid new-releases-container">
        <div class="d-flex justify-content-between new-releases-headline">
          <h3 @mouseover="speakText($event)">{{ $t("mainContent.newReleases") }}</h3>
          <div class="align-self-center" @mouseover="speakText($event)" @mouseout="stopSpeaking()">{{ $t("mainContent.seeAll") }}</div>
        </div>
        <div class="row mt-5">
          <div class="col-6 col-lg-3 mb-5">
            <div class="content">
              <a href="#">
                <div class="content-overlay"></div>
                <img
                  class="content-image"
                  src="../assets/images/Gojira-Fortitude-CD.jpg"
                />
                <div class="content-details fadeIn-bottom">
                  <h3 class="content-title" @mouseover="speakText($event)" @mouseout="stopSpeaking()">
                    {{ $t("mainContent.primaryCards.firstCard.albumTitle") }}
                  </h3>
                  <p class="content-text" @mouseover="speakText($event)" @mouseout="stopSpeaking()">
                    <font-awesome-icon icon="location-dot" /> {{ $t("mainContent.primaryCards.firstCard.country") }}
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div class="col-6 col-lg-3 mb-5">
            <div class="content">
              <a href="#">
                <div class="content-overlay"></div>
                <img
                  class="content-image"
                  src="../assets/images/Leprous-Aphelion.jpg"
                />
                <div class="content-details fadeIn-bottom">
                  <h3 class="content-title" @mouseover="speakText($event)" @mouseout="stopSpeaking()">
                    {{ $t("mainContent.primaryCards.secondCard.albumTitle") }}
                  </h3>
                  <p class="content-text" @mouseover="speakText($event)" @mouseout="stopSpeaking()">
                    <font-awesome-icon icon="location-dot" /> {{ $t("mainContent.primaryCards.secondCard.country") }}
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div class="col-6 col-lg-3 mb-5">
            <div class="content">
              <a href="#">
                <div class="content-overlay"></div>
                <img
                  class="content-image"
                  src="../assets/images/Portals-web.jpg"
                />
                <div class="content-details fadeIn-bottom">
                  <h3 class="content-title" @mouseover="speakText($event)" @mouseout="stopSpeaking()">
                    {{ $t("mainContent.primaryCards.thirdCard.albumTitle") }}
                  </h3>
                  <p class="content-text" @mouseover="speakText($event)" @mouseout="stopSpeaking()">
                    <font-awesome-icon icon="location-dot" /> {{ $t("mainContent.primaryCards.thirdCard.country") }}
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div class="col-6 col-lg-3 mb-5">
            <div class="content">
              <a href="#">
                <div class="content-overlay"></div>
                <img
                  class="content-image"
                  src="../assets/images/Mast_HG_Cover_1500px.jpg"
                />
                <div class="content-details fadeIn-bottom">
                  <h3 class="content-title" @mouseover="speakText($event)" @mouseout="stopSpeaking()">
                    {{ $t("mainContent.primaryCards.fourthCard.albumTitle") }}
                  </h3>
                  <p class="content-text" @mouseover="speakText($event)" @mouseout="stopSpeaking()">
                    <font-awesome-icon icon="location-dot" /> {{ $t("mainContent.primaryCards.fourthCard.country") }}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-6 col-lg-2 mb-5">
            <div class="content">
              <a href="#">
                <div class="content-overlay"></div>
                <img
                  class="content-image"
                  src="../assets/images/Gojira-Fortitude-CD.jpg"
                />
                <div class="content-details fadeIn-bottom">
                  <h3 class="content-title" @mouseover="speakText($event)" @mouseout="stopSpeaking()">
                    {{ $t("mainContent.secondaryCards.firstCard.albumTitle") }}
                  </h3>
                  <p class="content-text" @mouseover="speakText($event)" @mouseout="stopSpeaking()">
                    <font-awesome-icon icon="location-dot" /> {{ $t("mainContent.secondaryCards.firstCard.country") }}
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div class="col-6 col-lg-2 mb-5">
            <div class="content">
              <a href="#">
                <div class="content-overlay"></div>
                <img
                  class="content-image"
                  src="../assets/images/Leprous-Aphelion.jpg"
                />
                <div class="content-details fadeIn-bottom">
                  <h3 class="content-title" @mouseover="speakText($event)" @mouseout="stopSpeaking()">
                    {{ $t("mainContent.secondaryCards.secondCard.albumTitle") }}
                  </h3>
                  <p class="content-text" @mouseover="speakText($event)" @mouseout="stopSpeaking()">
                    <font-awesome-icon icon="location-dot" /> {{ $t("mainContent.secondaryCards.secondCard.country") }}
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div class="col-6 col-lg-2 mb-5">
            <div class="content">
              <a href="#">
                <div class="content-overlay"></div>
                <img
                  class="content-image"
                  src="../assets/images/Portals-web.jpg"
                />
                <div class="content-details fadeIn-bottom">
                  <h3 class="content-title" @mouseover="speakText($event)" @mouseout="stopSpeaking()">
                    {{ $t("mainContent.secondaryCards.thirdCard.albumTitle") }}
                  </h3>
                  <p class="content-text" @mouseover="speakText($event)" @mouseout="stopSpeaking()">
                    <font-awesome-icon icon="location-dot" /> {{ $t("mainContent.secondaryCards.thirdCard.country") }}
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div class="col-6 col-lg-2 mb-5">
            <div class="content">
              <a href="#">
                <div class="content-overlay"></div>
                <img
                  class="content-image"
                  src="../assets/images/Mast_HG_Cover_1500px.jpg"
                />
                <div class="content-details fadeIn-bottom">
                  <h3 class="content-title" @mouseover="speakText($event)" @mouseout="stopSpeaking()">
                    {{ $t("mainContent.secondaryCards.fourthCard.albumTitle") }}
                  </h3>
                  <p class="content-text" @mouseover="speakText($event)" @mouseout="stopSpeaking()">
                    <font-awesome-icon icon="location-dot" /> {{ $t("mainContent.secondaryCards.fourthCard.country") }}
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div class="col-6 col-lg-2 mb-5">
            <div class="content">
              <a href="#">
                <div class="content-overlay"></div>
                <img
                  class="content-image"
                  src="../assets/images/Gojira-Fortitude-CD.jpg"
                />
                <div class="content-details fadeIn-bottom">
                  <h3 class="content-title" @mouseover="speakText($event)" @mouseout="stopSpeaking()">
                    {{ $t("mainContent.secondaryCards.fifthCard.albumTitle") }}
                  </h3>
                  <p class="content-text" @mouseover="speakText($event)" @mouseout="stopSpeaking()">
                    <font-awesome-icon icon="location-dot" /> {{ $t("mainContent.secondaryCards.fifthCard.country") }}
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div class="col-6 col-lg-2 mb-5">
            <div class="content">
              <a href="#">
                <div class="content-overlay"></div>
                <img
                  class="content-image"
                  src="../assets/images/Leprous-Aphelion.jpg"
                />
                <div class="content-details fadeIn-bottom">
                  <h3 class="content-title" @mouseover="speakText($event)" @mouseout="stopSpeaking()">
                    {{ $t("mainContent.secondaryCards.sixthCard.albumTitle") }}
                  </h3>
                  <p class="content-text" @mouseover="speakText($event)" @mouseout="stopSpeaking()">
                    <font-awesome-icon icon="location-dot" /> {{ $t("mainContent.secondaryCards.sixthCard.country") }}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "MainContent"
}
</script>