<template>
  <header class="header">
    <div class="header-logo">
      <router-link to="/">Ali</router-link>
    </div>
    <div class="header-links">
      <a
        aria-hidden="true"
        href="https://instagram.com/itsalikhalouf"
        target="_blank"
      >
        <Instagram :size="size" />
      </a>
      <a aria-hidden="true" target="_blank" href="https://github.com/itsalimanuel">
        <Github :size="size" />
      </a>
      <a aria-hidden="true" target="_blank" href="https://twitter.com/itsalikhalouf">
        <Twitter :size="size" />
      </a>
    </div>
  </header>
</template>
<script>
import Instagram from "~/components/icons/instagram.vue";
import Github from "~/components/icons/github.vue";
import Twitter from "~/components/icons/twitter.vue";

export default {
  name: "header",
  components: { Twitter, Github, Instagram },
  data() {
    return {
      size: "22px",
    };
  },
};
</script>

<style scoped lang="sass">

.header
  position: relative
  padding: 15px 30px
  display: flex
  align-items: center
  justify-content: space-between
  &-logo
    a
      font-size: 20px
      text-decoration: none
      color: #ffffff
      font-family: cursive
  &-links
    display: flex
    align-items: center
    a
      margin-right: 10px
      &:last-child
        margin-right: 0
</style>
