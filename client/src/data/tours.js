

const tours = [
    {
    id: 1,
    title: 'Classic Private Tour',
    duration: 4,
    maxPersons: 14,
    description: `Set sail on a private adventure in the breathtaking Bacalar Lagoon with our 30-foot catamaran. 
    Whether you're celebrating a special occasion, enjoying time with family, or creating unforgettable moments with friends, 
    this personalized tour is designed just for you. Swim in pristine waters, soak up the beauty of the lagoon, and indulde 
    in snacks and drinks onboard. Discover Bacalar from a whole new perspective with a fully customizable experience.`,
    idealFor: `Families, couples, or groups of friends looking for a relaxed and private tour.`,
    basePrice: `$5'000`,
    extraPerson: 800,
    stops: ['Pirats Chanel', 'Bird Island', 'Cenote Esmeralda', 'Cenote Negro'],
    included: ['Water', 'Sparkling Water', 'Juices', 'Mixed seasonal Fruits', 'Guacamole', 'Day Pass Asana Glamping (Bathroom and showers available)', 'Parking']
},{
    id: 2,
    title: 'All Inclusive Private Tour',
    duration: 4,
    maxPersons: 14,
    description: `Set sail on a private all-inclusive catamaran tour across the breathtaking Bacalar Lagoon. Designed exclusively
    for your group, this experience includes swimming in crystal-clear waters, relaxing as you take in the lagoon’s beauty, and 
    enjoying a selection of drinks and fresh snacks onboard. Discover Bacalar from a new perspective with a fully 
    personalized and carefree experience.`,
    idealFor: `Families, couples, and groups of friends seeking a relaxed experience with drinks and fresh snacks.`,
    basePrice: `$6'300`,
    extraPerson: 1000,
    stops: ['Pirats Chanel', 'Bird Island', 'Cenote Esmeralda', 'Cenote Negro'],
    included: ['Water', 'Sparkling Water', 'Beers', 'Soda', 'Tequila', 'Ron Bacardi', 'Juices', 'Guacamole', 'Ceviche', 'Mixed seasonal Fruits', 'Day Pass Asana Glamping (Bathroom and showers available)', 'Parking']
}, {
    id:3,
    title: 'All Day Private Tour',
    duration: 6,
    maxPersons: 14,
    description: `Set sail on a private all-day catamaran tour across the breathtaking Bacalar Lagoon. Designed exclusively for your group,
     this extended experience gives you plenty of time to swim in crystal-clear waters, relax, and explore hidden spots far away from crowded,
      touristic areas. Savor refreshing drinks and fresh snacks onboard while discovering Bacalar from a new perspective 
      in a truly personalized and carefree way.`,
    idealFor: `Families, couples, or groups of friends looking for a full-day, relaxed lagoon experience.`,
    basePrice: `$7'800`,
    extraPerson: 1200,
    stops: ['Canal Xtomoc', 'Isla de los Cocos', 'Pirats Chanel', 'Bird Island', 'Cenote Esmeralda', 'Cenote Negro'],
    included: ['Water', 'Sparkling Water', 'Beers', 'Soda', 'Tequila', 'Ron Bacardi', 'Juices', 'Guacamole', 'Ceviche', 'Mixed seasonal Fruits', 'Day Pass Asana Glamping (Bathroom and showers available)', 'Parking']
}, {
    id: 4,
    title: 'Romantic Private Tour',
    duration: 4,
    maxPersons: 2,
    description: `Experience Bacalar Lagoon on a private romantic catamaran tour created for two. Discover hidden, peaceful spots, enjoy time swimming and
     relaxing in pristine waters, and savor drinks and fresh snacks as you take in the lagoon’s breathtaking beauty. An unforgettable escape made for
      love and connection.`,
    idealFor: `Couples looking to celebrate love in a peaceful and intimate setting.`,
    basePrice: `$6'500`,
    stops: ['Canal Xtomoc', 'Isla de los Cocos'],
    included:  ['Water', 'Wine', 'Soda', 'Juices', 'Guacamole', 'Ceviche', 'Little romantic surprise', 'A selection of mixed seasonal fruits and berries', 'Day Pass Asana Glamping (Bathroom and showers available)', 'Parking']
}, {
    id: 5,
    title: 'Sunrise Private Sail Tour',
    duration: 3,
    maxPersons: 14,
    description: `Start your day with a private sunrise sail across the serene Bacalar Lagoon. As the first light reflects on the crystal-clear waters, 
    enjoy the calm atmosphere, gentle sailing, and the lagoon’s natural beauty. Swim in peaceful waters, savor light refreshments onboard, 
    and experience Bacalar at its most tranquil.`,
    idealFor: `Early risers, couples, and nature lovers seeking a peaceful sunrise experience on the lagoon.`,
    basePrice: `$5'000 MXN`,
    extraPerson: 800,
    stops: ['Pirats Chanel', 'Isla de los Cocos'],
    included: ['Water', 'Juices', 'Coffee', 'Toast with butter and jam', 'Homemade Cookies', 'Mixed seasonal Fruits', 'Day Pass Asana Glamping (Bathroom and showers available)', 'Parking']
}
]

export default tours