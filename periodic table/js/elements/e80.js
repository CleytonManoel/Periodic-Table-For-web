var element80 = new Object();
element80.btn = '#e80';
element80.elementname = 'mercury';
element80.atomicmass = '200.59 u';
element80.protons = '80';
element80.electrons = '80';
element80.neutrons = '120';
element80.fusion = '234.32 K';
element80.boiling = '629.88 K';
element80.symbolnumber = '80';
element80.symbol = 'hg';


var btn = document.querySelector(element80.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element80.elementname; 
    atomicmass.innerHTML = element80.atomicmass;
    protons.innerHTML = element80.protons;
    electrons.innerHTML = element80.electrons; 
    neutrons.innerHTML = element80.neutrons; 
    fusion.innerHTML = element80.fusion;
    boiling.innerHTML = element80.boiling; 
    symbolnumber.innerHTML = element80.symbolnumber; 
    symbol.innerHTML = element80.symbol; 
});