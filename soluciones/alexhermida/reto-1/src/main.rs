use counter::Counter;

pub fn find_smart_hackers<'a>(email_list: &'a[&'a str]) -> Vec<&str> {

    let mut domain_list = Vec::new();
    for x in email_list {
        let domain_index = x.find("@").unwrap();
        let slice = &x[domain_index..];
        domain_list.push(slice);
    }
    let most_common = domain_list.iter().collect::<Counter<_>>().most_common_ordered();
    let domain_spam = most_common[0].0;
    let filtered_list: Vec<&str> = email_list.iter().filter(|&x| x.contains(domain_spam)).cloned().collect();

    filtered_list
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
            "ciao@somoshackersastutos.com",
        ];
        let result_list = [
            "hola@somoshackersastutos.com",
            "hello@somoshackersastutos.com",
            "ciao@somoshackersastutos.com",
        ];
        assert_eq!(find_smart_hackers(&input_emails), result_list);
    }
}

fn main() {
    let input_emails = [
        "hola@somoshackersastutos.com",
        "ambrosio@outlook.com",
        "coco@malandriners.dev",
        "hello@somoshackersastutos.com",
        "ambrosio@outlook.com",
        "ciao@somoshackersastutos.com",
    ];

    let hackers_emails = find_smart_hackers(&input_emails);
    println!("{:?}", hackers_emails);
}
