//view
html = '';

function Mandrake() {
    
    html = `
    <div class="personaProfiles">
        <div class="profileBackground"></div>
        <h1 class="profileNameandArcana">Mandrake --- </h1>
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
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                </tr> 
                </table>`;
    MandrakeElementsTable();
    MandrakeSkillTable();
    // MandrakefuseTo();
    // MandrakefuseFrom();
    document.getElementById('wrapper').innerHTML = html;
}


function MandrakeElementsTable() {
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
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr> 
                </table>`;
};

function MandrakeSkillTable() {
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
            if (skillData[skill].persona.hasOwnProperty('Mandrake') && thing == 'Mandrake') {
                html += `
        <tr>
            <td>${skillData[skill].persona.Mandrake}</td>
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


// function MandrakefuseTo() {
//     html += `
//         <h1 class="profileFuseToHeader">Fuse To This:</h1>
//         <table class="profileFuseTo">
//         <tr>
//             <th>Cost</th>
//             <th>Ingredients</th>
//         </tr>`;
//     for (fusecombo of fuseData.fuseTo.Mandrake) {
//         html +=
//             `<tr>
//             <td>${fusecombo.cost}</td>
//             <td>${fusecombo.combo}</td>
//         </tr>
//         `;
//     }
//     ;

// };



// function MandrakefuseFrom() {
//     html +=
//         `</table>
//         <h1 class="profileFuseFromHeader">Fuse From This :</h1>
//         <table class="profileFuseFrom">
//         <tr>
//             <th>Cost</th>
//             <th>Ingredients</th>
//         </tr>
//         `;
//     for (fusecombo of fuseData.fuseFrom.Mandrake) {
//         html += `
//         <tr>
//             <td>${fusecombo.cost}</td>
//             <td>${fusecombo.combo}</td>
//         </tr>`;
//     }
//     ;
//     html += `
//       </table>
//         </div>`;
// };

