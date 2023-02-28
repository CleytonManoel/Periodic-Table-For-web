var element92 = new Object();
element92.btn = '#e92';
element92.elementname = 'uranium';
element92.atomicmass = '238.0289 u';
element92.protons = '92';
element92.electrons = '92';
element92.neutrons = '146';
element92.fusion = '1408 K';
element92.boiling = '4404 K';
element92.symbolnumber = '92';
element92.symbol = 'u';


var btn = document.querySelector(element92.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element92.elementname; 
    atomicmass.innerHTML = element92.atomicmass;
    protons.innerHTML = element92.protons;
    electrons.innerHTML = element92.electrons; 
    neutrons.innerHTML = element92.neutrons; 
    fusion.innerHTML = element92.fusion;
    boiling.innerHTML = element92.boiling; 
    symbolnumber.innerHTML = element92.symbolnumber; 
    symbol.innerHTML = element92.symbol; 
});