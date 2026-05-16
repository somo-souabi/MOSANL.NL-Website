# WordPress transfer notes

Deze website is bewust als statische website vanaf nul opgebouwd. De huidige live WordPress website is niet gebruikt als bron en is niet gekoppeld aan dit repository.

## Handmatig overzetten naar WordPress

Als MOSA later toch WordPress wil gebruiken, kan de inhoud handmatig worden overgenomen:

1. Maak in WordPress nieuwe pagina's aan voor Home, Over MOSA, Diensten, Activiteiten, Nieuws, Contact en Privacy.
2. Kopieer alleen de bevestigde tekst uit de HTML-bestanden naar de bijbehorende WordPress-pagina's.
3. Bouw de secties na met de gekozen WordPress editor of page builder.
4. Vervang placeholders pas wanneer echte organisatiegegevens, contactgegevens, nieuwsberichten, activiteiten en beelden officieel beschikbaar zijn.
5. Voeg echte afbeeldingen en logo's handmatig toe aan de WordPress mediabibliotheek.
6. Test de mobiele weergave, navigatie, formulieren en privacytekst voordat de site live gaat.

## Niet automatisch koppelen

- Koppel dit repository niet automatisch aan de bestaande live WordPress installatie.
- Gebruik geen oude WordPress content als basis.
- Gebruik geen FTP-, cPanel- of hostinggegevens in dit repository.
- Commit geen wachtwoorden, API-sleutels of privé-informatie.

## Formulier

Het contactformulier in `contact.html` is alleen voorbereid als statische markup. Voor WordPress moet een veilige formulierplugin of server-side formulieroplossing worden gekozen en apart worden getest.
