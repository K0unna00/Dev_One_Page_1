let guideMapArr=[
     {number:"1", title:"Видеоуроки онлайн-встречи",subTitle:'Доступ к ним остается навсегда.'},
     {number:"2",  title:"Видеоуроки онлайн-встречи",subTitle:'Доступ к ним остается навсегда.'},
     {number:"3",  title:"Видеоуроки онлайн-встречи",subTitle:'Доступ к ним остается навсегда.'},
     {number:"4",  title:"Видеоуроки онлайн-встречи",subTitle:'Доступ к ним остается навсегда.'}
]
let guideMap = document.querySelector('.guideMap')
for (const obj of guideMapArr) {
     let li = document.createElement("li");
     li.innerHTML=`
               <div class="number">
                    ${obj.number}
               </div>
               <hr>
               <div class="title">
                    ${obj.title}
               </div>
               <div class="text">
               ${obj.subTitle}
               </div>`;
     guideMap.appendChild(li);
}

// ==============Slider==============
let imagesDiv= document.querySelector(".images");
let leftBtn=document.querySelector(".go-left");
let rightBtn=document.querySelector(".go-right");
let image1=document.querySelector(".active-img");


console.log(imagesDiv.children);

function goLeft(){
     for (const img of imagesDiv.children) {
          img.style.transform = "translateX(0)";
     }
}
function goRight(){
     for (const img of imagesDiv.children) {
          img.style.transform = "translateX(-1170px)";
     }
}
leftBtn.addEventListener("click",goLeft);
rightBtn.addEventListener("click",goRight);


//I know this works for just 2 images , I mean if I add more image , then the code doest work. 
//I will try do fix later :)


