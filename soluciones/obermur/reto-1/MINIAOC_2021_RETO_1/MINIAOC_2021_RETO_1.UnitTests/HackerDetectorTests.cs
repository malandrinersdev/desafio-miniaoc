using Xunit;

namespace MINIAOC_2021_RETO_1.UnitTests;

public class HackerDetectorTests{
    private static readonly string[] input = new[] {
        "hola@somoshackersastutos.com",
        "ambrosio@outlook.com",
        "coco@malandriners.dev",
        "hello@somoshackersastutos.com",
        "ambrosio@outlook.com",
        "ciao@somoshackersastutos.com"
    };
    [Fact]
    public void FindSmartHackers_ModelInput_ReturnSpecificLength(){
        //Arrange
        int expectedLength = 3;
        HackerDetector sut = new();
        //Act
        string[] output = sut.FindSmartHackers(input);
        //Assert
        Assert.NotNull(output);
        Assert.Equal(expectedLength, output.Length);
    }
    [Theory]
    [InlineData("hola@somoshackersastutos.com")]
    [InlineData("hello@somoshackersastutos.com")]
    [InlineData("ciao@somoshackersastutos.com")]
    public void FindSmartHackers_ModelInput_ReturnsModelOutput(string expectedPresence){
        //Arrange
        HackerDetector sut = new();
        //Act
        string[] output = sut.FindSmartHackers(input);
        //Assert
        Assert.NotNull(output);
        Assert.Contains(expectedPresence, output);
    }
}
