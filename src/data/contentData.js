const contentData = [
  {
    title: "temperature",
    dataSource: "https://en.wikipedia.org/wiki/Climate_change",
    textContent:
      "Surface temperatures are rising by about 0.2 °C per decade,with 2020 reaching a temperature of 1.2 °C above the pre-industrial era.Since1950, the number of cold days and nights has decreased, and the number of warm days and nights has increased.",
    link: "/temperature",
    cssClass: "temperature",
    facts: [
      {
        fact: "causes",
        factsList: [
          "Emission of greenhouse gases into the atmosphere.",
          "Decreasing reflective surfaces of the Earth (glaciars)",
        ],
      },
      {
        fact: "effects",
        factsList: [
          "Severe storms as more moisture evaporate which exacerbastes rainfall and flooding.",
          "Wildfires ignition and propagation.",
          "Warming and rising of oceans.",
        ],
      },
      {
        fact: "what you can do",
        factsList: [
          "Plant trees wherever you can. Community gardens and green roofs can help cool urban heat islands.",
          "Switch to greener energy sources like wind turbines and solar panels.",
          "Think green before you buy. Consider a product’s durability, sustainability, and ease of recycling when making a purchase.",
        ],
      },
    ],
  },
  {
    title: "carbon dioxide",
    dataSource:
      "https://www.climate.gov/news-features/understanding-climate/climate-change-atmospheric-carbon-dioxide",
    textContent:
      "Since the middle of the 20th century, annual emissions from burning fossil fuels have increased every decade, from an average of 3 billion tons of carbon (11 billion tons of carbon dioxide) a year in the 1960s to 9.5 billion tons of carbon (35 billion tons of carbon dioxide) per year in the 2010s",
    link: "/carbon-dioxide",
    cssClass: "carbonDioxide",
    facts: [
      {
        fact: "causes",
        factsList: [
          "Construction and manufacturing industry to build real estate and produce iron, plastics, clothes, and others.",
          "Food production. Deforestation and land clearing for agriculture and grazing. Livestock digestion.",
          "Cutting down forests: as trees are cut they release the carbon they have been storing. Less trees also less carbon dioxide absortion that ends up in the atmosphere.",
          "Transportation as they mostly run on fossil fuels.",
        ],
      },
      {
        fact: "effects",
        factsList: [
          "Health threat from air pollution.",
          "It contributes to thicken the layer of gases that blankets the Earth and trap the sun's heat.",
        ],
      },
      {
        fact: "what you can do",
        factsList: [
          "Consume energy from clean sources like airwind turbines and solar panels.",
          "Reduce consumption of transport, clothing, electronics, heating and cooling.",
          "Reduce food waste.",
        ],
      },
    ],
  },
  {
    title: "methane",
    dataSource:
      "https://www.edf.org/climate/methane-crucial-opportunity-climate-fight",
    textContent:
      "Methane has more than 80 times the warming power of carbon dioxide over the first 20 years after it reaches the atmosphere. Even though CO2 has a longer-lasting effect, methane sets the pace for warming in the near term. At least 25% of today’s global warming is driven by methane from human actions.",
    link: "/methane",
    cssClass: "methane",
    facts: [
      {
        fact: "causes",
        factsList: [
          "Gasoline for cars and coal for heating a building.",
          "Organic waste from livestock and garbage landfills release great amounts of methane during decomposition.",
        ],
      },
      {
        fact: "effects",
        factsList: [
          "Air pollution which contributes to premature deaths.",
          "Damage to crops such as soy, wheat, rice and maize.",
        ],
      },
      {
        fact: "what you can do",
        factsList: [
          "Reduce food waste so less methane will be produced in landfills.",
          "Invest in technologies for efficient management of cooling/heating in buildings.",
          "Use greener transportation like biking, walking, carpooling.",
        ],
      },
    ],
  },
  {
    title: "nitrous oxide",
    dataSource: "https://www.epa.gov/ghgemissions/overview-greenhouse-gases",
    textContent:
      "The impact of 1 pound of N2O on warming the atmosphere is almost 300 times that of 1 pound of carbon dioxide.Globally, about 40% of total N2O emissions come from human activities. Nitrous oxide is emitted from agriculture, land use, transportation, industry, and other activities, described below.",
    link: "/nitrous-oxide",
    cssClass: "nitrousOxide",
    facts: [
      {
        fact: "causes",
        factsList: [
          "Generating power by burning fossil fuels.",
          "Agriculture, especially fertilized soil and animal manure.",
          "Melting of permafrost that contains ancient soil, sediments, and organic matter of plants and animals that, when exposed to oxygen, release nitrous oxide.",
        ],
      },
      {
        fact: "effects",
        factsList: ["Depletes the ozone layer."],
      },
      {
        fact: "what you can do",
        factsList: [
          "Consume energy from clean sources like airwind turbines and solar panels.",
          "Reduce consumption of transport, clothing, electronics, plastics.",
          "Reduce food waste.",
        ],
      },
    ],
  },
  {
    title: "polar ice",
    dataSource:
      "https://www.worldwildlife.org/pages/six-ways-loss-of-arctic-ice-impacts-everyone",
    textContent:
      "Polar ice caps are melting as global warming causes climate change. We lose Arctic sea ice at a rate of almost 13% per decade, and over the past 30 years, the oldest and thickest ice in the Arctic has declined by a stunning 95%. If emissions continue to rise unchecked, the Arctic could be ice-free in the summer by 2040.",
    link: "/polar-ice",
    cssClass: "polarIce",
    facts: [
      {
        fact: "causes",
        factsList: ["Rise in temperature"],
      },
      {
        fact: "effects",
        factsList: [
          "Less reflective surfaces which leads to increasing heat waves.",
          "Rising of sea level",
          "Loss of artic wildlife and ecosystem.",
        ],
      },
      {
        fact: "what you can do",
        factsList: [
          "Adopt any necessary measures to reduce emissions and, hence, global warming.",
          "Help communities and wildlife adapt to changes already underway.",
        ],
      },
    ],
  },
];

const quotations = [
  {
    quotation:
      "What you do makes a difference, and you have to decide what kind of difference you want to make.",
    author: "Dr. Jane Goodall",
  },
  {
    quotation:
      "Climate change isn't something people get to choose to believe or not: it's happening.",
    author: "Matt Gaetz",
  },
  {
    quotation: "When the well is dry, we know the worth of water.",
    author: "Benjamin Franklin",
  },
  {
    quotation:
      "Preservation of our environment is not a liberal or conservative challenge, it's common sense.",
    author: "Ronald Reagan",
  },
  {
    quotation:
      "Education is the most powerful weapon which you can use to change the world.",
    author: "Nelson Mandela",
  },
  {
    quotation:
      "Earth provides enough to satisfy every man's need, but not every man's greed.",
    author: "Mahatma Gandhi",
  },
];

export { contentData, quotations };
