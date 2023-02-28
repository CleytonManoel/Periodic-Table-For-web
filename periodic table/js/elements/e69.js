var element69 = new Object();
element69.btn = '#e69';
element69.elementname = 'thulium';
element69.atomicmass = '168.93422 u';
element69.protons = '69';
element69.electrons = '69';
element69.neutrons = '99';
element69.fusion = '1818 K';
element69.boiling = '2223 K';
element69.symbolnumber = '69';
element69.symbol = 'tm';


var btn = document.querySelector(element69.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element69.elementname; 
    atomicmass.innerHTML = element69.atomicmass;
    protons.innerHTML = element69.protons;
    electrons.innerHTML = element69.electrons; 
    neutrons.innerHTML = element69.neutrons; 
    fusion.innerHTML = element69.fusion;
    boiling.innerHTML = element69.boiling; 
    symbolnumber.innerHTML = element69.symbolnumber; 
    symbol.innerHTML = element69.symbol; 
});