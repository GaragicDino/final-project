// Final Project
'use strict';

// Global Variables

// Event Listeners
document.getElementById('search').addEventListener('click', characterSearch);

// Event Functions
function characterSearch() {

    console.log('search')
    let name = document.getElementById('input-name').value;
    name = name.toLowerCase();

    if (name == 'Broly'|| name == 'Legendary Super Saiyan Broly') {
       // Update page to Broly's stats
        document.getElementById('cardImg').src = 'Images/lss-broly.png';
        document.getElementById('name').innerHTML = 'Nightmarish Impact<br> Super Saiyan Broly';
        document.getElementById('maxLv').innerHTML = '150';
        document.getElementById('saLv').innerHTML = '1/20';
        document.getElementById('rarityIcon').src = 'Images.LR-logo_apng.png';
        document.getElementById('type').src = 'Images.ETEQ_icon.png';
        document.getElementById('cost').innerHTML = '77';
        document.getElementById('fullImg').src = 'Images/lr-transfroming-broly.png'
        document.getElementById('leaderSkill').innerHTML = '"Resurrected Warriors" Category Ki +4 and HP, ATK & DEF +130%;<br> or<br> ExtremeTeq Type Ki +4 and HP, ATK & DEF +100%';           
        document.getElementById('saName').innerHTML = 'Bloody Smash (12-17 Ki)<br> Eraser Canon (18+ Ki)';
        document.getElementById('saInfo').innerHTML = "Causes colossal damage and lowers enemy's DEF<br> Causes mega-colossal damage and greatly lowers enemy's DEF";
        document.getElementById('psName').innerHTML = 'Devilish Chase';
        document.getElementById('psInfo').innerHTML = 'ATK & DEF +90% when performing a Super Attack, plus an additional<br> ATK +50% if it is an Ultra Super Attack; launches an additional Super<br> Attack when facing 2 or more enemies; Transform when conditions are<br> met';
        document.getElementById('linkSkills').innerHTML = 'Saiyan Warrior Race - The Saiyan Lineage - Berserker - Prepared for Battle - Super Saiyan - Fierce Battle - Legendary Power';
        document.getElementById('category').innerHTML = 'Resurrected Warriors - Movie Bosses - Pure Saiyans - Full Power - Transformation Boost - Super Saiyans - Target: Goku';
        document.getElementById('jpRelease').innerHTML = '18 Jul 2019';
        document.getElementById('glRelease').innerHTML = '23 May 2019';
        document.getElementById('baseHp').innerHTML = '6087';
        document.getElementById('max1Hp').innerHTML = '20088';
        document.getElementById('max2Hp').innerHTML = '22088';
        document.getElementById('max3Hp').innerHTML = '24688';
        document.getElementById('baseAtk').innerHTML = '4680';
        document.getElementById('max1Atk').innerHTML = '15445';
        document.getElementById('max2Atk').innerHTML = '17445';
        document.getElementById('max3Atk').innerHTML = '20845';
        document.getElementById('baseDef').innerHTML = '2507';
        document.getElementById('max1Def').innerHTML = '8275';
        document.getElementById('max2Def').innerHTML = '10275';
        document.getElementById('max3Def').innerHTML = '13275';
        
     } else if (name == 'GokuSsj3'){
        document.getElementById('cardImg').src = 'Images/lss-broly.png';
        document.getElementById('name').innerHTML = 'Nightmarish Impact<br> Super Saiyan Broly';
        document.getElementById('maxLv').innerHTML = '150';
        document.getElementById('saLv').innerHTML = '1/20';
        document.getElementById('rarityIcon').src = 'Images.LR-logo_apng.png';
        document.getElementById('type').src = 'Images.ETEQ_icon.png';
        document.getElementById('cost').innerHTML = '77';
        document.getElementById('fullImg').src = 'Images/lr-transfroming-broly.png'
        document.getElementById('leaderSkill').innerHTML = '"Resurrected Warriors" Category Ki +4 and HP, ATK & DEF +130%;<br> or<br> ExtremeTeq Type Ki +4 and HP, ATK & DEF +100%';           
        document.getElementById('saName').innerHTML = 'Bloody Smash (12-17 Ki)<br> Eraser Canon (18+ Ki)';
        document.getElementById('saInfo').innerHTML = "Causes colossal damage and lowers enemy's DEF<br> Causes mega-colossal damage and greatly lowers enemy's DEF";
        document.getElementById('psName').innerHTML = 'Devilish Chase';
        document.getElementById('psInfo').innerHTML = 'ATK & DEF +90% when performing a Super Attack, plus an additional<br> ATK +50% if it is an Ultra Super Attack; launches an additional Super<br> Attack when facing 2 or more enemies; Transform when conditions are<br> met';
        document.getElementById('linkSkills').innerHTML = 'Saiyan Warrior Race - The Saiyan Lineage - Berserker - Prepared for Battle - Super Saiyan - Fierce Battle - Legendary Power';
        document.getElementById('category').innerHTML = 'Resurrected Warriors - Movie Bosses - Pure Saiyans - Full Power - Transformation Boost - Super Saiyans - Target: Goku';
        document.getElementById('jpRelease').innerHTML = '18 Jul 2019';
        document.getElementById('glRelease').innerHTML = '23 May 2019';
        document.getElementById('baseHp').innerHTML = '6087';
        document.getElementById('max1Hp').innerHTML = '20088';
        document.getElementById('max2Hp').innerHTML = '22088';
        document.getElementById('max3Hp').innerHTML = '24688';
        document.getElementById('baseAtk').innerHTML = '4680';
        document.getElementById('max1Atk').innerHTML = '15445';
        document.getElementById('max2Atk').innerHTML = '17445';
        document.getElementById('max3Atk').innerHTML = '20845';
        document.getElementById('baseDef').innerHTML = '2507';
        document.getElementById('max1Def').innerHTML = '8275';
        document.getElementById('max2Def').innerHTML = '10275';
        document.getElementById('max3Def').innerHTML = '13275';
        
     } else if (name == 'GokuSsj4'){
        document.getElementById('cardImg').src = 'Images/ultimate-super-saiyan-super-saiyan-4-goku.png';
        document.getElementById('name').innerHTML = 'Nightmarish Impact<br> Super Saiyan Broly';
        document.getElementById('maxLv').innerHTML = '150';
        document.getElementById('saLv').innerHTML = '1/20';
        document.getElementById('rarityIcon').src = 'Images.LR-logo_apng.png';
        document.getElementById('type').src = 'Images.ETEQ_icon.png';
        document.getElementById('cost').innerHTML = '77';
        document.getElementById('fullImg').src = 'Images/lr-transfroming-broly.png'
        document.getElementById('leaderSkill').innerHTML = '"Resurrected Warriors" Category Ki +4 and HP, ATK & DEF +130%;<br> or<br> ExtremeTeq Type Ki +4 and HP, ATK & DEF +100%';           
        document.getElementById('saName').innerHTML = 'Bloody Smash (12-17 Ki)<br> Eraser Canon (18+ Ki)';
        document.getElementById('saInfo').innerHTML = "Causes colossal damage and lowers enemy's DEF<br> Causes mega-colossal damage and greatly lowers enemy's DEF";
        document.getElementById('psName').innerHTML = 'Devilish Chase';
        document.getElementById('psInfo').innerHTML = 'ATK & DEF +90% when performing a Super Attack, plus an additional<br> ATK +50% if it is an Ultra Super Attack; launches an additional Super<br> Attack when facing 2 or more enemies; Transform when conditions are<br> met';
        document.getElementById('linkSkills').innerHTML = 'Saiyan Warrior Race - The Saiyan Lineage - Berserker - Prepared for Battle - Super Saiyan - Fierce Battle - Legendary Power';
        document.getElementById('category').innerHTML = 'Resurrected Warriors - Movie Bosses - Pure Saiyans - Full Power - Transformation Boost - Super Saiyans - Target: Goku';
        document.getElementById('jpRelease').innerHTML = '18 Jul 2019';
        document.getElementById('glRelease').innerHTML = '23 May 2019';
        document.getElementById('baseHp').innerHTML = '6087';
        document.getElementById('max1Hp').innerHTML = '20088';
        document.getElementById('max2Hp').innerHTML = '22088';
        document.getElementById('max3Hp').innerHTML = '24688';
        document.getElementById('baseAtk').innerHTML = '4680';
        document.getElementById('max1Atk').innerHTML = '15445';
        document.getElementById('max2Atk').innerHTML = '17445';
        document.getElementById('max3Atk').innerHTML = '20845';
        document.getElementById('baseDef').innerHTML = '2507';
        document.getElementById('max1Def').innerHTML = '8275';
        document.getElementById('max2Def').innerHTML = '10275';
        document.getElementById('max3Def').innerHTML = '13275';
        
     } else {
         
    }


} 

