var element90 = new Object();
element90.btn = '#e90';
element90.elementname = 'thorium';
element90.atomicmass = '232.038 u';
element90.protons = '90';
element90.electrons = '90';
element90.neutrons = '142';
element90.fusion = '2023 K';
element90.boiling = '5061 K';
element90.symbolnumber = '90';
element90.symbol = 'th';


var btn = document.querySelector(element90.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element90.elementname; 
    atomicmass.innerHTML = element90.atomicmass;
    protons.innerHTML = element90.protons;
    electrons.innerHTML = element90.electrons; 
    neutrons.innerHTML = element90.neutrons; 
    fusion.innerHTML = element90.fusion;
    boiling.innerHTML = element90.boiling; 
    symbolnumber.innerHTML = element90.symbolnumber; 
    symbol.innerHTML = element90.symbol; 
});