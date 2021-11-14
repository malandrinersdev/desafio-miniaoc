// Learn more about F# at http://docs.microsoft.com/dotnet/fsharp
open reto1

let email_adresses = [
    "luis@hackeros.com";
    "pepe@outlook.com";
    "xurxo@hackeros.com";
    "elena@pradorramisquedo.com";
    "patricia@hackeros.com";
    "salome@hackeros.com";
    "andres@dprimo.com"
]


[<EntryPoint>]
let main argv =
    let result = repeatedDomain  email_adresses
    
    printfn "%s" result
     
    0 // return an integer exit code
