<template>
  <div class="home">
    <HelloWorld msg="" />
    <a
      id="back-to-top"
      href="#"
      class="btn btn-dark btn-lg back-to-top"
      role="button"
      ><i class="fa fa-arrow-up justify-content-center" aria-hidden="true"></i
    ></a>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
var $ = require('jquery');

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $("#back-to-top").fadeIn();
    } else {
      $("#back-to-top").fadeOut();
    }
  });
  // scroll body to 0px on click
  $("#back-to-top").click(function() {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      100
    );
    return false;
  });
});

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>

<style scoped>

.back-to-top {
  width: 70px;
  height: 47px;
  position: fixed;
  bottom: 25px;
  right: 25px;
  display: none;
}
</style>
