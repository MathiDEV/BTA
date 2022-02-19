## Structutre JSON Automatisation

```json
{
    "automations": {
        "nom_unique": {
            "name": "Titre de l'automatisation",
            "trigger": [
                {
                     //conditions
                }
            ],
            "actions": [
                // Liste d'action
            ]
        },
        "nom_unique2": {
            "name": "Titre",
            "trigger": false,
            "actions": [
                // Liste d'action
            ]
        }
    }
}
```

### Trigger
Trigger prend soit

- `false` (= déclenchement manuel uniquement)
- Une array de conditions
	- Chaque élément de l'array est une condition alternative (OR)
	- Un condition est un objet avec en index le type de condition et en value la valeur de la condtions

Conditions de trigger : 

|Condition | Type | Description | Example |
|----------|------|-----------|---------|
| hour | **int** | Se déclenche si la valeur des heures passe à la valeur définie | **"hour": 20** <br>_> Se déclenche si l'heure passe à 20:00_|
| minute | **int** | Se déclenche si la valeur des minutes passe à la valeur définie | **"minute": 45** <br>_> Se déclenche toutes les heures à XX:45_|
| inactivity | **int** | Se déclenche si le PC est inactif pendant n secondes | **"inactivity": 10** <br>_> Se déclenche après 10 secondes d'inactivité_|
| typed | **string** | Se déclenche si l'utilisateur tappe la suite de caractères indiquée.<br>(Peut être mis à `true`, dans ce cas, se déclenche à chaque touche du clavier appuyée) | **"typed": "epitech"** <br>_> Se déclenche si "epitech" est tappé au clavier_|
| process | **string** | Se déclenche si un processus portant le nom indiqué démarre | **"process": "zsh"** <br>_> Se déclenche à chaque nouvelle instance de "zsh"_|

Il est possible de cumuler des conditions.

Exemple:
```c
(hour == 14 && typed == "bonjour") || (hour == 18 && typed == "bonsoir")
```

S'écrit

```json
[
	{
		"hour": 14,
		"typed": "bonjour"
	},
	{
		"hour": 18,
		"typed": "bonsoir"
	}
]
```

### Actions
Les actions sont des objets à quatre valeurs :

||| |
|-|-|---|
| **action** | **string** | Le type d'action |
| **condtion** | **array** | La condition d'execution <br> (souvent à `true` mais peut se structurer comme les triggers pour avoir des scripts très personalisables _(proposer uniquement hour, minutes et inactivity)_ |
| **repeat** (facultatif)| **int** | Le nombre de répétitions (1 par défaut) |
| **params** (facultatif)| **array** | Certaines actions ont besoin de paramètres supplémentaires |

Les types d'actions sont les suivantes :

|Action | Description | Paramètres |
|-|--|--|
| lock | Vérouille l'écran | N/A |
| rickroll | Ouvre un rickroll en plein écran | N/A |
| photo | Prend une photo via la webcam | N/A |
| wait | Pause entre deux actions | arg1 : délai en secondes (**int**) |
| shell_run | Execute une commande shell | arg1: la commande à executer (**string**) |
| sound | Joue un son situé dans le dossier "audio" | arg1: le nom du fichier (**string**) |
| send_keys | Exécute un combo de touches | arguments variadiques: le combo de touches à exécuter (les touches sont des **strings**, les touches spéciales sont `ctrl`, `alt`, `shift`, `win`) |
| write | Écrit un texte au clavier | arg1: texte à écrire (**string**) |
| python | Exécute un code python | arg1: le code à executer (**string**) |

Exemple:
```json
"actions": [
                {
                    "action": "rickroll",
                    "condition": true
                },
                {
                    "action": "wait",
                    "condition": true,
                    "repeat": 1,
                    "params": [
                        1
                    ]
                },
                {
                    "action": "photo",
                    "condition": true,
                    "repeat": 1,
                    "params": []
                },
                {
                    "action": "wait",
                    "condition": true,
                    "repeat": 1,
                    "params": [
                        5
                    ]
                },
                {
                    "action": "lock",
                    "condition": [
						{
						"hour": 21,
						}
					],
                    "repeat": 1,
                    "params": []
                }
            ]
```



