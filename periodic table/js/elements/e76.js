var element76 = new Object();
element76.btn = '#e76';
element76.elementname = 'osmium';
element76.atomicmass = '190.2 u';
element76.protons = '76';
element76.electrons = '76';
element76.neutrons = '114';
element76.fusion = '3306 K';
element76.boiling = '5285 K';
element76.symbolnumber = '76';
element76.symbol = 'os';


var btn = document.querySelector(element76.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element76.elementname; 
    atomicmass.innerHTML = element76.atomicmass;
    protons.innerHTML = element76.protons;
    electrons.innerHTML = element76.electrons; 
    neutrons.innerHTML = element76.neutrons; 
    fusion.innerHTML = element76.fusion;
    boiling.innerHTML = element76.boiling; 
    symbolnumber.innerHTML = element76.symbolnumber; 
    symbol.innerHTML = element76.symbol; 
});