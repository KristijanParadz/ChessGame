class wKnight{
    constructor(trenutno_polje){
        this.trenutno_polje=trenutno_polje
        this.trenutno_polje.innerText="♘"
        this.slovo=this.getObject().slovo
        this.broj=this.getObject().broj
        this.indeks_slova=abeceda.indexOf(this.slovo)
        this.dodajListener()
    }

    getObject(){ //dohvaca object iz ploce
        return ploca.find((object)=>{return object.polje===this.trenutno_polje})
    }

    dohvati_mogucnosti(){
        let mogucnosti = []
        let prave_mogucnosti=[]
        ploca.forEach(e=>{ //kad je broj veci za dva
            if((e.broj===this.broj+2 || e.broj===this.broj-2) && !bijele_figure.some(figura=>figura===e.polje.innerText)){
                if(abeceda.indexOf(e.slovo)===this.indeks_slova-1 || abeceda.indexOf(e.slovo)===this.indeks_slova+1 ){
                    mogucnosti.push(e.polje)
                }
            }

            if((e.broj===this.broj+1 || e.broj===this.broj-1) && !bijele_figure.some(figura=>figura===e.polje.innerText)){ // kad je indeks slova veci za dva
                if(abeceda.indexOf(e.slovo)===this.indeks_slova-2 || abeceda.indexOf(e.slovo)===this.indeks_slova+2 ){
                    mogucnosti.push(e.polje)
                }
            }
        })
        
        mogucnosti.forEach(e=>{
            let temp_inner_text=e.innerText
            this.trenutno_polje.innerText=""
            e.innerText="♘"
            sva_polja_koja_crni_napada_nakon_odigranog_poteza()
            if(!trenutna_polja_koja_crne_figure_napadaju.includes(this.nadji_polje_gdje_je_kralj())){
                prave_mogucnosti.push(e)
            }
            this.trenutno_polje.innerText="♘"
            e.innerText=temp_inner_text
        })
        return prave_mogucnosti

    }

    nadji_polje_gdje_je_kralj(){
        for(let i = 0; i< ploca.length ; i++)
            if(ploca[i].polje.innerText==="♔"){return ploca[i].polje }
        
    }

    dodajListener(){
        const root_controlller=new AbortController()
        let is_clicked=false
        this.trenutno_polje.addEventListener("click",()=>{
            if(this.trenutno_polje.innerText==="♘" && !is_kliknuto_bijele_figure && ciji_je_potez && this.dohvati_mogucnosti().length>0 ){
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
                            ciji_je_potez=!ciji_je_potez
                            is_kliknuto_bijele_figure=false
                            let new_pawn = new wKnight(mogucnost)
                            this.trenutno_polje.innerText=""
                            for(let i = 0; i<mogucnosti.length;i++) mogucnosti[i].style.backgroundColor=boje_mogucnosti[i]
                            sva_polja_koja_crni_napada_nakon_odigranog_poteza()
                            sva_polja_koja_bijeli_napada_nakon_odigranog_poteza()
                            isBlackKingUnderCheck()
                            if(this.nadji_polje_gdje_je_kralj().classList[1]==="bijelo") this.nadji_polje_gdje_je_kralj().style.backgroundColor="white"
                            if(this.nadji_polje_gdje_je_kralj().classList[1]==="crno") this.nadji_polje_gdje_je_kralj().style.backgroundColor="rgb(192, 205, 212)"
                            this.trenutno_polje.style.backgroundColor=temp_boja
                            
                            
                            root_controlller.abort()
                               
                        }
                        is_clicked=true
                    })
                })
            }
        }, {signal:root_controlller.signal})
    
    }

}

let WhiteB_Knight = new wKnight(document.querySelector("#b1"))
let WhiteG_Knight = new wKnight(document.querySelector("#g1"))
