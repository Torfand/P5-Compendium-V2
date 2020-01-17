//view
html = '';

function Pixie() {
    let { arcana, strenght, magic, agility, endurance, luck, physical, gun, fire, ice, electric, wind, psychic, nuclear, bless, curse } = unpackedPixie();

    html = `
    <div class="personaProfiles">
        <div class="profileBackground"></div>
        <h1 class="profileNameandArcana">Pixie --- ${arcana}</h1>
        <h1 class="profileAttributeHeader">Attributes:</h1>
        <table class="profileAttributes">
            <tr>
                <th>Strenght</th>
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
    //elementsTable();



    pixieelementsTable(physical, gun, fire, ice, electric, wind, psychic, nuclear, bless, curse);
    //skillTable();


    pixieskillTable();
    //fuse();



    pixiefuse();
    pixiefuseTo();
    document.getElementById('wrapper').innerHTML = html;


}
function pixieelementsTable(physical, gun, fire, ice, electric, wind, psychic, nuclear, bless, curse) {
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
                </table>`;
};

function pixieskillTable() {
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
            if (skillData[skill].persona.hasOwnProperty('Pixie') && thing == 'Pixie') {
                html += `
        <tr>
            <td>${skillData[skill].persona.Pixie}</td>
            <td>${skillData[skill].name}</td>
            <td>${skillData[skill].type}</td>
            <td>${skillData[skill].description}</td>
            <td>${skillData[skill].cost}</td>
        </tr>`;
            }
        }
    }
    html += `</table>`;
};


function pixiefuse() {
    html += `
        <h1 class="profileFuseFromHeader">Fuse From This:</h1>
        <table class="profileFuseFrom">
        <tr>
            <th>Cost</th>
            <th>Ingredients</th>
        </tr>`;
    for (fusecombo of fuseData.fuseTo.Pixie) {
        html +=
            `<tr>
            <td>${fusecombo.fusecost}</td>
            <td>${fusecombo.combo}</td>
        </tr>
        `;
    }
    ;
    
};



function pixiefuseTo() {
    html +=
        `</table>
        <h1 class="profileFuseToHeader">Fuse To This :</h1>
        <table class="profileFuseTo">
        <tr>
            <th>Cost</th>
            <th>Ingredients</th>
        </tr>
        `;
    for (fusecombo of fuseData.fuseFrom.Pixie) {
        html += `
        <tr>
            <td>${fusecombo.cost}</td>
            <td>${fusecombo.combo}</td>
        </tr>`;
    }
    ;
    html += `
      </table>
        </div>`;
};

