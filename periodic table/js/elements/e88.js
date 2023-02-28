var element88 = new Object();
element88.btn = '#e88';
element88.elementname = 'radium';
element88.atomicmass = '226.02541 u';
element88.protons = '88';
element88.electrons = '88';
element88.neutrons = '138';
element88.fusion = '973 K';
element88.boiling = '1413 K';
element88.symbolnumber = '88';
element88.symbol = 'ra';


var btn = document.querySelector(element88.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element88.elementname; 
    atomicmass.innerHTML = element88.atomicmass;
    protons.innerHTML = element88.protons;
    electrons.innerHTML = element88.electrons; 
    neutrons.innerHTML = element88.neutrons; 
    fusion.innerHTML = element88.fusion;
    boiling.innerHTML = element88.boiling; 
    symbolnumber.innerHTML = element88.symbolnumber; 
    symbol.innerHTML = element88.symbol; 
});