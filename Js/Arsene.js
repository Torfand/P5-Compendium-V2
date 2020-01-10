//view
html = '';

function profile(id) {
    

    if (id == 'Arsene') {
        html = `
        <div class="personaProfiles">
            <div class="profileBackground">Background</div>
            <div class="profileArcanaAndName">${model.personaProfile.Arsene.Arcana}</div>
        
            <div class="profileAttributesHeader">AtributesHEADER
                <table>
                    <tr>
                        <th>Strength</th>
                        <th>Magic</th>
                        <th>Agility</th>
                        <th>Endurance</th>
                        <th>Luck</td>
                    </tr>
                </table>
            </div>
            <div class="profileImage">IMG</div>
            <div class="profileAttrinbutesTable">ATTTABLE
            <table>
            <tr>
                <td>2</td>
            </tr>
            </table></div>
            <div class="profileSpace"> </div>
            <div class="profileElementalsHeader">ELEMENTHEADER</div>
            <div class="profileElementalsTable">ELEMENTTABLE</div>
            <div class="profileSkills">SKILLS</div>
            <div class="profileFrom">From</div>
            <div class="profileTo">To</div>                   
<div>`;

        document.getElementById('wrapper').innerHTML = html;
    }
   
}