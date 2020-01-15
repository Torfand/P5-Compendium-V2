//view

html = '';
function JackOLantern() {

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
    let wind = Jack.elementalAttributes.wind
    let psychic = Jack.elementalAttributes.psychic;
    let nuclear = Jack.elementalAttributes.nuclear;
    let bless = Jack.elementalAttributes.bless;
    let curse = Jack.elementalAttributes.curse;
  
        html = `
    <div class="personaProfiles">
        <div class="profileBackground"></div>
        <h1 class="profileNameandArcana">Jack-o-Lantern --- ${arcana}</h1>
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
                <td>${agility}</td>
                <td>${endurance}</td>
                <td>${luck}</td>
                        </tr> 
                    </table>`;
        elementsTable();
        document.getElementById('wrapper').innerHTML = html;
    

    function elementsTable() {
        html += `
        <h1 class="profileElementsHeader">Elements :</h1>
        <table class="profileElements">
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
                if (skillData[skill].persona.hasOwnProperty('Jack-o-Lantern') && thing == 'Jack-o-Lantern') {
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
        </div>
        </div>`;
    }

}




