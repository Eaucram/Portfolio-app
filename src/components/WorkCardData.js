import pro1 from "../assets/project1.png";
import pro2 from "../assets/project2.png";
import pro3 from "../assets/project3.png";

// Pour ajouter des projets juste copie colle un des 3 en bas et ça fera une nouvelle "card"

const ProjectCardData=[
    {
        imgsrc: pro1,
        title: "Site Web portfolio",
        text: "L'un de mes premiers projets personnel. J'ai crée un site web portfolio grâce aux langages HTML, CSS et JavaScript. J'ai notamment permis au site de s'adapter sur ordinateur comme sur téléphone."
    },

    {
        imgsrc: pro2,
        title: "Projet robot",
        text: "Au cours de ma première année, j'ai du créer un robot qui puisse parcourir une course d'obstacle. Pour ce projet, j'ai travaillé en coopération avec 4 autres personnes pour réaliser la structure du robot ainsi que le code du programme pour la course."
    },

    {
        imgsrc: pro3,
        title: "Application de tower defense",
        text: "Au cours de ma première année, j'ai réalisé une application mobile grâce au site appinventor. Pour cetet application mobile, nous avons travailler en groupe de 4 et nous avons choisi de créer un jeu de type tower defense. Pour ce faire nous avons notamment utiliser le concept de base de données."
    },
];

export default ProjectCardData;