let slides = {
    catering : {
        img : "images/servicio-de-catering.jpg",
        alt : "Servicio de catering",
        title : "Servicio catering",
        tecnologias : ["HTML5", "CSS3", "JavaScript", ""],
        url : "https://ginodev24.github.io/catering/"
    },
    convertidor : {
        img : "images/api-php.jpg",
        alt : "Convertidor USD a MXN",
        title : "Convertidor",
        tecnologias : ["HTML5", "PHP", "Bootstrap", ""],
        url : "http://convertidor-divisas.infinityfreeapp.com/?i=1"
    },
    muebles : {
        img : "images/tienda-muebles.jpg",
        alt : "Tienda Muebles",
        title : "Tienda Muebles",
        tecnologias : ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
        url : "https://ginodev24.github.io/tienda-muebles/"
    },
    meeti : {
        img : "images/meeti.jpg",
        alt : "Meeti",
        title : "Meeti",
        tecnologias : ["HTML5", "CSS3", "JavaScript", ""],
        url : "https://ginodev24.github.io/meeti/"
    },
    
}






let div_proyectos = document.getElementById("div_proyectos");

let div_row = document.createElement("div");
div_row.classList = "row justify-content-sm-around";

for (const key in slides) {

    let div_col = document.createElement("div");
    div_col.classList = "col-md-5 mt-3";
        
    let div_card = document.createElement("div");
    div_card.classList = "card border-primary-subtle border-2";
        
    let img = document.createElement("img");
    img.classList = "card border-primary-subtle border-2";
        
    img.src = slides[key]["img"];
    img.alt = slides[key]["alt"];

    let div_card_body = document.createElement("div");
    div_card_body.classList = "card-body";

    let title_h5 = document.createElement("h5");
    title_h5.classList = "card-title";
    title_h5.innerHTML = slides[key]["title"];

    let tecnologias_p = document.createElement("p");
    tecnologias_p.innerHTML = "Tecnologías utilizadas:";

    let ul = document.createElement("ul");

    for(let k=0; k< slides[key]["tecnologias"].length; k++){
            let li = document.createElement("li");
            li.innerHTML = slides[key]["tecnologias"][k];
            ul.appendChild(li);
    }

        let link_muebles = document.createElement("a");
        link_muebles.href = slides[key]["url"];
        link_muebles.classList = "btn btn-success w-100";
        link_muebles.target = "_blank";
        link_muebles.innerHTML = "Ir al sitio";



        div_card_body.appendChild(title_h5);
        div_card_body.appendChild(tecnologias_p);
        div_card_body.appendChild(ul);
        div_card_body.appendChild(link_muebles);
        div_card.appendChild(img);
        div_card.appendChild(div_card_body);
        div_col.appendChild(div_card);
        div_row.appendChild(div_col);

}


div_proyectos.appendChild(div_row);