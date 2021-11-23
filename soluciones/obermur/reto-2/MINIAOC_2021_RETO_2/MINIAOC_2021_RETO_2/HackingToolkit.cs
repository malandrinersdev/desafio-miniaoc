using System;
using System.Text;

namespace MINIAOC_2021_RETO_2{
    public class HackingToolkit{
        public string[] GenerateTrollPassword(string sample){
            List<int[]> references = Generate(sample.Length);
            return GetDictionary(sample, references);
        }
        private string[] GetDictionary(string sample, List<int[]> references){
            List<string> dictionary = new();
            char[] items = sample.ToCharArray();
            foreach(int[] reference in references){
                string item = Generate(items, reference);
                dictionary.Add(item);
            }
            return dictionary.ToArray();
        }
        private static string Generate(char[] items, int[] reference){
            StringBuilder builder = new();
            foreach(int index in reference){
                builder.Append(items[index]);
            }
            return builder.ToString();
        }
        private List<int[]> Generate(int length){
            List<int> items = new();
            for(int i = 0; i < length; i++){
                items.Add(i);
            }
            return Generate(Array.Empty<int>(), items.ToArray());
        }
        private List<int[]> Generate(int[] selection, int[] remains) {
            if (remains.Length > 1){
                List<int[]> solution = new();
                for (int i = 0; i < remains.Length; i++){
                    List<int> newSelection = new(selection);
                    newSelection.Add(remains[i]);
                    List<int> newRemains = new(remains);
                    newRemains.RemoveAt(i);
                    List<int[]> list = Generate(newSelection.ToArray(), newRemains.ToArray());
                    solution.AddRange(list);
                }
                return solution;
            }else{
                List<int> newSelection = new(selection);
                newSelection.Add(remains[0]);
                List<int[]> result = new();
                result.Add(newSelection.ToArray());
                return result;
            }
        }
    }
}

