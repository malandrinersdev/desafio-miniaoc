using System;
using System.Text.RegularExpressions;

namespace MINIAOC_2021_RETO_1{
    public class HackerDetector{
        public string[] FindSmartHackers(string[] list){
            if (list?.Length > 0){
                string? domain = GetMostUsedDomain(list);
                return GetMailsWithSpecifiDomain(list, domain);
            }
            return Array.Empty<string>();
        }
        private static string[] GetMailsWithSpecifiDomain(string[] list, string? domain){
            List<string> mails = new();
            if (list?.Length > 0){
                foreach(string mail in list){
                    if (domain == null){
                    } else if (mail.EndsWith(domain)){
                        mails.Add(mail);
                    }
                }
            }
            return mails.ToArray();
        }
        private readonly Regex regex = new(@"^\S+@(?<DOMAIN>\S+\.\S+)$");
        private string? GetMostUsedDomain(string[] list){
            Dictionary<string, int> ranking = new();
            foreach(string mail in list){
                Match match = regex.Match(mail);
                if (match.Success){
                    UpdateRanking(ranking, match.Groups["DOMAIN"].Value);
                }
            }
            return GetMostUsedDomain(ranking);
        }
        private static string? GetMostUsedDomain(Dictionary<string, int> ranking){
            string? mostUsedDomainName = null;
            int mostUsedDomainCount = 0;
            foreach(string domain in ranking.Keys){
                if (string.IsNullOrEmpty(mostUsedDomainName)) {
                    mostUsedDomainName = domain;
                    mostUsedDomainCount = ranking[domain];
                } else if(mostUsedDomainCount < ranking[domain]) {
                    mostUsedDomainName = domain;
                    mostUsedDomainCount = ranking[domain];
                }
            }
            return mostUsedDomainName;
        }

        private static void UpdateRanking(Dictionary<string, int> ranking, string domain){
            if (ranking == null) {
            }else if (ranking.ContainsKey(domain)){
                ranking[domain] = ranking[domain]++;
            }else{
                ranking[domain] = 1;
            }
        }
    }
}