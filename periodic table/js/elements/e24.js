var element24 = new Object();
element24.btn = '#e24';
element24.elementname = 'chromium';
element24.atomicmass = '51.996 u';
element24.protons = '24';
element24.electrons = '24';
element24.neutrons = '27';
element24.fusion = '2180 K';
element24.boiling = '2944 K';
element24.symbolnumber = '24';
element24.symbol = 'cr';


var btn = document.querySelector(element24.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element24.elementname; 
    atomicmass.innerHTML = element24.atomicmass;
    protons.innerHTML = element24.protons;
    electrons.innerHTML = element24.electrons; 
    neutrons.innerHTML = element24.neutrons; 
    fusion.innerHTML = element24.fusion;
    boiling.innerHTML = element24.boiling; 
    symbolnumber.innerHTML = element24.symbolnumber; 
    symbol.innerHTML = element24.symbol; 
});