module testing

open Xunit
open GenerateTrollPassword

[<Fact>]
let generateTrollPassword_OneElement_ReturnsElement () =
    Assert.True(generateTrollPassword "a" = [ "a" ])

[<Fact>]
let mix_ThreeElement_ReturnsElement () =
    let result = mix "abc" 
    let expect = ["abc";"acb";"bac";"bca";"cab";"cba"]
    Assert.True ((expect = result))

[<Fact>]
let mix_TwoElement_ReturnsElement () =
    let result = mix "ab" 
    let expect = ["ab"; "ba"]
    Assert.True ((expect = result))

[<Fact>]
let mix_OneElement_ReturnsElement () =
    let result = mix "a" 
    let expect = ["a"]
    Assert.True ((expect = result))

[<Fact>]
let mix_EmptyElement_ReturnsElement () =
    let result = mix "" 
    let expect = []
    Assert.True ((expect = result))