extern crate permutohedron;


use permutohedron::LexicalPermutation;


fn read_from_input() -> String {
    
    use std::io::{stdin,stdout,Write};

    let mut s=String::new();
    print!("Escribe las letras que desees permutar: ");
    let _=stdout().flush();
    stdin().read_line(&mut s).expect("¿Que has intentado añadir? Eso no es correcto");
    if let Some('\n')=s.chars().next_back() {
        s.pop();
    }
    if let Some('\r')=s.chars().next_back() {
        s.pop();
    }

    return s;
}
fn generateTrollPassword(word: String) {
    let mut letras: Vec<char> = word.chars().collect();
    letras.sort();
    loop {
        println!("{}", letras.iter().collect::<String>());
    
        if !letras.next_permutation() { break }
    }
}
fn main() {
    
    let word: String = read_from_input();

    generateTrollPassword(word);    
    
        

}