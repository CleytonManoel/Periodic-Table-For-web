var element2 = new Object();
element2.btn = '#e2';
element2.elementname = 'Helium';
element2.atomicmass = '4.00260 u';
element2.protons = '2';
element2.electrons = '2';
element2.neutrons = '2';
element2.fusion = '0.95 K';
element2.boiling = '4.22 K';
element2.symbolnumber = '2';
element2.symbol = 'he';


var btn = document.querySelector(element2.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element2.elementname; 
    atomicmass.innerHTML = element2.atomicmass;
    protons.innerHTML = element2.protons;
    electrons.innerHTML = element2.electrons; 
    neutrons.innerHTML = element2.neutrons; 
    fusion.innerHTML = element2.fusion;
    boiling.innerHTML = element2.boiling; 
    symbolnumber.innerHTML = element2.symbolnumber; 
    symbol.innerHTML = element2.symbol; 
});