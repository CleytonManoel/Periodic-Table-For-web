var element115 = new Object();
element115.btn = '#e115';
element115.elementname = 'moscovium';
element115.atomicmass = '290.196 u';
element115.protons = '115';
element115.electrons = '115';
element115.neutrons = '175';
element115.fusion = '---';
element115.boiling = '---';
element115.symbolnumber = '115';
element115.symbol = 'mc';


var btn = document.querySelector(element115.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element115.elementname; 
    atomicmass.innerHTML = element115.atomicmass;
    protons.innerHTML = element115.protons;
    electrons.innerHTML = element115.electrons; 
    neutrons.innerHTML = element115.neutrons; 
    fusion.innerHTML = element115.fusion;
    boiling.innerHTML = element115.boiling; 
    symbolnumber.innerHTML = element115.symbolnumber; 
    symbol.innerHTML = element115.symbol; 
});