var element49 = new Object();
element49.btn = '#e49';
element49.elementname = 'indium';
element49.atomicmass = '114.818 u';
element49.protons = '49';
element49.electrons = '49';
element49.neutrons = '65';
element49.fusion = '429.75 K';
element49.boiling = '2345 K';
element49.symbolnumber = '49';
element49.symbol = 'in';


var btn = document.querySelector(element49.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element49.elementname; 
    atomicmass.innerHTML = element49.atomicmass;
    protons.innerHTML = element49.protons;
    electrons.innerHTML = element49.electrons; 
    neutrons.innerHTML = element49.neutrons; 
    fusion.innerHTML = element49.fusion;
    boiling.innerHTML = element49.boiling; 
    symbolnumber.innerHTML = element49.symbolnumber; 
    symbol.innerHTML = element49.symbol; 
});