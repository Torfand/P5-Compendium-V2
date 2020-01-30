//view
html = '';

function Arsene() {
    let { arcana, strenght, magic, endurance, agility, luck, physical, gun, fire, ice, electric, wind, psychic, nuclear, bless, curse } = unpackedArsene();


    html = `<h1 class="profileNameandArcana">Arsene --- ${arcana}</h1>
          <div class="profileAttributes"><h3>Attributes</h3>
            <table class="profile">
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
                          
              </table></div>
          `;
          
    ArseneElementsTable(physical, gun, fire, ice, electric, wind, psychic, nuclear, bless, curse);
    ArseneSkillTable();
    ArsenefuseTo();
    ArsenefuseFrom();
    randomprofilebgArsene();
    document.getElementById("frontPageTable").innerHTML = html;
   




};


function ArseneElementsTable(physical, gun, fire, ice, electric, wind, psychic, nuclear, bless, curse) {
    html += `
    <div class="profileElements"><h3>Elements:</h3>
        <table>
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
        </table></div>
        `;
}

function ArseneSkillTable() {
    html += `
    <div class="profileSkills"><h3>Skills:</h3>
        <table>
        <tr>
        <th>Level</th>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
        <th>Cost</th>  
        </tr> `;
    for (var skill in skillData) {
      for (var thing in skillData[skill].persona) {
        if (skillData[skill].persona.hasOwnProperty("Arsene") && thing == "Arsene") {
          html += `
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
    html += `</table>`;
};


function ArsenefuseTo() {
    html += `
    <div class="profileFuseTo"><h3>Fuse to:</h3>
        <table>
        <tr>
            <th>Cost</th>
            <th>Ingredients</th>
        </tr>`;
    for (fusecombo of fuseData.fuseTo.Arsene) {
      html += `<tr>
            <td>${fusecombo.cost}</td>
            <td>${fusecombo.combo}</td>
        </tr>
        `;
    }
    ;

};



function ArsenefuseFrom() {
    html += ` </table></div> 
    <div class="profileFuseFrom"><h3>Fuse From:</h3>
        <table class="profileFuseFrom">
        <tr>
            <th>Cost</th>
            <th>Ingredients</th>
        </tr>
        `;
    for (fusecombo of fuseData.fuseFrom.Arsene) {
      html += `
        <tr>
            <td>${fusecombo.cost}</td>
            <td>${fusecombo.combo}</td>
        </tr>`;
    }

    html += `</table> </div> `;
};

function randomprofilebgArsene() {
    let random = Math.floor(Math.random()* 7) +1;
     document.getElementById("frontPageTable").classList.add(`profileStyles${random}`);
  };