const Vadim = {
    name: 'Вадим',
    lastName: 'Метла',
    dateOfBrith: '22/04/1996',
    reason: 'Хочу работать головой',
    logName () {
        console.log('Моё имя: ', this.name);
    },
    logLastName () {
        console.log('Моя фамилия: ', this.lastName);
    },
    logBrith () {
        console.log('Моя дата рождения: ', this.dateOfBrith);
    },
    logReason () {
        console.log(this.name,'хочет выучить JS потому что ', this.reason);
    },
    dream (audi) {
        console.log(this.name, 'мечтает об ', audi);

    },
    Information () {
        this.logName();
        this.logLastName();
        this.logBrith();
        this.logReason();
        this.dream('Ауди с автосалона');
    }
};
//Vadim.dream('Ауди с автосалона');
Vadim.Information();