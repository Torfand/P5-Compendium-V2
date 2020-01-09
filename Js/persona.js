//view
let html = '';
function displayTable(){
     html =  `<div class="table">
          
    <div class="row header">
      <div class="cell">
        Name
      </div>
      <div class="cell">
        Arcana
      </div>
      <div class="cell">
        Strenght
      </div>
      <div class="cell">
        Magic
      </div>
      <div class="cell">
        Endurance
      </div>
      <div class="cell">
        Agility
      </div>
      <div class="cell">
        Luck
      </div>
      
    </div>
    `
    
    document.getElementById('wrapper').innerHTML = html;
}
 function diplayPersonaContent(){
   for (personas of model.personaInfo.personaList){
      html += `
    <div class="row">
      <div class="cell" data-title="Name">${personas.Name} 
      </div>
      <div class="cell" data-title="Arcana">${personas.Arcana}
      </div>
      <div class="cell" data-title="Strenght">${personas.attributes.str}
      </div>
      <div class="cell" data-title="Magic">${personas.attributes.mag}
      </div>
      <div class="cell" data-title="Endurance">${personas.attributes.end}
      </div>
      <div class="cell" data-title="Agility">${personas.attributes.agi}
      </div>
      <div class="cell" data-title="Luck">${personas.attributes.lck}
        
      </div>
    </div>` ;}
    console.log(html)
    document.getElementById('wrapper').innerHTML = html;

 }

//     <div class="row">
//       <div class="cell" data-title="Name">
//         Joseph Smith
//       </div>
//       <div class="cell" data-title="Age">
//         27
//       </div>
//       <div class="cell" data-title="Occupation">
//         Project Manager
//       </div>
//       <div class="cell" data-title="Location">
//         Somerville, MA
//       </div>
//     </div>
    
//     <div class="row">
//       <div class="cell" data-title="Name">
//         Maxwell Johnson
//       </div>
//       <div class="cell" data-title="Age">
//         26
//       </div>
//       <div class="cell" data-title="Occupation">
//         UX Architect & Designer
//       </div>
//       <div class="cell" data-title="Location">
//         Arlington, MA
//       </div>
//     </div>
    
//     <div class="row">
//       <div class="cell" data-title="Name">
//         Harry Harrison
//       </div>
//       <div class="cell" data-title="Age">
//         25
//       </div>
//       <div class="cell" data-title="Occupation">
//         Front-End Developer
//       </div>
//       <div class="cell" data-title="Location">
//         Boston, MA
//       </div>
//     </div>
    
//   </div>
  
 
    
//   </div> 
//   document.getElementById('wrapper').innerHTML = html
  
