module testing

open Xunit
open GenerateTrollPassword
 
[<Fact>]
let generateTrollPassword_ThreeElement_ReturnsElement () =
    let result = generateTrollPassword "abc" 
    let expect = ["abc";"acb";"bac";"bca";"cab";"cba"]
    Assert.True ((expect = result))

[<Fact>]
let generateTrollPassword_TwoElement_ReturnsElement () =
    let result = generateTrollPassword "ab" 
    let expect = ["ab"; "ba"]
    Assert.True ((expect = result))

[<Fact>]
let generateTrollPassword_OneElement_ReturnsElement () =
    let result = generateTrollPassword "a" 
    let expect = ["a"]
    Assert.True ((expect = result))

[<Fact>]
let generateTrollPassword_EmptyElement_ReturnsElement () =
    let result = generateTrollPassword "" 
    let expect = []
    Assert.True ((expect = result))