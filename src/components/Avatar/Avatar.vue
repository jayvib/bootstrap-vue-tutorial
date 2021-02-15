<template>
  <div class="mt-2">
    <h1 class="text-center">Avatar</h1>
    <hr/>
    <BButton
      v-b-toggle.avatar-sd
      variant="primary"
      class="width-25 d-block">
      Stand Alone Avatar
    </BButton>
    <BCollapse id="avatar-sd" class="mt-2">
      <AvatarStandAlone/>
    </BCollapse>
    <BButton
      v-b-toggle.avatar-lg
      variant="success"
      class="width-25 d-block mt-2">
      List Group Avatar
    </BButton>
    <BCollapse id="avatar-lg" class="mt-2">
      <AvatarListGroup/>
    </BCollapse>
    <BButton v-b-toggle.avatar-ic
      variant="danger"
      class="width-25 d-block mt-2">
      Image Content
    </BButton>
    <BCollapse id="avatar-ic" class="mt-2">
      <AvatarImageContent/>
    </BCollapse>
    <BButton v-b-toggle.avatar-ico
       variant="dark"
       class="width-25 d-block mt-2">
      Icon Content
    </BButton>
    <BCollapse id="avatar-ico" class="mt-2">
      <AvatarIcon/>
    </BCollapse>
    <BButton v-b-toggle.avatar-text variant="info" class="width-25 d-block mt-2">
      Text Content
    </BButton>
    <BCollapse id="avatar-text" class="mt-2">
      <AvatarTextContent/>
    </BCollapse>
    <BButton
      v-b-toggle.avatar-styling variant="warning"
      class="width-25 d-block mt-2">
      Avatar Styling
    </BButton>
    <BCollapse id="avatar-styling" class="mt-2">
      <AvatarStyling/>
    </BCollapse>
    <BButton
      v-b-toggle.avatar-sizing variant="light"
      class="width-25 d-block mt-2">
      Avatar Sizing
    </BButton>
    <BCollapse id="avatar-sizing" class="mt-2">
      <AvatarSizing />
    </BCollapse>
    <BButton v-b-toggle.avatar-square variant="primary" class="width-25 d-block mt-2">
      Avatar Square
    </BButton>
    <BCollapse id="avatar-square" class="mt-2">
      <AvatarSquare/>
    </BCollapse>
    <BButton
      v-b-toggle.avatar-rounding
      variant="success"
      class="width-25 d-block mt-2">
      Avatar Rounding
    </BButton>
    <BCollapse id="avatar-rounding" class="mt-2">
      <AvatarRounding/>
    </BCollapse>
    <BButton
      v-b-toggle.avatar-button-icon
      variant="secondary"
      class="width-25 d-block mt-2">
      Avatar Button Icon
    </BButton>
    <BCollapse id="avatar-button-icon" class="mt-2">
      <AvatarButton/>
    </BCollapse>
    <BButton
      v-b-toggle.avatar-badge
      variant="danger"
      class="width-25 d-block mt-2">
      Avatar Badge
    </BButton>
    <BCollapse id="avatar-badge" class="mt-2">
      <AvatarBadge/>
    </BCollapse>
    <BButton
      v-b-toggle.avatar-group
      variant="success"
      class="width-25 d-block mt-2">
      Avatar Group
    </BButton>
    <BCollapse id="avatar-group" class="mt-2">
      <AvatarGroup/>
    </BCollapse>
  </div>
</template>

<script>
  import AvatarStandAlone from './AvatarStandAlone';
  import AvatarListGroup from './AvatarListGroup';
  import AvatarImageContent from './AvatarImageContent';
  import AvatarIcon from './AvatarIcon';
  import { BButton } from 'bootstrap-vue';
  import { BCollapse } from 'bootstrap-vue';
  import AvatarTextContent from "./AvatarTextContent";
  import AvatarStyling from "./AvatarStyling";
  import AvatarSizing from "./AvatarSizing";
  import AvatarSquare from "./AvatarSquare";
  import AvatarRounding from "./AvatarRounding";
  import AvatarButton from "./AvatarButton";
  import AvatarBadge from "./AvatarBadge";
  import AvatarGroup from "./AvatarGroup";

  export default {
    name: "Avatar",
    components: {
      AvatarGroup,
      AvatarBadge,
      AvatarButton,
      AvatarRounding,
      AvatarSquare,
      AvatarSizing,
      AvatarStyling,
      AvatarTextContent,
      AvatarStandAlone,
      AvatarListGroup,
      AvatarImageContent,
      AvatarIcon,
      BButton,
      BCollapse,
    }
  }

</script>

<style scoped>

</style>