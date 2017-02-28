# Sito web teamdigitale.governo.it

Sito web del [Team per la Trasformazione Digitale](https://teamdigitale.governo.it).

## Struttura del sito

### Configurazioni base

Le configurazioni base del sito si trovano in `_config.yml`:

* `title`: Titolo del sito, per ogni lingua supportata
* `email`: E-Mail per contatti
* `description`: Descrizione del sito, per ogni lingua supportata
* `url`: URL di base del sito
* `twitter_username`: username Twitter del team per ogni lingua supportata (senza `@`)
`medium_address`: Link al profilo Medium del team per ogni lingua supportata
`linkedin_address`: Link al profilo LinkedIn del team
`medium_archive_url`: URL da cui scaricare post Medium (vedi sotto)
`logo`: Immagine da usare come logo del sito

### Gerarchia delle pagine

Ogni pagina ha una variabile `ref` il cui valore (stringa senza spazi) identifica univocamente la pagina nella struttura del sito, indipendentemente dalla lingua (i.e. due pagine con lo stesso contenuto ma in
lingue diverse hanno lo stesso valore di `ref`). Questo meccanismo viene
usato per creare link indipendenti dalla lingua e per creare una relazione
tra le pagine con uguale contenuto ma in lingue diverse.

Inoltre ogni pagina può avere una variabile (opzionale) `parent_ref` che,
se impostata, rende quella pagina "figlia" della pagina identificata dal valore di `parent_ref`. Questo meccanismo è usato per creare una gerarchia tra le pagine, che a sua volta è sfruttata durante la generazione dei menù di navigazione.

### Configurazione dei menù di navigazione

I menù di navigazione vengono generati partendo dalla gerarchia delle pagine. In particolare i menù di navigazione principali includono solo le pagine che non hanno definito un attributo `parent_ref`.

Per queste pagine viene inoltre usato l'attributo numerico `menu_position` che permette di impostare l'ordine in cui le pagine principali vengono visualizzate nei menù. Le pagine vengono elencate secondo l'ordine crescente dell'attributo `menu_position`.

### Pagine di profilo

Ogni membro del team ha una pagina di profilo personale.

Le pagine personali sono in formato Markdown e si trovano nella directory `people` all'interno di ogni directory corrispondente alla lingua (es. `it` e `en`).

L'intestazione della pagina di profilo deve contenere i seguenti attributi:

* `title`: il nome completo della persona (es. `Federico Feroldi`)
* `lang`: il codice della lingua di questa pagina (es. `it`)
* `layout`: deve avere il valore `people`
* `role`: il ruolo della persona descritto nella lingua della pagina
* `is_new`: se `true`, viene evidenziato il profilo come "nuovo"
* `twitter_user`: lo username Twitter, senza `@` (es. cloudify)
* `medium_user`: lo username Medium
* `linkedin_url`: l'url al profilo Linkedin, con l'accortezza di mantenere l'ultima parte dell'url con l'identificativo della pagina, che viene usato come testo nel link (es. `http://linkedin.com/in/feroldi` vabene e il testo del link sarà `feroldi`, `http://linkedin.com/in/feroldi/it` non va bene perchè il testo del link diventerebbe `it`).
* `ref`: l'identificativo unico della pagina (es. `federico-feroldi`)
* `parent_ref`: deve avere il valore `team`

### Post Medium

I post Medium inclusi nell'homepage vengono sincronizzato ad ogni generazione del sito (tramite `gulp build`, `jekyll build` o `jekyll serve`).

I post di Medium vengono scaricati dall'URL impostato nella configurazione `medium_archive_url` (nel file `_config`).

La logica che sincronizza i post si trova nel plugin custom `_plugins/MediumImporter.rb`.

### Traduzioni

I template del sito utilizzano alcune traduzioni in modo dinamico (che non sono contenute nel testo della pagina).

Queste traduzioni si trovano nel file `_data/t.yml`.

## How-To

### Creazione di una pagina statica

Creare la pagina statica in ogni directory delle lingue supportate (es. `it` e `en`).

È utile prendere un'altra pagina statica come base.

### Creazione di una pagina profilo

Creare la pagina profilo in ogni directory delle lingue supportate (es. `it/people` e `en/people`).

È utile prendere un'altra pagina profilo come base.

### Come generare il sito mentre si lavora sui contenuti

Jekyll prevede la possibilità di generare automaticamente il sito ogni volta che viene fatta una modifica.

Questo può essere fatto tramite il [comando serve](https://jekyllrb.com/docs/usage/):

```
$ jekyll serve
```

Oltre a generare il sito, questo comando pubblica il sito in locale all'indirizzo web [http://localhost:4000](http://localhost:4000).

### Come generare il sito per la pubblicazione

La generazione del sito per la pubblicazione richiede un po' più di tempo poiché comprende una serie di ottimizzazioni che rendono il sito più performante.

In questo caso la generazione viene fatta tramite `gulp`:

```
$ gulp build
```

Il risultato della generazione di troverà nella directory `_site`.

### Pubblicare il sito

Per pubblicare il sito negli ambienti di _staging_ e _produzione_ è
necessario creare un file _json_ nella propria home directory con questo
formato:

```
{
  "staging": {
    "server": "...",
    "path": "...",
    "port": ...
  },
  "production": {
    "server": "...",
    "path": "...",
    "port": ...
  },
}
```

Dove `server` è nel formato `user@host`, `path` è il percorso completo alla directory di pubblicazione e `port` è la porta SSH per accedere al server (la pubblicazione avviene tramite _rsync_ via SSH).

## Come contribuire

### Richiesta di modifiche e segnalazione di problemi

Per ogni idea o segnalazione di problemi, usare le _issue_ di Github del progetto.

### Dipendenze

Installare `rbenv`, per esempio con _homebrew_:

```
$ brew install rbenv
```

Installare le _gems_:

```
$ gem install bundler
$ bundle install
```

Installare `nodenv`:

```
$ brew install nodenv
```

Installare i moduli _node_:

```
$ npm install
```

### Branching e PRs

Quando si sviluppa una funzione nuova o si sistemano dei problemi, è necessario seguire il seguente processo:

1. creare una _branch_ con il numero della issue, per esempio: `1-installazione_jekyll`
2. fare _commit_ sulla _branch_
3. creare una _Pull Request_ su _master_ e attendere che sia approvata (sistemando eventuali problemi sollevati)
4. fare un _rebase_ e correggere eventuali conflitti
5. fare uno _squash_ dei _commit_ (per avere massimo due _commit_)
6. fare _merge_ su _master_
