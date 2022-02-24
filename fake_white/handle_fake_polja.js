
function sva_polja_koja_bijeli_napada_nakon_odigranog_poteza(){
    trenutna_polja_koja_bijele_figure_napadaju=[]
    ploca.forEach(e=>{
        if(e.polje.innerText==="♙"){
            let fake_w_pawn= new fakeWhitePawn(e.polje)
        }

        if(e.polje.innerText==="♖"){
            let fake_w_rook= new fakeWhiteRook(e.polje)
        }

        if(e.polje.innerText==="♘"){
            let fake_w_knight= new fakeWhiteKnight(e.polje)
        }

        if(e.polje.innerText==="♗"){
            let fake_w_bishop= new fakeWhiteBishop(e.polje)
        }

        if(e.polje.innerText==="♕"){
            let fake_w_queen= new fakeWhiteQueen(e.polje)
        }
        /*if(e.polje.innerText==="♔"){
            let fake_w_king=new fakeWhiteKing(e.polje)
        }*/

    })

   
}

function nadji_polje_gdje_je_crni_kralj(){
    for(let i = 0; i< ploca.length ; i++)
        if(ploca[i].polje.innerText==="♚"){return ploca[i].polje }
    
}

function isBlackKingUnderCheck(){
    if(trenutna_polja_koja_bijele_figure_napadaju.includes(nadji_polje_gdje_je_crni_kralj())){
        nadji_polje_gdje_je_crni_kralj().style.backgroundColor="red"
        return
    }
}

function nadji_polje_gdje_je_bijeli_kralj(){
    for(let i = 0; i< ploca.length ; i++)
        if(ploca[i].polje.innerText==="♔"){return ploca[i].polje }
}

function isWhiteKingUnderCheck(){
    if(trenutna_polja_koja_crne_figure_napadaju.includes(nadji_polje_gdje_je_bijeli_kralj())){
        nadji_polje_gdje_je_bijeli_kralj().style.backgroundColor="red"
        return
    }
}