using System;
using System.Text;

namespace MINIAOC_2021_RETO_3{
    public class Nokia{
        Dictionary<char, char[]> keypad = new(){
            { '2', new[] { 'a', 'b', 'c' } },
            { '3', new[] { 'd', 'e', 'f' } },
            { '4', new[] { 'g', 'h', 'i' } },
            { '5', new[] { 'j', 'k', 'l' } },
            { '6', new[] { 'm', 'n', 'o' } },
            { '7', new[] { 'p', 'q', 'r', 's' } },
            { '8', new[] { 't', 'u', 'v' } },
            { '9', new[] { 'w', 'x', 'y', 'z' } },
            { '0', new[] { ' ' } },
        };
        public string[] GetTexts(string input){
            List<string> solutions = new();
            char[] parts = input.ToCharArray();
            DetermineTexts(solutions, 0, parts);
            return solutions.ToArray();
        }
        private void DetermineTexts(List<string> solutions, int index, char[] parts, string text=""){
            if (index < parts.Length){
                char[] options = GetOptions(parts[index]);
                index++;
                foreach(char option in options){
                    DetermineTexts(solutions, index, parts, text + option);
                }
            }else {
                solutions.Add(text);
            }
        }
        private char[] GetOptions(char key){
            if (keypad.ContainsKey(key)) {
                return keypad[key]; 
            }
            return default;
        }
        public string GetKeys(string input){
            Dictionary<char, char> inverse = new();
            foreach(char key in keypad.Keys){
                char[] keys = keypad[key];
                foreach(char letter in keys){
                    inverse[letter] = key;
                }
            }
            char[] parts = input.ToCharArray();
            StringBuilder stringBuilder = new();
            foreach(char letter in parts){
                stringBuilder.Append(inverse[letter]);
            }
            return stringBuilder.ToString();
        }
    }
}

