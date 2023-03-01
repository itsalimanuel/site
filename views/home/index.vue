<template>
  <div id="home">
    <div class="intro">
      <div class="container">
        <h1>Ali Khalouf</h1>
        <h1>Front-end Developer</h1>
        <div class="--desc">
          <p>
            Hey, I am Ali Khalouf, Front-end Developer and an open source enthusiast.Creator of
            <a href="https://github.com/itsalimanuel/pigeon">Pigeon</a> , Ex-
            Front-end developer of <a href="https://starzh.cc">StarEx</a>.
          </p>
          <p>
            Creator of
            <a href="https://www.npmjs.com/package/arabic-slug">arabicSlug</a> ,
            <a href="https://packagist.org/packages/alik/araslug">araslug</a>
            and <a href="https://github.com/arpacks">Arab Packs</a>
          </p>
          <p>
            Dreaming up ideas and making them come true is where my passion
            lies. Working on a wide range of small, medium and large-scale
            projects,I like make everything interactive.
          </p>
          <p>
            Check OPUS Dashboard template on
            <a href="https://github.com/itsalimanuel/opus">Github</a> -
            <strong>SUPPORT RTL.</strong>
          </p>
          <pre
            style="margin-top: 10px; font-size: 18px"
          >more Open source templates on <strong><a href="https://github.com/itsaimanuel">Github</a></strong> soon..</pre>
        </div>
      </div>
    </div>
    <div class="job">
      <div class="job-title">
        <h2>Worked with:</h2>
      </div>
      <div class="job-list">
        <div class="--item" v-for="work in worked">
          <div class="--item-icon">
            <img v-if="work.icon" :src="work.icon" :alt="work.title" />
            <div class="empty-icon" v-else></div>
          </div>
          <div class="--item-title">
            <h4 v-if="work.title">{{ work.title }}</h4>
            <div class="empty-title" v-else></div>
          </div>
          <div class="--item-desc">
            <p v-if="work.desc">
              {{ work.desc }}
            </p>
            <div class="empty-desc" v-else></div>
          </div>
        </div>
      </div>
    </div>
    <div class="projects">
      <div class="projects-title">
        <h2>Projects:</h2>
      </div>
      <div class="projects-list">
        <div class="__item">
          <a href="https://academy.starex.biz/">StarEx Academy</a>
        </div>
        <div class="__item">
          <a href="https://starzh.cc">StarEx</a>
        </div>
        <div class="__item">
          <a href="https://carbonmobile.com">carbon</a>
        </div>
        <div class="__item">
          <a href="https://media-ppl.ru/">PPL</a>
        </div>
        <div class="__item">
          <a href="https://choose.digital/">Choose</a>
        </div>
        <div class="__item">
          <a href="https://ferrumpanel.ru/">Ferrum</a>
        </div>
        <div class="__item">
          <a href="https://glav-pitomnik.ru/">Pitomnik</a>
        </div>
        <div class="__item">
          <a href="https://rubin.pro/">Rubin</a>
        </div>
        <div class="__item">
          <a href="http://saghiry.com/">Saghiry</a>
        </div>
        <div class="__item">
          <a href="https://xn--80ahb4acdj3h.xn--p1ai/">дымнадом</a>
        </div>
      </div>
    </div>
    <div class="--new">
      <div class="container">
        <p>
          Fine me on <a href="https://github.com/itsalimanuel">Github</a>,
          <a href="https://www.awwwards.com/itsali/votes">Awwwards</a>,
          <a href="https://twitter.com/itsAliKhalouf">Twitter</a> and
          <a href="https://youtube.com/@itsalikhalouf">Youtube</a>.
        </p>
        <p>
          Contact me at
          <a href="mailto:itskhaloufali@gmail.com">itskhaloufali@gmail.com</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import strexIcon from "@/assets/companies/starEx.png";
import carbonIcon from "@/assets/companies/carbon.svg";
import aquaIcon from "@/assets/companies/aqua.png";
import nexeIcon from "@/assets/companies/nexe.png";
import sputinkIcon from "@/assets/companies/sputink.png";
// import starExAcademy from "@/assets/companies/academy.svg";
export default {
  name: "index",
  data() {
    return {
      worked: [
        {
          icon: strexIcon,
          title: "StarEx Cryptocurrency exchange",
          desc: "A professional leading digital asset manager, Build a new digital ecology and define a new digital future.",
        },
        {
          icon: carbonIcon,
          title: "Carbon Mobile, GmbH",
          desc: "Carbon was created to accelerate the world's transition to sustainable high-performance materials in connected devices.",
        },
        {
          icon: aquaIcon,
          title: "Aqua-Developments",
          desc: "Aqua-Developments is a company which creates, manages and promotes website.",
        },
        {
          icon: nexeIcon,
          title: "Nexe Group",
          desc: "Mobile products and artificial intelligence for business.",
        },
        {
          icon: sputinkIcon,
          title: "Sputnik group",
          desc: "world-class tourism Platform, based in Russia,#Moscow",
        },
        // {
        //   icon: starExAcademy,
        //   title: "StarEx Academy",
        //   desc: "Industry-leading learning platform, quickly advance from beginner to master",
        // },
        {
          icon: "",
          title: "",
          desc: "",
        },
      ],
    };
  },
};
</script>

<style scoped lang="sass">

#home
  position: relative

  .intro
    text-align: center
    padding-top: 100px
    @media (max-width: 1024px)
      margin-top: 30px

    h1
      font-size: 72px
      line-height: 120%
      @media (max-width: 1024px)
        font-size: 32px
    .--desc
      margin-top: 50px
      @media (max-width: 1024px)
        margin-top: 20px
      p
        color: #ddd
        font-size: 18px
        font-weight: 400
        line-height: 140%
        @media (max-width: 1024px)
          font-size: 16px

  .job
    margin-top: 100px
    max-width: 1250px
    margin-left: auto
    margin-right: auto
    @media (max-width: 1024px)
      margin-top: 40px
      max-width: 87.5%

    &-title
      text-align: center

      h2
        font-size: 28px
        font-weight: 600
        @media (max-width: 1024px)
          font-size: 22px

    &-list
      margin-top: 50px
      display: grid
      grid-template-columns: repeat(3, 1fr)
      grid-gap: 30px
      margin-bottom: 30px
      @media (max-width: 1024px)
        grid-template-columns: 1fr

      .--item
        background-color: #fafafa0d
        padding: 20px
        width: 100%
        border: 1px solid #fafafa1a
        border-radius: 12px
        display: flex
        flex-direction: column
        justify-content: space-between
        transition: .2s
        cursor: pointer

        &:hover
          border: 1px solid rgba(250, 250, 250, 1)


        &-icon
          width: 100%
          max-width: 60px
          max-height: 60px
          margin-bottom: 10px

          img
            width: 100%
            height: auto

        &-title
          h4
            font-size: 22px
            font-weight: 400
            line-height: 120%
            margin-bottom: 10px

        &-desc
          overflow: hidden
          text-overflow: ellipsis
          display: -webkit-box
          -webkit-line-clamp: 2
            line-clamp: 2
          -webkit-box-orient: vertical

          p
            height: inherit
            font-size: 14px
            color: #ddd
            font-weight: 300
            @media (max-width: 1024px)
              font-size: 18px

  .projects
    margin-top: 100px
    max-width: 1250px
    margin-left: auto
    margin-right: auto
    @media (max-width: 1024px)
      margin-top: 40px
      max-width: 87.5%

    &-title
      text-align: center

      h2
        font-size: 28px
        font-weight: 600
        @media (max-width: 1024px)
          font-size: 22px

    &-list
      display: grid
      width: 100%
      grid-template-columns: repeat(3, 1fr)
      margin-top: 50px
      grid-gap: 30px
      margin-bottom: 30px
      @media (max-width: 1024px)
        grid-template-columns: 1fr

      .__item
        min-height: 150px

        a
          position: relative
          width: 100%
          height: 100%
          background-color: #fafafa0d
          padding: 20px
          border: 1px solid #fafafa1a
          border-radius: 12px
          transition: .2s
          text-decoration: none
          display: flex
          align-items: center
          justify-content: center
          font-size: 18px
          color: #ddd

          &:hover
            border: 1px solid rgba(250, 250, 250, 1)
            color: #ffffff

  .--new
    text-align: center
    margin: 15px
</style>
