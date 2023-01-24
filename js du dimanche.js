// ** addEventListener - "keyup" - disabled - true - false - value - length
// TODO 1: récupérer le textarea dans une variable txt
// TODO 2: récupérer le button dans une variable btn
// TODO 3-1: Sur txt placer un addEventListener qui écoute les touches clavier et exécute une fonction
// TODO 3-2: Dans cette fonction, si ce qu'on tape dans l'input dépasse 5 caractères alors on désactive le button

/*let txt = document.querySelector("#area");
let bouton = document.querySelector("button");

txt.addEventListener("keyup",boutondisabled);

function boutondisabled(){
    if(txt.value.length>5){
        bouton.disabled = true;
    }else{
        bouton.disabled = false;
    }
}*/

// ** mini éditeur de texte - addEventListener - keyup - innerHTML
// TODO 1: récupérer le textarea dans une variable monTxt
// TODO 2: récupérer la div dans une variable rendu
// TODO 3-1: sur monTxt on place un addEventListener qui surveille le clavier et qui exécute une fonction
// TODO 3-2: Dans cette fonction, au innerHTML de rendu on assigne la VALEUR contenue dans monTxt

/*let monTxt = document.querySelector("textarea");
let rendu = document.querySelector("div");
monTxt.addEventListener("keyup",transcript);

function transcript(event){
    let $p = document.createElement("span");
    $p.innerHTML = event.key;
    rendu.append($p);
}*/


// ** addEventListener - capter un évènement "click" - coord x - coord y
// TODO 1: sur document, placer un addEventListener qui écoute le "click" et éxecute une fonction qui a unEvent en paramètre
// TODO 2: Dans cette fonction on console log unEvent 
// TODO 3: à partir du console log retrouver les propriétés de unEvent qui correspondent au coordonnées du click
// TODO 4: Tjrs dans la Fonction dans addEventListener, dans une variable monImg, créer une img html
// TODO 5: Ensuite, modifier l'attribut src de monImg (url de l'img au choix)
// TODO 6: sur monImg, modifier dans style, la position en "absolute"
// TODO 7: sur monImg, modifier dans style, le left, on assigne la coordonnées x du click
// TODO 8: sur monImg, modifier dans style, le top, on assigne la coordonnées y du click
// TODO 9: placer monImg dans la page

/*document.addEventListener("click",clique);
let body = document.querySelector("body");

function clique(event){
    console.log(event);
    let image = document.createElement("img");
    image.src = "e2d.jpg";
    image.style.position = "absolute";
    image.style.left = event.x + "px";
    image.style.top = event.y + "px";
    body.prepend(image);
}*/

// **   - function - offSet / client Height width - left - top
// TODO 1: récupérer le titre h1 dans une variable elTitro
// TODO 2: récupérer la div dans une variable leCadre
// TODO 3: Stocker la propriété clientHeight de leCadre dans une variable hauteurCadre
// TODO 4: Stocker la propriété clientWidth de leCadre dans une variable largeurCadre
// TODO 5: modifier dans le style de elTitro la position en "relative"
// TODO 6: créer une variable positionTop et une variable positionLeft à 0
// TODO 7: créer une variable vitesseVerticale et une variable vitesseHorizontale à -2
// TODO 8: créer une fonction monAnim()
// TODO 8-2: Dans monAnim(), SI positionTop égal 0 alors on multiplie vitesseVerticale par elle même -1
// TODO 8-3: SINON SI positionTop égal hauteurCadre moins le offSetHeight de elTitro alors on multiplie vitesseVerticale par elle même -1
// TODO 8-4: SI positionLeft égal 0 alors on multiplie vitesseHorizontale par elle même -1
// TODO 8-5: SINON SI positionLeft égal largeurCadre moins le offSetWidth de elTitro alors on multiplie vitesseHorizontale par elle même -1
// TODO 9: Ensuite dans positionTop on cumule la vitesseVerticale
// TODO 10: Dans positionLeft on cumule la vitesseHorizontale
// TODO 11: Dans le style de elTitro on assigne à top, la positionTop en "px"
// TODO 12: Dans le style de elTitro on assigne à left, la positionLeft en "px"
// TODO 13: on appelle la fonction requestAnimationFrame() en lui passant en param monAnim
// TODO 14: en dehors de la fonction monAnim(), on appelle la fonction requestAnimationFrame() en lui passant en param monAnim pour créer une boucle infinie

/*let leTitre = document.querySelector("h1");
let leCadre = document.querySelector("div");

let hauteurCadre = leCadre.clientHeight;
let largeurCadre = leCadre.clientWidth;

leTitre.style.position = "relative";

let positionTop = 0;
let positionLeft = 0;

let vitesseVerticale = -2;
let vitesseHorizontale = -2;

function monAnim(){
    if(positionTop == 0){
        vitesseVerticale *=-1;
    }else if(positionTop == hauteurCadre - leTitre.offsetHeight){
        vitesseVerticale *=-1;
    }
    if(positionLeft == 0){
        vitesseHorizontale *=-1;
    }else if(positionLeft == largeurCadre - leTitre.offsetWidth){
        vitesseHorizontale *=-1;
    }
    positionTop = positionTop + vitesseVerticale;
    positionLeft = positionLeft + vitesseHorizontale;
    leTitre.style.top = positionTop + "px";
    leTitre.style.left = positionLeft + "px";
    requestAnimationFrame(monAnim);
}

requestAnimationFrame(monAnim);*/



