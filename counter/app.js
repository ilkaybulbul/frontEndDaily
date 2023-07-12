// // set initial count 

// let count = 0; // sayıcı için bir sayma değişkeni oluşturduk ve bunu 0 dan başlattık.

// // select value and buttons
// let value  = document.querySelector('#value');  //value id li span ı seçtik.

// let btn = document.querySelectorAll('.btn');    // btn clasına sahip bütün butonları seçtik çünkü butonları teker teker seçmek daha uzun sürecek

// btn.forEach(function (btn) { // seçtiğimiz butonların üzerinde forEach() methodu ile geçtik 
//     btn.addEventListener('click', function (e) { // her bir methoduun click event 'ına ulaştık.
//         const style = e.currentTarget.classList; // click fonksiyonuna class listleri kontol etmek iiçin yeni bir değişken oluşturduk
//         if(style.contains('decrease')){ // if sorgusu ile decrease btn üzerinde teker teket eksiltme uyguladık
//             count--;
//         }else if(style.contains('increase')){ // if ile increase btn üzernden artırma işlemi uyguladık
//             count++;
//         }else{
//             count = 0; // son kalan reset butonuna ise count değişkenini 0 atayarak basit bir resetleme işlemi uyguladık.
//         }
//         value.textContent = count // spanın value idsine de count işlemini aktararak web kısmında görünmesini sağladık.
//     });
// });


let count = 0;

let value = document.querySelector('#value');

let btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e){
        const style = e.currentTarget.classList;
        if(style.contains('decrease')){
            count--;
        }else if(style.contains('increase')){
            count++;
        }else{
            count = 0;
        }

        value.textContent = count;
    })
})

