var element102 = new Object();
element102.btn = '#e102';
element102.elementname = 'nobelium';
element102.atomicmass = '259.10100 u';
element102.protons = '102';
element102.electrons = '102';
element102.neutrons = '157';
element102.fusion = '1100 K';
element102.boiling = '---';
element102.symbolnumber = '102';
element102.symbol = 'no';


var btn = document.querySelector(element102.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element102.elementname; 
    atomicmass.innerHTML = element102.atomicmass;
    protons.innerHTML = element102.protons;
    electrons.innerHTML = element102.electrons; 
    neutrons.innerHTML = element102.neutrons; 
    fusion.innerHTML = element102.fusion;
    boiling.innerHTML = element102.boiling; 
    symbolnumber.innerHTML = element102.symbolnumber; 
    symbol.innerHTML = element102.symbol; 
});