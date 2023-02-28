var element95 = new Object();
element95.btn = '#e95';
element95.elementname = 'americium';
element95.atomicmass = '243.061380 u';
element95.protons = '95';
element95.electrons = '95';
element95.neutrons = '148';
element95.fusion = '1449 K';
element95.boiling = '2284 K';
element95.symbolnumber = '95';
element95.symbol = 'am';


var btn = document.querySelector(element95.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element95.elementname; 
    atomicmass.innerHTML = element95.atomicmass;
    protons.innerHTML = element95.protons;
    electrons.innerHTML = element95.electrons; 
    neutrons.innerHTML = element95.neutrons; 
    fusion.innerHTML = element95.fusion;
    boiling.innerHTML = element95.boiling; 
    symbolnumber.innerHTML = element95.symbolnumber; 
    symbol.innerHTML = element95.symbol; 
});