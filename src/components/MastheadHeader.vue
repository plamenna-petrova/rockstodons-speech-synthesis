<template>
  <header class="masthead">
    <div class="container h-100">
      <div class="row h-100 align-items-center">
        <div class="col-12 text-center masthead-header-content">
          <h1 class="fw-light" @mouseover="speakText($event)" @mouseout="stopSpeaking()">
            {{ $t('mastheadHeader.headline') }}
          </h1>
          <h5 class="mt-5 subheadline" @mouseover="speakText($event)" @mouseout="stopSpeaking()">
            {{ $t('mastheadHeader.subheadline') }}
          </h5>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MastheadHeader"
}
</script>