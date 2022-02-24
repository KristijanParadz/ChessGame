class fakeBlackPawn{
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

    slovo(){return this.getObject().slovo}
    indeks_slova(){
        return abeceda.findIndex(e=>this.slovo()===e)
    }

    getObject(){ //dohvaca object iz ploce
        return ploca.find((object)=>{return object.polje===this.trenutno_polje})
    }

    nadji_polje_gdje_je_kralj(){
        for(let i = 0; i< ploca.length ; i++)
            if(ploca[i].polje.innerText==="♚"){return ploca[i].polje }
        
    }

    dohvati_mogucnosti(){
        let mogucnosti =[]
        ploca.forEach(e=>{
            if(e.broj===this.getObject().broj-1 && (e.slovo===abeceda[this.indeks_slova-1] || e.slovo===abeceda[this.indeks_slova+1])){
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

    dohvati_dijagonalna_polja(){
        let mogucnosti =[]
        ploca.forEach(e=>{
            if(e.broj===this.getObject().broj-1 && (e.slovo===abeceda[this.indeks_slova-1] || e.slovo===abeceda[this.indeks_slova+1])){
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

    dohvati_prave_mogucnosti(){
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

}