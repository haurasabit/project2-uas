function registrasi(){
    let nama = document.getElementById("usr_nama").value;
    let email = document.getElementById("usr_email").value;
    let pswd = document.getElementById("usr_pass1").value;
    let daftar = document.getElementById("regist");

    if (nama != "" && email != "" && pswd != ""){
        daftar.setAttribute("action", "backend/profile.html")
        alert("Registrasi berhasil!");
    } else{
        alert("Registrasi gagal! Pastikan semua data terisi.");
    }
}