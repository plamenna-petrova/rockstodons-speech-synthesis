<template>
  <main class="py-5">
    <section class="pt-5">
      <div class="container-fluid new-releases-container">
        <div class="d-flex justify-content-between new-releases-headline">
          <h3 @mouseover="speakText($event)">New Releases</h3>
          <div class="align-self-center" @mouseover="speakText($event)" @mouseout="stopSpeaking()">SEE ALL</div>
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
                  <h3 class="content-title" @mouseover="speakText($event)" @mouseout="stopSpeaking()">Gojira Fortitude</h3>
                  <p class="content-text" @mouseover="speakText($event)" @mouseout="stopSpeaking()">
                    <font-awesome-icon icon="location-dot" /> France
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
                  <h3 class="content-title" @mouseover="speakText($event)" @mouseout="stopSpeaking()">Leprous Aphelion</h3>
                  <p class="content-text" @mouseover="speakText($event)" @mouseout="stopSpeaking()">
                    <font-awesome-icon icon="location-dot" /> Norway
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
                  <h3 class="content-title" @mouseover="speakText($event)" @mouseout="stopSpeaking()">Tesseract Portals</h3>
                  <p class="content-text" @mouseover="speakText($event)" @mouseout="stopSpeaking()">
                    <font-awesome-icon icon="location-dot" /> UK
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
                  <h3 class="content-title" @mouseover="speakText($event)" @mouseout="stopSpeaking()">Mastodon Hushed and Grim</h3>
                  <p class="content-text" @mouseover="speakText($event)" @mouseout="stopSpeaking()">
                    <font-awesome-icon icon="location-dot" /> USA
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
                  <h3 class="content-title" @mouseover="speakText($event)" @mouseout="stopSpeaking()">Gojira Fortitude</h3>
                  <p class="content-text" @mouseover="speakText($event)" @mouseout="stopSpeaking()">
                    <font-awesome-icon icon="location-dot" /> France
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
                  <h3 class="content-title" @mouseover="speakText($event)" @mouseout="stopSpeaking()">Leprous Aphelion</h3>
                  <p class="content-text" @mouseover="speakText($event)" @mouseout="stopSpeaking()">
                    <font-awesome-icon icon="location-dot" /> Norway
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
                  <h3 class="content-title" @mouseover="speakText($event)" @mouseout="stopSpeaking()">Tesseract Portals</h3>
                  <p class="content-text" @mouseover="speakText($event)" @mouseout="stopSpeaking()">
                    <font-awesome-icon icon="location-dot" /> UK
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
                  <h3 class="content-title" @mouseover="speakText($event)" @mouseout="stopSpeaking()">Mastodon Hushed and Grim</h3>
                  <p class="content-text" @mouseover="speakText($event)" @mouseout="stopSpeaking()">
                    <font-awesome-icon icon="location-dot" /> USA
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
                  <h3 class="content-title" @mouseover="speakText($event)" @mouseout="stopSpeaking()">Gojira Fortitude</h3>
                  <p class="content-text" @mouseover="speakText($event)" @mouseout="stopSpeaking()">
                    <font-awesome-icon icon="location-dot" /> France
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
                  <h3 class="content-title" @mouseover="speakText($event)" @mouseout="stopSpeaking()">Leprous Aphelion</h3>
                  <p class="content-text" @mouseover="speakText($event)" @mouseout="stopSpeaking()">
                    <font-awesome-icon icon="location-dot" /> Norway
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