var element31 = new Object();
element31.btn = '#e31';
element31.elementname = 'gallium';
element31.atomicmass = '69.723 u';
element31.protons = '31';
element31.electrons = '31';
element31.neutrons = '38';
element31.fusion = '302.91 K';
element31.boiling = '2477 K';
element31.symbolnumber = '31';
element31.symbol = 'ga';


var btn = document.querySelector(element31.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element31.elementname; 
    atomicmass.innerHTML = element31.atomicmass;
    protons.innerHTML = element31.protons;
    electrons.innerHTML = element31.electrons; 
    neutrons.innerHTML = element31.neutrons; 
    fusion.innerHTML = element31.fusion;
    boiling.innerHTML = element31.boiling; 
    symbolnumber.innerHTML = element31.symbolnumber; 
    symbol.innerHTML = element31.symbol; 
});