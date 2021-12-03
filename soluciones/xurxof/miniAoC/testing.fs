module testing

open Xunit
open reto1

[<Fact>] 
let repeatedDomain_OneElement_ReturnsDomain() =
    let email = ["blabla@bla.com"]
    
    Assert.True(email |> repeatedDomain = "bla.com")


[<Fact>] 
let repeatedDomain_EmptySequence_ReturnsEmptyString() =
    let email = []
    let result = email |> repeatedDomain
    Assert.Equal (result ,"")

[<Fact>] 
let repeatedDomain_NullElement_ReturnsEmptyString() =
    let result = null |> repeatedDomain
    Assert.Equal (result ,"")



[<Fact>] 
let repeatedDomain_RepeatedElement_ReturnsDomain() =
    let email = ["blabla@bla.com";"blabla@bla.com";"blabla@dprimo.com"]
    let result = email |> repeatedDomain
    Assert.Equal (result ,"bla.com")


[<Fact>] 
let repeatedDomain_TieElement_ReturnsFirst() =
    let email = ["blabla@bla.com";"blabla@bla.com";"blabla@dprimo.com";"blabla@dprimo.com"]
    let result = email |> repeatedDomain
    Assert.Equal (result , "bla.com")