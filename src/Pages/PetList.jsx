import PetCard from "../Components/PetCard";

const posts = [
    {
        id:1,
        title:'Dog SShih Tzu',
        summary: 'Shih Tzus are small, long-haired dogs known for their affectionate and playful personalities, making them great family pets. They are relatively low-energy, enjoy gentle walks, and adapt well to apartment living. Their long, silky coat requires regular grooming, but they are generally healthy and have a lifespan of 10-16 years.',
        image: 'src/assets/image1.jpeg'
    },

    {
        id:2,
        title: 'Golden Retriever',
        summary: 'Golden Retrievers are large, friendly, and intelligent dogs known for their lustrous golden coats. They are popular family pets due to their gentle, playful, and eager-to-please nature. Originally bred as working dogs, they are energetic and require regular exercise and mental stimulation.',
        image: 'src/assets/image2.jpg'
    },

    {
        id:3,
        title: 'Rottweiler',
        summary: 'The Rottweiler is a breed of domestic dog, regarded as medium-to-large or large. The dogs were known in German as Rottweiler Metzgerhund, meaning Rottweil butchers dogs, because their main use was to herd livestock and pull carts laden with butchered meat to market.',
        image: 'src/assets/image3.jpg'
    },

    {
        id:4,
        title: 'Persian cat',
        summary: 'Persian cats are a long-haired breed known for their sweet, gentle, and affectionate personalities, as well as their distinctive flat faces and long, luxurious coats. They are generally calm, quiet, and enjoy lounging around, making them well-suited for indoor living.',
        image: 'src/assets/image4.jpg'
    },

    {
        id:5,
        title: 'Himalayan cat',
        summary: 'The Himalayan, is a breed or sub-breed of long-haired cat similar in type to the Persian, with the exception of its blue eyes and its point colouration, which were derived from crossing the Persian with the Siamese.',
        image: 'src/assets/image5.jpg'
    },

    {
        id:6,
        title: 'British Shorthair',
        summary: 'The British Shorthair is the pedigree version of the traditional British domestic cat, with a distinctively stocky body, thick coat, and broad face. The most familiar colour variant is the "British Blue", with a solid grey-blue coat, pineapple eyes, and a medium-sized tail.',
        image: 'src/assets/image6.jpeg'
    },

    {
        id:7,
        title: 'Parrot',
        summary: 'Parrots, also known as psittacines, are birds with a strong curved beak, upright stance, and clawed feet. They are classified in four families that contain roughly 410 species in 101 genera, found mostly in tropical and subtropical regions.',
        image: 'src/assets/image7.webp'
    },

    {
        id:8,
        title: 'Lovebirds',
        summary: 'Lovebird is the common name for the genus Agapornis, a small group of parrots in the Old World parrot family Psittaculidae. Of the nine species in the genus, all are native to the African continent, with the grey-headed lovebird being native to the African island of Madagascar.',
        image: 'src/assets/image8.webp'
    },

    {
        id:9,
        title: 'Rabbit',
        summary: 'Rabbits or bunnies are small mammals in the family Leporidae, which is in the order Lagomorpha. They are familiar throughout the world as a small herbivore, a prey animal, a domesticated form of livestock, and a pet, having a widespread effect on ecologies and cultures.',
        image: 'src/assets/image9.jpeg'
    },
];

function PetList() {
    return (
        <div className="heading-container">
            <h1>"Open Your Heart and Home"</h1>
            <div className="pet-list-container">
                {posts.map((post) => (
                    <PetCard key={post.id} post={post}/>
                ))}
            </div>
        </div>
    );
}

export default PetList;