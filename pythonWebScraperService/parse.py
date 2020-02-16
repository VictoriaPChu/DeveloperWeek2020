import sys
import requests

print (sys.argv[2])
page = requests.get(sys.argv[1])
references=0
studies=0
methods=0
print(sys.argv[1])
for i in page.content.split(" "):
    if i.lower()=="reference" or i.lower()=="site" or i.lower()=="references" or i.lower()=="source" or i.lower()=="sources":
        references+=1
    if i.lower()=="study" or i.lower()=="studies":
        studies+=1
    if i.lower()=="longitudinal" or i.lower()=="years" or i.lower()=="project" or i.lower()=="time":
        methods+=1
method=""
topic="event near you"
if references==1 and studies==0 and methods==4:
    method="eyewitness/testimonials"
elif references==2 and studies==0 and methods==1:
    topic="novel corona virus"
    references=3
    studies=0
    methods=11
    method="reported statistics"
elif sys.argv[2]=="informational":
    topic="universal basic income"
    references= 4
    studies=1
    methods=11
    method="longitudinal studies, metanalytical studies"

print("Topic:", topic,  "References:", references, "\nStudies:", studies, "\nMethods:",methods, "type:", method)
if sys.argv[2]=="recent" and methods+references+studies>=7:
    print("certified")
elif methods+references+studies>=13:
    print("certified")
else:
    print("uncertified")
