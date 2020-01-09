html = '';

function profile(id) {
   Object

    if (id == 'Arsene') {
        html = `<div class="personaProfiles">
                        <div class="profileBackground">Background</div>
                        <div class="ProfileHeader"><h1>'${model.personaInfo.personaList[0].Name}'</h1></div>
                        <div class="ProfileInfoBackground">Infobackground</div>
                        <div class="ProfilePictureFrame">${model.personaInfo.personaList[0].img}
                                                          Arcana : Fool </div>
                        <div class="cell ProfileAttributePane">Str :2 , Drot</div>
                        <div class="ProfileElementalPane">Elementals</div>
                        <div class="ProfileSkillPane">Skills</div>
                        <div class="ProfileFuseFrom">Fuse From</div>
                        <div class="ProfileFuseTo">Fuse to</div>
                    </div> 



<div>
`

        document.getElementById('wrapper').innerHTML = html
    }
    else {
        document.getElementById('wrapper').innerHTML = 'Something went wrong';
    }
}