# Turtel App

Eine Prototyp der [Turtel Dating-App](https://turtel-app.de/) welche ***barrierefreie, sowie inklusive Kennenlern- und Datingfunktionen*** anbieten will.


# Umgebung

Die Turtel App verwendet eine kombination aus [Entity Framework 7.0.3](https://learn.microsoft.com/en-us/ef/) mit C# (net 7.0) und [React Native 0.71](https://reactnative.dev/) um die Mobile Anwendung f�r Android und iOS bereitzustellen.
Publishing der Mobilen Anwendung wird mittels [Expo Go](https://expo.dev/client) durchgef�hrt. Die Server Anwendung l�uft auf jedem [ASP.NET Core kompatiblem Server](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/servers/?view=aspnetcore-7.0&tabs=windows).

## Visual Studio

Die **.csproj** und **.sln** f�r dieses Projekt bereits angelegt.
Damit das Projekt starten kann, muss [Node.js](https://nodejs.org/en/download/) installiert sein. *(v. 18.14.2)*
Zus�tzlich ist hier ein Expo Go f�higes Mobiles Endger�t oder [Android Studio](https://developer.android.com/studio?gclid=Cj0KCQiAo-yfBhD_ARIsANr56g4YrMtwVVkFvAafv6COaVo9t9xDcVieoXe6msZo3yAWyfY11xjVrOcaAotfEALw_wcB&gclsrc=aw.ds) und [Google Chrome](https://www.google.com/chrome/) f�r Debugging notwendig.

## Andere IDE
Die L�sung basiert auf C# 11 f�r .Net 7. Abh�ngigkeiten hier sind: 
|Name|Version  |
|--|--|
| Microsoft.EntityFrameworkCore |  7.0.3 |
| Microsoft.EntityFrameworkCore.InMemory |  7.0.3 |
| Microsoft.EntityFrameworkCore.SqlServer  |  7.0.3 |
| Swashbuckle.AspNetCore |  6.5.0 |

Um via Expo starten zu k�nnen, m�ssen die Packages vorher Installiert werden und Browserdaten aktualisiert werden. Daf�r muss in dem Verzeichnis mit ***"package.json"*** mithilfe der CLI folgende Befehle ausgef�hrt werden:

``npx browserslist@latest --update-db``
``npm install``


Danach kann Expo gestartet werden:

``npm run start``

# Debugging

F�r das Debugging mithilfe des Expo Metro Bundlers, [siehe hier](https://docs.expo.dev/workflow/debugging/).

# Contributions
Dieser Code ist aus der Zusammenarbeit zwischen Studenten der [TH K�ln-Gummersbach](https://www.th-koeln.de/hochschule/campus-gummersbach_76496.php), dem [Innovation Hub](https://www.innovation-hub.de/) und [Turtel](https://turtel-app.de/) entstanden.

*[Die Projektbeschreibung](https://www.innovation-hub.de/Hackathon)*