var element83 = new Object();
element83.btn = '#e83';
element83.elementname = 'bismuth';
element83.atomicmass = '208.98040 u';
element83.protons = '83';
element83.electrons = '83';
element83.neutrons = '125';
element83.fusion = '544.55 K';
element83.boiling = '1837 K';
element83.symbolnumber = '83';
element83.symbol = 'bi';


var btn = document.querySelector(element83.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element83.elementname; 
    atomicmass.innerHTML = element83.atomicmass;
    protons.innerHTML = element83.protons;
    electrons.innerHTML = element83.electrons; 
    neutrons.innerHTML = element83.neutrons; 
    fusion.innerHTML = element83.fusion;
    boiling.innerHTML = element83.boiling; 
    symbolnumber.innerHTML = element83.symbolnumber; 
    symbol.innerHTML = element83.symbol; 
});