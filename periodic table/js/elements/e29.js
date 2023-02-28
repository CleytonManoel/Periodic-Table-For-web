var element29 = new Object();
element29.btn = '#e29';
element29.elementname = 'copper';
element29.atomicmass = '63.55 u';
element29.protons = '29';
element29.electrons = '29';
element29.neutrons = '34';
element29.fusion = '1357.77 K';
element29.boiling = '2835 K';
element29.symbolnumber = '29';
element29.symbol = 'cu';


var btn = document.querySelector(element29.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element29.elementname; 
    atomicmass.innerHTML = element29.atomicmass;
    protons.innerHTML = element29.protons;
    electrons.innerHTML = element29.electrons; 
    neutrons.innerHTML = element29.neutrons; 
    fusion.innerHTML = element29.fusion;
    boiling.innerHTML = element29.boiling; 
    symbolnumber.innerHTML = element29.symbolnumber; 
    symbol.innerHTML = element29.symbol; 
});