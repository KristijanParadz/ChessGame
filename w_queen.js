class wQueen{
    constructor(trenutno_polje){
        this.trenutno_polje=trenutno_polje
        this.trenutno_polje.innerText="♕"
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

    dohvati_mogucnosti_rooka(){
        let mogucnosti=this.dohvati_mogucnosti_slijeva().concat(this.dohvati_mogucnosti_zdesna()).concat(this.dohvati_mogucnosti_ispod()).concat(this.dohvati_mogucnosti_iznad())
        return mogucnosti
    }

    dohvati_polja_iznad_desno(){
        let mogucnosti=[]
        ploca.forEach(e=>{
            if(e.broj===this.broj+1 && abeceda.indexOf(e.slovo)===this.indeks_slova+1){
                mogucnosti.push(e.polje)
            }
            if(e.broj===this.broj+2 && abeceda.indexOf(e.slovo)===this.indeks_slova+2){
                mogucnosti.push(e.polje)
            }
            if(e.broj===this.broj+3 && abeceda.indexOf(e.slovo)===this.indeks_slova+3){
                mogucnosti.push(e.polje)
            }
            if(e.broj===this.broj+4 && abeceda.indexOf(e.slovo)===this.indeks_slova+4){
                mogucnosti.push(e.polje)
            }
            if(e.broj===this.broj+5 && abeceda.indexOf(e.slovo)===this.indeks_slova+5){
                mogucnosti.push(e.polje)
            }
            if(e.broj===this.broj+6 && abeceda.indexOf(e.slovo)===this.indeks_slova+6){
                mogucnosti.push(e.polje)
            }
            if(e.broj===this.broj+7 && abeceda.indexOf(e.slovo)===this.indeks_slova+7){
                mogucnosti.push(e.polje)
            }
        })
        return mogucnosti.reverse()
    }

    dohvati_polja_ispod_lijevo(){
        let mogucnosti=[]
        ploca.forEach(e=>{
            if(e.broj===this.broj-1 && abeceda.indexOf(e.slovo)===this.indeks_slova-1){
                mogucnosti.push(e.polje)
            }
            if(e.broj===this.broj-2 && abeceda.indexOf(e.slovo)===this.indeks_slova-2){
                mogucnosti.push(e.polje)
            }
            if(e.broj===this.broj-3 && abeceda.indexOf(e.slovo)===this.indeks_slova-3){
                mogucnosti.push(e.polje)
            }
            if(e.broj===this.broj-4 && abeceda.indexOf(e.slovo)===this.indeks_slova-4){
                mogucnosti.push(e.polje)
            }
            if(e.broj===this.broj-5 && abeceda.indexOf(e.slovo)===this.indeks_slova-5){
                mogucnosti.push(e.polje)
            }
            if(e.broj===this.broj-6 && abeceda.indexOf(e.slovo)===this.indeks_slova-6){
                mogucnosti.push(e.polje)
            }
            if(e.broj===this.broj-7 && abeceda.indexOf(e.slovo)===this.indeks_slova-7){
                mogucnosti.push(e.polje)
            }
        })
        return mogucnosti
    }

    dohvati_polja_iznad_lijevo(){//TODO
        let mogucnosti = []
        ploca.forEach(e=>{
            if(e.broj===this.broj+1 && abeceda.indexOf(e.slovo)===this.indeks_slova-1){
                mogucnosti.push(e.polje)
            }
            if(e.broj===this.broj+2 && abeceda.indexOf(e.slovo)===this.indeks_slova-2){
                mogucnosti.push(e.polje)
            }
            if(e.broj===this.broj+3 && abeceda.indexOf(e.slovo)===this.indeks_slova-3){
                mogucnosti.push(e.polje)
            }
            if(e.broj===this.broj+4 && abeceda.indexOf(e.slovo)===this.indeks_slova-4){
                mogucnosti.push(e.polje)
            }
            if(e.broj===this.broj+5 && abeceda.indexOf(e.slovo)===this.indeks_slova-5){
                mogucnosti.push(e.polje)
            }
            if(e.broj===this.broj+6 && abeceda.indexOf(e.slovo)===this.indeks_slova-6){
                mogucnosti.push(e.polje)
            }
            if(e.broj===this.broj+7 && abeceda.indexOf(e.slovo)===this.indeks_slova-7){
                mogucnosti.push(e.polje)
            }
        })
        return mogucnosti.reverse()
    }

    dohvati_polja_ispod_desno(){
        let mogucnosti=[]
        ploca.forEach(e=>{
            if(e.broj===this.broj-1 && abeceda.indexOf(e.slovo)===this.indeks_slova+1){
                mogucnosti.push(e.polje)
            }
            if(e.broj===this.broj-2 && abeceda.indexOf(e.slovo)===this.indeks_slova+2){
                mogucnosti.push(e.polje)
            }
            if(e.broj===this.broj-3 && abeceda.indexOf(e.slovo)===this.indeks_slova+3){
                mogucnosti.push(e.polje)
            }
            if(e.broj===this.broj-4 && abeceda.indexOf(e.slovo)===this.indeks_slova+4){
                mogucnosti.push(e.polje)
            }
            if(e.broj===this.broj-5 && abeceda.indexOf(e.slovo)===this.indeks_slova+5){
                mogucnosti.push(e.polje)
            }
            if(e.broj===this.broj-6 && abeceda.indexOf(e.slovo)===this.indeks_slova+6){
                mogucnosti.push(e.polje)
            }
            if(e.broj===this.broj-7 && abeceda.indexOf(e.slovo)===this.indeks_slova+7){
                mogucnosti.push(e.polje)
            }
        })
        return mogucnosti
    }

    dohvati_mogucnosti_iznad_desno(){
        let mogucnosti=[]
        let svi_iznad_desno=this.dohvati_polja_iznad_desno()
        for(let i=0; i<svi_iznad_desno.length; i++){
            if(bijele_figure.some(figura=>figura===svi_iznad_desno[i].innerText)){
                return mogucnosti
            }
            else if(svi_iznad_desno[i].innerText===""){
                mogucnosti.push(svi_iznad_desno[i])
            }
            else{
                mogucnosti.push(svi_iznad_desno[i])
                return mogucnosti
            }
        }
        
        return mogucnosti
    }

    dohvati_mogucnosti_ispod_lijevo(){
        let mogucnosti=[]
        let svi_ispod_lijevo=this.dohvati_polja_ispod_lijevo()
        for(let i=0; i<svi_ispod_lijevo.length; i++){
            if(bijele_figure.some(figura=>figura===svi_ispod_lijevo[i].innerText)){
                return mogucnosti
            }
            else if(svi_ispod_lijevo[i].innerText===""){
                mogucnosti.push(svi_ispod_lijevo[i])
            }
            else{
                mogucnosti.push(svi_ispod_lijevo[i])
                return mogucnosti
            }
        }
        
        return mogucnosti
    }

    dohvati_mogucnosti_iznad_lijevo(){
        let mogucnosti=[]
        let svi_iznad_lijevo=this.dohvati_polja_iznad_lijevo()
        for(let i=0; i<svi_iznad_lijevo.length; i++){
            if(bijele_figure.some(figura=>figura===svi_iznad_lijevo[i].innerText)){
                return mogucnosti
            }
            else if(svi_iznad_lijevo[i].innerText===""){
                mogucnosti.push(svi_iznad_lijevo[i])
            }
            else{
                mogucnosti.push(svi_iznad_lijevo[i])
                return mogucnosti
            }
        }
        
        return mogucnosti
    }

    dohvati_mogucnosti_ispod_desno(){
        let mogucnosti=[]
        let svi_ispod_desno=this.dohvati_polja_ispod_desno()
        for(let i=0; i<svi_ispod_desno.length; i++){
            if(bijele_figure.some(figura=>figura===svi_ispod_desno[i].innerText)){
                return mogucnosti
            }
            else if(svi_ispod_desno[i].innerText===""){
                mogucnosti.push(svi_ispod_desno[i])
            }
            else{
                mogucnosti.push(svi_ispod_desno[i])
                return mogucnosti
            }
        }
        
        return mogucnosti
    }

    dohvati_mogucnosti_bishopa(){
        let mogucnosti = this.dohvati_mogucnosti_ispod_desno().concat(this.dohvati_mogucnosti_ispod_lijevo()).concat(this.dohvati_mogucnosti_iznad_desno()).concat(this.dohvati_mogucnosti_iznad_lijevo())
        return mogucnosti
    }

    dohvati_mogucnosti(){
        let mogucnosti= this.dohvati_mogucnosti_bishopa().concat(this.dohvati_mogucnosti_rooka())
        let prave_mogucnosti=[]
        mogucnosti.forEach(e=>{
            let temp_inner_text=e.innerText
            this.trenutno_polje.innerText=""
            e.innerText="♕"
            sva_polja_koja_crni_napada_nakon_odigranog_poteza()
            if(!trenutna_polja_koja_crne_figure_napadaju.includes(this.nadji_polje_gdje_je_kralj())){
                prave_mogucnosti.push(e)
            }
            this.trenutno_polje.innerText="♕"
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
            if(this.trenutno_polje.innerText==="♕" && !is_kliknuto_bijele_figure && ciji_je_potez && this.dohvati_mogucnosti().length>0 ){
                let temp_boja=this.trenutno_polje.style.backgroundColor
                let boje_mogucnosti=[]
                let mogucnosti=this.dohvati_mogucnosti()
                console.log(mogucnosti)
                is_kliknuto_bijele_figure=true
                this.trenutno_polje.style.backgroundColor="yellow"
                mogucnosti.forEach(mogucnost=>{
                    boje_mogucnosti.push(mogucnost.style.backgroundColor)
                    mogucnost.style.backgroundColor="rgb(177, 241, 116)"
                    mogucnost.addEventListener("click",()=>{
                        if(is_clicked===false){
                            ciji_je_potez=!ciji_je_potez
                            is_kliknuto_bijele_figure=false
                            let new_pawn = new wQueen(mogucnost)
                            this.trenutno_polje.innerText=""
                            for(let i = 0; i<mogucnosti.length;i++) mogucnosti[i].style.backgroundColor=boje_mogucnosti[i]
                            this.trenutno_polje.style.backgroundColor=temp_boja
                            sva_polja_koja_crni_napada_nakon_odigranog_poteza()
                            sva_polja_koja_bijeli_napada_nakon_odigranog_poteza()
                            isBlackKingUnderCheck()
                            if(this.nadji_polje_gdje_je_kralj().classList[1]==="bijelo") this.nadji_polje_gdje_je_kralj().style.backgroundColor="white"
                            if(this.nadji_polje_gdje_je_kralj().classList[1]==="crno") this.nadji_polje_gdje_je_kralj().style.backgroundColor="rgb(192, 205, 212)"
                            root_controlller.abort()
                        }
                        is_clicked=true
                    })
                })
            }
        }, {signal:root_controlller.signal})
    
    }

}

let w_Queen = new wQueen(document.querySelector("#d1"))
