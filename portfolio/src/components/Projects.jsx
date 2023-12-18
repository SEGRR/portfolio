import Card from './Card';

export default function  Projects(){

    const projects = [
        {
            title:"Examen",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum blanditiis suscipit dolore! Tenetur, blanditiis exercitationem voluptates quod officiis inventore dolore accusamus hic ex aliquid, sequi veritatis minus et neque sed?",
            technologies: ["ExpressJS" , "NodeJS", "MongoDB"],
            github : "github.com/segrr/examen",
            img: "https://placehold.co/200x200"
        },
        {
            title:"Examen",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum blanditiis suscipit dolore! Tenetur, blanditiis exercitationem voluptates quod officiis inventore dolore accusamus hic ex aliquid, sequi veritatis minus et neque sed?",
            technologies: ["ExpressJS" , "NodeJS", "MongoDB"],
            github : "github.com/segrr/examen",
            img: "https://placehold.co/200x200"
        },
        {
            title:"Examen",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum blanditiis suscipit dolore! Tenetur, blanditiis exercitationem voluptates quod officiis inventore dolore accusamus hic ex aliquid, sequi veritatis minus et neque sed?",
            technologies: ["ExpressJS" , "NodeJS", "MongoDB"],
            github : "github.com/segrr/examen",
            img: "https://placehold.co/200x200"
        },
        {
            title:"QR Based Attendance management",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum blanditiis suscipit dolore! Tenetur, blanditiis exercitationem voluptates quod officiis inventore dolore accusamus hic ex aliquid, sequi veritatis minus et neque sed?",
            technologies: ["ExpressJS" , "NodeJS", "MongoDB"],
            github : "github.com/segrr/examen",
            img: "https://placehold.co/200x200"
        }
    ]

    return (
        <div className="container">
         {
            projects.map((p)=> <Card data={p} />)

         }
        </div>
    )
}