// See https://aka.ms/new-console-template for more information
using System.Linq;
using MINIAOC_2021_RETO_1;

Console.WriteLine("Hello, World!");

string[] input = new[] {
    "hola@somoshackersastutos.com",
    "ambrosio@outlook.com",
    "coco@malandriners.dev",
    "hello@somoshackersastutos.com",
    "ambrosio@outlook.com",
    "ciao@somoshackersastutos.com"
};

HackerDetector hackerDetector = new();
string[] hackers = hackerDetector.FindSmartHackers(input);

string output = $"['{String.Join("','", hackers)}']";
Console.WriteLine(output);
