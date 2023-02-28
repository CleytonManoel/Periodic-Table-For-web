var element72 = new Object();
element72.btn = '#e72';
element72.elementname = 'hafnium';
element72.atomicmass = '178.49 u';
element72.protons = '72';
element72.electrons = '72';
element72.neutrons = '106';
element72.fusion = '2506 K';
element72.boiling = '4876 K';
element72.symbolnumber = '72';
element72.symbol = 'hf';


var btn = document.querySelector(element72.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element72.elementname; 
    atomicmass.innerHTML = element72.atomicmass;
    protons.innerHTML = element72.protons;
    electrons.innerHTML = element72.electrons; 
    neutrons.innerHTML = element72.neutrons; 
    fusion.innerHTML = element72.fusion;
    boiling.innerHTML = element72.boiling; 
    symbolnumber.innerHTML = element72.symbolnumber; 
    symbol.innerHTML = element72.symbol; 
});