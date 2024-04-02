interface musicalPazzle {
  rebus: string[];
  answer: {
    title: string;
    source: string;
  };
  help: string
}

const musicalPazzles: musicalPazzle[] = [
  {
    rebus: ["./game/raspberry.webp", "./game/lada.webp"],
    answer: {
      title: "Gayazovs Brothers - Малиновая Лада",
      source: "./video/Gayazovs_Brothers_-_Малиновая_Лада.mp4",
    },
    help: "./game/artists/gayazov-brother.webp",
  },
  {
    rebus: [
      "./game/window.svg",
      "./game/eyes.svg",
      "./game/pink.svg",
      "./game/evening.svg",
    ],
    answer: {
      title: "Юрий Шатунов - Розовый вечер",
      source: "./video/Шатунов-розовый_вечер.mp4",
    },
    help: "./game/artists/Юрий_шатунов.webp",
  },
];

export default musicalPazzles;


