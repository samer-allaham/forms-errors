'use strict';


function Kitten(name,breed,coatColor,intrests,isGoodWithKids,isGoodWithDogs,isGoodWithOtherCats){
this.name=name;
this.breed=breed;
this.color=coatColor;
this.intrests=intrests;
this.isGoodWithOtherCats=isGoodWithOtherCats;
this.isGoodWithDogs=isGoodWithDogs;
this.isGoodWithKids=isGoodWithKids;
}
var kittenForm = document.getElementById("addKittenForm")

kittenForm.addEventListener('submit',function(event){
event.preventDefault();
var name = event.target.name.value;
//console.log(event.target.name);
//console.log(name);
var breed = event.target.breed.value;
var coatColor = event.target.coatColor.value;
var intrests = event.target.intrests.value;
intrests =intrests.split(',');
//console.log(intrests);
var isGoodWithOtherCats = event.target.isGoodWithOtherCats.checked;
var isGoodWithDogs = event.target.isGoodWithDogs.checked;
var isGoodWithKids = event.target.isGoodWithKids.checked;

var newKitten = new Kitten(name,breed,coatColor,intrests,isGoodWithOtherCats,isGoodWithDogs,isGoodWithKids)
console.log(newKitten);
newKitten.getAge();
newKitten.render();
}
);
// function getAge(){
    Kitten.prototype.getAge=function(){
        return randomAge(3,12) + ' months old ';
   
    function randomAge(min,max){
        var random=math.floor(math.random() * (max-min+1)+min);
        console.log (random);
        return random;
    }


    kitten.prototype.render=function(){
        var parentElement=document.getElementById("kittensProfile");
        var aritcle=document.createElement('article');
        parentElement.appendChild(aritcle);
        var h2=document.createElement('h2');
        h2.textContent=this.name;
       aritcle.appendChild(h2);
       var p=document.createElement('p')
       aritcle.appendChild('p');
       p.textContent=this.name +' is adorable and is ' +this.getAge();
       var ul =document.createElement('ul');
       aritcle.appendChild('ul');
       for (var i=0;i<this.intrests.length;i++){
           var li =document.createElement('li');
           li.textContent=this.intrests[i];
           ul.appendChild(li);
           var table=document.createElement('table');
           aritcle.appendChild(table);
           var row1 = document.createElement ('tr');
           table.appendChild(row1);
           var row2=document.createElement('tr');
           table.appendChild(row2);
           var th1=document.createElement('th')
           row1.appendChild(th1);
           th1.textContent='good with kids';
           var th2=document.createElement('th')
           row1.appendChild(th2);
           th2.textContent='good with dogs';
           var th3=document.createElement('th')
           row1.appendChild(th3);
           th3.textContent='good with cats';

           var td1=document.createElement('td');
           td1.textContent=this.isGoodWithKids;
           row2.appendChild(td1);

           var td2=document.createElement('td');
           td1.textContent=this.isGoodWithDogs;
           row2.appendChild(td2);

           var td2=document.createElement('td');
           td2.textContent=this.isGoodWithCats;
           row2.appendChild(td2);

           var img=Document.createElement('img');
           img.setAttributwe('scr','images/', this.name+'.jpeg');
           aritcle.appendChild(img);
           


       }
       }
    };
