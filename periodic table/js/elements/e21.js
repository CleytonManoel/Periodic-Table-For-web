var element21 = new Object();
element21.btn = '#e21';
element21.elementname = 'scandium';
element21.atomicmass = '44.95591 u';
element21.protons = '21';
element21.electrons = '21';
element21.neutrons = '23';
element21.fusion = '1814 K';
element21.boiling = '3109 K';
element21.symbolnumber = '21';
element21.symbol = 'sc';


var btn = document.querySelector(element21.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element21.elementname; 
    atomicmass.innerHTML = element21.atomicmass;
    protons.innerHTML = element21.protons;
    electrons.innerHTML = element21.electrons; 
    neutrons.innerHTML = element21.neutrons; 
    fusion.innerHTML = element21.fusion;
    boiling.innerHTML = element21.boiling; 
    symbolnumber.innerHTML = element21.symbolnumber; 
    symbol.innerHTML = element21.symbol; 
});