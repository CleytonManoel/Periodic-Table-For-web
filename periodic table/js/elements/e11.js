var element11 = new Object();
element11.btn = '#e11';
element11.elementname = 'sodium';
element11.atomicmass = '22.9897693 u';
element11.protons = '11';
element11.electrons = '11';
element11.neutrons = '11';
element11.fusion = '370.95 K';
element11.boiling = '1156 K';
element11.symbolnumber = '11';
element11.symbol = 'na';


var btn = document.querySelector(element11.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element11.elementname; 
    atomicmass.innerHTML = element11.atomicmass;
    protons.innerHTML = element11.protons;
    electrons.innerHTML = element11.electrons; 
    neutrons.innerHTML = element11.neutrons; 
    fusion.innerHTML = element11.fusion;
    boiling.innerHTML = element11.boiling; 
    symbolnumber.innerHTML = element11.symbolnumber; 
    symbol.innerHTML = element11.symbol; 
});