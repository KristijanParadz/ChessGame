class fakeBlackKnight{
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

    dohvati_mogucnosti(){
        let mogucnosti = []
        ploca.forEach(e=>{ //kad je broj veci za dva
            if((e.broj===this.broj+2 || e.broj===this.broj-2) && !crne_figure.some(figura=>figura===e.polje.innerText)){
                if(abeceda.indexOf(e.slovo)===this.indeks_slova-1 || abeceda.indexOf(e.slovo)===this.indeks_slova+1 ){
                    mogucnosti.push(e.polje)
                }
            }

            if((e.broj===this.broj+1 || e.broj===this.broj-1) && !crne_figure.some(figura=>figura===e.polje.innerText)){ // kad je indeks slova veci za dva
                if(abeceda.indexOf(e.slovo)===this.indeks_slova-2 || abeceda.indexOf(e.slovo)===this.indeks_slova+2 ){
                    mogucnosti.push(e.polje)
                }
            }
        })
        
        return mogucnosti
    }

    dohvati_prave_mogucnosti(){
        let prave_mogucnosti=[]
        let mogucnosti = []
        ploca.forEach(e=>{ //kad je broj veci za dva
            if((e.broj===this.broj+2 || e.broj===this.broj-2) && !crne_figure.some(figura=>figura===e.polje.innerText)){
                if(abeceda.indexOf(e.slovo)===this.indeks_slova-1 || abeceda.indexOf(e.slovo)===this.indeks_slova+1 ){
                    mogucnosti.push(e.polje)
                }
            }

            if((e.broj===this.broj+1 || e.broj===this.broj-1) && !crne_figure.some(figura=>figura===e.polje.innerText)){ // kad je indeks slova veci za dva
                if(abeceda.indexOf(e.slovo)===this.indeks_slova-2 || abeceda.indexOf(e.slovo)===this.indeks_slova+2 ){
                    mogucnosti.push(e.polje)
                }
            }
        })

        mogucnosti.forEach(e=>{
            let temp_inner_text=e.innerText
            this.trenutno_polje.innerText=""
            e.innerText="♞"
            sva_polja_koja_bijeli_napada_nakon_odigranog_poteza()
            if(!trenutna_polja_koja_bijele_figure_napadaju.includes(this.nadji_polje_gdje_je_kralj())){
                prave_mogucnosti.push(e)
            }
            this.trenutno_polje.innerText="♞"
            e.innerText=temp_inner_text
        })
        return prave_mogucnosti
    }

}