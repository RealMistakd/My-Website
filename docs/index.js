function cycleAbout() {
    setTimeout(ab1, 0);
    setTimeout(ab2, 100);
    setTimeout(ab3, 200);
    setTimeout(ab4, 300);
    setTimeout(ab5, 400);
    setTimeout(ab6, 500);
    document.getElementById("rArrow").setAttribute("onclick", "error()");
    document.getElementById("lArrow").setAttribute("onclick", "cycleHome()");
}

function cycleHome() {
    setTimeout(ho1, 0);
    setTimeout(ho2, 100);
    setTimeout(ho3, 200);
    setTimeout(ho4, 300);
    setTimeout(ho5, 400);
    document.getElementById("rArrow").setAttribute("onclick", "cycleAbout()");
    document.getElementById("lArrow").setAttribute("onclick", "error()");
}

function error() {
    document.getElementById("rArrow").setAttribute("onclick", "none()");
    document.getElementById("lArrow").setAttribute("onclick", "none()");
    document.getElementById("lArrow").className = "";
    document.getElementById("rArrow").className = "";
    setTimeout(er1, 0);
    setTimeout(er2, 500);
    setTimeout(er3, 1000);
    setTimeout(er4, 1500);
    setTimeout(er5, 2000);
    setTimeout(er6, 2500);
    setTimeout(er7, 4000);
    setTimeout(er8, 4100);
    setTimeout(er9, 4200);
    setTimeout(er10, 4300);
    setTimeout(er11, 4400);
    setTimeout(er12, 4500);
    setTimeout(er13, 4700);
    setTimeout(er14, 5000);
    setTimeout(er15, 5500);
    setTimeout(er16, 6000);
    setTimeout(er17, 6200);
    setTimeout(er18, 6300);
    setTimeout(er19, 6400);
    setTimeout(er20, 6500);
    setTimeout(er21, 6600);
    setTimeout(er22, 6700);
    setTimeout(er23, 6800);
    setTimeout(er24, 6900);
    setTimeout(er25, 7000);
    setTimeout(er26, 8000);
    setTimeout(er27, 10000);
    setTimeout(er28, 11000);
    setTimeout(er29, 12000);
    setTimeout(errorReset, 12000);
}

function errorReset() {
    document.getElementById("rArrow").setAttribute("onclick", "cycleAbout()");
    document.getElementById("lArrow").setAttribute("onclick", "error()");
    document.getElementById("lArrow").className = "lArrow";
    document.getElementById("rArrow").className = "rArrow";
}

function er1() {
    document.getElementById("home").className = "home2";
    document.getElementById("page").innerHTML = "_";
}

function er2() {
    document.getElementById("page").innerHTML = "";
}

function er3() {
    document.getElementById("page").innerHTML = "_";
}

function er4() {
    document.getElementById("page").innerHTML = "";
}

function er5() {
    document.getElementById("page").innerHTML = "_";
}

function er6() {
    document.getElementById("page").innerHTML = "";
}

function er7() {
    document.getElementById("page").innerHTML = "_";
}

function er8() {
    document.getElementById("page").innerHTML = "e_";
}

function er9() {
    document.getElementById("page").innerHTML = "er_";
}

function er10() {
    document.getElementById("page").innerHTML = "err_";
}

function er11() {
    document.getElementById("page").innerHTML = "erro_";
}

function er12() {
    document.getElementById("page").innerHTML = "error_";
}

function er13() {
    document.getElementById("page").innerHTML = "error";
}

function er14() {
    document.body.style.background = "#FF0000";
}

function er15() {
    document.getElementById("page").innerHTML = "";
}

function er16() {
    document.getElementById("page").innerHTML = "_";
}

function er17() {
    document.getElementById("page").innerHTML = "r_";
}

function er18() {
    document.getElementById("page").innerHTML = "re_";
}

function er19() {
    document.getElementById("page").innerHTML = "reb_";
}

function er20() {
    document.getElementById("page").innerHTML = "rebo_";
}

function er21() {
    document.getElementById("page").innerHTML = "reboo_";
}

function er22() {
    document.getElementById("page").innerHTML = "reboot_";
}

function er23() {
    document.getElementById("page").innerHTML = "rebooti_";
}

function er24() {
    document.getElementById("page").innerHTML = "rebootin_";
}

function er25() {
    document.getElementById("page").innerHTML = "rebooting_";
}

function er26() {
    document.getElementById("page").innerHTML = "rebooting";
}

function er27() {
    document.getElementById("page").innerHTML = "";
}

function er28() {
    document.getElementById("reboot").className = "reboot";
}

function er29() {
    document.getElementById("page").innerHTML = "Home";
    document.getElementById("reboot").className = "reboot0";
    document.getElementById("home").className = "home";
    document.body.style.backgroundImage =
        "radial-gradient(#ffffff 0.5px, #0d0a1f 0.5px)";
    document.body.style.backgroundSize = "10px 10px";
}

function ab1() {
    document.getElementById("page").innerHTML = "=#>*}";
}

function ab2() {
    document.getElementById("page").innerHTML = "A=#>*";
}

function ab3() {
    document.getElementById("page").innerHTML = "Ab=#>";
}

function ab4() {
    document.getElementById("page").innerHTML = "Abo=#";
}

function ab5() {
    document.getElementById("page").innerHTML = "Abou=";
}

function ab6() {
    document.getElementById("page").innerHTML = "About";
}

function ho1() {
    document.getElementById("page").innerHTML = "<*&%";
}

function ho2() {
    document.getElementById("page").innerHTML = "H-@>";
}

function ho3() {
    document.getElementById("page").innerHTML = "Ho#+";
}

function ho4() {
    document.getElementById("page").innerHTML = "Hom<";
}

function ho5() {
    document.getElementById("page").innerHTML = "Home";
}

function none() {}
