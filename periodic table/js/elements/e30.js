var element30 = new Object();
element30.btn = '0';
element30.elementname = 'zinc';
element30.atomicmass = '65.4 u';
element30.protons = '30';
element30.electrons = '30';
element30.neutrons = '35';
element30.fusion = '692.68 K';
element30.boiling = '1180 K';
element30.symbolnumber = '30';
element30.symbol = 'zn';


var btn = document.querySelector(element30.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element30.elementname; 
    atomicmass.innerHTML = element30.atomicmass;
    protons.innerHTML = element30.protons;
    electrons.innerHTML = element30.electrons; 
    neutrons.innerHTML = element30.neutrons; 
    fusion.innerHTML = element30.fusion;
    boiling.innerHTML = element30.boiling; 
    symbolnumber.innerHTML = element30.symbolnumber; 
    symbol.innerHTML = element30.symbol; 
});