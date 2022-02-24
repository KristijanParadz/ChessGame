class fakeBlackKing{
    constructor(trenutno_polje){
        
        this.trenutno_polje=trenutno_polje
        this.slovo=this.getObject().slovo
        this.broj=this.getObject().broj
        this.indeks_slova=abeceda.indexOf(this.slovo)
    }

    getObject(){ //dohvaca object iz ploce
        return ploca.find((object)=>{return object.polje===this.trenutno_polje})
    }

    dohvati_mogucnosti(){ 
        let mogucnosti= []
        let sva_polja_koja_crni_kralj_brani=[]
        ploca.forEach(e=>{
            if(e.broj===this.broj+1 || e.broj ===this.broj-1 || e.broj===this.broj){
                if(this.indeks_slova===abeceda.indexOf(e.slovo) || this.indeks_slova===abeceda.indexOf(e.slovo)+1 || this.indeks_slova===abeceda.indexOf(e.slovo)-1){
                    if(this.trenutno_polje!==e.polje &&  crne_figure.some(fig=>fig===e.polje.innerText)){
                        sva_polja_koja_crni_kralj_brani.push(e.polje)
                    }
                    if(this.trenutno_polje!==e.polje && !crne_figure.some(figura=>figura===e.polje.innerText) ){
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
        })
        return mogucnosti
    }

    dohvati_branjene_mogucnosti(){
        let sva_polja_koja_crni_kralj_brani=[]
        ploca.forEach(e=>{
            if(e.broj===this.broj+1 || e.broj ===this.broj-1 || e.broj===this.broj){
                if(this.indeks_slova===abeceda.indexOf(e.slovo) || this.indeks_slova===abeceda.indexOf(e.slovo)+1 || this.indeks_slova===abeceda.indexOf(e.slovo)-1){
                    if(this.trenutno_polje!==e.polje &&  crne_figure.some(fig=>fig===e.polje.innerText)){
                        sva_polja_koja_crni_kralj_brani.push(e.polje)
                    }
                }
            }
        })
        return sva_polja_koja_crni_kralj_brani
    }

}