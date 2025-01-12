const pp = console.log;
let style = ["jazz", "blues"];pp(style);

style.push("Roch-n-Roll");pp(style);
style.splice(1, 1, 'Classics');pp(style);
style.splice(0, 1);pp(style);
style.unshift('Rap', 'Reggae');pp(style);