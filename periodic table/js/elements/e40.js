var element40 = new Object();
element40.btn = '#e40';
element40.elementname = 'zirconium';
element40.atomicmass = '91.22 u';
element40.protons = '40';
element40.electrons = '40';
element40.neutrons = '51';
element40.fusion = '2128 K';
element40.boiling = '4682 K';
element40.symbolnumber = '40';
element40.symbol = 'zr';


var btn = document.querySelector(element40.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element40.elementname; 
    atomicmass.innerHTML = element40.atomicmass;
    protons.innerHTML = element40.protons;
    electrons.innerHTML = element40.electrons; 
    neutrons.innerHTML = element40.neutrons; 
    fusion.innerHTML = element40.fusion;
    boiling.innerHTML = element40.boiling; 
    symbolnumber.innerHTML = element40.symbolnumber; 
    symbol.innerHTML = element40.symbol; 
});