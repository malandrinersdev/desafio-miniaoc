module GenerateTrollPassword


let rec moveCharToStart (input:string) (i:int) = 
    let startChar = input.[i..i]
    let reminder = input.[0 .. i-1] + input.[i+1 .. input.Length]
    match reminder.Length with 
        | 1 | 0 -> [startChar+reminder]
        | _ -> 
            let mixedReminder = generateTrollPassword reminder
            let result = 
                mixedReminder 
                |> Seq.map (fun u-> startChar + u)
                |> Seq.toList
            result

and generateTrollPassword input = 
    [0 .. -1 + Seq.length input] 
        |> Seq.map (fun i -> moveCharToStart input i )
        |> Seq.fold (fun a b -> a @ b) []
    
     