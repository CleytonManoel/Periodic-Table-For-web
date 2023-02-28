var element46 = new Object();
element46.btn = '#e46';
element46.elementname = 'palladium';
element46.atomicmass = '106.42 u';
element46.protons = '46';
element46.electrons = '46';
element46.neutrons = '60';
element46.fusion = '1828.05 K';
element46.boiling = '3236 K';
element46.symbolnumber = '46';
element46.symbol = 'pd';


var btn = document.querySelector(element46.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element46.elementname; 
    atomicmass.innerHTML = element46.atomicmass;
    protons.innerHTML = element46.protons;
    electrons.innerHTML = element46.electrons; 
    neutrons.innerHTML = element46.neutrons; 
    fusion.innerHTML = element46.fusion;
    boiling.innerHTML = element46.boiling; 
    symbolnumber.innerHTML = element46.symbolnumber; 
    symbol.innerHTML = element46.symbol; 
});