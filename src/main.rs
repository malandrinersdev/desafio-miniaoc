
pub fn find_smart_hackers(email_list: &[String]) -> [String] {
    return ["l"]
}


#[cfg(test)]
mod tests {
    // Note this useful idiom: importing names from outer (for mod tests) scope.
    use super::*;

    #[test]
    fn test_find_smart_hackers() {
        let input_emails = [
            "hola@somoshackersastutos.com",
            "ambrosio@outlook.com",
            "coco@malandriners.dev",
            "hello@somoshackersastutos.com",
            "ambrosio@outlook.com",
            "ciao@somoshackersastutos.com"
        ];
        let result_list = [
            "hola@somoshackersastutos.com",
            "hello@somoshackersastutos.com",
            "ciao@somoshackersastutos.com"
        ];
        assert_eq!(find_smart_hackers(&input_emails), result_list);
    }
}

fn main() {
    println!("Hello, world!");
}
