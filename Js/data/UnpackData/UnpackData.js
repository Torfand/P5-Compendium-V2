//Model
function unpackedArsene() {
    let Arsene = model.personaInfo.personaList[0];
    let arcana = Arsene.Arcana;
    let strenght = Arsene.attributes.str;
    let magic = Arsene.attributes.mag;
    let endurance = Arsene.attributes.end;
    let agility = Arsene.attributes.agi;
    let luck = Arsene.attributes.lck;
    let physical = Arsene.elementalAttributes.physical;
    let gun = Arsene.elementalAttributes.gun;
    let fire = Arsene.elementalAttributes.fire;
    let ice = Arsene.elementalAttributes.ice;
    let electric = Arsene.elementalAttributes.electric;
    let wind = Arsene.elementalAttributes.wind
    let psychic = Arsene.elementalAttributes.psychic;
    let nuclear = Arsene.elementalAttributes.nuclear;
    let bless = Arsene.elementalAttributes.bless;
    let curse = Arsene.elementalAttributes.curse;
    return { arcana, strenght, magic, endurance, agility, luck, physical, gun, fire, ice, electric, psychic, nuclear, wind, bless, curse };
}

function unpackedJack() {
    let Jack = model.personaInfo.personaList[1];
    let arcana = Jack.Arcana;
    let strenght = Jack.attributes.str;
    let magic = Jack.attributes.mag;
    let endurance = Jack.attributes.end;
    let agility = Jack.attributes.agi;
    let luck = Jack.attributes.lck;
    let physical = Jack.elementalAttributes.physical;
    let gun = Jack.elementalAttributes.gun;
    let fire = Jack.elementalAttributes.fire;
    let ice = Jack.elementalAttributes.ice;
    let electric = Jack.elementalAttributes.electric;
    let wind = Jack.elementalAttributes.wind;
    let psychic = Jack.elementalAttributes.psychic;
    let nuclear = Jack.elementalAttributes.nuclear;
    let bless = Jack.elementalAttributes.bless;
    let curse = Jack.elementalAttributes.curse;
    return { arcana, strenght, magic, agility, endurance, luck, physical, gun, fire, ice, electric, wind, psychic, nuclear, bless, curse };
}
