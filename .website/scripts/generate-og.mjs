/**
 * Generates the Open Graph share images into static/.
 *
 * Run with: node scripts/generate-og.mjs
 *
 * Committed as generated files rather than built on every deploy — they change
 * only when the brand or tagline changes, and keeping them static means a
 * share card never depends on the build succeeding.
 *
 * 1200×630 is the size Facebook, LinkedIn, WhatsApp, Slack and X all crop
 * from. Type is set large because the card is usually seen at about a third of
 * this size in a feed.
 */

import sharp from 'sharp';
import { readFileSync } from 'node:fs';

const W = 1200;
const H = 630;

// Brand values, sampled from the logo. Must match src/routes/layout.css.
const INK = '#0b1f33';
const GREEN = '#7cc062';
const MUTED = '#9fb3c4';

const mark = readFileSync('src/lib/assets/nett-med-mark.png');

/** XML-escape, so an ampersand in the copy cannot break the SVG. */
const esc = (s) =>
	s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function card({ headline, sub, footer }) {
	const lines = headline.split('\n');
	return Buffer.from(`
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${W}" height="${H}" fill="${INK}"/>
  <rect x="80" y="152" width="64" height="4" fill="${GREEN}"/>

  <text x="196" y="96" font-family="Inter" font-size="19" font-weight="500"
        letter-spacing="3.6" fill="${MUTED}">ENTRETIEN</text>
  <text x="196" y="132" font-family="Inter" font-size="40" font-weight="700"
        letter-spacing="-0.8" fill="#ffffff">Nett-Med</text>

  ${lines
		.map(
			(line, i) =>
				`<text x="80" y="${238 + i * 62}" font-family="Inter" font-size="52" font-weight="600"
         letter-spacing="-1.2" fill="#ffffff">${esc(line)}</text>`
		)
		.join('\n  ')}

  <text x="80" y="${238 + lines.length * 62 + 26}" font-family="Inter" font-size="26"
        font-weight="400" fill="${MUTED}">${esc(sub)}</text>

  <rect x="80" y="516" width="1040" height="1" fill="#294a66"/>
  <text x="80" y="566" font-family="Inter" font-size="27" font-weight="600"
        fill="#ffffff">${esc(footer)}</text>
</svg>`);
}

const cards = {
	'og-fr.png': {
		headline: 'Entretien ménager commercial\net résidentiel à Montréal',
		sub: 'Immeubles · Bureaux · Cliniques · Garderies · Résidences',
		footer: '+1 (514) 218-7341   ·   Montréal, Rive-Sud, Rive-Nord'
	},
	'og-en.png': {
		headline: 'Commercial and residential\ncleaning in Montreal',
		sub: 'Buildings · Offices · Clinics · Daycares · Homes',
		footer: '+1 (514) 218-7341   ·   Montreal, South Shore, North Shore'
	}
};

for (const [file, copy] of Object.entries(cards)) {
	const out = await sharp(card(copy))
		.composite([{ input: await sharp(mark).resize(84).png().toBuffer(), top: 52, left: 80 }])
		.png({ compressionLevel: 9 })
		.toFile(`static/${file}`);
	console.log(`static/${file}  ${out.width}x${out.height}  ${(out.size / 1024).toFixed(1)} KB`);
}
