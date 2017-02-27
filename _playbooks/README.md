# How To

## Dipendenze

### Installa Ansible

```
$ brew install ansible
```

### Installa i roles

```
$ ansible-galaxy install -r requirements.yml
```

## Lancia il playbook

```
$ ansible-playbook -i "myhost," site.yml
```

Dove `myhost` è l'host di cui fare il setup.
