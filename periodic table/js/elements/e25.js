var element25 = new Object();
element25.btn = '#e25';
element25.elementname = 'manganese';
element25.atomicmass = '54.93804 u';
element25.protons = '25';
element25.electrons = '25';
element25.neutrons = '29';
element25.fusion = '1519 K';
element25.boiling = '2334 K';
element25.symbolnumber = '25';
element25.symbol = 'mn';


var btn = document.querySelector(element25.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element25.elementname; 
    atomicmass.innerHTML = element25.atomicmass;
    protons.innerHTML = element25.protons;
    electrons.innerHTML = element25.electrons; 
    neutrons.innerHTML = element25.neutrons; 
    fusion.innerHTML = element25.fusion;
    boiling.innerHTML = element25.boiling; 
    symbolnumber.innerHTML = element25.symbolnumber; 
    symbol.innerHTML = element25.symbol; 
});