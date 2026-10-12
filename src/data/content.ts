import type { ClassSlot, Faq, Feature, GalleryItem, GalleryStat, Period, Plan, Program, Testimonial, Trainer } from "../types";


export const gym = {
  name: "Iron Pulse",
  city: "Bijeljina",
  cityIn: "Bijeljini", 
  address: "Ulica Primjera 12, Bijeljina",
  phone: "+387 55 123 456",
  email: "info@ironpulse.ba",
  hours: [
    { days: "Ponedjeljak – petak", time: "06:00 – 23:00" },
    { days: "Subota", time: "08:00 – 21:00" },
    { days: "Nedjelja", time: "09:00 – 18:00" },
  ],
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    youtube: "https://youtube.com/",
  },
};

export const heroStats = {
  members: "850+",
  trainers: 12,
  classesPerWeek: 42,
};

export const features: Feature[] = [
  { icon: "dumbbell", title: "Moderna oprema", text: "Slobodni tegovi, mašine i funkcionalna zona na 900 m²." },
  { icon: "users", title: "Grupni treninzi", text: "Preko 40 termina sedmično, od HIIT-a do mobilnosti." },
  { icon: "target", title: "Lični treneri", text: "Plan prilagođen tvom cilju, nivou i rasporedu." },
  { icon: "trophy", title: "Rezultati koji se mjere", text: "Mjerenje tijela na početku i svake 4 sedmice." },
];

export const programs: Program[] = [
  {
    id: "snaga",
    icon: "dumbbell",
    title: "Snaga i masa",
    text: "Progresivni plan sa čučnjem, mrtvim dizanjem i potiskom. Za one koji žele da budu jači i veći.",
    level: "Srednji nivo",
    duration: "4 treninga sedmično",
  },
  {
    id: "mrsavljenje",
    icon: "flame",
    title: "Definicija i mršavljenje",
    text: "Kombinacija snage i kardija uz smjernice za ishranu. Gubiš masnoću, zadržavaš mišiće.",
    level: "Svi nivoi",
    duration: "3–5 treninga sedmično",
  },
  {
    id: "pocetnici",
    icon: "heart",
    title: "Start za početnike",
    text: "Osam sedmica uz trenera: tehnika vježbi, navika treniranja i sigurno povećanje opterećenja.",
    level: "Početnik",
    duration: "3 treninga sedmično",
  },
  {
    id: "hiit",
    icon: "bolt",
    title: "HIIT i kondicija",
    text: "Kratki, intenzivni treninzi od 45 minuta. Puls ide gore, a kondicija raste već nakon dvije sedmice.",
    level: "Svi nivoi",
    duration: "45 min po treningu",
  },
];

export const days = ["Pon", "Uto", "Sri", "Čet", "Pet", "Sub", "Ned"] as const;
export type Day = (typeof days)[number];

export const schedule: Record<Day, ClassSlot[]> = {
  Pon: [
    { time: "07:00", title: "Jutarnji HIIT", trainer: "Marko", level: "Svi nivoi", spots: 4 },
    { time: "18:00", title: "Snaga: noge", trainer: "Stefan", level: "Srednji", spots: 8 },
    { time: "19:30", title: "Mobilnost i istezanje", trainer: "Jelena", level: "Svi nivoi", spots: 12 },
  ],
  Uto: [
    { time: "07:00", title: "Funkcionalni trening", trainer: "Marko", level: "Svi nivoi", spots: 9 },
    { time: "18:00", title: "Kružni trening", trainer: "Ana", level: "Početnik", spots: 6 },
    { time: "19:30", title: "Boks kondicija", trainer: "Nikola", level: "Srednji", spots: 3 },
  ],
  Sri: [
    { time: "07:00", title: "Jutarnji HIIT", trainer: "Marko", level: "Svi nivoi", spots: 7 },
    { time: "18:00", title: "Snaga: gornji dio", trainer: "Stefan", level: "Srednji", spots: 5 },
    { time: "19:30", title: "Joga za oporavak", trainer: "Jelena", level: "Početnik", spots: 10 },
  ],
  Čet: [
    { time: "07:00", title: "Funkcionalni trening", trainer: "Marko", level: "Svi nivoi", spots: 10 },
    { time: "18:00", title: "Kružni trening", trainer: "Ana", level: "Početnik", spots: 2 },
    { time: "19:30", title: "Boks kondicija", trainer: "Nikola", level: "Srednji", spots: 6 },
  ],
  Pet: [
    { time: "07:00", title: "Jutarnji HIIT", trainer: "Marko", level: "Svi nivoi", spots: 8 },
    { time: "17:30", title: "Snaga: cijelo tijelo", trainer: "Stefan", level: "Napredni", spots: 4 },
  ],
  Sub: [
    { time: "09:00", title: "Vikend HIIT", trainer: "Ana", level: "Svi nivoi", spots: 11 },
    { time: "10:30", title: "Start za početnike", trainer: "Nikola", level: "Početnik", spots: 7 },
  ],
  Ned: [{ time: "10:00", title: "Mobilnost i istezanje", trainer: "Jelena", level: "Svi nivoi", spots: 14 }],
};

export const trainers: Trainer[] = [
  {
    name: "Stefan Petrović",
    role: "Glavni trener, snaga",
    bio: "12 godina iskustva u powerliftingu. Vodi programe snage i priprema članove za takmičenja.",
    tags: ["Powerlifting", "Hipertrofija"],
  },
  {
    name: "Ana Jovanović",
    role: "Trener, kondicija",
    bio: "Specijalizovana za mršavljenje i rad sa početnicima. Zna kako da vježbanje postane navika.",
    tags: ["Kružni trening", "Mršavljenje"],
  },
  {
    name: "Marko Simić",
    role: "Trener, HIIT",
    bio: "Bivši atletičar. Jutarnji HIIT termini kod njega su uvijek među prvim popunjenim.",
    tags: ["HIIT", "Funkcionalni"],
  },
  {
    name: "Jelena Marić",
    role: "Trener, mobilnost",
    bio: "Fizioterapeut i instruktor joge. Pomaže da se riješiš bolova u leđima i poboljšaš pokretljivost.",
    tags: ["Mobilnost", "Oporavak"],
  },
];

export const periods: Period[] = [
  { id: "m1", label: "1 mjesec", months: 1, discount: 0 },
  { id: "m3", label: "3 mjeseca", months: 3, discount: 0.1 },
  { id: "m12", label: "12 mjeseci", months: 12, discount: 0.2 },
];

export const plans: Plan[] = [
  {
    id: "basic",
    name: "Osnovni",
    monthly: 45,
    description: "Sve što ti treba da treniraš samostalno.",
    features: ["Neograničen pristup teretani", "Garderoba i tuševi", "Početno mjerenje tijela", "Aplikacija sa vježbama"],
  },
  {
    id: "pro",
    name: "Pro",
    monthly: 65,
    description: "Teretana plus svi grupni treninzi.",
    features: [
      "Sve iz Osnovnog paketa",
      "Neograničeni grupni treninzi",
      "Mjerenje tijela svake 4 sedmice",
      "Plan treninga od trenera",
      "Jedan gost mjesečno",
    ],
    highlight: true,
  },
  {
    id: "elite",
    name: "Elite",
    monthly: 120,
    description: "Lični trener i plan ishrane.",
    features: [
      "Sve iz Pro paketa",
      "4 lična treninga mjesečno",
      "Individualni plan ishrane",
      "Prioritetna rezervacija termina",
      "Samostalni ormarić",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Dalibor M.",
    result: "−14 kg za 5 mjeseci",
    quote:
      "Došao sam bez ikakvog iskustva. Ana mi je složila plan i svake sedmice provjeravala napredak. Prvi put mi vježbanje nije teret.",
      photo: "/member01.png",
  },
  {
    name: "Milica R.",
    result: "Čučanj 80 kg",
    quote: "Na početku nisam smjela da priđem šipki. Danas čučim 80 kg i treniram četiri puta sedmično.",
    photo: "/member02.jpg",
  },
  {
    name: "Nenad S.",
    result: "Bez bolova u leđima",
    quote:
      "Radim za kompjuterom po 10 sati. Jelenine vježbe mobilnosti i Stefanova tehnika riješile su probleme koje sam imao godinama.",
      photo: "/member03.png",
  },
];

export const faqs: Faq[] = [
  {
    q: "Mogu li doći na probni trening prije nego što kupim članarinu?",
    a: "Da. Prvi probni trening je besplatan. Popuni formu na dnu stranice i javićemo ti se u roku od jednog dana da dogovorimo termin.",
  },
  {
    q: "Nikad nisam trenirao. Da li je teretana za mene?",
    a: "Jeste. Program „Start za početnike“ je napravljen upravo za to. Trener te uči tehnici i pazi da opterećenje povećavaš sigurno.",
  },
  {
    q: "Mogu li zamrznuti članarinu?",
    a: "Možeš, do 30 dana godišnje, na primjer zbog bolesti ili putovanja. Dovoljno je da nam javiš na recepciji ili telefonom.",
  },
  {
    q: "Imate li parking?",
    a: "Imamo besplatan parking ispred objekta.",
  },
  {
    q: "Koliko unaprijed treba rezervisati grupni trening?",
    a: "Preporučujemo rezervaciju do sat vremena prije početka. Popularni termini (jutarnji HIIT, večernja snaga) se često popune ranije.",
  },
];

export const gallery: GalleryItem[] = [
  {
    title: "Zona slobodnih tegova",
    text: "Bučice do 60 kg, olimpijske šipke i čvrste klupe.",
    photo: "/tegovi.jpg",
    size: "big",
  },
  {
    title: "Mašine",
    text: "Nova oprema za sve mišićne grupe.",
    photo: "/masine.jpg",
  },
  {
    title: "Kardio zona",
    text: "Trake, bicikli i veslačke sprave.",
    photo: "/kardio.jpg",
  },
  {
    title: "Funkcionalna zona",
    text: "Prostor za HIIT, kružne treninge i rad sa sopstvenom težinom.",
    photo: "/funkcionalna.jpg",
    size: "wide",
  },
  {
    title: "Grupni treninzi",
    text: "Preko 40 termina sedmično uz trenera.",
    photo: "/grupni.jpg",
    size: "wide",
  },
  {
    title: "Svlačionice i tuševi",
    text: "Čisto, prostrano i uvijek sa toplom vodom.",
    photo: "/garderoba.png",
    size: "wide",
  },
];

export const galleryStats: GalleryStat[] = [
  { value: "900", label: "m² prostora" },
  { value: "850+", label: "aktivnih članova" },
  { value: "42", label: "termina sedmično" },
  { value: "17h", label: "otvoreno radnim danima" },
];