/* 
Kiekviena užduotis turi būti aprašyta kaip atskira funkcija
kuriai yra paduodami duomenys. Aprašykite visas funkcijas žemiau. 
Visas funkcijas iškvieskite vieną po kitos, žemiau šio komentaro.

Taip pat parašykite funkciją kuri: isikviesdama save pačią atspausdina skaičius nuo 1 iki 10


*/
countKavines(data);
countKaunoKavines(data);
count1stKavineMenu(data);
countMenusInKaunas(data);
countMenusAvgPrice(data);
compareKaunasMenusAvgPriceWithTheRest(data);
countVegetarianMenu(data);
compareVilniusVegetarianMenuRatioWithOthers(data);

function countKavines(data) {
    console.log('countKavines', data.length);
}

function countKaunoKavines(data) {
    let count = 0;
    data.forEach(kavine => {
        if (kavine.adresas.toLowerCase().includes('kaunas')) {
            count++;
        }
    });
    console.log('countKaunoKavines', count);
}

function count1stKavineMenu(data) {
    console.log('count1stKavineMenu', data[0].menu.length);
}

function countMenusInKaunas(data) {
    let menus = [];
    data.forEach(kavine => {
        if (kavine.adresas.toLowerCase().includes('kaunas')) {
            kavine.menu.forEach(patiekalas => {
                if (!menus.includes(Object.keys(patiekalas)[0]))
                    menus.push(Object.keys(patiekalas)[0]);
            });
        }
    });
    console.log('countMenusInKaunas', menus.length);
}

function countMenusAvgPrice(data) {
    let count = 0;
    let sum = 0;
    data.forEach(kavine => {
        kavine.menu.forEach(patiekalas => {
            count++;
            sum += Object.values(patiekalas)[0];
        });
    });
    let result = Math.round(sum / count * 100) / 100
    console.log('countMenusAvgPrice', result);

}

function compareKaunasMenusAvgPriceWithTheRest(data) {
    let countKaunas = 0;
    let sumKaunas = 0;
    let countOthers = 0;
    let sumOthers = 0;
    data.forEach(kavine => {
        if (kavine.adresas.toLowerCase().includes('kaunas')) {
            kavine.menu.forEach(patiekalas => {
                countKaunas++;
                sumKaunas += Object.values(patiekalas)[0];
            });
        } else {
            kavine.menu.forEach(patiekalas => {
                countOthers++;
                sumOthers += Object.values(patiekalas)[0];
            });
        }

    });
    let resultKaunas = Math.round(sumKaunas / countKaunas * 100) / 100
    let resultOther = Math.round(sumOthers / countOthers * 100) / 100
    console.log('compareKaunasMenusAvgPriceWithTheRest', resultKaunas > resultOther);

}


function countVegetarianMenu(data) {
    let count = 0;
    let countVeg = 0;
    data.forEach(kavine => {
        kavine.menu.forEach(patiekalas => {
            count++;
            if (Object.values(patiekalas)[1] == 'taip') {
                countVeg++;
            }
        });
    });
    console.log('countVegetarianMenu', Math.round(countVeg / (count / 100) * 100) / 100);

}

function compareVilniusVegetarianMenuRatioWithOthers(data) {
    let countVilnius = 0;
    let countVegVilnius = 0;
    let countOther = 0;
    let countVegOther = 0;
    data.forEach(kavine => {
        kavine.menu.forEach(patiekalas => {

            if (kavine.adresas.toLowerCase().includes('vilnius')) {
                countVilnius++;
                if (Object.values(patiekalas)[1] == 'taip') {
                    countVegVilnius++;
                }
            } else {
                countOther++;
                if (Object.values(patiekalas)[1] == 'taip') {
                    countVegOther++;
                }
            }
        });
    });
    let vilniusPercent = countVegVilnius / (countVilnius / 100);
    console.log(countVegVilnius, countVilnius);
    console.log(countVegOther, countOther);
    let otherPercent = countVegOther / (countOther / 100);
    console.log('compareVilniusVegetarianMenuRatioWithOthers', vilniusPercent > otherPercent);

}