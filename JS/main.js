$(document).ready(() => {
  let i = 1;
  $("#btnDangKy").click(() => {
    $("#modalDangKy").modal();
  })



  kiemTraHoTen = () => {
    let regex = /^([A-Z]{1}[a-z]*){1}(\s[A-Z]{1}[a-z]*)+$/;
    if ( $("#inpHoTen").val() == "" ) {
      $("#resultHoTen").html("Họ tên không được để trống");
      return false;
    }
    if ( !regex.test( $("#inpHoTen").val() ) ) {
      $("#resultHoTen").html("Họ tên không hợp lệ");
      return false;
    }
    $("#resultHoTen").html("Hợp lệ");
    return true;
  }
  $("#inpHoTen").blur(kiemTraHoTen);



  kiemTraSoAo = () => {
    let regex = /^[1-9]{1}$/;
    if ( $("#inpSoAo").val() == "" ) {
      $("#resultSoAo").html("Số áo không được để trống");
      return false;
    }
    if ( !regex.test( $("#inpSoAo").val() ) ) {
      $("#resultSoAo").html("Số áo không hợp lệ");
      return false;
    }
    $("#resultSoAo").html("Hợp lệ");
    return true;
  }
  $("#inpSoAo").blur(kiemTraSoAo);



  kiemTraCauLacBo = () => {
    let regex = /^[A-Z]{1}[\s0-9A-Za-z]*$/;
    if ( $("#inpCauLacBo").val() == "" ) {
      $("#resultCauLacBo").html("Câu lạc bộ không được để trống");
      return false;
    }
    if ( !regex.test( $("#inpCauLacBo").val() ) ) {
      $("#resultCauLacBo").html("Câu lạc bộ không hợp lệ");
      return false;
    }
    $("#resultCauLacBo").html("Hợp lệ");
    return true;
  }
  $("#inpCauLacBo").blur(kiemTraCauLacBo);



  kiemTraNgayTapTrung = () => {
    if ( $("#inpNgayTapTrung").val() == "" ) {
      $("#resultNgayTapTrung").html("Ngày tập trung không được để trống");
      return false;
    }
    let today = new Date;
    let ngayTapTrung = new Date( $("#inpNgayTapTrung").val() );
    today.setDate( today.getDate() + 15 );
    if ( ngayTapTrung < today ) {
      $("#resultNgayTapTrung").html("Ngày tập trung phải cách ngày hiện tại 15 ngày");
      return false;
    }
    $("#resultNgayTapTrung").html("Hợp lệ");
    return true;
  }
  $("#inpNgayTapTrung").blur(kiemTraNgayTapTrung);



  kiemTraSoDienThoai = () => {
    let regex = /^09[0-9]{2}(-[0-9]{3}){2}$/;
    if ( $("#inpSoDienThoai").val() == "" ) {
      $("#resultSoDienThoai").html("Số điện thoại không được để trống");
      return false;
    }
    if ( !regex.test( $("#inpSoDienThoai").val() ) ) {
      $("#resultSoDienThoai").html("Số điện thoại không hợp lệ");
      return false;
    }
    $("#resultSoDienThoai").html("Hợp lệ");
    return true;
  }
  $("#inpSoDienThoai").blur(kiemTraSoDienThoai);



  kiemTraAnhDaiDien = () => {
    if ( $("#inpAnhDaiDien").val() == "" ) {
      $("#resultAnhDaiDien").html("Ảnh đại diện không được để trống");
      return false;
    }
    $("#resultAnhDaiDien").html("Hợp lệ");
    return true;
  }
  $("#inpAnhDaiDien").blur(kiemTraAnhDaiDien);



  $("#btnLuu").click(() => {
    if (
      kiemTraHoTen() &&
      kiemTraSoAo() &&
      kiemTraCauLacBo() &&
      kiemTraNgayTapTrung() &&
      kiemTraSoDienThoai() &&
      kiemTraAnhDaiDien()
    ) {
      document.querySelector("tbody").appendChild( document.createElement("tr") );

      document.querySelector("tbody > tr:last-child").appendChild( document.createElement("td") );
      document.querySelector("tbody > tr:last-child > td:last-child").appendChild( document.createTextNode( i ) );

      document.querySelector("tbody > tr:last-child").appendChild( document.createElement("td") );
      document.querySelector("tbody > tr:last-child > td:last-child").appendChild( document.createTextNode( $("#inpHoTen").val() ) );

      document.querySelector("tbody > tr:last-child").appendChild( document.createElement("td") );
      document.querySelector("tbody > tr:last-child > td:last-child").appendChild( document.createTextNode( $("#inpSoAo").val() ) );

      document.querySelector("tbody > tr:last-child").appendChild( document.createElement("td") );
      document.querySelector("tbody > tr:last-child > td:last-child").appendChild( document.createTextNode( $("#inpCauLacBo").val() ) );

      document.querySelector("tbody > tr:last-child").appendChild( document.createElement("td") );
      document.querySelector("tbody > tr:last-child > td:last-child").appendChild( document.createTextNode( $("#inpNgayTapTrung").val() ) );

      document.querySelector("tbody > tr:last-child").appendChild( document.createElement("td") );
      document.querySelector("tbody > tr:last-child > td:last-child").appendChild( document.createTextNode( $("#inpSoDienThoai").val() ) );

      document.querySelector("tbody > tr:last-child").appendChild( document.createElement("td") );
      document.querySelector("tbody > tr:last-child > td:last-child").appendChild( document.createTextNode( $("#inpAnhDaiDien").val() ) );

      i++;
    }
  })
})