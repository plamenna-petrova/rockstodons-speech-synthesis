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
                  Find us
                </h4>
                <span @mouseover="speakText($event)" @mouseout="stopSpeaking()"
                  >Veliko Tarnovo, Bulgaria</span
                >
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-4 mb-30">
            <div class="single-cta">
              <font-awesome-icon icon="phone" />
              <div class="cta-text">
                <h4 @mouseover="speakText($event)" @mouseout="stopSpeaking()">
                  Call us
                </h4>
                <span @mouseover="speakText($event)" @mouseout="stopSpeaking()"
                  >9876543210 0</span
                >
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-4 mb-30">
            <div class="single-cta">
              <font-awesome-icon icon="envelope-open" />
              <div class="cta-text">
                <h4 @mouseover="speakText($event)" @mouseout="stopSpeaking()">
                  Mail us
                </h4>
                <span @mouseover="speakText($event)" @mouseout="stopSpeaking()"
                  >mail@rockstodons.com</span
                >
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
                    @mouseover="speakHint('Rockstodons Logo')"
                    @mouseout="stopSpeaking()"
                /></a>
              </div>
              <div class="footer-text">
                <p @mouseover="speakText($event)" @mouseout="stopSpeaking()">
                  Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed
                  do eiusmod tempor incididuntut consec tetur adipisicing
                  elit,Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div class="footer-social-icon mb-3">
                <span @mouseover="speakText($event)" @mouseout="stopSpeaking()"
                  >Follow us</span
                >
                <a
                  href="#"
                  @mouseover="speakHint('Facebook')"
                  @mouseout="stopSpeaking()"
                  ><font-awesome-icon icon="fa-brands fa-facebook"
                /></a>
                <a
                  href="#"
                  @mouseover="speakHint('Twitter')"
                  @mouseout="stopSpeaking()"
                  ><font-awesome-icon icon="fa-brands fa-twitter"
                /></a>
                <a
                  href="#"
                  @mouseover="speakHint('Instagram')"
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
                  Useful Links
                </h3>
              </div>
              <ul>
                <li>
                  <a
                    href="#"
                    @mouseover="speakText($event)"
                    @mouseout="stopSpeaking()"
                    >Home</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    @mouseover="speakText($event)"
                    @mouseout="stopSpeaking()"
                    >About</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    @mouseover="speakText($event)"
                    @mouseout="stopSpeaking()"
                    >Services</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    @mouseover="speakText($event)"
                    @mouseout="stopSpeaking()"
                    >Portfolio</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    @mouseover="speakText($event)"
                    @mouseout="stopSpeaking()"
                    >Contact</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    @mouseover="speakText($event)"
                    @mouseout="stopSpeaking()"
                    >About us</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    @mouseover="speakText($event)"
                    @mouseout="stopSpeaking()"
                    >Our Services</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    @mouseover="speakText($event)"
                    @mouseout="stopSpeaking()"
                    >Expert Team</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    @mouseover="speakText($event)"
                    @mouseout="stopSpeaking()"
                    >Contact us</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    @mouseover="speakText($event)"
                    @mouseout="stopSpeaking()"
                    >Latest News</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
            <div class="footer-widget">
              <div class="footer-widget-heading">
                <h3 @mouseover="speakText($event)" @mouseout="stopSpeaking()">
                  Subscribe
                </h3>
              </div>
              <div class="footer-text mb-25">
                <p @mouseover="speakText($event)" @mouseout="stopSpeaking()">
                  Don’t miss to subscribe to our new feeds, kindly fill the form
                  below.
                </p>
              </div>
              <div class="subscribe-form">
                <form action="#">
                  <input
                    type="text"
                    placeholder="Email Address"
                    @mouseover="speakHint('Email Address')"
                    @mouseout="stopSpeaking()"
                  />
                  <button>
                    <font-awesome-icon
                      icon="fa-brands fa-telegram"
                      @mouseover="speakHint('Send Message')"
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
                  >Copyright &copy; 2022, All Right Reserved</a
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
                    >Home</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    @mouseover="speakText($event)"
                    @mouseout="stopSpeaking()"
                    >Terms</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    @mouseover="speakText($event)"
                    @mouseout="stopSpeaking()"
                    >Privacy</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    @mouseover="speakText($event)"
                    @mouseout="stopSpeaking()"
                    >Policy</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    @mouseover="speakText($event)"
                    @mouseout="stopSpeaking()"
                    >Contact</a
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