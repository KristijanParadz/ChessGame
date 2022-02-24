class fakeWhitePawn{

    constructor(trenutno_polje){
        this.trenutno_polje=trenutno_polje
        this.dohvati_mogucnosti().forEach(e=>{
            if(!trenutna_polja_koja_bijele_figure_napadaju.includes(e)){
                trenutna_polja_koja_bijele_figure_napadaju.push(e)
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

    dohvati_mogucnosti(){
        let mogucnosti =[]
        ploca.forEach(e=>{
            if(e.broj===this.getObject().broj+1 && (e.slovo===abeceda[this.indeks_slova()-1] || e.slovo===abeceda[this.indeks_slova()+1])){
                mogucnosti.push(e.polje)
            }
        })
        return mogucnosti
    }
}


let fake_a_pawn= new fakeWhitePawn(document.querySelector("#a2"))
let fake_b_pawn= new fakeWhitePawn(document.querySelector("#b2"))
let fake_c_pawn= new fakeWhitePawn(document.querySelector("#c2"))
let fake_d_pawn= new fakeWhitePawn(document.querySelector("#d2"))
let fake_e_pawn= new fakeWhitePawn(document.querySelector("#e2"))
let fake_f_pawn= new fakeWhitePawn(document.querySelector("#f2"))
let fake_g_pawn= new fakeWhitePawn(document.querySelector("#g2"))
let fake_h_pawn= new fakeWhitePawn(document.querySelector("#h2"))

