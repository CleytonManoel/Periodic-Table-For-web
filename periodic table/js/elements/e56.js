var element56 = new Object();
element56.btn = '#e56';
element56.elementname = 'barium';
element56.atomicmass = '137.33 u';
element56.protons = '56';
element56.electrons = '56';
element56.neutrons = '81';
element56.fusion = '1000 K';
element56.boiling = '2170 K';
element56.symbolnumber = '56';
element56.symbol = 'ba';


var btn = document.querySelector(element56.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element56.elementname; 
    atomicmass.innerHTML = element56.atomicmass;
    protons.innerHTML = element56.protons;
    electrons.innerHTML = element56.electrons; 
    neutrons.innerHTML = element56.neutrons; 
    fusion.innerHTML = element56.fusion;
    boiling.innerHTML = element56.boiling; 
    symbolnumber.innerHTML = element56.symbolnumber; 
    symbol.innerHTML = element56.symbol; 
});