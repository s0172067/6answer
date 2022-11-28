let q;
let f1 = document.getElementById("field2");
let R = document.getElementById("result");


window.addEventListener('DOMContentLoaded', function (event) {
    let s = document.getElementsByName("myselect");
    s[0].addEventListener("change", function (event) {
        let select = event.target;
        let radios = document.getElementById("R");
        let cheks = document.getElementById("Ch");
        console.log(select.value);
        // Можно использовать getElementsByClassName()
        if (select.value == "300" || select.value=="1000") {
            radios.style.display = "none";
        }
        else {
            radios.style.display = "block";
        }
        if (select.value == "2000" || select.value == "1000") {
            cheks.style.display = "none";
        }
        else {
            cheks.style.display = "block";
        }
    });

    let r = document.querySelectorAll(".R input[type=radio]");
    r.forEach(function (radio) {
        radio.addEventListener("change", function (event) {
            let r = event.target;
            q = Number(r.value);
            console.log(r.value);
            R.textContent = q;
        });
    });

});




function click1() {
    
    
    let F1 = Math.abs(Number(f1.value));
    let r1 = document.getElementsById("R");
    let Ch1 = document.getElementById("Ch");
    let f2 = Math.abs(Number(r1.value));
    let select = event.target;
    if (F1 % 10 >= "0" && F1 % 10 <= "9") {
        if (f1.value >= 0) {
            R.textContent = Number(f1.value) * (Number(r1.value) + select.value);
        }
        else r.textContent = " Not right(< 0 )!!! ";
    } else r.textContent = "Not numbers !!! ";
    R.textContent = q;
}
let buttom = document.getElementById("button1");

buttom.addEventListener("click", click1);