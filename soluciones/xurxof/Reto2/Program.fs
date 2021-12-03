// Learn more about F# at http://docs.microsoft.com/dotnet/fsharp
open GenerateTrollPassword

[<EntryPoint>]
let main argv =
    System.Console.WriteLine ("Input")
    let input = System.Console.ReadLine()
    
    let r = generateTrollPassword input
    printfn "%A" r
    0 // return an integer exit code
