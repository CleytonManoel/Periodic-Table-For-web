var element38 = new Object();
element38.btn = '#e38';
element38.elementname = 'strontium';
element38.atomicmass = '87.62 u';
element38.protons = '38';
element38.electrons = '38';
element38.neutrons = '49';
element38.fusion = '1050 K';
element38.boiling = '1655 K';
element38.symbolnumber = '38';
element38.symbol = 'sr';


var btn = document.querySelector(element38.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element38.elementname; 
    atomicmass.innerHTML = element38.atomicmass;
    protons.innerHTML = element38.protons;
    electrons.innerHTML = element38.electrons; 
    neutrons.innerHTML = element38.neutrons; 
    fusion.innerHTML = element38.fusion;
    boiling.innerHTML = element38.boiling; 
    symbolnumber.innerHTML = element38.symbolnumber; 
    symbol.innerHTML = element38.symbol; 
});