document.querySelector(".action").onclick = function(){
    let index_rol = 0;
    let kolichestvo_user = document.querySelector(".user-form").value;
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
    // for (let schetchik = 0;schetchik < kolichestvo_user_massiv.length;schetchik = schetchik + 1)   {
    //     rand =  Math.floor(Math.random() * roles_massiv.length)
    //     // console.log("Массив с ролями: " + roles_massiv);
    //     // console.log("rand = " + rand)

    //     while (roles_massiv[rand] == undefined) {
    //         rand =  Math.floor(Math.random() * roles_massiv.length)
    //     } 
    //     x = x + 1;
    //     console.log(kolichestvo_user_massiv[x] +  "  =  " + roles_massiv[rand]);
    //     roles_massiv.splice(roles_massiv[rand]);
    // }
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