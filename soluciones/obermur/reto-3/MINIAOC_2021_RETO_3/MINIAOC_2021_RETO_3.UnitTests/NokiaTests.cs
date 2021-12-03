using Xunit;

namespace MINIAOC_2021_RETO_3.UnitTests;

public class NokiaTests{
    [Theory]
    [InlineData("6", 3)]
    [InlineData("234", 26)]
    public void GetTexts_SpecificInput_HasSpecificCountOfOptions(string input, int count){
        //Arrange
        Nokia nokia = new();
        //Act
        string[] texts = nokia.GetTexts(input);
        //Assert
        Assert.NotNull(texts);
        Assert.Equal(count, texts.Length);
    }
    [Theory]
    [InlineData("6", "m")]
    [InlineData("6", "n")]
    [InlineData("6", "o")]
    [InlineData("234", "adg")]
    [InlineData("234", "adh")]
    [InlineData("234", "adi")]
    [InlineData("234", "aeg")]
    [InlineData("234", "aeh")]
    [InlineData("234", "aei")]
    [InlineData("234", "afg")]
    [InlineData("234", "afh")]
    [InlineData("234", "afi")]
    [InlineData("234", "bdg")]
    [InlineData("234", "bdh")]
    [InlineData("234", "bdi")]
    [InlineData("234", "beg")]
    [InlineData("234", "beh")]
    [InlineData("234", "bei")]
    [InlineData("234", "bfg")]
    [InlineData("234", "bfh")]
    [InlineData("234", "bfi")]
    [InlineData("234", "cdg")]
    [InlineData("234", "cdh")]
    [InlineData("234", "cdi")]
    [InlineData("234", "ceg")]
    [InlineData("234", "ceh")]
    [InlineData("234", "cei")]
    [InlineData("234", "cfg")]
    [InlineData("234", "cfh")]
    [InlineData("234", "cfi")]
    public void GetTexts_SpecificInput_HasOption(string input, string option){
        //Arrange
        Nokia nokia = new();
        //Act
        string[] texts = nokia.GetTexts(input);
        //Assert
        Assert.NotNull(texts);
        Assert.Contains(option, texts);

    }
    [Theory]
    [InlineData("malo olma loma mola", "6256065620566206652")]
    public void GetKeys_SpecificText_ReturnsKeys(string input, string expected){
        //Arrange
        Nokia nokia = new();
        //Act
        string keys = nokia.GetKeys(input);
        //Assert
        Assert.NotNull(keys);
        Assert.Equal(keys, expected);
    }
}
