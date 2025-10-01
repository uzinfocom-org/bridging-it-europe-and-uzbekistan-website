export type Speaker = {
  type: "person",
  name: string,
  title?: string
} | {
  type: "other",
  name: string
}

export type Text = {
  type: "text",
  text: string
} | {
  type: "presentation",
  prefix: string,
  name: string
}

export type AgendaLine = {
  start: string,
  end: string,
  text: Text,
  speakers: Speaker[]
}

const timurRakhmanov: Speaker = {
  type: "person",
  name: "Timur Rakhmanov",
  title: "Ambassador of Uzbekistan to Latvia"
}

const aliaksandrPiatrou: Speaker = {
  type: "person",
  name: "Aliaksandr Piatrou",
  title: "Chairman of the board, UZINFOCOM EUROPE"
}

const viktoriayaDubova: Speaker = {
  type: "person",
  name: "Viktoriya Dubova",
  title: "Head of Strategic Partnerships, UZINFOCOM EUROPE"
}

const umidSunnatjonov: Speaker = {
  type: "person",
  name: "Umid Sunnatjonov",
  title: "Head of Business Development in Europe, UZINFOCOM"
}

const timurMiyassarov: Speaker = {
  type: "person",
  name: "Timur Miyassarov",
  title: "Member of the Board, UZINFOCOM"
}

const temurBatyrov: Speaker = {
  type: "person",
  name: "Temur Batyrov",
  title: "Director, Global Solutions Office, UZINFOCOM"
}

const ruslansArzaniks: Speaker = {
  type: "person",
  name: "Ruslans Arzaniks",
  title: "CTO, XInfotech"
}

export const agenda: AgendaLine[] = [
  {
    start: "11:30",
    end: "12:00",
    text: {
      type: "text",
      text: "Guest Arrival"
    },
    speakers: [],
  },
  {
    start: "12:00",
    end: "12:30",
    text: {
      type: "text",
      text: "Welcome Coffee"
    },
    speakers: [],
  },
  {
    start: "12:30",
    end: "12:40",
    text: {
      type: "text",
      text: "Opening Remarks"
    },
    speakers: [
      timurRakhmanov,
      aliaksandrPiatrou
    ],
  },
  {
    start: "12:40",
    end: "12:50",
    text: {
      type: "text",
      text: "UZINFOCOM Company Presentation (Video)"
    },
    speakers: [],
  },
  {
    start: "12:50",
    end: "13:10",
    text: {
      type: "presentation",
      prefix: "Presentation: ",
      name: "Your Gateway to Digital Excellence"
    },
    speakers: [
      viktoriayaDubova
    ],
  },
  {
    start: "13:10",
    end: "13:20",
    text: {
      type: "text",
      text: "Q&A and Networking"
    },
    speakers: [],
  },
  {
    start: "13:20",
    end: "13:40",
    text: {
      type: "presentation",
      prefix: "Presentation: ",
      name: "Redefining Outsourcing"
    },
    speakers: [
      umidSunnatjonov
    ],
  },
  {
    start: "13:40",
    end: "13:50",
    text: {
      type: "text",
      text: "Q&A and Networking"
    },
    speakers: [],
  },
  {
    start: "13:50",
    end: "14:10",
    text: {
      type: "presentation",
      prefix: "Presentation: ",
      name: "Remote Biometric Identification and Biometric Payments"
    },
    speakers: [
      timurMiyassarov
    ],
  },
  {
    start: "14:10",
    end: "14:20",
    text: {
      type: "text",
      text: "Q&A and Networking"
    },
    speakers: [],
  },
  {
    start: "14:20",
    end: "15:00",
    text: {
      type: "text",
      text: "Coffee Break & Light Refreshments"
    },
    speakers: [],
  },
  {
    start: "15:00",
    end: "15:20",
    text: {
      type: "presentation",
      prefix: "Presentation: ",
      name: "Technical Overview and Advantages of UZINFOCOM"
    },
    speakers: [
      temurBatyrov
    ],
  },
  {
    start: "15:20",
    end: "15:30",
    text: {
      type: "text",
      text: "Q&A and Networking"
    },
    speakers: [],
  },
  {
    start: "15:30",
    end: "16:00",
    text: {
      type: "presentation",
      prefix: "Presentation: ",
      name: "Remote registration of non-EU residents, as a first step for opening of businesses in EU countries"
    },
    speakers: [
      ruslansArzaniks
    ],
  },
  {
    start: "16:00",
    end: "16:30",
    text: {
      type: "presentation",
      prefix: "Panel discussion: ",
      name: "IT Outsourcing: Challenges and Opportunities"
    },
    speakers: [
      { ...timurMiyassarov, title: undefined },
      { ...temurBatyrov, title: undefined },
      { ...ruslansArzaniks, title: undefined },
    ],
  },
  {
    start: "16:30",
    end: "17:00",
    text: {
      type: "text",
      text: "Memorandum of Understanding (MoU) Signing Ceremony"
    },
    speakers: [
      { type: "other", name: "UZINFOCOM EUROPE & H3C" }
    ],
  },
  {
    start: "17:00",
    end: "20:00",
    text: {
      type: "text",
      text: "Closing Dinner with Traditional Uzbek Cuisine"
    },
    speakers: [
      { type: "other", name: "Informal Discussion & Networking" }
    ],
  },
]
