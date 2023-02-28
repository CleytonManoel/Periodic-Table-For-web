var element78 = new Object();
element78.btn = '#e78';
element78.elementname = 'platinum';
element78.atomicmass = '195.08 u';
element78.protons = '78';
element78.electrons = '78';
element78.neutrons = '117';
element78.fusion = '2041.55 K';
element78.boiling = '4098 K';
element78.symbolnumber = '78';
element78.symbol = 'pt';


var btn = document.querySelector(element78.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element78.elementname; 
    atomicmass.innerHTML = element78.atomicmass;
    protons.innerHTML = element78.protons;
    electrons.innerHTML = element78.electrons; 
    neutrons.innerHTML = element78.neutrons; 
    fusion.innerHTML = element78.fusion;
    boiling.innerHTML = element78.boiling; 
    symbolnumber.innerHTML = element78.symbolnumber; 
    symbol.innerHTML = element78.symbol; 
});