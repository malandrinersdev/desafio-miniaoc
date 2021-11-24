use std::collections::HashMap;

fn get_domain(email: &str) -> String {
    
    let offset = email.find('@').unwrap_or_default();
    
    return email.split_at(offset+1).1.to_string();
    
}
/* Segun RUST, esta funcion deberia ser snake_case ... ;) */
fn findSmartHackers(emails: Vec<String>) {

    let mut domains_count: HashMap<String, i32> = HashMap::new();
    let mut domains_mails: HashMap<String, Vec<String>> = HashMap::new();

    for email in &emails {

        let current_email = String::from(email);
        
        let email_domain = get_domain(current_email.as_ref());
        *domains_count.entry(email_domain.to_string()).or_default() += 1;
        (*domains_mails.entry(email_domain.to_string()).or_insert(Vec::new())).push(current_email); 
         
    }

    let top_domain = domains_count.iter().max_by(|a, b| a.1.cmp(&b.1)).unwrap();

    let list_emails = domains_mails.remove(top_domain.0);
    //println!("Top domain: {}", top_domain.0);
    
    println!("{:?}", list_emails.unwrap_or_default());
}
fn main() {
    //println!("Vamos a por esos hackers!!");
    
    let arr = vec![
        "hola@somoshackersastutos.com".to_string(),
        "ambrosio@outlook.com".to_string(),
        "coco@malandriners.dev".to_string(),
        "hello@somoshackersastutos.com".to_string(),
        "ambrosio@outlook.com".to_string(),
        "ciao@somoshackersastutos.com".to_string()
    ];

    findSmartHackers(arr);

}