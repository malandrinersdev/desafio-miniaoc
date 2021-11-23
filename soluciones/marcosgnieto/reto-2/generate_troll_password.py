from collections.abc import Iterable

def flatten(list):
    for item in list:
        if isinstance(item, Iterable) and not isinstance(item, (str, bytes)):
            yield from flatten(item)
        else:
            yield item

def generate_troll_password(seed, prefix = ""):
    if (len(seed) == 1):
        return seed + prefix
    else:
        return [generate_troll_password(seed[:i] + seed[i+1:], prefix + char) for i, char in enumerate(seed)]
        
print(set(flatten(generate_troll_password("copa"))))
