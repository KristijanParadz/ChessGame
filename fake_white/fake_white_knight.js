class fakeWhiteKnight{

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

    dohvati_mogucnosti(){
        let mogucnosti = []
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
        return mogucnosti
    }

}