<template>
  <footer class="footer-section">
    <div class="container">
      <div class="footer-cta pt-5 pb-5">
        <div class="row">
          <div class="col-xl-4 col-md-4 mb-30">
            <div class="single-cta">
              <font-awesome-icon icon="location-dot" />
              <div class="cta-text">
                <h4 @mouseover="speakText($event)" @mouseout="stopSpeaking()">
                  {{ $t("footer.findUs") }}
                </h4>
                <span @mouseover="speakText($event)" @mouseout="stopSpeaking()">
                  {{ $t("footer.location") }}
                </span>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-4 mb-30">
            <div class="single-cta">
              <font-awesome-icon icon="phone" />
              <div class="cta-text">
                <h4 @mouseover="speakText($event)" @mouseout="stopSpeaking()">
                  {{ $t("footer.callUs") }}
                </h4>
                <span @mouseover="speakText($event)" @mouseout="stopSpeaking()">
                  {{ $t("footer.phoneNumber") }}
                </span>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-4 mb-30">
            <div class="single-cta">
              <font-awesome-icon icon="envelope-open" />
              <div class="cta-text">
                <h4 @mouseover="speakText($event)" @mouseout="stopSpeaking()">
                  {{ $t("footer.mailUs") }}
                </h4>
                <span @mouseover="speakText($event)" @mouseout="stopSpeaking()">
                  {{ $t("footer.emailAddress") }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-content pt-5 pb-5">
        <div class="row">
          <div class="col-xl-4 col-lg-4 mb-50">
            <div class="footer-widget">
              <div class="footer-logo">
                <a href="index.html"
                  ><img
                    src="../assets/images/rockstodons-logo-removebg-preview.png"
                    class="img-fluid"
                    alt="logo"
                    @mouseover="speakHint(`{${$t('footer.logo')}}`)"
                    @mouseout="stopSpeaking()"
                /></a>
              </div>
              <div class="footer-text">
                <p @mouseover="speakText($event)" @mouseout="stopSpeaking()">
                  {{ $t("footer.additionalInfo") }}
                </p>
              </div>
              <div class="footer-social-icon mb-3">
                <span @mouseover="speakText($event)" @mouseout="stopSpeaking()">
                  {{ $t("footer.followUs") }}
                </span>
                <a
                  href="#"
                  @mouseover="speakHint(`{${$t('footer.facebookIcon')}}`)"
                  @mouseout="stopSpeaking()"
                  ><font-awesome-icon icon="fa-brands fa-facebook"
                /></a>
                <a
                  href="#"
                  @mouseover="speakHint(`{${$t('footer.twitter')}}`)"
                  @mouseout="stopSpeaking()"
                  ><font-awesome-icon icon="fa-brands fa-twitter"
                /></a>
                <a
                  href="#"
                  @mouseover="speakHint(`{${$t('footer.instagram')}}`)"
                  @mouseout="stopSpeaking()"
                  ><font-awesome-icon icon="fa-brands fa-instagram"
                /></a>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div class="footer-widget">
              <div class="footer-widget-heading">
                <h3 @mouseover="speakText($event)" @mouseout="stopSpeaking()">
                  {{ $t("footer.usefulLinks") }}
                </h3>
              </div>
              <ul>
                <li>
                  <a
                    href="#"
                    @mouseover="speakText($event)"
                    @mouseout="stopSpeaking()"
                  >
                    {{ $t("footer.links.home") }}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    @mouseover="speakText($event)"
                    @mouseout="stopSpeaking()"
                  >
                    {{ $t("footer.links.about") }}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    @mouseover="speakText($event)"
                    @mouseout="stopSpeaking()"
                  >
                    {{ $t("footer.links.services") }}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    @mouseover="speakText($event)"
                    @mouseout="stopSpeaking()"
                  >
                    {{ $t("footer.links.portfolio") }}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    @mouseover="speakText($event)"
                    @mouseout="stopSpeaking()"
                  >
                    {{ $t("footer.links.contact") }}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    @mouseover="speakText($event)"
                    @mouseout="stopSpeaking()"
                  >
                    {{ $t("footer.links.aboutUs") }}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    @mouseover="speakText($event)"
                    @mouseout="stopSpeaking()"
                  >
                    {{ $t("footer.links.ourServices") }}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    @mouseover="speakText($event)"
                    @mouseout="stopSpeaking()"
                  >
                    {{ $t("footer.links.expertTeam") }}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    @mouseover="speakText($event)"
                    @mouseout="stopSpeaking()"
                  >
                    {{ $t("footer.links.contactUs") }}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    @mouseover="speakText($event)"
                    @mouseout="stopSpeaking()"
                  >
                    {{ $t("footer.links.latestNews") }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
            <div class="footer-widget">
              <div class="footer-widget-heading">
                <h3 @mouseover="speakText($event)" @mouseout="stopSpeaking()">
                  {{ $t("footer.subscribe") }}
                </h3>
              </div>
              <div class="footer-text mb-25">
                <p @mouseover="speakText($event)" @mouseout="stopSpeaking()">
                  {{ $t("footer.subscriptionMessage") }}
                </p>
              </div>
              <div class="subscribe-form">
                <form action="#">
                  <input
                    type="text"
                    placeholder="Email"
                    @mouseover="speakHint(`{${$t('footer.emailAddressPlaceholder')}}`)"
                    @mouseout="stopSpeaking()"
                  />
                  <button>
                    <font-awesome-icon
                      icon="fa-brands fa-telegram"
                      @mouseover="speakHint(`{${$t('footer.sendMessage')}}`)"
                      @mouseout="stopSpeaking()"
                    />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright-area">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6 text-center text-lg-left">
            <div class="copyright-text">
              <p>
                <a @mouseover="speakText($event)" @mouseout="stopSpeaking()"
                  >{{ $t("footer.copyrightDetails") }} &copy;
                  {{
                    $t("footer.copyrightYearInfo", {
                      currentYear: new Date().getFullYear(),
                    })
                  }}</a
                >
              </p>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
            <div class="footer-menu">
              <ul>
                <li>
                  <a
                    href="#"
                    @mouseover="speakText($event)"
                    @mouseout="stopSpeaking()"
                    >{{ $t('footer.sublinks.home') }}</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    @mouseover="speakText($event)"
                    @mouseout="stopSpeaking()"
                    >{{ $t('footer.sublinks.terms') }}</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    @mouseover="speakText($event)"
                    @mouseout="stopSpeaking()"
                    >{{ $t('footer.sublinks.privacy') }}</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    @mouseover="speakText($event)"
                    @mouseout="stopSpeaking()"
                    >{{ $t('footer.sublinks.policy') }}</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    @mouseover="speakText($event)"
                    @mouseout="stopSpeaking()"
                    >{{ $t('footer.sublinks.contact') }}</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
