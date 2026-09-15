export interface Major {
  name: string;
}

export interface Faculty {
  name: string;
  majors: Major[];
  annualFee?: string | null;
}

export interface University {
  id: number;
  name: string;
  image: string;
  description: string;
  departments: string[];
  faculties: Faculty[];
  location: string;
  rating: number;
  website: string;
  email: string;
  phone: string;
}

export const UNIVERSITIES_DATA: University[] = [
  {
    "id": 1,
    "name": "Cairo University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916508/cairo_owiljq.jpg",
    "description": "Cairo University is one of Egypt's oldest and most prestigious public universities, founded in 1908 and located in Giza, Egypt. The university is recognized for its excellence in higher education, scientific research, and innovation. It offers a wide range of undergraduate and postgraduate programs across more than 25 faculties and institutes, serving over 200,000 students, including thousands of international students. Cairo University is committed to developing skilled graduates, advancing research, and contributing to the sustainable development of Egypt and the global communit",
    "departments": [
      "Faculty of Engineering",
      "Faculty of Medicine",
      "Faculty of Computers and Artificial Intelligence",
      "Faculty of Pharmacy",
      "Faculty of Agriculture",
      "Faculty of Science",
      "Faculty of Economics and Political Science",
      "Faculty of Mass Communication",
      "Faculty of Archaeology",
      "Faculty of Arts",
      "Faculty of Commerce",
      "Faculty of Specific Education",
      "Faculty of Nursing",
      "Faculty of Law",
      "Faculty of Physical Therapy",
      "Faculty of Oral and Dental Medicine",
      "Faculty of Veterinary Medicine",
      "Faculty of Dar El-Ulum",
      "Faculty of Education for Early Childhood",
      "Faculty of Regional and Urban Planning",
      "Faculty of African Postgraduate Studies",
      "Faculty of Graduate Studies for Statistical Research",
      "Faculty of Graduate Studies for Education",
      "Faculty of Nanotechnology for Postgraduate Studies",
      "National Cancer Institute (NCI)",
      "National Institute of Laser Enhanced Sciences (NILES)"
    ],
    "faculties": [
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Architectural Engineering"
          },
          {
            "name": "Structural Engineering"
          },
          {
            "name": "Public Works Engineering"
          },
          {
            "name": "Irrigation and Hydraulics Engineering"
          },
          {
            "name": "Mechanical Power Engineering"
          },
          {
            "name": "Mechanical Design and Production Engineering"
          },
          {
            "name": "Aeronautical and Aerospace Engineering"
          },
          {
            "name": "Electrical Power and Machines Engineering"
          },
          {
            "name": "Electronics and Communications Engineering"
          },
          {
            "name": "Chemical Engineering"
          },
          {
            "name": "Mining, Petroleum and Metallurgical Engineering"
          },
          {
            "name": "Biomedical Engineering and Systems"
          },
          {
            "name": "Computer Engineering"
          },
          {
            "name": "Engineering Mathematics and Physics"
          }
        ],
        "annualFee": "80,000"
      },
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "Anatomy & Embryology"
          },
          {
            "name": "Histology"
          },
          {
            "name": "Medical Physiology"
          },
          {
            "name": "Medical Biochemistry & Molecular Biology"
          },
          {
            "name": "Medical Microbiology & Immunology"
          },
          {
            "name": "Medical Parasitology"
          },
          {
            "name": "Medical Pharmacology"
          },
          {
            "name": "Pathology"
          },
          {
            "name": "Community Medicine"
          },
          {
            "name": "Forensic Medicine & Clinical Toxicology"
          },
          {
            "name": "Family Medicine"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Computers and Artificial Intelligence",
        "majors": [
          {
            "name": "Science"
          },
          {
            "name": "Information Systems"
          },
          {
            "name": "Information Technology"
          },
          {
            "name": "Artificial Intelligence"
          },
          {
            "name": "Decision Support"
          },
          {
            "name": "Software Engineering (Credit Program)"
          },
          {
            "name": "Bioinformatics (Credit Program)"
          },
          {
            "name": "Cybersecurity (Credit Program)"
          },
          {
            "name": "Data Science (Credit Program)"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "Pharmaceutics and Industrial Pharmacy"
          },
          {
            "name": "Pharmacognosy"
          },
          {
            "name": "Pharmacology and Toxicology"
          },
          {
            "name": "Microbiology and Immunology"
          },
          {
            "name": "Pharmaceutical Organic Chemistry"
          },
          {
            "name": "Pharmaceutical Analytical Chemistry"
          },
          {
            "name": "Biochemistry"
          },
          {
            "name": "Pharmaceutical Chemistry"
          },
          {
            "name": "Clinical Pharmacy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Agriculture",
        "majors": [
          {
            "name": "Agronomy"
          },
          {
            "name": "Horticulture"
          },
          {
            "name": "Plant Protection"
          },
          {
            "name": "Soil Science"
          },
          {
            "name": "Agricultural Engineering"
          },
          {
            "name": "Agricultural Economics"
          },
          {
            "name": "Animal Production"
          },
          {
            "name": "Food Science"
          },
          {
            "name": "Biotechnology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Science",
        "majors": [
          {
            "name": "Mathematics"
          },
          {
            "name": "Physics"
          },
          {
            "name": "Chemistry"
          },
          {
            "name": "Botany"
          },
          {
            "name": "Zoology"
          },
          {
            "name": "Geology"
          },
          {
            "name": "Biochemistry"
          },
          {
            "name": "Microbiology"
          },
          {
            "name": "Biophysics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Economics and Political Science",
        "majors": [
          {
            "name": "Economics"
          },
          {
            "name": "Political Science"
          },
          {
            "name": "Public Administration"
          },
          {
            "name": "Statistics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Mass Communication",
        "majors": [
          {
            "name": "Journalism"
          },
          {
            "name": "Radio and Television"
          },
          {
            "name": "Public Relations and Advertising"
          },
          {
            "name": "Digital Media"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Archaeology",
        "majors": [
          {
            "name": "Egyptology"
          },
          {
            "name": "Islamic Archaeology"
          },
          {
            "name": "Greco-Roman Archaeology"
          },
          {
            "name": "Archaeological Restoration"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Arts",
        "majors": [
          {
            "name": "Arabic Language"
          },
          {
            "name": "English Language"
          },
          {
            "name": "French Language"
          },
          {
            "name": "German Language"
          },
          {
            "name": "Spanish Language"
          },
          {
            "name": "Oriental Languages"
          },
          {
            "name": "History"
          },
          {
            "name": "Geography"
          },
          {
            "name": "Philosophy"
          },
          {
            "name": "Psychology"
          },
          {
            "name": "Sociology"
          },
          {
            "name": "Library and Information Science"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Commerce",
        "majors": [
          {
            "name": "Accounting"
          },
          {
            "name": "Business Administration"
          },
          {
            "name": "Economics"
          },
          {
            "name": "Statistics"
          },
          {
            "name": "Insurance"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Specific Education",
        "majors": [
          {
            "name": "Art Education"
          },
          {
            "name": "Music Education"
          },
          {
            "name": "Educational Media"
          },
          {
            "name": "Home Economics"
          },
          {
            "name": "Educational Technology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Nursing",
        "majors": [
          {
            "name": "Medical-Surgical Nursing"
          },
          {
            "name": "Critical Care Nursing"
          },
          {
            "name": "Pediatric Nursing"
          },
          {
            "name": "Obstetrics and Gynecological Nursing"
          },
          {
            "name": "Community Health Nursing"
          },
          {
            "name": "Psychiatric and Mental Health Nursing"
          },
          {
            "name": "Nursing Administration"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Law",
        "majors": [
          {
            "name": "Public Law"
          },
          {
            "name": "Private Law"
          },
          {
            "name": "International Law"
          },
          {
            "name": "Commercial Law"
          },
          {
            "name": "Criminal Law"
          },
          {
            "name": "Civil Law"
          },
          {
            "name": "Islamic Sharia"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Therapy",
        "majors": [
          {
            "name": "Orthopedic Physical Therapy"
          },
          {
            "name": "Neurological Physical Therapy"
          },
          {
            "name": "Pediatric Physical Therapy"
          },
          {
            "name": "Cardiopulmonary Physical Therapy"
          },
          {
            "name": "Geriatric Physical Therapy"
          },
          {
            "name": "Women's Health Physical Therapy"
          },
          {
            "name": "Basic Sciences for Physical Therapy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Oral and Dental Medicine",
        "majors": [
          {
            "name": "Oral Medicine and Periodontology"
          },
          {
            "name": "Oral and Maxillofacial Surgery"
          },
          {
            "name": "Orthodontics"
          },
          {
            "name": "Prosthodontics"
          },
          {
            "name": "Conservative Dentistry"
          },
          {
            "name": "Endodontics"
          },
          {
            "name": "Pediatric Dentistry"
          },
          {
            "name": "Oral Pathology"
          },
          {
            "name": "Oral Biology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Veterinary Medicine",
        "majors": [
          {
            "name": "Animal Medicine"
          },
          {
            "name": "Surgery, Anesthesiology and Radiology"
          },
          {
            "name": "Theriogenology"
          },
          {
            "name": "Poultry Diseases"
          },
          {
            "name": "Pathology"
          },
          {
            "name": "Parasitology"
          },
          {
            "name": "Microbiology"
          },
          {
            "name": "Pharmacology"
          },
          {
            "name": "Physiology"
          },
          {
            "name": "Anatomy and Embryology"
          },
          {
            "name": "Food Hygiene and Control"
          },
          {
            "name": "Nutrition and Clinical Nutrition"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Dar El-Ulum",
        "majors": [
          {
            "name": "Arabic Language"
          },
          {
            "name": "Islamic Studies"
          },
          {
            "name": "History"
          },
          {
            "name": "Philosophy"
          },
          {
            "name": "Literary Studies"
          },
          {
            "name": "Linguistics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Education for Early Childhood",
        "majors": [
          {
            "name": "Early Childhood Education"
          },
          {
            "name": "Kindergarten Education"
          },
          {
            "name": "Special Education"
          },
          {
            "name": "Child Psychology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Regional and Urban Planning",
        "majors": [
          {
            "name": "Urban Planning"
          },
          {
            "name": "Regional Planning"
          },
          {
            "name": "Urban Design"
          },
          {
            "name": "Infrastructure Planning"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of African Postgraduate Studies",
        "majors": [
          {
            "name": "African Economics"
          },
          {
            "name": "African Politics"
          },
          {
            "name": "African Languages"
          },
          {
            "name": "African History"
          },
          {
            "name": "African Development Studies"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Graduate Studies for Statistical Research",
        "majors": [
          {
            "name": "Applied Statistics"
          },
          {
            "name": "Mathematical Statistics"
          },
          {
            "name": "Biostatistics"
          },
          {
            "name": "Computer Science"
          },
          {
            "name": "Operations Research"
          },
          {
            "name": "Demography"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Graduate Studies for Education",
        "majors": [
          {
            "name": "Curriculum and Instruction"
          },
          {
            "name": "Educational Psychology"
          },
          {
            "name": "Educational Administration"
          },
          {
            "name": "Foundations of Education"
          },
          {
            "name": "Special Education"
          },
          {
            "name": "Educational Technology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Nanotechnology for Postgraduate Studies",
        "majors": [
          {
            "name": "Nanomaterials"
          },
          {
            "name": "Nanoelectronics"
          },
          {
            "name": "Nanobiotechnology"
          },
          {
            "name": "Nanomedicine"
          },
          {
            "name": "Nanophotonics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "National Cancer Institute (NCI)",
        "majors": [
          {
            "name": "Medical Oncology"
          },
          {
            "name": "Clinical Oncology"
          },
          {
            "name": "Radiation Oncology"
          },
          {
            "name": "Surgical Oncology"
          },
          {
            "name": "Pathology"
          },
          {
            "name": "Clinical Laboratory Sciences"
          },
          {
            "name": "Cancer Biology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "National Institute of Laser Enhanced Sciences (NILES)",
        "majors": [
          {
            "name": "Laser Physics"
          },
          {
            "name": "Laser Chemistry"
          },
          {
            "name": "Laser Engineering Applications"
          },
          {
            "name": "Medical Laser Applications"
          },
          {
            "name": "Photonics"
          },
          {
            "name": "Optical Sciences"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Cairo",
    "rating": 4.7,
    "website": "https://maps.google.com/?q=Nahda+University+Beni+Suef",
    "email": "admissions@cairouniversity.edu.eg",
    "phone": "+20 2 20001616"
  },
  {
    "id": 2,
    "name": "Ain Shams University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916506/Ainshams_i69upi.jpg",
    "description": "Ain Shams University (ASU) is a premier public university in Cairo, Egypt. It is the third-oldest university in the country, hosting 21 faculties that offer world-class undergraduate and postgraduate programs. ASU is globally recognized for academic excellence, particularly in fields like Clinical Medicine, Engineering, and Agricultural Sciences.",
    "departments": [
      "Faculty of Medicine",
      "Faculty of Pharmacy",
      "Faculty of Dentistry",
      "Faculty of Nursing",
      "Faculty of Veterinary Medicine",
      "Faculty of Engineering",
      "Faculty of Computer and Information Sciences",
      "Faculty of Science",
      "Faculty of Agriculture",
      "Faculty of Education",
      "Faculty of Specific Education",
      "Faculty of Al-Alsun (Languages)",
      "Faculty of Arts",
      "Faculty of Law",
      "Faculty of Commerce (Business)",
      "Faculty of Women for Arts, Science and Education",
      "Faculty of Archaeology",
      "Faculty of Graduate Studies and Environmental Research",
      "Faculty of Postgraduate Childhood Studies",
      "Faculty of Mass Communication and Media",
      "Arid Lands Research"
    ],
    "faculties": [
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "General Medicine"
          },
          {
            "name": "Medical Biochemistry"
          },
          {
            "name": "Clinical Pathology"
          },
          {
            "name": "Medical Microbiology and Immunology"
          },
          {
            "name": "Pathology"
          },
          {
            "name": "Pharmacology"
          },
          {
            "name": "Physiology"
          },
          {
            "name": "Anatomy and Embryology"
          },
          {
            "name": "Forensic Medicine and Clinical Toxicology"
          },
          {
            "name": "Public Health and Community Medicine"
          },
          {
            "name": "Internal Medicine"
          },
          {
            "name": "General Surgery"
          },
          {
            "name": "Pediatrics"
          },
          {
            "name": "Obstetrics and Gynecology"
          },
          {
            "name": "Ophthalmology"
          },
          {
            "name": "Otorhinolaryngology"
          },
          {
            "name": "Dermatology"
          },
          {
            "name": "Neurology and Psychiatry"
          },
          {
            "name": "Anesthesiology and Intensive Care"
          },
          {
            "name": "Diagnostic Radiology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "Pharmaceutics"
          },
          {
            "name": "Pharmaceutical Chemistry"
          },
          {
            "name": "Pharmacognosy"
          },
          {
            "name": "Pharmacology and Toxicology"
          },
          {
            "name": "Clinical Pharmacy"
          },
          {
            "name": "Industrial Pharmacy"
          },
          {
            "name": "Pharmaceutical Analytical Chemistry"
          },
          {
            "name": "Biochemistry"
          },
          {
            "name": "Microbiology and Immunology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Dentistry",
        "majors": [
          {
            "name": "Oral Medicine and Periodontology"
          },
          {
            "name": "Oral and Maxillofacial Surgery"
          },
          {
            "name": "Orthodontics"
          },
          {
            "name": "Prosthodontics"
          },
          {
            "name": "Conservative Dentistry"
          },
          {
            "name": "Endodontics"
          },
          {
            "name": "Pediatric Dentistry"
          },
          {
            "name": "Oral Pathology"
          },
          {
            "name": "Oral Biology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Nursing",
        "majors": [
          {
            "name": "Medical-Surgical Nursing"
          },
          {
            "name": "Critical Care Nursing"
          },
          {
            "name": "Pediatric Nursing"
          },
          {
            "name": "Obstetrics and Gynecological Nursing"
          },
          {
            "name": "Community Health Nursing"
          },
          {
            "name": "Psychiatric and Mental Health Nursing"
          },
          {
            "name": "Nursing Administration"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Veterinary Medicine",
        "majors": [
          {
            "name": "Animal Medicine"
          },
          {
            "name": "Surgery, Anesthesiology and Radiology"
          },
          {
            "name": "Theriogenology"
          },
          {
            "name": "Poultry Diseases"
          },
          {
            "name": "Pathology"
          },
          {
            "name": "Parasitology"
          },
          {
            "name": "Microbiology"
          },
          {
            "name": "Pharmacology"
          },
          {
            "name": "Physiology"
          },
          {
            "name": "Anatomy and Embryology"
          },
          {
            "name": "Food Hygiene and Control"
          },
          {
            "name": "Nutrition and Clinical Nutrition"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Architecture Engineering"
          },
          {
            "name": "Civil Engineering"
          },
          {
            "name": "Electrical Power Engineering"
          },
          {
            "name": "Electronics and Communications Engineering"
          },
          {
            "name": "Mechanical Power Engineering"
          },
          {
            "name": "Automotive Engineering"
          },
          {
            "name": "Mechatronics Engineering"
          },
          {
            "name": "Industrial Engineering"
          },
          {
            "name": "Computer and Systems Engineering"
          },
          {
            "name": "Structural Engineering"
          },
          {
            "name": "Urban Planning Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Computer and Information Sciences",
        "majors": [
          {
            "name": "Computer Science"
          },
          {
            "name": "Information Systems"
          },
          {
            "name": "Scientific Computing"
          },
          {
            "name": "Bioinformatics"
          },
          {
            "name": "Artificial Intelligence"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Science",
        "majors": [
          {
            "name": "Mathematics"
          },
          {
            "name": "Physics"
          },
          {
            "name": "Chemistry"
          },
          {
            "name": "Botany"
          },
          {
            "name": "Zoology"
          },
          {
            "name": "Geology"
          },
          {
            "name": "Biochemistry"
          },
          {
            "name": "Microbiology"
          },
          {
            "name": "Biophysics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Agriculture",
        "majors": [
          {
            "name": "Agronomy"
          },
          {
            "name": "Horticulture"
          },
          {
            "name": "Plant Protection"
          },
          {
            "name": "Soil Science"
          },
          {
            "name": "Agricultural Engineering"
          },
          {
            "name": "Agricultural Economics"
          },
          {
            "name": "Animal Production"
          },
          {
            "name": "Food Science"
          },
          {
            "name": "Biotechnology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Education",
        "majors": [
          {
            "name": "Curriculum and Instruction"
          },
          {
            "name": "Educational Psychology"
          },
          {
            "name": "Foundations of Education"
          },
          {
            "name": "Educational Administration"
          },
          {
            "name": "Special Education"
          },
          {
            "name": "Educational Technology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Specific Education",
        "majors": [
          {
            "name": "Art Education"
          },
          {
            "name": "Music Education"
          },
          {
            "name": "Educational Media"
          },
          {
            "name": "Home Economics"
          },
          {
            "name": "Educational Technology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Al-Alsun (Languages)",
        "majors": [
          {
            "name": "English"
          },
          {
            "name": "French"
          },
          {
            "name": "German"
          },
          {
            "name": "Spanish"
          },
          {
            "name": "Italian"
          },
          {
            "name": "Russian"
          },
          {
            "name": "Chinese"
          },
          {
            "name": "Japanese"
          },
          {
            "name": "Korean"
          },
          {
            "name": "Turkish"
          },
          {
            "name": "Persian"
          },
          {
            "name": "Hebrew"
          },
          {
            "name": "Arabic"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Arts",
        "majors": [
          {
            "name": "Arabic Language"
          },
          {
            "name": "English Language"
          },
          {
            "name": "French Language"
          },
          {
            "name": "History"
          },
          {
            "name": "Geography"
          },
          {
            "name": "Philosophy"
          },
          {
            "name": "Psychology"
          },
          {
            "name": "Sociology"
          },
          {
            "name": "Library and Information Science"
          },
          {
            "name": "Oriental Languages"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Law",
        "majors": [
          {
            "name": "Public Law"
          },
          {
            "name": "Private Law"
          },
          {
            "name": "Civil Law"
          },
          {
            "name": "Criminal Law"
          },
          {
            "name": "Commercial Law"
          },
          {
            "name": "International Law"
          },
          {
            "name": "Islamic Sharia"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Commerce (Business)",
        "majors": [
          {
            "name": "Accounting"
          },
          {
            "name": "Business Administration"
          },
          {
            "name": "Economics"
          },
          {
            "name": "Statistics"
          },
          {
            "name": "Insurance"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Women for Arts, Science and Education",
        "majors": [
          {
            "name": "Arts"
          },
          {
            "name": "Science"
          },
          {
            "name": "Education"
          },
          {
            "name": "Psychology"
          },
          {
            "name": "Sociology"
          },
          {
            "name": "Mathematics"
          },
          {
            "name": "Physics"
          },
          {
            "name": "Chemistry"
          },
          {
            "name": "Biological Sciences"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Archaeology",
        "majors": [
          {
            "name": "Egyptology"
          },
          {
            "name": "Islamic Archaeology"
          },
          {
            "name": "Greco-Roman Archaeology"
          },
          {
            "name": "Archaeological Restoration"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Graduate Studies and Environmental Research",
        "majors": [
          {
            "name": "Environmental Sciences"
          },
          {
            "name": "Environmental Management"
          },
          {
            "name": "Environmental Engineering"
          },
          {
            "name": "Sustainable Development"
          },
          {
            "name": "Environmental Health"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Postgraduate Childhood Studies",
        "majors": [
          {
            "name": "Child Health"
          },
          {
            "name": "Child Psychology"
          },
          {
            "name": "Special Education"
          },
          {
            "name": "Early Childhood Education"
          },
          {
            "name": "Child Nutrition"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Mass Communication and Media",
        "majors": [
          {
            "name": "Journalism"
          },
          {
            "name": "Radio and Television"
          },
          {
            "name": "Public Relations and Advertising"
          },
          {
            "name": "Digital Media"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Arid Lands Research",
        "majors": [
          {
            "name": "Desert Agriculture"
          },
          {
            "name": "Water Resources"
          },
          {
            "name": "Soil Science"
          },
          {
            "name": "Environmental Studies"
          },
          {
            "name": "Desert Development"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Cairo",
    "rating": 4.9,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@ainshamsuniversity.edu.eg",
    "phone": "+20 2 20001942"
  },
  {
    "id": 3,
    "name": "Matrouh University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916513/matrouh_uhygrf.jpg",
    "description": "Founded in 2018, Matrouh University is a non-profit public higher education institution located in Mersa Matruh, Egypt. It focuses on sustainable development, scientific research, and modern educational programs tailored to international standards. The university features specialized faculties in practical and environmental fields, including Desert and Environmental Agriculture, Petroleum and Mining Sciences, and Computer Science and Artificial Intelligence.",
    "departments": [
      "Faculty of Medicine",
      "Faculty of Pharmacy",
      "Faculty of Nursing",
      "Faculty of Veterinary Medicine",
      "Faculty of Agriculture",
      "Faculty of Education",
      "Faculty of Kindergarten",
      "Faculty of Specific Education",
      "Faculty of Tourism and Hotels",
      "Faculty of Archaeology and Tourist Guidance",
      "Faculty of Physical Education",
      "Faculty of Science",
      "Faculty of Computer Science and Artificial Intelligence",
      "Faculty of Desert and Environmental Agriculture",
      "Faculty of Arts and Education"
    ],
    "faculties": [
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "General Medicine"
          },
          {
            "name": "Internal Medicine"
          },
          {
            "name": "General Surgery"
          },
          {
            "name": "Pediatrics"
          },
          {
            "name": "Obstetrics and Gynecology"
          },
          {
            "name": "Clinical Pathology"
          },
          {
            "name": "Medical Microbiology"
          },
          {
            "name": "Anatomy"
          },
          {
            "name": "Physiology"
          },
          {
            "name": "Pharmacology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "Pharmaceutics"
          },
          {
            "name": "Pharmaceutical Chemistry"
          },
          {
            "name": "Pharmaceutical Analytical Chemistry"
          },
          {
            "name": "Pharmacognosy"
          },
          {
            "name": "Pharmacology and Toxicology"
          },
          {
            "name": "Clinical Pharmacy"
          },
          {
            "name": "Industrial Pharmacy"
          },
          {
            "name": "Biochemistry"
          },
          {
            "name": "Microbiology and Immunology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Nursing",
        "majors": [
          {
            "name": "Medical-Surgical Nursing"
          },
          {
            "name": "Pediatric Nursing"
          },
          {
            "name": "Obstetrics and Gynecological Nursing"
          },
          {
            "name": "Community Health Nursing"
          },
          {
            "name": "Psychiatric and Mental Health Nursing"
          },
          {
            "name": "Nursing Administration"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Veterinary Medicine",
        "majors": [
          {
            "name": "Animal Medicine"
          },
          {
            "name": "Surgery"
          },
          {
            "name": "Theriogenology"
          },
          {
            "name": "Pathology"
          },
          {
            "name": "Parasitology"
          },
          {
            "name": "Microbiology"
          },
          {
            "name": "Pharmacology"
          },
          {
            "name": "Anatomy and Embryology"
          },
          {
            "name": "Food Hygiene"
          },
          {
            "name": "Animal Production"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Agriculture",
        "majors": [
          {
            "name": "Agronomy"
          },
          {
            "name": "Horticulture"
          },
          {
            "name": "Plant Protection"
          },
          {
            "name": "Soil Science"
          },
          {
            "name": "Animal Production"
          },
          {
            "name": "Food Science"
          },
          {
            "name": "Agricultural Economics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Education",
        "majors": [
          {
            "name": "Curriculum and Instruction"
          },
          {
            "name": "Educational Psychology"
          },
          {
            "name": "Educational Administration"
          },
          {
            "name": "Foundations of Education"
          },
          {
            "name": "Special Education"
          },
          {
            "name": "Educational Technology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Kindergarten",
        "majors": [
          {
            "name": "Early Childhood Education"
          },
          {
            "name": "Kindergarten Education"
          },
          {
            "name": "Child Psychology"
          },
          {
            "name": "Special Education"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Specific Education",
        "majors": [
          {
            "name": "Art Education"
          },
          {
            "name": "Music Education"
          },
          {
            "name": "Educational Media"
          },
          {
            "name": "Home Economics"
          },
          {
            "name": "Educational Technology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Tourism and Hotels",
        "majors": [
          {
            "name": "Tourism Studies"
          },
          {
            "name": "Hotel Management"
          },
          {
            "name": "Tourist Guidance"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Archaeology and Tourist Guidance",
        "majors": [
          {
            "name": "Egyptology"
          },
          {
            "name": "Islamic Archaeology"
          },
          {
            "name": "Greco-Roman Archaeology"
          },
          {
            "name": "Tourist Guidance"
          },
          {
            "name": "Archaeological Restoration"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Education",
        "majors": [
          {
            "name": "Physical Education"
          },
          {
            "name": "Sports Training"
          },
          {
            "name": "Sports Management"
          },
          {
            "name": "Recreation"
          },
          {
            "name": "Exercise Physiology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Science",
        "majors": [
          {
            "name": "Mathematics"
          },
          {
            "name": "Physics"
          },
          {
            "name": "Chemistry"
          },
          {
            "name": "Botany"
          },
          {
            "name": "Zoology"
          },
          {
            "name": "Geology"
          },
          {
            "name": "Biochemistry"
          },
          {
            "name": "Microbiology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Computer Science and Artificial Intelligence",
        "majors": [
          {
            "name": "Computer Science"
          },
          {
            "name": "Artificial Intelligence"
          },
          {
            "name": "Information Systems"
          },
          {
            "name": "Data Science"
          },
          {
            "name": "Cybersecurity"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Desert and Environmental Agriculture",
        "majors": [
          {
            "name": "Desert Agriculture"
          },
          {
            "name": "Environmental Agriculture"
          },
          {
            "name": "Water Resources"
          },
          {
            "name": "Soil Science"
          },
          {
            "name": "Plant Production"
          },
          {
            "name": "Sustainable Agriculture"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Arts and Education",
        "majors": [
          {
            "name": "Arabic Language"
          },
          {
            "name": "English Language"
          },
          {
            "name": "History"
          },
          {
            "name": "Geography"
          },
          {
            "name": "Psychology"
          },
          {
            "name": "Sociology"
          },
          {
            "name": "Philosophy"
          },
          {
            "name": "Curriculum and Instruction"
          },
          {
            "name": "Educational Psychology"
          },
          {
            "name": "Special Education"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Mersa Matruh",
    "rating": 4.6,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@matrouhuniversity.edu.eg",
    "phone": "+20 2 20001858"
  },
  {
    "id": 4,
    "name": "New Vally University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916521/vally_ymipu2.jpg",
    "description": "Established as an independent public university in 2019, New Valley University is located in the New Valley Governorate, Egypt. The university aims to drive regional community development and scientific research. It hosts specialized faculties such as Agriculture, Veterinary Medicine, Science, and Mining Engineering, focusing on programs that address the unique environmental and industrial needs of the region.",
    "departments": [
      "Faculty of Medicine",
      "Faculty of Veterinary Medicine",
      "Faculty of Pharmacy",
      "Faculty of Science",
      "Faculty of Agriculture",
      "Faculty of Education",
      "Faculty of Arts",
      "Faculty of Physical Education"
    ],
    "faculties": [
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "General Medicine"
          },
          {
            "name": "Internal Medicine"
          },
          {
            "name": "General Surgery"
          },
          {
            "name": "Pediatrics"
          },
          {
            "name": "Obstetrics and Gynecology"
          },
          {
            "name": "Clinical Pathology"
          },
          {
            "name": "Medical Microbiology"
          },
          {
            "name": "Anatomy"
          },
          {
            "name": "Physiology"
          },
          {
            "name": "Pharmacology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Veterinary Medicine",
        "majors": [
          {
            "name": "Animal Medicine"
          },
          {
            "name": "Surgery"
          },
          {
            "name": "Theriogenology"
          },
          {
            "name": "Pathology"
          },
          {
            "name": "Parasitology"
          },
          {
            "name": "Microbiology"
          },
          {
            "name": "Pharmacology"
          },
          {
            "name": "Anatomy and Embryology"
          },
          {
            "name": "Food Hygiene"
          },
          {
            "name": "Animal Production"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "Pharmaceutics"
          },
          {
            "name": "Pharmaceutical Chemistry"
          },
          {
            "name": "Pharmaceutical Analytical Chemistry"
          },
          {
            "name": "Pharmacognosy"
          },
          {
            "name": "Pharmacology and Toxicology"
          },
          {
            "name": "Clinical Pharmacy"
          },
          {
            "name": "Industrial Pharmacy"
          },
          {
            "name": "Biochemistry"
          },
          {
            "name": "Microbiology and Immunology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Science",
        "majors": [
          {
            "name": "Mathematics"
          },
          {
            "name": "Physics"
          },
          {
            "name": "Chemistry"
          },
          {
            "name": "Botany"
          },
          {
            "name": "Zoology"
          },
          {
            "name": "Geology"
          },
          {
            "name": "Biochemistry"
          },
          {
            "name": "Microbiology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Agriculture",
        "majors": [
          {
            "name": "Agronomy"
          },
          {
            "name": "Horticulture"
          },
          {
            "name": "Plant Protection"
          },
          {
            "name": "Soil Science"
          },
          {
            "name": "Animal Production"
          },
          {
            "name": "Food Science"
          },
          {
            "name": "Agricultural Economics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Education",
        "majors": [
          {
            "name": "Curriculum and Instruction"
          },
          {
            "name": "Educational Psychology"
          },
          {
            "name": "Educational Administration"
          },
          {
            "name": "Foundations of Education"
          },
          {
            "name": "Special Education"
          },
          {
            "name": "Educational Technology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Arts",
        "majors": [
          {
            "name": "Arabic Language"
          },
          {
            "name": "English Language"
          },
          {
            "name": "History"
          },
          {
            "name": "Geography"
          },
          {
            "name": "Philosophy"
          },
          {
            "name": "Psychology"
          },
          {
            "name": "Sociology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Education",
        "majors": [
          {
            "name": "Physical Education"
          },
          {
            "name": "Sports Training"
          },
          {
            "name": "Sports Management"
          },
          {
            "name": "Recreation"
          },
          {
            "name": "Exercise Physiology"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "the New Valley Governorate",
    "rating": 4.3,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@newvallyuniversity.edu.eg",
    "phone": "+20 2 20001972"
  },
  {
    "id": 5,
    "name": "Beni Suef University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916508/benisuef_lvvxpz.jpg",
    "description": "Established as an independent public university in 2005, Beni Suef University is one of the largest higher education institutions in Egypt. Located in Beni Suef, it is highly recognized for its advanced research centers, specialized scientific faculties, and unique programs such as Laser Science, Earth Science, and Navigation Science and Space Technology, along with its comprehensive medical, engineering, and humanities faculties.",
    "departments": [
      "Faculty of Commerce",
      "Faculty of Law",
      "Faculty of Arts",
      "Faculty of Education",
      "Faculty of Physical Education",
      "Faculty of Economic Studies and Political Science",
      "Faculty of Education for Early Childhood",
      "Faculty of Al-Alsun (Languages)",
      "Faculty of Developmental Social Work",
      "Faculty of Tourism and Hotels",
      "Faculty of Medicine",
      "Faculty of Dentistry",
      "Faculty of Pharmacy",
      "Faculty of Nursing",
      "Faculty of Veterinary Medicine",
      "Faculty of Science",
      "Faculty of Agriculture",
      "Faculty of Engineering",
      "Faculty of Industrial Education",
      "Faculty of Computers and Artificial Intelligence",
      "Faculty of Mass Communication",
      "Faculty of Physiotherapy",
      "Faculty of Health Sciences",
      "Faculty of Applied Arts",
      "Faculty of Earth Sciences",
      "Faculty of Special Needs Sciences",
      "Faculty of Navigation Science and Space Technology",
      "Faculty of Postgraduate Studies for Advanced Sciences"
    ],
    "faculties": [
      {
        "name": "Faculty of Commerce",
        "majors": [
          {
            "name": "Accounting"
          },
          {
            "name": "Business Administration"
          },
          {
            "name": "Economics"
          },
          {
            "name": "Statistics"
          },
          {
            "name": "Insurance"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Law",
        "majors": [
          {
            "name": "Public Law"
          },
          {
            "name": "Private Law"
          },
          {
            "name": "Civil Law"
          },
          {
            "name": "Criminal Law"
          },
          {
            "name": "Commercial Law"
          },
          {
            "name": "International Law"
          },
          {
            "name": "Islamic Sharia"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Arts",
        "majors": [
          {
            "name": "Arabic Language"
          },
          {
            "name": "English Language"
          },
          {
            "name": "French Language"
          },
          {
            "name": "History"
          },
          {
            "name": "Geography"
          },
          {
            "name": "Philosophy"
          },
          {
            "name": "Psychology"
          },
          {
            "name": "Sociology"
          },
          {
            "name": "Library and Information Science"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Education",
        "majors": [
          {
            "name": "Curriculum and Instruction"
          },
          {
            "name": "Educational Psychology"
          },
          {
            "name": "Educational Administration"
          },
          {
            "name": "Foundations of Education"
          },
          {
            "name": "Special Education"
          },
          {
            "name": "Educational Technology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Education",
        "majors": [
          {
            "name": "Physical Education"
          },
          {
            "name": "Sports Training"
          },
          {
            "name": "Sports Management"
          },
          {
            "name": "Recreation"
          },
          {
            "name": "Exercise Physiology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Economic Studies and Political Science",
        "majors": [
          {
            "name": "Economics"
          },
          {
            "name": "Political Science"
          },
          {
            "name": "Public Administration"
          },
          {
            "name": "Statistics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Education for Early Childhood",
        "majors": [
          {
            "name": "Early Childhood Education"
          },
          {
            "name": "Kindergarten Education"
          },
          {
            "name": "Child Psychology"
          },
          {
            "name": "Special Education"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Al-Alsun (Languages)",
        "majors": [
          {
            "name": "English"
          },
          {
            "name": "French"
          },
          {
            "name": "German"
          },
          {
            "name": "Spanish"
          },
          {
            "name": "Italian"
          },
          {
            "name": "Chinese"
          },
          {
            "name": "Japanese"
          },
          {
            "name": "Russian"
          },
          {
            "name": "Korean"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Developmental Social Work",
        "majors": [
          {
            "name": "Social Work"
          },
          {
            "name": "Community Development"
          },
          {
            "name": "Family and Childhood Care"
          },
          {
            "name": "Social Planning"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Tourism and Hotels",
        "majors": [
          {
            "name": "Tourism Studies"
          },
          {
            "name": "Hotel Management"
          },
          {
            "name": "Tourist Guidance"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "General Medicine"
          },
          {
            "name": "Internal Medicine"
          },
          {
            "name": "General Surgery"
          },
          {
            "name": "Pediatrics"
          },
          {
            "name": "Obstetrics and Gynecology"
          },
          {
            "name": "Clinical Pathology"
          },
          {
            "name": "Anatomy"
          },
          {
            "name": "Physiology"
          },
          {
            "name": "Pharmacology"
          },
          {
            "name": "Medical Microbiology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Dentistry",
        "majors": [
          {
            "name": "Oral Medicine and Periodontology"
          },
          {
            "name": "Oral and Maxillofacial Surgery"
          },
          {
            "name": "Orthodontics"
          },
          {
            "name": "Prosthodontics"
          },
          {
            "name": "Conservative Dentistry"
          },
          {
            "name": "Endodontics"
          },
          {
            "name": "Pediatric Dentistry"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "Pharmaceutics"
          },
          {
            "name": "Pharmaceutical Chemistry"
          },
          {
            "name": "Pharmaceutical Analytical Chemistry"
          },
          {
            "name": "Pharmacognosy"
          },
          {
            "name": "Pharmacology and Toxicology"
          },
          {
            "name": "Clinical Pharmacy"
          },
          {
            "name": "Industrial Pharmacy"
          },
          {
            "name": "Biochemistry"
          },
          {
            "name": "Microbiology and Immunology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Nursing",
        "majors": [
          {
            "name": "Medical-Surgical Nursing"
          },
          {
            "name": "Pediatric Nursing"
          },
          {
            "name": "Obstetrics and Gynecological Nursing"
          },
          {
            "name": "Community Health Nursing"
          },
          {
            "name": "Psychiatric and Mental Health Nursing"
          },
          {
            "name": "Nursing Administration"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Veterinary Medicine",
        "majors": [
          {
            "name": "Animal Medicine"
          },
          {
            "name": "Surgery"
          },
          {
            "name": "Theriogenology"
          },
          {
            "name": "Pathology"
          },
          {
            "name": "Parasitology"
          },
          {
            "name": "Microbiology"
          },
          {
            "name": "Pharmacology"
          },
          {
            "name": "Anatomy and Embryology"
          },
          {
            "name": "Food Hygiene"
          },
          {
            "name": "Animal Production"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Science",
        "majors": [
          {
            "name": "Mathematics"
          },
          {
            "name": "Physics"
          },
          {
            "name": "Chemistry"
          },
          {
            "name": "Botany"
          },
          {
            "name": "Zoology"
          },
          {
            "name": "Geology"
          },
          {
            "name": "Biochemistry"
          },
          {
            "name": "Microbiology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Agriculture",
        "majors": [
          {
            "name": "Agronomy"
          },
          {
            "name": "Horticulture"
          },
          {
            "name": "Plant Protection"
          },
          {
            "name": "Soil Science"
          },
          {
            "name": "Animal Production"
          },
          {
            "name": "Food Science"
          },
          {
            "name": "Agricultural Economics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Civil Engineering"
          },
          {
            "name": "Architecture Engineering"
          },
          {
            "name": "Electrical Engineering"
          },
          {
            "name": "Mechanical Engineering"
          },
          {
            "name": "Electronics and Communications Engineering"
          },
          {
            "name": "Computer Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Industrial Education",
        "majors": [
          {
            "name": "Mechanical Technology"
          },
          {
            "name": "Electrical Technology"
          },
          {
            "name": "Civil Construction Technology"
          },
          {
            "name": "Educational Technology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Computers and Artificial Intelligence",
        "majors": [
          {
            "name": "Computer Science"
          },
          {
            "name": "Artificial Intelligence"
          },
          {
            "name": "Information Systems"
          },
          {
            "name": "Cybersecurity"
          },
          {
            "name": "Data Science"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Mass Communication",
        "majors": [
          {
            "name": "Journalism"
          },
          {
            "name": "Radio and Television"
          },
          {
            "name": "Public Relations and Advertising"
          },
          {
            "name": "Digital Media"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physiotherapy",
        "majors": [
          {
            "name": "Orthopedic Physical Therapy"
          },
          {
            "name": "Neurological Physical Therapy"
          },
          {
            "name": "Pediatric Physical Therapy"
          },
          {
            "name": "Cardiopulmonary Physical Therapy"
          },
          {
            "name": "Women's Health Physical Therapy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Health Sciences",
        "majors": [
          {
            "name": "Medical Laboratory Sciences"
          },
          {
            "name": "Radiology and Medical Imaging"
          },
          {
            "name": "Nutrition and Food Science"
          },
          {
            "name": "Health Information Management"
          },
          {
            "name": "Emergency Medical Services"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Applied Arts",
        "majors": [
          {
            "name": "Interior Design"
          },
          {
            "name": "Graphic Design"
          },
          {
            "name": "Industrial Design"
          },
          {
            "name": "Fashion Design"
          },
          {
            "name": "Textile Design"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Earth Sciences",
        "majors": [
          {
            "name": "Geology"
          },
          {
            "name": "Geophysics"
          },
          {
            "name": "Environmental Geology"
          },
          {
            "name": "Hydrogeology"
          },
          {
            "name": "Mineral Resources"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Special Needs Sciences",
        "majors": [
          {
            "name": "Intellectual Disabilities"
          },
          {
            "name": "Hearing Impairment"
          },
          {
            "name": "Visual Impairment"
          },
          {
            "name": "Autism Spectrum Disorders"
          },
          {
            "name": "Learning Disabilities"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Navigation Science and Space Technology",
        "majors": [
          {
            "name": "Space Science"
          },
          {
            "name": "Space Technology"
          },
          {
            "name": "Satellite Engineering"
          },
          {
            "name": "Navigation Systems"
          },
          {
            "name": "Remote Sensing"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Postgraduate Studies for Advanced Sciences",
        "majors": [
          {
            "name": "Biotechnology"
          },
          {
            "name": "Nanotechnology"
          },
          {
            "name": "Materials Science"
          },
          {
            "name": "Environmental Science"
          },
          {
            "name": "Applied Physics"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Beni Suef",
    "rating": 4.6,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@benisuefuniversity.edu.eg",
    "phone": "+20 2 20001939"
  },
  {
    "id": 6,
    "name": "Arish University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916507/arish_o81iwy.jpg",
    "description": "Established as an independent public university in 2016, Arish University is located in El Arish, North Sinai, Egypt. The university plays a vital role in the sustainable development of the Sinai Peninsula through specialized education and scientific research. It features unique faculties tailored to the region's environment and economy, including Environmental Agricultural Sciences, Aquaculture and Marine Fisheries, Science, and Education.",
    "departments": [
      "Faculty of Education",
      "Faculty of Environmental Agricultural Sciences",
      "Faculty of Computers and Information",
      "Faculty of Medicine",
      "Faculty of Physical Education",
      "Faculty of Veterinary Medicine",
      "Faculty of Science",
      "Faculty of Home Economics",
      "Faculty of Commerce",
      "Faculty of Arts",
      "Faculty of Aquaculture and Marine Fisheries"
    ],
    "faculties": [
      {
        "name": "Faculty of Education",
        "majors": [
          {
            "name": "Curriculum and Instruction"
          },
          {
            "name": "Educational Psychology"
          },
          {
            "name": "Educational Administration"
          },
          {
            "name": "Foundations of Education"
          },
          {
            "name": "Special Education"
          },
          {
            "name": "Educational Technology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Environmental Agricultural Sciences",
        "majors": [
          {
            "name": "Agronomy"
          },
          {
            "name": "Horticulture"
          },
          {
            "name": "Plant Protection"
          },
          {
            "name": "Soil Science"
          },
          {
            "name": "Animal Production"
          },
          {
            "name": "Agricultural Economics"
          },
          {
            "name": "Environmental Agriculture"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Computers and Information",
        "majors": [
          {
            "name": "Computer Science"
          },
          {
            "name": "Information Systems"
          },
          {
            "name": "Information Technology"
          },
          {
            "name": "Artificial Intelligence"
          },
          {
            "name": "Cybersecurity"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "General Medicine"
          },
          {
            "name": "Internal Medicine"
          },
          {
            "name": "General Surgery"
          },
          {
            "name": "Pediatrics"
          },
          {
            "name": "Obstetrics and Gynecology"
          },
          {
            "name": "Clinical Pathology"
          },
          {
            "name": "Anatomy"
          },
          {
            "name": "Physiology"
          },
          {
            "name": "Pharmacology"
          },
          {
            "name": "Medical Microbiology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Education",
        "majors": [
          {
            "name": "Physical Education"
          },
          {
            "name": "Sports Training"
          },
          {
            "name": "Sports Management"
          },
          {
            "name": "Recreation"
          },
          {
            "name": "Exercise Physiology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Veterinary Medicine",
        "majors": [
          {
            "name": "Animal Medicine"
          },
          {
            "name": "Surgery"
          },
          {
            "name": "Theriogenology"
          },
          {
            "name": "Pathology"
          },
          {
            "name": "Parasitology"
          },
          {
            "name": "Microbiology"
          },
          {
            "name": "Pharmacology"
          },
          {
            "name": "Anatomy and Embryology"
          },
          {
            "name": "Food Hygiene"
          },
          {
            "name": "Animal Production"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Science",
        "majors": [
          {
            "name": "Mathematics"
          },
          {
            "name": "Physics"
          },
          {
            "name": "Chemistry"
          },
          {
            "name": "Botany"
          },
          {
            "name": "Zoology"
          },
          {
            "name": "Geology"
          },
          {
            "name": "Biochemistry"
          },
          {
            "name": "Microbiology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Home Economics",
        "majors": [
          {
            "name": "Nutrition and Food Science"
          },
          {
            "name": "Home Management"
          },
          {
            "name": "Clothing and Textiles"
          },
          {
            "name": "Educational Home Economics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Commerce",
        "majors": [
          {
            "name": "Accounting"
          },
          {
            "name": "Business Administration"
          },
          {
            "name": "Economics"
          },
          {
            "name": "Statistics"
          },
          {
            "name": "Insurance"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Arts",
        "majors": [
          {
            "name": "Arabic Language"
          },
          {
            "name": "English Language"
          },
          {
            "name": "History"
          },
          {
            "name": "Geography"
          },
          {
            "name": "Philosophy"
          },
          {
            "name": "Psychology"
          },
          {
            "name": "Sociology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Aquaculture and Marine Fisheries",
        "majors": [
          {
            "name": "Aquaculture"
          },
          {
            "name": "Marine Fisheries"
          },
          {
            "name": "Fish Processing Technology"
          },
          {
            "name": "Marine Biology"
          },
          {
            "name": "Fish Nutrition"
          },
          {
            "name": "Fish Diseases"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "El Arish",
    "rating": 4.7,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@arishuniversity.edu.eg",
    "phone": "+20 2 20001625"
  },
  {
    "id": 7,
    "name": "Minia University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916514/minia_giikan.jpg",
    "description": "Established as an independent public university in 1976, Minia University is located in Minya, Egypt. It is a highly respected institution known for its focus on scientific research and community development. The university offers a comprehensive range of programs across diverse fields, including prominent faculties in Medicine, Engineering, Fine Arts, Agriculture, and Science.",
    "departments": [
      "Faculty of Medicine",
      "Faculty of Dentistry",
      "Faculty of Pharmacy",
      "Faculty of Nursing",
      "Faculty of Engineering",
      "Faculty of Science",
      "Faculty of Agriculture",
      "Faculty of Computers and Information",
      "Faculty of Arts",
      "Faculty of Fine Arts",
      "Faculty of Education",
      "Faculty of Specific Education",
      "Faculty of Physical Education",
      "Faculty of Tourism and Hotels",
      "Faculty of Al-Alsun (Languages)",
      "Faculty of Dar Al-Uloom",
      "Faculty of Early Childhood Education",
      "Faculty of Law",
      "Faculty of Veterinary Medicine"
    ],
    "faculties": [
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "General Medicine"
          },
          {
            "name": "Internal Medicine"
          },
          {
            "name": "General Surgery"
          },
          {
            "name": "Pediatrics"
          },
          {
            "name": "Obstetrics and Gynecology"
          },
          {
            "name": "Clinical Pathology"
          },
          {
            "name": "Anatomy"
          },
          {
            "name": "Physiology"
          },
          {
            "name": "Pharmacology"
          },
          {
            "name": "Medical Microbiology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Dentistry",
        "majors": [
          {
            "name": "Oral Medicine and Periodontology"
          },
          {
            "name": "Oral and Maxillofacial Surgery"
          },
          {
            "name": "Orthodontics"
          },
          {
            "name": "Prosthodontics"
          },
          {
            "name": "Conservative Dentistry"
          },
          {
            "name": "Endodontics"
          },
          {
            "name": "Pediatric Dentistry"
          },
          {
            "name": "Oral Pathology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "Pharmaceutics"
          },
          {
            "name": "Pharmaceutical Chemistry"
          },
          {
            "name": "Pharmaceutical Analytical Chemistry"
          },
          {
            "name": "Pharmacognosy"
          },
          {
            "name": "Pharmacology and Toxicology"
          },
          {
            "name": "Clinical Pharmacy"
          },
          {
            "name": "Industrial Pharmacy"
          },
          {
            "name": "Biochemistry"
          },
          {
            "name": "Microbiology and Immunology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Nursing",
        "majors": [
          {
            "name": "Medical-Surgical Nursing"
          },
          {
            "name": "Pediatric Nursing"
          },
          {
            "name": "Obstetrics and Gynecological Nursing"
          },
          {
            "name": "Community Health Nursing"
          },
          {
            "name": "Psychiatric and Mental Health Nursing"
          },
          {
            "name": "Nursing Administration"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Civil Engineering"
          },
          {
            "name": "Architecture Engineering"
          },
          {
            "name": "Electrical Engineering"
          },
          {
            "name": "Mechanical Engineering"
          },
          {
            "name": "Electronics and Communications Engineering"
          },
          {
            "name": "Computer Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Science",
        "majors": [
          {
            "name": "Mathematics"
          },
          {
            "name": "Physics"
          },
          {
            "name": "Chemistry"
          },
          {
            "name": "Botany"
          },
          {
            "name": "Zoology"
          },
          {
            "name": "Geology"
          },
          {
            "name": "Biochemistry"
          },
          {
            "name": "Microbiology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Agriculture",
        "majors": [
          {
            "name": "Agronomy"
          },
          {
            "name": "Horticulture"
          },
          {
            "name": "Plant Protection"
          },
          {
            "name": "Soil Science"
          },
          {
            "name": "Animal Production"
          },
          {
            "name": "Food Science"
          },
          {
            "name": "Agricultural Economics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Computers and Information",
        "majors": [
          {
            "name": "Computer Science"
          },
          {
            "name": "Information Systems"
          },
          {
            "name": "Information Technology"
          },
          {
            "name": "Artificial Intelligence"
          },
          {
            "name": "Bioinformatics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Arts",
        "majors": [
          {
            "name": "Arabic Language"
          },
          {
            "name": "English Language"
          },
          {
            "name": "French Language"
          },
          {
            "name": "History"
          },
          {
            "name": "Geography"
          },
          {
            "name": "Philosophy"
          },
          {
            "name": "Psychology"
          },
          {
            "name": "Sociology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Fine Arts",
        "majors": [
          {
            "name": "Architecture"
          },
          {
            "name": "Interior Design"
          },
          {
            "name": "Graphics"
          },
          {
            "name": "Painting"
          },
          {
            "name": "Sculpture"
          },
          {
            "name": "Decoration"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Education",
        "majors": [
          {
            "name": "Curriculum and Instruction"
          },
          {
            "name": "Educational Psychology"
          },
          {
            "name": "Educational Administration"
          },
          {
            "name": "Foundations of Education"
          },
          {
            "name": "Special Education"
          },
          {
            "name": "Educational Technology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Specific Education",
        "majors": [
          {
            "name": "Art Education"
          },
          {
            "name": "Music Education"
          },
          {
            "name": "Educational Media"
          },
          {
            "name": "Home Economics"
          },
          {
            "name": "Educational Technology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Education",
        "majors": [
          {
            "name": "Physical Education"
          },
          {
            "name": "Sports Training"
          },
          {
            "name": "Sports Management"
          },
          {
            "name": "Recreation"
          },
          {
            "name": "Exercise Physiology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Tourism and Hotels",
        "majors": [
          {
            "name": "Tourism Studies"
          },
          {
            "name": "Hotel Management"
          },
          {
            "name": "Tourist Guidance"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Al-Alsun (Languages)",
        "majors": [
          {
            "name": "English"
          },
          {
            "name": "French"
          },
          {
            "name": "German"
          },
          {
            "name": "Spanish"
          },
          {
            "name": "Italian"
          },
          {
            "name": "Chinese"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Dar Al-Uloom",
        "majors": [
          {
            "name": "Arabic Language"
          },
          {
            "name": "Islamic Studies"
          },
          {
            "name": "Literary Studies"
          },
          {
            "name": "Linguistics"
          },
          {
            "name": "Philosophy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Early Childhood Education",
        "majors": [
          {
            "name": "Early Childhood Education"
          },
          {
            "name": "Kindergarten Education"
          },
          {
            "name": "Child Psychology"
          },
          {
            "name": "Special Education"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Law",
        "majors": [
          {
            "name": "Public Law"
          },
          {
            "name": "Private Law"
          },
          {
            "name": "Civil Law"
          },
          {
            "name": "Criminal Law"
          },
          {
            "name": "Commercial Law"
          },
          {
            "name": "International Law"
          },
          {
            "name": "Islamic Sharia"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Veterinary Medicine",
        "majors": [
          {
            "name": "Animal Medicine"
          },
          {
            "name": "Surgery"
          },
          {
            "name": "Theriogenology"
          },
          {
            "name": "Pathology"
          },
          {
            "name": "Parasitology"
          },
          {
            "name": "Microbiology"
          },
          {
            "name": "Pharmacology"
          },
          {
            "name": "Anatomy and Embryology"
          },
          {
            "name": "Food Hygiene"
          },
          {
            "name": "Animal Production"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Minya",
    "rating": 4.7,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@miniauniversity.edu.eg",
    "phone": "+20 2 20001616"
  },
  {
    "id": 8,
    "name": "Modern technology and information university( MTI )",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784917518/ChatGPT_Image_Jul_24_2026_09_24_52_PM_erjnim.png",
    "description": "MTI University (Modern University for Technology & Information) is a leading private university in Egypt, established in 2004. It offers high-quality education across a wide range of disciplines, combining academic excellence with practical training, innovation, and modern technology. The university aims to prepare graduates with the knowledge, skills, and professional experience needed to succeed in local and international careers. MTI provides a dynamic learning environment, advanced facilities, and strong industry connections to support students' academic and personal development.",
    "departments": [
      "Faculty of Computer Science and Artificial Intelligence",
      "Faculty of Engineering",
      "Faculty of Mass Communication",
      "Faculty of Pharmacy",
      "Faculty of Management and Business Intelligence",
      "Faculty of Oral and Dental Medicine",
      "Faculty of Nursing",
      "Faculty of Physical Therapy",
      "Faculty of Medicine"
    ],
    "faculties": [
      {
        "name": "Faculty of Computer Science and Artificial Intelligence",
        "majors": [
          {
            "name": "Computer Science (CS)"
          },
          {
            "name": "Artificial Intelligence (AI)"
          },
          {
            "name": "Information Systems (IS)"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Architectural Engineering"
          },
          {
            "name": "Bioelectronics Engineering"
          },
          {
            "name": "Communication Engineering"
          },
          {
            "name": "Computer Engineering"
          },
          {
            "name": "Construction Project Management"
          },
          {
            "name": "Control Engineering"
          },
          {
            "name": "Mechatronics Engineering"
          },
          {
            "name": "Structural Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Mass Communication",
        "majors": [
          {
            "name": "New Media"
          },
          {
            "name": "Journalism and E-Publishing"
          },
          {
            "name": "Radio and Television"
          },
          {
            "name": "Integrated Marketing Communications (IMC)"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "PharmD (Doctor of Pharmacy)"
          },
          {
            "name": "PharmD – Clinical Pharmacy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Management and Business Intelligence",
        "majors": [
          {
            "name": "Accounting"
          },
          {
            "name": "Business Administration"
          },
          {
            "name": "Economics"
          },
          {
            "name": "Management Information Systems (MIS)"
          },
          {
            "name": "Marketing"
          },
          {
            "name": "Business Intelligence"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Oral and Dental Medicine",
        "majors": [
          {
            "name": "Orthodontics"
          },
          {
            "name": "Oral and Maxillofacial Surgery"
          },
          {
            "name": "Prosthodontics"
          },
          {
            "name": "Endodontics"
          },
          {
            "name": "Periodontology"
          },
          {
            "name": "Pediatric Dentistry"
          },
          {
            "name": "Oral Medicine"
          },
          {
            "name": "Oral Pathology"
          },
          {
            "name": "Dental Public Health"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Nursing",
        "majors": [
          {
            "name": "Medical–Surgical Nursing"
          },
          {
            "name": "Critical Care Nursing"
          },
          {
            "name": "Pediatric Nursing"
          },
          {
            "name": "Obstetric and Gynecological Nursing"
          },
          {
            "name": "Psychiatric and Mental Health Nursing"
          },
          {
            "name": "Community Health Nursing"
          },
          {
            "name": "Nursing Administration"
          },
          {
            "name": "Geriatric Nursing"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Therapy",
        "majors": [
          {
            "name": "Orthopedic Physical Therapy"
          },
          {
            "name": "Neurological Physical Therapy"
          },
          {
            "name": "Pediatric Physical Therapy"
          },
          {
            "name": "Sports Physical Therapy"
          },
          {
            "name": "Cardiopulmonary Physical Therapy"
          },
          {
            "name": "Geriatric Physical Therapy"
          },
          {
            "name": "Women's Health Physical Therapy"
          },
          {
            "name": "Prosthetics and Orthotics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "Internal Medicine"
          },
          {
            "name": "General Surgery"
          },
          {
            "name": "Pediatrics"
          },
          {
            "name": "Obstetrics and Gynecology"
          },
          {
            "name": "Cardiology"
          },
          {
            "name": "Neurology"
          },
          {
            "name": "Dermatology"
          },
          {
            "name": "Psychiatry"
          },
          {
            "name": "Radiology"
          },
          {
            "name": "Anesthesiology"
          },
          {
            "name": "Emergency Medicine"
          },
          {
            "name": "Family Medicine"
          },
          {
            "name": "Ophthalmology"
          },
          {
            "name": "Otorhinolaryngology (ENT)"
          },
          {
            "name": "Orthopedic Surgery"
          },
          {
            "name": "Urology"
          },
          {
            "name": "Oncology"
          },
          {
            "name": "Pathology"
          },
          {
            "name": "Microbiology"
          },
          {
            "name": "Public Health"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Egypt",
    "rating": 5,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@moderntechnologyandinformationuniversitymti.edu.eg",
    "phone": "+20 2 20004823"
  },
  {
    "id": 9,
    "name": "MSA University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916516/msa_k2ifnb.jpg",
    "description": "MSA University (October University for Modern Sciences and Arts) is one of Egypt’s leading private universities, established in 1996 by Prof. Dr. Nawal El Degwi. It offers high-quality education through modern academic programs and strong partnerships with leading British universities. MSA focuses on academic excellence, innovation, scientific research, and practical learning, helping students develop the knowledge and skills needed to succeed in both local and international careers. The university provides a modern campus, advanced laboratories, and a vibrant student life that supports personal and professional growth.",
    "departments": [
      "Faculty of Dentistry",
      "Faculty of Pharmacy",
      "Faculty of Biotechnology",
      "Faculty of Engineering",
      "Faculty of Computer Science",
      "Faculty of Mass Communication",
      "Faculty of Arts and Design",
      "Faculty of Management Sciences",
      "Faculty of Languages",
      "Faculty of Physical Therapy"
    ],
    "faculties": [
      {
        "name": "Faculty of Dentistry",
        "majors": [
          {
            "name": "Dentistry"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "Clinical Pharmacy"
          },
          {
            "name": "Pharmacy (PharmD)"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Biotechnology",
        "majors": [
          {
            "name": "Biotechnology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Architectural Systems Engineering"
          },
          {
            "name": "Civil Engineering Systems"
          },
          {
            "name": "Computer Systems Engineering"
          },
          {
            "name": "Electrical Communication and Electronics Systems Engineering"
          },
          {
            "name": "Industrial Systems Engineering"
          },
          {
            "name": "Mechatronics Systems Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Computer Science",
        "majors": [
          {
            "name": "Computer Science"
          },
          {
            "name": "Software Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Mass Communication",
        "majors": [
          {
            "name": "Journalism"
          },
          {
            "name": "Radio and Television"
          },
          {
            "name": "Public Relations and Advertising"
          },
          {
            "name": "Digital Media"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Arts and Design",
        "majors": [
          {
            "name": "Graphic Design"
          },
          {
            "name": "Interior Design"
          },
          {
            "name": "Fashion Design"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Management Sciences",
        "majors": [
          {
            "name": "Accounting"
          },
          {
            "name": "Business Administration"
          },
          {
            "name": "Economics"
          },
          {
            "name": "Marketing"
          },
          {
            "name": "Finance"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Languages",
        "majors": [
          {
            "name": "English Language"
          },
          {
            "name": "German Language"
          },
          {
            "name": "Translation"
          },
          {
            "name": "Simultaneous Interpretation"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Therapy",
        "majors": [
          {
            "name": "Physical Therapy"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Egypt",
    "rating": 4.8,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@msauniversity.edu.eg",
    "phone": "+20 2 20001347"
  },
  {
    "id": 10,
    "name": "Alamein international university",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916506/AIU_euau7e.jpg",
    "description": "Alamein International University (AIU) is a modern national university in New Alamein City, Egypt. It offers high-quality education through internationally aligned programs in medicine, engineering, business, computer science, arts, and many other fields. AIU focuses on innovation, research, practical learning, and preparing graduates for the global job market.",
    "departments": [
      "Faculty of Business",
      "Faculty of Computer Science and Engineering",
      "Faculty of Engineering",
      "Faculty of Dental Medicine",
      "Faculty of Pharmacy Sciences",
      "Faculty of Physical Therapy",
      "Faculty of Public Health Sciences",
      "Faculty of Advanced Basic Sciences",
      "Faculty of Arts and Design",
      "Faculty of International Legal Studies"
    ],
    "faculties": [
      {
        "name": "Faculty of Business",
        "majors": [
          {
            "name": "Accounting & Information Systems"
          },
          {
            "name": "Marketing"
          },
          {
            "name": "Logistics & Supply Chain Management"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Computer Science and Engineering",
        "majors": [
          {
            "name": "Computer Science"
          },
          {
            "name": "Computer Science (in association with the University of Louisville)"
          },
          {
            "name": "Artificial Intelligence Science"
          },
          {
            "name": "Biomedical Informatics"
          },
          {
            "name": "Information Technology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Architectural Design and Digital Architecture"
          },
          {
            "name": "Biomedical Engineering"
          },
          {
            "name": "Mechatronics Engineering"
          },
          {
            "name": "Electronics and Communications Engineering"
          },
          {
            "name": "Petroleum and Gas Engineering"
          },
          {
            "name": "Engineering and Construction Management"
          },
          {
            "name": "Environmental Architecture and Technology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Dental Medicine",
        "majors": [
          {
            "name": "Oral and Maxillofacial Surgery"
          },
          {
            "name": "Orthodontics"
          },
          {
            "name": "Prosthodontics"
          },
          {
            "name": "Conservative Dentistry"
          },
          {
            "name": "Endodontics"
          },
          {
            "name": "Periodontology"
          },
          {
            "name": "Oral Medicine"
          },
          {
            "name": "Oral Pathology"
          },
          {
            "name": "Oral Biology"
          },
          {
            "name": "Pediatric Dentistry"
          },
          {
            "name": "Oral Radiology"
          },
          {
            "name": "Dental Biomaterials"
          },
          {
            "name": "Community Dentistry"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy Sciences",
        "majors": [
          {
            "name": "Medicinal Chemistry"
          },
          {
            "name": "Pharmacognosy"
          },
          {
            "name": "Pharmaceutics & Industrial Pharmacy"
          },
          {
            "name": "Microbiology & Immunology"
          },
          {
            "name": "Pharmacology & Toxicology"
          },
          {
            "name": "Biochemistry"
          },
          {
            "name": "Pharmacy Practice & Clinical Pharmacy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Therapy",
        "majors": [
          {
            "name": "Basic Sciences for Physical Therapy"
          },
          {
            "name": "Biomechanics"
          },
          {
            "name": "Physical Therapy for Internal Medicine and Geriatrics"
          },
          {
            "name": "Physical Therapy for Surgery and Burns"
          },
          {
            "name": "Physical Therapy for Orthopaedics"
          },
          {
            "name": "Physical Therapy for Woman Health"
          },
          {
            "name": "Physical Therapy for Pediatric Disorders and Its Surgery"
          },
          {
            "name": "Neurorehabilitation"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Public Health Sciences",
        "majors": [
          {
            "name": "Global Health"
          },
          {
            "name": "Environmental Health"
          },
          {
            "name": "Epidemiology and Biostatistics"
          },
          {
            "name": "Healthcare Management"
          },
          {
            "name": "Public Health Nutrition"
          },
          {
            "name": "Public Health Genetics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Advanced Basic Sciences",
        "majors": [
          {
            "name": "Molecular Biotechnology"
          },
          {
            "name": "Industrial Chemistry"
          },
          {
            "name": "Sustainable Energy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Arts and Design",
        "majors": [
          {
            "name": "Advertising & Communication"
          },
          {
            "name": "Game Design"
          },
          {
            "name": "Interior Design"
          },
          {
            "name": "Apparel Design"
          },
          {
            "name": "Graphic Design & Branding"
          },
          {
            "name": "Visual Art"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of International Legal Studies",
        "majors": [
          {
            "name": "Department of Public Law"
          },
          {
            "name": "Department of Private Law"
          },
          {
            "name": "Department of International Law"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Egypt",
    "rating": 4.7,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@alameininternationaluniversity.edu.eg",
    "phone": "+20 2 20003281"
  },
  {
    "id": 11,
    "name": "Galala University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916511/galala_wfjswq.jpg",
    "description": "Galala University (GU) is a modern national university located in Galala City, Egypt. It offers high-quality education through internationally aligned programs in medicine, engineering, business, computer science, arts, and many other disciplines. The university emphasizes innovation, research, practical training, and entrepreneurship to prepare graduates for successful careers in Egypt and around the world.",
    "departments": [
      "Faculty of Medicine",
      "Faculty of Dentistry",
      "Faculty of Pharmacy",
      "Faculty of Physical Therapy",
      "Faculty of Nursing",
      "Faculty of Applied Health Sciences Technology",
      "Faculty of Engineering",
      "Faculty of Computer Science",
      "Faculty of Administrative Sciences",
      "Faculty of Social and Human Sciences",
      "Faculty of Art and Design",
      "Faculty of Media Production",
      "Faculty of Basic Sciences",
      "Faculty of Food Industries"
    ],
    "faculties": [
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "Medicine and Surgery"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Dentistry",
        "majors": [
          {
            "name": "Dentistry"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "Pharm D"
          },
          {
            "name": "Clinical Pharmacy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Therapy",
        "majors": [],
        "annualFee": null
      },
      {
        "name": "Faculty of Nursing",
        "majors": [
          {
            "name": "Nursing"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Applied Health Sciences Technology",
        "majors": [],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Civil Engineering"
          },
          {
            "name": "Architectural Engineering"
          },
          {
            "name": "Mechanical Engineering"
          },
          {
            "name": "Electrical Engineering"
          },
          {
            "name": "Mechatronics Engineering"
          },
          {
            "name": "Computer Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Computer Science",
        "majors": [
          {
            "name": "Computer Science"
          },
          {
            "name": "Artificial Intelligence"
          },
          {
            "name": "Data Science"
          },
          {
            "name": "Cybersecurity"
          },
          {
            "name": "Software Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Administrative Sciences",
        "majors": [
          {
            "name": "Business Administration"
          },
          {
            "name": "Accounting"
          },
          {
            "name": "Finance"
          },
          {
            "name": "Marketing"
          },
          {
            "name": "Human Resources Management"
          },
          {
            "name": "Logistics and Supply Chain Management"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Social and Human Sciences",
        "majors": [
          {
            "name": "Psychology"
          },
          {
            "name": "Sociology"
          },
          {
            "name": "Political Science"
          },
          {
            "name": "Economics"
          },
          {
            "name": "Media"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Art and Design",
        "majors": [
          {
            "name": "Graphic Design"
          },
          {
            "name": "Interior Design"
          },
          {
            "name": "Fashion Design"
          },
          {
            "name": "Product Design"
          },
          {
            "name": "Animation"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Media Production",
        "majors": [
          {
            "name": "Film Production"
          },
          {
            "name": "Television Production"
          },
          {
            "name": "Radio Production"
          },
          {
            "name": "Digital Media"
          },
          {
            "name": "Multimedia"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Basic Sciences",
        "majors": [
          {
            "name": "Mathematics"
          },
          {
            "name": "Physics"
          },
          {
            "name": "Chemistry"
          },
          {
            "name": "Biology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Food Industries",
        "majors": [
          {
            "name": "Food Science"
          },
          {
            "name": "Food Technology"
          },
          {
            "name": "Food Safety"
          },
          {
            "name": "Nutrition"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Galala City",
    "rating": 5,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@galalauniversity.edu.eg",
    "phone": "+20 2 20001700"
  },
  {
    "id": 12,
    "name": "New Valley University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916516/New_vallet_n1piet.jpg",
    "description": "New Valley National University (NVNU) is a non-profit national smart university located in Kharga City, New Valley Governorate, Egypt. It was established by Presidential Decree No. 249 of 2025 to provide high-quality education based on international academic standards. The university offers modern academic programs designed to meet the needs of the local and global labor market while encouraging creativity, innovation, and scientific research. NVNU provides advanced facilities, including modern laboratories, smart classrooms, research centers, and student services, creating an excellent learning environment for students. The university aims to prepare qualified graduates who can contribute to sustainable development and compete successfully at both regional and international levels.",
    "departments": [
      "Faculty of Pharmacy",
      "Faculty of Veterinary Medicine",
      "Faculty of Science",
      "Faculty of Languages and Human Sciences"
    ],
    "faculties": [
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "Pharm D – General Pharmacy"
          },
          {
            "name": "Pharm D Clinical – Advanced Clinical Pharmacy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Veterinary Medicine",
        "majors": [
          {
            "name": "Veterinary Medicine"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Science",
        "majors": [
          {
            "name": "Biochemistry"
          },
          {
            "name": "Industrial Applied Chemistry"
          },
          {
            "name": "Chemistry and Forensic Evidence"
          },
          {
            "name": "Biophysics and Medical Physics"
          },
          {
            "name": "New and Renewable Energy"
          },
          {
            "name": "Artificial Intelligence and Data Science"
          },
          {
            "name": "Petroleum and Mining"
          },
          {
            "name": "Engineering Geology and Remote Sensing"
          },
          {
            "name": "Microbial Biotechnology and Molecular Biology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Languages and Human Sciences",
        "majors": [
          {
            "name": "Simultaneous Interpretation"
          },
          {
            "name": "Oriental Languages"
          },
          {
            "name": "Geomatics"
          },
          {
            "name": "Population Studies"
          },
          {
            "name": "Islamic and Coptic Studies"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Kharga City",
    "rating": 4.5,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@newvalleyuniversity.edu.eg",
    "phone": "+20 2 20002073"
  },
  {
    "id": 13,
    "name": "New Valley  University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916516/New_vallet_n1piet.jpg",
    "description": "New Valley National University (NVNU) is a non-profit national smart university located in Kharga City, New Valley Governorate, Egypt. It was established by Presidential Decree No. 249 of 2025 to provide high-quality education based on international academic standards. The university offers modern academic programs designed to meet the needs of the local and global labor market while encouraging creativity, innovation, and scientific research. NVNU provides advanced facilities, including modern laboratories, smart classrooms, research centers, and student services, creating an excellent learning environment for students. The university aims to prepare qualified graduates who can contribute to sustainable development and compete successfully at both regional and international levels.",
    "departments": [
      "Faculty of Agriculture"
    ],
    "faculties": [
      {
        "name": "Faculty of Agriculture",
        "majors": [
          {
            "name": "Desert Land Reclamation and Cultivation"
          },
          {
            "name": "Agricultural Biotechnology"
          },
          {
            "name": "Smart Management of Animal and Poultry Production Farms"
          },
          {
            "name": "Smart Management of Agricultural Projects"
          },
          {
            "name": "Smart Pest Control"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Kharga City",
    "rating": 5,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@newvalleyuniversity.edu.eg",
    "phone": "+20 2 20002105"
  },
  {
    "id": 14,
    "name": "Nahda University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916515/nahda_ubd6xk.jpg",
    "description": "Nahda University in Beni Suef (NUB) is the first private university established in Upper Egypt. Founded in 2006, the university is located in East Beni Suef City on the Cairo–Beni Suef Road. NUB is committed to providing high-quality education through modern teaching methods, advanced facilities, and distinguished academic staff. The university offers a wide range of academic programs in different fields to prepare students for the local and international job market. In addition to academic excellence, NUB encourages research, innovation, community service, and student activities, helping graduates develop the knowledge and skills needed to become future leaders.",
    "departments": [
      "Faculty of Business Administration",
      "Faculty of Computer Science",
      "Faculty of Engineering",
      "Faculty of Oral & Dental Medicine",
      "Faculty of Pharmacy",
      "Faculty of Physical Therapy",
      "Faculty of Medicine",
      "Faculty of Nursing",
      "Faculty of Mass Communication & Applied Languages",
      "Faculty of Fine Arts"
    ],
    "faculties": [
      {
        "name": "Faculty of Business Administration",
        "majors": [
          {
            "name": "Accounting"
          },
          {
            "name": "Marketing"
          },
          {
            "name": "Finance and Investment"
          },
          {
            "name": "Human Resources Management"
          },
          {
            "name": "Business Information Systems (BIS)"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Computer Science",
        "majors": [
          {
            "name": "Computer Science (CS)"
          },
          {
            "name": "Artificial Intelligence (AI)"
          },
          {
            "name": "Information Systems (IS)"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Architecture Engineering"
          },
          {
            "name": "Civil Engineering"
          },
          {
            "name": "Electrical and Renewable Energy Engineering Communications and Computer Engineering"
          },
          {
            "name": "Mechatronics Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Oral & Dental Medicine",
        "majors": [
          {
            "name": "Oral Medicine and Periodontology"
          },
          {
            "name": "Conservative Dentistry"
          },
          {
            "name": "Prosthodontics"
          },
          {
            "name": "Orthodontics"
          },
          {
            "name": "Oral and Maxillofacial Surgery"
          },
          {
            "name": "Pediatric Dentistry"
          },
          {
            "name": "Endodontics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "PharmD Program"
          },
          {
            "name": "Clinical Pharmacy (PharmD Clinical)"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Therapy",
        "majors": [
          {
            "name": "Musculoskeletal Physical Therapy"
          },
          {
            "name": "Neurological Physical Therapy"
          },
          {
            "name": "Pediatric Physical Therapy"
          },
          {
            "name": "Cardiopulmonary Physical Therapy"
          },
          {
            "name": "Sports Physical Therapy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "Anatomy"
          },
          {
            "name": "Physiology"
          },
          {
            "name": "Biochemistry"
          },
          {
            "name": "Pathology"
          },
          {
            "name": "Pharmacology"
          },
          {
            "name": "Microbiology"
          },
          {
            "name": "Surgery"
          },
          {
            "name": "Internal Medicine"
          },
          {
            "name": "Pediatrics"
          },
          {
            "name": "Obstetrics & Gynecology"
          },
          {
            "name": "Radiology"
          },
          {
            "name": "Cardiology"
          },
          {
            "name": "Dermatology"
          },
          {
            "name": "Psychiatry"
          },
          {
            "name": "Neurology"
          },
          {
            "name": "Orthopedics"
          },
          {
            "name": "Ophthalmology"
          },
          {
            "name": "ENT"
          },
          {
            "name": "Family Medicine, and other clinical specialties."
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Nursing",
        "majors": [
          {
            "name": "Medical-Surgical Nursing"
          },
          {
            "name": "Pediatric Nursing"
          },
          {
            "name": "Critical Care Nursing"
          },
          {
            "name": "Community Health Nursing"
          },
          {
            "name": "Obstetrics and Gynecological Nursing"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Mass Communication & Applied Languages",
        "majors": [
          {
            "name": "Mass Communication:"
          },
          {
            "name": "Journalism"
          },
          {
            "name": "Radio and Television"
          },
          {
            "name": "Public Relations and Advertising"
          },
          {
            "name": "Applied Languages:"
          },
          {
            "name": "English Language"
          },
          {
            "name": "Translation"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Fine Arts",
        "majors": [
          {
            "name": "Decor"
          },
          {
            "name": "Interior Architecture"
          },
          {
            "name": "ScenInterior"
          },
          {
            "name": "Visual Communication"
          },
          {
            "name": "Graphic Design"
          },
          {
            "name": "Media and Communication Arts"
          },
          {
            "name": "Animation"
          },
          {
            "name": "Visual Arts"
          },
          {
            "name": "Sculpture"
          },
          {
            "name": "Drawing and Painting"
          },
          {
            "name": "Illustrations and Print Design"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Cairo",
    "rating": 4.7,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@nahdauniversity.edu.eg",
    "phone": "+20 2 20001598"
  },
  {
    "id": 15,
    "name": "Mansoura University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916514/Mansoura_wlkk0c.webp",
    "description": "Mansoura University is one of Egypt's leading public universities, established in 1972 and located in Mansoura, Dakahlia Governorate. It is widely recognized for its excellence in medical education, scientific research, engineering, computer science, and healthcare services. The university offers a wide range of undergraduate and postgraduate programs and is known for its modern campus, advanced research facilities, university hospitals, and strong academic reputation in Egypt and the Middle East.",
    "departments": [
      "Faculty of Medicine",
      "Faculty of Dentistry",
      "Faculty of Pharmacy",
      "Faculty of Nursing",
      "Faculty of Veterinary Medicine",
      "Faculty of Engineering",
      "Faculty of Science",
      "Faculty of Agriculture",
      "Faculty of Computers and Information",
      "Faculty of Artificial Intelligence",
      "Faculty of Arts",
      "Faculty of Commerce",
      "Faculty of Law",
      "Faculty of Education",
      "Faculty of Specific Education",
      "Faculty of Physical Education",
      "Faculty of Early Childhood Education",
      "Faculty of Tourism and Hotels",
      "Faculty of Fine Arts"
    ],
    "faculties": [
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "Medicine and Surgery"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Dentistry",
        "majors": [
          {
            "name": "Oral and Dental Medicine"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "Clinical Pharmacy"
          },
          {
            "name": "PharmD"
          },
          {
            "name": "PharmD – Clinical Pharmacy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Nursing",
        "majors": [
          {
            "name": "Nursing"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Veterinary Medicine",
        "majors": [
          {
            "name": "Veterinary Medicine"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Civil Engineering"
          },
          {
            "name": "Architectural Engineering"
          },
          {
            "name": "Electrical Engineering"
          },
          {
            "name": "Mechanical Engineering"
          },
          {
            "name": "Mechatronics Engineering"
          },
          {
            "name": "Biomedical Engineering"
          },
          {
            "name": "Communications and Electronics Engineering"
          },
          {
            "name": "Computer Engineering"
          },
          {
            "name": "Production Engineering"
          },
          {
            "name": "Industrial Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Science",
        "majors": [
          {
            "name": "Mathematics"
          },
          {
            "name": "Physics"
          },
          {
            "name": "Chemistry"
          },
          {
            "name": "Botany"
          },
          {
            "name": "Zoology"
          },
          {
            "name": "Geology"
          },
          {
            "name": "Biochemistry"
          },
          {
            "name": "Microbiology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Agriculture",
        "majors": [
          {
            "name": "Agricultural Sciences"
          },
          {
            "name": "Plant Production"
          },
          {
            "name": "Animal Production"
          },
          {
            "name": "Food Science"
          },
          {
            "name": "Agricultural Engineering"
          },
          {
            "name": "Plant Protection"
          },
          {
            "name": "Agricultural Economics"
          },
          {
            "name": "Biotechnology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Computers and Information",
        "majors": [
          {
            "name": "Computer Science"
          },
          {
            "name": "Information Systems"
          },
          {
            "name": "Information Technology"
          },
          {
            "name": "Artificial Intelligence"
          },
          {
            "name": "Bioinformatics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Artificial Intelligence",
        "majors": [
          {
            "name": "Artificial Intelligence"
          },
          {
            "name": "Machine Learning"
          },
          {
            "name": "Data Science"
          },
          {
            "name": "Robotics"
          },
          {
            "name": "Intelligent Systems"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Arts",
        "majors": [
          {
            "name": "English Language"
          },
          {
            "name": "Arabic Language"
          },
          {
            "name": "French Language"
          },
          {
            "name": "History"
          },
          {
            "name": "Geography"
          },
          {
            "name": "Philosophy"
          },
          {
            "name": "Sociology"
          },
          {
            "name": "Psychology"
          },
          {
            "name": "Media"
          },
          {
            "name": "Libraries and Information"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Commerce",
        "majors": [
          {
            "name": "Accounting"
          },
          {
            "name": "Business Administration"
          },
          {
            "name": "Economics"
          },
          {
            "name": "Statistics"
          },
          {
            "name": "Insurance"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Law",
        "majors": [
          {
            "name": "Law"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Education",
        "majors": [
          {
            "name": "English Education"
          },
          {
            "name": "Arabic Education"
          },
          {
            "name": "Mathematics Education"
          },
          {
            "name": "Science Education"
          },
          {
            "name": "Biology Education"
          },
          {
            "name": "Chemistry Education"
          },
          {
            "name": "Physics Education"
          },
          {
            "name": "Psychology Education"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Specific Education",
        "majors": [
          {
            "name": "Art Education"
          },
          {
            "name": "Music Education"
          },
          {
            "name": "Educational Media"
          },
          {
            "name": "Home Economics"
          },
          {
            "name": "Educational Technology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Education",
        "majors": [
          {
            "name": "Physical Education"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Early Childhood Education",
        "majors": [
          {
            "name": "Early Childhood Education"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Tourism and Hotels",
        "majors": [
          {
            "name": "Tourism Studies"
          },
          {
            "name": "Hotel Management"
          },
          {
            "name": "Tourism Guidance"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Fine Arts",
        "majors": [
          {
            "name": "Architecture"
          },
          {
            "name": "Interior Design"
          },
          {
            "name": "Painting"
          },
          {
            "name": "Sculpture"
          },
          {
            "name": "Graphic Design"
          },
          {
            "name": "Decoration"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Mansoura",
    "rating": 4.9,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@mansourauniversity.edu.eg",
    "phone": "+20 2 20001960"
  },
  {
    "id": 16,
    "name": "Minya National University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916514/Minya_national_wd92vz.jpg",
    "description": "Minya National University is a modern public national university established in 2022 to provide high-quality education based on international academic standards. Located in New Minya City, the university offers advanced programs in medicine, engineering, computer science and artificial intelligence, pharmacy, dentistry, physical therapy, and business. It focuses on innovation, practical training, scientific research, and preparing graduates with the skills needed for the local and global job market.",
    "departments": [
      "Faculty of Medicine",
      "Faculty of Dentistry",
      "Faculty of Pharmacy",
      "Faculty of Physical Therapy",
      "Faculty of Engineering",
      "Faculty of Computer Science and Artificial Intelligence",
      "Faculty of Public Relations and Business Administration"
    ],
    "faculties": [
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "Medicine and Surgery"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Dentistry",
        "majors": [
          {
            "name": "Oral and Dental Medicine"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "PharmD"
          },
          {
            "name": "Clinical Pharmacy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Therapy",
        "majors": [
          {
            "name": "Physical Therapy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Civil Engineering"
          },
          {
            "name": "Architectural Engineering"
          },
          {
            "name": "Electrical Engineering"
          },
          {
            "name": "Mechanical Engineering"
          },
          {
            "name": "Mechatronics Engineering"
          },
          {
            "name": "Computer Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Computer Science and Artificial Intelligence",
        "majors": [
          {
            "name": "Computer Science"
          },
          {
            "name": "Artificial Intelligence"
          },
          {
            "name": "Data Science"
          },
          {
            "name": "Cybersecurity"
          },
          {
            "name": "Information Systems"
          },
          {
            "name": "Software Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Public Relations and Business Administration",
        "majors": [
          {
            "name": "Public Relations"
          },
          {
            "name": "Business Administration"
          },
          {
            "name": "Marketing"
          },
          {
            "name": "Accounting"
          },
          {
            "name": "Finance"
          },
          {
            "name": "Human Resources"
          },
          {
            "name": "Digital Business"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Minya",
    "rating": 4.4,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@minyanationaluniversity.edu.eg",
    "phone": "+20 2 20002486"
  },
  {
    "id": 17,
    "name": "Lotus University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916512/Lotus_chkpnt.webp",
    "description": "Lotus University is a private university located in New Minya City, Egypt. It offers high-quality education through modern academic programs designed to meet international standards. The university focuses on practical training, scientific research, innovation, and developing graduates with the knowledge and skills required for the local and global job market. It provides a modern learning environment with advanced facilities and experienced faculty members.",
    "departments": [
      "Faculty of Engineering",
      "Faculty of Oral and Dental Medicine",
      "Faculty of Physical Therapy",
      "Faculty of Nursing",
      "Faculty of Computers, Information and Artificial Intelligence",
      "Faculty of Management, Economics and Political Science",
      "Faculty of Applied Health Sciences Technology"
    ],
    "faculties": [
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Civil Engineering"
          },
          {
            "name": "Architectural Engineering"
          },
          {
            "name": "Electrical Engineering"
          },
          {
            "name": "Mechanical Engineering"
          },
          {
            "name": "Mechatronics Engineering"
          },
          {
            "name": "Computer Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Oral and Dental Medicine",
        "majors": [
          {
            "name": "Oral and Dental Medicine"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Therapy",
        "majors": [
          {
            "name": "Physical Therapy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Nursing",
        "majors": [
          {
            "name": "Adult Nursing"
          },
          {
            "name": "Critical Care and Emergency Nursing"
          },
          {
            "name": "Maternal and Neonatal Health Nursing"
          },
          {
            "name": "Pediatric Nursing"
          },
          {
            "name": "Psychiatric and Mental Health Nursing"
          },
          {
            "name": "Community Health Nursing"
          },
          {
            "name": "Nursing Administration"
          },
          {
            "name": "Geriatric Nursing"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Computers, Information and Artificial Intelligence",
        "majors": [
          {
            "name": "Computer Science"
          },
          {
            "name": "Artificial Intelligence"
          },
          {
            "name": "Information Systems"
          },
          {
            "name": "Software Engineering"
          },
          {
            "name": "Cybersecurity"
          },
          {
            "name": "Data Science"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Management, Economics and Political Science",
        "majors": [
          {
            "name": "Business Administration"
          },
          {
            "name": "Accounting"
          },
          {
            "name": "Economics"
          },
          {
            "name": "Political Science"
          },
          {
            "name": "Marketing"
          },
          {
            "name": "Finance"
          },
          {
            "name": "Human Resources"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Applied Health Sciences Technology",
        "majors": [
          {
            "name": "Medical Laboratory Technology"
          },
          {
            "name": "Radiology and Medical Imaging Technology"
          },
          {
            "name": "Dental Prosthetics Technology"
          },
          {
            "name": "Biomedical Equipment Technology"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Minya",
    "rating": 4.3,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@lotusuniversity.edu.eg",
    "phone": "+20 2 20001657"
  },
  {
    "id": 18,
    "name": "South Valley University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784918363/Graduates36073-1200x800_w1ijie.jpg",
    "description": "South Valley University is one of Egypt's leading public universities, located in Qena. It became an independent university in 1995 after originally being a branch of Assiut University. The university serves a large region of Upper Egypt and is recognized for its strong academic programs, scientific research, community service, and practical education. It offers a wide range of undergraduate and postgraduate programs in medicine, engineering, agriculture, science, business, law, and many other fields.",
    "departments": [
      "Faculty of Medicine",
      "Faculty of Nursing",
      "Faculty of Engineering",
      "Faculty of Science",
      "Faculty of Agriculture",
      "Faculty of Veterinary Medicine",
      "Faculty of Education",
      "Faculty of Specific Education",
      "Faculty of Physical Education",
      "Faculty of Arts",
      "Faculty of Commerce",
      "Faculty of Law",
      "Faculty of Archaeology"
    ],
    "faculties": [
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "Medicine and Surgery"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Nursing",
        "majors": [
          {
            "name": "Nursing"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Civil Engineering"
          },
          {
            "name": "Architectural Engineering"
          },
          {
            "name": "Electrical Engineering"
          },
          {
            "name": "Mechanical Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Science",
        "majors": [
          {
            "name": "Mathematics"
          },
          {
            "name": "Physics"
          },
          {
            "name": "Chemistry"
          },
          {
            "name": "Botany"
          },
          {
            "name": "Zoology"
          },
          {
            "name": "Geology"
          },
          {
            "name": "Biochemistry"
          },
          {
            "name": "Microbiology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Agriculture",
        "majors": [
          {
            "name": "Plant Production"
          },
          {
            "name": "Animal Production"
          },
          {
            "name": "Food Science"
          },
          {
            "name": "Agricultural Engineering"
          },
          {
            "name": "Plant Protection"
          },
          {
            "name": "Agricultural Economics"
          },
          {
            "name": "Horticulture"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Veterinary Medicine",
        "majors": [
          {
            "name": "Veterinary Medicine"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Education",
        "majors": [
          {
            "name": "English Education"
          },
          {
            "name": "Arabic Education"
          },
          {
            "name": "Mathematics Education"
          },
          {
            "name": "Biology Education"
          },
          {
            "name": "Chemistry Education"
          },
          {
            "name": "Physics Education"
          },
          {
            "name": "Educational Psychology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Specific Education",
        "majors": [
          {
            "name": "Art Education"
          },
          {
            "name": "Music Education"
          },
          {
            "name": "Home Economics"
          },
          {
            "name": "Educational Technology"
          },
          {
            "name": "Educational Media"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Education",
        "majors": [
          {
            "name": "Physical Education"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Arts",
        "majors": [
          {
            "name": "Arabic Language"
          },
          {
            "name": "English Language"
          },
          {
            "name": "French Language"
          },
          {
            "name": "History"
          },
          {
            "name": "Geography"
          },
          {
            "name": "Sociology"
          },
          {
            "name": "Psychology"
          },
          {
            "name": "Philosophy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Commerce",
        "majors": [
          {
            "name": "Accounting"
          },
          {
            "name": "Business Administration"
          },
          {
            "name": "Economics"
          },
          {
            "name": "Statistics"
          },
          {
            "name": "Insurance"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Law",
        "majors": [
          {
            "name": "Law"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Archaeology",
        "majors": [
          {
            "name": "Egyptology"
          },
          {
            "name": "Islamic Archaeology"
          },
          {
            "name": "Restoration and Conservation of Antiquities"
          },
          {
            "name": "Museum Studies"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Assiut",
    "rating": 4.4,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@southvalleyuniversity.edu.eg",
    "phone": "+20 2 20002306"
  },
  {
    "id": 19,
    "name": "New Mansoura University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784918456/5tr49l9IkA5IYLNCPaZmrjA7cQlOETwUWLdh46C8_zqa9lt.jpg",
    "description": "New Mansoura University is a modern public national university located in New Mansoura City, Egypt. It was established in 2020 to provide high-quality education based on international standards. The university offers innovative academic programs in medicine, engineering, computer science, business, law, science, arts and design, and other fields. It focuses on scientific research, practical training, digital transformation, and preparing graduates with the skills needed for the local and global job market.",
    "departments": [
      "Faculty of Medicine",
      "Faculty of Dentistry",
      "Faculty of Pharmacy",
      "Faculty of Nursing",
      "Faculty of Engineering",
      "Faculty of Computer Science",
      "Faculty of Business",
      "Faculty of Science",
      "Faculty of International Legal Transactions",
      "Faculty of Arts and Design"
    ],
    "faculties": [
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "Medicine and Surgery"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Dentistry",
        "majors": [],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "PharmD"
          },
          {
            "name": "Clinical Pharmacy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Nursing",
        "majors": [
          {
            "name": "Nursing"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Civil Engineering"
          },
          {
            "name": "Architectural Engineering"
          },
          {
            "name": "Mechanical Engineering"
          },
          {
            "name": "Electrical Engineering"
          },
          {
            "name": "Mechatronics Engineering"
          },
          {
            "name": "Biomedical Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Computer Science",
        "majors": [
          {
            "name": "Computer Science"
          },
          {
            "name": "Artificial Intelligence"
          },
          {
            "name": "Cybersecurity"
          },
          {
            "name": "Data Science"
          },
          {
            "name": "Software Engineering"
          },
          {
            "name": "Information Systems"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Business",
        "majors": [
          {
            "name": "Business Administration"
          },
          {
            "name": "Accounting"
          },
          {
            "name": "Finance"
          },
          {
            "name": "Marketing"
          },
          {
            "name": "Economics"
          },
          {
            "name": "Business Information Systems"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Science",
        "majors": [
          {
            "name": "Biotechnology"
          },
          {
            "name": "Molecular Biology"
          },
          {
            "name": "Biochemistry"
          },
          {
            "name": "Biotechnology and Molecular Diagnostics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of International Legal Transactions",
        "majors": [
          {
            "name": "International Legal Transaction"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Arts and Design",
        "majors": [
          {
            "name": "Interior Design"
          },
          {
            "name": "Graphic Design"
          },
          {
            "name": "Digital Media"
          },
          {
            "name": "Fashion Design"
          },
          {
            "name": "Product Design"
          },
          {
            "name": "Animation and Multimedia"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Mansoura",
    "rating": 4.6,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@newmansourauniversity.edu.eg",
    "phone": "+20 2 20002290"
  },
  {
    "id": 20,
    "name": "Sohag University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916520/Sohag_p8tl4a.jpg",
    "description": "Sohag University is a leading public university in Upper Egypt, established in 2006 as an independent university after separating from South Valley University. Located in Sohag Governorate, it offers a wide range of undergraduate and postgraduate programs in medicine, engineering, pharmacy, science, agriculture, law, business, and many other disciplines. The university is committed to academic excellence, scientific research, community service, and preparing graduates with the knowledge and practical skills needed for the modern workforce.",
    "departments": [
      "Faculty of Medicine",
      "Faculty of Nursing",
      "Faculty of Pharmacy",
      "Faculty of Engineering",
      "Faculty of Science",
      "Faculty of Agriculture",
      "Faculty of Veterinary Medicine",
      "Faculty of Education",
      "Faculty of Arts",
      "Faculty of Commerce",
      "Faculty of Law",
      "Faculty of Archaeology",
      "Faculty of Industrial Education",
      "Faculty of Physical Education",
      "Faculty of Al-Alsun (Faculty of Languages)",
      "Faculty of Computers and Artificial Intelligence"
    ],
    "faculties": [
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "Medicine and Surgery"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Nursing",
        "majors": [
          {
            "name": "Nursing"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "PharmD"
          },
          {
            "name": "Clinical Pharmacy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Civil Engineering"
          },
          {
            "name": "Architectural Engineering"
          },
          {
            "name": "Electrical Engineering"
          },
          {
            "name": "Mechanical Engineering"
          },
          {
            "name": "Computer Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Science",
        "majors": [
          {
            "name": "Mathematics"
          },
          {
            "name": "Physics"
          },
          {
            "name": "Chemistry"
          },
          {
            "name": "Botany"
          },
          {
            "name": "Zoology"
          },
          {
            "name": "Geology"
          },
          {
            "name": "Biochemistry"
          },
          {
            "name": "Microbiology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Agriculture",
        "majors": [
          {
            "name": "Agricultural Sciences"
          },
          {
            "name": "Plant Production"
          },
          {
            "name": "Animal Production"
          },
          {
            "name": "Food Science"
          },
          {
            "name": "Agricultural Engineering"
          },
          {
            "name": "Plant Protection"
          },
          {
            "name": "Horticulture"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Veterinary Medicine",
        "majors": [
          {
            "name": "Veterinary Medicine"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Education",
        "majors": [
          {
            "name": "English Education"
          },
          {
            "name": "Arabic Education"
          },
          {
            "name": "Mathematics Education"
          },
          {
            "name": "Science Education"
          },
          {
            "name": "Biology Education"
          },
          {
            "name": "Chemistry Education"
          },
          {
            "name": "Physics Education"
          },
          {
            "name": "Educational Psychology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Arts",
        "majors": [
          {
            "name": "Arabic Language"
          },
          {
            "name": "English Language"
          },
          {
            "name": "French Language"
          },
          {
            "name": "History"
          },
          {
            "name": "Geography"
          },
          {
            "name": "Sociology"
          },
          {
            "name": "Psychology"
          },
          {
            "name": "Philosophy"
          },
          {
            "name": "Media and Communication"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Commerce",
        "majors": [
          {
            "name": "Accounting"
          },
          {
            "name": "Business Administration"
          },
          {
            "name": "Economics"
          },
          {
            "name": "Statistics"
          },
          {
            "name": "Insurance"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Law",
        "majors": [
          {
            "name": "Law"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Archaeology",
        "majors": [
          {
            "name": "Egyptology"
          },
          {
            "name": "Islamic Archaeology"
          },
          {
            "name": "Restoration and Conservation of Antiquities"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Industrial Education",
        "majors": [
          {
            "name": "Mechanical Industries"
          },
          {
            "name": "Electrical Industries"
          },
          {
            "name": "Architectural Industries"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Education",
        "majors": [
          {
            "name": "Physical Education"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Al-Alsun (Faculty of Languages)",
        "majors": [
          {
            "name": "English Language"
          },
          {
            "name": "German Language"
          },
          {
            "name": "French Language"
          },
          {
            "name": "Spanish Language"
          },
          {
            "name": "Chinese Language"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Computers and Artificial Intelligence",
        "majors": [
          {
            "name": "Computer Science"
          },
          {
            "name": "Artificial Intelligence"
          },
          {
            "name": "Information Systems"
          },
          {
            "name": "Data Science"
          },
          {
            "name": "Cybersecurity"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Sohag",
    "rating": 4.2,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@sohaguniversity.edu.eg",
    "phone": "+20 2 20001620"
  },
  {
    "id": 21,
    "name": "Sohag National University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916520/Sohag_p8tl4a.jpg",
    "description": "Sohag National University is a modern public national university located in New Sohag City, Egypt. Established to support Egypt's national universities initiative, it provides high-quality education based on international standards. The university offers advanced academic programs in medicine, engineering, computer science and artificial intelligence, pharmacy, business, media, and other fields. It emphasizes practical training, scientific research, innovation, digital transformation, and preparing graduates to meet the demands of both the local and global job markets.",
    "departments": [
      "Faculty of Medicine",
      "Faculty of Dentistry",
      "Faculty of Pharmacy",
      "Faculty of Nursing",
      "Faculty of Engineering",
      "Faculty of Computer Science and Artificial Intelligence",
      "Faculty of Science",
      "Faculty of Languages and Humanities",
      "Faculty of Media",
      "Faculty of Business Administration",
      "Faculty of Applied Health Sciences Technology"
    ],
    "faculties": [
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "Medicine and Surgery"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Dentistry",
        "majors": [
          {
            "name": "Oral and Dental Medicine"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "PharmD"
          },
          {
            "name": "Clinical Pharmacy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Nursing",
        "majors": [
          {
            "name": "Nursing"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Civil Engineering"
          },
          {
            "name": "Architectural Engineering"
          },
          {
            "name": "Electrical Engineering"
          },
          {
            "name": "Mechanical Engineering"
          },
          {
            "name": "Mechatronics Engineering"
          },
          {
            "name": "Computer Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Computer Science and Artificial Intelligence",
        "majors": [
          {
            "name": "Computer Science"
          },
          {
            "name": "Artificial Intelligence"
          },
          {
            "name": "Data Science"
          },
          {
            "name": "Cybersecurity"
          },
          {
            "name": "Information Systems"
          },
          {
            "name": "Software Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Science",
        "majors": [
          {
            "name": "Biotechnology"
          },
          {
            "name": "Biochemistry"
          },
          {
            "name": "Molecular Biology"
          },
          {
            "name": "Applied Chemistry"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Languages and Humanities",
        "majors": [
          {
            "name": "English Language"
          },
          {
            "name": "French Language"
          },
          {
            "name": "Translation"
          },
          {
            "name": "Psychology"
          },
          {
            "name": "Sociology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Media",
        "majors": [
          {
            "name": "Journalism"
          },
          {
            "name": "Radio and Television"
          },
          {
            "name": "Public Relations"
          },
          {
            "name": "Digital Media"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Business Administration",
        "majors": [
          {
            "name": "Business Administration"
          },
          {
            "name": "Accounting"
          },
          {
            "name": "Finance"
          },
          {
            "name": "Marketing"
          },
          {
            "name": "Economics"
          },
          {
            "name": "Human Resources"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Applied Health Sciences Technology",
        "majors": [
          {
            "name": "Medical Laboratory Technology"
          },
          {
            "name": "Radiology and Medical Imaging Technology"
          },
          {
            "name": "Dental Prosthetics Technology"
          },
          {
            "name": "Biomedical Equipment Technology"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Sohag",
    "rating": 5,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@sohagnationaluniversity.edu.eg",
    "phone": "+20 2 20002474"
  },
  {
    "id": 22,
    "name": "Merit University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784918922/Screenshot-2026-01-03-090852_mqkjys.webp",
    "description": "Merit University is a private university located in New Sohag City, Egypt. It was established to provide high-quality education that meets international academic standards. The university offers modern programs in medicine, dentistry, engineering, computing and artificial intelligence, business, media, tourism, and other disciplines. Merit University emphasizes practical training, scientific research, innovation, and preparing graduates with the skills needed to succeed in both the local and international job markets.",
    "departments": [
      "Faculty of Medicine",
      "Faculty of Oral and Dental Medicine",
      "Faculty of Physical Therapy",
      "Faculty of Pharmacy",
      "Faculty of Nursing",
      "Faculty of Engineering",
      "Faculty of Computing and Artificial Intelligence",
      "Faculty of Business Administration and Economics",
      "Faculty of Languages and Translation",
      "Faculty of Tourism and Hotel Management",
      "Faculty of Mass Communication",
      "Faculty of Political Science"
    ],
    "faculties": [
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "Medicine and Surgery"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Oral and Dental Medicine",
        "majors": [
          {
            "name": "Oral and Dental Medicine"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Therapy",
        "majors": [
          {
            "name": "Physical Therapy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "PharmD"
          },
          {
            "name": "Clinical Pharmacy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Nursing",
        "majors": [
          {
            "name": "Nursing"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Civil Engineering"
          },
          {
            "name": "Architectural Engineering"
          },
          {
            "name": "Mechanical Engineering"
          },
          {
            "name": "Electrical Engineering"
          },
          {
            "name": "Mechatronics Engineering"
          },
          {
            "name": "Computer Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Computing and Artificial Intelligence",
        "majors": [
          {
            "name": "Computer Science"
          },
          {
            "name": "Artificial Intelligence"
          },
          {
            "name": "Data Science"
          },
          {
            "name": "Cybersecurity"
          },
          {
            "name": "Software Engineering"
          },
          {
            "name": "Information Systems"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Business Administration and Economics",
        "majors": [
          {
            "name": "Business Administration"
          },
          {
            "name": "Accounting"
          },
          {
            "name": "Economics"
          },
          {
            "name": "Finance"
          },
          {
            "name": "Marketing"
          },
          {
            "name": "Human Resources"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Languages and Translation",
        "majors": [
          {
            "name": "English Language and Translation"
          },
          {
            "name": "French Language and Translation"
          },
          {
            "name": "German Language and Translation"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Tourism and Hotel Management",
        "majors": [
          {
            "name": "Tourism Studies"
          },
          {
            "name": "Hotel Management"
          },
          {
            "name": "Tourism Guidance"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Mass Communication",
        "majors": [
          {
            "name": "Journalism"
          },
          {
            "name": "Radio and Television"
          },
          {
            "name": "Public Relations and Advertising"
          },
          {
            "name": "Digital Media"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Political Science",
        "majors": [
          {
            "name": "Political Science"
          },
          {
            "name": "International Relations"
          },
          {
            "name": "Public Administration"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Sohag",
    "rating": 4.8,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@merituniversity.edu.eg",
    "phone": "+20 2 20001635"
  },
  {
    "id": 23,
    "name": "Assiut University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916508/assiut_vzrohl.png",
    "description": "Assiut University is one of the oldest and largest public universities in Egypt. It was established in 1957 as the first university in Upper Egypt. The university offers a wide range of undergraduate and postgraduate programs in medicine, engineering, science, business, humanities, and many other fields. Assiut University is committed to academic excellence, scientific research, innovation, and community service, providing students with a high-quality educational environment that prepares them for both local and international career opportunities.",
    "departments": [
      "Faculty of Medicine",
      "Faculty of Dentistry",
      "Faculty of Pharmacy",
      "Faculty of Engineering",
      "Faculty of Computers and Information",
      "Faculty of Science",
      "Faculty of Commerce",
      "Faculty of Law",
      "Faculty of Agriculture",
      "Faculty of Veterinary Medicine",
      "Faculty of Nursing",
      "Faculty of Arts",
      "Faculty of Technology and Sugar Industry",
      "Faculty of Early Childhood Education",
      "Faculty of Fine Arts",
      "Faculty of Specific Education",
      "Faculty of Physical Education",
      "Faculty of Education"
    ],
    "faculties": [
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "Anatomy"
          },
          {
            "name": "Physiology"
          },
          {
            "name": "Biochemistry"
          },
          {
            "name": "Pathology"
          },
          {
            "name": "Pharmacology"
          },
          {
            "name": "Microbiology"
          },
          {
            "name": "Internal Medicine"
          },
          {
            "name": "General Surgery"
          },
          {
            "name": "Pediatrics"
          },
          {
            "name": "Obstetrics and Gynecology"
          },
          {
            "name": "Orthopedics"
          },
          {
            "name": "Ophthalmology"
          },
          {
            "name": "ENT"
          },
          {
            "name": "Psychiatry"
          },
          {
            "name": "Dermatology"
          },
          {
            "name": "Radiology"
          },
          {
            "name": "Cardiology"
          },
          {
            "name": "Neurology"
          },
          {
            "name": "Family Medicine"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Dentistry",
        "majors": [
          {
            "name": "Oral Medicine and Periodontology"
          },
          {
            "name": "Conservative Dentistry"
          },
          {
            "name": "Endodontics"
          },
          {
            "name": "Prosthodontics"
          },
          {
            "name": "Orthodontics"
          },
          {
            "name": "Oral and Maxillofacial Surgery"
          },
          {
            "name": "Pediatric Dentistry"
          },
          {
            "name": "Oral Biology"
          },
          {
            "name": "Oral Pathology"
          },
          {
            "name": "Biomaterials"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "Pharmaceutics"
          },
          {
            "name": "Pharmacognosy"
          },
          {
            "name": "Pharmaceutical Chemistry"
          },
          {
            "name": "Clinical Pharmacy"
          },
          {
            "name": "Pharmacology and Toxicology"
          },
          {
            "name": "Microbiology"
          },
          {
            "name": "Biochemistry"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Civil Engineering"
          },
          {
            "name": "Electrical Engineering"
          },
          {
            "name": "Mechanical Engineering"
          },
          {
            "name": "Architectural Engineering"
          },
          {
            "name": "Mining and Metallurgical Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Computers and Information",
        "majors": [
          {
            "name": "Computer Science (CS)"
          },
          {
            "name": "Information Systems (IS)"
          },
          {
            "name": "Information Technology (IT)"
          },
          {
            "name": "Artificial Intelligence (AI)"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Science",
        "majors": [
          {
            "name": "Mathematics"
          },
          {
            "name": "Physics"
          },
          {
            "name": "Chemistry"
          },
          {
            "name": "Botany"
          },
          {
            "name": "Zoology"
          },
          {
            "name": "Geology"
          },
          {
            "name": "Microbiology"
          },
          {
            "name": "Biochemistry"
          },
          {
            "name": "Computer Science"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Commerce",
        "majors": [
          {
            "name": "Accounting"
          },
          {
            "name": "Business Administration"
          },
          {
            "name": "Economics"
          },
          {
            "name": "Statistics"
          },
          {
            "name": "Insurance"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Law",
        "majors": [
          {
            "name": "Public Law"
          },
          {
            "name": "Private Law"
          },
          {
            "name": "Criminal Law"
          },
          {
            "name": "Civil Law"
          },
          {
            "name": "Commercial Law"
          },
          {
            "name": "International Law"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Agriculture",
        "majors": [
          {
            "name": "Plant Production"
          },
          {
            "name": "Animal Production"
          },
          {
            "name": "Agricultural Engineering"
          },
          {
            "name": "Food Science"
          },
          {
            "name": "Plant Protection"
          },
          {
            "name": "Soil and Water Sciences"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Veterinary Medicine",
        "majors": [
          {
            "name": "Animal Medicine"
          },
          {
            "name": "Surgery"
          },
          {
            "name": "Poultry Diseases"
          },
          {
            "name": "Food Hygiene"
          },
          {
            "name": "Parasitology"
          },
          {
            "name": "Pathology"
          },
          {
            "name": "Pharmacology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Nursing",
        "majors": [
          {
            "name": "Medical-Surgical Nursing"
          },
          {
            "name": "Pediatric Nursing"
          },
          {
            "name": "Critical Care Nursing"
          },
          {
            "name": "Community Health Nursing"
          },
          {
            "name": "Obstetrics and Gynecological Nursing"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Arts",
        "majors": [
          {
            "name": "Arabic Language"
          },
          {
            "name": "English Language"
          },
          {
            "name": "French Language"
          },
          {
            "name": "History"
          },
          {
            "name": "Geography"
          },
          {
            "name": "Sociology"
          },
          {
            "name": "Psychology"
          },
          {
            "name": "Philosophy"
          },
          {
            "name": "Media"
          },
          {
            "name": "Library and Information Science"
          },
          {
            "name": "Islamic Studies"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Technology and Sugar Industry",
        "majors": [
          {
            "name": "Sugar Industry Technology"
          },
          {
            "name": "Food Technology"
          },
          {
            "name": "Industrial Technology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Early Childhood Education",
        "majors": [
          {
            "name": "Kindergarten Education"
          },
          {
            "name": "Child Psychology"
          },
          {
            "name": "Curriculum & Teaching Methods"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Fine Arts",
        "majors": [
          {
            "name": "Architecture"
          },
          {
            "name": "Decoration"
          },
          {
            "name": "Graphics"
          },
          {
            "name": "Sculpture"
          },
          {
            "name": "Painting"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Specific Education",
        "majors": [
          {
            "name": "Art Education"
          },
          {
            "name": "Music Education"
          },
          {
            "name": "Home Economics"
          },
          {
            "name": "Educational Technology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Education",
        "majors": [
          {
            "name": "Curriculum & Teaching Methods"
          },
          {
            "name": "Sports Training"
          },
          {
            "name": "Sports Management"
          },
          {
            "name": "Recreation"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Education",
        "majors": [
          {
            "name": "Curriculum & Instruction"
          },
          {
            "name": "Educational Psychology"
          },
          {
            "name": "Foundations of Education"
          },
          {
            "name": "Educational Administration"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Assiut",
    "rating": 4.2,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@assiutuniversity.edu.eg",
    "phone": "+20 2 20001755"
  },
  {
    "id": 24,
    "name": "South Valley National University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916519/Southvalley_ybhzdu.jpg",
    "description": "South Valley National University is a modern public national university located in Qena, Egypt. Established to provide high-quality education based on international academic standards, the university offers innovative programs in medicine, dentistry, pharmacy, engineering, computer science and artificial intelligence, administrative sciences, and languages. It focuses on practical training, scientific research, innovation, digital transformation, and preparing graduates with the skills needed to compete in both the local and global job markets.",
    "departments": [
      "Faculty of Dentistry",
      "Faculty of Pharmacy",
      "Faculty of Physical Therapy",
      "Faculty of Nursing",
      "Faculty of Engineering",
      "Faculty of Computer Science and Artificial Intelligence",
      "Faculty of Administrative Sciences",
      "Faculty of Languages and Humanities",
      "Faculty of Medicin"
    ],
    "faculties": [
      {
        "name": "Faculty of Dentistry",
        "majors": [
          {
            "name": "Oral and Dental Medicin"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "PharmD"
          },
          {
            "name": "Clinical Pharmacy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Therapy",
        "majors": [
          {
            "name": "Physical Therapy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Nursing",
        "majors": [
          {
            "name": "Nursing"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Civil Engineering"
          },
          {
            "name": "Architectural Engineering"
          },
          {
            "name": "Electrical Engineering"
          },
          {
            "name": "Mechanical Engineering"
          },
          {
            "name": "Mechatronics Engineering"
          },
          {
            "name": "Computer Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Computer Science and Artificial Intelligence",
        "majors": [
          {
            "name": "Computer Science"
          },
          {
            "name": "Artificial Intelligence"
          },
          {
            "name": "Data Science"
          },
          {
            "name": "Cybersecurity"
          },
          {
            "name": "Software Engineering"
          },
          {
            "name": "Information Systems"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Administrative Sciences",
        "majors": [
          {
            "name": "Business Administration"
          },
          {
            "name": "Accounting"
          },
          {
            "name": "Finance"
          },
          {
            "name": "Marketing"
          },
          {
            "name": "Economics"
          },
          {
            "name": "Human Resources"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Languages and Humanities",
        "majors": [
          {
            "name": "English Language"
          },
          {
            "name": "French Language"
          },
          {
            "name": "Translation"
          },
          {
            "name": "Psychology"
          },
          {
            "name": "Sociology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Medicin",
        "majors": [
          {
            "name": "Medicine and Surgery"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Qena",
    "rating": 4.3,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@southvalleynationaluniversity.edu.eg",
    "phone": "+20 2 20003160"
  },
  {
    "id": 25,
    "name": "Assiut National University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916508/assiutnational_trzuay.jpg",
    "description": "Assiut National University is a modern public national university in Egypt, established to provide high-quality education that meets international standards. The university offers innovative academic programs in medicine, engineering, computer science, business, languages, and applied sciences. It focuses on scientific research, digital transformation, practical training, and preparing graduates with the skills needed for the local and global job markets.",
    "departments": [
      "Faculty of Medicine",
      "Faculty of Dentistry",
      "Faculty of Pharmacy and Applied Pharmaceutical Sciences",
      "Faculty of Engineering and Applied Sciences",
      "Faculty of Computers and Artificial Intelligence",
      "Faculty of Administrative and Financial Sciences",
      "Faculty of Al-Alsun and Applied Languages",
      "Faculty of Science and Technology"
    ],
    "faculties": [
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "Medicine and Surgery"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Dentistry",
        "majors": [
          {
            "name": "Dentistry"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy and Applied Pharmaceutical Sciences",
        "majors": [
          {
            "name": "PharmD"
          },
          {
            "name": "Clinical Pharmacy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering and Applied Sciences",
        "majors": [
          {
            "name": "Civil Engineering"
          },
          {
            "name": "Architectural Engineering"
          },
          {
            "name": "Electrical Engineering"
          },
          {
            "name": "Mechanical Engineering"
          },
          {
            "name": "Mechatronics Engineering"
          },
          {
            "name": "Computer Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Computers and Artificial Intelligence",
        "majors": [
          {
            "name": "Computer Science"
          },
          {
            "name": "Artificial Intelligence"
          },
          {
            "name": "Data Science"
          },
          {
            "name": "Cybersecurity"
          },
          {
            "name": "Software Engineering"
          },
          {
            "name": "Information Systems"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Administrative and Financial Sciences",
        "majors": [
          {
            "name": "Accounting"
          },
          {
            "name": "Business Administration"
          },
          {
            "name": "Finance"
          },
          {
            "name": "Marketing"
          },
          {
            "name": "Economics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Al-Alsun and Applied Languages",
        "majors": [
          {
            "name": "English Language"
          },
          {
            "name": "French Language"
          },
          {
            "name": "German Language"
          },
          {
            "name": "Spanish Language"
          },
          {
            "name": "Chinese Language"
          },
          {
            "name": "Translation"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Science and Technology",
        "majors": [
          {
            "name": "Biotechnology"
          },
          {
            "name": "Applied Chemistry"
          },
          {
            "name": "Applied Physics"
          },
          {
            "name": "Environmental Science"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Assiut",
    "rating": 5,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@assiutnationaluniversity.edu.eg",
    "phone": "+20 2 20002609"
  },
  {
    "id": 26,
    "name": "Fayoum University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784919276/Fayoum-University_qebpls.webp",
    "description": "Fayoum University is a public Egyptian university located in Fayoum Governorate, Egypt. It is an educational, scientific, and research institution that offers a wide range of academic programs across different fields. The university focuses on providing high-quality education, scientific research, innovation, community service, digital transformation, and sustainable development. Its mission is to prepare qualified graduates who can develop critical thinking and creativity and compete effectively in the labor market.",
    "departments": [
      "Faculty of Education",
      "Faculty of Agriculture",
      "Faculty of Engineering",
      "Faculty of Social Work",
      "Faculty of Dar Al Uloom",
      "Faculty of Science",
      "Faculty of Tourism and Hotels",
      "Faculty of Specific Education",
      "Faculty of Archaeology",
      "Faculty of Medicine",
      "Faculty of Arts",
      "Faculty of Computers and Artificial Intelligence",
      "Faculty of Early Childhood Education",
      "Faculty of Nursing",
      "Faculty of Dentistry",
      "Faculty of Pharmacy",
      "Faculty of Law",
      "Faculty of Sports Sciences",
      "Faculty of Al-Alsun (Languages)"
    ],
    "faculties": [
      {
        "name": "Faculty of Education",
        "majors": [
          {
            "name": "Arabic Language"
          },
          {
            "name": "English Language"
          },
          {
            "name": "French Language"
          },
          {
            "name": "History"
          },
          {
            "name": "Geography"
          },
          {
            "name": "Philosophy and Sociology"
          },
          {
            "name": "Psychology"
          },
          {
            "name": "Chemistry"
          },
          {
            "name": "Physics"
          },
          {
            "name": "Biology and Geology"
          },
          {
            "name": "Mathematics"
          },
          {
            "name": "Basic Education"
          },
          {
            "name": "Special Education"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Agriculture",
        "majors": [
          {
            "name": "Agricultural Economics"
          },
          {
            "name": "Agricultural Engineering"
          },
          {
            "name": "Agronomy"
          },
          {
            "name": "Animal Production"
          },
          {
            "name": "Food Science and Technology"
          },
          {
            "name": "Horticulture"
          },
          {
            "name": "Plant Protection"
          },
          {
            "name": "Soil and Water Sciences"
          },
          {
            "name": "Genetics"
          },
          {
            "name": "Biotechnology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Civil Engineering"
          },
          {
            "name": "Architectural Engineering"
          },
          {
            "name": "Electrical Engineering"
          },
          {
            "name": "Mechanical Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Social Work",
        "majors": [
          {
            "name": "Social Work"
          },
          {
            "name": "Social Casework"
          },
          {
            "name": "Group Work"
          },
          {
            "name": "Community Organization"
          },
          {
            "name": "Social Planning"
          },
          {
            "name": "Fields of Social Work"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Dar Al Uloom",
        "majors": [
          {
            "name": "Arabic Language and Literature"
          },
          {
            "name": "Islamic Studies"
          },
          {
            "name": "Islamic Philosophy"
          },
          {
            "name": "History and Islamic Civilization"
          },
          {
            "name": "Linguistics"
          },
          {
            "name": "Rhetoric and Literary Criticism"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Science",
        "majors": [
          {
            "name": "Mathematics"
          },
          {
            "name": "Physics"
          },
          {
            "name": "Chemistry"
          },
          {
            "name": "Geology"
          },
          {
            "name": "Botany"
          },
          {
            "name": "Zoology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Tourism and Hotels",
        "majors": [
          {
            "name": "Tourism Studies"
          },
          {
            "name": "Hotel Studies"
          },
          {
            "name": "Tourist Guidance"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Specific Education",
        "majors": [
          {
            "name": "Art Education"
          },
          {
            "name": "Music Education"
          },
          {
            "name": "Home Economics"
          },
          {
            "name": "Educational Technology"
          },
          {
            "name": "Media Education"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Archaeology",
        "majors": [
          {
            "name": "Egyptian Archaeology"
          },
          {
            "name": "Islamic Archaeology"
          },
          {
            "name": "Restoration of Antiquities"
          },
          {
            "name": "Archaeological Excavation and Conservation"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "Medicine and Surgery"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Arts",
        "majors": [
          {
            "name": "Arabic Language and Literature"
          },
          {
            "name": "English Language and Literature"
          },
          {
            "name": "French Language and Literature"
          },
          {
            "name": "History"
          },
          {
            "name": "Geography"
          },
          {
            "name": "Sociology"
          },
          {
            "name": "Psychology"
          },
          {
            "name": "Philosophy"
          },
          {
            "name": "Library and Information Science"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Computers and Artificial Intelligence",
        "majors": [
          {
            "name": "Computer Science"
          },
          {
            "name": "Information Systems"
          },
          {
            "name": "Artificial Intelligence"
          },
          {
            "name": "Information Technology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Early Childhood Education",
        "majors": [
          {
            "name": "Early Childhood Education"
          },
          {
            "name": "Kindergarten Education"
          },
          {
            "name": "Child Psychology"
          },
          {
            "name": "Child Health and Nutrition"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Nursing",
        "majors": [
          {
            "name": "Medical-Surgical Nursing"
          },
          {
            "name": "Pediatric Nursing"
          },
          {
            "name": "Obstetric and Gynecological Nursing"
          },
          {
            "name": "Community Health Nursing"
          },
          {
            "name": "Psychiatric and Mental Health Nursing"
          },
          {
            "name": "Critical Care and Emergency Nursing"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Dentistry",
        "majors": [
          {
            "name": "Oral and Dental Medicine and Surgery"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "Pharmaceutical Sciences"
          },
          {
            "name": "Clinical Pharmacy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Law",
        "majors": [
          {
            "name": "Public Law"
          },
          {
            "name": "Private Law"
          },
          {
            "name": "Criminal Law"
          },
          {
            "name": "Civil Law"
          },
          {
            "name": "Commercial Law"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Sports Sciences",
        "majors": [
          {
            "name": "Sports Training"
          },
          {
            "name": "Sports Management and Recreation"
          },
          {
            "name": "Physical Education"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Al-Alsun (Languages)",
        "majors": [
          {
            "name": "English Language"
          },
          {
            "name": "French Language"
          },
          {
            "name": "German Language"
          },
          {
            "name": "Spanish Language"
          },
          {
            "name": "Italian Language"
          },
          {
            "name": "Chinese Language"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Fayoum",
    "rating": 4.3,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@fayoumuniversity.edu.eg",
    "phone": "+20 2 20001747"
  },
  {
    "id": 27,
    "name": "Fayoum National University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916511/Fayoumnational_h5djcn.jpg",
    "description": "Fayoum National University is a private national university located in Fayoum, Egypt. It offers a range of academic programs across various fields, including medicine, dentistry, pharmacy, engineering, computer science, artificial intelligence, and other disciplines. The university aims to provide high-quality education and develop students’ academic, practical, and professional skills to prepare them for the future job market.",
    "departments": [
      "Faculty of Medicine",
      "Faculty of Oral and Dental Medicine and Surgery",
      "Faculty of Engineering",
      "Faculty of Computers, Information and Artificial Intelligence",
      "Faculty of Nursing",
      "Faculty of Science",
      "Faculty of Languages and Humanities"
    ],
    "faculties": [
      {
        "name": "Faculty of Medicine",
        "majors": [],
        "annualFee": "135,000"
      },
      {
        "name": "Faculty of Oral and Dental Medicine and Surgery",
        "majors": [],
        "annualFee": "115,000"
      },
      {
        "name": "Faculty of Engineering",
        "majors": [],
        "annualFee": "65,000"
      },
      {
        "name": "Faculty of Computers, Information and Artificial Intelligence",
        "majors": [],
        "annualFee": "65,000"
      },
      {
        "name": "Faculty of Nursing",
        "majors": [],
        "annualFee": "55,000"
      },
      {
        "name": "Faculty of Science",
        "majors": [],
        "annualFee": "50,000"
      },
      {
        "name": "Faculty of Languages and Humanities",
        "majors": [],
        "annualFee": "40,000"
      }
    ],
    "location": "Fayoum",
    "rating": 4.2,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@fayoumnationaluniversity.edu.eg",
    "phone": "+20 2 20002601"
  },
  {
    "id": 28,
    "name": "Nile Valley University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916517/NIleValley_f0qf9q.jpg",
    "description": "Wadi El Nile University is a higher education institution located in Fayoum, Egypt. The university aims to provide students with quality education and develop their academic and practical skills through various educational programs and fields of study. It prepares graduates with the knowledge and skills needed to pursue their future careers and contribute to society.",
    "departments": [
      "Faculty of Oral and Dental Medicine",
      "Faculty of Pharmacy",
      "Faculty of Applied Health Sciences Technology",
      "Faculty of Nursing"
    ],
    "faculties": [
      {
        "name": "Faculty of Oral and Dental Medicine",
        "majors": [
          {
            "name": "Oral and Dental Medicine and Surgery"
          }
        ],
        "annualFee": "139,000"
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "Clinical Pharmacy and Pharmaceutical Manufacturing"
          }
        ],
        "annualFee": "110,000"
      },
      {
        "name": "Faculty of Applied Health Sciences Technology",
        "majors": [
          {
            "name": "Medical Laboratory Technology"
          },
          {
            "name": "Radiology and Medical Imaging Technology"
          },
          {
            "name": "Respiratory Care Technology"
          },
          {
            "name": "Dental Prosthetics Manufacturing Technology"
          }
        ],
        "annualFee": "56,000"
      },
      {
        "name": "Faculty of Nursing",
        "majors": [],
        "annualFee": "58,000"
      }
    ],
    "location": "Fayoum",
    "rating": 4.9,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@nilevalleyuniversity.edu.eg",
    "phone": "+20 2 20002167"
  },
  {
    "id": 29,
    "name": "Sinai University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916519/Sinai_jhqscg.jpg",
    "description": "Sinai University is a private university in Egypt with campuses in Arish and El Qantara. It offers a wide range of academic programs across various fields, including medicine, dentistry, pharmacy, engineering, computer science, business, and other disciplines. The university aims to provide high-quality education and prepare students with the academic knowledge and practical skills needed for their future careers.",
    "departments": [
      "Faculty of Dentistry",
      "Faculty of Pharmacy",
      "Faculty of Physical Therapy",
      "Faculty of Engineering",
      "Faculty of Information Technology and Computer Science",
      "Faculty of Business Administration - BIS",
      "Faculty of Mass Communication",
      "Faculty of Biotechnology"
    ],
    "faculties": [
      {
        "name": "Faculty of Dentistry",
        "majors": [
          {
            "name": "Dental Surgery"
          }
        ],
        "annualFee": "(Qantra Campuss)223,000-(Arish Campus) 214,500"
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "Pharmacy (Pharm D)"
          }
        ],
        "annualFee": "(Qantra Campuss)165,000 -(Arish Campus)149,000"
      },
      {
        "name": "Faculty of Physical Therapy",
        "majors": [
          {
            "name": "Physical Therapy"
          }
        ],
        "annualFee": "(Qantra Campuss)149,000-(Arish Campus)"
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Civil Engineering"
          },
          {
            "name": "Architectural Engineering"
          },
          {
            "name": "Architectural and Interior Design"
          },
          {
            "name": "Urban and City Planning"
          },
          {
            "name": "Electrical and Computer Engineering"
          },
          {
            "name": "Electronics and Communication Engineering"
          },
          {
            "name": "Computer and Control Engineering"
          },
          {
            "name": "Electrical Power and Machines Engineering"
          },
          {
            "name": "Communication and Information Engineering"
          },
          {
            "name": "Mechanical Engineering"
          },
          {
            "name": "Mechanical Power Engineering"
          },
          {
            "name": "Mechatronics Engineering"
          },
          {
            "name": "Design and Production Engineering"
          },
          {
            "name": "Biomedical Engineering"
          }
        ],
        "annualFee": "(Qantra Campuss)63,000-(Arish Campus)69,500"
      },
      {
        "name": "Faculty of Information Technology and Computer Science",
        "majors": [
          {
            "name": "Computer Science and Software Engineering"
          },
          {
            "name": "Information and Decision Support Systems"
          },
          {
            "name": "Information Technology"
          }
        ],
        "annualFee": "(Qantra Campuss)94,000-(Arish Campus) 83,500"
      },
      {
        "name": "Faculty of Business Administration - BIS",
        "majors": [
          {
            "name": "Management"
          },
          {
            "name": "Accounting"
          },
          {
            "name": "Marketing"
          },
          {
            "name": "Finance and Investment"
          },
          {
            "name": "Business Information Systems (BIS)"
          }
        ],
        "annualFee": "(Qantra Campuss) 61,500"
      },
      {
        "name": "Faculty of Mass Communication",
        "majors": [
          {
            "name": "News Journalism"
          },
          {
            "name": "Radio and Television Production"
          },
          {
            "name": "Integrated Marketing Communication"
          }
        ],
        "annualFee": "(Qantra Campuss)English  61,500 - Arabic 55,000"
      },
      {
        "name": "Faculty of Biotechnology",
        "majors": [
          {
            "name": "Pharmaceutical Biotechnology"
          },
          {
            "name": "Cosmetics Biotechnology"
          },
          {
            "name": "Industrial Biotechnology"
          },
          {
            "name": "Environmental Biotechnology"
          },
          {
            "name": "Biotechnology and Bioinformatics"
          },
          {
            "name": "Biotechnology and Bioeconomy"
          }
        ],
        "annualFee": "(Qantra Campuss) 82,000"
      }
    ],
    "location": "Egypt",
    "rating": 4.4,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@sinaiuniversity.edu.eg",
    "phone": "+20 2 20001622"
  },
  {
    "id": 30,
    "name": "King Salman International University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916514/Kingsalman_em1xpy.jpg",
    "description": "King Salman International University (KSIU) is a public international university in Egypt with campuses in Al-Tor, Ras Sedr, and Sharm El-Sheikh. The university offers a wide range of academic programs across various fields, including medicine, dentistry, pharmacy, engineering, computer science, artificial intelligence, tourism, and other disciplines. KSIU aims to provide high-quality, internationally oriented education and prepare graduates with the knowledge and practical skills needed to compete in the local and global job markets.",
    "departments": [
      "Faculty of Medicine",
      "Faculty of Dentistry",
      "Faculty of Nursing",
      "Faculty of Engineering",
      "Faculty of Computer Engineering",
      "Faculty of Computer Science",
      "Faculty of Technological Industries",
      "Faculty of Administrative Sciences",
      "Faculty of Al-Alsun and Applied Languages",
      "Faculty of Art and Design",
      "Faculty of Tourism and Hospitality",
      "Faculty of Architecture",
      "Faculty of Physical Therapy",
      "Faculty of Pharmacy",
      "Faculty of Veterinary Medicine",
      "Faculty of Basic Sciences",
      "Faculty of Desert Agriculture"
    ],
    "faculties": [
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "Medicine and Surgery"
          }
        ],
        "annualFee": "152,460"
      },
      {
        "name": "Faculty of Dentistry",
        "majors": [
          {
            "name": "Dentistry"
          }
        ],
        "annualFee": "125,000"
      },
      {
        "name": "Faculty of Nursing",
        "majors": [
          {
            "name": "Nursing"
          }
        ],
        "annualFee": "44,640"
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Mechatronics Engineering"
          },
          {
            "name": "Energy Engineering"
          },
          {
            "name": "Electronics and Communications Engineering"
          },
          {
            "name": "Engineering and Construction Management"
          }
        ],
        "annualFee": "75,900"
      },
      {
        "name": "Faculty of Computer Engineering",
        "majors": [
          {
            "name": "Computer Engineering"
          },
          {
            "name": "Artificial Intelligence Engineering"
          }
        ],
        "annualFee": "75,900"
      },
      {
        "name": "Faculty of Computer Science",
        "majors": [
          {
            "name": "Computer Science"
          },
          {
            "name": "Artificial Intelligence Science"
          }
        ],
        "annualFee": "75,900"
      },
      {
        "name": "Faculty of Technological Industries",
        "majors": [
          {
            "name": "Refrigeration and Air Conditioning Technology"
          },
          {
            "name": "Production Lines Technology"
          },
          {
            "name": "Microelectronics Technology"
          }
        ],
        "annualFee": "42,900"
      },
      {
        "name": "Faculty of Administrative Sciences",
        "majors": [
          {
            "name": "Investment and Finance"
          },
          {
            "name": "Marketing and International Business"
          }
        ],
        "annualFee": "50,600"
      },
      {
        "name": "Faculty of Al-Alsun and Applied Languages",
        "majors": [
          {
            "name": "Translation and Simultaneous Interpreting in English"
          },
          {
            "name": "Translation and Simultaneous Interpreting in German"
          },
          {
            "name": "Translation and Simultaneous Interpreting in Russian"
          }
        ],
        "annualFee": "47,300"
      },
      {
        "name": "Faculty of Art and Design",
        "majors": [
          {
            "name": "Interior Architecture"
          },
          {
            "name": "Graphic Design and Branding"
          },
          {
            "name": "Animation"
          }
        ],
        "annualFee": "53,900"
      },
      {
        "name": "Faculty of Tourism and Hospitality",
        "majors": [
          {
            "name": "Hotel and Resort Management"
          },
          {
            "name": "Air Transport Management"
          }
        ],
        "annualFee": "40,000"
      },
      {
        "name": "Faculty of Architecture",
        "majors": [
          {
            "name": "Architecture"
          }
        ],
        "annualFee": "75,900"
      },
      {
        "name": "Faculty of Physical Therapy",
        "majors": [
          {
            "name": "Physical Therapy"
          }
        ],
        "annualFee": "93,500"
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "Doctor of Pharmacy (PharmD)"
          }
        ],
        "annualFee": "110,000"
      },
      {
        "name": "Faculty of Veterinary Medicine",
        "majors": [
          {
            "name": "Veterinary Medicine"
          }
        ],
        "annualFee": "87,120"
      },
      {
        "name": "Faculty of Basic Sciences",
        "majors": [
          {
            "name": "Petroleum Chemistry"
          },
          {
            "name": "Molecular Biotechnology"
          }
        ],
        "annualFee": "52,800"
      },
      {
        "name": "Faculty of Desert Agriculture",
        "majors": [
          {
            "name": "Plant Production"
          },
          {
            "name": "Animal Production"
          }
        ],
        "annualFee": "47,300"
      }
    ],
    "location": "Egypt",
    "rating": 4.7,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@kingsalmaninternationaluniversity.edu.eg",
    "phone": "+20 2 20003551"
  },
  {
    "id": 31,
    "name": "Alexandria National University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916507/AlexandriaNational_tfcso3.jpg",
    "description": "Alexandria National University (ANU) is a national university located in Alexandria, Egypt. It offers a variety of academic programs across several fields, including medicine, dentistry, pharmacy, engineering, computer science, business, and other disciplines. The university aims to provide high-quality education and equip students with the academic knowledge and practical skills needed for their future careers.",
    "departments": [
      "Faculty of Medicine",
      "Faculty of Dentistry",
      "Faculty of Pharmacy",
      "Faculty of Engineering",
      "Faculty of Computer and Data Sciences",
      "Faculty of Economics and Business Administration",
      "Faculty of Media and Communication",
      "Faculty of Social and Human Sciences"
    ],
    "faculties": [
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "Medicine and Surgery"
          }
        ],
        "annualFee": "176,000"
      },
      {
        "name": "Faculty of Dentistry",
        "majors": [
          {
            "name": "Dental Science"
          }
        ],
        "annualFee": "155,000"
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "PharmD – Clinical Pharmacy"
          }
        ],
        "annualFee": "137,000"
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Computer and Communication Engineering"
          },
          {
            "name": "Mechatronics and Robotics Engineering"
          },
          {
            "name": "Electromechanical Engineering"
          },
          {
            "name": "Architectural Engineering and Urban Design"
          }
        ],
        "annualFee": "101,000"
      },
      {
        "name": "Faculty of Computer and Data Sciences",
        "majors": [
          {
            "name": "Cybersecurity"
          },
          {
            "name": "Intelligent Systems"
          },
          {
            "name": "Data Science and Artificial Intelligence"
          },
          {
            "name": "Software Industry and Multimedia"
          }
        ],
        "annualFee": "Any major:84,000 \n\nSoftware Industry and Multimedia Program: 69,000"
      },
      {
        "name": "Faculty of Economics and Business Administration",
        "majors": [
          {
            "name": "Banking and Finance"
          },
          {
            "name": "Management"
          },
          {
            "name": "Marketing and Logistics"
          },
          {
            "name": "Accounting and Information Systems"
          },
          {
            "name": "Business Information Systems"
          }
        ],
        "annualFee": "69,000"
      },
      {
        "name": "Faculty of Media and Communication",
        "majors": [
          {
            "name": "Digital Media"
          }
        ],
        "annualFee": "66,000"
      },
      {
        "name": "Faculty of Social and Human Sciences",
        "majors": [
          {
            "name": "Geomatics and Surveying Studies"
          },
          {
            "name": "Phonetics and Linguistics"
          }
        ],
        "annualFee": "64,000"
      }
    ],
    "location": "Alexandria",
    "rating": 4.7,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@alexandrianationaluniversity.edu.eg",
    "phone": "+20 2 20002993"
  },
  {
    "id": 32,
    "name": "Mansoura National University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916514/MansouraNational_p8e9y0.jpg",
    "description": "Mansoura National University is a private national university located in Mansoura, Egypt. It offers a variety of academic programs in different fields, including medicine, dentistry, pharmacy, engineering, computer science, and business. The university focuses on providing modern education, practical training, and a supportive learning environment for students.",
    "departments": [
      "Faculty of Medicine",
      "Faculty of Dental Medicine",
      "Faculty of Pharmacy",
      "Faculty of Engineering",
      "Faculty of Nursing",
      "Faculty of Business Administration",
      "Faculty of Applied Health Sciences Technology"
    ],
    "faculties": [
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "Medicine and Surgery"
          }
        ],
        "annualFee": "150,000"
      },
      {
        "name": "Faculty of Dental Medicine",
        "majors": [
          {
            "name": "Dental Surgery"
          }
        ],
        "annualFee": "125,000"
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "PharmD (Clinical Pharmacy)"
          }
        ],
        "annualFee": "110,00(pharm d, clinical)-120,000(manchestar)"
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Biomedical Engineering"
          },
          {
            "name": "Mechatronics and Robotics Engineering"
          },
          {
            "name": "Building and Construction Engineering"
          }
        ],
        "annualFee": "75,000"
      },
      {
        "name": "Faculty of Nursing",
        "majors": [
          {
            "name": "Nursing Science"
          }
        ],
        "annualFee": "70,000"
      },
      {
        "name": "Faculty of Business Administration",
        "majors": [
          {
            "name": "Marketing and International Business"
          },
          {
            "name": "Finance and Investment"
          },
          {
            "name": "Accounting and Information Systems"
          }
        ],
        "annualFee": "40,000"
      },
      {
        "name": "Faculty of Applied Health Sciences Technology",
        "majors": [
          {
            "name": "Medical Laboratory Technology"
          },
          {
            "name": "Radiology and Medical Imaging Technology"
          }
        ],
        "annualFee": "60,000"
      }
    ],
    "location": "Mansoura",
    "rating": 4.8,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@mansouranationaluniversity.edu.eg",
    "phone": "+20 2 20002814"
  },
  {
    "id": 33,
    "name": "Tanta University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916519/Tanta_fhvxup.jpg",
    "description": "Tanta University is a public university located in Tanta, Egypt. It offers a wide range of academic programs across various fields, including medicine, dentistry, pharmacy, engineering, science, commerce, and humanities. The university focuses on providing quality education, scientific research, and practical training to prepare students for their future careers.",
    "departments": [
      "Faculty of Medicine",
      "Faculty of Dentistry",
      "Faculty of Pharmacy",
      "Faculty of Nursing",
      "Faculty of Science",
      "Faculty of Engineering",
      "Faculty of Agriculture",
      "Faculty of Law",
      "Faculty of Business",
      "Faculty of Arts",
      "Faculty of Education",
      "Faculty of Specific Education",
      "Faculty of Sports Science",
      "Faculty of Computers and Information",
      "Faculty of Applied Arts",
      "Technical Institute of Nursing"
    ],
    "faculties": [
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "Anatomy"
          },
          {
            "name": "Physiology"
          },
          {
            "name": "Biochemistry"
          },
          {
            "name": "Pathology"
          },
          {
            "name": "Pharmacology"
          },
          {
            "name": "Microbiology and Immunology"
          },
          {
            "name": "Forensic Medicine and Clinical Toxicology"
          },
          {
            "name": "Public Health and Community Medicine"
          },
          {
            "name": "Internal Medicine"
          },
          {
            "name": "General Surgery"
          },
          {
            "name": "Pediatrics"
          },
          {
            "name": "Obstetrics and Gynecology"
          },
          {
            "name": "Ophthalmology"
          },
          {
            "name": "Otorhinolaryngology (ENT)"
          },
          {
            "name": "Dermatology"
          },
          {
            "name": "Psychiatry"
          },
          {
            "name": "Radiology"
          },
          {
            "name": "Anesthesiology"
          },
          {
            "name": "Emergency Medicine"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Dentistry",
        "majors": [
          {
            "name": "Oral and Maxillofacial Surgery"
          },
          {
            "name": "Oral Medicine"
          },
          {
            "name": "Periodontology"
          },
          {
            "name": "Orthodontics"
          },
          {
            "name": "Pediatric Dentistry"
          },
          {
            "name": "Prosthodontics"
          },
          {
            "name": "Fixed Prosthodontics"
          },
          {
            "name": "Conservative Dentistry"
          },
          {
            "name": "Dental Materials"
          },
          {
            "name": "Oral Biology"
          },
          {
            "name": "Oral Pathology"
          },
          {
            "name": "General Anatomy"
          },
          {
            "name": "General Physiology"
          },
          {
            "name": "Biochemistry"
          },
          {
            "name": "Microbiology"
          },
          {
            "name": "Community Dentistry"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "Pharmaceutics"
          },
          {
            "name": "Pharmaceutical Chemistry"
          },
          {
            "name": "Pharmacognosy"
          },
          {
            "name": "Pharmacology and Toxicology"
          },
          {
            "name": "Clinical Pharmacy"
          },
          {
            "name": "Biochemistry"
          },
          {
            "name": "Microbiology and Immunology"
          },
          {
            "name": "Pharmacy Practice"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Nursing",
        "majors": [
          {
            "name": "Medical-Surgical Nursing"
          },
          {
            "name": "Pediatric Nursing"
          },
          {
            "name": "Obstetric and Gynecological Nursing"
          },
          {
            "name": "Community Health Nursing"
          },
          {
            "name": "Psychiatric and Mental Health Nursing"
          },
          {
            "name": "Nursing Administration"
          },
          {
            "name": "Nursing Education"
          },
          {
            "name": "Critical Care and Emergency Nursing"
          },
          {
            "name": "Geriatric Nursing"
          },
          {
            "name": "Fundamental of Nursing"
          },
          {
            "name": "Nursing Informatics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Science",
        "majors": [
          {
            "name": "Mathematics"
          },
          {
            "name": "Physics"
          },
          {
            "name": "Chemistry"
          },
          {
            "name": "Geology"
          },
          {
            "name": "Botany"
          },
          {
            "name": "Zoology"
          },
          {
            "name": "Computer Science"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Civil Engineering"
          },
          {
            "name": "Architectural Engineering"
          },
          {
            "name": "Electrical Engineering"
          },
          {
            "name": "Mechanical Engineering"
          },
          {
            "name": "Production Engineering"
          },
          {
            "name": "Computer and Systems Engineering"
          },
          {
            "name": "Communications and Electronics Engineering"
          },
          {
            "name": "Textile Engineering"
          },
          {
            "name": "Power and Energy Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Agriculture",
        "majors": [
          {
            "name": "Agricultural Economics"
          },
          {
            "name": "Agricultural Extension"
          },
          {
            "name": "Agronomy"
          },
          {
            "name": "Horticulture"
          },
          {
            "name": "Plant Protection"
          },
          {
            "name": "Animal Production"
          },
          {
            "name": "Food Science"
          },
          {
            "name": "Dairy Science"
          },
          {
            "name": "Soil and Water Science"
          },
          {
            "name": "Agricultural Engineering"
          },
          {
            "name": "Genetics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Law",
        "majors": [
          {
            "name": "Civil Law"
          },
          {
            "name": "Criminal Law"
          },
          {
            "name": "Public Law"
          },
          {
            "name": "Private International Law"
          },
          {
            "name": "Public International Law"
          },
          {
            "name": "Commercial Law"
          },
          {
            "name": "Constitutional Law"
          },
          {
            "name": "Administrative Law"
          },
          {
            "name": "Islamic Sharia"
          },
          {
            "name": "Legal History"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Business",
        "majors": [
          {
            "name": "Accounting"
          },
          {
            "name": "Business Administration"
          },
          {
            "name": "Economics"
          },
          {
            "name": "Statistics and Insurance"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Arts",
        "majors": [
          {
            "name": "Arabic Language and Literature"
          },
          {
            "name": "English Language and Literature"
          },
          {
            "name": "French Language and Literature"
          },
          {
            "name": "History"
          },
          {
            "name": "Geography"
          },
          {
            "name": "Sociology"
          },
          {
            "name": "Psychology"
          },
          {
            "name": "Philosophy"
          },
          {
            "name": "Media"
          },
          {
            "name": "Archaeology"
          },
          {
            "name": "Library and Information Science"
          },
          {
            "name": "Hebrew Language and Literature"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Education",
        "majors": [
          {
            "name": "Arabic Language"
          },
          {
            "name": "English Language"
          },
          {
            "name": "French Language"
          },
          {
            "name": "Mathematics"
          },
          {
            "name": "Science"
          },
          {
            "name": "Social Studies"
          },
          {
            "name": "Computer"
          },
          {
            "name": "Childhood and Kindergarten Education"
          },
          {
            "name": "Special Education"
          },
          {
            "name": "Commercial Education"
          },
          {
            "name": "Agricultural Education"
          },
          {
            "name": "Industrial Education"
          },
          {
            "name": "Adult Education"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Specific Education",
        "majors": [
          {
            "name": "Art Education"
          },
          {
            "name": "Music Education"
          },
          {
            "name": "Home Economics"
          },
          {
            "name": "Educational Media"
          },
          {
            "name": "Computer Education"
          },
          {
            "name": "Educational Technology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Sports Science",
        "majors": [
          {
            "name": "Sports Training"
          },
          {
            "name": "Sports Management"
          },
          {
            "name": "Sports Recreation"
          },
          {
            "name": "Physical Education"
          },
          {
            "name": "Sports Psychology"
          },
          {
            "name": "Sports Health"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Computers and Information",
        "majors": [
          {
            "name": "Computer Science"
          },
          {
            "name": "Information Systems"
          },
          {
            "name": "Information Technology"
          },
          {
            "name": "Artificial Intelligence"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Applied Arts",
        "majors": [
          {
            "name": "Interior Design and Furniture"
          },
          {
            "name": "Textile Printing, Dyeing and Finishing"
          },
          {
            "name": "Metal Products and Jewelry Desig"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Technical Institute of Nursing",
        "majors": [
          {
            "name": "Nursing"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Tanta",
    "rating": 4.8,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@tantauniversity.edu.eg",
    "phone": "+20 2 20001626"
  },
  {
    "id": 34,
    "name": "Tanta National University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916521/TantaNational_otwiev.jpg",
    "description": "Tanta National University is a modern national university located in Tanta, Egypt. It offers a variety of academic programs in fields such as medicine, dentistry, pharmacy, engineering, computer science, and business. The university focuses on providing high-quality education, practical training, scientific research, and a modern learning environment to prepare students for successful careers.",
    "departments": [
      "Faculty of Medicine",
      "Faculty of Dentistry",
      "Faculty of Engineering",
      "Faculty of Computer, Information and Artificial Intelligence",
      "Faculty of Al-Alsun (Languages)",
      "Faculty of Business",
      "Faculty of Humanities and Social Sciences"
    ],
    "faculties": [
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "Medicine and Surgery"
          }
        ],
        "annualFee": "155,000"
      },
      {
        "name": "Faculty of Dentistry",
        "majors": [
          {
            "name": "Oral and Dental Medicine and Surgery"
          }
        ],
        "annualFee": "125,000"
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Computer Engineering"
          },
          {
            "name": "Mechatronics Engineering"
          }
        ],
        "annualFee": "80,000"
      },
      {
        "name": "Faculty of Computer, Information and Artificial Intelligence",
        "majors": [
          {
            "name": "Computer Science and Artificial Intelligence"
          }
        ],
        "annualFee": "80,000"
      },
      {
        "name": "Faculty of Al-Alsun (Languages)",
        "majors": [
          {
            "name": "English Language and Translation"
          }
        ],
        "annualFee": "50,000"
      },
      {
        "name": "Faculty of Business",
        "majors": [
          {
            "name": "Business Information Systems (BIS)"
          },
          {
            "name": "Accounting and Digital Financial Innovations"
          }
        ],
        "annualFee": "45,000"
      },
      {
        "name": "Faculty of Humanities and Social Sciences",
        "majors": [
          {
            "name": "Surveying, Mapping, and Geographic Information Systems"
          },
          {
            "name": "Museum and Archaeological Sites Management"
          }
        ],
        "annualFee": "40,000"
      }
    ],
    "location": "Tanta",
    "rating": 4.7,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@tantanationaluniversity.edu.eg",
    "phone": "+20 2 20002480"
  },
  {
    "id": 35,
    "name": "Arab Academy for Science, Technology and Maritime Transport – Alexandria",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784919613/OIP_nsxhyp.jpg",
    "description": "The Arab Academy for Science, Technology and Maritime Transport (AASTMT)is a leading educational institution in the Arab region, with campuses in Alexandria and other cities. It offers a wide range of academic programs in fields such as engineering, business, computer science, maritime transport, logistics, medicine, and pharmacy. The academy focuses on high-quality education, practical training, scientific research, and innovation.",
    "departments": [
      "Faculty of Engineering and Technology",
      "Faculty of Management and Technology",
      "Faculty of International Transport and Logistics",
      "Faculty of Computing and Information Technology",
      "Faculty of Maritime Transport and Technology",
      "Faculty of Fisheries and Aquaculture Technology",
      "Faculty of Pharmacy",
      "Faculty of Law",
      "Faculty of Language and Communication",
      "Faculty of Art and Design"
    ],
    "faculties": [
      {
        "name": "Faculty of Engineering and Technology",
        "majors": [
          {
            "name": "Architectural Engineering"
          },
          {
            "name": "Computer Engineering"
          },
          {
            "name": "Electronics and Communications Engineering"
          },
          {
            "name": "Electrical and Control Engineering"
          },
          {
            "name": "Mechanical Engineering"
          },
          {
            "name": "Marine and Offshore Engineering"
          },
          {
            "name": "Construction and Building Engineering"
          },
          {
            "name": "Industrial and Management Engineering"
          },
          {
            "name": "Oil and Gas Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Management and Technology",
        "majors": [
          {
            "name": "Business Information Systems"
          },
          {
            "name": "Marketing and International Business"
          },
          {
            "name": "Accounting and Finance"
          },
          {
            "name": "Media Management"
          },
          {
            "name": "Economics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of International Transport and Logistics",
        "majors": [
          {
            "name": "International Transport and Logistics"
          },
          {
            "name": "International Business Logistics"
          },
          {
            "name": "Customs Logistics"
          },
          {
            "name": "Supply Chain Management"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Computing and Information Technology",
        "majors": [
          {
            "name": "Computer Science"
          },
          {
            "name": "Information Systems"
          },
          {
            "name": "Software Engineering"
          },
          {
            "name": "Multimedia and Computer Graphics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Maritime Transport and Technology",
        "majors": [
          {
            "name": "Nautical Technology"
          },
          {
            "name": "Offshore Operations Technology"
          },
          {
            "name": "Maritime Safety and Environmental Protection"
          },
          {
            "name": "Shipping and Port Operations"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Fisheries and Aquaculture Technology",
        "majors": [
          {
            "name": "Fisheries Technology"
          },
          {
            "name": "Aquaculture Technology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "Clinical Pharmacy"
          },
          {
            "name": "Pharmaceutics"
          },
          {
            "name": "Pharmaceutical Chemistry"
          },
          {
            "name": "Pharmacology and Toxicology"
          },
          {
            "name": "Pharmacognosy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Law",
        "majors": [
          {
            "name": "Public Law"
          },
          {
            "name": "Private Law"
          },
          {
            "name": "International Law"
          },
          {
            "name": "Commercial Law"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Language and Communication",
        "majors": [
          {
            "name": "English Language and Translation"
          },
          {
            "name": "Media and Communication"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Art and Design",
        "majors": [
          {
            "name": "Interior Design"
          },
          {
            "name": "Graphic Design"
          },
          {
            "name": "Fashion Design"
          },
          {
            "name": "Product Design"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Alexandria",
    "rating": 4.4,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@arabacademyforsciencetechnologyandmaritimetransportalexandria.edu.eg",
    "phone": "+20 2 20014807"
  },
  {
    "id": 36,
    "name": "Pharos University in Alexandria",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784919674/kisspng-pharos-university-in-alexandria-alexandria-higher-science-and-technology-5ad764aea8a662.3307150415240654546908_qdi128.webp",
    "description": "Pharos University in Alexandria (PUA) is the first private university in Alexandria, Egypt, established in 2006. It offers a wide range of accredited academic programs across 12 specialized faculties, with a focus on quality education, scientific research, practical training, innovation, and international collaboration.",
    "departments": [
      "Faculty of Pharmacy",
      "Faculty of Dentistry",
      "Faculty of Engineering",
      "Faculty of Financial and Administrative Sciences",
      "Faculty of Languages and Translation",
      "Faculty of Legal Studies and International Relations",
      "Faculty of Tourism and Hotel Management",
      "Faculty of Mass Communication",
      "Faculty of Physical Therapy",
      "Faculty of Applied Health Sciences and Technology",
      "Faculty of Computer Science and Artificial Intelligence",
      "Faculty of Arts and Design"
    ],
    "faculties": [
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "Pharm D"
          },
          {
            "name": "Pharm D – Clinical"
          }
        ],
        "annualFee": "(pharm d)100,210_(pharm d,clinical)106,810"
      },
      {
        "name": "Faculty of Dentistry",
        "majors": [
          {
            "name": "Dental Medicine and Surgery"
          }
        ],
        "annualFee": "132,645"
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Computer Engineering"
          },
          {
            "name": "Architectural Engineering"
          },
          {
            "name": "Petrochemical Engineering"
          },
          {
            "name": "Electrical Engineering – Power and Control"
          },
          {
            "name": "Electrical Engineering – Communications"
          },
          {
            "name": "Mechanical Engineering – Mechanical Power Engineering"
          },
          {
            "name": "Mechanical Engineering – Industrial Engineering and Manufacturing"
          },
          {
            "name": "Construction Engineering and Management"
          }
        ],
        "annualFee": "70,235"
      },
      {
        "name": "Faculty of Financial and Administrative Sciences",
        "majors": [
          {
            "name": "Marketing"
          },
          {
            "name": "Accounting"
          },
          {
            "name": "Finance and Investment"
          }
        ],
        "annualFee": "62,410"
      },
      {
        "name": "Faculty of Languages and Translation",
        "majors": [
          {
            "name": "English Language"
          },
          {
            "name": "Teaching English Language"
          },
          {
            "name": "French Language"
          },
          {
            "name": "Turkish Language"
          },
          {
            "name": "Spanish Language"
          },
          {
            "name": "Chinese Language"
          }
        ],
        "annualFee": "67,210"
      },
      {
        "name": "Faculty of Legal Studies and International Relations",
        "majors": [
          {
            "name": "Law"
          }
        ],
        "annualFee": "59,160"
      },
      {
        "name": "Faculty of Tourism and Hotel Management",
        "majors": [
          {
            "name": "Tourism"
          },
          {
            "name": "Hotel Management"
          }
        ],
        "annualFee": "55,186"
      },
      {
        "name": "Faculty of Mass Communication",
        "majors": [
          {
            "name": "Journalism"
          },
          {
            "name": "Digital Publishing"
          },
          {
            "name": "Public Relations"
          },
          {
            "name": "Marketing Communications"
          },
          {
            "name": "Radio"
          },
          {
            "name": "Television Production"
          }
        ],
        "annualFee": "68,310"
      },
      {
        "name": "Faculty of Physical Therapy",
        "majors": [
          {
            "name": "Physical Therapy"
          }
        ],
        "annualFee": "96,910"
      },
      {
        "name": "Faculty of Applied Health Sciences and Technology",
        "majors": [
          {
            "name": "Dental Prosthodontics"
          },
          {
            "name": "Anesthesia and Intensive Care"
          },
          {
            "name": "Nutrition"
          },
          {
            "name": "Medical Equipment"
          },
          {
            "name": "Medical Laboratories"
          },
          {
            "name": "Radiology and Medical Imaging Technology"
          },
          {
            "name": "Optics Technology"
          }
        ],
        "annualFee": "77,660"
      },
      {
        "name": "Faculty of Computer Science and Artificial Intelligence",
        "majors": [
          {
            "name": "Computer Science"
          },
          {
            "name": "Artificial Intelligence"
          },
          {
            "name": "Data Science"
          },
          {
            "name": "Cyber Security"
          }
        ],
        "annualFee": "83,410"
      },
      {
        "name": "Faculty of Arts and Design",
        "majors": [
          {
            "name": "Interior Design"
          },
          {
            "name": "Expressive Arts"
          },
          {
            "name": "Graphic Design"
          },
          {
            "name": "Illustration"
          },
          {
            "name": "Digital Media"
          },
          {
            "name": "Animation and Video Film"
          },
          {
            "name": "Drawing and Painting"
          },
          {
            "name": "Mural Design"
          },
          {
            "name": "Fashion Design"
          }
        ],
        "annualFee": "77,165"
      }
    ],
    "location": "Alexandria",
    "rating": 4.8,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@pharosuniversityinalexandria.edu.eg",
    "phone": "+20 2 20003039"
  },
  {
    "id": 37,
    "name": "Egypt-Japan University of Science and Technology",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784919768/Egypt-_-Japan-University-of-Science-and-Technology-E-JUST-2309x1732_va7k45.webp",
    "description": "Egypt-Japan University of Science and Technology (E-JUST) is a research-oriented university in Egypt that focuses on science, engineering, technology, and innovation. It follows a Japanese-inspired educational model that emphasizes practical learning, scientific research, advanced technology, and collaboration with Japanese universities and institutions.",
    "departments": [
      "Faculty of Engineering",
      "Faculty of International Business and Humanities",
      "Faculty of Pharmacy",
      "Faculty of Basic and Applied Sciences",
      "Faculty of Computer Science and Information Technology",
      "Faculty of Art and Design"
    ],
    "faculties": [
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Electronics and Communications Engineering"
          },
          {
            "name": "Computer Science and Engineering"
          },
          {
            "name": "Electrical Power Engineering"
          },
          {
            "name": "Biomedical Engineering"
          },
          {
            "name": "Industrial and Manufacturing Engineering"
          },
          {
            "name": "Mechatronics Engineering"
          },
          {
            "name": "Chemical and Petrochemical Engineering"
          },
          {
            "name": "Mechanical Power and Energy Engineering"
          },
          {
            "name": "Materials Science and Engineering"
          },
          {
            "name": "Aerospace Engineering"
          },
          {
            "name": "Environmental Engineering"
          },
          {
            "name": "Electromechanical Buildings Systems Engineering  and Sustainable Architecture"
          }
        ],
        "annualFee": "130,000"
      },
      {
        "name": "Faculty of International Business and Humanities",
        "majors": [
          {
            "name": "Accounting and Information Technology"
          },
          {
            "name": "Human Resources Management"
          },
          {
            "name": "Investment and Financ"
          }
        ],
        "annualFee": "90,000"
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "Pharm D"
          }
        ],
        "annualFee": "145,000"
      },
      {
        "name": "Faculty of Basic and Applied Sciences",
        "majors": [
          {
            "name": "Chemistry"
          },
          {
            "name": "Molecular Biology and Biomedical Sciences"
          },
          {
            "name": "Mathematics and Statistics"
          },
          {
            "name": "Applied Physics"
          },
          {
            "name": "Space Environment and Remote Sensing"
          }
        ],
        "annualFee": "75,000"
      },
      {
        "name": "Faculty of Computer Science and Information Technology",
        "majors": [
          {
            "name": "Computer Science"
          }
        ],
        "annualFee": "105,000"
      },
      {
        "name": "Faculty of Art and Design",
        "majors": [
          {
            "name": "Industrial Product Design"
          },
          {
            "name": "Interior Design"
          },
          {
            "name": "Digital Media Design"
          },
          {
            "name": "Arts in Creative Industries"
          }
        ],
        "annualFee": "80,000"
      }
    ],
    "location": "Egypt",
    "rating": 4.6,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@egyptjapanuniversityofscienceandtechnology.edu.eg",
    "phone": "+20 2 20004576"
  },
  {
    "id": 38,
    "name": "Al-Azhar University – Assiut Branch (Boys’)",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784919826/f6150d94-0d0c-460a-a73b-bc9b082a6d73_rypcex.jpg",
    "description": "Al-Azhar University – Assiut Branch is one of the main branches of Al-Azhar University in Egypt. It offers a wide range of academic programs in Islamic, scientific, medical, engineering, and humanities disciplines. The university is committed to providing high-quality education, promoting scientific research, and preparing graduates to contribute effectively to society.",
    "departments": [
      "Faculty of Medicine",
      "Faculty of Dentistry",
      "Faculty of Pharmacy",
      "Faculty of Science",
      "Faculty of Agriculture",
      "Faculty of Education",
      "Faculty of Commerce",
      "Faculty of Arabic Language",
      "Faculty of Theology and Da’wah",
      "Faculty of Sharia and Law"
    ],
    "faculties": [
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "Anatomy"
          },
          {
            "name": "Physiology"
          },
          {
            "name": "Biochemistry"
          },
          {
            "name": "Histology"
          },
          {
            "name": "Pathology"
          },
          {
            "name": "Pharmacology"
          },
          {
            "name": "Microbiology"
          },
          {
            "name": "Parasitology"
          },
          {
            "name": "Internal Medicine"
          },
          {
            "name": "General Surgery"
          },
          {
            "name": "Pediatrics"
          },
          {
            "name": "Obstetrics and Gynecology"
          },
          {
            "name": "Orthopedics"
          },
          {
            "name": "Ophthalmology"
          },
          {
            "name": "ENT"
          },
          {
            "name": "Dermatology"
          },
          {
            "name": "Psychiatry"
          },
          {
            "name": "Radiology"
          },
          {
            "name": "Anesthesiology"
          },
          {
            "name": "Cardiology"
          },
          {
            "name": "Neurology"
          },
          {
            "name": "Urology"
          },
          {
            "name": "Emergency Medicine"
          },
          {
            "name": "Family Medicine"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Dentistry",
        "majors": [
          {
            "name": "Oral Medicine and Periodontology"
          },
          {
            "name": "Oral and Maxillofacial Surgery"
          },
          {
            "name": "Prosthodontics"
          },
          {
            "name": "Conservative Dentistry"
          },
          {
            "name": "Endodontics"
          },
          {
            "name": "Orthodontics"
          },
          {
            "name": "Pediatric Dentistry"
          },
          {
            "name": "Oral Pathology"
          },
          {
            "name": "Oral Biology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "Pharmaceutics"
          },
          {
            "name": "Pharmaceutical Chemistry"
          },
          {
            "name": "Pharmacognosy"
          },
          {
            "name": "Pharmacology"
          },
          {
            "name": "Clinical Pharmacy"
          },
          {
            "name": "Microbiology"
          },
          {
            "name": "Biochemistry"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Science",
        "majors": [
          {
            "name": "Mathematics"
          },
          {
            "name": "Physics"
          },
          {
            "name": "Chemistry"
          },
          {
            "name": "Botany"
          },
          {
            "name": "Zoology"
          },
          {
            "name": "Geology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Agriculture",
        "majors": [
          {
            "name": "Agronomy"
          },
          {
            "name": "Horticulture"
          },
          {
            "name": "Plant Protection"
          },
          {
            "name": "Agricultural Economics"
          },
          {
            "name": "Animal Production"
          },
          {
            "name": "Soil and Water Sciences"
          },
          {
            "name": "Food Science"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Education",
        "majors": [
          {
            "name": "Curriculum and Instruction"
          },
          {
            "name": "Educational Psychology"
          },
          {
            "name": "Foundations of Education"
          },
          {
            "name": "Special Education"
          },
          {
            "name": "English Language"
          },
          {
            "name": "Arabic Language"
          },
          {
            "name": "Mathematics"
          },
          {
            "name": "Physics"
          },
          {
            "name": "Chemistry"
          },
          {
            "name": "Biology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Commerce",
        "majors": [
          {
            "name": "Accounting"
          },
          {
            "name": "Business Administration"
          },
          {
            "name": "Economics"
          },
          {
            "name": "Statistics"
          },
          {
            "name": "Finance"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Arabic Language",
        "majors": [
          {
            "name": "Literature and Criticism"
          },
          {
            "name": "Linguistics"
          },
          {
            "name": "Grammar"
          },
          {
            "name": "Rhetoric"
          },
          {
            "name": "Islamic Literature"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Theology and Da’wah",
        "majors": [
          {
            "name": "Tafsir and Quranic Sciences"
          },
          {
            "name": "Hadith"
          },
          {
            "name": "Aqeedah and Philosophy"
          },
          {
            "name": "Da’wah and Islamic Culture"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Sharia and Law",
        "majors": [
          {
            "name": "Islamic Jurisprudence (Fiqh)"
          },
          {
            "name": "Usul Al-Fiqh"
          },
          {
            "name": "Comparative Jurisprudence"
          },
          {
            "name": "Public Law"
          },
          {
            "name": "Private Law"
          },
          {
            "name": "Islamic Judiciary"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Assiut",
    "rating": 4.2,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@alazharuniversityassiutbranchboys.edu.eg",
    "phone": "+20 2 20020115"
  },
  {
    "id": 39,
    "name": "Al-Azhar University – Assiut Branch (Girls’)",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784919826/f6150d94-0d0c-460a-a73b-bc9b082a6d73_rypcex.jpg",
    "description": "Al-Azhar University – Assiut Branch is one of the main branches of Al-Azhar University in Egypt. It offers a wide range of academic programs in Islamic, scientific, medical, engineering, and humanities disciplines. The university is committed to providing high-quality education, promoting scientific research, and preparing graduates to contribute effectively to society.",
    "departments": [
      "Faculty of Medicine",
      "Faculty of Pharmacy",
      "Faculty of Education",
      "Faculty of Commerce",
      "Faculty of Islamic Studies",
      "Technical Institute of Nursing"
    ],
    "faculties": [
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "Anatomy"
          },
          {
            "name": "Physiology"
          },
          {
            "name": "Biochemistry"
          },
          {
            "name": "Histology"
          },
          {
            "name": "Pathology"
          },
          {
            "name": "Pharmacology"
          },
          {
            "name": "Microbiology"
          },
          {
            "name": "Parasitology"
          },
          {
            "name": "Internal Medicine"
          },
          {
            "name": "General Surgery"
          },
          {
            "name": "Pediatrics"
          },
          {
            "name": "Obstetrics and Gynecology"
          },
          {
            "name": "Ophthalmology"
          },
          {
            "name": "Radiology"
          },
          {
            "name": "Anesthesiology"
          },
          {
            "name": "Dermatology"
          },
          {
            "name": "Psychiatry"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "Pharmaceutics"
          },
          {
            "name": "Pharmaceutical Chemistry"
          },
          {
            "name": "Pharmacognosy"
          },
          {
            "name": "Pharmacology"
          },
          {
            "name": "Clinical Pharmacy"
          },
          {
            "name": "Microbiology"
          },
          {
            "name": "Biochemistry"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Education",
        "majors": [
          {
            "name": "Curriculum and Instruction"
          },
          {
            "name": "Educational Psychology"
          },
          {
            "name": "Foundations of Education"
          },
          {
            "name": "Special Education"
          },
          {
            "name": "English Language"
          },
          {
            "name": "Arabic Language"
          },
          {
            "name": "Mathematics"
          },
          {
            "name": "Physics"
          },
          {
            "name": "Chemistry"
          },
          {
            "name": "Biology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Commerce",
        "majors": [
          {
            "name": "Accounting"
          },
          {
            "name": "Business Administration"
          },
          {
            "name": "Economics"
          },
          {
            "name": "Statistics"
          },
          {
            "name": "Finance"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Islamic Studies",
        "majors": [
          {
            "name": "Tafsir and Quranic Sciences"
          },
          {
            "name": "Hadith"
          },
          {
            "name": "Aqeedah and Philosophy"
          },
          {
            "name": "Fiqh"
          },
          {
            "name": "Usul Al-Fiqh"
          },
          {
            "name": "Comparative Fiqh"
          },
          {
            "name": "Da’wah and Islamic Culture"
          },
          {
            "name": "Arabic Language and Literature"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Technical Institute of Nursing",
        "majors": [
          {
            "name": "General Nursing"
          },
          {
            "name": "Medical-Surgical Nursing"
          },
          {
            "name": "Pediatric Nursing"
          },
          {
            "name": "Obstetric and Gynecological Nursing"
          },
          {
            "name": "Community Health Nursing"
          },
          {
            "name": "Psychiatric and Mental Health Nursing"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Assiut",
    "rating": 4.3,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@alazharuniversityassiutbranchgirls.edu.eg",
    "phone": "+20 2 20020215"
  },
  {
    "id": 40,
    "name": "Sadat Academy for Management Sciences – Assiut Branch",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916517/sa_i3afqm.jpg",
    "description": "Sadat Academy for Management Sciences – Assiut Branch is one of the regional branches of the Sadat Academy for Management Sciences in Egypt. It specializes in management sciences and offers high-quality education in business, accounting, economics, management information systems, and related fields. The academy focuses on academic excellence, practical training, and preparing graduates for the local and international job market.",
    "departments": [
      "Faculty of Administrative Sciences\r\n\r\nDepartments / Majors"
    ],
    "faculties": [
      {
        "name": "Faculty of Administrative Sciences\r\n\r\nDepartments / Majors",
        "majors": [
          {
            "name": "Business Administration"
          },
          {
            "name": "Accounting"
          },
          {
            "name": "Economics"
          },
          {
            "name": "Management Information Systems (MIS)"
          },
          {
            "name": "Human Resources Management"
          },
          {
            "name": "Marketing"
          },
          {
            "name": "Finance"
          },
          {
            "name": "Banking"
          },
          {
            "name": "Insurance"
          },
          {
            "name": "Public Administration"
          },
          {
            "name": "Local Administration"
          },
          {
            "name": "Actuarial Sciences"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Assiut",
    "rating": 5,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@sadatacademyformanagementsciencesassiutbranch.edu.eg",
    "phone": "+20 2 20013004"
  },
  {
    "id": 41,
    "name": "Luxor University",
    "image": "lhttps://res.cloudinary.com/yrqizhfy/image/upload/v1784916513/lu_ktvi43.jpg",
    "description": "Luxor University is a public university located in Luxor, Egypt. Established in 2019, it offers high-quality education across various disciplines, including medicine, science, archaeology, tourism, arts, languages, and computer science. The university is committed to academic excellence, scientific research, innovation, and preparing graduates to meet the needs of the local and global job market.",
    "departments": [
      "Faculty of Archaeology",
      "Faculty of Fine Arts",
      "Faculty of Alsun (Languages)",
      "Faculty of Education",
      "Faculty of Medicine",
      "Faculty of Computers and Information",
      "Faculty of Tourism and Hotels",
      "Faculty of Science"
    ],
    "faculties": [
      {
        "name": "Faculty of Archaeology",
        "majors": [
          {
            "name": "Egyptology"
          },
          {
            "name": "Islamic Archaeology"
          },
          {
            "name": "Archaeological Restoration"
          },
          {
            "name": "Museum Studies"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Fine Arts",
        "majors": [
          {
            "name": "Painting"
          },
          {
            "name": "Graphics"
          },
          {
            "name": "Sculpture"
          },
          {
            "name": "Interior Design"
          },
          {
            "name": "Decoration"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Alsun (Languages)",
        "majors": [
          {
            "name": "English Language"
          },
          {
            "name": "French Language"
          },
          {
            "name": "German Language"
          },
          {
            "name": "Italian Language"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Education",
        "majors": [
          {
            "name": "Curriculum and Instruction"
          },
          {
            "name": "Educational Psychology"
          },
          {
            "name": "Foundations of Education"
          },
          {
            "name": "Special Education"
          },
          {
            "name": "English Language"
          },
          {
            "name": "Arabic Language"
          },
          {
            "name": "Mathematics"
          },
          {
            "name": "Physics"
          },
          {
            "name": "Chemistry"
          },
          {
            "name": "Biology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "Anatomy"
          },
          {
            "name": "Physiology"
          },
          {
            "name": "Biochemistry"
          },
          {
            "name": "Histology"
          },
          {
            "name": "Pathology"
          },
          {
            "name": "Pharmacology"
          },
          {
            "name": "Microbiology"
          },
          {
            "name": "Parasitology"
          },
          {
            "name": "Internal Medicine"
          },
          {
            "name": "General Surgery"
          },
          {
            "name": "Pediatrics"
          },
          {
            "name": "Obstetrics and Gynecology"
          },
          {
            "name": "Orthopedics"
          },
          {
            "name": "Ophthalmology"
          },
          {
            "name": "ENT"
          },
          {
            "name": "Dermatology"
          },
          {
            "name": "Psychiatry"
          },
          {
            "name": "Radiology"
          },
          {
            "name": "Anesthesiology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Computers and Information",
        "majors": [
          {
            "name": "Computer Science"
          },
          {
            "name": "Information Systems"
          },
          {
            "name": "Information Technology"
          },
          {
            "name": "Artificial Intelligence"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Tourism and Hotels",
        "majors": [
          {
            "name": "Tourism Studies"
          },
          {
            "name": "Hotel Management"
          },
          {
            "name": "Tourism Guidance"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Science",
        "majors": [
          {
            "name": "Mathematics"
          },
          {
            "name": "Physics"
          },
          {
            "name": "Chemistry"
          },
          {
            "name": "Botany"
          },
          {
            "name": "Zoology"
          },
          {
            "name": "Geology"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Luxor",
    "rating": 4.6,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@luxoruniversity.edu.eg",
    "phone": "+20 2 20001660"
  },
  {
    "id": 42,
    "name": "Luxor National University",
    "image": "lhttps://res.cloudinary.com/yrqizhfy/image/upload/v1784916513/lu_ktvi43.jpg",
    "description": "Luxor National University is a national university located in New Tiba City, Luxor, Egypt. It was established to provide high-quality education through modern academic programs that meet the needs of the labor market. The university focuses on innovation, scientific research, practical training, and preparing graduates with the knowledge and skills needed for future careers.",
    "departments": [
      "Faculty of Computers, Information and Artificial Intelligence",
      "Faculty of Tourism and Archaeology",
      "Faculty of Languages, Translation and Humanities",
      "Faculty of Arts and Design"
    ],
    "faculties": [
      {
        "name": "Faculty of Computers, Information and Artificial Intelligence",
        "majors": [
          {
            "name": "Computer Science"
          },
          {
            "name": "Information Systems"
          },
          {
            "name": "Artificial Intelligence"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Tourism and Archaeology",
        "majors": [
          {
            "name": "Tourism Guidance and Heritage Management"
          },
          {
            "name": "Airport Management and Aviation Hospitality"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Languages, Translation and Humanities",
        "majors": [
          {
            "name": "English Language and Translation"
          },
          {
            "name": "German Language and Translation"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Arts and Design",
        "majors": [
          {
            "name": "Interior Architecture"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Luxor",
    "rating": 4.5,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@luxornationaluniversity.edu.eg",
    "phone": "+20 2 20002514"
  },
  {
    "id": 43,
    "name": "Taiba Technological University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916519/taba_zpyz4q.jpg",
    "description": "Taiba Technological University is a public technological university located in New Tiba City, Luxor Governorate, Egypt. It was established to provide applied technological education that combines theoretical knowledge with practical training. The university prepares qualified graduates to meet the needs of industry, tourism, energy, and the labor market through modern technology-based programs.",
    "departments": [
      "Faculty of Industry and Energy Technology",
      "Faculty of Tourism and Hotel Services Technology"
    ],
    "faculties": [
      {
        "name": "Faculty of Industry and Energy Technology",
        "majors": [
          {
            "name": "Food Manufacturing Technology"
          },
          {
            "name": "Wood Industries Technology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Tourism and Hotel Services Technology",
        "majors": [
          {
            "name": "Hotel Services Technology"
          },
          {
            "name": "Tourism and Travel Technology"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Luxor",
    "rating": 4.7,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@taibatechnologicaluniversity.edu.eg",
    "phone": "+20 2 20002975"
  },
  {
    "id": 44,
    "name": "Senghor University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916518/Sanghour_fhaya1.jpg",
    "description": "Université Senghor is an international French-language graduate university based in Egypt and dedicated to sustainable development in Africa. Established in 1990 under the auspices of the International Organization of La Francophonie (OIF), the university offers specialized master's programs in Management, Health, Environment, and Culture. It prepares future African leaders through high-quality education, research, and professional training in a multicultural environment.",
    "departments": [
      "Department of Management (Management)",
      "Department of Health (Health)",
      "Department of Environment (Environment)",
      "Department of Culture (Culture)"
    ],
    "faculties": [
      {
        "name": "Department of Management (Management)",
        "majors": [
          {
            "name": "Governance and Public Management"
          },
          {
            "name": "Project Management"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Department of Health (Health)",
        "majors": [
          {
            "name": "International Nutrition"
          },
          {
            "name": "International Public Health"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Department of Environment (Environment)",
        "majors": [
          {
            "name": "Environmental Management"
          },
          {
            "name": "Protected Areas and Biodiversity Management"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Department of Culture (Culture)",
        "majors": [
          {
            "name": "Cultural Heritage Management"
          },
          {
            "name": "Management of Cultural Enterprises"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Egypt",
    "rating": 4.5,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@senghoruniversity.edu.eg",
    "phone": "+20 2 20001848"
  },
  {
    "id": 45,
    "name": "Alexandria University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916507/Alexandria_eybujq.jpg",
    "description": "Alexandria University is one of Egypt's leading public universities, established in 1938 in Alexandria. It offers a wide range of undergraduate and postgraduate programs across medicine, engineering, science, business, humanities, and technology. The university is recognized for its strong academic reputation, scientific research, and international collaborations, serving thousands of students from Egypt and around the world.",
    "departments": [
      "Faculty of Medicine",
      "Faculty of Dentistry",
      "Faculty of Pharmacy",
      "Faculty of Nursing",
      "Faculty of Engineering",
      "Faculty of Science",
      "Faculty of Agriculture",
      "Faculty of Agriculture (Saba Basha)",
      "Faculty of Veterinary Medicine",
      "Faculty of Commerce",
      "Faculty of Arts",
      "Faculty of Law",
      "Faculty of Tourism and Hotels",
      "Faculty of Education",
      "Faculty of Physical Education for Men",
      "Faculty of Physical Education for Women",
      "Faculty of Fine Arts",
      "Faculty of Specific Education",
      "Faculty of Early Childhood Education",
      "Faculty of Economic Studies and Political Science",
      "Faculty of Computing and Data Science"
    ],
    "faculties": [
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "Medicine and Surgery"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Dentistry",
        "majors": [
          {
            "name": "Oral and Dental Medicine"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "Clinical Pharmacy"
          },
          {
            "name": "PharmD"
          },
          {
            "name": "Pharmaceutical Sciences"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Nursing",
        "majors": [
          {
            "name": "Nursing"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Architecture Engineering"
          },
          {
            "name": "Civil Engineering"
          },
          {
            "name": "Computer and Systems Engineering"
          },
          {
            "name": "Electrical Engineering"
          },
          {
            "name": "Mechanical Engineering"
          },
          {
            "name": "Chemical Engineering"
          },
          {
            "name": "Production Engineering"
          },
          {
            "name": "Textile Engineering"
          },
          {
            "name": "Marine Engineering and Naval Architecture"
          },
          {
            "name": "Nuclear and Radiation Engineering"
          },
          {
            "name": "Transportation Engineering"
          },
          {
            "name": "Irrigation Engineering and Hydraulics"
          },
          {
            "name": "Sanitary Engineering"
          },
          {
            "name": "Engineering Mathematics and Physics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Science",
        "majors": [
          {
            "name": "Mathematics"
          },
          {
            "name": "Physics"
          },
          {
            "name": "Chemistry"
          },
          {
            "name": "Geology"
          },
          {
            "name": "Botany"
          },
          {
            "name": "Zoology"
          },
          {
            "name": "Microbiology"
          },
          {
            "name": "Biotechnology"
          },
          {
            "name": "Environmental Science"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Agriculture",
        "majors": [
          {
            "name": "Agronomy"
          },
          {
            "name": "Horticulture"
          },
          {
            "name": "Plant Protection"
          },
          {
            "name": "Soil Science"
          },
          {
            "name": "Agricultural Engineering"
          },
          {
            "name": "Food Science"
          },
          {
            "name": "Animal Production"
          },
          {
            "name": "Agricultural Economics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Agriculture (Saba Basha)",
        "majors": [
          {
            "name": "Agronomy"
          },
          {
            "name": "Horticulture"
          },
          {
            "name": "Plant Protection"
          },
          {
            "name": "Soil Science"
          },
          {
            "name": "Agricultural Engineering"
          },
          {
            "name": "Food Science"
          },
          {
            "name": "Animal Production"
          },
          {
            "name": "Agricultural Economics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Veterinary Medicine",
        "majors": [
          {
            "name": "Veterinary Medicine"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Commerce",
        "majors": [
          {
            "name": "Accounting"
          },
          {
            "name": "Business Administration"
          },
          {
            "name": "Economics"
          },
          {
            "name": "Statistics"
          },
          {
            "name": "Insurance"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Arts",
        "majors": [
          {
            "name": "English Language and Literature"
          },
          {
            "name": "French Language and Literature"
          },
          {
            "name": "Arabic Language and Literature"
          },
          {
            "name": "History"
          },
          {
            "name": "Geography"
          },
          {
            "name": "Philosophy"
          },
          {
            "name": "Sociology"
          },
          {
            "name": "Psychology"
          },
          {
            "name": "Libraries and Information"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Law",
        "majors": [
          {
            "name": "Law"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Tourism and Hotels",
        "majors": [
          {
            "name": "Tourism Studies"
          },
          {
            "name": "Hotel Management"
          },
          {
            "name": "Tourism Guidance"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Education",
        "majors": [
          {
            "name": "Education"
          },
          {
            "name": "Educational Psychology"
          },
          {
            "name": "Curriculum and Instruction"
          },
          {
            "name": "Special Education"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Education for Men",
        "majors": [
          {
            "name": "Physical Education"
          },
          {
            "name": "Sports Training"
          },
          {
            "name": "Sports Management"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Education for Women",
        "majors": [
          {
            "name": "Physical Education"
          },
          {
            "name": "Sports Training"
          },
          {
            "name": "Sports Management"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Fine Arts",
        "majors": [
          {
            "name": "Architecture"
          },
          {
            "name": "Painting"
          },
          {
            "name": "Sculpture"
          },
          {
            "name": "Graphic Design"
          },
          {
            "name": "Interior Design"
          },
          {
            "name": "Decoration"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Specific Education",
        "majors": [
          {
            "name": "Art Education"
          },
          {
            "name": "Music Education"
          },
          {
            "name": "Educational Media"
          },
          {
            "name": "Home Economics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Early Childhood Education",
        "majors": [
          {
            "name": "Early Childhood Education"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Economic Studies and Political Science",
        "majors": [
          {
            "name": "Economics"
          },
          {
            "name": "Political Science"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Computing and Data Science",
        "majors": [
          {
            "name": "Computer Science"
          },
          {
            "name": "Data Science"
          },
          {
            "name": "Artificial Intelligence"
          },
          {
            "name": "Cybersecurity"
          },
          {
            "name": "Information Systems"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Alexandria",
    "rating": 4.8,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@alexandriauniversity.edu.eg",
    "phone": "+20 2 20002139"
  },
  {
    "id": 46,
    "name": "Damietta National University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916509/Damietta_lgfnuw.jpg",
    "description": "Damietta National University is a public national university in Egypt that offers modern academic programs aligned with labor market needs. The university provides high-quality education in medicine, engineering, business, computing, and other disciplines while emphasizing innovation, scientific research, and practical training in a modern learning environment.",
    "departments": [
      "Faculty of Medicine",
      "Faculty of Dentistry",
      "Faculty of Pharmacy",
      "Faculty of Nursing",
      "Faculty of Physical Therapy",
      "Faculty of Engineering",
      "Faculty of Computers and Artificial Intelligence",
      "Faculty of Business Administration",
      "Faculty of Arts and Design",
      "Faculty of Computer Science, Information and Artificial Intelligence",
      "Faculty of Business",
      "Faculty of Tourism and Archaeology",
      "Faculty of Al-Alsun (Languages)"
    ],
    "faculties": [
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "Medicine and Surgery"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Dentistry",
        "majors": [
          {
            "name": "Oral and Dental Medicine"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "Clinical Pharmacy"
          },
          {
            "name": "PharmD"
          },
          {
            "name": "Pharmaceutical Sciences"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Nursing",
        "majors": [
          {
            "name": "Nursing"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Therapy",
        "majors": [
          {
            "name": "Physical Therapy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Civil Engineering"
          },
          {
            "name": "Architectural Engineering"
          },
          {
            "name": "Electrical Engineering"
          },
          {
            "name": "Mechanical Engineering"
          },
          {
            "name": "Computer Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Computers and Artificial Intelligence",
        "majors": [
          {
            "name": "Computer Science"
          },
          {
            "name": "Artificial Intelligence"
          },
          {
            "name": "Information Systems"
          },
          {
            "name": "Data Science"
          },
          {
            "name": "Cybersecurity"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Business Administration",
        "majors": [
          {
            "name": "Accounting"
          },
          {
            "name": "Business Administration"
          },
          {
            "name": "Finance"
          },
          {
            "name": "Marketing"
          },
          {
            "name": "Economics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Arts and Design",
        "majors": [
          {
            "name": "Graphic Design"
          },
          {
            "name": "Interior Design"
          },
          {
            "name": "Fashion Design"
          },
          {
            "name": "Digital Media"
          },
          {
            "name": "Visual Arts"
          },
          {
            "name": "Furniture Design and Technology"
          },
          {
            "name": "Media Arts"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Computer Science, Information and Artificial Intelligence",
        "majors": [
          {
            "name": "Computer Science"
          },
          {
            "name": "Information Systems"
          },
          {
            "name": "Artificial Intelligence"
          },
          {
            "name": "Medical Informatics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Business",
        "majors": [
          {
            "name": "Accounting"
          },
          {
            "name": "Business Administration"
          },
          {
            "name": "Marketing"
          },
          {
            "name": "Finance"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Tourism and Archaeology",
        "majors": [
          {
            "name": "Tourism Studies"
          },
          {
            "name": "Archaeology"
          },
          {
            "name": "Museum Studies"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Al-Alsun (Languages)",
        "majors": [
          {
            "name": "English Language"
          },
          {
            "name": "French Language"
          },
          {
            "name": "German Language"
          },
          {
            "name": "Translation"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Damietta",
    "rating": 4.6,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@damiettanationaluniversity.edu.eg",
    "phone": "+20 2 20002785"
  },
  {
    "id": 47,
    "name": "East Port Said National University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916510/EastPortSaidNational_jeqmlg.webp",
    "description": "East Port Said National University is a modern public national university in Egypt that offers innovative academic programs designed to meet the needs of the future labor market. The university focuses on practical learning, scientific research, innovation, and international collaboration, providing students with a modern educational environment that prepares them for successful careers in healthcare, engineering, business, technology, and the humanities.",
    "departments": [
      "Faculty of Medicine",
      "Faculty of Pharmacy",
      "Faculty of Engineering",
      "Faculty of Computer Science and Information Technology",
      "Faculty of Applied Health Sciences",
      "Faculty of Arts",
      "Faculty of Business Sciences"
    ],
    "faculties": [
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "Medicine and Surgery"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "Clinical Pharmacy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Mechatronics Engineering"
          },
          {
            "name": "Artificial Intelligence and Machine Learning"
          },
          {
            "name": "Energy and Electrical Power"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Computer Science and Information Technology",
        "majors": [
          {
            "name": "Computer Science"
          },
          {
            "name": "Artificial Intelligence"
          },
          {
            "name": "Data Science in Information Systems"
          },
          {
            "name": "Biomedical Informatics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Applied Health Sciences",
        "majors": [
          {
            "name": "Medical Laboratory Technology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Arts",
        "majors": [
          {
            "name": "Geomatics and Artificial Intelligence"
          },
          {
            "name": "English Language and Translation"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Business Sciences",
        "majors": [
          {
            "name": "Accounting and Software Applications"
          },
          {
            "name": "Digital Marketing and E-Management"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Port Said",
    "rating": 4.5,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@eastportsaidnationaluniversity.edu.eg",
    "phone": "+20 2 20003243"
  },
  {
    "id": 48,
    "name": "Zagazig University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916521/Zagazig_kn8xxx.jpg",
    "description": "Zagazig University is one of Egypt's leading public universities, established in 1974 in Sharkia Governorate. It offers a wide range of undergraduate and postgraduate programs in medicine, engineering, agriculture, science, business, humanities, and information technology. The university is known for its strong academic programs, scientific research, university hospitals, and community service, attracting students from across Egypt and abroad.",
    "departments": [
      "Faculty of Medicine",
      "Faculty of Dentistry",
      "Faculty of Pharmacy",
      "Faculty of Nursing",
      "Faculty of Engineering",
      "Faculty of Science",
      "Faculty of Agriculture",
      "Faculty of Veterinary Medicine",
      "Faculty of Commerce",
      "Faculty of Arts",
      "Faculty of Law",
      "Faculty of Education",
      "Faculty of Physical Education for Men",
      "Faculty of Physical Education for Women",
      "Faculty of Specific Education",
      "Faculty of Computing and Information",
      "College of Technology and Development"
    ],
    "faculties": [
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "Medicine and Surgery"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Dentistry",
        "majors": [
          {
            "name": "Oral and Dental Medicine"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "Clinical Pharmacy"
          },
          {
            "name": "PharmD"
          },
          {
            "name": "Pharmaceutical Sciences"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Nursing",
        "majors": [
          {
            "name": "Nursing"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Civil Engineering"
          },
          {
            "name": "Architectural Engineering"
          },
          {
            "name": "Mechanical Engineering"
          },
          {
            "name": "Electrical Engineering"
          },
          {
            "name": "Computer Engineering"
          },
          {
            "name": "Chemical Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Science",
        "majors": [
          {
            "name": "Mathematics"
          },
          {
            "name": "Physics"
          },
          {
            "name": "Chemistry"
          },
          {
            "name": "Geology"
          },
          {
            "name": "Botany"
          },
          {
            "name": "Zoology"
          },
          {
            "name": "Microbiology"
          },
          {
            "name": "Biochemistry"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Agriculture",
        "majors": [
          {
            "name": "Agronomy"
          },
          {
            "name": "Horticulture"
          },
          {
            "name": "Plant Protection"
          },
          {
            "name": "Soil Science"
          },
          {
            "name": "Animal Production"
          },
          {
            "name": "Food Science"
          },
          {
            "name": "Agricultural Economics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Veterinary Medicine",
        "majors": [
          {
            "name": "Veterinary Medicine"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Commerce",
        "majors": [
          {
            "name": "Accounting"
          },
          {
            "name": "Business Administration"
          },
          {
            "name": "Economics"
          },
          {
            "name": "Statistics"
          },
          {
            "name": "Insurance"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Arts",
        "majors": [
          {
            "name": "Arabic Language and Literature"
          },
          {
            "name": "English Language and Literature"
          },
          {
            "name": "French Language and Literature"
          },
          {
            "name": "Spanish Language and Literature"
          },
          {
            "name": "History"
          },
          {
            "name": "Geography and Environmental Information"
          },
          {
            "name": "Psychology"
          },
          {
            "name": "Sociology"
          },
          {
            "name": "Philosophy"
          },
          {
            "name": "Mass Communication"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Law",
        "majors": [
          {
            "name": "Law"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Education",
        "majors": [
          {
            "name": "Education"
          },
          {
            "name": "Curriculum and Instruction"
          },
          {
            "name": "Educational Psychology"
          },
          {
            "name": "Special Education"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Education for Men",
        "majors": [
          {
            "name": "Physical Education"
          },
          {
            "name": "Sports Training"
          },
          {
            "name": "Sports Management"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Education for Women",
        "majors": [
          {
            "name": "Physical Education"
          },
          {
            "name": "Sports Training"
          },
          {
            "name": "Sports Management"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Specific Education",
        "majors": [
          {
            "name": "Art Education"
          },
          {
            "name": "Music Education"
          },
          {
            "name": "Educational Media"
          },
          {
            "name": "Home Economics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Computing and Information",
        "majors": [
          {
            "name": "Computer Science"
          },
          {
            "name": "Information Systems"
          },
          {
            "name": "Information Technology"
          },
          {
            "name": "Artificial Intelligence"
          }
        ],
        "annualFee": null
      },
      {
        "name": "College of Technology and Development",
        "majors": [
          {
            "name": "Agricultural Technology"
          },
          {
            "name": "Industrial Technology"
          },
          {
            "name": "Business and Development"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Zagazig",
    "rating": 4.5,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@zagaziguniversity.edu.eg",
    "phone": "+20 2 20001839"
  },
  {
    "id": 49,
    "name": "Zagazig Technological University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916521/Zagazig_kn8xxx.jpg",
    "description": "Zagazig Technological University is one of Egypt's public technological universities, established to provide practice-oriented education that meets the needs of modern industry and the labor market. The university focuses on applied technology, technical innovation, and hands-on training through advanced laboratories and partnerships with industrial sectors, preparing graduates for careers in engineering and industrial technologies.",
    "departments": [
      "Faculty of Industry and Energy Technology"
    ],
    "faculties": [
      {
        "name": "Faculty of Industry and Energy Technology",
        "majors": [
          {
            "name": "Information Technology"
          },
          {
            "name": "Mechatronics"
          },
          {
            "name": "New and Renewable Energy"
          },
          {
            "name": "Autotronics (Automotive Technology)"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Zagazig",
    "rating": 4.9,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@zagazigtechnologicaluniversity.edu.eg",
    "phone": "+20 2 20003211"
  },
  {
    "id": 50,
    "name": "Menoufia University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916514/Menoufia_smnfnt.jpg",
    "description": "Menoufia University is a leading public university in Egypt, established in 1976 in Shebin El Kom, Menoufia Governorate. The university offers a wide range of undergraduate and postgraduate programs in medicine, engineering, agriculture, science, business, humanities, and technology. It is well known for its excellence in education, scientific research, healthcare services, and community development, serving thousands of students from Egypt and abroad.",
    "departments": [
      "Faculty of Medicine",
      "Faculty of Dentistry",
      "Faculty of Pharmacy",
      "Faculty of Nursing",
      "Faculty of Engineering",
      "Faculty of Electronic Engineering",
      "Faculty of Artificial Intelligence",
      "Faculty of Computers and Information",
      "Faculty of Science",
      "Faculty of Agriculture",
      "Faculty of Veterinary Medicine",
      "Faculty of Commerce",
      "Faculty of Arts",
      "Faculty of Law",
      "Faculty of Education",
      "Faculty of Physical Education",
      "Faculty of Home Economics",
      "Faculty of Specific Education",
      "Faculty of Mass Communication",
      "Faculty of Education for Early Childhood",
      "Faculty of Applied Medical Sciences",
      "National Institute of Liver Diseases",
      "Institute of Oncology"
    ],
    "faculties": [
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "Medicine and Surgery"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Dentistry",
        "majors": [
          {
            "name": "Oral and Dental Medicine"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "Clinical Pharmacy"
          },
          {
            "name": "PharmD"
          },
          {
            "name": "Pharmaceutical Sciences"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Nursing",
        "majors": [
          {
            "name": "Nursing"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Civil Engineering"
          },
          {
            "name": "Architectural Engineering"
          },
          {
            "name": "Mechanical Engineering"
          },
          {
            "name": "Electrical Engineering"
          },
          {
            "name": "Industrial Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Electronic Engineering",
        "majors": [
          {
            "name": "Electronics and Communications Engineering"
          },
          {
            "name": "Computer Engineering"
          },
          {
            "name": "Industrial Electronics and Control Engineering"
          },
          {
            "name": "Power Electronics Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Artificial Intelligence",
        "majors": [
          {
            "name": "Artificial Intelligence"
          },
          {
            "name": "Machine Learning"
          },
          {
            "name": "Data Science"
          },
          {
            "name": "Intelligent Systems"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Computers and Information",
        "majors": [
          {
            "name": "Computer Science"
          },
          {
            "name": "Information Systems"
          },
          {
            "name": "Information Technology"
          },
          {
            "name": "Software Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Science",
        "majors": [
          {
            "name": "Mathematics"
          },
          {
            "name": "Physics"
          },
          {
            "name": "Chemistry"
          },
          {
            "name": "Geology"
          },
          {
            "name": "Botany"
          },
          {
            "name": "Zoology"
          },
          {
            "name": "Biochemistry"
          },
          {
            "name": "Microbiology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Agriculture",
        "majors": [
          {
            "name": "Agronomy"
          },
          {
            "name": "Horticulture"
          },
          {
            "name": "Plant Protection"
          },
          {
            "name": "Animal Production"
          },
          {
            "name": "Food Science"
          },
          {
            "name": "Agricultural Economics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Veterinary Medicine",
        "majors": [
          {
            "name": "Veterinary Medicine"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Commerce",
        "majors": [
          {
            "name": "Accounting"
          },
          {
            "name": "Business Administration"
          },
          {
            "name": "Economics"
          },
          {
            "name": "Statistics"
          },
          {
            "name": "Insurance"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Arts",
        "majors": [
          {
            "name": "Arabic Language and Literature"
          },
          {
            "name": "English Language and Literature"
          },
          {
            "name": "French Language and Literature"
          },
          {
            "name": "History"
          },
          {
            "name": "Geography"
          },
          {
            "name": "Psychology"
          },
          {
            "name": "Sociology"
          },
          {
            "name": "Philosophy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Law",
        "majors": [
          {
            "name": "Law"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Education",
        "majors": [
          {
            "name": "Education"
          },
          {
            "name": "Curriculum and Instruction"
          },
          {
            "name": "Educational Psychology"
          },
          {
            "name": "Special Education"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Education",
        "majors": [
          {
            "name": "Physical Education"
          },
          {
            "name": "Sports Training"
          },
          {
            "name": "Sports Management"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Home Economics",
        "majors": [
          {
            "name": "Nutrition and Food Science"
          },
          {
            "name": "Clothing and Textiles"
          },
          {
            "name": "Home Management"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Specific Education",
        "majors": [
          {
            "name": "Art Education"
          },
          {
            "name": "Music Education"
          },
          {
            "name": "Educational Media"
          },
          {
            "name": "Home Economics Education"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Mass Communication",
        "majors": [
          {
            "name": "Journalism"
          },
          {
            "name": "Radio and Television"
          },
          {
            "name": "Public Relations and Advertising"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Education for Early Childhood",
        "majors": [
          {
            "name": "Early Childhood Education"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Applied Medical Sciences",
        "majors": [
          {
            "name": "Medical Laboratory Sciences"
          },
          {
            "name": "Radiological Sciences"
          }
        ],
        "annualFee": null
      },
      {
        "name": "National Institute of Liver Diseases",
        "majors": [
          {
            "name": "Hepatology"
          },
          {
            "name": "Gastroenterology"
          },
          {
            "name": "Liver Surgery"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Institute of Oncology",
        "majors": [
          {
            "name": "Clinical Oncology"
          },
          {
            "name": "Medical Oncology"
          },
          {
            "name": "Radiation Oncology"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Egypt",
    "rating": 4.9,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@menoufiauniversity.edu.eg",
    "phone": "+20 2 20001942"
  },
  {
    "id": 51,
    "name": "Delta Technological University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916509/DeltaTechnological_myu34u.jpg",
    "description": "Delta Technological University is a public technological university in Egypt, located in Quesna, Menoufia Governorate. It was established to provide high-quality applied technological education that meets the needs of industry and the labor market. The university emphasizes hands-on training, innovation, digital transformation, and partnerships with industrial sectors, enabling students to gain practical skills alongside academic knowledge.",
    "departments": [
      "Technological College of Industry and Energy"
    ],
    "faculties": [
      {
        "name": "Technological College of Industry and Energy",
        "majors": [
          {
            "name": "Information Technology"
          },
          {
            "name": "Mechatronics Technology"
          },
          {
            "name": "Autotronics Technology"
          },
          {
            "name": "New and Renewable Energy Technology"
          },
          {
            "name": "Refrigeration and Air Conditioning Technology"
          },
          {
            "name": "Prosthetics and Orthotics Technology"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Quesna",
    "rating": 4.7,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@deltatechnologicaluniversity.edu.eg",
    "phone": "+20 2 20002984"
  },
  {
    "id": 52,
    "name": "Menoufia National University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916514/MenoufiaNational_fvyt1j.jpg",
    "description": "Menoufia National University is a public national university in Egypt that offers modern academic programs designed to meet national and international labor market needs. The university focuses on high-quality education, scientific research, innovation, and practical training through advanced educational facilities and partnerships with industry.",
    "departments": [
      "Faculty of Medicine",
      "Faculty of Dentistry",
      "Faculty of Pharmacy",
      "Faculty of Nursing",
      "Faculty of Engineering",
      "Faculty of Computer Science and Artificial Intelligence",
      "Faculty of Business",
      "Faculty of Physical Therapy"
    ],
    "faculties": [
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "Medicine and Surgery"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Dentistry",
        "majors": [
          {
            "name": "Oral and Dental Medicine"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "Clinical Pharmacy"
          },
          {
            "name": "PharmD"
          },
          {
            "name": "Pharmaceutical Sciences"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Nursing",
        "majors": [
          {
            "name": "Nursing"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Civil Engineering"
          },
          {
            "name": "Architectural Engineering"
          },
          {
            "name": "Electrical Engineering"
          },
          {
            "name": "Mechanical Engineering"
          },
          {
            "name": "Mechatronics Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Computer Science and Artificial Intelligence",
        "majors": [
          {
            "name": "Computer Science"
          },
          {
            "name": "Artificial Intelligence"
          },
          {
            "name": "Information Systems"
          },
          {
            "name": "Data Science"
          },
          {
            "name": "Cybersecurity"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Business",
        "majors": [
          {
            "name": "Accounting"
          },
          {
            "name": "Business Administration"
          },
          {
            "name": "Marketing"
          },
          {
            "name": "Finance"
          },
          {
            "name": "Economics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Therapy",
        "majors": [
          {
            "name": "Physical Therapy"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Egypt",
    "rating": 4.8,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@menoufianationaluniversity.edu.eg",
    "phone": "+20 2 20002796"
  },
  {
    "id": 53,
    "name": "University of Sadat City",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916517/Sadat_City_wxtyh6.jpg",
    "description": "University of Sadat City is a public Egyptian university established as an independent university in 2013 after originally operating as a branch of Menoufia University. Located in Sadat City, it offers undergraduate and postgraduate programs in healthcare, science, education, law, business, tourism, computing, and sports sciences. The university is recognized for its strong focus on scientific research, biotechnology, environmental studies, and practical education.",
    "departments": [
      "Faculty of Veterinary Medicine",
      "Faculty of Physical Education",
      "Faculty of Tourism and Hotels",
      "Faculty of Commerce",
      "Faculty of Law",
      "Faculty of Education",
      "Faculty of Pharmacy",
      "Faculty of Education for Early Childhood",
      "Faculty of Computers and Artificial Intelligence",
      "Faculty of Science",
      "Faculty of Nursing"
    ],
    "faculties": [
      {
        "name": "Faculty of Veterinary Medicine",
        "majors": [
          {
            "name": "Veterinary Medicine"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Education",
        "majors": [
          {
            "name": "Physical Education"
          },
          {
            "name": "Sports Training"
          },
          {
            "name": "Sports Management"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Tourism and Hotels",
        "majors": [
          {
            "name": "Tourism Studies"
          },
          {
            "name": "Hotel Management"
          },
          {
            "name": "Tourism Guidance"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Commerce",
        "majors": [
          {
            "name": "Accounting"
          },
          {
            "name": "Business Administration"
          },
          {
            "name": "Economics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Law",
        "majors": [
          {
            "name": "Law"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Education",
        "majors": [
          {
            "name": "Arabic Language"
          },
          {
            "name": "English Language"
          },
          {
            "name": "French Language"
          },
          {
            "name": "Mathematics"
          },
          {
            "name": "Physics"
          },
          {
            "name": "Chemistry"
          },
          {
            "name": "Biology"
          },
          {
            "name": "Geology"
          },
          {
            "name": "History"
          },
          {
            "name": "Geography"
          },
          {
            "name": "Basic Education"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "Clinical Pharmacy"
          },
          {
            "name": "PharmD"
          },
          {
            "name": "Pharmaceutical Sciences"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Education for Early Childhood",
        "majors": [
          {
            "name": "Early Childhood Education"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Computers and Artificial Intelligence",
        "majors": [
          {
            "name": "Computer Science"
          },
          {
            "name": "Artificial Intelligence"
          },
          {
            "name": "Information Systems"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Science",
        "majors": [
          {
            "name": "Mathematics"
          },
          {
            "name": "Physics"
          },
          {
            "name": "Chemistry"
          },
          {
            "name": "Botany"
          },
          {
            "name": "Zoology"
          },
          {
            "name": "Microbiology"
          },
          {
            "name": "Biochemistry"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Nursing",
        "majors": [
          {
            "name": "Nursing"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Sadat City",
    "rating": 4.8,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@universityofsadatcity.edu.eg",
    "phone": "+20 2 20002301"
  },
  {
    "id": 54,
    "name": "Damietta University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784921956/FkkdJrydJ9bx1q3jseXDRdYDKqyy4KjnJwjVA48h_msug9a.webp",
    "description": "Damietta University is a leading public university in Egypt, established as an independent university in 2012 in New Damietta City. It offers a wide range of undergraduate and postgraduate programs in medicine, engineering, computing, applied arts, science, business, humanities, and education. The university is recognized for its commitment to academic excellence, scientific research, innovation, and community service, providing students with a modern learning environment and strong practical training opportunities.",
    "departments": [
      "Faculty of Medicine",
      "Faculty of Computing and Artificial Intelligence",
      "Faculty of Engineering",
      "Faculty of Law",
      "Faculty of Archaeology",
      "Faculty of Nursing",
      "Faculty of Applied Arts",
      "Faculty of Education",
      "Faculty of Science",
      "Faculty of Commerce",
      "Faculty of Arts",
      "Faculty of Agriculture",
      "Faculty of Specific Education",
      "Faculty of Physical Education"
    ],
    "faculties": [
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "Medicine and Surgery"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Computing and Artificial Intelligence",
        "majors": [
          {
            "name": "Computer Science"
          },
          {
            "name": "Artificial Intelligence"
          },
          {
            "name": "Information Systems"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Civil Engineering"
          },
          {
            "name": "Architectural Engineering"
          },
          {
            "name": "Electrical Engineering"
          },
          {
            "name": "Mechanical Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Law",
        "majors": [
          {
            "name": "Law"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Archaeology",
        "majors": [
          {
            "name": "Archaeology"
          },
          {
            "name": "Islamic Archaeology"
          },
          {
            "name": "Egyptian Archaeology"
          },
          {
            "name": "Restoration and Conservation of Antiquities"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Nursing",
        "majors": [
          {
            "name": "Nursing"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Applied Arts",
        "majors": [
          {
            "name": "Graphic Design"
          },
          {
            "name": "Interior Design and Furniture"
          },
          {
            "name": "Industrial Design"
          },
          {
            "name": "Textile Printing, Dyeing and Finishing"
          },
          {
            "name": "Textile Spinning, Weaving and Knitting"
          },
          {
            "name": "Ready-Made Garments"
          },
          {
            "name": "Ceramics"
          },
          {
            "name": "Glass"
          },
          {
            "name": "Metal Products and Jewelry"
          },
          {
            "name": "Photography, Cinema and Television"
          },
          {
            "name": "Advertising"
          },
          {
            "name": "Publishing, Printing and Packaging"
          },
          {
            "name": "Sculpture, Architectural Formation and Restoration"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Education",
        "majors": [
          {
            "name": "Arabic Language"
          },
          {
            "name": "English Language"
          },
          {
            "name": "French Language"
          },
          {
            "name": "Mathematics"
          },
          {
            "name": "Physics"
          },
          {
            "name": "Chemistry"
          },
          {
            "name": "Biology"
          },
          {
            "name": "History"
          },
          {
            "name": "Geography"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Science",
        "majors": [
          {
            "name": "Mathematics"
          },
          {
            "name": "Physics"
          },
          {
            "name": "Chemistry"
          },
          {
            "name": "Botany"
          },
          {
            "name": "Zoology"
          },
          {
            "name": "Microbiology"
          },
          {
            "name": "Geology"
          },
          {
            "name": "Biochemistry"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Commerce",
        "majors": [
          {
            "name": "Accounting"
          },
          {
            "name": "Business Administration"
          },
          {
            "name": "Economics"
          },
          {
            "name": "Statistics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Arts",
        "majors": [
          {
            "name": "Arabic Language and Literature"
          },
          {
            "name": "English Language and Literature"
          },
          {
            "name": "French Language and Literature"
          },
          {
            "name": "History"
          },
          {
            "name": "Geography"
          },
          {
            "name": "Sociology"
          },
          {
            "name": "Psychology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Agriculture",
        "majors": [
          {
            "name": "Agronomy"
          },
          {
            "name": "Horticulture"
          },
          {
            "name": "Plant Protection"
          },
          {
            "name": "Agricultural Engineering"
          },
          {
            "name": "Animal Production"
          },
          {
            "name": "Food Industries"
          },
          {
            "name": "Agricultural Economics"
          },
          {
            "name": "Genetics"
          },
          {
            "name": "Soil Sciences"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Specific Education",
        "majors": [
          {
            "name": "Art Education"
          },
          {
            "name": "Music Education"
          },
          {
            "name": "Home Economics"
          },
          {
            "name": "Educational Media"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Education",
        "majors": [
          {
            "name": "Physical Education"
          },
          {
            "name": "Sports Training"
          },
          {
            "name": "Sports Management"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Damietta",
    "rating": 4.7,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@damiettauniversity.edu.eg",
    "phone": "+20 2 20001931"
  },
  {
    "id": 55,
    "name": "Kafrelsheikh University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916512/Kafrelsheikh_r73mh7.jpg",
    "description": "Kafrelsheikh University is one of Egypt's leading public universities, established as an independent university in 2006. Located in Kafr El Sheikh Governorate, it offers a wide range of undergraduate and postgraduate programs in medicine, engineering, artificial intelligence, agriculture, fisheries, science, business, humanities, and languages. The university is recognized for its excellence in scientific research, innovation, sustainability, and advanced research institutes, making it one of the country's rapidly developing universities.",
    "departments": [
      "Faculty of Medicine",
      "Faculty of Dentistry",
      "Faculty of Pharmacy",
      "Faculty of Nursing",
      "Faculty of Physical Therapy",
      "Faculty of Veterinary Medicine",
      "Faculty of Engineering",
      "Faculty of Artificial Intelligence",
      "Faculty of Computers and Information",
      "Faculty of Science",
      "Faculty of Agriculture",
      "Faculty of Fisheries and Aquaculture Sciences",
      "Faculty of Commerce",
      "Faculty of Arts",
      "Faculty of Law",
      "Faculty of Education",
      "Faculty of Physical Education",
      "Faculty of Specific Education",
      "Faculty of Al-Alsun (Languages)"
    ],
    "faculties": [
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "Medicine and Surgery"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Dentistry",
        "majors": [
          {
            "name": "Medicine and Surgery"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "Clinical Pharmacy"
          },
          {
            "name": "PharmD"
          },
          {
            "name": "Pharmaceutical Sciences"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Nursing",
        "majors": [
          {
            "name": "Nursing"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Therapy",
        "majors": [
          {
            "name": "Nursing"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Veterinary Medicine",
        "majors": [
          {
            "name": "Veterinary Medicine"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Civil Engineering"
          },
          {
            "name": "Architectural Engineering"
          },
          {
            "name": "Mechanical Engineering"
          },
          {
            "name": "Electrical Engineering"
          },
          {
            "name": "Industrial Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Artificial Intelligence",
        "majors": [
          {
            "name": "Artificial Intelligence"
          },
          {
            "name": "Machine Learning"
          },
          {
            "name": "Data Science"
          },
          {
            "name": "Intelligent Systems"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Computers and Information",
        "majors": [
          {
            "name": "Artificial Intelligence"
          },
          {
            "name": "Machine Learning"
          },
          {
            "name": "Data Science"
          },
          {
            "name": "Intelligent Systems"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Science",
        "majors": [
          {
            "name": "Mathematics"
          },
          {
            "name": "Physics"
          },
          {
            "name": "Chemistry"
          },
          {
            "name": "Geology"
          },
          {
            "name": "Botany"
          },
          {
            "name": "Zoology"
          },
          {
            "name": "Biochemistry"
          },
          {
            "name": "Biotechnology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Agriculture",
        "majors": [
          {
            "name": "Agronomy"
          },
          {
            "name": "Horticulture"
          },
          {
            "name": "Plant Protection"
          },
          {
            "name": "Soil Science"
          },
          {
            "name": "Agricultural Engineering"
          },
          {
            "name": "Food Science"
          },
          {
            "name": "Animal Production"
          },
          {
            "name": "Agricultural Economics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Fisheries and Aquaculture Sciences",
        "majors": [
          {
            "name": "Aquaculture"
          },
          {
            "name": "Fish Processing Technology"
          },
          {
            "name": "Fisheries"
          },
          {
            "name": "Marine Biotechnology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Commerce",
        "majors": [
          {
            "name": "Accounting"
          },
          {
            "name": "Business Administration"
          },
          {
            "name": "Economics"
          },
          {
            "name": "Statistics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Arts",
        "majors": [
          {
            "name": "Arabic Language and Literature"
          },
          {
            "name": "English Language and Literature"
          },
          {
            "name": "French Language and Literature"
          },
          {
            "name": "History"
          },
          {
            "name": "Geography and GIS"
          },
          {
            "name": "Psychology"
          },
          {
            "name": "Sociology"
          },
          {
            "name": "Philosophy"
          },
          {
            "name": "Media"
          },
          {
            "name": "Libraries and Information"
          },
          {
            "name": "Archaeology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Law",
        "majors": [
          {
            "name": "Law"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Education",
        "majors": [
          {
            "name": "Education"
          },
          {
            "name": "Curriculum and Instruction"
          },
          {
            "name": "Educational Psychology"
          },
          {
            "name": "Special Education"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Education",
        "majors": [
          {
            "name": "Physical Education"
          },
          {
            "name": "Sports Training"
          },
          {
            "name": "Sports Management"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Specific Education",
        "majors": [
          {
            "name": "Art Education"
          },
          {
            "name": "Music Education"
          },
          {
            "name": "Home Economics"
          },
          {
            "name": "Educational Media"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Al-Alsun (Languages)",
        "majors": [
          {
            "name": "English Language"
          },
          {
            "name": "French Language"
          },
          {
            "name": "German Language"
          },
          {
            "name": "Chinese Language"
          },
          {
            "name": "Spanish Language"
          },
          {
            "name": "Translation"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Kafr El Sheikh Governorate",
    "rating": 4.8,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@kafrelsheikhuniversity.edu.eg",
    "phone": "+20 2 20002355"
  },
  {
    "id": 56,
    "name": "Kafrelsheikh National University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916512/KafrelsheikhNationa_gskk5r.jpg",
    "description": "Kafrelsheikh National University is a public national university established in 2025 to provide high-quality education based on international academic standards. The university offers modern interdisciplinary programs that emphasize innovation, digital transformation, scientific research, and practical training, preparing graduates to meet the needs of local, regional, and global labor markets.",
    "departments": [
      "Faculty of Medicine",
      "Faculty of Oral and Dental Medicine",
      "Faculty of Pharmacy",
      "Faculty of Physical Therapy",
      "Faculty of Nursing",
      "Faculty of Veterinary Medicine",
      "Faculty of Engineering",
      "Faculty of Computers, Information and Artificial Intelligence",
      "Faculty of Science",
      "Faculty of Agriculture",
      "Faculty of Languages and Humanities",
      "Faculty of Business",
      "Faculty of Arts and Design"
    ],
    "faculties": [
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "Medicine and Surgery"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Oral and Dental Medicine",
        "majors": [
          {
            "name": "Oral and Dental Medicine"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "PharmD"
          },
          {
            "name": "Clinical Pharmacy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Therapy",
        "majors": [
          {
            "name": "Physical Therapy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Nursing",
        "majors": [
          {
            "name": "Nursing"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Veterinary Medicine",
        "majors": [
          {
            "name": "Food Safety"
          },
          {
            "name": "Pet Medicine and Surgery"
          },
          {
            "name": "Veterinary Drugs and Biological Preparations"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Mechatronics Engineering"
          },
          {
            "name": "Renewable and Sustainable Energy Engineering"
          },
          {
            "name": "Digital Architecture"
          },
          {
            "name": "Artificial Intelligence Engineering"
          },
          {
            "name": "Structural Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Computers, Information and Artificial Intelligence",
        "majors": [
          {
            "name": "Computer Science"
          },
          {
            "name": "Artificial Intelligence"
          },
          {
            "name": "Bioinformatics"
          },
          {
            "name": "Cybersecurity and Digital Forensics"
          },
          {
            "name": "Bio-Artificial Intelligence"
          },
          {
            "name": "Virtual and Augmented Reality"
          },
          {
            "name": "Digital Crime Analysis"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Science",
        "majors": [
          {
            "name": "Petroleum Geology and Mineral Exploration"
          },
          {
            "name": "Applied Biotechnology"
          },
          {
            "name": "Biochemistry"
          },
          {
            "name": "Nanoscience and Technology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Agriculture",
        "majors": [
          {
            "name": "Agricultural Biotechnology"
          },
          {
            "name": "Protected Agriculture Technology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Languages and Humanities",
        "majors": [
          {
            "name": "English Language and Specialized Translation"
          },
          {
            "name": "Chinese Language and Specialized Translation"
          },
          {
            "name": "German Language and Specialized Translation"
          },
          {
            "name": "Spanish Language and Specialized Translation"
          },
          {
            "name": "Geographic Information Systems (GIS)"
          },
          {
            "name": "Clinical Psychology"
          },
          {
            "name": "Geoarchaeology"
          },
          {
            "name": "Archaeological Information Systems"
          },
          {
            "name": "Digital Technical Teacher Preparation"
          },
          {
            "name": "Digital Early Childhood Education"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Business",
        "majors": [
          {
            "name": "Accounting and Business Analytics"
          },
          {
            "name": "Business Information Systems"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Arts and Design",
        "majors": [
          {
            "name": "Interior Design"
          },
          {
            "name": "Textile and Apparel Design"
          },
          {
            "name": "Graphic Design and Animation"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Egypt",
    "rating": 4.7,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@kafrelsheikhnationaluniversity.edu.eg",
    "phone": "+20 2 20003209"
  },
  {
    "id": 57,
    "name": "The American University in Cairo (AUC)",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916520/The_American_zb9ge3.jpg",
    "description": "The American University in Cairo (AUC) is a leading private, English-language university located in New Cairo, Egypt. Founded in 1919, AUC offers an American-style liberal arts education and is accredited in both Egypt and the United States. The university is known for its high academic standards, world-class faculty, modern campus, and diverse international community. It prepares students with critical thinking, leadership, and professional skills for successful careers worldwide.",
    "departments": [
      "Onsi Sawiris School of Business",
      "School of Global Affairs and Public Policy",
      "School of Humanities and Social Sciences",
      "School of Sciences and Engineering"
    ],
    "faculties": [
      {
        "name": "Onsi Sawiris School of Business",
        "majors": [
          {
            "name": "Accounting"
          },
          {
            "name": "Business and Entrepreneurship"
          },
          {
            "name": "Business in Finance"
          },
          {
            "name": "Business in Marketing"
          },
          {
            "name": "Economics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "School of Global Affairs and Public Policy",
        "majors": [
          {
            "name": "Communication and Media Arts"
          },
          {
            "name": "Journalism"
          },
          {
            "name": "Political Science"
          },
          {
            "name": "Public Policy"
          },
          {
            "name": "Law (Undergraduate Law Programs)"
          }
        ],
        "annualFee": null
      },
      {
        "name": "School of Humanities and Social Sciences",
        "majors": [
          {
            "name": "Anthropology"
          },
          {
            "name": "Arabic Studies"
          },
          {
            "name": "Applied Linguistics"
          },
          {
            "name": "Educational Studies"
          },
          {
            "name": "English and Comparative Literature"
          },
          {
            "name": "History"
          },
          {
            "name": "Philosophy"
          },
          {
            "name": "Psychology"
          },
          {
            "name": "Sociology"
          },
          {
            "name": "Egyptology"
          },
          {
            "name": "Theatre"
          },
          {
            "name": "Music"
          },
          {
            "name": "Visual Arts"
          }
        ],
        "annualFee": null
      },
      {
        "name": "School of Sciences and Engineering",
        "majors": [
          {
            "name": "Architecture"
          },
          {
            "name": "Actuarial Science"
          },
          {
            "name": "Biology"
          },
          {
            "name": "Genomics and Biotechnology"
          },
          {
            "name": "Ecology and Conservation Biology"
          },
          {
            "name": "Chemistry"
          },
          {
            "name": "Petrochemical Industry"
          },
          {
            "name": "Food Chemistry"
          },
          {
            "name": "Computer Science"
          },
          {
            "name": "Data Science"
          },
          {
            "name": "Construction Engineering"
          },
          {
            "name": "Electronics and Communications Engineering"
          },
          {
            "name": "Mathematics"
          },
          {
            "name": "Mechanical Engineering"
          },
          {
            "name": "Petroleum and Energy Engineering"
          },
          {
            "name": "Physics"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Cairo",
    "rating": 4.9,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@theamericanuniversityincairoauc.edu.eg",
    "phone": "+20 2 20003346"
  },
  {
    "id": 58,
    "name": "German University in Cairo (GUC)",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916511/German_jbqki4.jpg",
    "description": "The German University in Cairo (GUC) is a leading private university in Egypt, established in 2002 through cooperation between Egypt and Germany. Located in New Cairo, GUC offers German-accredited education with programs taught primarily in English. The university combines academic excellence, scientific research, and practical training while maintaining strong partnerships with German universities and industry. It provides students with a modern learning environment and prepares graduates for successful careers both locally and internationally.",
    "departments": [
      "Faculty of Information Engineering and Technology",
      "Faculty of Media Engineering and Technology",
      "Faculty of Engineering and Materials Science",
      "Faculty of Pharmacy and Biotechnology",
      "Faculty of Management Technology",
      "Faculty of Applied Sciences and Arts",
      "Faculty of Dentistry",
      "Faculty of Law and Legal Studies"
    ],
    "faculties": [
      {
        "name": "Faculty of Information Engineering and Technology",
        "majors": [
          {
            "name": "Networks Engineering"
          },
          {
            "name": "Communications Engineering"
          },
          {
            "name": "Electronics Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Media Engineering and Technology",
        "majors": [
          {
            "name": "Computer Science and Engineering"
          },
          {
            "name": "Digital Media Engineering and Technology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering and Materials Science",
        "majors": [
          {
            "name": "Architecture Engineering"
          },
          {
            "name": "Civil Engineering"
          },
          {
            "name": "Design and Production Engineering"
          },
          {
            "name": "Materials Engineering"
          },
          {
            "name": "Mechatronics Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy and Biotechnology",
        "majors": [
          {
            "name": "PharmD"
          },
          {
            "name": "PharmD – Clinical Pharmacy"
          },
          {
            "name": "Biotechnology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Management Technology",
        "majors": [
          {
            "name": "General Management"
          },
          {
            "name": "Accounting and Financial Control"
          },
          {
            "name": "Economics"
          },
          {
            "name": "Finance"
          },
          {
            "name": "Human Resources and Organizational Behavior"
          },
          {
            "name": "Information Systems"
          },
          {
            "name": "Innovation and Technology Management"
          },
          {
            "name": "International Business"
          },
          {
            "name": "Marketing"
          },
          {
            "name": "Production and Operations"
          },
          {
            "name": "Strategic Management"
          },
          {
            "name": "Business Informatics"
          },
          {
            "name": "Technology-based Management"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Applied Sciences and Arts",
        "majors": [
          {
            "name": "Graphic Design"
          },
          {
            "name": "Media Design"
          },
          {
            "name": "Product Design"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Dentistry",
        "majors": [
          {
            "name": "Dentistry"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Law and Legal Studies",
        "majors": [
          {
            "name": "Law"
          },
          {
            "name": "Legal Studies"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Cairo",
    "rating": 4.9,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@germanuniversityincairoguc.edu.eg",
    "phone": "+20 2 20002833"
  },
  {
    "id": 59,
    "name": "The British University in Egypt (BUE)",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916520/The_British_f1zoly.jpg",
    "description": "The British University in Egypt (BUE) is a leading private university established in 2005 to provide high-quality British higher education in Egypt. Located in El Sherouk City, Cairo, BUE offers internationally recognized academic programs through partnerships with prestigious UK universities. The university combines academic excellence, practical learning, modern facilities, and research opportunities, preparing graduates with the knowledge and skills needed to succeed in local and international careers",
    "departments": [
      "Faculty of Dentistry",
      "Faculty of Pharmacy",
      "Faculty of Clinical Pharmacy",
      "Faculty of Nursing",
      "Faculty of Physiotherapy",
      "Faculty of Engineering",
      "Faculty of Energy and Environmental Engineering",
      "Faculty of Informatics and Computer Science",
      "Faculty of Business Administration, Economics and Political Science",
      "Faculty of Communication and Mass Media",
      "Faculty of Arts and Design",
      "Faculty of Arts and Humanities",
      "Faculty of Law",
      "Faculty of Tourism and Hotel Management",
      "Faculty of Medicine"
    ],
    "faculties": [
      {
        "name": "Faculty of Dentistry",
        "majors": [
          {
            "name": "Dentistry"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "Pharmacy (PharmD)"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Clinical Pharmacy",
        "majors": [
          {
            "name": "Clinical Pharmacy (PharmD Clinical Pharmacy)"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Nursing",
        "majors": [
          {
            "name": "Nursing"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physiotherapy",
        "majors": [
          {
            "name": "Physiotherapy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Architectural Engineering"
          },
          {
            "name": "Civil Engineering"
          },
          {
            "name": "Mechanical Engineering"
          },
          {
            "name": "Electrical and Communication Engineering"
          },
          {
            "name": "Chemical Engineering"
          },
          {
            "name": "Pharmaceutical Engineering"
          },
          {
            "name": "Petrochemical Engineering"
          },
          {
            "name": "Environmental Engineering"
          },
          {
            "name": "Construction Engineering and Management"
          },
          {
            "name": "Computer Engineering"
          },
          {
            "name": "Mechatronics and Robotics Engineering"
          },
          {
            "name": "Landscape and Urban Development for Sustainable Cities"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Energy and Environmental Engineering",
        "majors": [
          {
            "name": "Renewable Energy – Mechanical Power"
          },
          {
            "name": "Renewable Energy – Electrical Engineering"
          },
          {
            "name": "Biochemical Engineering"
          },
          {
            "name": "Petroleum and Gas Technology"
          },
          {
            "name": "Environmental Sustainable Architecture"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Informatics and Computer Science",
        "majors": [
          {
            "name": "Computer Science"
          },
          {
            "name": "Software Engineering"
          },
          {
            "name": "Information Systems"
          },
          {
            "name": "Computer Networks"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Business Administration, Economics and Political Science",
        "majors": [
          {
            "name": "Business Administration"
          },
          {
            "name": "Accounting"
          },
          {
            "name": "Finance"
          },
          {
            "name": "Marketing"
          },
          {
            "name": "Human Resource Management"
          },
          {
            "name": "Economics"
          },
          {
            "name": "Political Science"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Communication and Mass Media",
        "majors": [
          {
            "name": "Journalism"
          },
          {
            "name": "Radio and Television"
          },
          {
            "name": "Public Relations and Advertising"
          },
          {
            "name": "Digital Media"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Arts and Design",
        "majors": [
          {
            "name": "Interior Architecture"
          },
          {
            "name": "Graphics and Media Arts"
          },
          {
            "name": "Fine Arts"
          },
          {
            "name": "Fashion Design"
          },
          {
            "name": "Textile Design"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Arts and Humanities",
        "majors": [
          {
            "name": "English Language and Literature"
          },
          {
            "name": "Chinese"
          },
          {
            "name": "Psychology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Law",
        "majors": [
          {
            "name": "Law"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Tourism and Hotel Management",
        "majors": [
          {
            "name": "Tourism Management"
          },
          {
            "name": "Hotel Management"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "Medicine"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Cairo",
    "rating": 4.9,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@thebritishuniversityinegyptbue.edu.eg",
    "phone": "+20 2 20003301"
  },
  {
    "id": 60,
    "name": "Misr University for Science and Technology (MUST)",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916515/Misr_ukh2ge.jpg",
    "description": "Misr University for Science and Technology (MUST) is one of Egypt’s leading private universities, established in 1996 in 6th of October City, Giza. The university offers a wide range of academic programs across medical, engineering, business, and humanities disciplines. MUST is committed to providing high-quality education, advanced research opportunities, and practical training through modern facilities and partnerships with local and international institutions. It aims to prepare graduates with the knowledge, skills, and innovation needed to excel in the global job market.",
    "departments": [
      "Faculty of Oral and Dental Surgery",
      "Faculty of Pharmaceutical Sciences and Drug Manufacturing",
      "Faculty of Physical Therapy",
      "Faculty of Engineering Sciences and Technology",
      "Faculty of Information Technology",
      "Faculty of Business Administration, Economics and Information Systems",
      "Faculty of Mass Media and Communication Technology",
      "Faculty of Biotechnology",
      "Faculty of Nursing",
      "Faculty of Applied Health Science Technology",
      "Faculty of Foreign Languages and Translation",
      "Faculty of Archaeology and Tourism Guidance",
      "Faculty of Special Education"
    ],
    "faculties": [
      {
        "name": "Faculty of Oral and Dental Surgery",
        "majors": [
          {
            "name": "Oral and Dental Surgery"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmaceutical Sciences and Drug Manufacturing",
        "majors": [
          {
            "name": "PharmD (Pharmacy)"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Therapy",
        "majors": [
          {
            "name": "Physical Therapy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering Sciences and Technology",
        "majors": [
          {
            "name": "Architectural Engineering"
          },
          {
            "name": "Construction Engineering"
          },
          {
            "name": "Biomedical Engineering"
          },
          {
            "name": "Computer and Software Engineering"
          },
          {
            "name": "Electronics and Communications Engineering"
          },
          {
            "name": "Electrical Power and Machines Engineering"
          },
          {
            "name": "Mechatronics Engineering"
          },
          {
            "name": "Mechanical Power Engineering"
          },
          {
            "name": "Industrial and Systems Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Information Technology",
        "majors": [
          {
            "name": "Computer Science"
          },
          {
            "name": "Information Systems"
          },
          {
            "name": "Artificial Intelligence"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Business Administration, Economics and Information Systems",
        "majors": [
          {
            "name": "Accounting"
          },
          {
            "name": "Business Administration"
          },
          {
            "name": "Finance and Investment"
          },
          {
            "name": "Economics"
          },
          {
            "name": "Political Science"
          },
          {
            "name": "Information Systems"
          },
          {
            "name": "Hospital Management"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Mass Media and Communication Technology",
        "majors": [
          {
            "name": "Print and Electronic Journalism"
          },
          {
            "name": "Radio and Television Broadcasting"
          },
          {
            "name": "Public Relations and Advertising"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Biotechnology",
        "majors": [
          {
            "name": "Biotechnology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Nursing",
        "majors": [
          {
            "name": "Nursing"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Applied Health Science Technology",
        "majors": [
          {
            "name": "Radiology and Imaging Technology"
          },
          {
            "name": "Medical Laboratory Technology"
          },
          {
            "name": "Respiratory Care Technology"
          },
          {
            "name": "Health Administration and Informatics Technology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Foreign Languages and Translation",
        "majors": [
          {
            "name": "English Language and Translation"
          },
          {
            "name": "German Language and Translation"
          },
          {
            "name": "French Language and Translation"
          },
          {
            "name": "Chinese Language and Translation"
          },
          {
            "name": "Japanese Language and Translation"
          },
          {
            "name": "Spanish Language and Translation"
          },
          {
            "name": "Italian Language and Translation"
          },
          {
            "name": "Turkish Language and Translation"
          },
          {
            "name": "Greek Language and Translation"
          },
          {
            "name": "Arabic Language and Literature"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Archaeology and Tourism Guidance",
        "majors": [
          {
            "name": "Egyptian Archaeology"
          },
          {
            "name": "Islamic Archaeology"
          },
          {
            "name": "Archaeology and Civilization of the Arabian Peninsula"
          },
          {
            "name": "Restoration and Conservation of Monuments"
          },
          {
            "name": "Tourism Guidance"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Special Education",
        "majors": [
          {
            "name": "Intellectual Disability"
          },
          {
            "name": "Visual and Hearing Impairment"
          },
          {
            "name": "Emotional and Behavioral Disorders"
          },
          {
            "name": "Giftedness and Learning Disabilities"
          },
          {
            "name": "Motor Disabilities"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Giza",
    "rating": 4.7,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@misruniversityforscienceandtechnologymust.edu.eg",
    "phone": "+20 2 20004487"
  },
  {
    "id": 61,
    "name": "October 6 University (O6U)",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916517/O6U_kvaehr.jpg",
    "description": "October 6 University (O6U) is one of the first private universities established in Egypt, founded in 1996 in 6th of October City, Giza. The university offers a wide range of undergraduate and postgraduate programs across various disciplines, combining academic excellence with practical training and scientific research. O6U is committed to preparing qualified graduates through modern educational facilities, experienced faculty members, and strong links with local and international institutions.",
    "departments": [
      "Faculty of Medicine",
      "Faculty of Dentistry",
      "Faculty of Pharmacy",
      "Faculty of Applied Medical Sciences",
      "Faculty of Engineering",
      "Faculty of Physical Therapy",
      "Faculty of Information Systems and Computer Science",
      "Faculty of Applied Arts",
      "Faculty of Media and Mass Communication",
      "Faculty of Economics and Management",
      "Faculty of Languages and Translation",
      "Faculty of Tourism and Hotel Management",
      "Faculty of Education"
    ],
    "faculties": [
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "Medicine"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Dentistry",
        "majors": [
          {
            "name": "Dentistry"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "Pharmacy (PharmD)"
          },
          {
            "name": "Clinical Pharmacy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Applied Medical Sciences",
        "majors": [
          {
            "name": "Medical Laboratory Sciences"
          },
          {
            "name": "Radiology and Medical Imaging"
          },
          {
            "name": "Biomedical Engineering Technology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Architectural Engineering"
          },
          {
            "name": "Civil Engineering"
          },
          {
            "name": "Construction Engineering"
          },
          {
            "name": "Electrical Engineering"
          },
          {
            "name": "Electronics and Communications Engineering"
          },
          {
            "name": "Mechanical Engineering"
          },
          {
            "name": "Mechatronics Engineering"
          },
          {
            "name": "Computer Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Therapy",
        "majors": [
          {
            "name": "Physical Therapy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Information Systems and Computer Science",
        "majors": [
          {
            "name": "Computer Science"
          },
          {
            "name": "Information Systems"
          },
          {
            "name": "Artificial Intelligence"
          },
          {
            "name": "Software Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Applied Arts",
        "majors": [
          {
            "name": "Interior Design"
          },
          {
            "name": "Graphic Design"
          },
          {
            "name": "Fashion Design"
          },
          {
            "name": "Textile Design"
          },
          {
            "name": "Advertising Design"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Media and Mass Communication",
        "majors": [
          {
            "name": "Journalism"
          },
          {
            "name": "Radio and Television"
          },
          {
            "name": "Public Relations and Advertising"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Economics and Management",
        "majors": [
          {
            "name": "Accounting"
          },
          {
            "name": "Business Administration"
          },
          {
            "name": "Economics"
          },
          {
            "name": "Finance"
          },
          {
            "name": "Marketing"
          },
          {
            "name": "Management Information Systems (MIS)"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Languages and Translation",
        "majors": [
          {
            "name": "English Language and Translation"
          },
          {
            "name": "French Language and Translation"
          },
          {
            "name": "German Language and Translation"
          },
          {
            "name": "Chinese Language and Translation"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Tourism and Hotel Management",
        "majors": [
          {
            "name": "Tourism Studies"
          },
          {
            "name": "Hotel Management"
          },
          {
            "name": "Tourist Guidance"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Education",
        "majors": [
          {
            "name": "English Language Education"
          },
          {
            "name": "Mathematics Education"
          },
          {
            "name": "Computer Education"
          },
          {
            "name": "Kindergarten Education"
          },
          {
            "name": "Special Education"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Giza",
    "rating": 4.9,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@october6universityo6u.edu.eg",
    "phone": "+20 2 20002257"
  },
  {
    "id": 62,
    "name": "Misr International University (MIU)",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916515/MIU_ddvnlp.jpg",
    "description": "Misr International University (MIU) is a leading private university in Egypt, established in 1996 and located in Obour City, Qalyubia. The university is committed to providing high-quality education based on international academic standards, with programs taught in English. MIU offers a dynamic learning environment, modern facilities, and practical training opportunities that prepare students for successful careers in Egypt and around the world. The university emphasizes innovation, research, leadership, and community engagement.",
    "departments": [
      "Faculty of Oral and Dental Medicine",
      "Faculty of Pharmacy",
      "Faculty of Alsun (Languages)",
      "Faculty of Mass Communication",
      "Faculty of Business Administration and International Trade",
      "Faculty of Computer Science",
      "Faculty of Engineering – Architecture",
      "Faculty of Engineering – Electronics and Communications"
    ],
    "faculties": [
      {
        "name": "Faculty of Oral and Dental Medicine",
        "majors": [
          {
            "name": "Oral and Dental Medicine"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "PharmD"
          },
          {
            "name": "PharmD Clinical Pharmacy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Alsun (Languages)",
        "majors": [
          {
            "name": "Applied Linguistics"
          },
          {
            "name": "Teaching English as a Foreign Language (TEFL Tech – TT)"
          },
          {
            "name": "Specialized Translation (Translation Intelligence – TI)"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Mass Communication",
        "majors": [
          {
            "name": "Audio-Visual Production (AVP)"
          },
          {
            "name": "Integrated Marketing Communication (IMC)"
          },
          {
            "name": "News Production (NP)"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Business Administration and International Trade",
        "majors": [
          {
            "name": "Accounting"
          },
          {
            "name": "Business Intelligence"
          },
          {
            "name": "Economics and International Trade"
          },
          {
            "name": "Finance"
          },
          {
            "name": "Marketing Management and Communication"
          },
          {
            "name": "Human Resource Management"
          },
          {
            "name": "Entrepreneurship"
          },
          {
            "name": "Supply Chain Management"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Computer Science",
        "majors": [
          {
            "name": "Computer Science"
          },
          {
            "name": "Artificial Intelligence (AI)"
          },
          {
            "name": "Internet of Things (IoT)"
          },
          {
            "name": "Data Science"
          },
          {
            "name": "Cyber Security"
          },
          {
            "name": "Information Systems"
          },
          {
            "name": "Software Engineering"
          },
          {
            "name": "Software Development"
          },
          {
            "name": "Software Testing"
          },
          {
            "name": "Human-Computer Interaction (HCI)"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering – Architecture",
        "majors": [
          {
            "name": "Architecture Engineering"
          },
          {
            "name": "Computational Architecture"
          },
          {
            "name": "Conservation of Architecture"
          },
          {
            "name": "Environmental and Sustainable Architecture"
          },
          {
            "name": "Interior Design"
          },
          {
            "name": "Landscape Architecture"
          },
          {
            "name": "Real Estate Management"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering – Electronics and Communications",
        "majors": [
          {
            "name": "Electronics and Communication Engineering"
          },
          {
            "name": "Communication Systems"
          },
          {
            "name": "Networks Engineering"
          },
          {
            "name": "Smart Systems"
          },
          {
            "name": "Embedded Systems and Hardware"
          },
          {
            "name": "Digital System Design"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Obour City",
    "rating": 4.7,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@misrinternationaluniversitymiu.edu.eg",
    "phone": "+20 2 20003281"
  },
  {
    "id": 63,
    "name": "French University in Egypt (UFE)",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916511/fff_u4bkmh.jpg",
    "description": "The French University in Egypt (UFE) is a private university established in 2002 through cooperation between the Egyptian and French governments. Located in El Shorouk City, Cairo, UFE offers internationally recognized academic programs in partnership with leading French universities. The university provides a multilingual learning environment, with programs taught in French, English, and Arabic, preparing graduates for successful careers in Egypt and internationally. UFE emphasizes academic excellence, innovation, research, and strong cultural and educational ties between Egypt and France.",
    "departments": [
      "Faculty of Engineering",
      "Faculty of Management and Information Systems",
      "Faculty of Applied Languages",
      "Faculty of Architecture and Applied Arts"
    ],
    "faculties": [
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Artificial Intelligence and Data Science Engineering"
          },
          {
            "name": "Cybersecurity and Communications Engineering"
          },
          {
            "name": "Embedded Systems and Robotics Engineering"
          },
          {
            "name": "Mechanical and Mechatronics Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Management and Information Systems",
        "majors": [
          {
            "name": "Economics and Management"
          },
          {
            "name": "Business Informatics and Data Analytics"
          },
          {
            "name": "Hospitality Management"
          },
          {
            "name": "Digital Marketing"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Applied Languages",
        "majors": [
          {
            "name": "Applied Foreign Languages"
          },
          {
            "name": "International Affairs and Trade"
          },
          {
            "name": "Specialized Translation"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Architecture and Applied Arts",
        "majors": [
          {
            "name": "Architecture and Urbanism Engineering"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Cairo",
    "rating": 4.6,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@frenchuniversityinegyptufe.edu.eg",
    "phone": "+20 2 20002857"
  },
  {
    "id": 64,
    "name": "Heliopolis University for Sustainable Development (HU)",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916511/fff_u4bkmh.jpg",
    "description": "Heliopolis University for Sustainable Development is a private university established in 2009 and located in El Salam City, Cairo, Egypt. It is the first university in the Middle East dedicated to the principles of sustainable development, integrating academic excellence with environmental, social, and economic responsibility. The university offers high-quality education, practical training, and research opportunities in a modern learning environment, preparing graduates to become innovative professionals and responsible leaders who contribute to sustainable development locally and globally.",
    "departments": [
      "Faculty of Engineering",
      "Faculty of Pharmacy",
      "Faculty of Physical Therapy",
      "Faculty of Business and Economics",
      "Faculty of Organic Agriculture"
    ],
    "faculties": [
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Energy Engineering"
          },
          {
            "name": "Water Engineering"
          },
          {
            "name": "Mechatronics Engineering"
          },
          {
            "name": "Green Architecture Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "PharmD"
          },
          {
            "name": "Clinical Pharmacy (PharmD Clinical)"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Therapy",
        "majors": [
          {
            "name": "Physical Therapy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Business and Economics",
        "majors": [
          {
            "name": "Business Administration"
          },
          {
            "name": "Economics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Organic Agriculture",
        "majors": [
          {
            "name": "Organic Crop Production"
          },
          {
            "name": "Food Processing Technology"
          },
          {
            "name": "Biotechnology"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Cairo",
    "rating": 5,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@heliopolisuniversityforsustainabledevelopmenthu.edu.eg",
    "phone": "+20 2 20005165"
  },
  {
    "id": 65,
    "name": "Future University in Egypt (FUE)",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916511/fff_u4bkmh.jpg",
    "description": "Future University in Egypt (FUE) is a leading private university established in 2006 and located in New Cairo, Egypt. The university offers internationally recognized academic programs across a wide range of disciplines, combining academic excellence with practical learning and modern technology. FUE is committed to innovation, scientific research, and community service, providing students with a high-quality educational environment that prepares them for successful careers in Egypt and around the world.",
    "departments": [
      "Faculty of Oral and Dental Medicine",
      "Faculty of Pharmacy",
      "Faculty of Engineering and Technology",
      "Faculty of Computers and Information Technology",
      "Faculty of Commerce and Business Administration",
      "Faculty of Economics and Political Science"
    ],
    "faculties": [
      {
        "name": "Faculty of Oral and Dental Medicine",
        "majors": [
          {
            "name": "Oral and Dental Medicine (BDS)"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "PharmD"
          },
          {
            "name": "PharmD Clinical Pharmacy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering and Technology",
        "majors": [
          {
            "name": "Architectural Engineering"
          },
          {
            "name": "Interior Architecture"
          },
          {
            "name": "Structural Engineering and Construction Management"
          },
          {
            "name": "Computer and Intelligent Systems Engineering"
          },
          {
            "name": "Computer and Communication Engineering"
          },
          {
            "name": "Electrical Power Engineering"
          },
          {
            "name": "Mechanical Power Engineering"
          },
          {
            "name": "Mechatronics Engineering"
          },
          {
            "name": "Biomedical Engineering"
          },
          {
            "name": "Petroleum Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Computers and Information Technology",
        "majors": [
          {
            "name": "Computer Science"
          },
          {
            "name": "Information Systems"
          },
          {
            "name": "Artificial Intelligence"
          },
          {
            "name": "Cybersecurity"
          },
          {
            "name": "Data Science"
          },
          {
            "name": "Digital Media Technology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Commerce and Business Administration",
        "majors": [
          {
            "name": "Accounting"
          },
          {
            "name": "Finance"
          },
          {
            "name": "Marketing"
          },
          {
            "name": "Human Resources Management"
          },
          {
            "name": "Management Information Systems (MIS)"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Economics and Political Science",
        "majors": [
          {
            "name": "Economics"
          },
          {
            "name": "Political Science"
          },
          {
            "name": "Public Administration"
          },
          {
            "name": "Political Media"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Cairo",
    "rating": 4.7,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@futureuniversityinegyptfue.edu.eg",
    "phone": "+20 2 20002894"
  },
  {
    "id": 66,
    "name": "Badr University in Cairo (BUC)",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916506/badya_yltbno.jpg",
    "description": "Badr University in Cairo (BUC) is a private university established in 2014 and located in Badr City, Cairo, Egypt. The university offers a wide range of undergraduate and postgraduate programs designed to meet international academic standards. BUC provides a modern educational environment, advanced facilities, practical training, and research opportunities. It is committed to developing graduates with the knowledge, skills, and leadership abilities needed to succeed in both local and global job markets",
    "departments": [
      "Faculty of Medicine",
      "Faculty of Oral and Dental Medicine",
      "Faculty of Pharmacy and Pharmaceutical Industries",
      "Faculty of Physical Therapy",
      "Faculty of Nursing",
      "Faculty of Engineering and Technology",
      "Faculty of Artificial Intelligence and Data Science",
      "Faculty of Business and Economics",
      "Faculty of Law",
      "Faculty of Linguistics and Translation",
      "Faculty of Applied Arts",
      "Faculty of Filmmaking and Performing Arts",
      "Faculty of Biotechnology",
      "Faculty of Humanities and Social Sciences",
      "Faculty of Political Sciences and International Relations",
      "Faculty of Allied Health Sciences"
    ],
    "faculties": [
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "Medicine"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Oral and Dental Medicine",
        "majors": [
          {
            "name": "Oral and Dental Medicine"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy and Pharmaceutical Industries",
        "majors": [
          {
            "name": "PharmD"
          },
          {
            "name": "Clinical Pharmacy"
          },
          {
            "name": "Pharmaceutical Industries"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Therapy",
        "majors": [
          {
            "name": "Physical Therapy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Nursing",
        "majors": [
          {
            "name": "Nursing"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering and Technology",
        "majors": [
          {
            "name": "Architectural Engineering"
          },
          {
            "name": "Civil Engineering"
          },
          {
            "name": "Construction Engineering"
          },
          {
            "name": "Electrical Power Engineering"
          },
          {
            "name": "Electronics and Communications Engineering"
          },
          {
            "name": "Computer Engineering"
          },
          {
            "name": "Mechanical Engineering"
          },
          {
            "name": "Mechatronics Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Artificial Intelligence and Data Science",
        "majors": [
          {
            "name": "Artificial Intelligence"
          },
          {
            "name": "Data Science"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Business and Economics",
        "majors": [
          {
            "name": "Accounting"
          },
          {
            "name": "Finance"
          },
          {
            "name": "Marketing"
          },
          {
            "name": "Human Resources Management"
          },
          {
            "name": "Economics"
          },
          {
            "name": "Business Administration"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Law",
        "majors": [
          {
            "name": "Public Law"
          },
          {
            "name": "Private Law"
          },
          {
            "name": "Islamic Sharia"
          },
          {
            "name": "Public Finance and Economics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Linguistics and Translation",
        "majors": [
          {
            "name": "English Language and Translation"
          },
          {
            "name": "French Language and Translation"
          },
          {
            "name": "German Language and Translation"
          },
          {
            "name": "Chinese Language and Translation"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Applied Arts",
        "majors": [
          {
            "name": "Product Design"
          },
          {
            "name": "Graphic and Media Design"
          },
          {
            "name": "Interior Design and Furniture"
          },
          {
            "name": "Textile Design"
          },
          {
            "name": "Fashion Design"
          },
          {
            "name": "Ceramics and Glass"
          },
          {
            "name": "Cinematography and Television"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Filmmaking and Performing Arts",
        "majors": [
          {
            "name": "Filmmaking"
          },
          {
            "name": "Acting"
          },
          {
            "name": "Directing"
          },
          {
            "name": "Cinematography"
          },
          {
            "name": "Screenwriting"
          },
          {
            "name": "Film Editing"
          },
          {
            "name": "Production"
          },
          {
            "name": "Performing Arts"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Biotechnology",
        "majors": [
          {
            "name": "Medical Biotechnology"
          },
          {
            "name": "Pharmaceutical Biotechnology"
          },
          {
            "name": "Agricultural Biotechnology"
          },
          {
            "name": "Industrial Biotechnology"
          },
          {
            "name": "Bioinformatics"
          },
          {
            "name": "Nanobiotechnology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Humanities and Social Sciences",
        "majors": [
          {
            "name": "Psychology"
          },
          {
            "name": "Sociology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Political Sciences and International Relations",
        "majors": [
          {
            "name": "Political Science"
          },
          {
            "name": "International Relations"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Allied Health Sciences",
        "majors": [
          {
            "name": "Medical Laboratory Sciences"
          },
          {
            "name": "Radiological Imaging Technology"
          },
          {
            "name": "Nutrition and Food Sciences"
          },
          {
            "name": "Health Information Management"
          },
          {
            "name": "Prosthetics and Orthotics"
          },
          {
            "name": "Emergency Medical Services"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Cairo",
    "rating": 4.4,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@badruniversityincairobuc.edu.eg",
    "phone": "+20 2 20002603"
  },
  {
    "id": 67,
    "name": "Delta University for Science and Technology (DUST)",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916509/ddd_b2m8f6.jpg",
    "description": "Delta University for Science and Technology (DUST) is a leading private university established in 2007 and located in Gamasa, Dakahlia, Egypt. The university offers high-quality education through a wide range of undergraduate and postgraduate programs in medical, engineering, business, and humanities disciplines. DUST is committed to academic excellence, scientific research, innovation, and community service, providing students with modern facilities, practical training, and a dynamic learning environment that prepares them for successful careers in Egypt and internationally.",
    "departments": [
      "Faculty of Medicine",
      "Faculty of Oral and Dental Medicine",
      "Faculty of Pharmacy",
      "Faculty of Physical Therapy",
      "Faculty of Applied Health Sciences",
      "Faculty of Engineering",
      "Faculty of Artificial Intelligence",
      "Faculty of Business Administration",
      "Faculty of Arts",
      "Faculty of Nursing",
      "Faculty of Veterinary Medicine",
      "Faculty of Law",
      "Faculty of Energy Engineering"
    ],
    "faculties": [
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "Medicine"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Oral and Dental Medicine",
        "majors": [
          {
            "name": "Oral and Dental Medicine"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "PharmD"
          },
          {
            "name": "Clinical Pharmacy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Therapy",
        "majors": [
          {
            "name": "Physical Therapy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Applied Health Sciences",
        "majors": [
          {
            "name": "Medical Laboratory Sciences"
          },
          {
            "name": "Radiology and Medical Imaging"
          },
          {
            "name": "Nutrition and Food Sciences"
          },
          {
            "name": "Prosthetics and Orthotics"
          },
          {
            "name": "Health Information Management"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Architectural Engineering"
          },
          {
            "name": "Civil Engineering"
          },
          {
            "name": "Construction Engineering"
          },
          {
            "name": "Electronics and Communications Engineering"
          },
          {
            "name": "Mechatronics Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Artificial Intelligence",
        "majors": [
          {
            "name": "Artificial Intelligence"
          },
          {
            "name": "Data Science"
          },
          {
            "name": "Cybersecurity"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Business Administration",
        "majors": [
          {
            "name": "Accounting"
          },
          {
            "name": "Business Administration"
          },
          {
            "name": "Finance"
          },
          {
            "name": "Marketing"
          },
          {
            "name": "Economics"
          },
          {
            "name": "Management Information Systems (MIS)"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Arts",
        "majors": [
          {
            "name": "English Language"
          },
          {
            "name": "Psychology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Nursing",
        "majors": [
          {
            "name": "Nursing"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Veterinary Medicine",
        "majors": [
          {
            "name": "Veterinary Medicine"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Law",
        "majors": [
          {
            "name": "Law"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Energy Engineering",
        "majors": [
          {
            "name": "Petroleum Engineering"
          },
          {
            "name": "Natural Gas Engineering"
          },
          {
            "name": "Sustainable and Renewable Energy Engineering"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Gamasa",
    "rating": 4.5,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@deltauniversityforscienceandtechnologydust.edu.eg",
    "phone": "+20 2 20004557"
  },
  {
    "id": 68,
    "name": "Deraya University (DU)",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916509/drr_fgijp8.jpg",
    "description": "Deraya University is a private university established in 2010 and located in New Minya City, Minya, Egypt. The university provides high-quality education based on international academic standards, offering a variety of undergraduate and postgraduate programs. Deraya University emphasizes academic excellence, innovation, scientific research, and practical training through modern facilities and advanced learning technologies. It aims to prepare graduates with the knowledge, professional skills, and leadership abilities needed to succeed in local and international careers.",
    "departments": [
      "Faculty of Pharmacy",
      "Faculty of Physical Therapy",
      "Faculty of Dentistry",
      "Faculty of Business Administration"
    ],
    "faculties": [
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "PharmD"
          },
          {
            "name": "PharmD (Clinical Pharmacy)"
          },
          {
            "name": "Pharmacy and Pharmaceutical Manufacturing"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Therapy",
        "majors": [
          {
            "name": "Physical Therapy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Dentistry",
        "majors": [
          {
            "name": "Bachelor of Dental Surgery (BDS)"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Business Administration",
        "majors": [
          {
            "name": "Accounting"
          },
          {
            "name": "Management"
          },
          {
            "name": "Marketing"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Minya",
    "rating": 4.8,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@derayauniversitydu.edu.eg",
    "phone": "+20 2 20001986"
  },
  {
    "id": 69,
    "name": "Egyptian Russian University (ERU)",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784922322/OIP_k2zuad.jpg",
    "description": "The Russian University in Egypt (RUE) is a private university established in 2006 through academic cooperation between Egypt and Russia. Located in Badr City, Cairo, the university offers high-quality education based on international standards with strong emphasis on scientific research, innovation, and practical training. RUE provides modern educational facilities and prepares graduates with the knowledge and professional skills required to compete in local and international job markets.",
    "departments": [
      "Faculty of Engineering",
      "Faculty of Pharmacy",
      "Faculty of Oral and Dental Medicine",
      "Faculty of Artificial Intelligence",
      "Faculty of Management, Economics and Business Technology"
    ],
    "faculties": [
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Architectural Engineering"
          },
          {
            "name": "Construction Engineering"
          },
          {
            "name": "Mechatronics and Robotics Engineering"
          },
          {
            "name": "Communications Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "PharmD"
          },
          {
            "name": "Clinical Pharmacy (PharmD Clinical)"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Oral and Dental Medicine",
        "majors": [
          {
            "name": "Oral and Dental Medicine"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Artificial Intelligence",
        "majors": [
          {
            "name": "Artificial Intelligence"
          },
          {
            "name": "Computer Science"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Management, Economics and Business Technology",
        "majors": [
          {
            "name": "Accounting"
          },
          {
            "name": "Finance"
          },
          {
            "name": "Marketing"
          },
          {
            "name": "Business Administration"
          },
          {
            "name": "Economics"
          },
          {
            "name": "Business Informatics"
          },
          {
            "name": "Entrepreneurship"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Cairo",
    "rating": 5,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@egyptianrussianuniversityeru.edu.eg",
    "phone": "+20 2 20003077"
  },
  {
    "id": 70,
    "name": "The Egyptian Chinese University (ECU)",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916510/egp_rnhb9n.jpg",
    "description": "The Egyptian Chinese University (ECU) is a private university established in 2013 through Egyptian-Chinese cooperation. Located on Gesr El Suez Street in Cairo, the university focuses on technology-based education, innovation, scientific research, and practical training. ECU offers modern academic programs designed to meet international standards while strengthening collaboration with leading Chinese universities. The university aims to prepare graduates with the knowledge, technical skills, and entrepreneurial mindset needed to succeed in local and global job markets.",
    "departments": [
      "Faculty of Engineering and Technology",
      "Faculty of Pharmacy and Drug Technology",
      "Faculty of Physical Therapy",
      "Faculty of Economics and International Trade",
      "Faculty of Computer Science and Information Technology",
      "Faculty of Veterinary Medicine"
    ],
    "faculties": [
      {
        "name": "Faculty of Engineering and Technology",
        "majors": [
          {
            "name": "Construction and Building Engineering"
          },
          {
            "name": "Software Engineering and Information Technology"
          },
          {
            "name": "Energy and Renewable Energy Engineering"
          },
          {
            "name": "Mechatronics Engineering and Automation"
          },
          {
            "name": "Petroleum and Gas Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy and Drug Technology",
        "majors": [
          {
            "name": "PharmD"
          },
          {
            "name": "Clinical Pharmacy (PharmD Clinical)"
          },
          {
            "name": "Pharmaceutical Technology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Therapy",
        "majors": [
          {
            "name": "Physical Therapy"
          },
          {
            "name": "Physical Therapy and Traditional Chinese Medicine"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Economics and International Trade",
        "majors": [
          {
            "name": "Accounting"
          },
          {
            "name": "Finance and Investment"
          },
          {
            "name": "International Business Administration"
          },
          {
            "name": "International Economics"
          },
          {
            "name": "Marketing and Innovation"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Computer Science and Information Technology",
        "majors": [
          {
            "name": "Artificial Intelligence"
          },
          {
            "name": "Computer Science"
          },
          {
            "name": "Information Systems"
          },
          {
            "name": "Software Engineering"
          },
          {
            "name": "Cybersecurity"
          },
          {
            "name": "Data Science"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Veterinary Medicine",
        "majors": [
          {
            "name": "Veterinary Medicine"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Cairo",
    "rating": 4.8,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@theegyptianchineseuniversityecu.edu.eg",
    "phone": "+20 2 20003345"
  },
  {
    "id": 71,
    "name": "New Giza University (NGU)",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916516/ng_t9k7pc.jpg",
    "description": "New Giza University (NGU) is a leading private university established in 2016 and located in New Giza, 6th of October City, Giza, Egypt. The university offers internationally recognized academic programs through partnerships with prestigious international universities. NGU provides a modern learning environment, advanced facilities, innovative teaching methods, and extensive practical training opportunities. The university is committed to academic excellence, scientific research, and preparing graduates with the knowledge, leadership, and professional skills needed to succeed in local and global careers.",
    "departments": [
      "Faculty of Medicine",
      "Faculty of Dentistry",
      "Faculty of Pharmacy",
      "Faculty of Business and Finance",
      "Faculty of Economics and Politics",
      "Faculty of Information Technology",
      "Faculty of Engineering",
      "Faculty of Arts and Design"
    ],
    "faculties": [
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "Medicine"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Dentistry",
        "majors": [
          {
            "name": "Dentistry"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "PharmD"
          },
          {
            "name": "Clinical Pharmacy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Business and Finance",
        "majors": [
          {
            "name": "Accounting"
          },
          {
            "name": "Finance"
          },
          {
            "name": "Marketing"
          },
          {
            "name": "Management"
          },
          {
            "name": "Entrepreneurship"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Economics and Politics",
        "majors": [
          {
            "name": "Economics"
          },
          {
            "name": "Political Science"
          },
          {
            "name": "International Relations"
          },
          {
            "name": "Public Policy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Information Technology",
        "majors": [
          {
            "name": "Computer Science"
          },
          {
            "name": "Artificial Intelligence"
          },
          {
            "name": "Data Science"
          },
          {
            "name": "Information Technology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Computers, Communications and Autonomous Systems Engineering"
          },
          {
            "name": "Architectural Engineering"
          },
          {
            "name": "Mechanical Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Arts and Design",
        "majors": [
          {
            "name": "Architecture"
          },
          {
            "name": "Interior Design"
          },
          {
            "name": "Graphic Design"
          },
          {
            "name": "Product Design"
          },
          {
            "name": "Fashion Design"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Giza",
    "rating": 4.9,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@newgizauniversityngu.edu.eg",
    "phone": "+20 2 20002194"
  },
  {
    "id": 72,
    "name": "Sphinx University (SU)",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916519/sp_ppkycz.jpg",
    "description": "Sinai University (SU) is a private university established in 2006 with campuses in El Arish, North Sinai, and Kantara, Ismailia, Egypt. The university offers a wide range of undergraduate and postgraduate programs in medical, engineering, business, information technology, and humanities disciplines. SU is committed to providing high-quality education, scientific research, and practical training through modern facilities and experienced faculty members. The university aims to prepare graduates with the knowledge, professional skills, and ethical values needed to succeed in local and international careers.",
    "departments": [
      "Faculty of Medicine",
      "Faculty of Oral and Dental Medicine",
      "Faculty of Pharmacy",
      "Faculty of Physical Therapy",
      "Faculty of Applied Health Science",
      "Faculty of Engineering",
      "Faculty of Artificial Intelligence",
      "Faculty of Business Administration"
    ],
    "faculties": [
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "Medicine"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Oral and Dental Medicine",
        "majors": [
          {
            "name": "Oral and Dental Medicine"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "PharmD"
          },
          {
            "name": "Clinical Pharmacy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Therapy",
        "majors": [
          {
            "name": "Physical Therapy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Applied Health Science",
        "majors": [
          {
            "name": "Medical Laboratory Sciences"
          },
          {
            "name": "Radiology and Medical Imaging Technology"
          },
          {
            "name": "Nutrition and Food Sciences"
          },
          {
            "name": "Prosthetics and Orthotics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Architectural Engineering"
          },
          {
            "name": "Civil Engineering"
          },
          {
            "name": "Mechatronics Engineering"
          },
          {
            "name": "Communications Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Artificial Intelligence",
        "majors": [
          {
            "name": "Artificial Intelligence"
          },
          {
            "name": "Computer Science"
          },
          {
            "name": "Data Science"
          },
          {
            "name": "Cybersecurity"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Business Administration",
        "majors": [
          {
            "name": "Accounting"
          },
          {
            "name": "Business Administration"
          },
          {
            "name": "Finance"
          },
          {
            "name": "Marketing"
          },
          {
            "name": "Economics"
          },
          {
            "name": "Management Information Systems (MIS)"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Ismailia",
    "rating": 4.5,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@sphinxuniversitysu.edu.eg",
    "phone": "+20 2 20002037"
  },
  {
    "id": 73,
    "name": "Al Salam University in Egypt (SUE)",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916518/salam_bjsgaa.jpg",
    "description": "The Knowledge Hub Universities (TKH) operates The Smart University of Egypt (SUE) in the New Administrative Capital, Egypt. SUE offers internationally recognized academic programs through partnerships with leading UK universities. The university provides a modern learning environment, advanced facilities, innovative teaching methods, and practical training opportunities. It is committed to academic excellence, research, innovation, and preparing graduates with the skills and knowledge needed to succeed in both local and global careers.",
    "departments": [
      "Faculty of Oral and Dental Medicine",
      "Faculty of Pharmacy",
      "Faculty of Physical Therapy",
      "Faculty of Engineering",
      "Faculty of Artificial Intelligence",
      "Faculty of Business Administration",
      "Faculty of Applied Arts"
    ],
    "faculties": [
      {
        "name": "Faculty of Oral and Dental Medicine",
        "majors": [
          {
            "name": "Oral and Dental Medicine"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "PharmD"
          },
          {
            "name": "Clinical Pharmacy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Therapy",
        "majors": [
          {
            "name": "Physical Therapy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Civil and Infrastructure Engineering"
          },
          {
            "name": "Mechatronics and Robotics Engineering"
          },
          {
            "name": "Mechanical Engineering"
          },
          {
            "name": "Renewable Energy Engineering"
          },
          {
            "name": "Computer Engineering"
          },
          {
            "name": "Biomedical Engineering"
          },
          {
            "name": "Architectural Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Artificial Intelligence",
        "majors": [
          {
            "name": "Artificial Intelligence"
          },
          {
            "name": "Computer Science"
          },
          {
            "name": "Data Science"
          },
          {
            "name": "Cybersecurity"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Business Administration",
        "majors": [
          {
            "name": "Accounting"
          },
          {
            "name": "Business Administration"
          },
          {
            "name": "Finance"
          },
          {
            "name": "Marketing"
          },
          {
            "name": "Economics"
          },
          {
            "name": "Management Information Systems (MIS)"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Applied Arts",
        "majors": [
          {
            "name": "Interior Design and Furniture"
          },
          {
            "name": "Advertising Arts and Animation"
          },
          {
            "name": "Fashion and Jewelry"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Egypt",
    "rating": 4.3,
    "website": "https://maps.google.com/?q=The+British+University+in+Egypt,+Knowledge+Hub+Universities,+New+Administrative+Capital,+Egypt",
    "email": "admissions@alsalamuniversityinegyptsue.edu.eg",
    "phone": "+20 2 20002971"
  },
  {
    "id": 74,
    "name": "May University in Cairo (MUC)",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916513/may_imjv0i.jpg",
    "description": "May University in Cairo (MUC) is a private university established in 2019 and located in 15th of May City, Cairo, Egypt. The university offers high-quality education based on international academic standards across a variety of disciplines. MUC provides a modern learning environment, advanced facilities, practical training, and research opportunities to prepare students with the knowledge, professional skills, and innovation required for successful careers in Egypt and around the world.",
    "departments": [
      "Faculty of Engineering",
      "Faculty of Politics, Economics and Business Administration",
      "Faculty of Physical Therapy",
      "Faculty of Nursing",
      "Faculty of Technology"
    ],
    "faculties": [
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Civil Engineering"
          },
          {
            "name": "Architecture Engineering"
          },
          {
            "name": "Electronics and Communications Engineering"
          },
          {
            "name": "Mechatronics Engineering"
          },
          {
            "name": "Computer Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Politics, Economics and Business Administration",
        "majors": [
          {
            "name": "Political Science"
          },
          {
            "name": "Economics"
          },
          {
            "name": "Business Administration"
          },
          {
            "name": "Accounting"
          },
          {
            "name": "Finance"
          },
          {
            "name": "Marketing"
          },
          {
            "name": "Management Information Systems (MIS)"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Therapy",
        "majors": [
          {
            "name": "Physical Therapy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Nursing",
        "majors": [
          {
            "name": "Nursing"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Technology",
        "majors": [
          {
            "name": "Medical Laboratory Technology"
          },
          {
            "name": "Radiology and Medical Imaging Technology"
          },
          {
            "name": "Dental Technology"
          },
          {
            "name": "Prosthetics and Orthotics Technology"
          },
          {
            "name": "Health Information Technology"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Cairo",
    "rating": 4.5,
    "website": "https://maps.google.com/?q=May+University+in+Cairo,+15th+of+May+City,+Cairo,+Egypt",
    "email": "admissions@mayuniversityincairomuc.edu.eg",
    "phone": "+20 2 20002532"
  },
  {
    "id": 75,
    "name": "Al Hayah University in Cairo (AHUC)",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916511/hayah_euxixm.jpg",
    "description": "Hayah University in Cairo (HUC) is a private university located in New Cairo, Egypt. The university offers modern academic programs designed to meet international educational standards while emphasizing innovation, scientific research, and practical learning. HUC provides students with advanced facilities, experienced faculty members, and a dynamic learning environment that prepares graduates with the knowledge, professional skills, and leadership abilities needed to succeed in local and global careers.",
    "departments": [
      "Faculty of Physical Therapy",
      "Faculty of Business Administration and International Practices"
    ],
    "faculties": [
      {
        "name": "Faculty of Physical Therapy",
        "majors": [
          {
            "name": "Physical Therapy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Business Administration and International Practices",
        "majors": [
          {
            "name": "Business Administration"
          },
          {
            "name": "Accounting"
          },
          {
            "name": "Economics"
          },
          {
            "name": "Political Science"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Cairo",
    "rating": 4.7,
    "website": "https://maps.google.com/?q=Hayah+University+in+Cairo,+New+Cairo,+Egypt",
    "email": "admissions@alhayahuniversityincairoahuc.edu.eg",
    "phone": "+20 2 20002993"
  },
  {
    "id": 76,
    "name": "Al Ryada University for Science and Technology (RST)",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916518/rad_fv8z5d.jpg",
    "description": "Al Ryada University for Science and Technology (RST) is a private university located in Sadat City, Menoufia, Egypt. The university offers high-quality education based on international academic standards, combining academic excellence with practical training and scientific research. RST provides modern facilities, innovative teaching methods, and a student-centered learning environment that prepares graduates with the knowledge, professional skills, and leadership abilities needed to succeed in local and international careers.",
    "departments": [
      "Faculty of Dentistry",
      "Faculty of Physical Therapy",
      "Faculty of Nursing",
      "Faculty of Engineering",
      "Faculty of Computers and Artificial Intelligence",
      "Faculty of Business Administration",
      "Faculty of Applied Health Sciences Technology",
      "Faculty of Pharmacy"
    ],
    "faculties": [
      {
        "name": "Faculty of Dentistry",
        "majors": [
          {
            "name": "Dentistry"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Therapy",
        "majors": [
          {
            "name": "Physical Therapy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Nursing",
        "majors": [
          {
            "name": "Nursing"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Civil Engineering"
          },
          {
            "name": "Architectural Engineering"
          },
          {
            "name": "Mechatronics Engineering"
          },
          {
            "name": "Communications Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Computers and Artificial Intelligence",
        "majors": [
          {
            "name": "Artificial Intelligence"
          },
          {
            "name": "Computer Science – Mobile Programming"
          },
          {
            "name": "Computer Science – Computer & Software Security"
          },
          {
            "name": "Medical Informatics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Business Administration",
        "majors": [
          {
            "name": "Accounting"
          },
          {
            "name": "Finance"
          },
          {
            "name": "Marketing"
          },
          {
            "name": "Business Administration"
          },
          {
            "name": "Entrepreneurship and Innovation"
          },
          {
            "name": "Economics"
          },
          {
            "name": "Business Informatics (BIS)"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Applied Health Sciences Technology",
        "majors": [
          {
            "name": "Medical Laboratory Technology"
          },
          {
            "name": "Radiology and Medical Imaging Technology"
          },
          {
            "name": "Prosthetics and Orthotics Technology"
          },
          {
            "name": "Health Information Technology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "PharmD"
          },
          {
            "name": "Clinical Pharmacy"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Sadat City",
    "rating": 4.2,
    "website": "https://maps.google.com/?q=Al+Ryada+University+for+Science+and+Technology,+Sadat+City,+Menoufia,+Egypt",
    "email": "admissions@alryadauniversityforscienceandtechnologyrst.edu.eg",
    "phone": "+20 2 20004698"
  },
  {
    "id": 77,
    "name": "Saxony Egypt University for Applied Sciences and Technology (SEU)",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916518/sax_usbuww.jpg",
    "description": "Saxony Egypt University for Applied Sciences and Technology (SEU) is a private university established through academic cooperation between Egypt and the German state of Saxony. Located in the New Administrative Capital, the university offers applied education based on the German higher education model. SEU focuses on innovation, practical training, scientific research, and close collaboration with industry, providing students with modern facilities and internationally oriented programs that prepare them for successful careers in Egypt and abroad.",
    "departments": [
      "Faculty of Healthcare Technology",
      "Faculty of Management Technology",
      "Faculty of Electrical, Electronic & Computer Technology",
      "Faculty of Mechanical Engineering Technology"
    ],
    "faculties": [
      {
        "name": "Faculty of Healthcare Technology",
        "majors": [
          {
            "name": "Public Health"
          },
          {
            "name": "Nursing"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Management Technology",
        "majors": [
          {
            "name": "Sports Management"
          },
          {
            "name": "Logistics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Electrical, Electronic & Computer Technology",
        "majors": [
          {
            "name": "Computing Security"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Mechanical Engineering Technology",
        "majors": [
          {
            "name": "Automotive Mechatronics"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "the New Administrative Capital",
    "rating": 5,
    "website": "https://maps.google.com/?q=Saxony+Egypt+University+for+Applied+Sciences+and+Technology,+New+Administrative+Capital,+Egypt",
    "email": "admissions@saxonyegyptuniversityforappliedsciencesandtechnologyseu.edu.eg",
    "phone": "+20 2 20006029"
  },
  {
    "id": 78,
    "name": "Badya University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916506/badya_yltbno.jpg",
    "description": "Badya University is a private university in Cairo, Egypt, established by Presidential Decree No. 338 of 2023. The university is located in the heart of Badya City in West Cairo and is designed to provide a transformative, student-centered educational experience through innovative academic programs, strong industry partnerships, research excellence, and modern learning facilities. It aims to prepare future leaders capable of thriving in a rapidly changing world.",
    "departments": [
      "Faculty of Medicine",
      "Faculty of Dentistry",
      "Faculty of Physical Therapy",
      "Faculty of Computer Science",
      "Faculty of Business Administration and Applied Economics",
      "Faculty of Fine Arts",
      "Faculty of Engineering"
    ],
    "faculties": [
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "Medicine and General Surgery"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Dentistry",
        "majors": [
          {
            "name": "Dentistry"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Therapy",
        "majors": [
          {
            "name": "Physical Therapy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Computer Science",
        "majors": [
          {
            "name": "Bio Artificial Intelligence (Bio AI)"
          },
          {
            "name": "Computer Science"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Business Administration and Applied Economics",
        "majors": [
          {
            "name": "Business Administration"
          },
          {
            "name": "Marketing"
          },
          {
            "name": "Finance and Investment"
          },
          {
            "name": "Applied Economics"
          },
          {
            "name": "Business Technology Management"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Fine Arts",
        "majors": [
          {
            "name": "Visual Art"
          },
          {
            "name": "Media and Game Art"
          },
          {
            "name": "Animation"
          },
          {
            "name": "Graphic and Visual Communication"
          },
          {
            "name": "Scenography"
          },
          {
            "name": "Interior Architecture"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Intelligent and Sustainable Civil Engineering"
          },
          {
            "name": "Digital Architectural Engineering"
          },
          {
            "name": "Communications and Computers Engineering"
          },
          {
            "name": "Mechatronics and Intelligent Machines Engineering"
          },
          {
            "name": "Electrical Power and Renewable Energy Engineering"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Cairo",
    "rating": 4.3,
    "website": "https://maps.google.com/?q=Badya+University,+Badya+City,+6th+of+October,+Giza,+Egypt",
    "email": "admissions@badyauniversity.edu.eg",
    "phone": "+20 2 20001603"
  },
  {
    "id": 79,
    "name": "Innovation University (IU)",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916513/lu_ktvi43.jpg",
    "description": "Innovation University is a private international university established by EHAF Education as the first international campus of Universal University. It aims to provide an innovative, technology-driven educational experience through partnerships with internationally recognized universities, preparing graduates with practical skills, creativity, entrepreneurship, and leadership to meet the goals of Egypt Vision 2030. The university focuses on combining academic excellence with industry collaboration and real-world learning.",
    "departments": [
      "Faculty of Arts and Applied Arts",
      "Faculty of Physical Therapy",
      "Faculty of Computer Science and Information Technology",
      "Faculty of Business Administration and Economics",
      "Faculty of Engineering",
      "Faculty of Dentistry",
      "Faculty of Nursing"
    ],
    "faculties": [
      {
        "name": "Faculty of Arts and Applied Arts",
        "majors": [
          {
            "name": "Interior Design"
          },
          {
            "name": "Graphic Design"
          },
          {
            "name": "Digital Media"
          },
          {
            "name": "Animation"
          },
          {
            "name": "Product Design"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Therapy",
        "majors": [
          {
            "name": "Physical Therapy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Computer Science and Information Technology",
        "majors": [
          {
            "name": "Computer Science"
          },
          {
            "name": "Artificial Intelligence"
          },
          {
            "name": "Cybersecurity"
          },
          {
            "name": "Software Engineering"
          },
          {
            "name": "Data Science"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Business Administration and Economics",
        "majors": [
          {
            "name": "Business Administration"
          },
          {
            "name": "Accounting"
          },
          {
            "name": "Finance"
          },
          {
            "name": "Marketing"
          },
          {
            "name": "Economics"
          },
          {
            "name": "Business Information Systems (BIS)"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Civil Engineering"
          },
          {
            "name": "Architectural Engineering"
          },
          {
            "name": "Computer Engineering"
          },
          {
            "name": "Mechatronics Engineering"
          },
          {
            "name": "Communications Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Dentistry",
        "majors": [
          {
            "name": "Dentistry"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Nursing",
        "majors": [
          {
            "name": "Nursing"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Egypt",
    "rating": 4.8,
    "website": "https://maps.google.com/?q=Innovation+University,+New+Administrative+Capital,+Egypt",
    "email": "admissions@innovationuniversityiu.edu.eg",
    "phone": "+20 2 20002454"
  },
  {
    "id": 80,
    "name": "Egypt University of Informatics (EUI)",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916510/eui_n1ht9w.jpg",
    "description": "Egypt University of Informatics (EUI) is one of the pioneering specialized universities in the Middle East and Africa dedicated to Information and Communications Technology (ICT) and related disciplines. Established through collaboration between the Ministry of Communications and Information Technology and the Ministry of Higher Education and Scientific Research, EUI aims to provide world-class education, cutting-edge research, and industry-focused programs that prepare highly skilled professionals to meet the evolving demands of the global digital economy.",
    "departments": [
      "Faculty of Computer and Information Sciences",
      "Faculty of Engineering",
      "Faculty of Business Informatics",
      "Faculty of Digital Arts and Design"
    ],
    "faculties": [
      {
        "name": "Faculty of Computer and Information Sciences",
        "majors": [
          {
            "name": "Computer Science"
          },
          {
            "name": "Artificial Intelligence"
          },
          {
            "name": "Data Science"
          },
          {
            "name": "Cybersecurity"
          },
          {
            "name": "Software Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Electronics and Communications Engineering"
          },
          {
            "name": "Computer Engineering"
          },
          {
            "name": "Mechatronics Engineering"
          },
          {
            "name": "Biomedical Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Business Informatics",
        "majors": [
          {
            "name": "Business Informatics"
          },
          {
            "name": "Digital Business"
          },
          {
            "name": "Financial Technology (FinTech)"
          },
          {
            "name": "Digital Accounting"
          },
          {
            "name": "Business Analytics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Digital Arts and Design",
        "majors": [
          {
            "name": "Digital Animation"
          },
          {
            "name": "Game Design"
          },
          {
            "name": "Graphic Design"
          },
          {
            "name": "User Experience (UX) Design"
          },
          {
            "name": "Digital Media Arts"
          },
          {
            "name": "Interactive Media Design"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Egypt",
    "rating": 4.2,
    "website": "https://maps.google.com/?q=Egypt+University+of+Informatics,+Knowledge+City,+New+Administrative+Capital,+Egypt",
    "email": "admissions@egyptuniversityofinformaticseui.edu.eg",
    "phone": "+20 2 20003411"
  },
  {
    "id": 81,
    "name": "Memphis University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916514/mem_ak9trk.jpg",
    "description": "Memphis University is a private university located in New Cairo, Egypt, operating under Taaleem Management Services. The university is committed to delivering high-quality education through innovative academic programs, advanced learning facilities, and a student-centered environment. It aims to prepare graduates with the knowledge, practical skills, and leadership abilities needed to succeed in a rapidly evolving global workplace.",
    "departments": [
      "Faculty of Medicine",
      "Faculty of Business Administration",
      "Faculty of Engineering"
    ],
    "faculties": [
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "Medicine and Surgery"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Business Administration",
        "majors": [
          {
            "name": "Business Administration"
          },
          {
            "name": "Finance"
          },
          {
            "name": "Marketing"
          },
          {
            "name": "Accounting"
          },
          {
            "name": "Business Information Systems (BIS)"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Civil Engineering"
          },
          {
            "name": "Architecture Engineering"
          },
          {
            "name": "Mechanical Engineering"
          },
          {
            "name": "Electrical Engineering"
          },
          {
            "name": "Computer Engineering"
          },
          {
            "name": "Mechatronics Engineering"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Cairo",
    "rating": 4.2,
    "website": "https://maps.google.com/?q=Memphis+University,+Plot+25,+Universities+and+Institutes+District,+New+Cairo,+Egypt",
    "email": "admissions@memphisuniversity.edu.eg",
    "phone": "+20 2 20001845"
  },
  {
    "id": 82,
    "name": "New Cairo Technological University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916516/New_Cairo_Technological_zltga3.jpg",
    "description": "New Cairo Technological University (NCTU) is a public technological university established in 2019 to provide high-quality applied technological education. The university follows a competency-based approach that combines academic study with practical training in advanced laboratories and industrial environments. It offers modern programs aligned with labor market needs and prepares graduates for careers in engineering, information technology, energy, healthcare technology, and industrial sectors.",
    "departments": [
      "Faculty of Industry and Energy Technology",
      "Faculty of Health Sciences Technology"
    ],
    "faculties": [
      {
        "name": "Faculty of Industry and Energy Technology",
        "majors": [
          {
            "name": "Information Technology"
          },
          {
            "name": "Mechatronics Technology"
          },
          {
            "name": "Autotronics Technology"
          },
          {
            "name": "New and Renewable Energy Technology"
          },
          {
            "name": "Technology of Production, Processing and Transport of Petroleum"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Health Sciences Technology",
        "majors": [
          {
            "name": "rosthetics and Orthotics Technology"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Cairo",
    "rating": 4.8,
    "website": "https://maps.google.com/?q=New+Cairo+Technological+University+Fifth+Settlement+Egypt",
    "email": "admissions@newcairotechnologicaluniversity.edu.eg",
    "phone": "+20 2 20003318"
  },
  {
    "id": 83,
    "name": "Beni Suef Technological University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916508/BeniSuefTechnological_hj4k0l.jpg",
    "description": "Beni Suef Technological University is a public technological university established in 2019 to provide high-quality applied technological education in Egypt. The university follows a practice-oriented educational model that combines academic study with extensive hands-on training. In cooperation with Korean partners, it offers internationally accredited programs designed to meet the needs of modern industry and prepare graduates for careers in engineering, information technology, energy, and advanced manufacturing.",
    "departments": [
      "Egyptian-Korean Faculty of Technological Industry and Energy"
    ],
    "faculties": [
      {
        "name": "Egyptian-Korean Faculty of Technological Industry and Energy",
        "majors": [
          {
            "name": "Mechatronics Technology"
          },
          {
            "name": "Information and Communication Technology (ICT)"
          },
          {
            "name": "Autotronics Technology"
          },
          {
            "name": "Renewable Energy Technology"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Beni Suef",
    "rating": 5,
    "website": "https://maps.google.com/?q=Beni+Suef+Technological+University+Egypt",
    "email": "admissions@benisueftechnologicaluniversity.edu.eg",
    "phone": "+20 2 20003311"
  },
  {
    "id": 84,
    "name": "6th of October Technological University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916506/6thofOctoberTechnological_zkon6a.jpg",
    "description": "6th of October Technological University is a public technological university in Egypt that provides competency-based, applied education focused on practical training and industry needs. The university aims to prepare highly skilled technologists through modern laboratories, partnerships with industrial sectors, and programs that align with Egypt's Vision 2030 and the evolving labor market.",
    "departments": [
      "Faculty of Industry and Energy Technology"
    ],
    "faculties": [
      {
        "name": "Faculty of Industry and Energy Technology",
        "majors": [
          {
            "name": "Information Technology"
          },
          {
            "name": "Petroleum Services Technology"
          },
          {
            "name": "Electronics Engineering Technology"
          },
          {
            "name": "Food Industries Technology"
          },
          {
            "name": "Furniture Manufacturing Technology"
          },
          {
            "name": "Automotive Maintenance and Repair Technology"
          },
          {
            "name": "Mechanical Maintenance Technology"
          },
          {
            "name": "Electrical Installations Technology"
          },
          {
            "name": "Fashion Design and Garment Technology"
          },
          {
            "name": "Surveying and Mapping Technology"
          },
          {
            "name": "Tourism and Hotel Technology"
          },
          {
            "name": "Business Administration Technology"
          },
          {
            "name": "Healthcare Assistant Technology"
          },
          {
            "name": "Journalism and Media Technology"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Egypt",
    "rating": 4.3,
    "website": "https://maps.google.com/?q=6th+of+October+Technological+University+Giza+Egypt",
    "email": "admissions@6thofoctobertechnologicaluniversity.edu.eg",
    "phone": "+20 2 20003763"
  },
  {
    "id": 85,
    "name": "Borg El Arab Technological University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784922669/logo_xuhc7x.png",
    "description": "Borg El Arab Technological University is a public technological university established in 2022 to provide applied, competency-based education that meets the needs of modern industries and service sectors. The university combines academic study with practical training, focusing on developing skilled technologists through advanced laboratories and strong partnerships with industry to prepare graduates for the local and international labor market.",
    "departments": [
      "Faculty of Industry and Energy Technology",
      "Faculty of Hotel and Tourism Services Technology"
    ],
    "faculties": [
      {
        "name": "Faculty of Industry and Energy Technology",
        "majors": [
          {
            "name": "nformation Technology"
          },
          {
            "name": "Railway Technology"
          },
          {
            "name": "Food Processing Technology"
          },
          {
            "name": "Technology of Operation and Maintenance of Textile Machines"
          },
          {
            "name": "Tractor and Agricultural Equipment Technology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Hotel and Tourism Services Technology",
        "majors": [
          {
            "name": "Hotel Services Technology"
          },
          {
            "name": "Tourism and Travel Services Technology"
          },
          {
            "name": "Food and Beverage Technology"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Egypt",
    "rating": 4.4,
    "website": "https://maps.google.com/?q=Borg+El+Arab+Technological+University+Alexandria+Egypt",
    "email": "admissions@borgelarabtechnologicaluniversity.edu.eg",
    "phone": "+20 2 20003503"
  },
  {
    "id": 86,
    "name": "East Port Said Technological University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916510/East_Port_Said_Technologicall_b98vho.jpg",
    "description": "East Port Said Technological University is a public technological university in Egypt that provides competency-based education with a strong emphasis on practical training and industrial applications. The university offers modern technological programs designed to meet the needs of the labor market and supports innovation, digital transformation, and partnerships with industry to prepare highly qualified technologists for local and international careers.",
    "departments": [
      "Faculty of Industry and Energy Technology"
    ],
    "faculties": [
      {
        "name": "Faculty of Industry and Energy Technology",
        "majors": [
          {
            "name": "Information Technology"
          },
          {
            "name": "Mechatronics Technology"
          },
          {
            "name": "Autotronics Technology"
          },
          {
            "name": "New and Renewable Energy Technology"
          },
          {
            "name": "Railway Technology"
          },
          {
            "name": "Port and Logistics Technology"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Port Said",
    "rating": 5,
    "website": "https://maps.google.com/?q=East+Port+Said+Technological+University+Port+Said+Egypt",
    "email": "admissions@eastportsaidtechnologicaluniversity.edu.eg",
    "phone": "+20 2 20003761"
  },
  {
    "id": 87,
    "name": "El Sewedy University of Technology",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916510/ElSewedyUniversityofTechnology.jpg_g52y9a.jpg",
    "description": "El Sewedy University of Technology (SUT) is a private technological university in Egypt established in partnership with leading international academic and industrial institutions. The university provides industry-oriented education that combines theoretical knowledge with extensive practical training. Its programs focus on engineering, technology, business, innovation, and entrepreneurship, preparing graduates to meet the demands of the local and global labor market.",
    "departments": [
      "Faculty of Engineering and Technology",
      "Faculty of Business Administration and Technology"
    ],
    "faculties": [
      {
        "name": "Faculty of Engineering and Technology",
        "majors": [
          {
            "name": "Mechatronics Engineering Technology"
          },
          {
            "name": "Electrical Engineering Technology"
          },
          {
            "name": "Mechanical Engineering Technology"
          },
          {
            "name": "Industrial Engineering Technology"
          },
          {
            "name": "Automation and Robotics"
          },
          {
            "name": "Information Technology"
          },
          {
            "name": "Artificial Intelligence"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Business Administration and Technology",
        "majors": [
          {
            "name": "Business Administration"
          },
          {
            "name": "Accounting"
          },
          {
            "name": "Marketing"
          },
          {
            "name": "Supply Chain Management"
          },
          {
            "name": "Human Resources Management"
          },
          {
            "name": "Digital Business"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Egypt",
    "rating": 4.2,
    "website": "https://maps.google.com/?q=El+Sewedy+University+of+Technology+10th+of+Ramadan+City+Egypt",
    "email": "admissions@elsewedyuniversityoftechnology.edu.eg",
    "phone": "+20 2 20003285"
  },
  {
    "id": 88,
    "name": "Benha University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784922788/71078181_116567793070881_7444592325986091008_n_z7sxw8.jpg",
    "description": "Benha University is one of Egypt's leading public universities. It was established as an independent university in 2005 after being a branch of Zagazig University. Located in Qalyubia Governorate, the university offers a wide range of undergraduate and postgraduate programs in medicine, engineering, agriculture, science, business, law, arts, and technology. It is recognized for its academic excellence, scientific research, innovation, and strong community engagement.",
    "departments": [
      "Faculty of Medicine",
      "Faculty of Veterinary Medicine",
      "Faculty of Nursing",
      "Faculty of Physical Therapy",
      "Faculty of Engineering (Benha)",
      "Faculty of Engineering (Shoubra)",
      "Faculty of Computers and Artificial Intelligence",
      "Faculty of Science",
      "Faculty of Agriculture",
      "Faculty of Commerce",
      "Faculty of Applied Arts",
      "Faculty of Arts",
      "Faculty of Education",
      "Faculty of Sports Science",
      "Faculty of Law",
      "Faculty of Specific Education",
      "Benha-Wuhan Faculty for Graduate Studies"
    ],
    "faculties": [
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "Medicine and Surgery"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Veterinary Medicine",
        "majors": [
          {
            "name": "Veterinary Medicine"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Nursing",
        "majors": [
          {
            "name": "Nursing"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Therapy",
        "majors": [
          {
            "name": "Physical Therapy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering (Benha)",
        "majors": [
          {
            "name": "Civil Engineering"
          },
          {
            "name": "Architectural Engineering"
          },
          {
            "name": "Mechanical Engineering"
          },
          {
            "name": "Electrical Engineering"
          },
          {
            "name": "Computer Engineering"
          },
          {
            "name": "Mechatronics Engineering"
          },
          {
            "name": "Communications Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering (Shoubra)",
        "majors": [
          {
            "name": "Civil Engineering"
          },
          {
            "name": "Architectural Engineering"
          },
          {
            "name": "Mechanical Engineering"
          },
          {
            "name": "Electrical Engineering"
          },
          {
            "name": "Computer Engineering"
          },
          {
            "name": "Mechatronics Engineering"
          },
          {
            "name": "Communications Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Computers and Artificial Intelligence",
        "majors": [
          {
            "name": "Computer Science"
          },
          {
            "name": "Artificial Intelligence"
          },
          {
            "name": "Information Systems"
          },
          {
            "name": "Software Engineering"
          },
          {
            "name": "Cybersecurity"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Science",
        "majors": [
          {
            "name": "Mathematics"
          },
          {
            "name": "Physics"
          },
          {
            "name": "Chemistry"
          },
          {
            "name": "Botany"
          },
          {
            "name": "Zoology"
          },
          {
            "name": "Microbiology"
          },
          {
            "name": "Biochemistry"
          },
          {
            "name": "Geology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Agriculture",
        "majors": [
          {
            "name": "Agronomy"
          },
          {
            "name": "Horticulture"
          },
          {
            "name": "Plant Protection"
          },
          {
            "name": "Soil Science"
          },
          {
            "name": "Agricultural Engineering"
          },
          {
            "name": "Animal Production"
          },
          {
            "name": "Food Science"
          },
          {
            "name": "Agricultural Economics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Commerce",
        "majors": [
          {
            "name": "Accounting"
          },
          {
            "name": "Business Administration"
          },
          {
            "name": "Economics"
          },
          {
            "name": "Statistics"
          },
          {
            "name": "Insurance"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Applied Arts",
        "majors": [
          {
            "name": "Graphic Design"
          },
          {
            "name": "Interior Design"
          },
          {
            "name": "Industrial Design"
          },
          {
            "name": "Textile Design"
          },
          {
            "name": "Fashion Design"
          },
          {
            "name": "Printing and Publishing"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Arts",
        "majors": [
          {
            "name": "Arabic Language and Literature"
          },
          {
            "name": "English Language and Literature"
          },
          {
            "name": "French Language and Literature"
          },
          {
            "name": "History"
          },
          {
            "name": "Geography"
          },
          {
            "name": "Sociology"
          },
          {
            "name": "Psychology"
          },
          {
            "name": "Philosophy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Education",
        "majors": [
          {
            "name": "Arabic Language"
          },
          {
            "name": "English Language"
          },
          {
            "name": "Mathematics"
          },
          {
            "name": "Physics"
          },
          {
            "name": "Chemistry"
          },
          {
            "name": "Biology"
          },
          {
            "name": "Educational Psychology"
          },
          {
            "name": "Curriculum and Instruction"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Sports Science",
        "majors": [
          {
            "name": "Physical Education"
          },
          {
            "name": "Sports Training"
          },
          {
            "name": "Sports Management"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Law",
        "majors": [
          {
            "name": "Law"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Specific Education",
        "majors": [
          {
            "name": "Art Education"
          },
          {
            "name": "Music Education"
          },
          {
            "name": "Home Economics"
          },
          {
            "name": "Educational Media"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Benha-Wuhan Faculty for Graduate Studies",
        "majors": [],
        "annualFee": null
      }
    ],
    "location": "Zagazig",
    "rating": 4.9,
    "website": "https://maps.google.com/?q=Benha+University+Benha+Egypt",
    "email": "admissions@benhauniversity.edu.eg",
    "phone": "+20 2 20001600"
  },
  {
    "id": 89,
    "name": "Cairo National University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784922872/8426b5c2-a0d5-4bc3-8afa-c980658fb140_efwoue.jpg",
    "description": "Cairo National University is a public national university in Egypt established to provide high-quality education based on international academic standards. The university offers modern interdisciplinary programs that combine academic excellence with practical training, scientific research, innovation, and digital transformation, preparing graduates for the evolving needs of the local and global labor markets.",
    "departments": [
      "Faculty of Medicine",
      "Faculty of Dentistry",
      "Faculty of Pharmacy",
      "Faculty of Nursing",
      "Faculty of Physical Therapy",
      "Faculty of Engineering",
      "Faculty of Computers and Artificial Intelligence",
      "Faculty of Science",
      "Faculty of Business",
      "Faculty of Economics and Political Science",
      "Faculty of Media",
      "Faculty of Law",
      "Faculty of Education",
      "Faculty of Agriculture"
    ],
    "faculties": [
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "Medicine and Surgery"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Dentistry",
        "majors": [
          {
            "name": "Oral and Dental Medicine"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "Clinical Pharmacy"
          },
          {
            "name": "PharmD"
          },
          {
            "name": "Pharmaceutical Sciences"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Nursing",
        "majors": [
          {
            "name": "Nursing"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Therapy",
        "majors": [
          {
            "name": "Physical Therapy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Civil Engineering"
          },
          {
            "name": "Architectural Engineering"
          },
          {
            "name": "Mechanical Engineering"
          },
          {
            "name": "Electrical Engineering"
          },
          {
            "name": "Computer Engineering"
          },
          {
            "name": "Mechatronics Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Computers and Artificial Intelligence",
        "majors": [
          {
            "name": "Computer Science"
          },
          {
            "name": "Artificial Intelligence"
          },
          {
            "name": "Information Systems"
          },
          {
            "name": "Data Science"
          },
          {
            "name": "Cybersecurity"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Science",
        "majors": [
          {
            "name": "Mathematics"
          },
          {
            "name": "Physics"
          },
          {
            "name": "Chemistry"
          },
          {
            "name": "Biotechnology"
          },
          {
            "name": "Geology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Business",
        "majors": [
          {
            "name": "Accounting"
          },
          {
            "name": "Business Administration"
          },
          {
            "name": "Finance"
          },
          {
            "name": "Marketing"
          },
          {
            "name": "Economics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Economics and Political Science",
        "majors": [
          {
            "name": "Economics"
          },
          {
            "name": "Political Science"
          },
          {
            "name": "Statistics"
          },
          {
            "name": "Public Administration"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Media",
        "majors": [
          {
            "name": "Journalism"
          },
          {
            "name": "Radio and Television"
          },
          {
            "name": "Public Relations"
          },
          {
            "name": "Digital Media"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Law",
        "majors": [
          {
            "name": "Law"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Education",
        "majors": [
          {
            "name": "Education"
          },
          {
            "name": "Educational Psychology"
          },
          {
            "name": "Curriculum and Instruction"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Agriculture",
        "majors": [
          {
            "name": "Agronomy"
          },
          {
            "name": "Biotechnology"
          },
          {
            "name": "Food Science"
          },
          {
            "name": "Animal Production"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Cairo",
    "rating": 4.6,
    "website": "https://maps.google.com/?q=Cairo+National+University+6th+of+October+City+Egypt",
    "email": "admissions@caironationaluniversity.edu.eg",
    "phone": "+20 2 20002470"
  },
  {
    "id": 90,
    "name": "Ain Shams National University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784922947/632291615_122128901810998031_7868618199962272016_n_ngydha.jpg",
    "description": "Ain Shams National University is a public national university established in 2025 and supported by the Egyptian government. Located at the entrance to the New Administrative Capital, it offers modern interdisciplinary programs based on international academic standards. The university focuses on innovation, scientific research, digital transformation, and practical education to prepare graduates for the evolving needs of local and global labor markets.",
    "departments": [
      "Faculty of Medicine",
      "Faculty of Dentistry",
      "Faculty of Engineering",
      "Faculty of Computers and Information and Artificial Intelligence",
      "Faculty of Business",
      "Faculty of Science",
      "Faculty of Agriculture",
      "Faculty of Languages and Humanities",
      "Faculty of Mass Communication",
      "Faculty of Nursing",
      "Faculty of Law"
    ],
    "faculties": [
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "Medicine and Surgery"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Dentistry",
        "majors": [
          {
            "name": "Oral and Dental Medicine"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Digital Manufacturing and Materials Engineering"
          },
          {
            "name": "Robotics and Autonomous Systems Engineering"
          },
          {
            "name": "Computational Architecture and Intelligent Urban Design"
          },
          {
            "name": "Electronics and Artificial Intelligence Engineering"
          },
          {
            "name": "Civil Engineering and Environmental Informatics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Computers and Information and Artificial Intelligence",
        "majors": [
          {
            "name": "Computer Science"
          },
          {
            "name": "Artificial Intelligence"
          },
          {
            "name": "Data Science and Analytics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Business",
        "majors": [
          {
            "name": "Financial Technology (FinTech)"
          },
          {
            "name": "Digital Marketing"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Science",
        "majors": [
          {
            "name": "Mathematics"
          },
          {
            "name": "Physics"
          },
          {
            "name": "Chemistry"
          },
          {
            "name": "Biotechnology"
          },
          {
            "name": "Geology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Agriculture",
        "majors": [
          {
            "name": "Agronomy"
          },
          {
            "name": "Food Science"
          },
          {
            "name": "Plant Biotechnology"
          },
          {
            "name": "Animal Production"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Languages and Humanities",
        "majors": [
          {
            "name": "English Language"
          },
          {
            "name": "French Language"
          },
          {
            "name": "German Language"
          },
          {
            "name": "Translation"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Mass Communication",
        "majors": [
          {
            "name": "Journalism"
          },
          {
            "name": "Digital Media"
          },
          {
            "name": "Public Relations"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Nursing",
        "majors": [
          {
            "name": "Nursing"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Law",
        "majors": [
          {
            "name": "Law"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Egypt",
    "rating": 4.8,
    "website": "https://maps.google.com/?q=Ain+Shams+National+University+New+Administrative+Capital+Egypt",
    "email": "admissions@ainshamsnationaluniversity.edu.eg",
    "phone": "+20 2 20002796"
  },
  {
    "id": 91,
    "name": "Helwan National University (HNU)",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916512/HelwanNational_tn1cvq.jpg",
    "description": "Helwan National University (HNU) is a public national university in Egypt established to provide high-quality education that meets national and international standards. The university offers modern interdisciplinary programs with a strong emphasis on innovation, scientific research, entrepreneurship, and practical training. HNU combines academic excellence with hands-on learning to prepare graduates for the evolving demands of the local and global labor market.",
    "departments": [
      "Faculty of Medicine and Surgery",
      "Faculty of Dentistry",
      "Faculty of Physical Therapy",
      "Faculty of Engineering",
      "Faculty of Computer Science and Information Technology",
      "Faculty of Sciences",
      "Faculty of Applied Health Sciences",
      "Faculty of Arts and Applied Arts",
      "Faculty of Humanities, Commerce, and Business Administration"
    ],
    "faculties": [
      {
        "name": "Faculty of Medicine and Surgery",
        "majors": [
          {
            "name": "Medicine and Surgery"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Dentistry",
        "majors": [
          {
            "name": "Oral and Dental Medicine"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Therapy",
        "majors": [
          {
            "name": "Physical Therapy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Civil Engineering"
          },
          {
            "name": "Architectural Engineering"
          },
          {
            "name": "Mechanical Engineering"
          },
          {
            "name": "Electrical Engineering"
          },
          {
            "name": "Mechatronics Engineering"
          },
          {
            "name": "Computer Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Computer Science and Information Technology",
        "majors": [
          {
            "name": "Computer Science"
          },
          {
            "name": "Information Technology"
          },
          {
            "name": "Artificial Intelligence"
          },
          {
            "name": "Cybersecurity"
          },
          {
            "name": "Software Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Sciences",
        "majors": [
          {
            "name": "Mathematics"
          },
          {
            "name": "Physics"
          },
          {
            "name": "Chemistry"
          },
          {
            "name": "Biotechnology"
          },
          {
            "name": "Environmental Science"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Applied Health Sciences",
        "majors": [
          {
            "name": "Medical Laboratory Technology"
          },
          {
            "name": "Radiological and Imaging Technology"
          },
          {
            "name": "Health Information Technology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Arts and Applied Arts",
        "majors": [
          {
            "name": "Graphic Design"
          },
          {
            "name": "Interior Design"
          },
          {
            "name": "Industrial Design"
          },
          {
            "name": "Fashion Design"
          },
          {
            "name": "Fine Arts"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Humanities, Commerce, and Business Administration",
        "majors": [
          {
            "name": "Accounting"
          },
          {
            "name": "Business Administration"
          },
          {
            "name": "Marketing"
          },
          {
            "name": "Finance"
          },
          {
            "name": "Economics"
          },
          {
            "name": "Digital Business"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Egypt",
    "rating": 4.8,
    "website": "https://www.hnu.edu.eg/en?utm_source=chatgpt.com",
    "email": "admissions@helwannationaluniversityhnu.edu.eg",
    "phone": "+20 2 20002931"
  },
  {
    "id": 92,
    "name": "Benha National University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784923050/Banaha-Uni-logo_vq9abp.webp",
    "description": "Benha National University (BNU) is a public national university established in 2022 as one of Egypt's fourth-generation smart universities. Located in Obour City, the university offers innovative interdisciplinary programs that follow international academic standards. BNU emphasizes digital transformation, scientific research, entrepreneurship, and practical training through advanced educational facilities, preparing graduates for the evolving needs of local and global labor markets.",
    "departments": [
      "Faculty of Medicine",
      "Faculty of Dentistry",
      "Faculty of Physical Therapy",
      "Faculty of Veterinary Medicine",
      "Faculty of Engineering",
      "Faculty of Computer Sciences",
      "Faculty of Visual Arts and Design",
      "Faculty of Business and Economics",
      "Faculty of Energy Sciences",
      "Faculty of Applied Health Sciences Technology"
    ],
    "faculties": [
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "Medicine and Surgery"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Dentistry",
        "majors": [
          {
            "name": "Oral and Dental Medicine"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Therapy",
        "majors": [
          {
            "name": "Physical Therapy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Veterinary Medicine",
        "majors": [
          {
            "name": "Veterinary Medicine"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Communication Systems Engineering"
          },
          {
            "name": "Mechatronics Engineering"
          },
          {
            "name": "Housing and Community Design"
          },
          {
            "name": "Construction Engineering"
          },
          {
            "name": "Biomedical Engineering"
          },
          {
            "name": "Manufacturing and Materials Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Computer Sciences",
        "majors": [
          {
            "name": "Artificial Intelligence and Machine Learning"
          },
          {
            "name": "Computational Linguistics"
          },
          {
            "name": "Data Science"
          },
          {
            "name": "Program Development and Applications"
          },
          {
            "name": "Virtual Reality and Augmented Reality"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Visual Arts and Design",
        "majors": [
          {
            "name": "Interior Design and Furniture"
          },
          {
            "name": "Media and Advertising"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Business and Economics",
        "majors": [
          {
            "name": "International Business and Relations Management"
          },
          {
            "name": "International Economics and Finance"
          },
          {
            "name": "Accounting and Business Informatics"
          },
          {
            "name": "Digital Marketing and E-Business"
          },
          {
            "name": "Insurance and Statistics"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Energy Sciences",
        "majors": [
          {
            "name": "Fossil Fuel Energy"
          },
          {
            "name": "Renewable Energy"
          },
          {
            "name": "Nuclear Energy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Applied Health Sciences Technology",
        "majors": [
          {
            "name": "Medical Laboratory Technology"
          },
          {
            "name": "Radiological Technology"
          },
          {
            "name": "Health Technology Programs"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Obour City",
    "rating": 4.8,
    "website": "https://maps.google.com/?q=Benha+National+University+Obour+City+Egypt&utm_source=chatgpt.com",
    "email": "admissions@benhanationaluniversity.edu.eg",
    "phone": "+20 2 20002454"
  },
  {
    "id": 93,
    "name": "Zagazig National University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916521/Zagazig_National_yfid2y.jpg",
    "description": "Zagazig National University is a public national, non-profit university located in Knowledge City, 10th of Ramadan City, Egypt. It offers modern interdisciplinary programs based on the credit-hour system and focuses on high-quality education, scientific research, innovation, and practical training. The university is designed as a smart campus and prepares graduates to meet the needs of both local and international labor markets.",
    "departments": [
      "Faculty of Medicine",
      "Faculty of Oral and Dental Medicine",
      "Faculty of Pharmacy",
      "Faculty of Nursing",
      "Faculty of Engineering",
      "Faculty of Computers and Information",
      "Faculty of Business"
    ],
    "faculties": [
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "Medicine and Surgery"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Oral and Dental Medicine",
        "majors": [
          {
            "name": "Oral and Dental Medicine"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "Clinical Pharmacy (PharmD)"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Nursing",
        "majors": [
          {
            "name": "Nursing"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Mechatronics Engineering"
          },
          {
            "name": "Construction Engineering and Construction Management"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Computers and Information",
        "majors": [
          {
            "name": "Artificial Intelligence and Data Science"
          },
          {
            "name": "Medical Informatics"
          },
          {
            "name": "Aviation Information Systems"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Business",
        "majors": [
          {
            "name": "Accounting"
          },
          {
            "name": "Business Administration and Marketing"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Zagazig",
    "rating": 4.4,
    "website": "https://maps.google.com/?q=Zagazig+National+University+Knowledge+City+10th+of+Ramadan+City+Egypt",
    "email": "admissions@zagazignationaluniversity.edu.eg",
    "phone": "+20 2 20002693"
  },
  {
    "id": 94,
    "name": "Suez Canal National University",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916521/Suez_Canal_National_fsabda.jpg",
    "description": "Suez Canal National University is a public national university in Egypt established to provide high-quality education based on international standards. The university offers modern academic programs with a strong emphasis on practical training, innovation, scientific research, and digital transformation. It aims to prepare graduates with the skills and competencies needed to meet the demands of both the local and global labor markets.",
    "departments": [
      "Faculty of Medicine",
      "Faculty of Dentistry",
      "Faculty of Pharmacy",
      "Faculty of Nursing",
      "Faculty of Physical Therapy",
      "Faculty of Engineering",
      "Faculty of Computers and Information",
      "Faculty of Commerce and International Business",
      "Faculty of Applied Health Sciences Technology",
      "Faculty of Tourism and Hotel Management"
    ],
    "faculties": [
      {
        "name": "Faculty of Medicine",
        "majors": [
          {
            "name": "Medicine and Surgery"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Dentistry",
        "majors": [
          {
            "name": "Oral and Dental Medicine"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "Clinical Pharmacy (PharmD)"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Nursing",
        "majors": [
          {
            "name": "Nursing"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Physical Therapy",
        "majors": [
          {
            "name": "Physical Therapy"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Engineering",
        "majors": [
          {
            "name": "Civil Engineering"
          },
          {
            "name": "Architectural Engineering"
          },
          {
            "name": "Electrical Engineering"
          },
          {
            "name": "Mechanical Engineering"
          },
          {
            "name": "Mechatronics Engineering"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Computers and Information",
        "majors": [
          {
            "name": "Computer Science"
          },
          {
            "name": "Artificial Intelligence"
          },
          {
            "name": "Information Systems"
          },
          {
            "name": "Cybersecurity"
          },
          {
            "name": "Data Science"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Commerce and International Business",
        "majors": [
          {
            "name": "Accounting"
          },
          {
            "name": "Business Administration"
          },
          {
            "name": "Marketing"
          },
          {
            "name": "Finance"
          },
          {
            "name": "International Business"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Applied Health Sciences Technology",
        "majors": [
          {
            "name": "Medical Laboratory Technology"
          },
          {
            "name": "Radiological and Imaging Technology"
          },
          {
            "name": "Health Information Technology"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Tourism and Hotel Management",
        "majors": [
          {
            "name": "Tourism Studies"
          },
          {
            "name": "Hotel Management"
          },
          {
            "name": "Tourism Guidance"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Suez",
    "rating": 4.5,
    "website": "https://maps.google.com/?q=Suez+Canal+National+University+Ismailia+Egypt",
    "email": "admissions@suezcanalnationaluniversity.edu.eg",
    "phone": "+20 2 20002910"
  },
  {
    "id": 95,
    "name": "National University of Sadat City",
    "image": "https://res.cloudinary.com/yrqizhfy/image/upload/v1784916516/National_University_of_Sadat_City_r6ouui.jpg",
    "description": "National University of Sadat City is a public national university established in 2025 in Sadat City, Egypt. The university offers modern interdisciplinary programs that combine academic excellence with practical training, digital transformation, scientific research, and innovation. Its curricula are designed to meet the evolving needs of local and international labor markets while providing students with a modern learning environment.",
    "departments": [
      "Faculty of Computers, Information, and Artificial Intelligence",
      "Faculty of Veterinary Medicine",
      "Faculty of Pharmacy",
      "Faculty of Business",
      "Faculty of Science",
      "Faculty of Tourism and Hotels",
      "Faculty of Sports Sciences"
    ],
    "faculties": [
      {
        "name": "Faculty of Computers, Information, and Artificial Intelligence",
        "majors": [
          {
            "name": "Computer Science"
          },
          {
            "name": "Artificial Intelligence"
          },
          {
            "name": "Information Systems"
          },
          {
            "name": "Data Science"
          },
          {
            "name": "Cybersecurity"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Veterinary Medicine",
        "majors": [
          {
            "name": "Veterinary Medicine"
          },
          {
            "name": "Food Safety"
          },
          {
            "name": "Animal Health"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Pharmacy",
        "majors": [
          {
            "name": "Clinical Pharmacy (PharmD)"
          },
          {
            "name": "Pharmaceutical Sciences"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Business",
        "majors": [
          {
            "name": "Accounting"
          },
          {
            "name": "Business Administration"
          },
          {
            "name": "Marketing"
          },
          {
            "name": "Finance"
          },
          {
            "name": "Entrepreneurship"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Science",
        "majors": [
          {
            "name": "Chemistry"
          },
          {
            "name": "Physics"
          },
          {
            "name": "Biological Sciences"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Tourism and Hotels",
        "majors": [
          {
            "name": "Tourism Studies"
          },
          {
            "name": "Hotel Management"
          },
          {
            "name": "Aviation Management"
          },
          {
            "name": "International Hotel and Restaurant Operations Management"
          }
        ],
        "annualFee": null
      },
      {
        "name": "Faculty of Sports Sciences",
        "majors": [
          {
            "name": "Sports Sciences"
          },
          {
            "name": "Sports Training"
          },
          {
            "name": "Sports Management"
          }
        ],
        "annualFee": null
      }
    ],
    "location": "Egypt",
    "rating": 4.7,
    "website": "https://maps.google.com/?q=National+University+of+Sadat+City+Egypt",
    "email": "admissions@nationaluniversityofsadatcity.edu.eg",
    "phone": "+20 2 20003155"
  }
];
