//view
html = '';

function profile(id) {
  
    let { arcana, strenght, magic, endurance, agility, luck, physical, gun, fire, ice, electric, wind, psychic, nuclear, bless, curse } = unpackedArsene();
    if (id == 'Arsene') {
        html = `
    <div class="personaProfiles">
        <div class="profileBackground"></div>
        <div class="profileArcana">${arcana}</div>
            <table class="profileAttributesHeader">
                    <tr>
                        <th>Strength</th>
                        <th>Magic</th>
                        <th>Agility</th>
                        <th>Endurance</th>
                        <th>Luck</td>
                    </tr>
                        <tr class="profileAttributesTable">
                            <td>${strenght}</td>
                            <td>${magic}</td>
                            <td>${endurance}</td>
                            <td>${agility}</td>
                            <td>${luck}</td>
                    </tr> 
                    </table>
                    <div class="profileSpace"> </div>`;

        elementsTable();
        document.getElementById('wrapper').innerHTML = html;
    }

    function elementsTable() {
        html += `
        <table class="profileElementsHeader">
        <tr>
            <th>Physical</th>
            <th>Gun</th>
            <th>Fire</th>
            <th>Ice</th>
            <th>Electric</th>
            <th>Wind</th>
            <th>Psychic</th>
            <th>Nuclear</th>
            <th>Bless</th>
            <th>Curse</th>
        </tr>
        <tr class="profileElementsTable">
            <td>${physical}</td>
            <td>${gun}</td>
            <td>${fire}</td>
            <td>${ice}</td>
            <td>${electric}</td>
            <td>${wind}</td>
            <td>${psychic}</td>
            <td>${nuclear}</td>
            <td>${bless}</td>
            <td>${curse}</td>
        </tr> 
        </table>`
        restOfProfile();
    }

    function restOfProfile() {
        html += `<div class="profileFuseFrom headerText">FuseFrom</div>
        <div class="profileFuseTo">FuseTo</div>
        <div class="ProfileImage">
            <img class="img" src="img/Arsene.webp"/>
        </div>
        <div class="ProfileSkills">SKILLS</div>
    </div>`;
    }
}


   

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

