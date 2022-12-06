let q;
let f1 = document.getElementById("field2");
let R = document.getElementById("result");
let A = 0;
let B;
let C;
let i = 0;
let a1;
let a2;
let a3;

window.addEventListener('DOMContentLoaded', function (event) {
    let s = document.getElementsByName("myselect");
    let radios = document.getElementById("R");
    radios.style.display = "none";
    let c = document.getElementsByName("Ch");
    let cheks = document.getElementById("Ch");
    cheks.style.display = "none";
    s[0].addEventListener("change", function (event) {
        let select = event.target;

        console.log(select.value);
        if (select.value == "300" || select.value == "1000") {
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
        if (select.value == "300") {
            i = 3;
        }
        if (select.value == "2000") {
            i = 2;
        }
        if (select.value == "1000") {
            i = 1;
        }
        B = Number(select.value);
        // A = 0;



        let r = document.getElementsByName("R");

        if (i == 1) {
            A = 0;
            // R.textContent = A;

        }

        if (i == 2) {
            A = 0;

            r[0].addEventListener("change", function (event) {
                let select2 = event.target;
                A = Number(select2.value);
                // R.textContent = select2.value;
            });
        }
        if (i == 3) {
            C = 0;




            c[0].addEventListener("change", function (event) {
                let select2 = event.target;

                if (select2.checked) {
                    a1 = Number(select2.value);
                }
                else {

                    a1 = -1 * Number(select2.value);
                }
                C = C + a1;
                if (C < 0) {
                    C = 0;
                }
                A = C;
                //R.textContent = A; 


            });
            C = 0;

        }
        //R.textContent = "";




    });


});


function click1() {

    let F1 = Math.abs(Number(f1.value));

    if (F1 % 10 >= "0" && F1 % 10 <= "9") {
        if (f1.value >= 0) {
            R.textContent = Number(f1.value) * (B + A);
        }
        else R.textContent = " Not right(< 0 )!!! ";
    } else R.textContent = "Not numbers !!! ";
     //R.textContent = B;
}
let buttom = document.getElementById("button1");

buttom.addEventListener("click", click1);