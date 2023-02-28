var element53 = new Object();
element53.btn = '#e53';
element53.elementname = 'iodine';
element53.atomicmass = '126.9045 u';
element53.protons = '53';
element53.electrons = '53';
element53.neutrons = '73';
element53.fusion = '386.85 K';
element53.boiling = '457.55 K';
element53.symbolnumber = '53';
element53.symbol = 'i';


var btn = document.querySelector(element53.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element53.elementname; 
    atomicmass.innerHTML = element53.atomicmass;
    protons.innerHTML = element53.protons;
    electrons.innerHTML = element53.electrons; 
    neutrons.innerHTML = element53.neutrons; 
    fusion.innerHTML = element53.fusion;
    boiling.innerHTML = element53.boiling; 
    symbolnumber.innerHTML = element53.symbolnumber; 
    symbol.innerHTML = element53.symbol; 
});