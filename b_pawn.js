class bPawn{
    constructor(trenutno_polje){
        this.trenutno_polje=trenutno_polje
        this.trenutno_polje.innerText="♟"
        this.dodajListener()
    }

    getObject(){ //dohvaca object iz ploce
        return ploca.find((object)=>{return object.polje===this.trenutno_polje})
    }

    slovo(){return this.getObject().slovo}
    indeks_slova(){
        return abeceda.findIndex(e=>this.slovo()===e)
    }

    dohvati_dijagonalna_polja(){
        let mogucnosti =[]
        ploca.forEach(e=>{
            if(e.broj===this.getObject().broj-1 && (e.slovo===abeceda[this.indeks_slova()-1] || e.slovo===abeceda[this.indeks_slova()+1])){
                if(bijele_figure.some(elem=>e.polje.innerText===elem)){mogucnosti.push(e.polje)}
            }
        })
        return mogucnosti
    }

    dohvati_1_gornje(){
        let mogucnosti=[]
        ploca.forEach(e=>{
            if(e.slovo===this.getObject().slovo && e.polje.innerText==="" && e.broj===this.getObject().broj-1){
                mogucnosti.push(e.polje)
            }
        })
        return mogucnosti
    }

    dohvati_2_gornja(){ 
        let mogucnosti =[]
        ploca.forEach(e=>{
            if(e.broj===6 && e.polje.innerText==="" && e.slovo===this.getObject().slovo){
                mogucnosti.push(e.polje)
            }
            if(e.broj===5 && e.polje.innerText==="" && e.slovo===this.getObject().slovo){
                let izmedu=ploca.find(e=>e.slovo === this.getObject().slovo && e.broj===6)
                if(izmedu.polje.innerText===""){mogucnosti.push(e.polje)}
            }
        })
        return mogucnosti
    }

    dohvati_mogucnosti(){
        let mogucnosti = []
        let prave_mogucnosti=[]
        if(this.getObject().broj===7) mogucnosti=this.dohvati_2_gornja().concat(this.dohvati_dijagonalna_polja())
        if(this.getObject().broj!==7) mogucnosti=this.dohvati_1_gornje().concat(this.dohvati_dijagonalna_polja())
        
        mogucnosti.forEach(e=>{
            let temp_inner_text=e.innerText
            this.trenutno_polje.innerText=""
            e.innerText="♟"
            sva_polja_koja_bijeli_napada_nakon_odigranog_poteza()
            if(!trenutna_polja_koja_bijele_figure_napadaju.includes(this.nadji_polje_gdje_je_kralj())){
                prave_mogucnosti.push(e)
            }
            this.trenutno_polje.innerText="♟"
            e.innerText=temp_inner_text
        })
        return prave_mogucnosti
    }

    nadji_polje_gdje_je_kralj(){
        for(let i = 0; i< ploca.length ; i++)
            if(ploca[i].polje.innerText==="♚"){return ploca[i].polje }
        
    }

    dodajListener(){
        const root_controlller=new AbortController()
        let is_clicked=false
        this.trenutno_polje.addEventListener("click",()=>{                                          //u trenutku dodavanja listenera ovo je bilo bijelo
            if(this.trenutno_polje.innerText==="♟" && !is_kliknuto_crne_figure && !ciji_je_potez && this.dohvati_mogucnosti().length>0 ){
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
                            if(prva_linija.some(polje=>polje===mogucnost)){
                                this.trenutno_polje.innerText=""
                                let new_queen = new bQueen(mogucnost)
                            }
                            else{
                                this.trenutno_polje.innerText=""
                                let new_pawn = new bPawn(mogucnost)
                            }
                            ciji_je_potez=!ciji_je_potez
                            is_kliknuto_crne_figure=false
                            //let new_pawn = new bPawn(mogucnost)
                            for(let i = 0; i<mogucnosti.length;i++) mogucnosti[i].style.backgroundColor=boje_mogucnosti[i]
                            sva_polja_koja_crni_napada_nakon_odigranog_poteza()
                            sva_polja_koja_bijeli_napada_nakon_odigranog_poteza()
                            isWhiteKingUnderCheck()
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

let a_bpawn= new bPawn(document.querySelector("#a7"))
let b_bpawn= new bPawn(document.querySelector("#b7"))
let c_bpawn= new bPawn(document.querySelector("#c7"))
let d_bpawn= new bPawn(document.querySelector("#d7"))
let e_bpawn= new bPawn(document.querySelector("#e7"))
let f_bpawn= new bPawn(document.querySelector("#f7"))
let g_bpawn= new bPawn(document.querySelector("#g7"))
let h_bpawn= new bPawn(document.querySelector("#h7"))