# Turtel App

Eine Prototyp der [Turtel Dating-App](https://turtel-app.de/) welche ***barrierefreie, sowie inklusive Kennenlern- und Datingfunktionen*** anbieten will.


# Umgebung

Die Turtel App verwendet eine kombination aus [Entity Framework 7.0.3](https://learn.microsoft.com/en-us/ef/) mit C# (net 7.0) und [React Native 0.71](https://reactnative.dev/) um die Mobile Anwendung für Android und iOS bereitzustellen.
Publishing der Mobilen Anwendung wird mittels [Expo Go](https://expo.dev/client) durchgeführt. Die Server Anwendung läuft auf jedem [ASP.NET Core kompatiblem Server](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/servers/?view=aspnetcore-7.0&tabs=windows).

## Visual Studio

Die **.csproj** und **.sln** für dieses Projekt bereits angelegt.
Damit das Projekt starten kann, muss [Node.js](https://nodejs.org/en/download/) installiert sein. *(v. 18.14.2)*
Zusätzlich ist hier ein Expo Go fähiges Mobiles Endgerät oder [Android Studio](https://developer.android.com/studio?gclid=Cj0KCQiAo-yfBhD_ARIsANr56g4YrMtwVVkFvAafv6COaVo9t9xDcVieoXe6msZo3yAWyfY11xjVrOcaAotfEALw_wcB&gclsrc=aw.ds) und [Google Chrome](https://www.google.com/chrome/) für Debugging notwendig.

## Andere IDE
Die Lösung basiert auf C# 11 für .Net 7. Abhängigkeiten hier sind: 
|Name|Version  |
|--|--|
| Microsoft.EntityFrameworkCore |  7.0.3 |
| Microsoft.EntityFrameworkCore.InMemory |  7.0.3 |
| Microsoft.EntityFrameworkCore.SqlServer  |  7.0.3 |
| Swashbuckle.AspNetCore |  6.5.0 |

Um via Expo starten zu können, müssen die Packages vorher Installiert werden und Browserdaten aktualisiert werden. Dafür muss in dem Verzeichnis mit ***"package.json"*** mithilfe der CLI folgende Befehle ausgeführt werden:

``npx browserslist@latest --update-db``
``npm install``


Danach kann Expo gestartet werden:

``npm run start``

# Debugging

Für das Debugging mithilfe des Expo Metro Bundlers, [siehe hier](https://docs.expo.dev/workflow/debugging/).

# Contributions
Dieser Code ist aus der Zusammenarbeit zwischen Studenten der [TH Köln-Gummersbach](https://www.th-koeln.de/hochschule/campus-gummersbach_76496.php), dem [Innovation Hub](https://www.innovation-hub.de/) und [Turtel](https://turtel-app.de/) entstanden.

*[Die Projektbeschreibung](https://www.innovation-hub.de/Hackathon)*