email_adresses = [
    'jack@hacemosperrerias.com',
    'mike@outlook.com',
    'john@hacemosperrerias.com',
    'mary@hacemosperrerias.com',
    'jane@hacemosperrerias.com',
    'james@outlook.com',
    'james@hotmail.com'
]

def find_smart_hackers(email_adresses):
    from collections import defaultdict
    
    emails_by_domain = defaultdict(set)
    
    for email_address in email_adresses:
        emails_by_domain[email_address.split('@')[1]].add(email_address)
    
    evil_domain = sorted(emails_by_domain, key = lambda domain : len(emails_by_domain[domain]), reverse = True)[0]
    return emails_by_domain[evil_domain]

print(find_smart_hackers(email_adresses))
