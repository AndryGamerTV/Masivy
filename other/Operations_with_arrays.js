const log = console.log;
let style = ["jazz", "blues"];
    log(style);
    log((style.push("Roch-n-Roll"), style)); // Яблуко
        log((style.splice(1, 1, 'Classics' ), style));
                log((style.splice(0,1), style));
            log((style.unshift('Rap', 'Reggae'), style));