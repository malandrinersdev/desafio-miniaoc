class AntiSpam:
    def __init__(self) -> None:
        pass

    def extractDomain(self, email) -> str:
        atPos = email.find("@")
        if atPos == -1:
            return ""
        domain = email[atPos + 1 : ]
        return domain

    def findSmartHackers(self, emailList):
        if not isinstance(emailList, list):
            raise TypeError("The parameter is not a list.")
        if len(emailList) == 0:
            raise ValueError("The list is empty.")
        domainCounter = {}
        domainList = {}
        for email in emailList:
            domain = self.extractDomain(email)
            if domain == "":
                continue
            domainCounter[domain] = domainCounter.get(domain, 0) + 1
            if domain in domainList:
                domainList[domain].append(email)
            else:
                domainList[domain] = [email]
        mostFrequentDomain = max(domainCounter, key=domainCounter.get)
        return domainList[mostFrequentDomain]
