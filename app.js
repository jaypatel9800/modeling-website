const plusBtn = document.querySelector(".plus");
const list = document.querySelector("ul");
const nav = document.querySelector("nav");

plusBtn.addEventListener("click", () => {
  list.classList.toggle("toggler");
  nav.classList.toggle("nav-toggle");
});
const revText = [
  {
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed.",
    names: "Johnnie Woods"
  
},
  {
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan.",
    names: "Alan Kennedy"
  
},
  {
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    names: "Rex Davidson"
},
  {
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote. ",
    names: "Abel Ballard"  
},
];

let count = 0;

const review = document.querySelector("#revs");
const names =document.querySelector("#name")

function person () {
  const item = revText[count];
  review.innerHTML = item.text;
  names.innerHTML = item.names;
};

const prev = () =>{
    count-=1;
    if(count < 0){
        count = revText.length - 1
    }
    person(count)
};

const next = () => {
    count+=1;
    if(count > revText.length - 1){
        count = 0;
    }
    person(count)
};
