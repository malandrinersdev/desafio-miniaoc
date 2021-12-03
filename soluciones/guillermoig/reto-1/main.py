from AntiSpam import AntiSpam

emailList =  [
    'hola@somoshackersastutos.com',
    'ambrosio@outlook.com',
    'coco@malandriners.dev',
    'hello@somoshackersastutos.com',
    'ambrosio@outlook.com',
    'ciao@somoshackersastutos.com'
]
try:
    antiSpam = AntiSpam()
    result = antiSpam.findSmartHackers(emailList)
    print(result)
except TypeError as err:
    print("Type error: ", err)
except ValueError as err:
    print("Value error: ", err)

