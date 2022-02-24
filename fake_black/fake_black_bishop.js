class fakeBlackBishop{

    constructor(trenutno_polje){
        this.trenutno_polje=trenutno_polje
        this.slovo=this.getObject().slovo
        this.broj=this.getObject().broj
        this.indeks_slova=abeceda.indexOf(this.slovo)
        this.dohvati_mogucnosti().forEach(e=>{
            if(!trenutna_polja_koja_crne_figure_napadaju.includes(e)){
                trenutna_polja_koja_crne_figure_napadaju.push(e)
            }
        })
        
    }


    getObject(){ //dohvaca object iz ploce
        return ploca.find((object)=>{return object.polje===this.trenutno_polje})
    }

    nadji_polje_gdje_je_kralj(){
        for(let i = 0; i< ploca.length ; i++)
            if(ploca[i].polje.innerText==="♚"){return ploca[i].polje }
        
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
            if(crne_figure.some(figura=>figura===svi_iznad_desno[i].innerText)){
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
            if(crne_figure.some(figura=>figura===svi_ispod_lijevo[i].innerText)){
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
            if(crne_figure.some(figura=>figura===svi_iznad_lijevo[i].innerText)){
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
            if(crne_figure.some(figura=>figura===svi_ispod_desno[i].innerText)){
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

    dohvati_mogucnosti(){
        let mogucnosti = this.dohvati_mogucnosti_ispod_desno().concat(this.dohvati_mogucnosti_ispod_lijevo()).concat(this.dohvati_mogucnosti_iznad_desno()).concat(this.dohvati_mogucnosti_iznad_lijevo())
        return mogucnosti
    }


    dohvati_prave_mogucnosti(){
        let prave_mogucnosti=[]
        let mogucnosti = this.dohvati_mogucnosti_ispod_desno().concat(this.dohvati_mogucnosti_ispod_lijevo()).concat(this.dohvati_mogucnosti_iznad_desno()).concat(this.dohvati_mogucnosti_iznad_lijevo())
        mogucnosti.forEach(e=>{
            let temp_inner_text=e.innerText
            this.trenutno_polje.innerText=""
            e.innerText="♝"
            sva_polja_koja_bijeli_napada_nakon_odigranog_poteza()
            if(!trenutna_polja_koja_bijele_figure_napadaju.includes(this.nadji_polje_gdje_je_kralj())){
                prave_mogucnosti.push(e)
            }
            this.trenutno_polje.innerText="♝"
            e.innerText=temp_inner_text
        })
        return prave_mogucnosti
    }



}