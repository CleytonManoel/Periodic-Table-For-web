var element96 = new Object();
element96.btn = '#e96';
element96.elementname = 'curium';
element96.atomicmass = '247.07035 u';
element96.protons = '96';
element96.electrons = '96';
element96.neutrons = '151';
element96.fusion = '1618 K';
element96.boiling = '3400 K';
element96.symbolnumber = '96';
element96.symbol = 'cm';


var btn = document.querySelector(element96.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element96.elementname; 
    atomicmass.innerHTML = element96.atomicmass;
    protons.innerHTML = element96.protons;
    electrons.innerHTML = element96.electrons; 
    neutrons.innerHTML = element96.neutrons; 
    fusion.innerHTML = element96.fusion;
    boiling.innerHTML = element96.boiling; 
    symbolnumber.innerHTML = element96.symbolnumber; 
    symbol.innerHTML = element96.symbol; 
});