// Quiz data - 100 questions from all 6 courses
const quizData = [
    { id: 1, course: "Curs 1", question: "Ce este DBA (Database Administration)?", correct: "Funcția de gestionare, întreținere și securizare a bazelor de date", wrong: ["Departamentul de Backup și Arhivare", "Data Block Allocator - componentă hardware", "Sistem de Disaster Recovery Assistant"] },
    { id: 2, course: "Curs 1", question: "Ce sunt procesele de background obligatorii în Oracle?", correct: "DBWn, LGWR, CKPT, SMON și PMON", wrong: ["DBWR, LGWN, CHECKPOINT, SYSTEM, PROCESS", "Database Writer, Log Generator, Cluster, System Monitor", "DBBACKUP, LOGWRITE, CONTROL, SYSTEM"] },
    { id: 3, course: "Curs 1", question: "Ce este SGA (System Global Area)?", correct: "Zonă de memorie partajată care conține date și informații de control", wrong: ["Storage and Growth Allocation - spațiu pe disc", "System General Archive - fișiere de arhivă", "Session Global Area - memorie sesiune"] },
    { id: 4, course: "Curs 1", question: "Care sunt componentele principale ale SGA?", correct: "Buffer Cache, Redo Log Buffer, Shared Pool", wrong: ["Data Dictionary, File Managers, Process Control", "User Memory, System Memory, Archive Memory", "CPU Cache, RAM Cache, Storage Cache"] },
    { id: 5, course: "Curs 1", question: "Ce este PGA (Program Global Area)?", correct: "Regiune de memorie privată alocată pentru fiecare proces de server", wrong: ["Program Global Archive - copie de siguranță", "Persistent Global Array - structură de date globală", "Public Grant Authority - permisiuni utilizator"] },
    { id: 6, course: "Curs 1", question: "Ce face procesul DBWn (Database Writer)?", correct: "Scrie blocurile de date modificate din buffer-e pe disc", wrong: ["Citește fișierele de date din disc în buffer", "Gestionează undo și rollback segments", "Monitorizează performanța bazei de date"] },
    { id: 7, course: "Curs 1", question: "Ce face procesul LGWR (Log Writer)?", correct: "Scrie datele din Redo Log Buffer pe disc", wrong: ["Citește liniile din fișierele de date", "Comprimează fișierele jurnal", "Gestionează sesiunile utilizatorilor"] },
    { id: 8, course: "Curs 1", question: "Ce face procesul SMON (System Monitor)?", correct: "Face verificarea consistenței datelor și recuperarea după incident", wrong: ["Monitorizează doar conexiunile de rețea", "Gestionează securitatea și autentificarea", "Optimizează cereri SQL"] },
    { id: 9, course: "Curs 1", question: "Ce este o Sesiune în Oracle?", correct: "O conexiune a unui user cu serverul Oracle prin procesul server", wrong: ["O tranzacție completă de date", "Un fișier jurnal de activitate", "Un segment de memorie alocate"] },
    { id: 10, course: "Curs 1", question: "Ce sunt fișierele de control?", correct: "Fișiere binare esențiale care înregistrează structura fizică a BD", wrong: ["Fișiere de configurare în format text", "Copii de siguranță ale tabelelor", "Fișiere cu drepturi de acces"] },
    { id: 11, course: "Curs 1", question: "Care este rolul fișierelor Redo Log?", correct: "Conțin modificările făcute în BD necesare la recuperare", wrong: ["Stochează rezultatele cererilor SELECT", "Conțin copii necompresate ale tabelelor", "Gestionează permisiunile utilizatorilor"] },
    { id: 12, course: "Curs 1", question: "Ce algoritm folosește Oracle pentru gestionarea Buffer Cache?", correct: "LRU (Least Recently Used)", wrong: ["FIFO (First In First Out)", "MRU (Most Recently Used)", "Random Access Management"] },
    { id: 13, course: "Curs 1", question: "Ce este un Segment de Rollback?", correct: "Structură care stochează imaginile anterioare ale datelor", wrong: ["Un fel de cache pentru date volatile", "O copie compresată a tabelelor", "Un index special pentru undo operații"] },
    { id: 14, course: "Curs 1", question: "Ce este Library Cache?", correct: "Componentă din Shared Pool care stochează instrucțiuni SQL și PL/SQL", wrong: ["O bibliotecă de fișiere Oracle pe disc", "Cache separat doar pentru indecși", "Spațiu pentru variabile locale ale proceselor"] },
    { id: 15, course: "Curs 1", question: "Ce se întâmplă la COMMIT în Oracle?", correct: "Tranzacția este marcată completă și resursele sunt eliberate", wrong: ["Datele sunt permanent șterse din BD", "Sessiunea utilizatorului se termină", "Un checkpoint automat se inițiază"] },
    { id: 16, course: "Curs 2", question: "Cine este utilizatorul SYS?", correct: "Proprietar al BD și al dicționarului de date cu privilegiu SYSDBA", wrong: ["Utilizator standard pentru aplicații", "Cont creat automat pentru system calls", "Utilizator invitat cu drepturi de citire"] },
    { id: 17, course: "Curs 2", question: "Cine este utilizatorul SYSTEM?", correct: "Are rolul DBA și este proprietar al tabelelor de sistem Oracle", wrong: ["Același lucru ca SYS", "Utilizator pentru backup și restore", "Cont special pentru conexiuni externe"] },
    { id: 18, course: "Curs 2", question: "Ce este privilegiul SYSDBA?", correct: "Privilegiu special pentru operațiuni de administrare puternice", wrong: ["Aceluași lucru cu rolul DBA", "O legalizare pentru acces la fișiere", "Un tip de index special"] },
    { id: 19, course: "Curs 2", question: "Care sunt cele 3 etape de pornire a unei BD?", correct: "STARTUP, MOUNT și OPEN", wrong: ["CREATE, INITIALIZE, ACTIVATE", "LOAD, PARSE, EXECUTE", "CONNECT, AUTHENTICATE, ENABLE"] },
    { id: 20, course: "Curs 2", question: "Ce se întâmplă în etapa MOUNT?", correct: "Se citesc fișierele de control și se localizează fisierele de date", wrong: ["Se deschid tabelele utilizatorilor", "Se inițializează buffer-ele de memorie", "Se conectează utilizatorii la bază"] },
    { id: 21, course: "Curs 2", question: "Ce se întâmplă în etapa OPEN?", correct: "Se deschid fișierele de date și Redo Log, BD e disponibilă", wrong: ["Se creează noi fișiere de control", "Se resetează parametrii de inițializare", "Se comprimează fișierele jurnal"] },
    { id: 22, course: "Curs 2", question: "Ce operații sunt permise în starea NOMOUNT?", correct: "Crearea BD, Recrearea fișierelor de control", wrong: ["INSERT, UPDATE, DELETE pe tabele", "Backup-ul complet al BD", "Modificarea schemelor utilizatorilor"] },
    { id: 23, course: "Curs 2", question: "Ce operații sunt permise în starea MOUNT?", correct: "Redenumirea fisierelor de date, Restaurarea BD", wrong: ["SELECT, INSERT, UPDATE pe tabele", "Conectarea utilizatorilor normali", "Executarea procedurilor stocate"] },
    { id: 24, course: "Curs 2", question: "Ce este oprire normală?", correct: "Se așteaptă deconectarea tuturor utilizatorilor, nu e nevoie de recovery", wrong: ["Se opresc imediat toate cererile", "Se șirul și undo-ul activ e pierdut", "BD intră în mode restricted"] },
    { id: 25, course: "Curs 2", question: "Ce este oprire tip ABORT?", correct: "Se oprește instanța fără inchiderea fisierelor, necesită recovery", wrong: ["Același lucru cu SHUTDOWN IMMEDIATE", "Ștergerea tuturor fișierelor BD", "Deconexiunea bruscă a utilizatorilor"] },
    { id: 26, course: "Curs 2", question: "Ce sunt vederile dinamice V$?", correct: "Tabele de sistem cu date despre performanțe accesibile administratorului", wrong: ["Vizualizări ale datelor utilizatorilor", "Cache-uri pentru optimizare cereri", "Copii de siguranță ale tabelelor"] },
    { id: 27, course: "Curs 2", question: "Ce informații afișează V$SESSION?", correct: "Informații despre fiecare sesiune curentă: utilizator, status, resurse", wrong: ["Starea tuturor fișierelor de date", "Istoricul comenzilor SQL executate", "Priviligiile utilizatorilor activi"] },
    { id: 28, course: "Curs 2", question: "Ce este o sesiune RESTRICTED?", correct: "Mod în care doar utilizatorii cu RESTRICTED SESSION pot se conecta", wrong: ["O sesiune cu permisiuni limitate de SELECT", "O sesiune care nu poate folosi indecși", "O sesiune temporară care expira rapid"] },
    { id: 29, course: "Curs 2", question: "Cum se inchide o sesiune în Oracle?", correct: "ALTER SYSTEM KILL SESSION 'SID,SERIAL#';", wrong: ["DROP SESSION 'username';", "DISCONNECT SESSION 'SID';", "TERMINATE PROCESS 'SID';"] },
    { id: 30, course: "Curs 2", question: "Ce se întâmplă când se inchide o sesiune?", correct: "Se anulează tranzacția curentă și se eliberează resursele", wrong: ["BD se oprește complet", "Toți utilizatorii sunt deconectați", "Fișierele de date sunt compactate"] },
    { id: 31, course: "Curs 3", question: "Ce informații conține fișierul de control?", correct: "Numele BD, locația fisierelor de date și Redo Log, informații checkpoint", wrong: ["Datele utilizatorilor și tabelele principale", "Codul sursă al procedurilor stocate", "Istoricul tuturor cererilor executate"] },
    { id: 32, course: "Curs 3", question: "Câte copii ale fișierului de control ar trebui să existe?", correct: "Minimum 2 copii exploatate în paralel (multiplexate)", wrong: ["Doar o copie pe disc principal", "4-5 copii pentru siguranță maximă", "Cât mai multe copii pe toate discurile"] },
    { id: 33, course: "Curs 3", question: "Ce este parametrul CONTROL_FILES?", correct: "Parametru din init.ora cu listă de nume de fisiere de control", wrong: ["O variabilă de mediu pentru locația controlului", "Un parametru din fișierul de configurare SQL", "O comandă SQL pentru backup control files"] },
    { id: 34, course: "Curs 3", question: "Ce este un grup de Redo Log?", correct: "Fișierele Redo Log sunt împărțite în grupuri cu membri (fișiere)", wrong: ["O colecție de segmente de undo", "Un tip special de index pe fișierele de jurnal", "O grupare de tabele temporare"] },
    { id: 35, course: "Curs 3", question: "Ce rolul multiplexării în Redo Log?", correct: "Protejează împotriva pierderii de date dacă un fișier e pierdut", wrong: ["Comprimează fișierele jurnal pentru economie spațiu", "Permite paralelizarea cererilor SQL", "Crește viteza de scriere pe disc"] },
    { id: 36, course: "Curs 3", question: "Câte grupuri de Redo Log sunt necesare minimum?", correct: "Minimum 2 grupuri pentru operarea normală", wrong: ["Doar 1 grup suficient pentru funcționalitate", "Minimum 3 grupuri pentru redundanță", "Fiecare tabel are propriul grup"] },
    { id: 37, course: "Curs 3", question: "Când scrie LGWR în fișierele Redo Log?", correct: "La COMMIT, când buffer plin, la timeout, înainte ca DBWR să scrie", wrong: ["Numai la final de zi sau pe program", "Doar când disperul de date este plin", "La fiecare SELECT executată"] },
    { id: 38, course: "Curs 3", question: "Ce este log switch?", correct: "Schimbarea de la un fisier Redo Log la următorul când se umple", wrong: ["O operație de comutare între BD", "Un tip de index special pentru jurnal", "Un parametru de configurare sistem"] },
    { id: 39, course: "Curs 3", question: "Ce se întâmplă la fiecare log switch?", correct: "Se asociază un nou număr de secvență și se inițiază Checkpoint", wrong: ["Se resetează Buffer Cache complet", "Se comprimează fișierul Redo Log vechi", "Se șterge fișierul Redo Log anterior"] },
    { id: 40, course: "Curs 3", question: "Cum se forțează un log switch?", correct: "ALTER SYSTEM SWITCH LOGFILE;", wrong: ["ALTER SYSTEM CHECKPOINT;", "SWITCH ONLINE LOGFILE;", "ALTER LOG SWITCH FORCE;"] },
    { id: 41, course: "Curs 3", question: "Ce este un Checkpoint?", correct: "Proces care scrie date modificate pe disc și reduce timp de recovery", wrong: ["Un punct de control pentru accesul utilizatorilor", "Un marcaj pentru începerea unei tranzacții", "O verificare a integrității fișierelor"] },
    { id: 42, course: "Curs 3", question: "Cum se forțează manual un Checkpoint?", correct: "ALTER SYSTEM CHECKPOINT;", wrong: ["ALTER DATABASE CHECKPOINT;", "FORCE CHECKPOINT;", "ALTER INSTANCE CHECKPOINT;"] },
    { id: 43, course: "Curs 3", question: "Care sunt stările unui fișier Redo Log?", correct: "CURRENT, ACTIVE, INACTIVE, UNUSED", wrong: ["OPEN, CLOSED, DELETED, ARCHIVED", "NEW, ACTIVE, FILLED, ARCHIVED", "PRIMARY, SECONDARY, TERTIARY, UNUSED"] },
    { id: 44, course: "Curs 3", question: "Ce este arhivarea fișierelor Redo Log?", correct: "Salvare de copii ale fisierelor Redo Log active înainte de suprascris", wrong: ["Compresie și stocaj pe disc lent", "Ștergere fisierelor jurnal vechi", "Backup-ul complet al tabelelor"] },
    { id: 45, course: "Curs 3", question: "Care este diferența dintre NOARCHIVELOG și ARCHIVELOG?", correct: "NOARCHIVELOG: rescrierea fisierelor, ARCHIVELOG: copiere înainte", wrong: ["NOARCHIVELOG e mai rapid, ARCHIVELOG e mai sigur", "ARCHIVELOG e opțiunea implicită în toate sistemele", "Sunt parametri pentru diferite versiuni Oracle"] },
    { id: 46, course: "Curs 4", question: "Ce este un tablespace în Oracle?", correct: "Un container logic pentru stocarea datelor asociat cu fișiere fizice", wrong: ["Un bloc fizic pe disc", "O partiție a unui indecș", "Un tip de fișier de backup"] },
    { id: 47, course: "Curs 4", question: "Cum este structurată o bază de date Oracle?", correct: "Tablespace → Segment → Extent → Bloc", wrong: ["Bloc → Extent → Segment → Tablespace", "File → Partition → Record → Block", "Database → Table → Row → Column"] },
    { id: 48, course: "Curs 4", question: "Ce sunt segmentele în Oracle?", correct: "Obiecte care conțin o structură logică (tabel, index, etc.)", wrong: ["Blocuri fizice consecutive pe disc", "Fișiere separate pentru fiecare tabelă", "Zone de memorie din SGA"] },
    { id: 49, course: "Curs 4", question: "Ce este o extensie (extent)?", correct: "O succesiune contigă de blocuri de date logice", wrong: ["Un index pe o coloană", "Un tip de constrângere de integritate", "Un segment de umdo/rollback"] },
    { id: 50, course: "Curs 4", question: "Ce este un bloc (block) în Oracle?", correct: "Cea mai mică unitate de I/O cu dimensiune DB_BLOCK_SIZE", wrong: ["Cel mai mare conținător de date", "Un rând din tabelă", "O coloană din tabel"] },
    { id: 51, course: "Curs 4", question: "Ce este tablespace-ul SYSTEM?", correct: "Creat automat, conține dicționarul de date și segmentul rollback", wrong: ["Tablespace pentru date utilizator", "Tablespace temporar pentru sortări", "Tablespace pentru undo/rollback"] },
    { id: 52, course: "Curs 4", question: "Ce tipuri de tablespace-uri există?", correct: "Permanent, Temporary, Undo", wrong: ["System, User, Temporary", "Online, Offline, Archived", "Primary, Secondary, Backup"] },
    { id: 53, course: "Curs 4", question: "Ce este DMT și LMT?", correct: "DMT: Dictionary Managed, LMT: Locally Managed (mai eficient)", wrong: ["Dynamic Memory Table și Long-term Memory Table", "Data Management Tier și Logical Memory Table", "Distributed Management Table și Linear Memory Table"] },
    { id: 54, course: "Curs 4", question: "Ce este AUTOALLOCATE în gestiunea extensiilor?", correct: "Opțiune LMT cu extensii de dimensiuni diferite gestionate automat", wrong: ["Alocare manuală de extensii de dimensiune fixă", "Compresie automată a datelor", "Creștere automată a DB_BLOCK_SIZE"] },
    { id: 55, course: "Curs 4", question: "Ce este UNIFORM în gestiunea extensiilor?", correct: "Opțiune LMT cu extensii de dimensiune fixă", wrong: ["Distribuție uniformă a datelor pe discuri", "Indexare uniformă pe toate tabelele", "Alocare uniformă de buffer-uri memorie"] },
    { id: 56, course: "Curs 4", question: "Ce face AUTOEXTEND în CREATE TABLESPACE?", correct: "Permite extinderea automată a fisierelor cu increment NEXT", wrong: ["Schimbă dimensiunea unui bloc", "Aplică compresie datelor", "Crește DB_BLOCK_SIZE automat"] },
    { id: 57, course: "Curs 4", question: "Cum se adaugă un nou fișier de date la tablespace?", correct: "ALTER TABLESPACE user ADD DATAFILE '/path/file.dbf' SIZE 50M;", wrong: ["CREATE DATAFILE user ADD FILE '/path/file.dbf';", "ALTER DATABASE ADD FILE user '/path/file.dbf';", "ADD TABLESPACE DATAFILE user SIZE 50M;"] },
    { id: 58, course: "Curs 4", question: "Ce moduri există pentru OFFLINE tablespace?", correct: "NORMAL, TEMPORARY, IMMEDIATE", wrong: ["READ ONLY, READ WRITE, SUSPEND", "FAST, SLOW, MEDIUM", "ARCHIVE, BACKUP, RECOVERY"] },
    { id: 59, course: "Curs 4", question: "Ce face DROP TABLESPACE?", correct: "Șterge tablespace-ul, INCLUDING CONTENTS șterge și datele", wrong: ["Pune tablespace-ul în mode offline", "Compactează datele din tablespace", "Adaugă mai mult spațiu tablespace-ului"] },
    { id: 60, course: "Curs 4", question: "Ce informații oferă vederea DBA_TABLESPACES?", correct: "Nume, conținut, status, extent management, segment space management", wrong: ["Lista tuturor rândurilor din tabele", "Informații despre utilizatori și privilegii", "Statistici de performanță pentru cereri"] },
    { id: 61, course: "Curs 5", question: "Ce sunt tabelele heap-organized?", correct: "Tip de bază uzual, date neordonat în spațiu disponibil", wrong: ["Tabele organizate ca un heap de memorie", "Tabele cu toate datele sortate pe cheie", "Tabele pentru date temporare doar"] },
    { id: 62, course: "Curs 5", question: "Ce sunt tabelele partitionate?", correct: "Tabelele împărțite în mai multe partiții gestionate separat", wrong: ["Tabelele cu o singură partiție", "Tabele care nu se pot modifica", "Tabele în mode read-only"] },
    { id: 63, course: "Curs 5", question: "Ce sunt tabelele index-organized (IOT)?", correct: "Tabele cu rânduri organizate ca arbore B, sortate pe cheie primară", wrong: ["Tabele cu numai indecși, fără date", "Tabele care sunt de fapt indecși", "Tabele cu indecși compuși obligatorii"] },
    { id: 64, course: "Curs 5", question: "Ce sunt tabelele externe?", correct: "Tabele doar pentru citire cu date din fișiere externe", wrong: ["Tabele într-o altă bază de date", "Tabele în format comprimat", "Tabele care nu au nici un index"] },
    { id: 65, course: "Curs 5", question: "Ce este PCTFREE în CREATE TABLE?", correct: "Procentul de spațiu din bloc rezervat pentru UPDATE", wrong: ["Procentul de spațiu liber în disc", "Procentul de date care pot fi șterse", "Procentul de compresie pentru tabel"] },
    { id: 66, course: "Curs 5", question: "Ce este PCTUSED în CREATE TABLE?", correct: "Procentajul minim de ocupare al unui bloc pentru INSERT", wrong: ["Procentul de date utilizate în total", "Limita de CPU pentru operații pe tabel", "Procentul de memorie folosit pentru cache"] },
    { id: 67, course: "Curs 5", question: "Ce este INITRANS în CREATE TABLE?", correct: "Numărul inițial de transaction entries alocate în bloc", wrong: ["Inițierea unei tranzacții noi", "Transportul inițial de date", "Instanța inițială a programului"] },
    { id: 68, course: "Curs 5", question: "Ce este PARALLEL în CREATE TABLE?", correct: "Specifică paralelizarea pentru CREATE...AS SELECT", wrong: ["Execuția în modul serial", "Blocare paralelă pe tabel", "Compresie paralelă a datelor"] },
    { id: 69, course: "Curs 5", question: "Ce este LOGGING vs NOLOGGING?", correct: "LOGGING: modificări în Redo Log, NOLOGGING: nu se înregistrează", wrong: ["Aceluași lucru, doar parametri diferiți", "LOGGING e pentru tabele mari, NOLOGGING pentru mici", "Modul gestionării memcache-ului"] },
    { id: 70, course: "Curs 5", question: "Ce sunt tabelele temporare globale (GTT)?", correct: "Obiecte cu structură permanentă dar date private pe sesiune", wrong: ["Tabele șterse automat la 24 ore", "Tabele pentru date volatile doar", "Tabele cu acces restricționat global"] },
    { id: 71, course: "Curs 5", question: "Ce sunt clauzele ON COMMIT pentru GTT?", correct: "DELETE ROWS sau PRESERVE ROWS pentru ștergere date", wrong: ["SAVE POINT sau ROLLBACK pentru salvare", "COMMIT IMMEDIATELY sau COMMIT DELAYED", "TRUNCATE sau PRESERVE DATA OPTIONS"] },
    { id: 72, course: "Curs 5", question: "Cum se copiază o tabelă în Oracle?", correct: "Folosind CREATE TABLE...AS SELECT", wrong: ["Cu COPY TABLE... FROM tabel_veche;", "Cu DUPLICATE TABLE tabel_veche;", "Cu CLONE TABLE tabel_veche;"] },
    { id: 73, course: "Curs 5", question: "Ce vederi oferă informații despre tabele?", correct: "DBA_TABLES, DBA_TAB_COLUMNS, DBA_TAB_PARTITIONS", wrong: ["DBA_DATA, DBA_OBJECTS, DBA_SEGMENTS", "USER_INFO, TABLE_STATS, COLUMN_STATS", "SYSTEM_TABLES, EXTERNAL_TABLES, INDEXES"] },
    { id: 74, course: "Curs 5", question: "Ce este un trigger în Oracle?", correct: "Bloc PL/SQL care se execută automat pe INSERT, UPDATE, DELETE", wrong: ["Un tip de index pentru optimizare", "O constrângere de integritate referențială", "Un scheduler pentru sarcini programate"] },
    { id: 75, course: "Curs 5", question: "Ce este Oracle Sharding?", correct: "Tehnică care împarte orizontal datele pe mai multe BD independente", wrong: ["Partajarea unui singur fișier între mai multe noduri", "Compresie orizontală a datelor", "Indexare distribuită pe tabelele mari"] },
    { id: 76, course: "Curs 6", question: "Ce este Oracle Real Application Clusters (RAC)?", correct: "Arhitectură cu multiple servere care accesează aceleași fișiere BD", wrong: ["Un sistem de backup redundant", "O metodă de compresie date", "Un tip special de index"] },
    { id: 77, course: "Curs 6", question: "Ce este comanda ALTER TABLE?", correct: "Comandă SQL pentru a modifica structura unui tabel existent", wrong: ["Comandă pentru a crea o nouă tabelă", "Comandă pentru a șterge constrângeri", "Comandă pentru a face backup tabel"] },
    { id: 78, course: "Curs 6", question: "Ce este row migration?", correct: "Mutarea unui rând complet din bloc în altul când UPDATE crește dimensiunea", wrong: ["Migrarea unei coloane la o altă tabelă", "Mutarea unui index la alt tablespace", "Schimbarea schemei unui rând"] },
    { id: 79, course: "Curs 6", question: "Ce este High Water Mark (HWM)?", correct: "Marcajul ultimului bloc vreodată utilizat pentru segment", wrong: ["Marca la care se umple bufferul memorie", "Indicatorul de înălțime pentru compresie", "Punctul de intersecție a doi pointeri"] },
    { id: 80, course: "Curs 6", question: "Ce face ALTER TABLE MOVE?", correct: "Mută tabelă compactând datele și resetând HWM", wrong: ["Mută doar datele fără a compacta", "Mută indecșii la alt tablespace", "Mută doar o coloană la alt loc"] },
    { id: 81, course: "Curs 6", question: "Ce este Automatic Segment Space Management (ASSM)?", correct: "Gestiune automată a spațiului liber în blocuri cu bitmaps", wrong: ["Manual Segment Space Management", "Sistem de compresie automată", "Alocare automată de buffer-uri"] },
    { id: 82, course: "Curs 6", question: "Ce face ALTER TABLE SHRINK SPACE?", correct: "Compactează rânduri și eliberează blocuri goale", wrong: ["Micșorează dimensiunea unui bloc", "Comprimi datele cu algoritm LZ4", "Elimina indecșii nefolosiți"] },
    { id: 83, course: "Curs 6", question: "Ce face TRUNCATE TABLE?", correct: "Golește tabelă și resetează HWM", wrong: ["Șterge doar primele 1000 rânduri", "Gestionează doar antetul tabelei", "Comprimează datele și pe urmă le șterge"] },
    { id: 84, course: "Curs 6", question: "Ce face DROP TABLE?", correct: "Șterge tabelă și constrângerile sale", wrong: ["Șterge doar datele, nu structura", "Pune tabelă în modul read-only", "Crează o copie înainte de ștergere"] },
    { id: 85, course: "Curs 6", question: "Ce face ANALYZE TABLE COMPUTE STATISTICS?", correct: "Colectează statistici prin parcurgere completă a tabelei", wrong: ["Calculează suma tuturor valorilor dintr-o coloană", "Estimează costul execuției unei cereri", "Verifica integritatea datelor tabelei"] },
    { id: 86, course: "Curs 1", question: "Ce este Data Dictionary Cache?", correct: "Zonă din Shared Pool care stochează metadata despre obiecte BD", wrong: ["Dicționar permanent stocat pe disc", "Colecție de sinonime pentru tabele", "Index pentru căutarea rapidă a datelor"] },
    { id: 87, course: "Curs 1", question: "Ce este Redo Log Buffer?", correct: "Zonă din SGA care stochează temporar modificările înainte de scriere pe disc", wrong: ["Buffer pentru citire înregistrărilor jurnal", "Spațiu pentru comprimarea datelor redo", "Cache pentru fișierele redo vechi"] },
    { id: 88, course: "Curs 1", question: "Ce face procesul CKPT (Checkpoint)?", correct: "Scrie pe disc blocurile modificate și actualizează antetele fișierelor", wrong: ["Verifică punctele de control ale sesiunilor", "Compactează fișierele redo log", "Resetează buffer-ele de memorie"] },
    { id: 89, course: "Curs 1", question: "Ce face procesul PMON (Process Monitor)?", correct: "Dealocă resursele unui proces cu incident", wrong: ["Monitorizează doar memoria folosită", "Gestionează doar conexiunile de rețea", "Compilează codul PL/SQL"] },
    { id: 90, course: "Curs 1", question: "Ce este SCN (System Change Number)?", correct: "Număr unic și crescător asignat fiecărei tranzacții comise", wrong: ["Identificator pentru schimburi de configurație", "Seria de controale de securitate", "Secvență de numere pentru log files"] },
    { id: 91, course: "Curs 3", question: "Ce sunt MAXLOGFILES, MAXLOGMEMBERS?", correct: "MAXLOGFILES = max grupuri, MAXLOGMEMBERS = max membri per grup", wrong: ["Limite pentru dimensiunea fișierelor", "Parametri pentru compresie redo", "Constrângeri pentru alocare memorie"] },
    { id: 92, course: "Curs 6", question: "Ce este Interested Transaction List (ITL)?", correct: "Structură din blocuri care gestionează blocările de rânduri", wrong: ["Listă de tranzacții interesate de o tabelă", "Index pentru găsirea rapidă a rândurilor", "Indicator al tranzacțiilor care fac INSERT"] },
    { id: 93, course: "Curs 6", question: "Ce face ALTER TABLE DEALLOCATE UNUSED?", correct: "Dealocă spațiu liber după HWM", wrong: ["Șterge datele nefolosite din tabel", "Elimina indecșii nefolosiți", "Resetează parametrii de stocare"] },
    { id: 94, course: "Curs 6", question: "Ce face ANALYZE TABLE VALIDATE STRUCTURE?", correct: "Verifică integritate structură cu validare încrucișată index-tabel", wrong: ["Validează doar structura indexului", "Verifică dacă datele sunt corupte", "Estimează spațiul necesar pentru tabel"] },
    { id: 95, course: "Curs 6", question: "Ce restricții au comenzile SHRINK?", correct: "Doar în tablespace-uri ASSM, NU pe Undo, Temporary, Cluster", wrong: ["Se pot aplica pe toate tipurile de tabele", "Necesită toți utilizatorii deconectați", "Doar pentru tabele cu mai puțin de 1GB"] },
    { id: 96, course: "Curs 6", question: "Ce condiții trebuie pentru ENABLE ROW MOVEMENT?", correct: "Necesară pentru SHRINK SPACE, permite schimbare ROWID", wrong: ["Doar pentru tabele partitionate", "Necesită drepturi SYSDBA obligatoriu", "Se aplicare automat pe toate tabelele"] },
    { id: 97, course: "Curs 4", question: "Ce informații oferă vederea DBA_EXTENTS?", correct: "OWNER, SEGMENT_NAME, EXTENT_ID, FILE_ID, BLOCK_ID, BLOCKS", wrong: ["Doar informații despre fișierele externe", "Statistici de acces la rânduri", "Informații despre indecși și partiții"] },
    { id: 98, course: "Curs 4", question: "Ce este USER_SEGMENTS vederea?", correct: "Info despre tabele, indecși, LOB segments cu dimensiunile lor fizice", wrong: ["Vederea doar a segmentelor utilizatorului curent", "Informații doar despre segmente de undo", "Statistici pentru segmente temporare"] },
    { id: 99, course: "Curs 6", question: "Ce se întâmplă cu indecșii după ALTER TABLE MOVE?", correct: "Indecșii devin UNUSABLE și trebuie refăcuți cu REBUILD", wrong: ["Indecșii sunt ștergeri automat", "Indecșii rămân valizi și funcționali", "Indecșii sunt mutați cu tabelul automat"] },
    { id: 100, course: "Curs 3", question: "Ce este procesul ARCn?", correct: "Proces de background care copiază automat fișierele Redo Log în arhivă", wrong: ["Proces de arhivare a fișierelor de date", "Sistem de compresie pentru fișiere vechi", "Proces de copiere a backup-urilor"] }
];

// Quiz state (in-memory, no localStorage)
let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let attempted = 0;
let selectedAnswer = null;
let courseStats = {
    "Curs 1": { total: 0, correct: 0 },
    "Curs 2": { total: 0, correct: 0 },
    "Curs 3": { total: 0, correct: 0 },
    "Curs 4": { total: 0, correct: 0 },
    "Curs 5": { total: 0, correct: 0 },
    "Curs 6": { total: 0, correct: 0 }
};

// DOM elements
const startScreen = document.getElementById('startScreen');
const quizScreen = document.getElementById('quizScreen');
const resultsScreen = document.getElementById('resultsScreen');
const startBtn = document.getElementById('startBtn');
const progressText = document.getElementById('progressText');
const scoreDisplay = document.getElementById('scoreDisplay');
const progressFill = document.getElementById('progressFill');
const courseBadge = document.getElementById('courseBadge');
const questionText = document.getElementById('questionText');
const answersContainer = document.getElementById('answersContainer');
const nextBtn = document.getElementById('nextBtn');
const shuffleBtn = document.getElementById('shuffleBtn');
const restartBtn = document.getElementById('restartBtn');
const restartFromResultsBtn = document.getElementById('restartFromResultsBtn');

// Shuffle array function
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Initialize quiz
function initQuiz() {
    questions = shuffleArray(quizData);
    currentQuestionIndex = 0;
    score = 0;
    attempted = 0;
    selectedAnswer = null;
    courseStats = {
        "Curs 1": { total: 0, correct: 0 },
        "Curs 2": { total: 0, correct: 0 },
        "Curs 3": { total: 0, correct: 0 },
        "Curs 4": { total: 0, correct: 0 },
        "Curs 5": { total: 0, correct: 0 },
        "Curs 6": { total: 0, correct: 0 }
    };
}

// Start quiz
function startQuiz() {
    initQuiz();
    startScreen.classList.add('hidden');
    resultsScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    displayQuestion();
}

// Display current question
function displayQuestion() {
    const question = questions[currentQuestionIndex];
    
    // Update progress
    progressText.textContent = `Question ${currentQuestionIndex + 1} / ${questions.length}`;
    const percentage = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressFill.style.width = `${percentage}%`;
    
    // Update score
    const scorePercentage = attempted > 0 ? Math.round((score / attempted) * 100) : 0;
    scoreDisplay.textContent = `Score: ${score} / ${attempted} (${scorePercentage}%)`;
    
    // Update course badge
    courseBadge.textContent = question.course;
    
    // Update question text
    questionText.textContent = question.question;
    
    // Create shuffled answers
    const answers = [
        { text: question.correct, isCorrect: true },
        { text: question.wrong[0], isCorrect: false },
        { text: question.wrong[1], isCorrect: false },
        { text: question.wrong[2], isCorrect: false }
    ];
    const shuffledAnswers = shuffleArray(answers);
    
    // Display answers
    answersContainer.innerHTML = '';
    shuffledAnswers.forEach((answer, index) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = answer.text;
        btn.dataset.correct = answer.isCorrect;
        btn.addEventListener('click', () => selectAnswer(btn, answer.isCorrect));
        answersContainer.appendChild(btn);
    });
    
    // Reset state
    selectedAnswer = null;
    nextBtn.disabled = true;
}

// Select answer
function selectAnswer(btn, isCorrect) {
    if (selectedAnswer !== null) return; // Already answered
    
    selectedAnswer = isCorrect;
    attempted++;
    
    // Update course stats
    const question = questions[currentQuestionIndex];
    courseStats[question.course].total++;
    
    if (isCorrect) {
        score++;
        courseStats[question.course].correct++;
        btn.classList.add('correct');
    } else {
        btn.classList.add('incorrect');
        // Highlight correct answer
        const buttons = answersContainer.querySelectorAll('.answer-btn');
        buttons.forEach(b => {
            if (b.dataset.correct === 'true') {
                b.classList.add('correct');
            }
        });
    }
    
    // Disable all buttons
    const buttons = answersContainer.querySelectorAll('.answer-btn');
    buttons.forEach(b => b.disabled = true);
    
    // Enable next button
    nextBtn.disabled = false;
    
    // Update score display
    const scorePercentage = Math.round((score / attempted) * 100);
    scoreDisplay.textContent = `Score: ${score} / ${attempted} (${scorePercentage}%)`;
}

// Next question
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

// Show results
function showResults() {
    quizScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');
    
    const percentage = Math.round((score / questions.length) * 100);
    
    document.getElementById('finalScore').textContent = `${score} / ${questions.length}`;
    document.getElementById('finalPercentage').textContent = `${percentage}%`;
    
    // Rating
    const ratingEl = document.getElementById('rating');
    if (percentage >= 85) {
        ratingEl.textContent = 'Excellent! 🎉';
        ratingEl.className = 'rating excellent';
    } else if (percentage >= 70) {
        ratingEl.textContent = 'Good! 👍';
        ratingEl.className = 'rating good';
    } else if (percentage >= 50) {
        ratingEl.textContent = 'Fair 📚';
        ratingEl.className = 'rating fair';
    } else {
        ratingEl.textContent = 'Keep Learning 💪';
        ratingEl.className = 'rating poor';
    }
    
    // Course breakdown
    const breakdownEl = document.getElementById('courseBreakdown');
    breakdownEl.innerHTML = '';
    
    Object.keys(courseStats).forEach(course => {
        const stat = courseStats[course];
        if (stat.total > 0) {
            const coursePercentage = Math.round((stat.correct / stat.total) * 100);
            const div = document.createElement('div');
            div.className = 'course-stat';
            div.innerHTML = `
                <div class="course-stat-title">${course}</div>
                <div class="course-stat-value">${stat.correct} / ${stat.total} (${coursePercentage}%)</div>
            `;
            breakdownEl.appendChild(div);
        }
    });
}

// Shuffle remaining questions
function shuffleRemaining() {
    if (currentQuestionIndex < questions.length - 1) {
        const remaining = questions.slice(currentQuestionIndex + 1);
        const shuffledRemaining = shuffleArray(remaining);
        questions = [...questions.slice(0, currentQuestionIndex + 1), ...shuffledRemaining];
    }
}

// Event listeners
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
shuffleBtn.addEventListener('click', shuffleRemaining);
restartBtn.addEventListener('click', startQuiz);
restartFromResultsBtn.addEventListener('click', startQuiz);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (quizScreen.classList.contains('hidden')) return;
    
    if (e.key === 'Enter' && !nextBtn.disabled) {
        nextQuestion();
    } else if ((e.key === ' ' || e.key === 'ArrowRight') && !nextBtn.disabled) {
        e.preventDefault();
        nextQuestion();
    }
});