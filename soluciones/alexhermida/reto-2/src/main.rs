use itertools::Itertools;


pub fn generate_troll_password<'a>(word: &str) -> Vec<String> {
    let permutations_vectors = word.chars().permutations(word.chars().count());

    let mut permutations_list = Vec::new();
    for permutation in permutations_vectors {
        let permutation_string: String = permutation.into_iter().collect();
        permutations_list.push(permutation_string);
    }

    permutations_list
}


#[cfg(test)]
mod tests {
    // Note this useful idiom: importing names from outer (for mod tests) scope.
    use super::*;

    #[test]
    fn test_combinations() {
        let input_word = "mola";
        let combinations_result = ["mola", "moal", "mloa", "mlao", "maol", "malo", "omla", "omal",
        "olma", "olam", "oaml", "oalm", "lmoa", "lmao", "loma", "loam", "lamo", "laom", "amol",
        "amlo", "aoml", "aolm", "almo", "alom"];

        assert_eq!(generate_troll_password(&input_word), combinations_result);
        
    }
}

fn main() {

    let word = "alex";
    let permutations_list = generate_troll_password(word);

    println!("{:?}", permutations_list);

}

