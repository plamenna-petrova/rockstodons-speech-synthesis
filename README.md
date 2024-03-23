## Generic Template with Speech Synthesis options, rendered in Vue.js

![Navigation Bar and Masthead Header](https://github.com/plamenna-petrova/rockstodons-speech-synthesis/blob/main/src/assets/images/presentation/Screenshot%20(2653).png?raw=true)

![Grid](https://github.com/plamenna-petrova/rockstodons-speech-synthesis/blob/main/src/assets/images/presentation/Screenshot%20(2656).png?raw=true)

![Footer with Speech Synthesis Menu](https://github.com/plamenna-petrova/rockstodons-speech-synthesis/blob/main/src/assets/images/presentation/Screenshot%20(2655).png?raw=true)

## Deployment

You can view the project on: [rockstodons-speech-synthesis.vercel.app](https://rockstodons-speech-synthesis.vercel.app/)

## Set up Speech Synthesis 

```javascript

// voice list configuration and selection

this.voiceList = this.speechSynthesis.getVoices();
this.voiceList = [
  ...this.voiceList.filter((v) => v.lang.split("-")[0] === currentLocale),
];

this.speechSynthesis.onvoiceschanged = () => {
  ...
  if (localStorage.getItem("selectedVoice")) {
    this.selectedVoice =
        this.voiceList.length >
            JSON.parse(localStorage.getItem("selectedVoice")) + 1
              ? JSON.parse(localStorage.getItem("selectedVoice"))
              : 0;
  } else {
      this.selectedVoice = 0;
  }
  ...
};
 
// rates

rates: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2]
````

```html
<!-- Voices Example -->
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
```

## Text to Speech Conversion Initialization

```javascript
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
}
```
## Abort Text to Speech Conversion

```javascript
stopTextToSpeechConversion() {
  if (this.speechSynthesis.speaking) {
     this.speechSynthesis.cancel();
  }
}
```
## Custom Events

- Events

```javascript
  @mouseover="speakHint(`${$t('navigationBar.mobileMenu')}`)"
  @mouseout="stopSpeaking()"
````
- Emits

```javascript
  Vue.mixin({
    methods: {
      speakText(event) {
        eventBus.$emit("speak-text", event.target.innerText);
      },
      speakHint(hint) {
        eventBus.$emit("speak-hint", hint);
      },
      stopSpeaking() {
        eventBus.$emit("stop-speaking");
      }
    }
  })
```
- Subscription
```javascript
  eventBus.$on("speak-text", this.convertTextToSpeech);
  eventBus.$on("speak-hint", this.convertTextToSpeech);
  eventBus.$on("stop-speaking", this.stopTextToSpeechConversion); 
```

## Translations
```javascript
const messages = {
  en: enTranslations,
  bg: bgTranslations
}

const i18n = new VueI18n({
  messages
})

i18n.locale = localStorage.getItem("currentLocale") || 'en';
```
## Settings can be saved to and retrieved from local storage
