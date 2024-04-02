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
    rebus: ["./game/lada.webp", "./game/raspberry.webp"],
    answer: {
      title: "Gayazovs Brothers - Малиновая Лада",
      source: "./video/Gayazovs_Brothers_-_Малиновая_Лада.mp4",
    },
    help: "./game/artists/gayazov-brother.webp",
  },
];

export default musicalPazzles;


