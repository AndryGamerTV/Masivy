const log = console.log;
let style = ["jazz", "blues"];
log(style);

style.push("Roch-n-Roll");
log(style);

style.splice(1, 1, 'Classics');
log(style);

style.splice(0, 1);
log(style);

style.unshift('Rap', 'Reggae');
log(style);