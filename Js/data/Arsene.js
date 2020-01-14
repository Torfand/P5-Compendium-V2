//view
html = '';

function profile(id) {


    let { arcana, strenght, magic, endurance, agility, luck, physical, gun, fire, ice, electric, wind, psychic, nuclear, bless, curse } = unpackedArsene();
    if (id == 'Arsene') {
        html = `
    <div class="personaProfiles">
        <div class="profileBackground"></div>
        <h1 class="profileNameandArcana">Arsene --- ${arcana}</h1>
        <h1 class="profileAttributeHeader">Attributes:</h1>
        <table class="profileAttributes">
            <tr>
                <th>Strength</th>
                <th>Magic</th>
                <th>Agility</th>
                <th>Endurance</th>
                <th>Luck</td>
            </tr>
            <tr>
                <td>${strenght}</td>
                <td>${magic}</td>
                <td>${endurance}</td>
                <td>${agility}</td>
                <td>${luck}</td>
                        </tr> 
                    </table>`;
        elementsTable();
        document.getElementById('wrapper').innerHTML = html;
    }

    function elementsTable() {
        html += `
        <h1 class="profileElementsHeader">Elements :</h1>
        <table class="profileElements">
        <tr>
            <th>Physical
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
        <tr>
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
        skillTable();
    }

    function skillTable() {
        html +=
            ` <h1 class="profileSkillHeader">Skills :</h1>
        <table class="profileSkills">
        <tr>
        <th>Level</th>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
        <th>Cost</th>  
        </tr> `;
        for (var skill in skillData) {
            for (var thing in skillData[skill].persona) {
                if (skillData[skill].persona.hasOwnProperty('Arsene') && thing == 'Arsene') {
                    html +=  `
        <tr>
            <td>${skillData[skill].persona.Arsene}</td>
            <td>${skillData[skill].name}</td>
            <td>${skillData[skill].type}</td>
            <td>${skillData[skill].description}</td>
            <td>${skillData[skill].cost}</td>
        </tr>`;
                }
            }

    
        }
        // html+= `</table>`       
        fuse();
    }

    function fuse() {
        html += `
        <h1 class="profileFuseFromHeader">Fuse From This :</h1>
        <div class="profileFuseFrom">FuseFrom</div>
        <h1 class="profileFuseToHeader">Fuse To This :</h1>
        <div class="profileFuseTo">FuseTo</div>
        </div>`;
    }
    console.log(html)
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

