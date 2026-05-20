# MOSA statische website

Dit repository bevat een nieuwe statische website voor **MOSA — Marokkaans-Nederlandse Organisatie voor Samenwerking & Advies**.

## Belangrijk

- Dit is een volledig nieuwe MOSA website, vanaf nul opgebouwd als statische HTML/CSS/JavaScript website.
- De live WordPress website is niet verbonden met dit repository.
- Wijzigingen in dit repository werken **niet automatisch** door op `mosanl.nl`.
- Er is geen koppeling met WordPress, cPanel, FTP, analytics of externe tracking.
- Afbeeldingen en logo's zijn placeholders totdat echte assets handmatig worden aangeleverd en toegevoegd.
- Commit geen wachtwoorden, API-sleutels, privégegevens of hostinggegevens.
- Verzin geen organisatiegegevens zoals bestuursleden, adressen, telefoonnummers, partners of testimonials. Gebruik placeholders totdat de informatie officieel is bevestigd.

## Structuur

```text
/
├── index.html
├── over-mosa.html
├── diensten.html
├── activiteiten.html
├── nieuws.html
├── contact.html
├── privacy.html
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   ├── images/
│   └── logo/
└── docs/wordpress-transfer-notes.md
```

## Homepage brand image

Homepage brand image:
`assets/images/MOSA-Ambassador.png`

This is the main MOSA hospitality image. It should be used as a brand visual on the homepage and possibly in flyers or brochures. It is not the official logo.

## Lokaal bekijken

Open `index.html` direct in de browser of start een simpele lokale server:

```bash
python3 -m http.server 8000
```

Ga daarna naar `http://localhost:8000`.

## Placeholdergegevens

Vul deze informatie pas aan wanneer deze officieel is aangeleverd:

- e-mailadres
- telefoonnummer / WhatsApp
- regio
- echte logo- en beeldbestanden
- echte activiteiten, datums en locaties
- echte nieuwsberichten
- definitieve privacygegevens


## Approved MOSA website visuals

Homepage brand image: `assets/images/MOSA-Ambassador.png`  
Community image: `assets/images/mosa-community-gathering.png`  
Advice image: `assets/images/mosa-advice-session.png`  
Homework support image: `assets/images/mosa-homework-support.png`  
Logo: `assets/logo/mosa-logo.png`

## Design notes

- Het designsysteem is geïnspireerd op de **kwaliteit en layoutstijl** van Kids Path 2 Engineering.
- MOSA-content, onderwerpen en navigatie zijn volledig zelfstandig en niet gekopieerd.
- Afbeeldingen moeten bestaan in `assets/images/`.
- Het logo moet bestaan in `assets/logo/`.
