<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div id="menubar" class="row my-3">
      <!-- new botron! search -->
      <div class="jumbotron" style="background-color: #fff9f1">
        <div class="container">
          <h2>หลักสูตรภาควิชา คณะวิทยาศาสตร์</h2>
          <div
            id="main-menu"
            class="container-categories d-block"
            style="padding: 15px 0px;"
          >
            <div class="flex-container-catagories">
              <a
                class="pointer"
                href="http://www.math.sc.su.ac.th/"
                style="text-decoration: none;"
              >
                <img
                  class="img-menu"
                  src="../assets/icon-math.png"
                  alt="ภาคคณิตศาสตร์"
                  title="ภาคคณิตศาสตร์"
                />
                <p
                  class="text-truncate mb-0 text-menu-button-text text-center text-dark"
                >
                  ภาคคณิตศาสตร์
                </p>
              </a>
              <a
                class="pointer"
                href="http://www.stat.sc.su.ac.th/tha/index.php"
                style="text-decoration: none;"
              >
                <img
                  class="img-menu"
                  src="../assets/icon-static.png"
                  alt="ภาคแสตท"
                  title="ภาคแสตท"
                />
                <p
                  class="text-truncate mb-0 text-menu-button-text text-center text-dark"
                >
                  ภาคแสตท
                </p>
              </a>
              <a
                class="pointer"
                href="http://www.phy.sc.su.ac.th/"
                style="text-decoration: none;"
              >
                <img
                  class="img-menu"
                  src="../assets/icon-physic.png"
                  alt="ภาคฟิสิกส์"
                  title="ภาคฟิสิกส์"
                />
                <p
                  class="text-truncate mb-0 text-menu-button-text text-center text-dark"
                >
                  ภาคฟิสิกส์
                </p>
              </a>
              <a
                class="pointer"
                href="http://www.chem.sc.su.ac.th/"
                style="text-decoration: none;"
              >
                <img
                  class="img-menu"
                  src="../assets/icon-chem.png"
                  alt="ภาคเคมี"
                  title="ภาคเคมี"
                />
                <p
                  class="text-truncate mb-0 text-menu-button-text text-center text-dark"
                >
                  ภาคเคมี
                </p>
              </a>
              <a
                class="pointer"
                href="http://www.envi.sc.su.ac.th/"
                style="text-decoration: none;"
              >
                <img
                  class="img-menu"
                  src="../assets/icon-envi.png"
                  alt="ภาควิทย์สิ่งเเวดล้อม"
                  title="ภาควิทย์สิ่งเเวดล้อม"
                />
                <p
                  class="text-truncate mb-0 text-menu-button-text text-center text-dark"
                >
                  ภาควิทย์สิ่งเเวดล้อม
                </p>
              </a>
              <a
                class="pointer"
                href="http://www.bio.sc.su.ac.th/"
                style="text-decoration: none;"
              >
                <img
                  class="img-menu"
                  src="../assets/icon-bio.png"
                  alt="ภาคชีววิทยา"
                  title="ภาคชีววิทยา"
                />
                <p
                  class="text-truncate mb-0 text-menu-button-text text-center text-dark"
                >
                  ภาคชีววิทยา
                </p>
              </a>
              <a
                class="pointer"
                href="http://www.micro.sc.su.ac.th/"
                style="text-decoration: none;"
              >
                <img
                  class="img-menu"
                  src="../assets/icon-micro.png"
                  alt="ภาคจุลชีววิทยา"
                  title="ภาคจุลชีววิทยา"
                />
                <p
                  class="text-truncate mb-0 text-menu-button-text text-center text-dark"
                >
                  ภาคจุลชีววิทยา
                </p>
              </a>
              <a
                class="pointer"
                href="https://www.cp.su.ac.th/"
                style="text-decoration: none;"
              >
                <img
                  class="img-menu"
                  src="../assets/icon-com.png"
                  alt="ภาคคอมพิวเตอร์"
                  title="ภาคคอมพิวเตอร์"
                />
                <p
                  class="text-truncate mb-0 text-menu-button-text text-center text-dark"
                >
                  ภาคคอมพิวเตอร์
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- calendar activity -->
      <div id="timeline" class="container-fluid">
        <div class="container">
          <div class="col-md-12">
            <h2>ปฏิทินการศึกษา</h2>
            <div class="swiper-container">
              <p class="swiper-control">
                <button type="button" class="btn btn-default btn-sm prev-slide">
                  Prev
                </button>
                <button type="button" class="btn btn-default btn-sm next-slide">
                  Next
                </button>
              </p>
              <div class="swiper-wrapper timeline">
                <div class="swiper-slide">
                  <div class="timestamp">
                    <span class="date">3 July</span>
                  </div>
                  <div class="status">
                    <span class="text-timeline">ลงทะเบียนเรียน</span>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="timestamp">
                    <span class="date">13 July</span>
                  </div>
                  <div class="status">
                    <span class="text-timeline">วันเปิดเรียน</span>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="timestamp">
                    <span class="date">29 Aug</span>
                  </div>
                  <div class="status">
                    <span class="text-timeline">สอบกลางภาค</span>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="timestamp">
                    <span class="date">2 Nov</span>
                  </div>
                  <div class="status">
                    <span class="text-timeline">สอบปลายภาค</span>
                  </div>
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- Tabs Knowledge -->
      <div style="background-color: #fff9f1">
        <div class="container pt-2">
        <div class="card-deck">
          <!-- Card -->
          <div class="card mb-4 mt-4">
            <!--Card image-->
            <div class="view overlay">
              <img
                class="card-img-top"
                src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg"
                alt="Card image cap"
              />
              <a href="#!">
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>

            <!--Card content-->
            <div class="card-body">
              <!--Title-->
              <h4 class="card-title">Card title</h4>
              <!--Text-->
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
              <button type="button" class="btn btn-light-blue btn-md">
                Read more
              </button>
            </div>
          </div>
          <!-- Card -->

          <!-- Card -->
          <div class="card mb-4 mt-4">
            <!--Card image-->
            <div class="view overlay">
              <img
                class="card-img-top"
                src="https://mdbootstrap.com/img/Photos/Others/images/14.jpg"
                alt="Card image cap"
              />
              <a href="#!">
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>

            <!--Card content-->
            <div class="card-body">
              <!--Title-->
              <h4 class="card-title">Card title</h4>
              <!--Text-->
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
              <button type="button" class="btn btn-light-blue btn-md">
                Read more
              </button>
            </div>
          </div>
          <!-- Card -->

          <!-- Card -->
          <div class="card mb-4 mt-4">
            <!--Card image-->
            <div class="view overlay">
              <img
                class="card-img-top"
                src="https://mdbootstrap.com/img/Photos/Others/images/15.jpg"
                alt="Card image cap"
              />
              <a href="#!">
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>

            <!--Card content-->
            <div class="card-body">
              <!--Title-->
              <h4 class="card-title">Card title</h4>
              <!--Text-->
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
              <button type="button" class="btn btn-light-blue btn-md">
                Read more
              </button>
            </div>
          </div>
          <!-- Card -->
        </div>
        <!-- Card deck -->
      </div>
</div>
      <!-- end Tabs Knowledge -->
      <div class="col"></div>
    </div>
    <div class="container"></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div#menubar {
  display: block;
}
h3 {
  margin: 0px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a.pointer {
  text-decoration: none;
  text-decoration-line: none;
  text-decoration-style: initial;
  text-decoration-color: initial;
  padding-right: 2%;
  padding-left: 2%;
}
a.btn {
  color: #ffffff;
  padding-bottom: 35px;
}

.text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.flex-container-catagories {
  display: flex;
  flex-wrap: wrap;
  font-weight: bold;
  font-size: 12px;
}
.flex-container-catagories {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
img {
  vertical-align: middle;
  border-style: none;
}
.pointer {
  cursor: pointer;
}
.img-menu {
  width: 75px;
  height: 75px;
  margin: 0px;
}
.mb-0 {
  margin-bottom: 0 !important;
}
/* countdown time css */
#timeline {
  padding: 50px 0;
}
.timeline {
  margin: 50px 0;
  list-style-type: none;
  display: flex;
  padding: 0;
  text-align: center;
}
.timeline li {
  transition: all 200ms ease-in;
}
.timestamp {
  width: 100%;
  margin-bottom: 20px;
  padding: 0px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 100;
}
.status {
  padding: 0px 40px;
  display: flex;
  justify-content: center;
  border-top: 4px solid #da694b;
  position: relative;
  transition: all 200ms ease-in;
}

.status span {
  font-weight: 600;
  padding-top: 20px;
}
.status span:before {
  content: "";
  width: 25px;
  height: 25px;
  background-color: #f0b6a7;
  border-radius: 25px;
  border: 4px solid #b2c4ff;
  position: absolute;
  top: -15px;
  left: calc(50% - 12px);
  transition: all 200ms ease-in;
}
.swiper-control {
  text-align: right;
}

.swiper-container {
  width: 100%;
  height: 250px;
  margin: 50px 0;
  overflow: hidden;
  padding: 0 20px 30px 20px;
}
.swiper-slide {
  width: 200px;
  text-align: center;
  font-size: 18px;
}
.swiper-slide:nth-child(2n) {
  width: 40%;
}
.swiper-slide:nth-child(3n) {
  width: 20%;
}
.text-timeline {
  font-size: 14px;
}
/* style tabs knowledge */

/* end style tabs knowledge */
</style>
