# Roman numbers

Some Roman numbers:

```
I                 1
II                2
III               3
IV                4
V                 5
VI                6
VII               7
VIII              8
IX                9
X                10
XX               20
XXX              30
XL               40
L                50
LX               60
XC               90
C               100
CD              400
D               500
M              1000

MMXXI          2021
```

## Idee

1. Rekursiv: Möglichst großen Anteil der Zahl in römische Zahl umwandeln, dann rekursiv aufrufen, bis gesamte Zahl verarbeitet wurde (bis der Restwert 0 erreicht ist). Dafür bräuchte man auch irgendwie die obere Liste in einer Art Dictionary. Constraints beachten (Ziffer darf sich maximal 3x wiederholen).

2. Iterativ: Zahl in einzelne Stellenwerte (Tausender, Hunderter, Zehner, Einer) zerlegen und über
