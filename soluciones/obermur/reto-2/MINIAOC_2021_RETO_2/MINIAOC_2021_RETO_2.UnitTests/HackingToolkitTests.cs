using NUnit.Framework;

namespace MINIAOC_2021_RETO_2.UnitTests;

public class HackingToolkitTests{
    [TestCase("ab", 2 * 1)]
    [TestCase("abc", 3 * 2 * 1)]
    [TestCase("abcd", 4 * 3 * 2 * 1)]
    [TestCase("abcde", 5 * 4 * 3 * 2 * 1)]
    public void GenerateTrollPassword_SpecificSample_ReturnsDictionaryWithSpecificNumberOfItems(string sample,int length){
        //Assert
        HackingToolkit sut = new();
        //Act
        string[] dictionary = sut.GenerateTrollPassword(sample);
        //Assert
        Assert.IsNotNull(dictionary);
        Assert.AreEqual(length, dictionary.Length);
    }
    [TestCase("ab", "ab")]
    [TestCase("ab", "ba")]
    [TestCase("abc", "abc")]
    [TestCase("abc", "acb")]
    [TestCase("abc", "bac")]
    [TestCase("abc", "bca")]
    [TestCase("abc", "cab")]
    [TestCase("abc", "cba")]
    public void GenerateTrollPassword_SpecificSample_ReturnsDictionaryThatContainsSpecificItem(string sample,string item){
        //Assert
        HackingToolkit sut = new();
        //Act
        string[] dictionary = sut.GenerateTrollPassword(sample);
        //Assert
        Assert.IsNotNull(dictionary);
        Assert.Contains(item, dictionary);
    }
}
