let is_kliknuto_crne_figure=false
let ciji_je_potez=true
let is_kliknuto_bijele_figure=false
const crne_figure=["♜","♞","♝","♛","♚","♟"]
const bijele_figure=["♖","♘","♗","♕","♔","♙"]

let trenutna_polja_koja_bijele_figure_napadaju=[]
let trenutna_polja_koja_crne_figure_napadaju=[]

let is_white_king_moved=false
let is_black_king_moved=false

let mogucnosti_crnog_kralja=[]
let mogucnosti_bijelog_kralja=[]

let osma_linija=[document.querySelector("#a8"),
                 document.querySelector("#b8"),
                 document.querySelector("#c8"),
                 document.querySelector("#d8"),
                 document.querySelector("#e8"),
                 document.querySelector("#f8"),
                 document.querySelector("#g8"),
                 document.querySelector("#h8"),
                ]
let prva_linija=[document.querySelector("#a1"),
                 document.querySelector("#b1"),
                 document.querySelector("#c1"),
                 document.querySelector("#d1"),
                 document.querySelector("#e1"),
                 document.querySelector("#f1"),
                 document.querySelector("#g1"),
                 document.querySelector("#h1"),
                ]                

let is_white_a_rook_moved=false
let is_white_h_rook_moved=false
let is_black_a_rook_moved=false
let is_black_h_rook_moved=false


const ploca =[
    {slovo:"a",broj:8,polje:document.querySelector("#a8")},
    {slovo:"b",broj:8,polje:document.querySelector("#b8")},
    {slovo:"c",broj:8,polje:document.querySelector("#c8")},
    {slovo:"d",broj:8,polje:document.querySelector("#d8")},
    {slovo:"e",broj:8,polje:document.querySelector("#e8")},
    {slovo:"f",broj:8,polje:document.querySelector("#f8")},
    {slovo:"g",broj:8,polje:document.querySelector("#g8")},
    {slovo:"h",broj:8,polje:document.querySelector("#h8")},
    {slovo:"a",broj:7,polje:document.querySelector("#a7")},
    {slovo:"b",broj:7,polje:document.querySelector("#b7")},
    {slovo:"c",broj:7,polje:document.querySelector("#c7")},
    {slovo:"d",broj:7,polje:document.querySelector("#d7")},
    {slovo:"e",broj:7,polje:document.querySelector("#e7")},
    {slovo:"f",broj:7,polje:document.querySelector("#f7")},
    {slovo:"g",broj:7,polje:document.querySelector("#g7")},
    {slovo:"h",broj:7,polje:document.querySelector("#h7")},
    {slovo:"a",broj:6,polje:document.querySelector("#a6")},
    {slovo:"b",broj:6,polje:document.querySelector("#b6")},
    {slovo:"c",broj:6,polje:document.querySelector("#c6")},
    {slovo:"d",broj:6,polje:document.querySelector("#d6")},
    {slovo:"e",broj:6,polje:document.querySelector("#e6")},
    {slovo:"f",broj:6,polje:document.querySelector("#f6")},
    {slovo:"g",broj:6,polje:document.querySelector("#g6")},
    {slovo:"h",broj:6,polje:document.querySelector("#h6")},
    {slovo:"a",broj:5,polje:document.querySelector("#a5")},
    {slovo:"b",broj:5,polje:document.querySelector("#b5")},
    {slovo:"c",broj:5,polje:document.querySelector("#c5")},
    {slovo:"d",broj:5,polje:document.querySelector("#d5")},
    {slovo:"e",broj:5,polje:document.querySelector("#e5")},
    {slovo:"f",broj:5,polje:document.querySelector("#f5")},
    {slovo:"g",broj:5,polje:document.querySelector("#g5")},
    {slovo:"h",broj:5,polje:document.querySelector("#h5")},
    {slovo:"a",broj:4,polje:document.querySelector("#a4")},
    {slovo:"b",broj:4,polje:document.querySelector("#b4")},
    {slovo:"c",broj:4,polje:document.querySelector("#c4")},
    {slovo:"d",broj:4,polje:document.querySelector("#d4")},
    {slovo:"e",broj:4,polje:document.querySelector("#e4")},
    {slovo:"f",broj:4,polje:document.querySelector("#f4")},
    {slovo:"g",broj:4,polje:document.querySelector("#g4")},
    {slovo:"h",broj:4,polje:document.querySelector("#h4")},
    {slovo:"a",broj:3,polje:document.querySelector("#a3")},
    {slovo:"b",broj:3,polje:document.querySelector("#b3")},
    {slovo:"c",broj:3,polje:document.querySelector("#c3")},
    {slovo:"d",broj:3,polje:document.querySelector("#d3")},
    {slovo:"e",broj:3,polje:document.querySelector("#e3")},
    {slovo:"f",broj:3,polje:document.querySelector("#f3")},
    {slovo:"g",broj:3,polje:document.querySelector("#g3")},
    {slovo:"h",broj:3,polje:document.querySelector("#h3")},
    {slovo:"a",broj:2,polje:document.querySelector("#a2")},
    {slovo:"b",broj:2,polje:document.querySelector("#b2")},
    {slovo:"c",broj:2,polje:document.querySelector("#c2")},
    {slovo:"d",broj:2,polje:document.querySelector("#d2")},
    {slovo:"e",broj:2,polje:document.querySelector("#e2")},
    {slovo:"f",broj:2,polje:document.querySelector("#f2")},
    {slovo:"g",broj:2,polje:document.querySelector("#g2")},
    {slovo:"h",broj:2,polje:document.querySelector("#h2")},
    {slovo:"a",broj:1,polje:document.querySelector("#a1")},
    {slovo:"b",broj:1,polje:document.querySelector("#b1")},
    {slovo:"c",broj:1,polje:document.querySelector("#c1")},
    {slovo:"d",broj:1,polje:document.querySelector("#d1")},
    {slovo:"e",broj:1,polje:document.querySelector("#e1")},
    {slovo:"f",broj:1,polje:document.querySelector("#f1")},
    {slovo:"g",broj:1,polje:document.querySelector("#g1")},
    {slovo:"h",broj:1,polje:document.querySelector("#h1")}
]
const abeceda=["a", "b", "c", "d", "e", "f", "g", "h"]

