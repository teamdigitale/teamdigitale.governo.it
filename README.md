# Sito web teamdigitale.governo.it

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

### Branching e PRs

Quando si sviluppa una funzione nuova o si sistemano dei problemi, è necessario seguire il seguente processo:

1. creare una _branch_ con il numero della issue, per esempio: `1-installazione_jekyll`
2. fare _commit_ sulla _branch_
3. creare una _Pull Request_ su _master_ e attendere che sia approvata (sistemando eventuali problemi sollevati)
4. fare un _rebase_ e correggere eventuali conflitti
5. fare uno _squash_ dei _commit_ (per avere massimo due _commit_)
6. fare _merge_ su _master_
