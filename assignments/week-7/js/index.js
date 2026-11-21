// 1. Creatign a footer
const footer = document.createElement("footer");

// 2. Inserting copyright text in the footer:
const today = new Date();

const thisYear = today.getFullYear();
const copyright = document.createElement("p")

copyright.innerText = `© Gabriel Sandoval ${thisYear}`;
footer.appendChild(copyright);
document.body.appendChild(footer);

// 3. Creating a list of skills:
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