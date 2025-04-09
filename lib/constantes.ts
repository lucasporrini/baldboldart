import { Project } from "./type";

export const CONSTANTES = {
  HERO_MOBILE: {
    IMAGE_WIDTH: 280,
    IMAGE_HEIGHT: 280,
  },
  POPUP: {
    IMAGE_WIDTH: 380,
    IMAGE_HEIGHT: 380,
  },
};
export const PUBLIC_IMAGE_FOLDER = {
  INSIGNA: {
    BANNIERE: "/insigna/banniere.jpg",
    CARD: "/insigna/card.jpg",
    ETIQUETTE: "/insigna/etiquette.jpg",
    LOGO_COMPLET: "/insigna/logo_complet.jpg",
    LOGO_TEAM_COLOR: "/insigna/logo_team_color.jpg",
    TYPO: "/insigna/typo.jpg",
    WALL_TEXT: "/insigna/wall_text.png",
  },
  BLOOMY: {
    BAG: "/bloomy/bag.jpg",
    GROUPE: "/bloomy/groupe.jpg",
    LOGO_PHOTO: "/bloomy/logo_photo.jpg",
    LOGO_ROND: "/bloomy/logo_rond.jpg",
    MOCKUP: "/bloomy/mockup.jpg",
    PLANNING: "/bloomy/planning.jpg",
    TYPO: "/bloomy/typo.png",
    VISAGE: "/bloomy/visage.jpg",
  },
  EDUCATEUR_SPORTIF: {
    MOCKUP_T_SHIRT: "/educateur_sportif/mockup T.jpg",
  },
  GOOD_LIVING: {
    BE_BRIGHT: "/good_living/be_bright.jpg",
    RAIN_MOCKUP: "/good_living/rain_mockup.jpg",
    RAIN: "/good_living/rain.jpg",
    RAINING_MAN: "/good_living/raining_man.jpg",
    SUN_MOCKUP: "/good_living/sun_mockup.jpg",
    SUN: "/good_living/sun.jpg",
  },
  NAPOLI: {
    BAG: "/napoli/bag.jpg",
    MAIN_SANDWICH: "/napoli/main_sandwich.jpg",
    PANNEAU: "/napoli/panneau.jpg",
    TABLIER: "/napoli/tablier.jpg",
    VIENNOIS: "/napoli/viénoi.png",
    VITRE: "/napoli/vitre.jpg",
  },
  NOESIS: {
    MOCKUP: "/noesis/mockup_logo.jpg",
    CARTE_INFO: "/noesis/carte_info.jpg",
    ILLU_FEMME_CERCLE: "/noesis/illu_femme_cercle.jpg",
    ILLU_CORP: "/noesis/illu_corp.jpg",
    NOESIS_HORIZONTAL: "/noesis/noesis_horizontal.jpg",
    TYPO: "/noesis/Typo.jpg",
  },
  ORTHOPTISTE: {
    MOCKUP: "/orthoptiste/mockup.jpg",
  },
  ONGLERIE: {
    MOCKUP: "/onglerie/mockup.jpg",
  },
};

export const ITEMS: Project[] = [
  {
    title: "Crossfit Insigna",
    subtitle: "Projet créatif à long terme pour une box de Crossfit",
    images: Object.values(PUBLIC_IMAGE_FOLDER.INSIGNA),
  },
  {
    title: "Noesis",
    subtitle: "Création d'une identité visuelle thérapeute psychocorporelle",
    images: Object.values(PUBLIC_IMAGE_FOLDER.NOESIS),
  },
  {
    title: "Napoli",
    subtitle: "Rebranding d'un Café Italien 'Paris 11ème'",
    images: Object.values(PUBLIC_IMAGE_FOLDER.NAPOLI),
  },
];

export const OTHER_PROJECTS: Project[] = [
  {
    title: "Good Living",
    subtitle: "Version Soleil d'une illustration print cartoon",
    images: [
      PUBLIC_IMAGE_FOLDER.GOOD_LIVING.SUN_MOCKUP,
      PUBLIC_IMAGE_FOLDER.GOOD_LIVING.RAIN_MOCKUP,
      PUBLIC_IMAGE_FOLDER.GOOD_LIVING.SUN,
    ],
  },
  {
    title: "C.P & M.P Orhoptiste",
    subtitle: "Logo & carte de visite",
    images: [PUBLIC_IMAGE_FOLDER.ORTHOPTISTE.MOCKUP],
  },
  {
    title: "Educateur Sportif",
    subtitle: "Logo & carte de visite",
    images: [PUBLIC_IMAGE_FOLDER.EDUCATEUR_SPORTIF.MOCKUP_T_SHIRT],
  },
  {
    title: "Bloomy",
    subtitle:
      "Projet d'application de gestion des tâches ménagères dans les foyers",
    images: [PUBLIC_IMAGE_FOLDER.BLOOMY.MOCKUP],
  },
  {
    title: "Atelier d'onglerie",
    subtitle: "Création d'une identité visuelle",
    images: [PUBLIC_IMAGE_FOLDER.ONGLERIE.MOCKUP],
  },
];

export const EYE_DATA = {
  LEFT: {
    BACKGROUND: {
      color: "white",
      position: {
        x: 110.772,
        y: 110.772,
      },
      size: 70,
    },
    EYE: {
      color: "black",
      position: {
        x: 110.772,
        y: 110.772,
      },
      size: 30,
    },
    PUPIL: {
      color: "white",
      position: {
        x: 110.772,
        y: 110.772,
      },
      size: 10,
    },
  },
  RIGHT: {
    BACKGROUND: {
      color: "white",
      position: {
        x: 363.229,
        y: 110.772,
      },
      size: 70,
    },
    EYE: {
      color: "black",
      position: {
        x: 363.229,
        y: 110.772,
      },
      size: 30,
    },
    PUPIL: {
      color: "white",
      position: {
        x: 363.229,
        y: 110.772,
      },
      size: 10,
    },
  },
};

export const MOUTH_DATA = {};
