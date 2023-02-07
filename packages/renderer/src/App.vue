<template>
  <mp-flex
    height="100vh"
    align-items="center"
    justify-content="center"
  >
    <mp-box
      text-align="center"
      max-width="sm"
    >
      <mp-icon
        name="mekari-brand"
        size="xl"
        margin-bottom="5"
      />
      <mp-heading>
        Hello Pixel 2 - Templates
      </mp-heading>
      <mp-text
        font-size="lg"
        margin-y="5"
      >
        Templates are page-level objects that place components into a layout and
        articulate the design underlying content structure.
      </mp-text>
      <mp-button>
        Click Here
      </mp-button>
    </mp-box>
  </mp-flex>
</template>

<script>
import {
  MpBox,
  MpHeading,
  MpText,
  MpButton,
  MpFlex,
  MpIcon,
} from '@mekari/pixel';

export default {
  name: 'LandingPage',
  components: {
    MpBox,
    MpText,
    MpHeading,
    MpButton,
    MpFlex,
    MpIcon,
  },
};
</script>
