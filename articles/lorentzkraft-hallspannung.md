# Lorentzkraft, Hallspannung und Elektronenbahn im Plattenkondensator

Die Begriffe **Lorentzkraft**, **Hallspannung** und **Elektronenbahn im Plattenkondensator** beschreiben fundamentale physikalische Phänomene, die auftreten, wenn elektrische und magnetische Felder auf bewegte Ladungsträger einwirken. Diese Konzepte gehören zum Kerngebiet der **Elektrodynamik** und finden Anwendungen in Messtechnik, Halbleiterphysik und Elektronenoptik.

![Elektrodynamik](images/electrodynamics.jpg)

## Einführung: Warum ist das wichtig?

Diese drei Phänomene sind fundamental für das Verständnis von:

**Technische Anwendungen:**
- Elektromotoren und Generatoren
- Hall-Sensoren in Smartphones (Kompass)
- Teilchenbeschleuniger
- Massenspektrometer
- Elektronenmikroskope
- ABS-Sensoren in Autos

**Wissenschaftliche Bedeutung:**
- Bestimmung der Elementarladung
- Messung von Magnetfeldern
- Untersuchung von Halbleitereigenschaften
- Grundlage der Quantenelektrodynamik

[Lorentzkraft einfach erklärt](https://www.youtube.com/watch?v=7gO8-xXZKZI)

## Die Lorentzkraft

### Grundlagen

Die **Lorentzkraft** ist die Gesamtkraft, die auf ein geladenes Teilchen wirkt, wenn es sich in einem elektrischen Feld **E** und einem magnetischen Feld **B** bewegt.

**Die Lorentzkraft-Gleichung:**

```
F = q(E + v × B)
```

**Wobei:**
- **F** = Lorentzkraft (in Newton, N)
- **q** = Ladung des Teilchens (in Coulomb, C)
- **E** = elektrisches Feld (in V/m)
- **v** = Geschwindigkeit des Teilchens (in m/s)
- **B** = magnetisches Feld (in Tesla, T)
- **×** = Kreuzprodukt (Vektorprodukt)

![Lorentzkraft Schema](images/lorentz-force.jpg)

### Die zwei Komponenten der Lorentzkraft

Die Lorentzkraft setzt sich aus **zwei unabhängigen Beiträgen** zusammen:

#### 1. Elektrische Kraft

**Formel:**
```
F_E = q · E
```

**Eigenschaften:**
- Wirkt **parallel** zum elektrischen Feld
- Richtung hängt vom Vorzeichen der Ladung ab
- Unabhängig von der Geschwindigkeit
- Beschleunigt oder bremst das Teilchen

**Beispiel:**
Ein Elektron (negative Ladung) wird **gegen** die Feldrichtung beschleunigt.

---

#### 2. Magnetische Kraft

**Formel:**
```
F_B = q · (v × B)
```

**Eigenschaften:**
- Wirkt **senkrecht** zu v und B (Drei-Finger-Regel)
- Nur bei bewegten Ladungen
- Ändert die **Richtung**, aber nicht den **Betrag** der Geschwindigkeit
- Verrichtet **keine Arbeit** (da F ⊥ v)

**Betrag der magnetischen Kraft:**
```
F_B = q · v · B · sin(α)
```

**Wobei α** = Winkel zwischen v und B

**Spezialfall α = 90°:**
```
F_B = q · v · B
```

![Magnetische Kraft](images/magnetic-force.jpg)

[Die Drei-Finger-Regel erklärt](https://www.youtube.com/watch?v=kSPXHFONNwE)

### Herleitung der Lorentzkraft

#### Elektrischer Anteil

Aus dem **Coulomb-Gesetz** bzw. der Definition des elektrischen Feldes:

```
F_E = q · E
```

Ein elektrisches Feld **E** ist definiert als die Kraft pro Ladungseinheit.

---

#### Magnetischer Anteil

Experimentell wurde festgestellt (durch Arbeiten von **Lorentz, Thomson, Rowland** u.a.), dass auf einen stromdurchflossenen Leiter im Magnetfeld eine Kraft wirkt:

**Für einen Leiter:**
```
F_B = I · L × B
```

**Wobei:**
- **I** = Stromstärke
- **L** = Länge des Leiters (als Vektor)

**Für einzelne Ladungsträger:**

Der Strom entsteht durch bewegte Ladungsträger:
```
I = n · q · v
```

**Wobei:**
- **n** = Anzahl der Ladungsträger pro Volumen
- **q** = Ladung eines Trägers
- **v** = Driftgeschwindigkeit

Für ein einzelnes Ladungselement:
```
dF_B = q · v × B
```

**Durch Superposition** (Überlagerung) der elektrischen und magnetischen Kraft ergibt sich die **Gesamtlorentzkraft:**

```
F = q · E + q · (v × B)
F = q · (E + v × B)
```

![Herleitung Lorentzkraft](images/lorentz-derivation.jpg)

### Anwendungsbeispiel: Kreisbahn im Magnetfeld

**Szenario:** Ein geladenes Teilchen bewegt sich **senkrecht** zu einem homogenen Magnetfeld.

**Resultat:** Das Teilchen bewegt sich auf einer **Kreisbahn**.

**Warum?**

Die magnetische Kraft steht immer **senkrecht** zur Geschwindigkeit:
- → Zentripetalkraft
- → Kreisbewegung

**Gleichung:**
```
F_Lorentz = F_Zentripetal
q · v · B = m · v² / r
```

**Radius der Kreisbahn:**
```
r = (m · v) / (q · B)
```

**Beispiel Teilchenbeschleuniger:**
Im LHC (Large Hadron Collider) werden Protonen mit riesigen Magnetfeldern auf einer Kreisbahn gehalten!

![Kreisbahn Magnetfeld](images/circular-motion-magnetic.jpg)

[Teilchen im Magnetfeld - Simulation](https://www.youtube.com/watch?v=kJ3Lzy0c9F0)

## Die Hallspannung

### Physikalisches Prinzip

Fließt ein **Strom** durch ein Material und wirkt gleichzeitig ein **Magnetfeld senkrecht** dazu, so werden die bewegten Ladungsträger seitlich abgelenkt. Dadurch entsteht eine **Potentialdifferenz quer zur Stromrichtung** – die **Hallspannung**.

**Entdeckung:**
Edwin Hall entdeckte diesen Effekt **1879** bei Experimenten mit Goldfolien.

![Hall-Effekt Prinzip](images/hall-effect.jpg)

### Das Hall-Experiment: Schritt für Schritt

**Aufbau:**
- Dünnes Plättchen (Dicke **d**, Breite **b**)
- Strom **I** fließt in x-Richtung
- Magnetfeld **B** wirkt senkrecht (z-Richtung)
- Hallspannung **U_H** wird in y-Richtung gemessen

![Hall-Effekt Aufbau](images/hall-setup.jpg)

### Herleitung der Hallspannung

#### Schritt 1: Lorentzkraft sorgt für Ladungstrennung

Elektronen bewegen sich mit der **Driftgeschwindigkeit v_d** entgegen der Stromrichtung.

Die magnetische Lorentzkraft lenkt sie seitlich ab:
```
F_B = e · v_d · B
```

**Richtung:** Nach der Drei-Finger-Regel zur Seite (y-Richtung)

---

#### Schritt 2: Aufbau eines elektrischen Feldes

Durch die Ablenkung sammeln sich Elektronen auf einer Seite → **Ladungstrennung**

Dadurch entsteht ein **elektrisches Feld E_H** quer zum Strom.

---

#### Schritt 3: Gleichgewicht

Im Gleichgewicht gleichen sich magnetische und elektrische Kraft aus:
```
F_elektrisch = F_magnetisch
e · E_H = e · v_d · B
```

**Kürzen von e:**
```
E_H = v_d · B
```

---

#### Schritt 4: Hallspannung

Die Hallspannung über die Breite **d** des Plättchens:
```
U_H = E_H · d = v_d · B · d
```

---

#### Schritt 5: Driftgeschwindigkeit über Stromstärke

Die Stromstärke hängt mit der Driftgeschwindigkeit zusammen:
```
I = n · e · A · v_d
```

**Wobei:**
- **n** = Ladungsträgerdichte (Anzahl pro Volumen)
- **A** = Querschnittsfläche = b · d

**Auflösen nach v_d:**
```
v_d = I / (n · e · b · d)
```

---

#### Schritt 6: Finale Formel

Einsetzen in die Hallspannungs-Gleichung:
```
U_H = v_d · B · d
U_H = [I / (n · e · b · d)] · B · d
```

**Vereinfachen:**
```
U_H = (I · B) / (n · e · b)
```

**Standard-Form (mit Dicke d):**
```
U_H = (I · B) / (n · e · d)
```

![Hallspannung Herleitung](images/hall-voltage-derivation.jpg)

### Die Hall-Konstante

Die **Hall-Konstante R_H** fasst Materialeigenschaften zusammen:
```
R_H = 1 / (n · e)
```

**Damit:**
```
U_H = R_H · (I · B) / d
```

**Bedeutung:**
- **Positive R_H** → Löcherleitung (p-Halbleiter)
- **Negative R_H** → Elektronenleitung (n-Halbleiter)

### Anwendungen des Hall-Effekts

**1. Hall-Sensoren:**
- Messung von Magnetfeldern
- Kompass in Smartphones
- Drehzahlmesser
- Positionssensoren

**2. Bestimmung der Ladungsträgerdichte:**
- Charakterisierung von Halbleitern
- Unterscheidung n-Typ / p-Typ

**3. ABS-Systeme:**
- Raddrehzahl-Sensoren in Autos
- Erkennen von blockierenden Rädern

**4. Strommessung:**
- Berührungslose Messung hoher Ströme
- Zangenmessgeräte

![Hall-Sensor Anwendung](images/hall-sensor-applications.jpg)

[Hall-Sensoren in der Praxis](https://www.youtube.com/watch?v=l36yPZZ3WZ4)

## Elektronenbahn im Plattenkondensator

### Aufbau und Prinzip

Ein **Plattenkondensator** erzeugt ein **homogenes elektrisches Feld** zwischen zwei parallelen Platten.

**Szenario:**
Elektronen treten **parallel zu den Platten** ein und werden durch das elektrische Feld **senkrecht abgelenkt**.

![Plattenkondensator](images/plate-capacitor.jpg)

**Vergleich:**
Ähnlich wie ein **horizontaler Wurf** im Gravitationsfeld → Parabelflug!

### Herleitung der Bahnkurve

#### Schritt 1: Konstante Kraft im elektrischen Feld

Auf ein Elektron (Ladung **-e**) wirkt die elektrische Kraft:
```
F = e · E
```

**Elektrisches Feld im Kondensator:**
```
E = U / d
```

**Wobei:**
- **U** = Spannung zwischen den Platten
- **d** = Abstand der Platten

**Beschleunigung des Elektrons:**
```
a = F / m = (e · E) / m = (e · U) / (m · d)
```

---

#### Schritt 2: Zerlegung der Bewegung

Die Bewegung erfolgt in zwei **unabhängigen** Richtungen:

**Horizontale Richtung (x):**
- Keine Kraft in x-Richtung
- **Gleichförmige Bewegung**
- ```x(t) = v_0 · t```

**Vertikale Richtung (y):**
- Konstante Beschleunigung **a**
- **Gleichmäßig beschleunigte Bewegung**
- ```y(t) = (1/2) · a · t²```

---

#### Schritt 3: Eliminieren der Zeit

Aus der x-Gleichung:
```
t = x / v_0
```

Einsetzen in die y-Gleichung:
```
y(x) = (1/2) · a · (x / v_0)²
y(x) = (1/2) · (e · E) / m · (x / v_0)²
```

**Vereinfachen:**
```
y(x) = (e · E) / (2 · m · v_0²) · x²
```

**Alternative Form mit Spannung U:**
```
y(x) = (e · U) / (2 · m · v_0² · d) · x²
```

**Ergebnis:** Eine **Parabel**!

![Elektronenbahn Parabel](images/electron-trajectory.jpg)

[Elektronenablenkung im Kondensator](https://www.youtube.com/watch?v=mJL3vxNDJfQ)

### Wichtige Größen

**Ablenkwinkel α:**

Der Winkel, unter dem das Elektron den Kondensator verlässt:
```
tan(α) = v_y / v_x
```

**Vertikalgeschwindigkeit beim Austritt:**
```
v_y = a · t = (e · E · L) / (m · v_0)
```

**Wobei L** = Länge des Kondensators

**Ablenkung am Austritt:**
```
y_max = (e · E · L²) / (2 · m · v_0²)
```

### Vergleich: Wurf vs. Elektronenbahn

| Größe | Horizontaler Wurf | Elektronenbahn |
|-------|-------------------|----------------|
| Kraft | F = m · g | F = e · E |
| Beschleunigung | a = g | a = (e · E) / m |
| Horizontalbewegung | x = v_0 · t | x = v_0 · t |
| Vertikalbewegung | y = (1/2) · g · t² | y = (1/2) · a · t² |
| Bahnform | **Parabel** | **Parabel** |

**Erkenntnis:** Die Mathematik ist identisch!

![Vergleich Wurf](images/projectile-comparison.jpg)

## Zusammenhang der drei Phänomene

Alle drei Konzepte lassen sich durch die **Lorentzkraft-Gleichung** vereinen:

```
F = q · (E + v × B)
```

### 1. Elektronenbahn im Kondensator

**Nur elektrischer Anteil wirkt:**
```
F = q · E
```

- **B = 0** (kein Magnetfeld)
- Elektrisches Feld beschleunigt Elektronen
- Resultat: **Parabelbahn**

---

### 2. Hallspannung

**Nur magnetischer Anteil wirkt:**
```
F = q · (v × B)
```

- **E** entsteht als Folge der Ladungstrennung
- Magnetfeld lenkt bewegte Ladungen ab
- Resultat: **Quersspannung**

---

### 3. Lorentzkraft allgemein

**Beide Anteile wirken:**
```
F = q · E + q · (v × B)
```

- Kombination aus elektrischer und magnetischer Kraft
- Komplexere Bahnkurven möglich
- Anwendung: **Massenspektrometer, Teilchenbeschleuniger**

![Lorentzkraft Zusammenhang](images/lorentz-connection.jpg)

## Anwendungen in der Praxis

### 1. Kathodenstrahlröhre (Fernseher, Oszilloskop)

**Prinzip:**
- Elektronen werden im Kondensator abgelenkt
- Magnetspulen lenken horizontal und vertikal ab
- Ergibt Bild auf Leuchtschirm

**Historisch:** Grundlage für Röhrenfernseher und Computermonitore (vor LCD)

![Kathodenstrahlröhre](images/cathode-ray-tube.jpg)

---

### 2. Massenspektrometer

**Prinzip:**
- Ionen werden beschleunigt (elektrisches Feld)
- Im Magnetfeld auf Kreisbahn abgelenkt
- Radius hängt von Masse ab
- Trennung verschiedener Isotope

**Anwendung:**
- Chemische Analyse
- Archäologie (C14-Datierung)
- Dopingkontrollen

---

### 3. Teilchenbeschleuniger (LHC, CERN)

**Prinzip:**
- Elektrische Felder beschleunigen Teilchen
- Magnetfelder halten sie auf Kreisbahn
- Energien von TeV (Tera-Elektronenvolt)

**Ziel:**
- Erforschung der Grundbausteine der Materie
- Higgs-Boson-Entdeckung (2012)

![LHC CERN](images/lhc-cern.jpg)

---

### 4. Hall-Sensoren

**Anwendungen:**
- Drehzahlmesser
- Positionssensoren
- Strommessung
- Magnetfeld-Messung
- Smartphone-Kompass

---

### 5. Elektronenmikroskop

**Prinzip:**
- Elektronen statt Licht
- Magnetische "Linsen" fokussieren Elektronenstrahl
- Viel höhere Auflösung als Lichtmikroskope

**Anwendung:**
- Biologie (Viren, Zellstrukturen)
- Materialwissenschaft (Nanomaterialien)
- Halbleiterindustrie

![Elektronenmikroskop](images/electron-microscope.jpg)

[Wie funktioniert ein Elektronenmikroskop?](https://www.youtube.com/watch?v=k_z8g1V5T0M)

## Historischer Kontext

### Wichtige Personen

**Hendrik Antoon Lorentz (1853-1928):**
- Niederländischer Physiker
- Nobelpreis 1902
- Formulierte die Lorentzkraft-Gleichung

**Edwin Hall (1855-1938):**
- Amerikanischer Physiker
- Entdeckte 1879 den Hall-Effekt
- Als Doktorand an der Johns Hopkins University

**J.J. Thomson (1856-1940):**
- Entdeckung des Elektrons (1897)
- Nutzte Lorentzkraft zur Bestimmung von e/m
- Nobelpreis 1906

### Zeitliche Entwicklung

**1820:** Ørsted entdeckt Zusammenhang Strom-Magnetfeld  
**1879:** Hall entdeckt Hall-Effekt  
**1892:** Lorentz formuliert Lorentzkraft-Gleichung  
**1897:** Thomson entdeckt Elektron  
**1912:** Millikan misst Elementarladung  
**1930er:** Entwicklung von Massenspektrometern  
**1950er:** Erste Hall-Sensoren  
**Heute:** Hall-Sensoren in Milliarden Geräten

## Zusammenfassung

### Die drei Schlüsselkonzepte:

**1. Lorentzkraft:**
- Gesamtkraft auf geladenes Teilchen in E- und B-Feld
- F = q · (E + v × B)
- Basis für alle elektromagnetischen Phänomene

**2. Hallspannung:**
- Quersspannung durch magnetische Ablenkung bewegter Ladungen
- U_H = (I · B) / (n · e · d)
- Anwendung: Sensoren, Materialcharakterisierung

**3. Elektronenbahn im Kondensator:**
- Parabelförmige Ablenkung durch elektrisches Feld
- y = (e · E · x²) / (2 · m · v_0²)
- Anwendung: Kathodenstrahlröhre, Teilchenbeschleuniger

### Wichtige Formeln auf einen Blick

| Phänomen | Formel | Bedeutung |
|----------|--------|-----------|
| Lorentzkraft | F = q(E + v×B) | Gesamtkraft |
| Elektrische Kraft | F_E = q·E | Nur E-Feld |
| Magnetische Kraft | F_B = q·v·B | Nur B-Feld |
| Hallspannung | U_H = (I·B)/(n·e·d) | Quersspannung |
| Kreisbahnradius | r = (m·v)/(q·B) | Teilchen im B-Feld |
| Elektronenbahn | y = (e·E·x²)/(2m·v₀²) | Parabel |

## Übungsaufgaben

### Aufgabe 1: Lorentzkraft

Ein Elektron bewegt sich mit v = 10⁶ m/s senkrecht zu einem Magnetfeld von B = 0,5 T.

**Gesucht:** Lorentzkraft

**Lösung:**
```
F = e · v · B
F = 1,6·10⁻¹⁹ C · 10⁶ m/s · 0,5 T
F = 8·10⁻¹⁴ N
```

---

### Aufgabe 2: Hallspannung

Durch ein Kupferplättchen (d = 0,1 mm) fließt ein Strom von I = 2 A. Das Magnetfeld beträgt B = 1 T.

Ladungsträgerdichte in Kupfer: n = 8,5·10²⁸ m⁻³

**Gesucht:** Hallspannung

**Lösung:**
```
U_H = (I · B) / (n · e · d)
U_H = (2 · 1) / (8,5·10²⁸ · 1,6·10⁻¹⁹ · 10⁻⁴)
U_H ≈ 1,5·10⁻⁶ V = 1,5 μV
```

---

### Aufgabe 3: Elektronenablenkung

Elektronen mit v₀ = 10⁷ m/s treten in einen Kondensator (U = 100 V, d = 2 cm, L = 5 cm).

**Gesucht:** Ablenkung am Austritt

**Lösung:**
```
y = (e · U · L²) / (2 · m · v₀² · d)
y = (1,6·10⁻¹⁹ · 100 · 0,05²) / (2 · 9,1·10⁻³¹ · 10¹⁴ · 0,02)
y ≈ 2,2 cm
```

## Fazit

Die **Lorentzkraft** ist ein fundamentales Konzept der Physik, das:

- Das Verhalten geladener Teilchen in Feldern beschreibt
- Grundlage zahlreicher technischer Anwendungen ist
- Von Sensoren bis zu Teilchenbeschleunigern reicht
- Elektrodynamik mit Mechanik verbindet

Die **Hallspannung** und die **Elektronenbahn im Kondensator** sind spezielle Anwendungen dieses allgemeinen Prinzips und zeigen, wie fundamental die Lorentzkraft für unser technologisches Zeitalter ist.

**Von Smartphones bis zur Grundlagenforschung am CERN – die Lorentzkraft ist überall!**
