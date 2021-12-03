// See https://aka.ms/new-console-template for more information
using MINIAOC_2021_RETO_2;

string input = "mola";

HackingToolkit sut = new();
string[] dictionary = sut.GenerateTrollPassword(input);

Console.Out.WriteLine($"> count: {dictionary.Length}");

Console.Out.WriteLine($"> {String.Join(',',dictionary)}");