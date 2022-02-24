class wKing{
    constructor(trenutno_polje){
        this.trenutno_polje=trenutno_polje
        this.trenutno_polje.innerText="♔"
        this.slovo=this.getObject().slovo
        this.broj=this.getObject().broj
        this.indeks_slova=abeceda.indexOf(this.slovo)
        this.dodajListener()
    }

    getObject(){ //dohvaca object iz ploce
        return ploca.find((object)=>{return object.polje===this.trenutno_polje})
    }

    dohvati_mogucnosti(){
        let a1= document.querySelector("#a1")
        let h1= document.querySelector("#h1")
        let b1=document.querySelector("#b1")
        let c1=document.querySelector("#c1")
        let d1=document.querySelector("#d1")
        let f1=document.querySelector("#f1")
        let g1 = document.querySelector("#g1")
        let mogucnosti= []
        ploca.forEach(e=>{
            if(e.broj===this.broj+1 || e.broj ===this.broj-1 || e.broj===this.broj){
                
                if(this.indeks_slova===abeceda.indexOf(e.slovo) || this.indeks_slova===abeceda.indexOf(e.slovo)+1 || this.indeks_slova===abeceda.indexOf(e.slovo)-1){
                    
                    if(this.trenutno_polje!==e.polje && !bijele_figure.some(figura=>figura===e.polje.innerText) && !trenutna_polja_koja_crne_figure_napadaju.includes(e.polje) ){
                        let polje_crnog_kralja=ploca.find(e=>e.polje.innerText==="♚").polje
                        let fake_crni_kralj=new fakeBlackKing(polje_crnog_kralja)
                        mogucnosti_crnog_kralja=fake_crni_kralj.dohvati_mogucnosti()
                        if(!fake_crni_kralj.dohvati_branjene_mogucnosti().some(branjena_mog=>branjena_mog===e.polje)){
                            if(!mogucnosti_crnog_kralja.some(polje=>polje===e.polje)){
                                this.trenutno_polje.innerText=""
                                sva_polja_koja_crni_napada_nakon_odigranog_poteza()
                                this.trenutno_polje.innerText="♔"
                                if(!trenutna_polja_koja_crne_figure_napadaju.includes(e.polje)){
                                    
                                    if(crne_figure.some(figura=>figura===e.polje.innerText)){
                                        let temp_fig=e.polje.innerText
                                        e.polje.innerText=""
                                        sva_polja_koja_crni_napada_nakon_odigranog_poteza()
                                        if(!trenutna_polja_koja_crne_figure_napadaju.includes(e.polje)){mogucnosti.push(e.polje)}
                                        e.polje.innerText=temp_fig
                                        sva_polja_koja_crni_napada_nakon_odigranog_poteza()
                                    }
                                    else{mogucnosti.push(e.polje)}
                                }
                            }
                        }
                    }
                }
            }
        })
        if(!is_white_king_moved && f1.innerText==="" && g1.innerText==="" && !trenutna_polja_koja_crne_figure_napadaju.includes(this.trenutno_polje)){
            if(!trenutna_polja_koja_crne_figure_napadaju.includes(f1) && !trenutna_polja_koja_crne_figure_napadaju.includes(g1) && h1.innerText==="♖" && !is_white_h_rook_moved ){
                mogucnosti.push(g1)
            }
        }

        if(!is_white_king_moved && b1.innerText==="" && c1.innerText==="" && d1.innerText==="" && !trenutna_polja_koja_crne_figure_napadaju.includes(this.trenutno_polje) && a1.innerText==="♖"){
            if(!trenutna_polja_koja_crne_figure_napadaju.includes(b1) && !trenutna_polja_koja_crne_figure_napadaju.includes(c1) && !trenutna_polja_koja_crne_figure_napadaju.includes(d1) && !is_white_a_rook_moved ){
                mogucnosti.push(c1)
            }
        }

        console.log("mogucnosti bijelog:")
        console.log(mogucnosti)
        return mogucnosti
    }

    dodajListener(){
        let d1=document.querySelector("#d1")
        let f1=document.querySelector("#f1")
        let g1 = document.querySelector("#g1")
        let h1 = document.querySelector("#h1")
        let a1 = document.querySelector("#a1")
        const root_controlller=new AbortController()
        let is_clicked=false
        this.trenutno_polje.addEventListener("click",()=>{
            if(this.trenutno_polje.innerText==="♔" && !is_kliknuto_bijele_figure && ciji_je_potez && this.dohvati_mogucnosti().length>0 ){
                let temp_boja=this.trenutno_polje.style.backgroundColor
                let boje_mogucnosti=[]
                let mogucnosti=this.dohvati_mogucnosti()
                is_kliknuto_bijele_figure=true
                this.trenutno_polje.style.backgroundColor="yellow"
                mogucnosti.forEach(mogucnost=>{
                    boje_mogucnosti.push(mogucnost.style.backgroundColor)
                    mogucnost.style.backgroundColor="rgb(177, 241, 116)"
                    mogucnost.addEventListener("click",()=>{
                        if(is_clicked===false){
                            if(!is_white_king_moved && mogucnost===g1){
                                h1.innerText=""
                                let new_rook=new wRook(f1)
                            }

                            if(!is_white_king_moved && mogucnost===c1){
                                a1.innerText=""
                                let new_rook=new wRook(d1)
                            }

                            ciji_je_potez=!ciji_je_potez
                            is_kliknuto_bijele_figure=false
                            let new_queen = new wKing(mogucnost)
                            this.trenutno_polje.innerText=""
                            for(let i = 0; i<mogucnosti.length;i++) mogucnosti[i].style.backgroundColor=boje_mogucnosti[i]
                            is_white_king_moved=true
                            sva_polja_koja_bijeli_napada_nakon_odigranog_poteza()
                            sva_polja_koja_crni_napada_nakon_odigranog_poteza()
                            isBlackKingUnderCheck()
                            if(this.trenutno_polje.classList[1]==="bijelo") this.trenutno_polje.style.backgroundColor="white"
                            if(this.trenutno_polje.classList[1]==="crno") this.trenutno_polje.style.backgroundColor="rgb(192, 205, 212)"
                            //this.trenutno_polje.style.backgroundColor=temp_boja
                            root_controlller.abort()   
                        }
                        is_clicked=true
                    })
                })
            }
        }, {signal:root_controlller.signal})
    
    }


}

let whiteKing=new wKing(document.querySelector("#e1"))