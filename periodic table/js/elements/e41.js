var element41 = new Object();
element41.btn = '#e41';
element41.elementname = 'niobium';
element41.atomicmass = '92.90637 u';
element41.protons = '41';
element41.electrons = '41';
element41.neutrons = '51';
element41.fusion = '2750 K';
element41.boiling = '5017 K';
element41.symbolnumber = '41';
element41.symbol = 'nb';


var btn = document.querySelector(element41.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element41.elementname; 
    atomicmass.innerHTML = element41.atomicmass;
    protons.innerHTML = element41.protons;
    electrons.innerHTML = element41.electrons; 
    neutrons.innerHTML = element41.neutrons; 
    fusion.innerHTML = element41.fusion;
    boiling.innerHTML = element41.boiling; 
    symbolnumber.innerHTML = element41.symbolnumber; 
    symbol.innerHTML = element41.symbol; 
});