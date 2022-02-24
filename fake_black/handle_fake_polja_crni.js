function sva_polja_koja_crni_napada_nakon_odigranog_poteza(){
    trenutna_polja_koja_crne_figure_napadaju=[]
    ploca.forEach(e=>{
        if(e.polje.innerText==="♟"){
            let fake_b_pawn= new fakeBlackPawn(e.polje)
        }

        if(e.polje.innerText==="♜"){
            let fake_b_rook= new fakeBlackRook(e.polje)
        }

        if(e.polje.innerText==="♞"){
            let fake_b_knight= new fakeBlackKnight(e.polje)
        }

        if(e.polje.innerText==="♝"){
            let fake_b_bishop= new fakeBlackBishop(e.polje)
        }

        if(e.polje.innerText==="♛"){
            let fake_b_queen= new fakeBlackQueen(e.polje)
        }

        /*if(e.polje.innerText==="♚"){
            let fake_b_king= new fakeBlackKing(e.polje)
        }*/
        
    })
    
}
