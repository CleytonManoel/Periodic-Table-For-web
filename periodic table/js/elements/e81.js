var element81 = new Object();
element81.btn = '#e81';
element81.elementname = 'thallium';
element81.atomicmass = '204.383 u';
element81.protons = '81';
element81.electrons = '81';
element81.neutrons = '123';
element81.fusion = '577 K';
element81.boiling = '1746 K';     
element81.symbolnumber = '81';
element81.symbol = 'tl';


var btn = document.querySelector(element81.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element81.elementname; 
    atomicmass.innerHTML = element81.atomicmass;
    protons.innerHTML = element81.protons;
    electrons.innerHTML = element81.electrons; 
    neutrons.innerHTML = element81.neutrons; 
    fusion.innerHTML = element81.fusion;
    boiling.innerHTML = element81.boiling; 
    symbolnumber.innerHTML = element81.symbolnumber; 
    symbol.innerHTML = element81.symbol; 
});