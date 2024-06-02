// for loop -> [] needed------------------------------------------------------------------------
var resume = [{
  "basics": {
    "name": "Balajiprasath T",
    "label": "Programmer",
    "image": "",
    "email": "balajiprasath107@gmail.com",
    "phone": "(912) xxxxxxxxxxxx",
    "location": {
      "address": "2712 Broadway St",
      "postalCode": "94115",
      "city": "Chennai",
      "countryCode": "IN",
      "region": "TamilNadu"
    },
  "work": [{
    "name": "Company",
    "position": "Programmer",
    "url": "https://company.com",
    "startDate": "2023-01-01",
    "endDate": "2024-01-01",
    "summary": "Description…",
    "highlights": [
      "Started the company"
    ]
  }],
  "education": [{
    "institution": "University",
    "url": "https://institution.com/",
    "area": "Software Development",
    "studyType": "Bachelor",
    "startDate": "2019-01-01",
    "endDate": "2022-01-01",
    "score": "8.0",
    "courses": [
      "DB1101 - Basic SQL"
    ]
  }],
  "skills": [{
    "name": "Web Development",
    "level": "Master",
    "keywords": [
      "HTML",
      "CSS",
      "JavaScript"
    ]
  }],
  "languages": [{
    "language": "English",
    "fluency": "Native speaker"
  }],
  "interests": [{
    "name": "Wildlife",
    "keywords": [
      "Ferrets",
      "Unicorns"
    ]
  }],
  "projects": [{
    "name": "Project",
    "startDate": "2019-01-01",
    "endDate": "2021-01-01",
    "description": "Description...",
    "url": "https://project.com/"
  }]
  }
}]
for(var i=0 ;i<resume.length;i++){
  console.log(resume[i])
}
// for in -> [] not needed----------------------------------------------------------------------------------------------
var resume = {
  "basics": {
    "name": "Balajiprasath T",
    "label": "Programmer",
    "image": "",
    "email": "balajiprasath107@gmail.com",
    "phone": "(912) xxxxxxxxxxxx",
    "location": {
      "address": "2712 Broadway St",
      "postalCode": "94115",
      "city": "Chennai",
      "countryCode": "IN",
      "region": "TamilNadu"
    },
  "work": [{
    "name": "Company",
    "position": "Programmer",
    "url": "https://company.com",
    "startDate": "2023-01-01",
    "endDate": "2024-01-01",
    "summary": "Description…",
    "highlights": [
      "Started the company"
    ]
  }],
  "education": [{
    "institution": "University",
    "url": "https://institution.com/",
    "area": "Software Development",
    "studyType": "Bachelor",
    "startDate": "2019-01-01",
    "endDate": "2022-01-01",
    "score": "8.0",
    "courses": [
      "DB1101 - Basic SQL"
    ]
  }],
  "skills": [{
    "name": "Web Development",
    "level": "Master",
    "keywords": [
      "HTML",
      "CSS",
      "JavaScript"
    ]
  }],
  "languages": [{
    "language": "English",
    "fluency": "Native speaker"
  }],
  "interests": [{
    "name": "Wildlife",
    "keywords": [
      "Ferrets",
      "Unicorns"
    ]
  }],
  "projects": [{
    "name": "Project",
    "startDate": "2019-01-01",
    "endDate": "2021-01-01",
    "description": "Description...",
    "url": "https://project.com/"
  }]
  }
}
for(var i in resume){
  console.log(resume[i])
}

// for of -> [] needed-------------------------------------------------------------------------------------------------------------------
var resume = [{
  "basics": {
    "name": "Balajiprasath T",
    "label": "Programmer",
    "image": "",
    "email": "balajiprasath107@gmail.com",
    "phone": "(912) xxxxxxxxxxxx",
    "location": {
      "address": "2712 Broadway St",
      "postalCode": "94115",
      "city": "Chennai",
      "countryCode": "IN",
      "region": "TamilNadu"
    },
  "work": [{
    "name": "Company",
    "position": "Programmer",
    "url": "https://company.com",
    "startDate": "2023-01-01",
    "endDate": "2024-01-01",
    "summary": "Description…",
    "highlights": [
      "Started the company"
    ]
  }],
  "education": [{
    "institution": "University",
    "url": "https://institution.com/",
    "area": "Software Development",
    "studyType": "Bachelor",
    "startDate": "2019-01-01",
    "endDate": "2022-01-01",
    "score": "8.0",
    "courses": [
      "DB1101 - Basic SQL"
    ]
  }],
  "skills": [{
    "name": "Web Development",
    "level": "Master",
    "keywords": [
      "HTML",
      "CSS",
      "JavaScript"
    ]
  }],
  "languages": [{
    "language": "English",
    "fluency": "Native speaker"
  }],
  "interests": [{
    "name": "Wildlife",
    "keywords": [
      "Ferrets",
      "Unicorns"
    ]
  }],
  "projects": [{
    "name": "Project",
    "startDate": "2019-01-01",
    "endDate": "2021-01-01",
    "description": "Description...",
    "url": "https://project.com/"
  }]
  }
}]
for(var i of resume){
  console.log(i)
}
//  forEach -> [] needed----------------------------------------------------------------------------------------
var resume = [{
  "basics": {
    "name": "Balajiprasath T",
    "label": "Programmer",
    "image": "",
    "email": "balajiprasath107@gmail.com",
    "phone": "(912) xxxxxxxxxxxx",
    "location": {
      "address": "2712 Broadway St",
      "postalCode": "94115",
      "city": "Chennai",
      "countryCode": "IN",
      "region": "TamilNadu"
    },
  "work": [{
    "name": "Company",
    "position": "Programmer",
    "url": "https://company.com",
    "startDate": "2023-01-01",
    "endDate": "2024-01-01",
    "summary": "Description…",
    "highlights": [
      "Started the company"
    ]
  }],
  "education": [{
    "institution": "University",
    "url": "https://institution.com/",
    "area": "Software Development",
    "studyType": "Bachelor",
    "startDate": "2019-01-01",
    "endDate": "2022-01-01",
    "score": "8.0",
    "courses": [
      "DB1101 - Basic SQL"
    ]
  }],
  "skills": [{
    "name": "Web Development",
    "level": "Master",
    "keywords": [
      "HTML",
      "CSS",
      "JavaScript"
    ]
  }],
  "languages": [{
    "language": "English",
    "fluency": "Native speaker"
  }],
  "interests": [{
    "name": "Wildlife",
    "keywords": [
      "Ferrets",
      "Unicorns"
    ]
  }],
  "projects": [{
    "name": "Project",
    "startDate": "2019-01-01",
    "endDate": "2021-01-01",
    "description": "Description...",
    "url": "https://project.com/"
  }]
  }
}]
resume.forEach(elem=>console.log(elem))
