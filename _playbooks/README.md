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

## Lancia i playbook

```
$ ansible-playbook -i "myhost," site.yml
```
