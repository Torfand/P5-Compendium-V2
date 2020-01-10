html = '';

function profile(id) {
    

    if (id == 'Arsene') {
        html = `<div class="personaProfiles">
        <div class="profileBackground">Background</div>
        <div class="profileArcanaAndName">AND</div>
        
        <div class="profileAttributesHeader">AtributesHEADER
        <table>
        <th>
        <td>Strength</td>
        <td>Magic</td>
        <td>Agility</td>
        <td>Endurance</td>
        <td>Luck</td>
        </th>
        </table>
            </div>
        <div class="profileImage">IMG</div>
        <div class="profileAttrinbutesTable">ATTTABLE</div>
        <div class="profileSpace"> </div>
        <div class="profileElementalsHeader">ELEMENTHEADER</div>
        <div class="profileElementalsTable">ELEMENTTABLE</div>
        <div class="profileSkills">SKILLS</div>
        <div class="profileFrom">From</div>
        <div class="profileTo">To</div>
                    



<div>
`

        document.getElementById('wrapper').innerHTML = html
    }
    else {
        document.getElementById('wrapper').innerHTML = 'Something went wrong';
    }
}