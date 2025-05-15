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
    price: "99.00",
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
  {
    name: "Bose QuietComfort Ultra",
    id: 2,
    price: "449.00",
    descript: [
      "What you hear is placed just in front of you, so it’s like you’re listening without wearing headphones.",
      "Comprehensive system featuring 8 microphones for advanced feedback and adaptive feed-forward noise reduction.",
      "In the Still setting, the audio seems to stay in place in the room even as you move your head. In Motion setting, the audio follows you around so it’s best for on the go.",
      "The headphones play up to 24 hours on Quiet or Aware Mode (up to 18 hours with Immersive Audio).",
      "With multipoint connectivity, you can seamlessly connect to two devices simultaneously via Bluetooth.",
      "Hear and be heard clearly on calls with a revolutionary mic system.",
    ],
    type: "Headphones",
    image: "/src/assets/products/headphones/QuiteComfort_Ultra.jpg",
  },
  {
    name: "Space One Pro",
    id: 3,
    price: "199.00",
    descript: [
      "soundcore-Engineered FlexiCurve™ Structure: Reduces Space One Pro's size by 50% with its super foldable design.",
      "Exclusive 4-Stage Noise Cancelling System: Cancels out on-the-go noise in real time.",
      "Drivers with Triple Composite Diaphragms: Enjoy Hi-Res distortionless audio.",
      "Long-Lasting Listening: Listen up to 40 hours with ANC and 60 hours without. Experience ultra-fast charging—just 5 minutes of recharge offers 8 hours of music.",
      "All-Day Comfort: Listen for longer with the pressure-relieving headband and soft earcups.",
    ],
    type: "Headphones",
    image: "/src/assets/products/headphones/anker_space_one_pro_black.jpg",
  },
  {
    name: "MoonDrop Stellaris",
    id: 4,
    price: "109.00",
    descript: [
      "Meticulously tuned 14.5mm planar driver, attaching an independent built-in acoustic cavity, greatly optimizing the linear distortion performance.",
      "The fully symmetrical magnetic circuit is composed of 7+7 N52H magnets, producing a maximum magnetic flux, delivering higher magnetic circuit efficiency.",
      "Utilizes a sub-nanometer diaphragm micron process etching circuit with higher precision and thiner diaphragm, delivering lower split vibration and nonlinear distortion.",
      "The shell of the STELLARIS adopts iridescent finish, reflecting different colors under varying angles and light conditions.",
      "The sound performance is highly consistent with the VDSF Target Response and optimized for listening characteristics, bringing a more accurate sound reproduction with richer, more natural details.",
    ],
    type: "Headphones",
    image: "/src/assets/products/headphones/MoonDrop_Stellaris.jpg",
  },
  {
    name: "FiiO FD3",
    id: 5,
    price: "100.00",
    descript: [
      "Experience high-quality audio with the FiiO FD3 1DD In-Ear Earphones.",
      "These earbuds feature a 12mm DLC wired Hi-Res audio driver that provides exceptional sound clarity and precision.",
      "The earphones are also equipped with a detachable MMCX cable, allowing for easy customization and replacement.",
      "The sleek black design of the FiiO FD3 earphones adds a touch of sophistication to your audio experience.",
      "With a 3.5mm jack for connectivity, these earphones are compatible with a wide range of devices, making them an ideal choice for any music lover on-the-go.",
      "Whether you're commuting or simply relaxing at home, the FiiO FD3 earphones provide an immersive audio experience that is sure to impress.",
    ],
    type: "Headphones",
    image: "/src/assets/products/headphones/fiio_fd3_black.jpg",
  },
  {
    name: "Marshall Monitor III",
    id: 6,
    price: "349.00",
    descript: [
      "Monitor III A.N.C.'s extended wireless playtime, with or without active noise cancellation, keeps the music going strong. Be gone for days without having to recharge.",
      "Monitor III A.N.C. continuously measures ambient noise to block out unwanted sounds. Or let the outside world back in with Transparency mode.",
      "Monitor III A.N.C. is your sensational sound guarantee. Featuring Dynamic Loudness, these headphones adjust the treble, mids and bass for the most optimal sound at every volume.",
      "Monitor III A.N.C. is the latest triumph in Marshall design. It's not only built tough to stand up to wear and tear, but also designed to be folded away in its premium hard case and taken on the road.",
      "Make your sound more spacious with Monitor III A.N.C. Our new Soundstage spatial audio technology releases your music by moving it out of your head and into a virtual room, so that you feel more immersed.",
    ],
    type: "Headphones",
    image: "/src/assets/products/headphones/Marshall_Monitor_III_ANC_Black.jpg",
  },
  {
    name: "Bowers & Wilkins PX7 S2e",
    id: 7,
    price: "399.00",
    descript: [
      "Hear the music exactly as the artist intended with the Bowers & Wilkins Px7 S2e Over-Ear Headphones. Features a 24-bit DSP with custom-designed 40mm drive units, carefully angled inside each earcup & Qualcomm aptX Adaptive.",
      "Experience comfort and elegance with these wireless Bluetooth headphones' premium design. The luxurious foam earpads with a fabric finish and metal detailing cushion your ears, ensuring comfortable, extended listening.",
      "Immerse yourself in dynamic music and enjoy crystal-clear call quality. These headphones feature 6 microphones with outstanding noise cancellation that shuts out unwanted intrusions without affecting the audio quality.",
      "Easily control your audio environment with wireless headphones. The Bowers & Wilkins music app offers direct streaming and voice assistant support, ensuring your sound experience is tailored according to your desires.",
    ],
    type: "Headphones",
    image: "/src/assets/products/headphones/bw_px7s2e_gray.jpg",
  }
]);

const speakersList = ref([
  {
    name: "Marshall Acton III Black ",
    id: 0,
    price: "279.00",
    descript: [
      "This generation in the home lineup features an even wider acoustic footprint than before, with Marshall's characteristic surround sound that has been redesigned to give you a more immersive experience.",
      "These speakers are straight to business, so you can just pair and play without the hassle of a complex set-up.",
      "Marshall has taken its signature rock ’n’ roll home speaker line-up and given it a stripped-back look that makes a loud statement",
      "With next-generation Bluetooth 5.2 and the 3.5 mm input, connecting to your speaker and listening to your music has never been so effortless.",
      "Generation III is ready for the future of Bluetooth technology and has been built to deliver next-generation Bluetooth features the moment they are available.",
      "While staying true to the iconic design that speaks to the brand’s heritage, this generation takes a more sustainable approach with a PVC-free build made from 70% recycled plastic and only vegan materials.",
    ],
    type: "Speakers",
    image: "/src/assets/products/speakers/marshall_acton_iii_black.jpg",
  },
  {
    name: "JBL Flip 7",
    id: 1,
    price: "149.00",
    descript: [
      "Powerful, clearer bass even at max volume and crisp higher frequencies thanks to a clever new tweeter dome design, adding more depth to your speaker's sound.",
      "Keep the mood alive for 14 hours on a single charge - and when we really need to squeeze some extra juice out of our jubilee, or another dance with our darling, we can get an extra 2 hours with Playtime Boost.",
      "With Auracast™, we can effortlessly stereo pair two Flip 7 speakers for a wider sound stage and connect multiple Auracast™ enabled JBL speakers to cover more ground with the same playlist.",
      "The Flip 7 takes a beating without missing a beat, boasting industry-leading IP68 waterproof, dustproof and drop-proof.",
      "Whether we're hosting a beach party, relaxing in our backyard, or setting the mood for a cozy night in, the Flip 7 is designed to enhance any experience, anywhere life takes us.",
    ],
    type: "Speakers",
    image: "/src/assets/products/speakers/jbl_flip7_black.jpg",
  },
  {
    name: "Anker Soundcore Motion X500",
    id: 2,
    price: "65.00",
    descript: [
      "Immersive Spatial Audio3 drivers deliver sound all around you, so you'll feel like your favorite artist is right there in front of you, every time you press play.",
      "3X More Detail Motion X500 features Wireless Hi-Res certified sound, which lets you hear your favorite songs as they were meant to be heard.",
      "3 Fresh Finishes to Match Any Style Get quality sound in a color you love with a choice of three finishes: Black Deluxe, Pink Punch, and Glitzy Blue.",
      "Great Sound, Portable Size Motion X500 portable Bluetooth speaker lets you take immersive spatial audio with 3X more detail wherever you go.",
      "Fully Waterproof With IPX7 protection, you can enjoy worry-free listening by the pool, at the beach, or even if it's raining.",
    ],
    type: "Speakers",
    image: "/src/assets/products/speakers/anker_Motion_X500_black.jpg",
  },
  {
    name: "Bose SoundLink Max",
    id: 3,
    price: "399.00",
    descript: [
      "This small, portable Bluetooth® speaker has epic stereo sound that starts the party. People hear the music and feel it from head to toe.",
      "Made for sound lovers to play their favorite tunes. When the music fills the room, people feel it all around.",
      "The speaker has deep bass that hits your core and inspires you to put your best moves on the floor.",
      "Whether you’re headed to a birthday rager or a chill outdoor hang, this boombox speaker can roll with you. The vibe goes where you are.",
      "Its size means you can bring the fun anywhere, while the removable handle and optional strap let you deliver the vibes stress-free. Just show up, press play, and let the music do the rest. Additional handle colors and carrying strap sold separately.",
      "With up to 20 hours of battery life, you don’t have to stop the music. Keep the good times rolling from day to night.",
      "Water and dust-proof features mean your music can still play through spills and outdoor elements.",
    ],
    type: "Speakers",
    image: "/src/assets/products/speakers/Bose_SoundLink_Max_Blue.jpg",
  },
  {
    name: "Marshall Emberton III",
    id: 4,
    price: "169.00",
    descript: [
      "Emberton III features more bass than its predecessor. Dynamic Loudness adjusts the tonal balance as you change the volume. Discover a rich, full sound that'll never let you down.",
      "Available exclusively on Marshall products, True Stereophonic is a unique form of multi-directional sound. This is absolute 360° sound, where the music finds you. It's true, not all speakers are created equal.",
      "That's more than a full day of listening on a single charge. Enough time to play through an entire discography. When you do run out of battery, just plug in your speaker and return to full charge in 2 hours.",
      "Featuring an IP67 dust and waterproof rating, you can submerge Emberton III in 1 m (3 ft) of water for up to 30 minutes. Marshall's on the road spirit lives on in this rugged speaker design.",
      "Music comes first, but we know life gets busy. Emberton III comes with a built-in microphone, making hands-free talking much simpler and clearer. You can take calls while getting your day started or preparing for a gig.",
    ],
    type: "Speakers",
    image: "/src/assets/products/speakers/Marshall-Emberton-III-Cream_1.jpg",
  },
  {
    name: "Bose SoundLink Revolve II",
    id: 5,
    price: "219.00",
    descript: [
      "This pint-sized enclosure is packed with more technology than meets the eye. A highly efficient transducer. Dual-passive radiators. An omnidirectional acoustic deflector. All of which simply means you’ll get lifelike sound … and real-life goosebumps.",
      "SoundLink Revolve II’s water-resistant design means you can use it more places without worrying about an accidental showering of water, like by the pool or by the kitchen sink.",
      "No worries if you knock it over, toss it in your bag, or set it down a little harder than you meant to. Soft materials let you bump without worrying.",
      "When it’s time to move, you don’t want to fumble about. That’s why we made this speaker grabbable, touchable and easy to operate — right down to the soft, smooth buttons that ensure every interaction feels natural.",
      "The rechargeable lithium-ion battery plays up to 13 hours — for full-day listening. Sure, some other speakers may play longer, but not without compromising the deep, powerful bass you'll get from ours.",
    ],
    type: "Speakers",
    image: "/src/assets/products/speakers/bose_soundlink_revolve_II.jpg",
  },
]);

const accessoriesList = ref([
  {
    name: "ddHiFi TC35M2",
    id: 0,
    price: "49.00",
    descript: [
      "The TC35M2 is designed to bring convenience to wired earphones users. Compared with the previous generation, this 2nd generation upgraded the shell craftsmanship, and improved the strength of the plug, which is more durable and reliable.",
      "The earphone socket comes with detection function, which can identify if the earphone is connected or not. The TC35M2 also supports four-section 3.5mm earphone cable, allowing answering phone calls and music playback controls.",
      "The TC35M2 supports commonly used lossless music apps, such as Apple Music, QQ Music, Netease Cloud Music, Sony Lossless Music, etc. Most of the lossless music formats offered by music apps are 44.1kHz, 96kHz or 192kHz, while the TC35M2 supports PCM decoding up to 384kHz.",
      "Being equipped with stand-alone decoding chip and OP-AMP chip, the TC35M2 provides stable performance and output power, and can basically use with most of the 3.5mm earphones available on the market.",
    ],
    type: "Accessories",
    image: "/src/assets/products/accessories/ddHiFi_TC35M2.jpg",
  },
  {
    name: "ddHiFi RC30A",
    id: 1,
    price: "79.00",
    descript: [
      "The structure of the cable is designed to make the two sets of signal wires into a coaxial structure, and add a layer of shielding to the outermost layer so as to form a double-shielded coaxial structure with three layers of conductors and three layers of insulation.",
      "The main core conductor is made of two kinds of pure silver with different diameters, and mixed with silver-plated OCC and Furukawa silver-copper alloy.",
      "The main core and grounding plate of the RCA plug are made of high-purity copper, and the outer layer is electroplated with thick 24K real gold, which has excellent conductivity.",
      "There is no long sleeve at the joint of the cable end, since the fixation is completed internally.",
    ],
    type: "Accessories",
    image: "/src/assets/products/accessories/ddHiFi_RC30A.jpg",
  },
  {
    name: "FiiO SnowSky Echo Mini",
    id: 2,
    price: "69.00",
    descript: [
      "Features the wireless connection support.",
      "Two outputs for earphones: 3.5-mm and 4.5-mm.",
      "Has a formats support such as MP3, FLAC, WAV, ALAC, APE, DSD, and other popular audio formats.",
      "Capable to reproduce files with the resolution up to 24 bits.",
      "The screen lets you to easily control reproduction, setup parameters, and look up information about the music records.",
      "The integrated battery with the capacity of 1100mah supplies up to 15 hours of work while playing the music.",
      "It supports memory cards with a capacity of up to 256 GB.",
    ],
    type: "Accessories",
    image: "/src/assets/products/accessories/fiio_echo_mini_blue.jpg",
  },
  {
    name: "FiiO KA17",
    id: 3,
    price: "209.00",
    descript: [
      "The KA17 is a professional HiFi USB headphone audio adapter designed for connecting to mobile phones, tablets, and computers.",
      "he latest USB dongle product, equipped with two ES9069Q DAC chips, further reduces the digital noise inside the DAC, achieving a dynamic range of 130dB and total harmonic distortion of -120dB, providing a purer sound background.",
      "The KA17 is equipped with desktop mode and dual Type-C interfaces. When powered by USB, it can operate in desktop mode with a single-end output power of up to 270mW+270mW and balanced output power of 650mW+650mW, capable of driving most headphones.",
      "Adjusting the PEQ through the FIIO Control APP to personalize the sound. This allows you to correct any deficiencies in the headphone frequency response curve and smooth out any peaks and dips.",
    ],
    type: "Accessories",
    image: "/src/assets/products/accessories/fiio_ka17.jpg",
  },
]);

const vinylList = ref([
  {
    name: "Linkin Park – Papercuts",
    id: 0,
    price: "29.00",
    descript: [
      "Singles collection 2000-2023.",
      "Released in a semi glossy gatefold sleeve with printed inner sleeves and a printed 4-page foldout insert.",
      "'Friendly Fire' is previously unreleased. This is the first time 'Qwerty' has appeared on vinyl.",
      "Unlike the North American version, this version has 'Made in Czech Republic' printed on the back of the gatefold sleeve, labels, inner sleeves and foldout insert.",
    ],
    type: "Vinyl",
    image: "/src/assets/products/vinyl/papercuts.jpg",
  },
  {
    name: "BLACK SABBATH PARANOID",
    id: 1,
    price: "29.00",
    descript: [
      "Paranoid is the second studio album by English metal band Black Sabbath.",
      "Originally released in September 1970, it was the band's only LP to top the UK Albums Chart until the release of 13 in 2013.",
      "Paranoid contains several of the band's signature songs, including 'Iron Man', 'War Pigs' and the title track, which was the band's only Top 20 hit, reaching number 4 in the UK charts.",
      "It is often regarded as one of the most quintessential and influential albums in heavy metal history.",
    ],
    type: "Vinyl",
    image: "/src/assets/products/vinyl/paranoid.jpg",
  },
  {
    name: "Deftones - White Pony",
    id: 2,
    price: "20.00",
    descript: [
      "White Pony is the third album by Deftones, released in 2000.",
      "It is the follow up to Around the Fur, which was released in 1997, and marks a significant growth in the band's sound.",
      "Incorporating New Wave and shoegaze influences with the alternative metal edge the group had honed and become known for.",
      "To this end, it is generally regarded by fans and critics alike as their most mature outing.",
    ],
    type: "Vinyl",
    image: "/src/assets/products/vinyl/white_pony.jpg",
  },
  {
    name: "Radiohead - Pablo Honey",
    id: 3,
    price: "50.00",
    descript: [
      "Released in 1993, Pablo Honey was the debut studio album from Radiohead.",
      "Produced by Sean Slade and Paul Kolderie, the album was recorded at Chipping Norton Recording Studios and Courtyard Studio, Oxfordshire.",
      "The album features three charting singles, 'Anyone Can Play Guitar', 'Stop Whispering', and 'Creep'.",
      "The standout single 'Creep' was the international hit that helped propel Radiohead and Pablo Honey to popular acclaim.",
    ],
    type: "Vinyl",
    image: "/src/assets/products/vinyl/pablo_honey.jpg",
  },
  {
    name: "Nirvana - Nirvana LP",
    id: 4,
    price: "30.00",
    descript: [
      "Limited 150gm vinyl LP pressing including digital download.",
      "Originally released in 2002, Nirvana was a collection that featured hits and fan favorites as well as the rare and previously unreleased studio version of 'You Know You're Right,' the last song the band ever recorded, available exclusively on this compilation.",
      "Nirvana was released following the settlement of a long-standing legal dispute between Cobain's widow, Courtney Love, and surviving Nirvana members Krist Novoselic and Dave Grohl.",
      "Much of the dispute centered around the song 'You Know You're Right' which was recorded during the band's final studio session, in January 1994.",
      "Nirvana was the third Nirvana album to be released following the death of singer/ guitarist Kurt Cobain in April 1994, and the first to feature studio material.",
    ],
    type: "Vinyl",
    image: "/src/assets/products/vinyl/nirvana.jpg",
  },
  {
    name: "THE SMITHS - THE QUEEN IS DEAD",
    id: 5,
    price: "32.00",
    descript: [
      "Digitally remastered edition of this 1986 album from the legendary British quartet.",
      "The Queen Is Dead is The Smiths' great leap forward, taking the band to new musical and lyrical heights.",
      "Opening with the storming track, the album is harder rocking record than anything the band had attempted before.",
      "Johnny Marr has created here a wide range of guitar styles that provide a musical bed for Morrissey's best set of lyrics.",
      "From which is crafted some of their finest, most affective songs, particularly 'The Boy with the Thorn in His Side' and the epic 'There Is a Light That Never Goes Out,' two masterpieces that provide the foundation for a remarkable album.",
    ],
    type: "Vinyl",
    image: "/src/assets/products/vinyl/smiths_queen_is_dead.jpg",
  }
]);

function findItemIndex(list, id) {
  for (let i = 0; i < list.value.length; i++) {
    if (list.value[i].id == id) {
      return i;
    }
  }

  return null;
}

function getGood(type, id) {
  let targetList;

  switch (type) {
    case "Headphones":
      targetList = headphonesList;
      break;
    case "Speakers":
      targetList = speakersList;
      break;
    case "Accessories":
      targetList = accessoriesList;
      break;
    case "Vinyl":
      targetList = vinylList;
      break;
  }

  const goodIndex = findItemIndex(targetList, id);

  return targetList.value[goodIndex];
}

export default function useGoods() {
  return { headphonesList, speakersList, accessoriesList, vinylList, getGood };
}
