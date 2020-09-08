
<template>
  <div id="app">
    <div
      class="modal fade"
      id="LoginForm"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header text-center">
            <h4
              class="modal-title w-100 font-weight-bold"
              style="color: #da694b"
            >
              เข้าสู่ระบบ
            </h4>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body mx-5">
            <div class="md-form mb-0">
              <input
                type="text"
                id="Id"
                class="form-control validate"
                placeholder="รหัสนักศึกษา"
              />
              <label
                data-error="wrong"
                data-success="right"
                for="email"
              ></label>
            </div>
            <div class="md-form mb-0">
              <input
                type="password"
                id="pass"
                class="form-control validate"
                placeholder="รหัสผ่าน"
              />
              <label data-error="wrong" data-success="right" for="pass"></label>
            </div>
          </div>
          <div class="modal-footer d-flex justify-content-center">
            <button
              id="confirm"
              class="btn btn-default"
              style="color: #da694b; font-size: 18px"
            >
              ยืนยัน
            </button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <nav class="navbar" style="background-color: #fff9f1; color: #000">
        <span class="navbar-brand">แนะนำการลงทะเบียน</span>
        <a
          href=""
          class="btn btn-default btn-rounded mb-0"
          data-toggle="modal"
          data-target="#LoginForm"
          style="color: #da694b"
          >เข้าสู่ระบบ</a
        >
      </nav>      
    </div>
    <div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
          <!-- Slide One - Set the background image for this slide in the line below -->
          <div
            class="carousel-item active"
            style="background-image: url('https://assets.brandinside.asia/uploads/2018/08/shutterstock_1144265720.jpg')"
          ></div>
          <!-- Slide Two - Set the background image for this slide in the line below -->
          <div
            class="carousel-item"
            style="background-image: url('https://scontent.fbkk2-5.fna.fbcdn.net/v/t31.0-8/457906_209401565827541_264604118_o.jpg?_nc_cat=110&_nc_sid=e3f864&_nc_ohc=4YU9CgPD_sgAX-TUQIo&_nc_ht=scontent.fbkk2-5.fna&oh=ee4d503dfc29e3b1ebb1a58a1dd3c2a3&oe=5F5AD0F3')"
          ></div>
          <!-- Slide Three - Set the background image for this slide in the line below -->
          <div
            class="carousel-item"
            style="background-image: url('https://scontent.fbkk2-4.fna.fbcdn.net/v/t1.0-9/117126707_934782303659826_8227894116535457570_o.jpg?_nc_cat=105&_nc_sid=730e14&_nc_ohc=XuYXKJbvfXIAX-iW64Y&_nc_ht=scontent.fbkk2-4.fna&oh=813c5e2191e804c0e93fb6c6d436d73a&oe=5F586E35')"
          ></div>
        </div>
      </div>
      <nav
        id="menu"
        class="navbar navbar-light navbar-expand-md navigation-clean-button justify-content-center my-3"
      >
        <ul class="nav navbar-nav ">
          <li class="nav-item" role="presentation">
            <a class="nav-link active" href="/">หน้าแรก</a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link" href="/about">วิชาเลือก</a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link" href="#">คำนวณหลักสูตร</a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link" href="#">ติดต่อ</a>
          </li>
        </ul>
      </nav>
    </div>

    <router-view />
  </div>
</template>



<script>
var $ = require("jquery");

$(document).ready(function login() {
  $("#confirm").click(function() {
    console.log("yes");
    if ($("#Id").val() == "07600443" && $("#pass").val() == "100442") {
      location.replace("/?username=07600443");
      return false;
    } else {
      alert("please try again");
    }
  });
});
 
</script>

<style>
#app {
  font-family: "Kanit", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
li > a.nav-link:hover {
  color: rgb(39, 39, 39);
}

a.nav-link {
  font-size: 28px;
  margin: 0 20px;
  color: rgb(167, 45, 45);
}
a.text-icon {
  font-size: 20px;
}

ul {
  display: block;
}

.carousel-item {
  height: 65vh;
  min-height: 350px;
  background: no-repeat center center scroll;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
