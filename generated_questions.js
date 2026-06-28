window.GENERATED_QUESTIONS = [
  {
    "id": "g1",
    "sourceTitle": "Generált kérdés",
    "sourceDetail": "Algoritmus",
    "question": "Számítsuk ki az első n természetes szám összegét! Melyik a helyes hiányzó rész?",
    "questionLines": [
      "Számítsuk ki az első n természetes szám összegét! Melyik a helyes hiányzó rész?",
      "Algoritmus Osszeg(n):",
      "osszeg <- 0",
      "i <- 1",
      "hiányzó rész",
      "osszeg <- osszeg + i",
      "i <- i + 1",
      "vége(amíg)",
      "Ki: osszeg",
      "Vége(algoritmus)"
    ],
    "options": [
      { "id": "a", "text": "Amíg i < n végezd el:", "lines": ["Amíg i < n végezd el:"] },
      { "id": "b", "text": "Amíg i <= n végezd el:", "lines": ["Amíg i <= n végezd el:"] },
      { "id": "c", "text": "Amíg i = n végezd el:", "lines": ["Amíg i = n végezd el:"] },
      { "id": "d", "text": "Amíg i > n végezd el:", "lines": ["Amíg i > n végezd el:"] }
    ],
    "answer": "b"
  },
  {
    "id": "g2",
    "sourceTitle": "Generált kérdés",
    "sourceDetail": "Rekurzió",
    "question": "Adott n természetes szám. Számítsuk ki rekurzívan az n faktoriálist! Melyik a helyes hiányzó rész?",
    "questionLines": [
      "Adott n természetes szám. Számítsuk ki rekurzívan az n faktoriálist! Melyik a helyes hiányzó rész?",
      "Algoritmus Fakt(n):",
      "Ha n = 0 akkor",
      "Fakt <- 1",
      "különben",
      "hiányzó rész",
      "vége(ha)",
      "Vége(algoritmus)"
    ],
    "options": [
      { "id": "a", "text": "Fakt <- n + Fakt(n-1)", "lines": ["Fakt <- n + Fakt(n-1)"] },
      { "id": "b", "text": "Fakt <- n * Fakt(n-1)", "lines": ["Fakt <- n * Fakt(n-1)"] },
      { "id": "c", "text": "Fakt <- Fakt(n)", "lines": ["Fakt <- Fakt(n)"] },
      { "id": "d", "text": "Fakt <- n * Fakt(n+1)", "lines": ["Fakt <- n * Fakt(n+1)"] }
    ],
    "answer": "b"
  },
  {
    "id": "g3",
    "sourceTitle": "Generált kérdés",
    "sourceDetail": "Algoritmus",
    "question": "Adott n szám. Keressük meg közülük a legnagyobbat! Melyik a helyes hiányzó rész?",
    "questionLines": [
      "Adott n szám. Keressük meg közülük a legnagyobbat! Melyik a helyes hiányzó rész?",
      "Algoritmus Maximum(n):",
      "max <- x1",
      "i <- 2",
      "Amíg i <= n végezd el:",
      "Ha xi > max akkor",
      "hiányzó rész",
      "vége(ha)",
      "i <- i + 1",
      "vége(amíg)",
      "Ki: max",
      "Vége(algoritmus)"
    ],
    "options": [
      { "id": "a", "text": "max <- xi", "lines": ["max <- xi"] },
      { "id": "b", "text": "xi <- max", "lines": ["xi <- max"] },
      { "id": "c", "text": "max <- i", "lines": ["max <- i"] },
      { "id": "d", "text": "i <- max", "lines": ["i <- max"] }
    ],
    "answer": "a"
  },
  {
    "id": "g4",
    "sourceTitle": "Generált kérdés",
    "sourceDetail": "Algoritmus",
    "question": "Adott n egész szám. Számoljuk meg, hány páros van közöttük! Melyik feltétel helyes?",
    "options": [
      { "id": "a", "text": "maradék[szám/2] = 0", "lines": ["maradék[szám/2] = 0"] },
      { "id": "b", "text": "maradék[szám/2] = 1", "lines": ["maradék[szám/2] = 1"] },
      { "id": "c", "text": "szám / 2 = 0", "lines": ["szám / 2 = 0"] },
      { "id": "d", "text": "szám < 2", "lines": ["szám < 2"] }
    ],
    "answer": "a"
  },
  {
    "id": "g5",
    "sourceTitle": "Generált kérdés",
    "sourceDetail": "Algoritmus",
    "question": "Bináris keresésnél meddig folytatjuk a keresést rendezett sorozatban?",
    "options": [
      { "id": "a", "text": "Amíg bal < jobb végezd el:", "lines": ["Amíg bal < jobb végezd el:"] },
      { "id": "b", "text": "Amíg bal <= jobb végezd el:", "lines": ["Amíg bal <= jobb végezd el:"] },
      { "id": "c", "text": "Amíg bal = jobb végezd el:", "lines": ["Amíg bal = jobb végezd el:"] },
      { "id": "d", "text": "Amíg bal > jobb végezd el:", "lines": ["Amíg bal > jobb végezd el:"] }
    ],
    "answer": "b"
  },
  {
    "id": "g6",
    "sourceTitle": "Generált kérdés",
    "sourceDetail": "UML",
    "question": "Melyik osztály sztereotípia UML-ben?",
    "options": [
      { "id": "a", "text": "<<include>>", "lines": ["<<include>>"] },
      { "id": "b", "text": "<<extend>>", "lines": ["<<extend>>"] },
      { "id": "c", "text": "<<entity>>", "lines": ["<<entity>>"] },
      { "id": "d", "text": "<<uses>>", "lines": ["<<uses>>"] }
    ],
    "answer": "c"
  },
  {
    "id": "g7",
    "sourceTitle": "Generált kérdés",
    "sourceDetail": "UML",
    "question": "Use case diagramon melyik kapcsolat jelzi, hogy egy eset mindig felhasznál egy másikat?",
    "options": [
      { "id": "a", "text": "<<include>>", "lines": ["<<include>>"] },
      { "id": "b", "text": "<<extend>>", "lines": ["<<extend>>"] },
      { "id": "c", "text": "<<entity>>", "lines": ["<<entity>>"] },
      { "id": "d", "text": "<<boundary>>", "lines": ["<<boundary>>"] }
    ],
    "answer": "a"
  },
  {
    "id": "g8",
    "sourceTitle": "Generált kérdés",
    "sourceDetail": "UML",
    "question": "A szekvencia diagramban az üzenetküldés egyik típusa lehet:",
    "options": [
      { "id": "a", "text": "aszinkron", "lines": ["aszinkron"] },
      { "id": "b", "text": "particionált", "lines": ["particionált"] },
      { "id": "c", "text": "relációs", "lines": ["relációs"] },
      { "id": "d", "text": "normalizált", "lines": ["normalizált"] }
    ],
    "answer": "a"
  },
  {
    "id": "g9",
    "sourceTitle": "Generált kérdés",
    "sourceDetail": "UML",
    "question": "UML osztálydiagramon melyik jelöli a private láthatóságot?",
    "options": [
      { "id": "a", "text": "+", "lines": ["+"] },
      { "id": "b", "text": "-", "lines": ["-"] },
      { "id": "c", "text": "#", "lines": ["#"] },
      { "id": "d", "text": "~", "lines": ["~"] }
    ],
    "answer": "b"
  },
  {
    "id": "g10",
    "sourceTitle": "Generált kérdés",
    "sourceDetail": "UML",
    "question": "Aktivitásdiagramon a döntést általában melyik alakzat jelöli?",
    "options": [
      { "id": "a", "text": "téglalap", "lines": ["téglalap"] },
      { "id": "b", "text": "rombusz", "lines": ["rombusz"] },
      { "id": "c", "text": "ellipszis", "lines": ["ellipszis"] },
      { "id": "d", "text": "háromszög", "lines": ["háromszög"] }
    ],
    "answer": "b"
  },
  {
    "id": "g11",
    "sourceTitle": "Generált kérdés",
    "sourceDetail": "Adatbázis",
    "question": "Melyik állítás nem igaz az elsődleges kulcsra?",
    "options": [
      { "id": "a", "text": "Egyedileg azonosítja a sort.", "lines": ["Egyedileg azonosítja a sort."] },
      { "id": "b", "text": "Nem lehet NULL értékű.", "lines": ["Nem lehet NULL értékű."] },
      { "id": "c", "text": "Lehet összetett kulcs is.", "lines": ["Lehet összetett kulcs is."] },
      { "id": "d", "text": "Értéke lehet NULL vagy üres.", "lines": ["Értéke lehet NULL vagy üres."] }
    ],
    "answer": "d"
  },
  {
    "id": "g12",
    "sourceTitle": "Generált kérdés",
    "sourceDetail": "Adatbázis",
    "question": "Mikor nincs egy reláció 2NF-ben?",
    "options": [
      { "id": "a", "text": "Ha parciális függés van benne.", "lines": ["Ha parciális függés van benne."] },
      { "id": "b", "text": "Ha nincs benne idegen kulcs.", "lines": ["Ha nincs benne idegen kulcs."] },
      { "id": "c", "text": "Ha minden attribútum atomi.", "lines": ["Ha minden attribútum atomi."] },
      { "id": "d", "text": "Ha van elsődleges kulcsa.", "lines": ["Ha van elsődleges kulcsa."] }
    ],
    "answer": "a"
  },
  {
    "id": "g13",
    "sourceTitle": "Generált kérdés",
    "sourceDetail": "SQL",
    "question": "Melyik SELECT paranccsal számíthatjuk ki a második féléves jegyek átlagát?",
    "options": [
      { "id": "a", "text": "SELECT COUNT(Jegy) FROM Jegyek WHERE Felev=2", "lines": ["SELECT COUNT(Jegy) FROM Jegyek WHERE Felev=2"] },
      { "id": "b", "text": "SELECT AVG(Jegy) FROM Jegyek WHERE Felev=2", "lines": ["SELECT AVG(Jegy) FROM Jegyek WHERE Felev=2"] },
      { "id": "c", "text": "SELECT SUM(*) FROM Jegyek WHERE Felev=2", "lines": ["SELECT SUM(*) FROM Jegyek WHERE Felev=2"] },
      { "id": "d", "text": "SELECT * FROM Jegyek AVG Felev=2", "lines": ["SELECT * FROM Jegyek AVG Felev=2"] }
    ],
    "answer": "b"
  },
  {
    "id": "g14",
    "sourceTitle": "Generált kérdés",
    "sourceDetail": "Adatbázis",
    "question": "Az ACID tulajdonságok közül mit jelent a D (durability)?",
    "options": [
      { "id": "a", "text": "A tranzakció műveletei egységet alkotnak.", "lines": ["A tranzakció műveletei egységet alkotnak."] },
      { "id": "b", "text": "A tranzakciók egymástól elszigetelten futnak.", "lines": ["A tranzakciók egymástól elszigetelten futnak."] },
      { "id": "c", "text": "COMMIT után a módosítások véglegesek.", "lines": ["COMMIT után a módosítások véglegesek."] },
      { "id": "d", "text": "Az adatbázis helyes állapotból helyes állapotba kerül.", "lines": ["Az adatbázis helyes állapotból helyes állapotba kerül."] }
    ],
    "answer": "c"
  },
  {
    "id": "g15",
    "sourceTitle": "Generált kérdés",
    "sourceDetail": "Adatbázis",
    "question": "Mikor léphet fel az elveszett módosítás problémája?",
    "options": [
      { "id": "a", "text": "Ha két tranzakció ugyanazt az adategységet módosítja.", "lines": ["Ha két tranzakció ugyanazt az adategységet módosítja."] },
      { "id": "b", "text": "Ha egy tranzakció csak olvas.", "lines": ["Ha egy tranzakció csak olvas."] },
      { "id": "c", "text": "Ha nincs egyetlen tábla sem az adatbázisban.", "lines": ["Ha nincs egyetlen tábla sem az adatbázisban."] },
      { "id": "d", "text": "Ha minden tranzakció sorban fut.", "lines": ["Ha minden tranzakció sorban fut."] }
    ],
    "answer": "a"
  },
  {
    "id": "g16",
    "sourceTitle": "Generált kérdés",
    "sourceDetail": "Java",
    "question": "Melyik állítás igaz Java konstruktorra?",
    "options": [
      { "id": "a", "text": "A konstruktor neve megegyezik az osztály nevével.", "lines": ["A konstruktor neve megegyezik az osztály nevével."] },
      { "id": "b", "text": "A konstruktor mindig void típusú.", "lines": ["A konstruktor mindig void típusú."] },
      { "id": "c", "text": "A konstruktor csak static lehet.", "lines": ["A konstruktor csak static lehet."] },
      { "id": "d", "text": "A konstruktor neve tetszőleges.", "lines": ["A konstruktor neve tetszőleges."] }
    ],
    "answer": "a"
  },
  {
    "id": "g17",
    "sourceTitle": "Generált kérdés",
    "sourceDetail": "Java",
    "question": "Legyen: public static final int MAX = 10; Melyik állítás igaz?",
    "options": [
      { "id": "a", "text": "A MAX példányszintű adattag.", "lines": ["A MAX példányszintű adattag."] },
      { "id": "b", "text": "A MAX osztályszintű konstans.", "lines": ["A MAX osztályszintű konstans."] },
      { "id": "c", "text": "A MAX csak konstruktorban használható.", "lines": ["A MAX csak konstruktorban használható."] },
      { "id": "d", "text": "A MAX értéke kötelezően NULL.", "lines": ["A MAX értéke kötelezően NULL."] }
    ],
    "answer": "b"
  },
  {
    "id": "g18",
    "sourceTitle": "Generált kérdés",
    "sourceDetail": "Java",
    "question": "Mit jelent a private hozzáférési módosító Javaban?",
    "options": [
      { "id": "a", "text": "Csak az aktuális osztályból érhető el közvetlenül.", "lines": ["Csak az aktuális osztályból érhető el közvetlenül."] },
      { "id": "b", "text": "Minden osztályból elérhető.", "lines": ["Minden osztályból elérhető."] },
      { "id": "c", "text": "Csak HTML-ben használható.", "lines": ["Csak HTML-ben használható."] },
      { "id": "d", "text": "Csak adatbázis táblában használható.", "lines": ["Csak adatbázis táblában használható."] }
    ],
    "answer": "a"
  },
  {
    "id": "g19",
    "sourceTitle": "Generált kérdés",
    "sourceDetail": "Java",
    "question": "Melyik egy publikus, absztrakt metódus helyes deklarációja Javaban?",
    "options": [
      { "id": "a", "text": "public abstract void add();", "lines": ["public abstract void add();"] },
      { "id": "b", "text": "abstract public add void();", "lines": ["abstract public add void();"] },
      { "id": "c", "text": "public void abstract add();", "lines": ["public void abstract add();"] },
      { "id": "d", "text": "void public abstract add;", "lines": ["void public abstract add;"] }
    ],
    "answer": "a"
  },
  {
    "id": "g20",
    "sourceTitle": "Generált kérdés",
    "sourceDetail": "Java",
    "question": "A leszármazott osztály konstruktorában hova kell írni a szülőosztály konstruktorának hívását?",
    "options": [
      { "id": "a", "text": "a konstruktor első sorába", "lines": ["a konstruktor első sorába"] },
      { "id": "b", "text": "a konstruktor utolsó sorába", "lines": ["a konstruktor utolsó sorába"] },
      { "id": "c", "text": "az osztályon kívülre", "lines": ["az osztályon kívülre"] },
      { "id": "d", "text": "csak a main metódusba", "lines": ["csak a main metódusba"] }
    ],
    "answer": "a"
  },
  {
    "id": "g21",
    "sourceTitle": "Generált kérdés",
    "sourceDetail": "PHP",
    "question": "Hogyan érhetjük el PHP-ben egy GET metódussal küldött form mezőjét?",
    "options": [
      { "id": "a", "text": "$_POST[\"nev\"]", "lines": ["$_POST[\"nev\"]"] },
      { "id": "b", "text": "$_GET[\"nev\"]", "lines": ["$_GET[\"nev\"]"] },
      { "id": "c", "text": "$GET->nev", "lines": ["$GET->nev"] },
      { "id": "d", "text": "getField(\"nev\")", "lines": ["getField(\"nev\")"] }
    ],
    "answer": "b"
  },
  {
    "id": "g22",
    "sourceTitle": "Generált kérdés",
    "sourceDetail": "PHP",
    "question": "Hogyan hozhatunk létre cookie állományt PHP kódból?",
    "options": [
      { "id": "a", "text": "setcookie()", "lines": ["setcookie()"] },
      { "id": "b", "text": "createcookie()", "lines": ["createcookie()"] },
      { "id": "c", "text": "new Cookie()", "lines": ["new Cookie()"] },
      { "id": "d", "text": "cookie_set_html()", "lines": ["cookie_set_html()"] }
    ],
    "answer": "a"
  },
  {
    "id": "g23",
    "sourceTitle": "Generált kérdés",
    "sourceDetail": "PHP",
    "question": "Melyik helyes tömb létrehozás PHP-ben?",
    "options": [
      { "id": "a", "text": "$cars = array(\"Volvo\", \"BMW\", \"Toyota\");", "lines": ["$cars = array(\"Volvo\", \"BMW\", \"Toyota\");"] },
      { "id": "b", "text": "$cars = list{\"Volvo\", \"BMW\"};", "lines": ["$cars = list{\"Volvo\", \"BMW\"};"] },
      { "id": "c", "text": "$cars := array(\"Volvo\");", "lines": ["$cars := array(\"Volvo\");"] },
      { "id": "d", "text": "array cars = (\"Volvo\");", "lines": ["array cars = (\"Volvo\");"] }
    ],
    "answer": "a"
  },
  {
    "id": "g24",
    "sourceTitle": "Generált kérdés",
    "sourceDetail": "PHP",
    "question": "Melyik PHP sor hozhat létre MySQLi kapcsolatot objektumorientált módon?",
    "options": [
      { "id": "a", "text": "$conn = new mysqli($servername, $username, $password);", "lines": ["$conn = new mysqli($servername, $username, $password);"] },
      { "id": "b", "text": "$conn = new mysql_connect($servername);", "lines": ["$conn = new mysql_connect($servername);"] },
      { "id": "c", "text": "$conn = mysqli new connect();", "lines": ["$conn = mysqli new connect();"] },
      { "id": "d", "text": "$conn = connect.html($servername);", "lines": ["$conn = connect.html($servername);"] }
    ],
    "answer": "a"
  },
  {
    "id": "g25",
    "sourceTitle": "Generált kérdés",
    "sourceDetail": "HTML",
    "question": "Egy HTML formban melyik elem szolgál legördülő lista létrehozására?",
    "options": [
      { "id": "a", "text": "<input>", "lines": ["<input>"] },
      { "id": "b", "text": "<select>", "lines": ["<select>"] },
      { "id": "c", "text": "<textarea>", "lines": ["<textarea>"] },
      { "id": "d", "text": "<button>", "lines": ["<button>"] }
    ],
    "answer": "b"
  },
  {
    "id": "g26",
    "sourceTitle": "Generált kérdés",
    "sourceDetail": "CSS",
    "question": "Hogyan tudunk CSS-ben elemet id alapján kiválasztani?",
    "options": [
      { "id": "a", "text": ".demo", "lines": [".demo"] },
      { "id": "b", "text": "#demo", "lines": ["#demo"] },
      { "id": "c", "text": "demo()", "lines": ["demo()"] },
      { "id": "d", "text": "<demo>", "lines": ["<demo>"] }
    ],
    "answer": "b"
  },
  {
    "id": "g27",
    "sourceTitle": "Generált kérdés",
    "sourceDetail": "CSS",
    "question": "Melyik osztály alapú kiválasztó CSS-ben?",
    "options": [
      { "id": "a", "text": "#teszt", "lines": ["#teszt"] },
      { "id": "b", "text": ".teszt", "lines": [".teszt"] },
      { "id": "c", "text": "<teszt>", "lines": ["<teszt>"] },
      { "id": "d", "text": "$teszt", "lines": ["$teszt"] }
    ],
    "answer": "b"
  },
  {
    "id": "g28",
    "sourceTitle": "Generált kérdés",
    "sourceDetail": "HTML",
    "question": "Melyik helyes HTML sor egy kép beillesztésére?",
    "options": [
      { "id": "a", "text": "<img src=\"image.jpg\" alt=\"MyImage\">", "lines": ["<img src=\"image.jpg\" alt=\"MyImage\">"] },
      { "id": "b", "text": "<image href=\"image.jpg\">", "lines": ["<image href=\"image.jpg\">"] },
      { "id": "c", "text": "<pic src=\"image.jpg\">", "lines": ["<pic src=\"image.jpg\">"] },
      { "id": "d", "text": "<img>image.jpg</img>", "lines": ["<img>image.jpg</img>"] }
    ],
    "answer": "a"
  },
  {
    "id": "g29",
    "sourceTitle": "Generált kérdés",
    "sourceDetail": "HTML",
    "question": "Melyik attribútum jelzi HTML-ben, hogy egy form mezőt kötelező kitölteni?",
    "options": [
      { "id": "a", "text": "placeholder", "lines": ["placeholder"] },
      { "id": "b", "text": "required", "lines": ["required"] },
      { "id": "c", "text": "validate", "lines": ["validate"] },
      { "id": "d", "text": "must", "lines": ["must"] }
    ],
    "answer": "b"
  },
  {
    "id": "g30",
    "sourceTitle": "Generált kérdés",
    "sourceDetail": "HTML/CSS",
    "question": "Melyik helyes HTML szintaxis egy külső CSS fájl belinkelésére?",
    "options": [
      { "id": "a", "text": "<link rel=\"stylesheet\" href=\"mystyle.css\">", "lines": ["<link rel=\"stylesheet\" href=\"mystyle.css\">"] },
      { "id": "b", "text": "<style src=\"mystyle.css\">", "lines": ["<style src=\"mystyle.css\">"] },
      { "id": "c", "text": "<css href=\"mystyle.css\">", "lines": ["<css href=\"mystyle.css\">"] },
      { "id": "d", "text": "<script rel=\"stylesheet\" href=\"mystyle.css\">", "lines": ["<script rel=\"stylesheet\" href=\"mystyle.css\">"] }
    ],
    "answer": "a"
  }
];
