// 1. Inserting copyright text in the footer:
const today = new Date();

const thisYear = today.getFullYear();
const footer = document.querySelector('footer')
const copyright = document.createElement("p")

copyright.innerHTML = `© Gabriel Sandoval ${thisYear}`;
footer.appendChild(copyright);

// 2. Creating a list of skills:
const skills = ([
    "Python", 
    "SQL",
    "Regex",
    "Pandas", 
    "Statsmodel",
    "PyMC",
    "Bambi",
    "SpaCy",
    "Matplotlib",
    "NumPy",
    "Scikit-Learn",
    "Plotly",
    "JavaScript", 
    "HTML", 
    "CSS", 
    "Git"
])

const skillsSection = document.querySelector("#Skills")
const skillsList = skillsSection.querySelector("ul")

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerText = skills[i]
    skillsList.appendChild(skill);
}