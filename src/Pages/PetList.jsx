import PetCard from "../Components/PetCard";

const posts = [
    {
        id:1,
        title:'Dog SShih Tzu',
        summary: 'Shih Tzus are small, long-haired dogs known for their affectionate and playful personalities, making them great family pets. They are relatively low-energy, enjoy gentle walks, and adapt well to apartment living. Their long, silky coat requires regular grooming, but they are generally healthy and have a lifespan of 10-16 years.',
        image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRi1J-4c2bnwWrtTw_QmuruiztjMTihlAikFvAoNo41fjnwEmEeisR4D1A0ETP_XP80U52Ea6nGDOWh-_mPUi27fA'
    },

    {
        id:2,
        title: 'Golden Retriever',
        summary: 'Golden Retrievers are large, friendly, and intelligent dogs known for their lustrous golden coats. They are popular family pets due to their gentle, playful, and eager-to-please nature. Originally bred as working dogs, they are energetic and require regular exercise and mental stimulation.',
        image: 'https://www.francebleu.fr/s3/cruiser-production-eu3/2025/01/092712f9-76ed-481f-ad43-3f045b63c7b1/1200x680_sc_sc_golden-retriever.jpg'
    },

    {
        id:3,
        title: 'Rottweiler',
        summary: 'The Rottweiler is a breed of domestic dog, regarded as medium-to-large or large. The dogs were known in German as Rottweiler Metzgerhund, meaning Rottweil butchers dogs, because their main use was to herd livestock and pull carts laden with butchered meat to market.',
        image: 'https://cdn.britannica.com/69/234469-050-B883797B/Rottweiler-dog.jpg'
    },

    {
        id:4,
        title: 'Persian cat',
        summary: 'Persian cats are a long-haired breed known for their sweet, gentle, and affectionate personalities, as well as their distinctive flat faces and long, luxurious coats. They are generally calm, quiet, and enjoy lounging around, making them well-suited for indoor living.',
        image: 'https://cdn.shopify.com/s/files/1/0765/3946/1913/files/Persian_Cat_Flat_Face.jpg?v=1738693071'
    },

    {
        id:5,
        title: 'Himalayan cat',
        summary: 'The Himalayan, is a breed or sub-breed of long-haired cat similar in type to the Persian, with the exception of its blue eyes and its point colouration, which were derived from crossing the Persian with the Siamese.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Sonny_Bunny.jpg'
    },

    {
        id:6,
        title: 'British Shorthair',
        summary: 'The British Shorthair is the pedigree version of the traditional British domestic cat, with a distinctively stocky body, thick coat, and broad face. The most familiar colour variant is the "British Blue", with a solid grey-blue coat, pineapple eyes, and a medium-sized tail.',
        image: 'https://static.wixstatic.com/media/a0115a_4a836d0ffa8744ff9130ae29d2a2c3ef~mv2.jpg/v1/fill/w_870,h_434,al_c,q_85,enc_avif,quality_auto/a0115a_4a836d0ffa8744ff9130ae29d2a2c3ef~mv2.jpg'
    },

    {
        id:7,
        title: 'Parrot',
        summary: 'Parrots, also known as psittacines, are birds with a strong curved beak, upright stance, and clawed feet. They are classified in four families that contain roughly 410 species in 101 genera, found mostly in tropical and subtropical regions.',
        image: 'https://cdn.britannica.com/35/3635-050-96241EC1/Scarlet-macaw-ara-macao.jpg'
    },

    {
        id:8,
        title: 'Lovebirds',
        summary: 'Lovebird is the common name for the genus Agapornis, a small group of parrots in the Old World parrot family Psittaculidae. Of the nine species in the genus, all are native to the African continent, with the grey-headed lovebird being native to the African island of Madagascar.',
        image: 'https://m.media-amazon.com/images/I/61UhMXz54dL.jpg'
    },

    {
        id:9,
        title: 'Rabbit',
        summary: 'Rabbits or bunnies are small mammals in the family Leporidae, which is in the order Lagomorpha. They are familiar throughout the world as a small herbivore, a prey animal, a domesticated form of livestock, and a pet, having a widespread effect on ecologies and cultures.',
        image: 'https://i.pinimg.com/736x/b8/25/e1/b825e1484a21bb183466a3890df21c39.jpg'
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
