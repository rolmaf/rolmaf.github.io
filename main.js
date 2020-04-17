document.querySelector(".action").onclick = function(){
    if (document.querySelector(".button-action").innerHTML == "Вернуться назад"){
        hand()
    }
    else {
        auto();
    }
}

function hand() {       
    let mafia = document.querySelector(".mafia").value;
    let people = document.querySelector(".people").value;
    let manjak = document.querySelector(".manjak").checked;
    let doctor = document.querySelector(".doctor").checked;
    let sherif = document.querySelector(".sherif").checked;
    let babochka = document.querySelector(".babochka").checked;
    let komisar = document.querySelector(".komisar").checked;
    document.querySelector("p").innerHTML="";
    console.log("Маньяк: " + manjak);
    console.log("Мирные жители: " , people);
    console.log("Мафия " + mafia);
    console.log("Доктор: " + doctor);
    let roles = [];
    while (roles.length != mafia) {
        roles.push("Мафия");
    }   
    for (let schetchik_new_2 = 0;schetchik_new_2 < people;schetchik_new_2++) {
        roles.push("Мирный житель");
    }
    if (manjak == true) {
        roles.push("Маньяк");
    }
    if (doctor == true) {
        roles.push("Доктор");
    }
    if (sherif == true) {
        roles.push("Шериф");
    }
    if (babochka == true) {
        roles.push("Бабочка");
    }
    if (komisar == true) {
        roles.push("Комисар");
    }
    let i_new_2 = 1;
    let area_rand2 = [];
    for (let schetchik_new_3 = 0;schetchik_new_3 < roles.length;schetchik_new_3++)   {
        random =  Math.floor(Math.random() * roles.length)
        while (area_rand2.indexOf(random) != -1) {     
            random =  Math.floor(Math.random() * roles.length);
        }
        if (area_rand2.indexOf(random) == -1){
            area_rand2.push(random);
        }
        console.log(i_new_2 + "   " + roles[random]);
        document.querySelector("p").innerHTML += i_new_2 + "   " + roles[random] + "<br>";
        i_new_2 = i_new_2 + 1;
    }
    // console.log(roles);
}

let element = document.querySelector(".settings");
let element_2 = document.querySelector(".form-row");


document.querySelector(".button-action").onclick = function() {
    if (document.querySelector(".button-action").innerHTML == "Вернуться назад") {
        document.querySelector("p").innerHTML = "";
        function_hiden_1();
    }
    else {
        function_hiden_2();
    }
}


function function_hiden_1() {
    document.querySelector(".button-action").innerHTML = "Настроить вручную";
    element.classList.add("hiden");
    element_2.classList.remove("hiden");
}


function function_hiden_2() {
    document.querySelector(".button-action").innerHTML = "Вернуться назад";
    element.classList.remove("hiden");
    element_2.classList.add("hiden");
}





function auto() {
    let index_rol = 0;
    let kolichestvo_user = document.querySelector(".user-form").value;
    if (kolichestvo_user > 30) {
        alert("Не вводите так много!");
    }
    else {
        if (kolichestvo_user == "" || kolichestvo_user == undefined) {
            alert("Введите какое либо значение");
        }
        else {
            let kolichestvo_user_massiv = [];
            let area_rand = [];
            let i = 1;
            let x = 0;
            let i_new = 1;
            let index = 0;
            let schetchik2  = kolichestvo_user;
            let index_random_massiv = 0;
            let roles_massiv = ["Мафия", "Комисар" , "Доктор"]; 
            let mafia = Math.floor(kolichestvo_user / 3);
            let random_element_massiv = "";
            document.querySelector("p").innerHTML = "";
            while (roles_massiv.length  != mafia + 2) {
                roles_massiv.push("Мафия");
            }
            while (roles_massiv.length != kolichestvo_user) {
                roles_massiv.push("Мирный Житель");
            }
            while (kolichestvo_user_massiv.length != kolichestvo_user) {
                kolichestvo_user_massiv.push(i);
                i = i + 1;
            }
            let rand;
            for (let schetchik = 0;schetchik < kolichestvo_user_massiv.length;schetchik = schetchik + 1)   {
                rand =  Math.floor(Math.random() * kolichestvo_user_massiv.length)
                while (area_rand.indexOf(rand) != -1) {     
                    rand =  Math.floor(Math.random() * kolichestvo_user_massiv.length);
                }
                if (area_rand.indexOf(rand) == -1){
                    area_rand.push(rand);
                }
                console.log(i_new + "   " + roles_massiv[rand]);
                document.querySelector("p").innerHTML += i_new + "   " + roles_massiv[rand] + "<br>";
                i_new = i_new + 1;
            }
            document.querySelector("p").innerHTML += "Удачной вам игры!"
            console.log("area_rand = " + area_rand  );
            console.log("Длина массива с людьми: " + kolichestvo_user_massiv.length);
            console.log("Массив с ролями: " + roles_massiv);
            console.log("Массив с кол-во человек: " + kolichestvo_user_massiv);
        }       
    }
}
