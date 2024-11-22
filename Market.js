class Market {
    endirimfaiz = 50

    constructor(name, surname, mehsullar, netice) {
        this.name = name
        this.surname = surname
        this.mehsullar = mehsullar
        this.endirim = netice

    }

    hesabla() {
        let yekunodenilecekMebleg = 0;
        if (this.endirim) {
            let mehsullar = this.mehsullar;
            if (this.mehsulYoxlama()) {
                mehsullar.forEach(item => {
                    yekunodenilecekMebleg += item.price * (100 - this.endirimfaiz) / 100
                });
                return yekunodenilecekMebleg;
            } else {
                return "Mehsul yoxdur !"
            }
        } else {
            if (this.mehsulYoxlama()) {
                mehsullar.forEach(item => {
                    yekunodenilecekMebleg += item.price
                });
                return yekunodenilecekMebleg
            }
        }
    }

    mehsulYoxlama() {
        if (this.mehsullar != null && this.mehsullar.length > 0) {
            return true
        } else {
            return false
        }
    }

}