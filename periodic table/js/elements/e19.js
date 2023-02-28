var element19 = new Object();
element19.btn = '#e19';
element19.elementname = 'potassium';
element19.atomicmass = '39.0983 u';
element19.protons = '19';
element19.electrons = '19';
element19.neutrons = '20';
element19.fusion = '336.53 K';
element19.boiling = '1032 K';
element19.symbolnumber = '19';
element19.symbol = 'k';


var btn = document.querySelector(element19.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element19.elementname; 
    atomicmass.innerHTML = element19.atomicmass;
    protons.innerHTML = element19.protons;
    electrons.innerHTML = element19.electrons; 
    neutrons.innerHTML = element19.neutrons; 
    fusion.innerHTML = element19.fusion;
    boiling.innerHTML = element19.boiling; 
    symbolnumber.innerHTML = element19.symbolnumber; 
    symbol.innerHTML = element19.symbol; 
});