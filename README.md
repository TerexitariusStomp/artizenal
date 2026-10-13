# Pastry

A desktop showcase of community-matched funding on the Bread Cooperative stack, built for the projects left stranded when Artizen shut down. Everything is simulated in the browser: no real money, no wallets, no blockchain.

Live at https://tbsoc.github.io/pastry/ (also https://tbsoc.github.io/artizenal/). Both are deployed from the same code: this checkout pushes to `tbsoc/pastry` and `tbsoc/artizenal` together.

## Run it

```bash
npm install
npm run dev
```

`SINGLE_FILE=1 npx vite build --outDir dist-single` produces one self-contained `index.html` you can send to people.

## What it shows

- **Pas tokens**: pasUSD, pasEUR and pasETH, each created 1:1 from USDC, EURC or ETH (simulated rates and APYs in `src/lib/assets.ts`). Members can donate to projects in any of them; matching counts their dollar value.
- **Pastry Wealth Fund**: every pas token plus permanent endowments. Its yield is the season's matching pool. Endowing USDC, EURC or ETH is permanent and earns 100 points per $1.
- **Points**: each season members give points to funds, setting a ratio with − / + like fund.bread.coop. A fund's share of the season's yield is its points ÷ all points given. Given points are spent and the tally resets every season.
- **About**: a first-visit modal explaining why the showcase exists (Artizen closing; auditable, realistic matching, funds not put at risk).
- **Funds**: each fund chooses quadratic funding, a 1:1 match up to a cap, or a fixed multiplier. Members can give to a fund's live round or its reserve. A proposed fund launches once it hits both its pledge goal and its points-backing goal.
- **Rounds**: only pasUSD donations made inside a round are matched. USDC donations reach the project but aren't matched. Collect projects into a basket and see the match you unlock.
- **Projects**: a 25 pasUSD refundable spam deposit, an optional Artizen alumni badge, updates and a donor list.
- **Points**: earned for donating, giving to funds, referrals (500 points plus 10% of a friend's points), holding pasUSD, early backing, launching projects, Artizen alumni status and curating.
- **Time machine**: the day counter in the header fast-forwards time. Yield accrues, other members donate, rounds settle, deposits are refunded, seasons close, and simulated curators open new rounds.

State lives in `localStorage`. Use "Reset demo" in the time machine to start over.

## Code map

- `src/lib/matching.ts`: matching formulas and the live estimates
- `src/lib/store.tsx`: simulation engine (actions, points, yield, settlement)
- `src/lib/seed.ts`: the seeded world
- `src/pages/*`: one file per screen

## Newsletter gate

New visitors enter an email before the showcase opens. It's sent to `worker/`, a Cloudflare Worker at `https://pastry-signup.pastrycoop.workers.dev`, which adds it to the Bread Cooperative newsletter on Paragraph. The Paragraph API key is stored as a Worker secret, never in this repo.

```bash
cd worker
npx wrangler deploy
npx wrangler secret put PARAGRAPH_API_KEY
```

## Photo credits

Project photos are openly licensed images found through [Openverse](https://openverse.org), cropped and resized. Photos under CC BY-SA are shared under the same license.

- `tidepool-atlas`: [Yaquina Head Lighthouse, Outstanding Natural Area -- tide pool](https://www.flickr.com/photos/50169152@N06/17338426979) by BLM Oregon & Washington, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/)
- `seed-library-van`: [Seed Library Tomatoes](https://www.flickr.com/photos/26204872@N08/21355222542) by San José Public Library, [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/)
- `riso-commons`: [orange risograph drum](https://www.flickr.com/photos/36662126@N05/3934857148) by The Incidental, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/)
- `night-choir`: [Street at Night](https://www.flickr.com/photos/72396314@N00/299419187) by OiMax, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/)
- `repair-kits`: [October 20th, 2013 Reading Repair Cafe - tool and knife sharpening table](https://www.flickr.com/photos/11569642@N00/10403675514) by karenblakeman, [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/)
- `mycelium-bricks`: [Oyster mushroom (Pleurotus ostreatus) mycelium in petri dish on coffee grounds](https://commons.wikimedia.org/w/index.php?curid=18340817) by Tobi Kellner, [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)
- `oral-histories`: [Oral History Interview](https://www.flickr.com/photos/34827922@N04/5211054924) by niallmcnulty, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/)
- `air-monitors`: [Dylos DC1100 Pro Air Quality Monitor](https://www.flickr.com/photos/62747032@N00/4276351575) by mangtronix, [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/)
- `accessible-synth`: [Synthesizer Controls](https://www.flickr.com/photos/34888294@N02/9114252490) by natetherobot, [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/)
- `kitchen-cookbook`: [Chopped Minestrone Vegetables](https://www.flickr.com/photos/8071171@N06/4153642440) by kaktuslampan, [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/)
- `solar-toolkit`: [Solar Panel install](https://www.flickr.com/photos/99247795@N00/540944183) by Richard Masoner / Cyclelicious, [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/)
- `lullabies`: [Sleeping Baby](https://www.flickr.com/photos/7378221@N03/464518806) by ECohen, [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/)
- `bird-count`: [Birdwatching at Wildwood Recreation Site, Welches - horizontal - 285](https://www.flickr.com/photos/48091087@N02/8426485913) by Mt. Hood Territory, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/)
- `feminist-econ`: [On a pink, green, and white cloud, two young women reading a book at Greenlake, wearing a daisy chain in a field of flowers, Seattle, Washington, USA](https://www.flickr.com/photos/71401718@N00/4362030060) by Wonderlane, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/)
- `mural-walls`: [Pixel Pancho, 2013](https://www.flickr.com/photos/85264217@N04/9309444408) by Retis, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/)
- `my-darkroom`: [Darkroom mock-up](https://www.flickr.com/photos/77742560@N06/12255568833) by shankar s., [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/)
- fund `artizen-rescue`: [Artist in Action / Dumbo Arts Center: Art Under the Bridge Festival 2009 / 20090926.10D.54904.P1.L1.BW / SML](https://www.flickr.com/photos/48973657@N00/3988318885) by See-ming Lee (SML), [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/)
- fund `climate-commons`: [Earth Day 2012](https://www.flickr.com/photos/46886434@N04/6950015908) by U.S. Embassy Jerusalem, [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/)
- fund `small-press`: [Trying out letterpress printing](https://www.flickr.com/photos/55231259@N00/14720064202) by futureshape, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/)
- fund `community-science`: [Citizen Science Coordinator assists students with data collection](https://www.flickr.com/photos/43288043@N04/27353731971) by GlacierNPS, [Public domain](https://creativecommons.org/publicdomain/mark/1.0/)
- fund `music-no-labels`: [Who turned out the spotlights?](https://www.flickr.com/photos/15717926@N04/3288313195) by Andrew_D_Hurley, [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/)
- fund `food-sovereignty`: [Community grown vegetables_Cuba 218](https://www.flickr.com/photos/62126383@N00/371341778) by hoyasmeg, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/)
- fund `disability-design`: [Wheelchair Accessible blind](https://www.flickr.com/photos/49208525@N08/6343422579) by U.S. Fish and Wildlife Service - Midwest Region, [Public domain](https://creativecommons.org/publicdomain/mark/1.0/)
