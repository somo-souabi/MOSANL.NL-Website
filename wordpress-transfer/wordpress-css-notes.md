# WordPress CSS Notes

Deze repository bevat geen bestaande CSS-bestanden. De onderstaande stijlnotities zijn gebaseerd op de brand identity in `README.md` en zijn bedoeld als veilige handmatige richtlijn voor WordPress.

## Main colours

- Donkerblauw: `#003B73` voor koppen, headeraccenten, footer en primaire knoppen.
- Wit: `#FFFFFF` als hoofdachtergrond en tekstkleur op donkere vlakken.
- Rood: `#C1272D` als accentkleur voor belangrijke highlights of secundaire knoppen.
- Groen: `#1F7A3A` als extra accentkleur bij community, samenwerking of call-to-action elementen.
- Lichtgrijs: `#F5F7FA` voor sectieachtergronden en kaarten.
- Donkere tekst: `#1F2933` voor goed leesbare bodytekst.

## Fonts

- Gebruik een moderne, goed leesbare sans-serif.
- Veilige WordPress-keuze: `Arial`, `Helvetica`, sans-serif.
- Als het thema Google Fonts ondersteunt: kies bijvoorbeeld `Inter`, `Open Sans` of `Montserrat` voor koppen en navigatie.

## Button styling

- Primaire knoppen: donkerblauwe achtergrond, witte tekst, afgeronde hoeken, duidelijke hover-state.
- Secundaire knoppen: witte of transparante achtergrond met donkerblauwe rand en donkerblauwe tekst.
- Houd knoppen ruim klikbaar op mobiel.

## Hero section style

- Grote, rustige hero met duidelijke titel en korte subtitel.
- Gebruik het logo of de festivalafbeelding als visueel element.
- Zorg voor sterk contrast tussen tekst en achtergrond.
- Vermijd drukke overlays waardoor tekst minder leesbaar wordt.

## Card/block style

- Witte kaarten op lichtgrijze achtergrond.
- Subtiele afgeronde hoeken.
- Lichte schaduw voor diepte.
- Voldoende witruimte tussen titel, tekst en knop.

## Header style

- Logo links, menu rechts of onder het logo op mobiel.
- Donkerblauw als hoofdkleur voor navigatie of accenten.
- Houd het menu simpel: Home, Over MOSA, Diensten, Activiteiten, Nieuws, Contact.

## Footer style

- Donkerblauwe footer met witte tekst.
- Herhaal korte MOSA-beschrijving en belangrijke links.
- Voeg alleen bevestigde contactgegevens toe.

## Veilige CSS-snippets voor WordPress Customizer > Additional CSS

Plak deze CSS alleen als de WordPress-theme klassen niet conflicteren. Controleer daarna desktop en mobiel.

```css
:root {
  --mosa-blue: #003b73;
  --mosa-red: #c1272d;
  --mosa-green: #1f7a3a;
  --mosa-light: #f5f7fa;
  --mosa-text: #1f2933;
}

body {
  color: var(--mosa-text);
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.6;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: var(--mosa-blue);
  font-weight: 700;
}

a,
.wp-block-button__link {
  transition: all 0.2s ease-in-out;
}

.wp-block-button__link {
  background: var(--mosa-blue);
  border: 2px solid var(--mosa-blue);
  border-radius: 999px;
  color: #ffffff;
  font-weight: 700;
  padding: 0.8rem 1.4rem;
  text-decoration: none;
}

.wp-block-button__link:hover,
.wp-block-button__link:focus {
  background: var(--mosa-red);
  border-color: var(--mosa-red);
  color: #ffffff;
}

.mosa-card,
.wp-block-group.is-style-mosa-card {
  background: #ffffff;
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(0, 59, 115, 0.12);
  padding: 1.5rem;
}
```
