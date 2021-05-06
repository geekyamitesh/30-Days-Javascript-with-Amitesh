'use strict';

const modal = document.querySelector('.modal');

const overlay  = document.querySelector('.overlay');

const closemodal = document.querySelector('.close-modal');
//queryselector select only one query

// we need to select all query
const openmodal = document.querySelectorAll('.show-modal');

for(let i=0;i<openmodal.length;i++){
    console.log(openmodal[i].textContent);
}