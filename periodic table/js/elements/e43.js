var element43 = new Object();
element43.btn = '#e43';
element43.elementname = 'technetium';
element43.atomicmass = '96.90636 u';
element43.protons = '43';
element43.electrons = '43';
element43.neutrons = '53';
element43.fusion = '2430 K';
element43.boiling = '4538 K';
element43.symbolnumber = '43';
element43.symbol = 'tc';


var btn = document.querySelector(element43.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element43.elementname; 
    atomicmass.innerHTML = element43.atomicmass;
    protons.innerHTML = element43.protons;
    electrons.innerHTML = element43.electrons; 
    neutrons.innerHTML = element43.neutrons; 
    fusion.innerHTML = element43.fusion;
    boiling.innerHTML = element43.boiling; 
    symbolnumber.innerHTML = element43.symbolnumber; 
    symbol.innerHTML = element43.symbol; 
});