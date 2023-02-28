var element66 = new Object();
element66.btn = '#e66';
element66.elementname = 'dysprosium';
element66.atomicmass = '162.500 u';
element66.protons = '66';
element66.electrons = '66';
element66.neutrons = '96';
element66.fusion = '1685 K';
element66.boiling = '2840 K';
element66.symbolnumber = '66';
element66.symbol = 'dy';


var btn = document.querySelector(element66.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element66.elementname; 
    atomicmass.innerHTML = element66.atomicmass;
    protons.innerHTML = element66.protons;
    electrons.innerHTML = element66.electrons; 
    neutrons.innerHTML = element66.neutrons; 
    fusion.innerHTML = element66.fusion;
    boiling.innerHTML = element66.boiling; 
    symbolnumber.innerHTML = element66.symbolnumber; 
    symbol.innerHTML = element66.symbol; 
});