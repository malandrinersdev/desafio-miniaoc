// See https://aka.ms/new-console-template for more information
using System.Linq;
using MINIAOC_2021_RETO_3;

Console.WriteLine("Hello, World!");


Nokia nokia = new();
string input1 = "6";
string[] texts1 = nokia.GetTexts(input1);
Console.WriteLine($"> {string.Join(", ",texts1)}");
string input2 = "234";
string[] texts2 = nokia.GetTexts(input2);
Console.WriteLine($"> {string.Join(", ", texts2)}");

string text = "malo olma loma mola";

string keys = nokia.GetKeys(text);

Console.WriteLine($"> {keys}");
