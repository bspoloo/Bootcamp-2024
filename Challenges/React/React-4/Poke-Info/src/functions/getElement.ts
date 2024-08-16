
const typeImages: { [key: string]: string } = {
    poison: '//assets.mycast.io/actor_images/actor-poison-pokemon-type-688794_large.jpg?1676761993',
    ghost: '//assets.mycast.io/actor_images/actor-ghost-pokemon-type-688790_large.jpg?1676761913',
    fighting: '//assets.mycast.io/actor_images/actor-fighting-pokemon-type-688782_large.jpg?1676761668',
    water: '//assets.mycast.io/actor_images/actor-water-pokemon-type-688780_large.jpg?1676761632',
    dragon: '//assets.mycast.io/actor_images/actor-dragon-pokemon-type-688785_large.jpg?1676761807',
    steel: '//assets.mycast.io/actor_images/actor-steel-pokemon-type-688787_large.jpg?1676761860',
    fire: '//assets.mycast.io/actor_images/actor-fire-pokemon-type-688788_large.jpg?1676761888',
    flying: '//assets.mycast.io/actor_images/actor-flying-pokemon-type-688788_large.jpg?1676761888',
    grass: '//assets.mycast.io/actor_images/actor-grass-pokemon-type-688795_large.jpg?1676762013',
    bug: '//assets.mycast.io/actor_images/actor-bug-pokemon-type-688791_large.jpg?1676761951',
    normal: '//assets.mycast.io/actor_images/actor-normal-pokemon-type-688781_large.jpg?1676761649',
    ground: '//assets.mycast.io/actor_images/actor-ground-pokemon-type-688793_large.jpg?1676761983',
    psychic: '//assets.mycast.io/actor_images/actor-psychic-pokemon-type-688783_large.jpg?1676761776',
    rock: '//assets.mycast.io/actor_images/actor-rock-pokemon-type-688792_large.jpg?1676761964',
    ice: '//assets.mycast.io/actor_images/actor-ice-pokemon-type-688786_large.jpg?1676761838',
    fairy: '//assets.mycast.io/actor_images/actor-fairy-pokemon-type-688778_large.jpg?1676761611',
    dark: '//assets.mycast.io/actor_images/actor-dark-pokemon-type-688784_large.jpg?1676761794',
};

function getElement(type: string) {
    const elementImage = typeImages[type] || '//assets.mycast.io/actor_images/actor-normal-pokemon-type-688781_large.jpg?1676761649';
    return elementImage;
}

export default getElement;
