var element42 = new Object();
element42.btn = '#e42';
element42.elementname = 'molybdenum';
element42.atomicmass = '95.95 u';
element42.protons = '42';
element42.electrons = '42';
element42.neutrons = '53';
element42.fusion = '2896 K';
element42.boiling = '4912 K';
element42.symbolnumber = '42';
element42.symbol = 'mo';


var btn = document.querySelector(element42.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element42.elementname; 
    atomicmass.innerHTML = element42.atomicmass;
    protons.innerHTML = element42.protons;
    electrons.innerHTML = element42.electrons; 
    neutrons.innerHTML = element42.neutrons; 
    fusion.innerHTML = element42.fusion;
    boiling.innerHTML = element42.boiling; 
    symbolnumber.innerHTML = element42.symbolnumber; 
    symbol.innerHTML = element42.symbol; 
});