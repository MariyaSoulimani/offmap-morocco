import { MoroccoImage } from "@/lib/types";

export const moroccoImages: MoroccoImage[] = [
  {
    id: "merzouga-dunes",
    url: "https://upload.wikimedia.org/wikipedia/commons/2/24/%22Ein_beeindruckender_Teil_der_Sahara%22._01.jpg",
    alt: "Sand dunes in Erg Chebbi near Merzouga, Morocco",
    credit: "Wikimedia Commons - Holger Uwe Schmitt",
  },
  {
    id: "atlas-mountains",
    url: "https://upload.wikimedia.org/wikipedia/commons/6/6f/%22Armed%22_village_in_Toubkal_National_Park.jpg",
    alt: "Atlas Mountains landscape in Toubkal National Park, Morocco",
    credit: "Wikimedia Commons - Mohamed Haddi",
  },
  {
    id: "akchour-cascade",
    url: "https://upload.wikimedia.org/wikipedia/commons/9/92/Akchour_Camp_-_National_park_of_Talassemtane.jpg",
    alt: "Akchour area in Talassemtane National Park, Morocco",
    credit: "Wikimedia Commons - Jodal rachid",
  },
  {
    id: "chefchaouen-blue-city",
    url: "https://upload.wikimedia.org/wikipedia/commons/2/20/068_-_Marokko_Handybilder_2018_-_Chefchaouen_%2841490657944%29.jpg",
    alt: "Blue street in the medina of Chefchaouen, Morocco",
    credit: "Wikimedia Commons - Uwe Brodrecht",
  },
  {
    id: "ait-benhaddou",
    url: "https://upload.wikimedia.org/wikipedia/commons/4/4f/%22Hervorragendes_Beispiel_marokkanischer_Lehmbauarchitektur%22._01.jpg",
    alt: "Ait Benhaddou ksar architecture in Morocco",
    credit: "Wikimedia Commons - Holger Uwe Schmitt",
  },
  {
    id: "hassan-ii-mosque",
    url: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Hassan_II_Mosque_-_general_framing%2C_Casablanca%2C_Morocco.jpg",
    alt: "Hassan II Mosque in Casablanca, Morocco",
    credit: "Wikimedia Commons - Tinuzzo",
  },
  {
    id: "todra-gorge",
    url: "https://upload.wikimedia.org/wikipedia/commons/4/4c/%22Ein_beeindruckendes_Naturwunder%22%2C_01.jpg",
    alt: "Rock walls inside Todgha Gorge, Morocco",
    credit: "Wikimedia Commons - Holger Uwe Schmitt",
  },
  {
    id: "dades-valley",
    url: "https://upload.wikimedia.org/wikipedia/commons/9/97/%22Die_Schlucht_geh%C3%B6rt_zu_dem_absoluten_H%C3%B6hepunkten_einer_Reise_durch_Marokko%22._01.jpg",
    alt: "Landscape in Dades Gorge, Morocco",
    credit: "Wikimedia Commons - Holger Uwe Schmitt",
  },
  {
    id: "sidi-ifni-beach",
    url: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Plage_sidi_ifni.jpg",
    alt: "Ocean shore in Sidi Ifni, Morocco",
    credit: "Wikimedia Commons - INTHCON",
  },
];

export const moroccoImageMap = Object.fromEntries(
  moroccoImages.map((image) => [image.id, image]),
);
