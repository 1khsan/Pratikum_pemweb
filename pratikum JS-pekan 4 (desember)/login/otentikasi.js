function login() {
  let email = document.getElementById("e-mail");
  let pw = document.getElementById("password");
  if (email.value == "ahmad2017" && pw.value == "integrity") {
    window.location.href = "tampilan.html";
  } else {
    alert("Maaf akun yang anda masukan salah, silahkan ulangi kembali");
  }
}
