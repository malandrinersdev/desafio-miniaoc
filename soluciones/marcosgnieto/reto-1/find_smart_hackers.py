def find_smart_hackers(group_emails_by_domain):
    from collections import defaultdict
    emails_by_domain = defaultdict(set)
    group_emails_by_domain(emails_by_domain)
    evil_domain = sorted(emails_by_domain, key = lambda domain : len(emails_by_domain[domain]), reverse = True)[0]
    return emails_by_domain[evil_domain]

def find_smart_hackers_from_list(email_adresses):
    def group_emails_by_domain(emails_by_domain):
        for email_address in email_adresses:
            emails_by_domain[email_address.split('@')[1]].add(email_address)
    
    return find_smart_hackers(group_emails_by_domain)

print(find_smart_hackers_from_list([
    'jack@hacemosperrerias.com',
    'mike@outlook.com',
    'john@hacemosperrerias.com',
    'mary@hacemosperrerias.com',
    'jane@hacemosperrerias.com',
    'james@outlook.com',
    'james@hotmail.com'
]))

def find_smart_hackers_from_file(filename):
    def group_emails_by_domain(emails_by_domain):
        with open(filename) as file:
            for line in file:
                line = line.strip()
                emails_by_domain[line.split('@')[1]].add(line)

    return find_smart_hackers(group_emails_by_domain)
        
print(find_smart_hackers_from_file('email_addresses.txt'))
