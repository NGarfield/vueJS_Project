<template>
  <div>
    <h1>{{ msg }}</h1>
    <section class="container">
      <div class="container">
        <div class="row hidden-xs">
          <div
            class="nav flex-column nav-pills mr-5"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <a
              class="nav-link active"
              id="v-pills-1-tab"
              data-toggle="pill"
              href="#v-pills-1"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
              >หมวดศึกษาทั่วไป</a
            >
            <a
              class="nav-link"
              id="v-pills-2-tab"
              data-toggle="pill"
              href="#v-pills-2"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
              >หมวดวิชาเฉพาะ</a
            >
            <a
              class="nav-link"
              id="v-pills-3-tab"
              data-toggle="pill"
              href="#v-pills-3"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
              >หมวดวิชาเสรี</a
            >
            <a
              class="nav-link"
              id="v-pills-4-tab"
              data-toggle="pill"
              href="#v-pills-4"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
              >หมวดศึกษาทั่วไปกำหนดโดยคณะวิทยาศาสตร์</a
            >
          </div>
          <div class="tab-content" id="v-pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="v-pills-1"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <div class="table-responsive">
                <table
                  id="dtBasicExample"
                  class="table table-striped table-bordered table-sm"
                  cellspacing="0"
                  width="100%"
                >
                  <thead>
                    <tr>
                      <th class="th-sm">รหัสวิชา</th>
                      <th class="th-sm">ชื่อวิชา</th>
                      <th class="th-sm">เทอมต้น</th>
                      <th class="th-sm">เทอมปลาย</th>
                    </tr>
                  </thead>
                  <tbody id="myTable">
                    <tr>
                      <td>082101</td>
                      <td>มนุษย์กับศิลปะ</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>082102</td>
                      <td>มนุษย์กับการสร้างสรรค์</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>082103</td>
                      <td>ปรัชญากับชีวิต</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>082104</td>
                      <td>อารยธรรมโลก</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>082105</td>
                      <td>อารยธรรมไทย</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>082106</td>
                      <td>ศิลปะสถาปัตยกรรมในประชาคมอาเซียน</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>082107</td>
                      <td>สมาธิเพื่อการพัฒนาชีวิต</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>082108</td>
                      <td>ศิลปะกับวัฒนธรรมทางการเห็น</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>082109</td>
                      <td>ดนตรีวิจักษ์</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>082110</td>
                      <td>ศิลปะการดำเนินชีวิตและการทำงานอย่างเป็นสุข</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>083101</td>
                      <td>มนุษย์กับสังคม</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>083102</td>
                      <td>จิตวิทยากับมนุษยสัมพันธ์</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>083103</td>
                      <td>หลักการจัดการ</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>083104</td>
                      <td>กีฬาศึกษา</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>083105</td>
                      <td>การเมือง การปกครองและเศรษฐกิจไทย</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>083106</td>
                      <td>ศิลปะการแสดงในอาเซียน</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>083107</td>
                      <td>วิถีวัฒนธรรมอาเซียน</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>083108</td>
                      <td>วัฒนธรรมดนตรีอาเซียน</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>083109</td>
                      <td>การใช้ชีวิตอย่างสร้างสรรค์</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>083110</td>
                      <td>กิจกรรมเพื่อชีวิตสร้างสรรค์</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>083111</td>
                      <td>ประสบการณ์นานาชาติ</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>083112</td>
                      <td>หลักเศรษฐกิจพอเพียงกับการพัฒนาสังคม</td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-2"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              <form class="form-inline active-cyan-4 mb-3 justify-content-end">
                <input
                  class="form-control form-control-sm mr-2 w-45"
                  type="text"
                  id="tableSearch"
                  placeholder="ค้นหาวิชาเลือกที่ต้องการค้น"
                />
                <i class="fas fa-search" aria-hidden="true"></i>
              </form>
              <table
                id="dtBasicExample"
                class="table table-striped table-bordered table-sm"
                cellspacing="0"
                width="100%"
              >
                <thead>
                  <tr>
                    <th class="th-sm">รหัสวิชา</th>
                    <th class="th-sm">ชื่อวิชา</th>
                    <th class="th-sm">เทอมต้น</th>
                    <th class="th-sm">เทอมปลาย</th>
                  </tr>
                </thead>
                <tbody id="myTable">
                  <tr>
                    <td>082101</td>
                    <td>มนุษย์กับศิลปะ</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>082102</td>
                    <td>มนุษย์กับการสร้างสรรค์</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>082103</td>
                    <td>ปรัชญากับชีวิต</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>082104</td>
                    <td>อารยธรรมโลก</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>082105</td>
                    <td>อารยธรรมไทย</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>082106</td>
                    <td>ศิลปะสถาปัตยกรรมในประชาคมอาเซียน</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>082107</td>
                    <td>สมาธิเพื่อการพัฒนาชีวิต</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>082108</td>
                    <td>ศิลปะกับวัฒนธรรมทางการเห็น</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>082109</td>
                    <td>ดนตรีวิจักษ์</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>082110</td>
                    <td>ศิลปะการดำเนินชีวิตและการทำงานอย่างเป็นสุข</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>083101</td>
                    <td>มนุษย์กับสังคม</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>083102</td>
                    <td>จิตวิทยากับมนุษยสัมพันธ์</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>083103</td>
                    <td>หลักการจัดการ</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>083104</td>
                    <td>กีฬาศึกษา</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>083105</td>
                    <td>การเมือง การปกครองและเศรษฐกิจไทย</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>083106</td>
                    <td>ศิลปะการแสดงในอาเซียน</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>083107</td>
                    <td>วิถีวัฒนธรรมอาเซียน</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>083108</td>
                    <td>วัฒนธรรมดนตรีอาเซียน</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>083109</td>
                    <td>การใช้ชีวิตอย่างสร้างสรรค์</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>083110</td>
                    <td>กิจกรรมเพื่อชีวิตสร้างสรรค์</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>083111</td>
                    <td>ประสบการณ์นานาชาติ</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>083112</td>
                    <td>หลักเศรษฐกิจพอเพียงกับการพัฒนาสังคม</td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-3"
              role="tabpanel"
              aria-labelledby="v-pills-messages-tab"
            >
              <form class="form-inline active-cyan-4 mb-3 justify-content-end">
                <input
                  class="form-control form-control-sm mr-2 w-45"
                  type="text"
                  id="tableSearch"
                  placeholder="ค้นหาวิชาเลือกที่ต้องการค้น"
                />
                <i class="fas fa-search" aria-hidden="true"></i>
              </form>
              <table
                id="dtBasicExample"
                class="table table-striped table-bordered table-sm"
                cellspacing="0"
                width="100%"
              >
                <thead>
                  <tr>
                    <th class="th-sm">รหัสวิชา</th>
                    <th class="th-sm">ชื่อวิชา</th>
                    <th class="th-sm">เทอมต้น</th>
                    <th class="th-sm">เทอมปลาย</th>
                  </tr>
                </thead>
                <tbody id="myTable">
                  <tr>
                    <td>082101</td>
                    <td>มนุษย์กับศิลปะ</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>082102</td>
                    <td>มนุษย์กับการสร้างสรรค์</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>082103</td>
                    <td>ปรัชญากับชีวิต</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>082104</td>
                    <td>อารยธรรมโลก</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>082105</td>
                    <td>อารยธรรมไทย</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>082106</td>
                    <td>ศิลปะสถาปัตยกรรมในประชาคมอาเซียน</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>082107</td>
                    <td>สมาธิเพื่อการพัฒนาชีวิต</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>082108</td>
                    <td>ศิลปะกับวัฒนธรรมทางการเห็น</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>082109</td>
                    <td>ดนตรีวิจักษ์</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>082110</td>
                    <td>ศิลปะการดำเนินชีวิตและการทำงานอย่างเป็นสุข</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>083101</td>
                    <td>มนุษย์กับสังคม</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>083102</td>
                    <td>จิตวิทยากับมนุษยสัมพันธ์</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>083103</td>
                    <td>หลักการจัดการ</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>083104</td>
                    <td>กีฬาศึกษา</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>083105</td>
                    <td>การเมือง การปกครองและเศรษฐกิจไทย</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>083106</td>
                    <td>ศิลปะการแสดงในอาเซียน</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>083107</td>
                    <td>วิถีวัฒนธรรมอาเซียน</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>083108</td>
                    <td>วัฒนธรรมดนตรีอาเซียน</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>083109</td>
                    <td>การใช้ชีวิตอย่างสร้างสรรค์</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>083110</td>
                    <td>กิจกรรมเพื่อชีวิตสร้างสรรค์</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>083111</td>
                    <td>ประสบการณ์นานาชาติ</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>083112</td>
                    <td>หลักเศรษฐกิจพอเพียงกับการพัฒนาสังคม</td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-4"
              role="tabpanel"
              aria-labelledby="v-pills-settings-tab"
            >
              <form class="form-inline active-cyan-4 mb-3 justify-content-end">
                <input
                  class="form-control form-control-sm mr-2 w-45"
                  type="text"
                  id="tableSearch"
                  placeholder="ค้นหาวิชาเลือกที่ต้องการค้น"
                />
                <i class="fas fa-search" aria-hidden="true"></i>
              </form>
              <table
                id="dtBasicExample"
                class="table table-striped table-bordered table-sm"
                cellspacing="0"
                width="100%"
              >
                <thead class="thead-dark">
                  <tr>
                    <th class="th-sm">รหัสวิชา</th>
                    <th class="th-sm">ชื่อวิชา</th>
                    <th class="th-sm">เทอมต้น</th>
                    <th class="th-sm">เทอมปลาย</th>
                  </tr>
                </thead>
                <tbody id="myTable">
                  <tr>
                    <td>082101</td>
                    <td>มนุษย์กับศิลปะ</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>082102</td>
                    <td>มนุษย์กับการสร้างสรรค์</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>082103</td>
                    <td>ปรัชญากับชีวิต</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>082104</td>
                    <td>อารยธรรมโลก</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>082105</td>
                    <td>อารยธรรมไทย</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>082106</td>
                    <td>ศิลปะสถาปัตยกรรมในประชาคมอาเซียน</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>082107</td>
                    <td>สมาธิเพื่อการพัฒนาชีวิต</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>082108</td>
                    <td>ศิลปะกับวัฒนธรรมทางการเห็น</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>082109</td>
                    <td>ดนตรีวิจักษ์</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>082110</td>
                    <td>ศิลปะการดำเนินชีวิตและการทำงานอย่างเป็นสุข</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>083101</td>
                    <td>มนุษย์กับสังคม</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>083102</td>
                    <td>จิตวิทยากับมนุษยสัมพันธ์</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>083103</td>
                    <td>หลักการจัดการ</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>083104</td>
                    <td>กีฬาศึกษา</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>083105</td>
                    <td>การเมือง การปกครองและเศรษฐกิจไทย</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>083106</td>
                    <td>ศิลปะการแสดงในอาเซียน</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>083107</td>
                    <td>วิถีวัฒนธรรมอาเซียน</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>083108</td>
                    <td>วัฒนธรรมดนตรีอาเซียน</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>083109</td>
                    <td>การใช้ชีวิตอย่างสร้างสรรค์</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>083110</td>
                    <td>กิจกรรมเพื่อชีวิตสร้างสรรค์</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>083111</td>
                    <td>ประสบการณ์นานาชาติ</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>083112</td>
                    <td>หลักเศรษฐกิจพอเพียงกับการพัฒนาสังคม</td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
var $ = require("jquery");

$(document).ready(function() {
  $("#dtBasicExample").DataTable();
  $(".dataTables_length").addClass("bs-select");
});
  $(document).ready(function() {
    $("#tableSearch").on("keyup", function() {
      var value = $(this)
        .val()
        .toLowerCase();
      $("#myTable tr").filter(function() {
        $(this).toggle(
          $(this)
            .text()
            .toLowerCase()
            .indexOf(value) > -1
        );
      });
    });
  });
export default {
  name: "Page2",
  props: {
    msg: String,
  },
};
</script>
<style scoped>
section.container {
  padding-top: 30px;
}
ul {
  display: block;
}
.nav > .nav-link {
  font-size: 18px;
  color: #da694b;
}
.nav > a.active {
  color: #fff;
  background-color: #da694b;
}
.nav-link:hover {
  background-color: #f0b6a7;
  color: #fff;
}
li,
a.text-menu {
  padding-top: 15px;
}
</style>
