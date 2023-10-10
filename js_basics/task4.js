const log = console.log

//виконання завдання
const MyAge = 35

const OsobaPovnolitnya = MyAge >= 18

log(MyAge, OsobaPovnolitnya)

//експерименти
let Today = new Date()

const MyBD = new Date("1988-01-25")

const MyAgeMs = Today - MyBD

const MyAgeYears = MyAgeMs / 86400000 / 365

const MojnoPivo = MyAgeYears >= 18

log(MyAgeYears, MojnoPivo)