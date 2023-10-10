const log = console.log
import chalk from 'chalk';

//5.1
const subtask1 = 5.1

//задаємо параметри кола
const radius = 7

//обчислюємо значення
const PloshiaKola = Math.PI*Math.pow(radius,2)

//округлюємо значення
const PloshiaKolaRound = Math.round(PloshiaKola)

//виводимо результат
log(chalk.red(subtask1) + '\n' + 'Площа кола' + ' ' + PloshiaKolaRound)

//5.2
const subtask2 = 5.2

//задаємо параметри прямокутника
const length = 35
const width = 57

//обчислюємо значення
const PloshiaPriamokutnyka = length * width

//округлюємо значення
const PloshiaPriamokutnykaRound = Math.round(PloshiaPriamokutnyka)

//виводимо результат
log(chalk.red(subtask2) + '\n' + 'Площа прямокутника' + ' ' + PloshiaPriamokutnykaRound)

//5.3
const subtask3 = 5.3

//задаємо параметри циліндра
const height = 25

//обчислюємо значення

const ObjemTsilindra = PloshiaKola*height

//округлюємо значення
const ObjemTsilindraRound = Math.round(ObjemTsilindra)

//виводимо результат
log(chalk.red(subtask3) + '\n' + "Об'єм циліндра" + ' ' + ObjemTsilindraRound)