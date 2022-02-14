import CategoryFilter from "../utils/CategoryFilter"
import randomDate from "../utils/randomDate"
import {
  PaintBrushBroad,
  Car,
  BookBookmark,
  ChartLine,
  DribbbleLogo,
  Newspaper,
  GameController,
  Leaf,
  CloudSun,
  Atom,
  Laptop,
  PenNib,
  Aperture,
} from "phosphor-react"
import {
  main1,
  main2,
  main3,
  main4,
  main5,
  main6,
  main7,
  main8,
  news1,
  news2,
  news3,
} from "../assets/img"

// Category Data

const categories = [
  {
    name: "General News",
    Icon: Newspaper,
    path: "general-news",
  },
  {
    name: "Art / Music",
    Icon: PaintBrushBroad,
    path: "art-music",
  },
  {
    name: "Auto / Cars",
    Icon: Car,
    path: "auto-cars",
  },
  {
    name: "Books / Literature",
    Icon: BookBookmark,
    path: "books-literature",
  },
  {
    name: "Economy",
    Icon: ChartLine,
    path: "economy",
  },
  {
    name: "Politics",
    Icon: PenNib,
    path: "politics",
  },
  {
    name: "Film / Series",
    Icon: Aperture,
    path: "film-series",
  },
  {
    name: "Game / E-sports",
    Icon: GameController,
    path: "game-e-sports",
  },
  {
    name: "Sports",
    Icon: DribbbleLogo,
    path: "sports",
  },
  {
    name: "Lifestyle",
    Icon: Leaf,
    path: "lifestyle",
  },
  {
    name: "Weather",
    Icon: CloudSun,
    path: "weather",
  },
  {
    name: "Science",
    Icon: Atom,
    path: "science",
  },
  {
    name: "Technology",
    Icon: Laptop,
    path: "technology",
  },
]

// Utility Functions

const filter = new CategoryFilter(categories)

const populateCategory = (data) =>
  data.map((choice) => ({
    ...choice,
    categoryPath: filter.path(choice.category),
    categoryIcon: filter.icon(choice.category),
  }))

// Editor's Choices Data

let editorsChoices = [
  {
    category: "Lifestyle",
    img: {
      src: news1,
      alt: "Wakame seaweed salad with sesame and green tea",
    },
    title: "Eat this to save World!",
    subtitle:
      "What should we be scoffing if we want to help fight the climate crisis from our kitchens?",
    author: "The Guardian",
    date: randomDate(new Date(2020, 0, 1)),
  },
  {
    category: "Politics",
    img: {
      src: news2,
      alt: 'First Minister Mark Drakeford accused Boris Johnson of "aggressively" ignoring Wales\' government and parliament',
    },
    title: "PM ignoring Wales' parliament, Mark Drakeford says",
    subtitle:
      "The first minister warns the union may break up if the UK government does not change strategy.",
    author: "BBC",
    date: randomDate(new Date(2020, 0, 1)),
  },
  {
    category: "Technology",
    img: {
      src: news3,
      alt: "Watch Microsoft unveil Windows 11",
    },
    title: "Livestream: Watch Microsoft unveil Windows 11",
    subtitle:
      "Will Windows 11 offer significant changes? Is a new Windows Store on the way? Find out later.",
    author: "Rob Thubron & Techspot",
    date: randomDate(new Date(2020, 0, 1)),
  },
]

editorsChoices = populateCategory(editorsChoices)

// Main Feed Data

let mainFeed = [
  {
    category: "Politics",
    img: {
      src: main1,
      alt: "How a pro-democracy newspaper in Hong Kong died?",
    },
    title: "How a pro-democracy newspaper in Hong Kong died?",
    subtitle:
      "Apple Daily is one of Hong Kong’s most popular newspapers, standing for freedom of speech and backing the city’s pro-democracy movement as it attempted to resist Beijing’s draconian national security law and wider attempts to muzzle dissent. Last week, after hundreds of police raided the publication’s headquarters, confiscated journalists’ laptops and arrested senior staff, it published its final edition. Even after many setbacks for activists, the closure of the newspaper has been seen as a significant development – and, some argue, the end of freedom of speech in the city.",
    author: "The Guardian",
    date: randomDate(new Date(2020, 0, 1)),
  },
  {
    category: "Technology",
    img: {
      src: main2,
      alt: "Apple Extends Partnership With (RED) to Combat COVID-19 Until December 30",
    },
    title:
      "Apple Extends Partnership With (RED) to Combat COVID-19 Until December 30",
    subtitle: "",
    author: "MacRumors",
    date: randomDate(new Date(2020, 0, 1)),
  },
  {
    category: "General News",
    img: {
      src: main3,
      alt: "Judge Denies Britney Spears’ Request to Remove Father From Conservatorship - Variety",
    },
    title:
      "Judge Denies Britney Spears’ Request to Remove Father From Conservatorship - Variety",
    subtitle: "",
    author: "Variety",
    date: randomDate(new Date(2020, 0, 1)),
  },
  {
    category: "Economy",
    img: {
      src: main4,
      alt: "World's Fastest Property Price Surge Since Financial Crisis Sparks Bidding Wars",
    },
    title:
      "World's Fastest Property Price Surge Since Financial Crisis Sparks Bidding Wars",
    subtitle: "",
    author: "Bloomberg",
    date: randomDate(new Date(2020, 0, 1)),
  },
  {
    category: "Lifestyle",
    img: {
      src: main6,
      alt: "Covid: Misleading stat claims more vaccinated people die",
    },
    title: "Covid: Misleading stat claims more vaccinated people die",
    subtitle: "",
    author: "BBC News",
    date: randomDate(new Date(2020, 0, 1)),
  },
  {
    category: "Film / Series",
    img: {
      src: main7,
      alt: "Netflix shows off the first five minutes of its Fear Street trilogy",
    },
    title:
      "Netflix shows off the first five minutes of its Fear Street trilogy",
    subtitle: "",
    author: "The Verge",
    date: randomDate(new Date(2020, 0, 1)),
  },
  {
    category: "General News",
    img: {
      src: main8,
      alt: "Hurricane Hanna makes landfall in Texas",
    },
    title: "Hurricane Hanna makes landfall in Texas",
    subtitle: "",
    author: "ABC News",
    date: randomDate(new Date(2020, 0, 1)),
  },
  {
    category: "Auto / Cars",
    img: {
      src: main5,
      alt: "Honda Electric Pickup + more edgy car designs that would leave every Grand Tour fan wanting more!",
    },
    title:
      "Honda Electric Pickup + more edgy car designs that would leave every Grand Tour fan wanting more!",
    subtitle:
      "Through the years, some cars have reached iconic status, they’ve captured a place in everyone’s hearts and people reminisce about them to date, whether it’s the Back to the Future DeLorean, the beloved Porsche 911, or off-late, the Tesla Cybertruck. What do three British men, some iconic cars, and their legendary antics with these iconic cars have in common? Just one of the most popular automotive shows in the world, the Grand Tour! The thing about the Grand Tour is it surpasses the cars – they have become every auto enthusiast’s dream to tinker with the best cars, in the best places, with your friends (though I always root for Richard Hammond, and I do wish he would win more!) and even I would swap places with them instantly! Automotive Designers have given some of our favorite wheels creative and enduring makeovers, and we’ve collected a few for you that we totally approve of – the best part is figuring which of these designs would be picked by Jeremy Clarkson, James May, and Richard Hammond, and what their take on each would be. Any guesses?",
    author: "Yanko Design",
    date: randomDate(new Date(2020, 0, 1)),
  },
  {
    category: "Auto / Cars",
    img: {
      src: main5,
      alt: "Honda Electric Pickup + more edgy car designs that would leave every Grand Tour fan wanting more!",
    },
    title:
      "Honda Electric Pickup + more edgy car designs that would leave every Grand Tour fan wanting more!",
    subtitle:
      "Through the years, some cars have reached iconic status, they’ve captured a place in everyone’s hearts and people reminisce about them to date, whether it’s the Back to the Future DeLorean, the beloved Porsche 911, or off-late, the Tesla Cybertruck. What do three British men, some iconic cars, and their legendary antics with these iconic cars have in common? Just one of the most popular automotive shows in the world, the Grand Tour! The thing about the Grand Tour is it surpasses the cars – they have become every auto enthusiast’s dream to tinker with the best cars, in the best places, with your friends (though I always root for Richard Hammond, and I do wish he would win more!) and even I would swap places with them instantly! Automotive Designers have given some of our favorite wheels creative and enduring makeovers, and we’ve collected a few for you that we totally approve of – the best part is figuring which of these designs would be picked by Jeremy Clarkson, James May, and Richard Hammond, and what their take on each would be. Any guesses?",
    author: "Yanko Design",
    date: randomDate(new Date(2020, 0, 1)),
  },
  {
    category: "General News",
    img: {
      src: main8,
      alt: "Hurricane Hanna makes landfall in Texas",
    },
    title: "Hurricane Hanna makes landfall in Texas",
    subtitle: "",
    author: "ABC News",
    date: randomDate(new Date(2020, 0, 1)),
  },
  {
    category: "General News",
    img: {
      src: main8,
      alt: "Hurricane Hanna makes landfall in Texas",
    },
    title: "Hurricane Hanna makes landfall in Texas",
    subtitle: "",
    author: "ABC News",
    date: randomDate(new Date(2020, 0, 1)),
  },
  {
    category: "General News",
    img: {
      src: main8,
      alt: "Hurricane Hanna makes landfall in Texas",
    },
    title: "Hurricane Hanna makes landfall in Texas",
    subtitle: "",
    author: "ABC News",
    date: randomDate(new Date(2020, 0, 1)),
  },
  // {
  //   category: "",
  //   img: {
  //     src: "",
  //     alt: "",
  //   },
  //   title: "",
  //   subtitle: "",
  //   author: "",
  //   date: randomDate(new Date(2020, 0, 1)),
  // },
]

mainFeed = populateCategory(mainFeed)

export { mainFeed, editorsChoices, categories }
