class bKing{
    constructor(trenutno_polje){
        this.trenutno_polje=trenutno_polje
        this.trenutno_polje.innerText="♚"
        this.slovo=this.getObject().slovo
        this.broj=this.getObject().broj
        this.indeks_slova=abeceda.indexOf(this.slovo)
        this.dodajListener()
    }

    getObject(){ //dohvaca object iz ploce
        return ploca.find((object)=>{return object.polje===this.trenutno_polje})
    }

    dohvati_mogucnosti(){
        let a8= document.querySelector("#a8")
        let h8= document.querySelector("#h8")
        let f8=document.querySelector("#f8")
        let b8= document.querySelector("#b8")
        let c8= document.querySelector("#c8")
        let d8=document.querySelector("#d8")
        let g8 = document.querySelector("#g8") 
        let mogucnosti= []
        ploca.forEach(e=>{
            if(e.broj===this.broj+1 || e.broj ===this.broj-1 || e.broj===this.broj){
                if(this.indeks_slova===abeceda.indexOf(e.slovo) || this.indeks_slova===abeceda.indexOf(e.slovo)+1 || this.indeks_slova===abeceda.indexOf(e.slovo)-1){
                    
                    if(this.trenutno_polje!==e.polje && !crne_figure.some(figura=>figura===e.polje.innerText) && !trenutna_polja_koja_bijele_figure_napadaju.includes(e.polje) ){
                    
                        let polje_bijelog_kralja=ploca.find(e=>e.polje.innerText==="♔").polje
                        let fake_bijeli_kralj=new fakeWhiteKing(polje_bijelog_kralja)
                        mogucnosti_bijelog_kralja=fake_bijeli_kralj.dohvati_mogucnosti()
                        if(!fake_bijeli_kralj.dohvati_branjene_mogucnosti().some(branjena_mog=>branjena_mog===e.polje)){

                            if(!mogucnosti_bijelog_kralja.some(polje=>polje===e.polje)){
                                this.trenutno_polje.innerText=""
                                sva_polja_koja_bijeli_napada_nakon_odigranog_poteza()
                                this.trenutno_polje.innerText="♚"
                                if(!trenutna_polja_koja_bijele_figure_napadaju.includes(e.polje)){

                                    if(bijele_figure.some(figura=>figura===e.polje.innerText)){
                                        let temp_fig=e.polje.innerText
                                        e.polje.innerText=""
                                        sva_polja_koja_bijeli_napada_nakon_odigranog_poteza()
                                        if(!trenutna_polja_koja_bijele_figure_napadaju.includes(e.polje)){mogucnosti.push(e.polje)}
                                        e.polje.innerText=temp_fig
                                        sva_polja_koja_bijeli_napada_nakon_odigranog_poteza()
                                    }
                                    else{mogucnosti.push(e.polje)}
                                }
                            }
                        }
                    }
                }
            }
        })
        if(!is_black_king_moved && f8.innerText==="" && g8.innerText==="" && !trenutna_polja_koja_bijele_figure_napadaju.includes(this.trenutno_polje)){
            if(!trenutna_polja_koja_bijele_figure_napadaju.includes(f8) && !trenutna_polja_koja_bijele_figure_napadaju.includes(g8) && h8.innerText==="♜" && !is_black_h_rook_moved ){
                mogucnosti.push(g8)
            }
        }

        if(!is_black_king_moved && b8.innerText==="" && c8.innerText==="" && d8.innerText==="" && !trenutna_polja_koja_bijele_figure_napadaju.includes(this.trenutno_polje) && a8.innerText==="♜"){
            if(!trenutna_polja_koja_bijele_figure_napadaju.includes(b8) && !trenutna_polja_koja_bijele_figure_napadaju.includes(c8) && !trenutna_polja_koja_bijele_figure_napadaju.includes(d8) && !is_black_a_rook_moved){
                mogucnosti.push(c8)
            }
        }

        console.log("mogucnosti crnog:")
        console.log(mogucnosti)
        return mogucnosti
    }

    dodajListener(){
        let f8=document.querySelector("#f8")
        let g8 = document.querySelector("#g8")
        let h8 = document.querySelector("#h8")
        const root_controlller=new AbortController()
        let is_clicked=false
        this.trenutno_polje.addEventListener("click",()=>{
            if(this.trenutno_polje.innerText==="♚" && !is_kliknuto_crne_figure && !ciji_je_potez && this.dohvati_mogucnosti().length>0){
                let temp_boja=this.trenutno_polje.style.backgroundColor
                let boje_mogucnosti=[]
                let mogucnosti=this.dohvati_mogucnosti()
                is_kliknuto_crne_figure=true
                this.trenutno_polje.style.backgroundColor="yellow"
                mogucnosti.forEach(mogucnost=>{
                    boje_mogucnosti.push(mogucnost.style.backgroundColor)
                    mogucnost.style.backgroundColor="rgb(177, 241, 116)"
                    mogucnost.addEventListener("click",()=>{
                        if(is_clicked===false){
                            if(!is_black_king_moved && mogucnost===g8){
                                h8.innerText=""
                                let new_rook=new bRook(f8)
                            }
                            if(!is_black_king_moved && mogucnost===c8){
                                a8.innerText=""
                                let new_rook=new bRook(d8)
                            }

                            ciji_je_potez=!ciji_je_potez
                            is_kliknuto_crne_figure=false
                            let new_queen = new bKing(mogucnost)
                            this.trenutno_polje.innerText=""
                            for(let i = 0; i<mogucnosti.length;i++) mogucnosti[i].style.backgroundColor=boje_mogucnosti[i]
                            is_black_king_moved=true
                            sva_polja_koja_bijeli_napada_nakon_odigranog_poteza()
                            sva_polja_koja_crni_napada_nakon_odigranog_poteza()
                            isWhiteKingUnderCheck()
                            //this.trenutno_polje.style.backgroundColor=temp_boja
                            if(this.trenutno_polje.classList[1]==="bijelo") this.trenutno_polje.style.backgroundColor="white"
                            if(this.trenutno_polje.classList[1]==="crno") this.trenutno_polje.style.backgroundColor="rgb(192, 205, 212)"
                            root_controlller.abort()   
                        }
                        is_clicked=true
                    })
                })
            }
        }, {signal:root_controlller.signal})
    
    }


}




let BlackKing=new bKing(document.querySelector("#e8"))

