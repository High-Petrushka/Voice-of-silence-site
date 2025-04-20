import { ref } from "vue";

const headphonesList = ref([
  {
    name: "Sony WH-1000xm5",
    id: 0,
    price: "199.00",
    descript: [
      "Industry Leading noise cancellation-two processors control 8 microphones for unprecedented noise cancellation. With Auto NC Optimizer, noise canceling is automatically optimized based on your wearing conditions and environment.",
      "Magnificent Sound, engineered to perfection with the new Integrated Processor V1",
      "Crystal clear hands-free calling with 4 beamforming microphones, precise voice pickup, and advanced audio signal processing.",
      "Up to 30-hour battery life with quick charging (3 min charge for 3 hours of playback)",
      "Ultra-comfortable, lightweight design with soft fit leather",
      "Multipoint connection allows you to quickly switch between devices",
      "Carry your headphones effortlessly in the redesigned case",
    ],
    type: "Headphones",
    image: "/src/assets/products/headphones/sony-wh1000xm5-black.jpg",
  },
  {
    name: "Marshall Major IV",
    id: 1,
    price: "99.99",
    descript: [
      "Major IV delivers the signature Marshall sound that you’ve come to expect. Custom-tuned dynamic drivers deliver roaring bass, smooth mids and brilliant treble for a rich, unrivalled sound that you’ll never want to turn off.. Driver Impedance : 32 Ω. Frequency Range : 20-20,000 Hz.",
      "80+ solid hours of wireless playtime with quick-charge capability – only 15 minutes of charging will give you 15 hours of listening. These are headphones truly built for the long haul.",
      "Improved ergonomic design means that when you’re deep diving into your music, the tenth hour is as comfortable as the first. Major IV’s ear cushions are softer to the touch and more faithfully fit the shape of your ear.",
      "Major IV features a 3.5 mm socket so a friend can plug in and enjoy your music.",
      "Included components: Major IV Headphones, 3.5mm audio cord, User Manual and legal and safety information, USB-C charging cable",
    ],
    type: "Headphones",
    image: "/src/assets/products/headphones/marshall_major_iv_black.jpg",
  },
]);

const speakersList = ref([
  {
    name: "",
    price: "",
    descript: "",
    type: "",
    image: "",
  },
]);

const accessoriesList = ref([
  {
    name: "",
    price: "",
    descript: "",
    type: "",
    image: "",
  },
]);

const vinylList = ref([
  {
    name: "",
    price: "",
    descript: "",
    type: "",
    image: "",
  },
]);

export default function useGoods() {
  return { headphonesList, speakersList, accessoriesList, vinylList };
}
