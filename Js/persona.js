//view
let html;
html = ``;
let showhide;
showhide = true;
function diplayPersonaContent() {
  for (persona of model.personaInfo.personaList) {
    html += `
    <div class="${showhide == true ? 'row' : 'showHide'}">
      <div class="cell" data-title="Name" onclick="profile('${persona.Name}')">${persona.Name}
      </div>
      <div class="cell" data-title="Arcana">${persona.Arcana}
      </div>
      <div class="cell sideBorderleft" data-title="Strenght">${persona.attributes.str}
      </div>
      <div class="cell " data-title="Magic">${persona.attributes.mag}
      </div>
      <div class="cell" data-title="Endurance">${persona.attributes.end}
      </div>
      <div class="cell" data-title="Agility">${persona.attributes.agi}
      </div>
      <div class="cell" data-title="Luck">${persona.attributes.lck}
        </div>
        <div class="cell sideBorderleft" data-title="Luck">&nbsp
        </div>
    </div>`;
  }
  document.getElementById('wrapper').innerHTML = html;
}
function displayTable() {
  html = `<div class="table">      
    <div class="row header">
      <div class="cell">Name</div>
      <div class="cell">Arcana</div>
      <div class="cell">Strenght</div>
      <div class="cell">Magic</div>
      <div class="cell">Endurance</div>
      <div class="cell">Agility</div>
      <div class="cell">Luck</div>
      <div class="cell">
        <button onclick="collapse()">☰</button>
      </div>  
    </div>
    `;
  document.getElementById('wrapper').innerHTML = html;
}


function collapse() {
  showhide = showhide == false ? true : false;
  html = ' '
  displayTable();
  diplayPersonaContent();
}

