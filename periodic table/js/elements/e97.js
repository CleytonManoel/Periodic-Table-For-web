var element97 = new Object();
element97.btn = '#e97';
element97.elementname = 'berkelium';
element97.atomicmass = '247.07031 u';
element97.protons = '97';
element97.electrons = '97';
element97.neutrons = '150';
element97.fusion = '1323 K';
element97.boiling = '2900.2 K';
element97.symbolnumber = '97';
element97.symbol = 'bk';


var btn = document.querySelector(element97.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element97.elementname; 
    atomicmass.innerHTML = element97.atomicmass;
    protons.innerHTML = element97.protons;
    electrons.innerHTML = element97.electrons; 
    neutrons.innerHTML = element97.neutrons; 
    fusion.innerHTML = element97.fusion;
    boiling.innerHTML = element97.boiling; 
    symbolnumber.innerHTML = element97.symbolnumber; 
    symbol.innerHTML = element97.symbol; 
});