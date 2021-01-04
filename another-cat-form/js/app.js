'use strict'

function Kitten(name,breed,coatColor,intrests,isGoodWithKids,isGoodWithDogs,isGoodWithCats){
    this.name=name;
    this.breed=breed;
    this.coatColor=coatColor;
    this.intrests=intrests;
    this.isGoodWithKids=isGoodWithKids;
    this.isGoodWithDogs=isGoodWithDogs;
    this.isGoodWithCats=isGoodWithCats;
}
var addKittenForm=document.getElementById('addKittenForm');

addKittenForm.addEventListener('submit',function(event){
    event.preventDefault();
    var name=event.target.name.value;
    var breed=event.target.breed.value;
    var coatColor=event.target.coatColor.value;
    var intrests=event.target.intrests.value;
    intrests=intrests.split(',');
    // console.log('isgoodwithcats',isGoodWithDogs)
    var goodWithKids = event.target.goodWithKids.checked;

    var goodWithDogs=event.target.goodWithDogs.checked;
    var goodWithCats=event.target.goodWithCats.checked;
    // console.log(goodWithCats,goodWithDogs,goodWithKids,name,breed,coatColor,intrests)
    var newKitten= new Kitten(name,breed,coatColor,intrests,goodWithDogs,goodWithCats,goodWithKids)
     newKitten.getAge();
     newKitten.render();

});
Kitten.prototype.getAge=function(){
    return randomAge(3,12)+' months old';

};
function randomAge(min,max){
    var random=Math.floor(Math.random()*(max-min+1)+min);
    console.log(random)
    return random;
    }

Kitten.prototype.render =function(){
    var parentElement=document.getElementById('kittensProfile');
    var article=document.createElement('article');
    parentElement.appendChild(article);

    var h2=document.createElement('h2');
    h2.textContent=this.name;
    article.appendChild(h2);

    var p =document.createElement('p');
    article.appendChild(p);
    p.textContent=this.name + ' is adorable and is ' +this.getAge();

    var ul=document.createElement('ul');
    article.appendChild(ul)
    for (var i=0;i<this.intrests.length;i++){
        var li=document.createElement('li');
        ul.appendChild(li);
        li.textContent=this.intrests[i];
        
        console.log (ul)
    }
    var table=document.createElement('table')
    article.appendChild(table);
    var headerRow=document.createElement('tr')
    table.appendChild(tr);
    var footerRow=document.

    
    
    
};     
