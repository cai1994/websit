<template>
  <div class="fullpage-container">
    <TopNav/>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section" data-anchor="HomePage">
       <HomePage/>
      </div>
      <div class="section" data-anchor="ProductService">
        <ProductService/>
      </div>
      <div class="section" data-anchor="ProductSescription">
        <ProductSescription/>
      </div>
      <div class="section" data-anchor="Contact">
        <Contact/>
      </div>
      <div class="section" data-anchor="Partner">
        <Partner/>
      </div>
       <div class="section" data-anchor="AboutUs">
        <AboutUs/>
      </div>
      <div class="section" data-anchor="OurTeam">
        <OurTeam/>
      </div>
    </full-page>
  </div>
</template>
<script>
// @ is an alias to /src
import HomePage from "@/components/common/HomePage.vue";
import ProductService from "@/components/common/ProductService.vue";
import ProductSescription from "@/components/common/ProductSescription.vue";
import Contact from "@/components/common/Contact.vue";
import Partner from "@/components/common/Partner.vue";
import TopNav from "@/components/common/TopNav.vue";
import AboutUs from "@/components/common/AboutUs.vue";
import OurTeam from "@/components/common/OurTeam.vue";

export default {
  name: "home",
  data() {
    return {
      options: {
        afterLoad: this.afterLoad,
        scrollOverflow: true,
        scrollBar: false,
        menu: "#menu",
        // navigation: true,
        // anchors: ['page1', 'page2', 'page3'],
        sectionsColor: [
          "#fff",
          "#fff",
          "#2e2e2e",
          "#fec401",
          "#fff",
          "#000000",
          "#000000",
        ],
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE"
      }
    };
  },
  components: {
    HomePage,
    ProductService,
    ProductSescription,
    Contact,
    Partner,
    TopNav,
    AboutUs,
    OurTeam
  },
  mounted(){
  }
};
</script>

