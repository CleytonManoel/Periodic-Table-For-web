var element82 = new Object();
element82.btn = '#e82';
element82.elementname = 'lead';
element82.atomicmass = '207 u';
element82.protons = '82';
element82.electrons = '82';
element82.neutrons = '125';
element82.fusion = '600.61 K';
element82.boiling = '2022 K';
element82.symbolnumber = '82';
element82.symbol = 'pb';


var btn = document.querySelector(element82.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element82.elementname; 
    atomicmass.innerHTML = element82.atomicmass;
    protons.innerHTML = element82.protons;
    electrons.innerHTML = element82.electrons; 
    neutrons.innerHTML = element82.neutrons; 
    fusion.innerHTML = element82.fusion;
    boiling.innerHTML = element82.boiling; 
    symbolnumber.innerHTML = element82.symbolnumber; 
    symbol.innerHTML = element82.symbol; 
});