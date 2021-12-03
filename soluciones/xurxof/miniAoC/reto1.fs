module reto1
    
    let extractDomain (s:string) =
        s.Split '@' |> Seq.last 
    
    
    let repeatedDomainChecked email_adresses =
        let mostRepTuple = 
                email_adresses 
                |> Seq.map extractDomain 
                |> Seq.countBy id 
                |> Seq.sortBy (fun (_,b) -> -b) 
                |> Seq.head 
        let result , _ = mostRepTuple
        result
    
    let repeatedDomain email_adresses =
        match email_adresses with
            | null -> ""
            | s when Seq.isEmpty s  -> ""
            | _ -> repeatedDomainChecked email_adresses
