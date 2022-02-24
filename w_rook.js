class wRook{
    constructor(trenutno_polje){
        this.trenutno_polje=trenutno_polje
        this.trenutno_polje.innerText="♖"
        this.slovo=this.getObject().slovo
        this.broj=this.getObject().broj
        this.indeks_slova=abeceda.indexOf(this.slovo)
        this.dodajListener()
    }

    getObject(){ //dohvaca object iz ploce
        return ploca.find((object)=>{return object.polje===this.trenutno_polje})
    }

    dohvati_sva_polja_retka(){
        let mogucnosti=[]
        ploca.forEach(e=>{
            if(e.broj===this.broj){
                mogucnosti.push(e.polje)
            }
        })
        return mogucnosti
    }

    dohvati_polja_retka_slijeva(){ //u pravom poretku
        if(this.slovo==="a"){
            return []
        }
        let sva_polja_retka=this.dohvati_sva_polja_retka()
        let mogucnosti = sva_polja_retka.slice(0,abeceda.indexOf(this.slovo))
        return mogucnosti.reverse()
    }

    dohvati_polja_retka_zdesna(){ // u pravom poretku
        if(this.slovo==="h"){
            return []
        }
        let sva_polja_retka=this.dohvati_sva_polja_retka()
        let mogucnosti = sva_polja_retka.slice(abeceda.indexOf(this.slovo)+1)
        return mogucnosti
    }

    dohvati_sva_polja_stupca(){
        let mogucnosti=[]
        ploca.forEach(e=>{
            if(e.slovo===this.slovo){
                mogucnosti.push(e.polje)
            }
        })
        return mogucnosti.reverse()
    }

    dohvati_polja_stupca_ispod(){ //u pravom poretku
        let sva_polja_stupca=this.dohvati_sva_polja_stupca()
        let mogucnosti = sva_polja_stupca.slice(0,this.broj-1)
        return mogucnosti.reverse()
    }

    dohvati_polja_stupca_iznad(){ // u pravom poretku
        let sva_polja_stupca=this.dohvati_sva_polja_stupca()
        let mogucnosti = sva_polja_stupca.slice(this.broj)
        return mogucnosti
    }

    dohvati_mogucnosti_slijeva(){
        let mogucnosti=[]
        let svi_lijevo=this.dohvati_polja_retka_slijeva()
        for(let i=0; i<svi_lijevo.length; i++){
            if(bijele_figure.some(figura=>figura===svi_lijevo[i].innerText)){
                return mogucnosti
            }
            else if(svi_lijevo[i].innerText===""){
                mogucnosti.push(svi_lijevo[i])
            }
            else{
                mogucnosti.push(svi_lijevo[i])
                return mogucnosti
            }
        }
        
        return mogucnosti
    }

    dohvati_mogucnosti_zdesna(){
        let mogucnosti=[]
        let svi_desno=this.dohvati_polja_retka_zdesna()
        for(let i=0; i<svi_desno.length; i++){
            if(bijele_figure.some(figura=>figura===svi_desno[i].innerText)){
                return mogucnosti
            }
            else if(svi_desno[i].innerText===""){
                mogucnosti.push(svi_desno[i])
            }
            else{
                mogucnosti.push(svi_desno[i])
                return mogucnosti
            }
        }
        
        return mogucnosti
    }

    dohvati_mogucnosti_iznad(){
        let mogucnosti=[]
        let svi_iznad=this.dohvati_polja_stupca_iznad()
        for(let i=0; i<svi_iznad.length; i++){
            if(bijele_figure.some(figura=>figura===svi_iznad[i].innerText)){
                return mogucnosti
            }
            else if(svi_iznad[i].innerText===""){
                mogucnosti.push(svi_iznad[i])
            }
            else{
                mogucnosti.push(svi_iznad[i])
                return mogucnosti
            }
        }
        
        return mogucnosti
    }

    dohvati_mogucnosti_ispod(){
        let mogucnosti=[]
        let svi_ispod=this.dohvati_polja_stupca_ispod()
        for(let i=0; i<svi_ispod.length; i++){
            if(bijele_figure.some(figura=>figura===svi_ispod[i].innerText)){
                return mogucnosti
            }
            else if(svi_ispod[i].innerText===""){
                mogucnosti.push(svi_ispod[i])
            }
            else{
                mogucnosti.push(svi_ispod[i])
                return mogucnosti
            }
        }
        
        return mogucnosti
    }

    dohvati_mogucnosti(){
        let prave_mogucnosti=[]
        let mogucnosti=this.dohvati_mogucnosti_slijeva().concat(this.dohvati_mogucnosti_zdesna()).concat(this.dohvati_mogucnosti_ispod()).concat(this.dohvati_mogucnosti_iznad())
        mogucnosti.forEach(e=>{
            let temp_inner_text=e.innerText
            this.trenutno_polje.innerText=""
            e.innerText="♖"
            sva_polja_koja_crni_napada_nakon_odigranog_poteza()
            if(!trenutna_polja_koja_crne_figure_napadaju.includes(this.nadji_polje_gdje_je_kralj())){
                prave_mogucnosti.push(e)
            }
            this.trenutno_polje.innerText="♖"
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
            if(this.trenutno_polje.innerText==="♖" && !is_kliknuto_bijele_figure && ciji_je_potez && this.dohvati_mogucnosti().length>0 ){
                let temp_boja=this.trenutno_polje.style.backgroundColor
                let boje_mogucnosti=[]
                let mogucnosti=this.dohvati_mogucnosti()
                is_kliknuto_bijele_figure=true
                this.trenutno_polje.style.backgroundColor="yellow"
                if(this.trenutno_polje===document.querySelector("#a1")) is_white_a_rook_moved=true
                if(this.trenutno_polje===document.querySelector("#h1")) is_white_h_rook_moved=true
                mogucnosti.forEach(mogucnost=>{
                    boje_mogucnosti.push(mogucnost.style.backgroundColor)
                    mogucnost.style.backgroundColor="rgb(177, 241, 116)"
                    mogucnost.addEventListener("click",()=>{
                        if(is_clicked===false){
                            console.log("dv")
                            ciji_je_potez=!ciji_je_potez
                            is_kliknuto_bijele_figure=false
                            let new_pawn = new wRook(mogucnost)
                            this.trenutno_polje.innerText=""
                            for(let i = 0; i<mogucnosti.length;i++) mogucnosti[i].style.backgroundColor=boje_mogucnosti[i]
                            sva_polja_koja_crni_napada_nakon_odigranog_poteza()
                            sva_polja_koja_bijeli_napada_nakon_odigranog_poteza()
                            if(this.nadji_polje_gdje_je_kralj().classList[1]==="bijelo") this.nadji_polje_gdje_je_kralj().style.backgroundColor="white"
                            if(this.nadji_polje_gdje_je_kralj().classList[1]==="crno") this.nadji_polje_gdje_je_kralj().style.backgroundColor="rgb(192, 205, 212)"
                            this.trenutno_polje.style.backgroundColor=temp_boja
                            isBlackKingUnderCheck()
                            
                            root_controlller.abort()
                               
                        }
                        is_clicked=true
                    })
                })
            }
        }, {signal:root_controlller.signal})
    
    }
    

}

let WhiteA_Rook= new wRook(document.querySelector("#a1"))
let WhiteH_Rook= new wRook(document.querySelector("#h1"))
