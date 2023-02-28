var element113 = new Object();
element113.btn = '#e113';
element113.elementname = 'nihonium';
element113.atomicmass = '286.182 u';
element113.protons = '113';
element113.electrons = '113';
element113.neutrons = '173';
element113.fusion = '---';
element113.boiling = '---';
element113.symbolnumber = '113';
element113.symbol = 'nh';


var btn = document.querySelector(element113.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element113.elementname; 
    atomicmass.innerHTML = element113.atomicmass;
    protons.innerHTML = element113.protons;
    electrons.innerHTML = element113.electrons; 
    neutrons.innerHTML = element113.neutrons; 
    fusion.innerHTML = element113.fusion;
    boiling.innerHTML = element113.boiling; 
    symbolnumber.innerHTML = element113.symbolnumber; 
    symbol.innerHTML = element113.symbol; 
});