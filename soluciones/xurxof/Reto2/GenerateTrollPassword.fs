module GenerateTrollPassword


let rec moveCharToStart (input:string) (i:int) = 
    let startChar = input.[i..i]
    let reminder = input.[0 .. i-1] + input.[i+1 .. input.Length]
    match reminder.Length with 
        | 1 | 0 -> [startChar+reminder]
        | _ -> 
            let mixedReminder = mix reminder
            let result = 
                mixedReminder 
                |> Seq.map (fun u-> startChar + u)
                |> Seq.toList
            result

and mix input = 
    let result = [0 .. -1 + Seq.length input] 
                |> Seq.map (fun i -> moveCharToStart input i )
                |> Seq.fold (fun a b -> a @ b) []
    result

let generateTrollPassword input = 
    match String.length input with
    | 1 ->[ input ]
    | _ -> mix input 