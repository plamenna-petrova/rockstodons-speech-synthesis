## Generic Template with Speech Synthesis options

![Navigation Bar and Masthead Header](https://github.com/plamenna-petrova/rockstodons-speech-synthesis/blob/main/src/assets/images/presentation/Screenshot%20(118).png?raw=true)

![Grid](https://github.com/plamenna-petrova/rockstodons-speech-synthesis/blob/main/src/assets/images/presentation/Screenshot%20(119).png?raw=true)

![Footer with Speech Synthesis Menu](https://github.com/plamenna-petrova/rockstodons-speech-synthesis/blob/main/src/assets/images/presentation/Screenshot%20(122).png)

## Setup Speech Synthesis 

```javascript

// voice list

this.voiceList = this.synth.getVoices();
this.synth.onvoiceschanged = () => {
  this.voiceList = this.synth.getVoices();
  this.voiceList.splice(3, 1);
  this.voiceList = this.voiceList.slice(0, 3);
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
   if (this.settingsSaved) {
     this.textToSpeech.text = `${innerText}`;
     this.textToSpeech.voice = this.voiceList[this.selectedVoice];
     let utterance = new SpeechSynthesisUtterance(this.textToSpeech.text);
     utterance.voice = this.textToSpeech.voice;
     utterance.rate = this.selectedRate;
     this.synth.speak(utterance);
   }
},
```
## Abort Text to Speech Conversion

```javascript
stopTextToSpeechConversion() {
   if (this.synth.speaking) {
     this.synth.cancel();
   }
},
```
### Custom Events

- Events

```javascript
  @mouseover="speakHint('Toggle Mobile Menu')" @mouseout="stopSpeaking()" 
  @mouseover="speakText($event)" @mouseout="stopSpeaking()"
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
- Subsription
```javascript
  eventBus.$on("speak-text", this.convertTextToSpeech);
  eventBus.$on("speak-hint", this.convertTextToSpeech);
  eventBus.$on("stop-speaking", this.stopTextToSpeechConversion); 
```
## Settings can be saved to and retrieved from local storage

