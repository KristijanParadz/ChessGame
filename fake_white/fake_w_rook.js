class fakeWhiteRook{

    constructor(trenutno_polje){
        this.trenutno_polje=trenutno_polje
        this.slovo=this.getObject().slovo
        this.broj=this.getObject().broj
        this.indeks_slova=abeceda.indexOf(this.slovo)
        this.dohvati_mogucnosti().forEach(e=>{
            if(!trenutna_polja_koja_bijele_figure_napadaju.includes(e)){
                trenutna_polja_koja_bijele_figure_napadaju.push(e)
            }
        })
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
        let mogucnosti=this.dohvati_mogucnosti_slijeva().concat(this.dohvati_mogucnosti_zdesna()).concat(this.dohvati_mogucnosti_ispod()).concat(this.dohvati_mogucnosti_iznad())
        return mogucnosti
    }


}