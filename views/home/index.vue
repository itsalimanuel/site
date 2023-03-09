<template>
  <div id="home">
    <div class="container">
      <div class="intro">
        <div class="intro-info">
          <h1>Ali Khalouf</h1>
          <h1>Front-end Developer</h1>
          <div class="--desc">
            <p>
              Hey, I am Ali Khalouf, Front-end Developer and an open source
              enthusiast. <br />
              Creator of
              <a href="https://github.com/itsalimanuel/pigeon">Pigeon</a> ,
              <a href="https://www.npmjs.com/package/arabic-slug">arabicSlug</a>
              ,
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
        <div class="intro-card" @mousemove="handleMouseMove" id="top">
          <div class="perspective">
            <div @click="goToAnimation" class="card">
              <div class="thumb"></div>
              <h2 class="card_title1">vuejs</h2>
              <h2 class="card_title2">nextjs</h2>
              <h2 class="card_title3">react</h2>
              <h2 class="card_title4">nuxtjs</h2>
              <h2 class="card_title5">SASS</h2>
              <h2 class="card_title6">Tailwind</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="job">
      <div class="job-title">
        <h2>I have had professional experience collaborating with::</h2>
      </div>
      <div class="job-list">
        <div class="--item">
          <div class="--item-icon">
            <nuxt-img format="webp" src="/companies/starEx.png" alt="work.title" />
          </div>
          <div class="--item-title">
            <h2>StarEx Cryptocurrency exchange</h2>
          </div>
          <div class="--item-desc">
            <p>A professional leading digital asset manager, Build a new digital ecology and define a new digital future.</p>
          </div>
        </div>
        <div class="--item">
          <div class="--item-icon">
            <nuxt-img format="webp" src="/companies/carbon.svg" alt="work.title" />
          </div>
          <div class="--item-title">
            <h2>Carbon Mobile, GmbH</h2>
          </div>
          <div class="--item-desc">
            <p>Carbon was created to accelerate the world's transition to sustainable high-performance materials in connected devices.</p>
          </div>
        </div>
        <div class="--item">
          <div class="--item-icon">
            <nuxt-img format="webp" src="/companies/aqua.png" alt="work.title" />
          </div>
          <div class="--item-title">
            <h2>Aqua-Developments</h2>
          </div>
          <div class="--item-desc">
            <p>Aqua-Developments is a company which creates, manages and promotes website.</p>
          </div>
        </div>
        <div class="--item">
          <div class="--item-icon">
            <nuxt-img format="webp" src="/companies/choose.svg" alt="work.title" />
          </div>
          <div class="--item-title">
            <h2>Choose Digital</h2>
          </div>
          <div class="--item-desc">
            <p>Choose Digital is a company which creates, manages and promotes website.</p>
          </div>
        </div>
        <div class="--item">
          <div class="--item-icon">
            <nuxt-img format="webp" src="/companies/nexe.png" alt="work.title" />
          </div>
          <div class="--item-title">
            <h2>Nexe Group</h2>
          </div>
          <div class="--item-desc">
            <p>Mobile products and artificial intelligence for business.</p>
          </div>
        </div>
        <div class="--item">
          <div class="--item-icon">
            <nuxt-img format="webp" src="/companies/sputink.png" alt="work.title" />
          </div>
          <div class="--item-title">
            <h2>Sputnik group</h2>
          </div>
          <div class="--item-desc">
            <p>world-class tourism Platform, based in Russia,#Moscow.</p>
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
import gsap from "gsap";

// import starExAcademy from "@/assets/companies/academy.svg";
export default {
  name: "index",
  methods: {
    handleMouseMove() {
      const card = gsap.utils.toArray(".card")[0];
      const topSection = document.querySelector("#top");

      topSection.addEventListener("mousemove", (event) => {
        const mouseX = -(window.innerWidth / 2 - event.pageX) / 30;
        const mouseY = (window.innerHeight / 2 - event.pageY) / 10;

        gsap.to(card, {
          duration: 0.5,
          rotationY: mouseX,
          rotationX: mouseY,
          ease: "power2.out",
        });
      });
    },
    goToAnimation() {
      console.log("clicked");
      window.location.href = "https://codepen.io/itsalimanuel/pen/PodKEda";
    },
  },
  mounted() {
    this.handleMouseMove();
  },
};
</script>

<style scoped lang="sass">

#home
  position: relative

  .intro
    display: grid
    grid-template-columns: repeat(2,1fr)
    gap:10px
    // text-align: center
    align-items: center
    padding-top: 100px
    @media (max-width: 1024px)
      margin-top: 30px
    @media (max-width: 678px)
      grid-template-columns: 1fr
      padding-top: 20px
    &-card
      cursor: pointer
      .perspective
        width: 100%
        perspective: 1000px
        .card
          width: 270px
          height: 413px
          margin: auto
          box-shadow: 0 70px 63px -60px #494848
          transform-style: preserve-3d
          transition: transform .05s linear
          @media (max-width: 678px)
            margin-top: 40px
            height:  450px
            width: 320px
          .thumb
            background-image: url('@/assets/44509661.jpg')
            background-size: cover
            background-position: center
            background-repeat: no-repeat
            height: 100%
            width: 100%
            border-radius: 15px
            &::after
              background: inherit
              content: ''
              display: block
              position: absolute
              left: -60px
              top: 40px
              width: 100%
              height: 108%
              z-index: -1
              filter: blur(55px)
          &_title1
            position: absolute
            top: 5%
            left: -20px
            font-size: 18px
            line-height: 100%
            border-radius: 4px
            background: #42b883
            padding: 5px 10px
            font-weight: 100
            transform: translateZ(80px)
          &_title2
            position: absolute
            top: 0
            line-height: 100%
            border-radius: 4px
            padding: 5px 10px
            background: #000
            color: #fff
            right: 0px
            font-size: 18px
            font-weight: 100
            transform: translateZ(80px)

          &_title3
            position: absolute
            top: 30%
            left: 50%
            padding: 5px 10px
            line-height: 100%
            border-radius: 4px
            color: #61dafb
            background: #20232a
            font-size: 18px
            font-weight: 100
            transform: translateZ(80px)

          &_title4
            position: absolute
            top: 50%
            padding: 5px 10px
            left: 5%
            font-size: 18px
            line-height: 100%
            border-radius: 4px
            background: #18181B
            color: #00DC82
            font-weight: 100
            transform: translateZ(80px)
          &_title5
            position: absolute
            bottom: 0
            line-height: 100%
            border-radius: 4px
            padding: 5px 10px
            background: #bf4080
            right: 0px
            font-size: 18px
            font-weight: 100
            transform: translateZ(80px)
          &_title6
            position: absolute
            bottom: 0
            padding: 5px 10px
            left: 0px
            line-height: 100%
            border-radius: 4px
            background: #0ea5e9
            font-size: 18px
            font-weight: 100
            transform: translateZ(80px)

    h1
      font-size: 36px
      line-height: 120%
      @media (max-width: 1024px)
        font-size: 32px
    .--desc
      margin-top: 20px
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
          h2
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
