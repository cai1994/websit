<template>
  <div class="fullpage-container">
    <TopNav/>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section" >
       <HomePage/>
      </div>
      <div class="section" >
        <ProductService/>
      </div>
      <div class="section" >
        <ProductSescription/>
      </div>
      <div class="section" >
        <Contact/>
      </div>
      <div class="section" >
        <Partner/>
      </div>
       <div class="section">
        <AboutUs/>
      </div>
      <div class="section" >
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
        anchors: [
          "HomePage",
          "ProductService",
          "ProductSescription",
          "Contact",
          "Partner",
          "AboutUs",
          "OurTeam"
        ],

        sectionsColor: [
          "#fff",
          "#fff",
          "#2e2e2e",
          "#2e2e2e",
          "#fff",
          "#000000",
          "#000000"
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
  }
};
</script>

