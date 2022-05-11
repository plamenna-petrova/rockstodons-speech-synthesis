<template>
  <v-app>
    <HomePageTemplate />
  </v-app>
</template>

<script>
import HomePageTemplate from './components/HomePageTemplate';

export default {
  name: 'App',
  components: {
    HomePageTemplate,
  },
  data: () => ({
    //
  }),
};
</script>
