class Palyndrome {
  constructor(mot) {
    this.mot = mot;
  }

  estPalyndrome() {
    // You're code here...
    //     let tableauMot = [];
    //     for (let i = 0; i < mot.length; i++) {
    //       if (mot[i] != " ") {
    //         tableauMot.push(mot[i].toLowerCase());
    //       }
    //     }

    //     console.log(tableauMot);
    //     let isOk = true;
    //     for (let i = 0; i < tableauMot.length; i++) {
    //       if (tableauMot[i] != tableauMot[tableauMot.length - 1 - i]) {
    //         isOk = false;
    //       }
    //     }
    //     if (isOk === true) {
    //       console.log("c'est un palyndrome");
    // return true;
    //     } else {
    //       console.log("pas un palyndrome");
    // return false;
    //     }
    //   }
    // ici c'est nous ---------

    let analyse = this.mot.split("");
    //   .replace(/ /g, "")
    //   .toLowerCase()
    //   .split("");

    const tableauReal = analyse
      .map(e => e.toLowerCase())
      .filter(f => f !== " ");

    console.log(tableauReal, analyse);

    const save = [...analyse].join("");
    const resultat = analyse.reverse().join("");
    analyse = analyse.join("");

    return resultat === save;

    // if (resultat === save) {
    //   console.log(`${mot} est un palyndrome`);
    // } else {
    //   console.log(`${mot} n'est pas un palyndrome`);
    // }
  }
}

// test
const mot = "Kay ak ";
const palyndrome = new Palyndrome(mot);
palyndrome.estPalyndrome();
//console.log(mot);
