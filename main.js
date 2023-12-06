var imagens = ["floquinho2.jpg", 
                "amora1.jpg",
                "floquinho1.jpg",
                "amora2.jpg"
                ];

var legenda = ["Minha família",
                "Amora Clarinha",
                "Floquinho Paçoca",
                "Outra amorinha"];

var i = 1;

function proximo(){
    var proximaImagem = imagens[i];
    var proximaLegenda = legenda[i];

    document.getElementById("fotos").src=proximaImagem;
    document.getElementById("legenda").innerHTML=proximaLegenda;
    i++;
    if(i>3){
        i=0;
    }
}