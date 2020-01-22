var skillData;

skillData = {

  Adverse_resolve: {
    name: "Adverse Resolve",
    type: "Passive",
    description: "Increases critical rate when being Ambused.",
    cost: "-",
    persona: {
      Arsene: 7,
      Rakshasa: 30,
      Jikokuten: 31,
      Yamata_no_Orochi: 67,
      Thanatos_Picaro: 73,
      Raphael: 82,
    }
  },

  Agi: {
    name: "Agi",
    type: "Fire",
    description: "Deals weak Fire damage to 1 foe.",
    cost: "4 SP",
    persona: {
      Hua_Po: 0,
      Jack_O_Lantern: 0,
      Onmoraki: 13,
      Succubus: 8
    }
  },

  Apt_Pupil : {
    name : 'Apt Pupil',
    type: 'Passive',
    description : 'Increases Critical rate.',
    cost:'-',
    persona:{
      Andras : 13,
      Aridane: 0,
      Aridane_Picaro: 0,
      Bicorn : 8,
      Futsunushi: 80,
      Sudama : 22,
    }

  },

  Baisudi: {
    name: 'Baisudi',
    type: 'Healing',
    description: 'Cures Burn/Freeze/Shock of 1 ally',
    cost: '4 SP',
    persona: {
      Agathion: 0,
      Angel: 14,
      Jack_Frost: 0,
      Nigi_Mitama: 0,

    }
  },

  Bufu: {
    name: 'Bufu',
    type: 'Ice',
    description: 'Deals Weak Ice damage to 1 foe.',
    cost: '4 SP',
    persona: {
      Andras: 0,
      Apsaras: 0,
      Genbu: 0,
      Jack_Frost: 0,
      Koropokuguru: 0,
      Kushi_Mitama: 0,
      Saki_Mitama: 0,
      Silky: 0
    }
  },

  Cleave: {
    name: "Cleave",
    type: "Physical",
    description: "Deals Weak Physical damage to 1 foe.",
    cost: "6% HP",
    persona: {
      Arsene: 2,
      Berith: 0
    }
  },

  Dazzler: {
    name: "Dazzler",
    type: "Ailment",
    description: "Inflict Dizzy (High Odds!) to 1 foe",
    cost: "5 SP",
    persona: {
      Angel: 0,
      Arch_Angel: 0,
      Jack_O_Lantern: 5,
      Mokoi: 0,
      Naga: 27
    }

  },

  Dia: {
    name: "Dia",
    type: "Healing",
    description: `Slightly restore 1 ally's HP.`,
    cost: "3 SP",
    persona: {
      Agathion: 0,
      Angel: 0,
      Pixie: 0,
      Sily: 7
    }

  },
  Dodge_Electricity: {
    name: 'Dodge Electricity',
    type: 'Passive',
    description: 'Double eveasion rate against Electric attacks',
    cost: '-',
    persona: {
      Agathion: 8,
      Chorozon: 30,
      Koh_i_Noor: 0,
      Makami: 20,
      Mokoi: 13,
      Nekomata: 22,
      Shiisaa: 21,



    }
  },

  Dream_Needle: {
    name: "Dream Needle",
    type: "Physical",
    description: `Deals medium Physical damage and inflicts sleep to 1 foe.`,
    cost: "8% HP",
    persona: {
      Arsene: 5,
      Pheonix: 0,
      Inugami: 15,
      Pisaca: 0
    }

  },

  Eiha: {
    name: "Eiha",
    type: "Curse",
    description: "Deals Weak damage to 1 foe.",
    cost: "4 SP",
    persona: {
      Arsene: 1,
      Incubus: 7,
      Slime: 11
    }
  },
  Energy_drop: {
    name: "Energy Drop",
    type: 'Healing',
    description: 'Cures Confunse/Fear/Despair/Rage/Brainwash of 1 ally.',
    cost: '4 SP',
    persona: {
      Kikuri_Hime: 0,
      Makami: 0,
      Mandrake: 0,
      Narcissius: 0,
      Saki_Mitama: 0,
    }
  },
  Freeze_Boost: {
    name: 'Freeze Boost',
    type: 'Passive',
    description: 'Increases chance of inflicting Freeze',
    cost: '-',
    persona: {
      Baphomet: 63,
      Jack_Frost: 15,
      King_Frost: 62,
      Lilim: 34,
    }
  },
  Garu: {
    name: 'Garu',
    type: 'Wind',
    description: 'Deals weak Wind damage to 1 foe.',
    cost: '3 SP',
    persona: {
      Bicorn: 6,
      High_Pixie: 0,
      Kelpie: 0,
      Kodama: 0,
      Koppa_Tengu: 0,
      Kushi_Mitama: 0,



    }
  },
  Lunge: {
    name: 'Lunge',
    type: 'Physical',
    description: 'Deals Weak Physical damage to 1 foe',
    cost: '5% HP',
    persona: {
      Agathion: 4,
      Bicorn: 0,
      Kelpie: 0,
      Mandrake: 4,
      Slime: 0,

    }
  },

  Ice_Break: {
    name: 'Ice Break',
    type: 'Ice',
    description: 'Negates Ice resistances of all foes',
    cost: '15 SP',
    persona: {
      Andras: 15,
      Belphegor: 39,
      Jack_Frost: 0,
      King_Frost: 0
    }
  },
  Ice_Wall: {
    name: 'Ice Wall',
    type: 'Support',
    description: `Creates a shield on 1 Ally to reduce damage of Ice attacks for 3 turns.`,
    cost: '18 SP',
    persona: {
      Apsaras: 0,
      Bicorn: 7,
      Chulainn: 0,
      Onmoraki: 0,
    }

  },
  Mabufu: {
    name: 'Mabufu',
    type: 'Ice',
    description: 'Deals Weak ice damage to all foes',
    cost: '10 SP',
    persona: {
      Andras: 15,
      Genbu: 10,
      Jack_Frost: 12,
      Koropokuguru: 14,
      Regent: 0,
      Sui_ki: 0,
    }
  },

  Patra: {
    name: "Patra",
    type: "Healing",
    description: "Cures Dizzy/Forget/Sleep/Hunger of 1 ally.",
    cost: "4 SP",
    persona: {
      Genbu: 8,
      Pixie: 3,
      Silky: 9
    }
  },
  Pulinpa: {
    name: 'Pulinpa',
    type: 'Ailment',
    description: 'Inflicts Confuse (High odds) to 1 foe.',
    cost: '5 SP',
    persona: {
      Chorozon: 0,
      Inugami: 0,
      Nue: 22,
      Onmoraki: 14,
      Mandrake: 0,
    }
  },
  Rakukaja: {
    name: 'Rakukaja',
    type: 'Support',
    description: `Increases 1 ally's Defence for 3 turns`,
    cost: '8 SP',
    persona: {
      Agathion: 6,
      Belphegor: 0,
      Izanagi_Picaro: 0,
      Kin_Ki: 0,
      Lamia: 0,
      Queens_Necklace: 0,
      Saki_Mitama: 8,

    }
  },
  Rankunda: {
    name: "Rakunda",
    type: "Support",
    description: `Decreases 1 foe's Defence for 3 turns.`,
    cost: "8 SP",
    persona: {
      Jack_Frost: 13,
      Jack_O_Lantern: 0,
      Jikokuten: 0,
      Kodama: 0,
      Koropokuguru: 12,
      Leanan_Sidhe: 0,
      Queens_Necklace: 0
    }

  },

  Resist_Confuse: {
    name: 'Resist Confuse',
    type: 'Passive',
    description: 'Reduce suceptibility to Confuse.',
    cost: '-',
    persona: {
      Pixie: 6,
      Red_Rider: 44,
    }
  },
  Resist_Sleep: {
    name: "Resist Sleep",
    type: "Passive",
    description: "Reduces susceptibility to Sleep.",
    cost: "-",
    persona: {
      Jack_O_Lantern: 7
    }

  },
  Skull_Cracker: {
    name: 'Skull Cracker',
    type: 'Physical',
    description: 'Deals Medium Physical damage and inflicts Confuse (Medium odds), to 1 foe.',
    cost: '10% HP',
    persona: {
      Mandrake: 7,
      Mokoi: 0,
      Mothman: 0,
      Nue: 0,
      Shiisaa: 0,

    },
  },
  Sukunda: {
    name: "Sukunda",
    type: "Support",
    description: `Decreases 1 foe's Agility for 3 turns.`,
    cost: "8 SP",
    persona: {
      Arsene: 4,
      Eligor: 19,
      Mandrake: 5,
      Sandman: 25
    }
  },

  Sharp_Student: {
    name: "Sharp Student",
    type: "Passive",
    description: "Lowers odds of reciving a critical hit.",
    cost: "-",
    persona: {
      Eligor: 0,
      Ippon_Datara: 16,
      Jack_O_Lantern: 4,
      Scathach: 0,
      Silky: 10,
      Sudama: 0,
      Zouchouten: 33
    }
  },

  Tarunda: {
    name: 'Tarunda',
    type: 'Support',
    description: `Decreases one foe's Attack power for 3 turns`,
    cost: '8 SP',
    persona: {
      Bicorn: 0,
      Hua_Po: 11,
      Incubus: 8,
      Orpheus: 0,
      Queens_Necklace: 0,
      Suzaku: 0,

    }
  },

  Tarukaja: {
    name: "Tarukaja",
    type: "Support",
    description: `Increase 1 ally's Attack-Power for 3 turns.`,
    cost: "8 SP",
    persona: {
      ELigor: 0,
      Fuu_Ki: 0,
      Hecatoncheires: 0,
      Inugami: 0,
      Ippon_Datara: 0,
      Izanagi: 0,
      Andras: 11,
      Kodama: 14,
      Mokoi: 0,
      Pixie: 5,
      Queens_Necklace: 0,
      Rakshasa: 0,
      Shiki_Ouji: 0
    }
  },

  Zio: {
    name: "Zio",
    type: "Electric",
    description: "Deals weal Electric damage to 1 foe.",
    cost: "4 SP",
    persona: {
      Agathion: 0,
      Pixie: 0,
      Shiisaa: 0
    }
  },

};
