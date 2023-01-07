function login_backend(){
    let user_name = document.getElementById("login_username").value;
    let user_pass = document.getElementById("login_pass").value;
    let login = document.getElementById("login");

    if (user_name == "admin_sipemru" && user_pass == "22ti03"){
        login.setAttribute("action", "backend/profile.html")
        alert("Anda berhasil login!");
    } else{
        alert("Login gagal! Pastikan username dan password sudah sesuai.");
    }
}