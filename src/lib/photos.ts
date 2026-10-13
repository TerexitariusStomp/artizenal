// Openly licensed stock photos for the seeded projects, from Flickr and Wikimedia Commons via Openverse.
// Cropped to 16:10 and resized. Each needs the credit shown on its project page.

export interface PhotoCredit {
  src: string
  title: string
  by: string
  license: string
  licenseUrl: string
  url: string
}

export const PHOTOS: Record<string, PhotoCredit> = {
  "tidepool-atlas": { src: "images/projects/tidepool-atlas.jpg", title: "Yaquina Head Lighthouse, Outstanding Natural Area -- tide…", by: "BLM Oregon & Washington", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", url: "https://www.flickr.com/photos/50169152@N06/17338426979" },
  "seed-library-van": { src: "images/projects/seed-library-van.jpg", title: "Seed Library Tomatoes", by: "San Jos\u00e9 Public Library", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/", url: "https://www.flickr.com/photos/26204872@N08/21355222542" },
  "riso-commons": { src: "images/projects/riso-commons.jpg", title: "orange risograph drum", by: "The Incidental", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", url: "https://www.flickr.com/photos/36662126@N05/3934857148" },
  "night-choir": { src: "images/projects/night-choir.jpg", title: "Street at Night", by: "OiMax", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", url: "https://www.flickr.com/photos/72396314@N00/299419187" },
  "repair-kits": { src: "images/projects/repair-kits.jpg", title: "October 20th, 2013 Reading Repair Cafe - tool and knife s…", by: "karenblakeman", license: "CC0 1.0", licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/", url: "https://www.flickr.com/photos/11569642@N00/10403675514" },
  "mycelium-bricks": { src: "images/projects/mycelium-bricks.jpg", title: "Oyster mushroom (Pleurotus ostreatus) mycelium in petri d…", by: "Tobi Kellner", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/w/index.php?curid=18340817" },
  "oral-histories": { src: "images/projects/oral-histories.jpg", title: "Oral History Interview", by: "niallmcnulty", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", url: "https://www.flickr.com/photos/34827922@N04/5211054924" },
  "air-monitors": { src: "images/projects/air-monitors.jpg", title: "Dylos DC1100 Pro Air Quality Monitor", by: "mangtronix", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/", url: "https://www.flickr.com/photos/62747032@N00/4276351575" },
  "accessible-synth": { src: "images/projects/accessible-synth.jpg", title: "Synthesizer Controls", by: "natetherobot", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/", url: "https://www.flickr.com/photos/34888294@N02/9114252490" },
  "kitchen-cookbook": { src: "images/projects/kitchen-cookbook.jpg", title: "Chopped Minestrone Vegetables", by: "kaktuslampan", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/", url: "https://www.flickr.com/photos/8071171@N06/4153642440" },
  "solar-toolkit": { src: "images/projects/solar-toolkit.jpg", title: "Solar Panel install", by: "Richard Masoner / Cyclelicious", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/", url: "https://www.flickr.com/photos/99247795@N00/540944183" },
  "lullabies": { src: "images/projects/lullabies.jpg", title: "Sleeping Baby", by: "ECohen", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/", url: "https://www.flickr.com/photos/7378221@N03/464518806" },
  "bird-count": { src: "images/projects/bird-count.jpg", title: "Birdwatching at Wildwood Recreation Site, Welches - horiz…", by: "Mt. Hood Territory", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", url: "https://www.flickr.com/photos/48091087@N02/8426485913" },
  "feminist-econ": { src: "images/projects/feminist-econ.jpg", title: "On a pink, green, and white cloud, two young women readin…", by: "Wonderlane", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", url: "https://www.flickr.com/photos/71401718@N00/4362030060" },
  "mural-walls": { src: "images/projects/mural-walls.jpg", title: "Pixel Pancho, 2013", by: "Retis", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", url: "https://www.flickr.com/photos/85264217@N04/9309444408" },
  "my-darkroom": { src: "images/projects/my-darkroom.jpg", title: "Darkroom mock-up", by: "shankar s.", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", url: "https://www.flickr.com/photos/77742560@N06/12255568833" },
}

export const FUND_PHOTOS: Record<string, PhotoCredit> = {
  "artizen-rescue": { src: "images/funds/artizen-rescue.jpg", title: "Artist in Action", by: "See-ming Lee (SML)", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/", url: "https://www.flickr.com/photos/48973657@N00/3988318885" },
  "climate-commons": { src: "images/funds/climate-commons.jpg", title: "Earth Day 2012", by: "U.S. Embassy Jerusalem", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/", url: "https://www.flickr.com/photos/46886434@N04/6950015908" },
  "small-press": { src: "images/funds/small-press.jpg", title: "Trying out letterpress printing", by: "futureshape", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", url: "https://www.flickr.com/photos/55231259@N00/14720064202" },
  "community-science": { src: "images/funds/community-science.jpg", title: "Citizen Science Coordinator assists students with data co…", by: "GlacierNPS", license: "Public domain", licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/", url: "https://www.flickr.com/photos/43288043@N04/27353731971" },
  "music-no-labels": { src: "images/funds/music-no-labels.jpg", title: "Who turned out the spotlights?", by: "Andrew_D_Hurley", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/", url: "https://www.flickr.com/photos/15717926@N04/3288313195" },
  "food-sovereignty": { src: "images/funds/food-sovereignty.jpg", title: "Community grown vegetables_Cuba 218", by: "hoyasmeg", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", url: "https://www.flickr.com/photos/62126383@N00/371341778" },
  "disability-design": { src: "images/funds/disability-design.jpg", title: "Wheelchair Accessible blind", by: "U.S. Fish and Wildlife Service - Midwest Region", license: "Public domain", licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/", url: "https://www.flickr.com/photos/49208525@N08/6343422579" },
}
