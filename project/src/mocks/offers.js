export default function getOffers () {
  return {
    id: 1,
    image: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
    title: 'Beautiful & luxurious studio at great location',
    property: {
      type: 'Apartment',
      rooms: '3 Bedrooms',
      adults: 'Max 4 adults',
    },
    price: '120',
    time: 'night',
    advantages: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine', 'Coffee machine', 'Dishwasher', 'Towels', 'Baby seat', 'Cabel TV'],
  };
}
