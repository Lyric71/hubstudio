/**
 * Real screenshots of the hubStudio app, for use on the marketing site.
 *
 * Every file under /Images/app/ is a crop of a genuine capture from the help
 * center set. Nothing is composited or invented. The app's top bar, the
 * sidebar's Team / Credits block and every price are cropped out; on a few
 * shots (imageStudio, videoStudio, instagram, tiktokVideo) a price line sat
 * inside the area needed, so that one line was filled with the flat background
 * color sampled from the surrounding pixels.
 *
 * Keep `alt` and `caption` free of prices and of the word for the app's
 * prepaid balance: the site never publishes rates.
 */

export type AppShot = { src: string; width: number; height: number; alt: string; caption: string };

export const appShots = {
  explore: {
    src: '/Images/app/explore.webp',
    width: 1152,
    height: 518,
    alt: 'The Explore page in hubStudio: a dark banner titled "Every engine, one balance" with a search field, All, Image and Video filters, a maker menu, a sort menu and use chips such as Text to image and Image to video, above three engine cards for ChatGPT Image 2, ChatGPT Image 2.5 Flare and ChatGPT Image 2.5 Sunburst.',
    caption: 'The Explore gallery: every image and video engine on one page.',
  },
  exploreApp: {
    src: '/Images/app/exploreApp.webp',
    width: 1440,
    height: 526,
    alt: 'The hubStudio app with its side menu open on Explore, listing Image, Video, History, LinkedIn, Instagram, Facebook, TikTok, X, Validation and Skills, next to the Explore banner and the first row of engine cards.',
    caption: 'hubStudio with its side menu: Explore, the studios, History, the social networks, Validation and Skills.',
  },
  imageStudio: {
    src: '/Images/app/imageStudio.webp',
    width: 1152,
    height: 444,
    alt: 'The Image studio in hubStudio: an Image and Video switch, the heading "Image generation: text to image, edit, upscale", and a "What this run does" panel with an engine menu set to Muse Image 1.0 (Meta) and three buttons, Text to image, Edit an image and Upscale & restore.',
    caption: 'The Image studio: pick the job and the engine, then describe the picture.',
  },
  videoStudio: {
    src: '/Images/app/videoStudio.webp',
    width: 1152,
    height: 752,
    alt: 'The Video studio in hubStudio: the heading "Video generation: text to video, image to video, references", an engine menu set to Seedance 1.0 Pro Fast (ByteDance), a "The scene" panel with a prompt box for describing the video, and a results panel that reads "Nothing rendered yet".',
    caption: 'The Video studio: choose an engine, write the scene, render the clip.',
  },
  history: {
    src: '/Images/app/history.webp',
    width: 1152,
    height: 310,
    alt: 'The History page in hubStudio, titled "Everything you made", with All, Images and Videos filters, Team and Mine filters and a prompt search field, above a card that reads "Nothing made yet" and an "Explore the engines" button.',
    caption: 'History: everything the team made, filtered by type and by author.',
  },
  library: {
    src: '/Images/app/library.webp',
    width: 1152,
    height: 920,
    alt: 'The Assets Library in hubStudio: counters for images, videos, texts, documents and other files, New folder and Upload files buttons, a search field with Type, Date, Tags and Added by filters, and a list of a Spring campaign folder and four uploaded images with their type, size, author, date and an Actions menu.',
    caption: 'The Assets Library: every file of the team, in folders, searchable and tagged.',
  },
  libraryTools: {
    src: '/Images/app/libraryTools.webp',
    width: 1152,
    height: 616,
    alt: 'The Tools page of the Assets Library in hubStudio with the Image editor selected ("Crop, adjust, text, arrows, logo", runs in your browser), a drop zone for a picture, a "From the Assets Library" option, and three steps: open a picture; crop, adjust, write, draw; save it.',
    caption: 'Assets Library Tools: open a picture in the Image editor without leaving the app.',
  },
  libraryActions: {
    src: '/Images/app/libraryActions.webp',
    width: 1144,
    height: 485,
    alt: 'The Assets Library file list with the Actions menu open on a packshot image, offering View, Download, Edit image, Upload a new version, Tags, Rename, Move and Delete.',
    caption: 'The Actions menu of the Assets Library: view, download, edit, version, tag, move.',
  },
  editorEffects: {
    src: '/Images/app/editorEffects.webp',
    width: 1440,
    height: 900,
    alt: 'The hubStudio Image editor on a skincare packshot, with the Effects panel open showing nine looks: Original, Mono, Noir, Sepia, Vintage, Kodachrome, Technicolor, Polaroid and Brownie.',
    caption: 'The Image editor, Effects: one look over the picture, on top of the adjustments.',
  },
  editorCrop: {
    src: '/Images/app/editorCrop.webp',
    width: 1440,
    height: 900,
    alt: 'The hubStudio Image editor cropping a packshot to the Portrait 4:5 format, with a crop frame on the picture and a panel of network formats (Square, Story, Wide, Link, Photo, Screen) plus turn and mirror controls.',
    caption: 'The Image editor, Crop: each network\'s format in one click.',
  },
  editorDraw: {
    src: '/Images/app/editorDraw.webp',
    width: 1440,
    height: 900,
    alt: 'The hubStudio Image editor with the Draw panel open: a red arrow drawn on a packshot under the caption "New season", and tools for pen, highlighter, arrow, straight line, box and circle, with line color, thickness and opacity settings.',
    caption: 'The Image editor, Draw: arrows, boxes and circles that stay editable.',
  },
  editorSave: {
    src: '/Images/app/editorSave.webp',
    width: 1440,
    height: 900,
    alt: 'The hubStudio Image editor Save panel: file name, PNG, JPG or WEBP format, quality, width and height, and three ways to keep the picture: save a copy in the Assets Library, save as a new version, or download.',
    caption: 'The Image editor, Save: a copy in the Assets Library, a new version or a download.',
  },
  linkedin: {
    src: '/Images/app/linkedin.webp',
    width: 1152,
    height: 824,
    alt: 'The LinkedIn post studio in hubStudio: four stages (the brief, the copy, the pictures, publishing), then "The brief" with Text only, Image and Carousel formats, language and AI model menus, a brief box, and Draft with AI, Write it myself and Brand voice controls.',
    caption: 'LinkedIn: brief the post, draft it with AI, add pictures, publish.',
  },
  instagram: {
    src: '/Images/app/instagram.webp',
    width: 1152,
    height: 782,
    alt: 'The Instagram post studio in hubStudio, starting from "The picture or the video": a One image, Carousel or Reel switch, three sources (Render with AI, Pick from the library, Upload from your computer), a prompt box with engine and aspect menus, and caption language settings.',
    caption: 'Instagram: start from the picture or the video, then write the caption.',
  },
  facebook: {
    src: '/Images/app/facebook.webp',
    width: 1152,
    height: 824,
    alt: 'The Facebook post studio in hubStudio: four stages (the brief, the copy, the pictures, publishing), then "The brief" with Text only, Image, Carousel and Video formats, language and AI model menus, a brief box, and Draft with AI, Write it myself and Brand voice controls.',
    caption: 'Facebook: brief a page post, draft it, add pictures or a video, publish.',
  },
  tiktok: {
    src: '/Images/app/tiktok.webp',
    width: 1152,
    height: 770,
    alt: 'The TikTok brief form in hubStudio, marked Beta: title, language, the brief, post type, video length, caption style, call to action, audience and register fields, with a note that drafts follow TikTok\'s caption and hashtag limits.',
    caption: 'TikTok (Beta): brief a video in depth, drafted within TikTok\'s limits.',
  },
  tiktokVideo: {
    src: '/Images/app/tiktokVideo.webp',
    width: 1152,
    height: 798,
    alt: 'The TikTok post studio in hubStudio, starting from "The video": Render with AI, Pick from the library or Upload from your computer, then a prompt box with engine (Veo 3.1 Fast), vertical 9:16 aspect and 8-second length menus.',
    caption: 'TikTok: start from the video, rendered with AI, taken from History or uploaded.',
  },
  x: {
    src: '/Images/app/x.webp',
    width: 1152,
    height: 776,
    alt: 'The X post studio in hubStudio: four stages (the brief, the copy, the pictures, publishing), then "The brief" with Text only, Image and 2 to 4 pictures formats, language and AI model menus, and a brief box.',
    caption: 'X: brief a post or a thread, draft it, add pictures, publish.',
  },
  xKnobs: {
    src: '/Images/app/xKnobs.webp',
    width: 1013,
    height: 310,
    alt: 'The "How it goes out on X" settings in hubStudio: shape (one post, thread only if needed), hashtags, mentions, a link to share, and a switch that puts the link in a short follow-up post.',
    caption: 'How a post goes out on X: shape, hashtags, mentions and where the link goes.',
  },
  validation: {
    src: '/Images/app/validation.webp',
    width: 1440,
    height: 384,
    alt: 'The hubStudio app with Validation selected in the side menu, showing the "Assets to validate" page with Waiting for me, My requests and All assets tabs and a "Send an asset for validation" button.',
    caption: 'Validation: every approval request in one place.',
  },
  validationSend: {
    src: '/Images/app/validationSend.webp',
    width: 512,
    height: 640,
    alt: 'The "Send for validation" dialog in hubStudio: title, type, a validator picked from colleagues, the asset as a file, a text or an address, and a message to the validator.',
    caption: 'Send for validation: pick the piece, the validator and add a note.',
  },
  clientSpace: {
    src: '/Images/app/clientSpace.webp',
    width: 1440,
    height: 318,
    alt: 'The Client space as a client sees it: a side menu with only Client space and Validation, and a page titled "Made for Northwind Foods" with All, Images, Videos, Posts and Files filters.',
    caption: 'The Client space: a client sees only what was made for them, and Validation.',
  },
  skillsCatalog: {
    src: '/Images/app/skillsCatalog.webp',
    width: 1152,
    height: 824,
    alt: 'The Skills Catalog in hubStudio with Personal, Team and Catalog tabs, a search field, category filters, and skill cards for LinkedIn post format, X post format, Instagram caption format, Facebook post format and TikTok script format.',
    caption: 'The Skills Catalog: ready-made rules that shape every AI draft.',
  },
  mySkills: {
    src: '/Images/app/mySkills.webp',
    width: 1152,
    height: 776,
    alt: 'The personal Skills list in hubStudio: LinkedIn, X, Instagram and Facebook format skills, each switched on, with Duplicate, Switch off, Edit and Delete buttons and a New skill button.',
    caption: 'My skills: switch a skill on or off, edit it or write your own.',
  },
  teamClients: {
    src: '/Images/app/teamClients.webp',
    width: 1128,
    height: 437,
    alt: 'The Clients panel of Your team in hubStudio: a field to add a client company, the client Northwind Foods with one person, Dana Whitfield, and fields to give another person a login.',
    caption: 'Your team, Clients: add a client and give its people a login.',
  },
  teamInvite: {
    src: '/Images/app/teamInvite.webp',
    width: 1128,
    height: 177,
    alt: 'The "Invite someone" form in hubStudio: first name, last name, email, a role menu set to Creator, and a Send the invitation button.',
    caption: 'Your team: invite someone by email and choose their role.',
  },
  menu: {
    src: '/Images/app/menu.webp',
    width: 264,
    height: 492,
    alt: 'The hubStudio side menu: Explore, Image, Video, History, Assets Library, LinkedIn, Instagram, Facebook, TikTok (Beta), X, Validation and Skills.',
    caption: 'The hubStudio menu: make, keep, publish and approve from one side bar.',
  },
  connections: {
    src: '/Images/app/connections.webp',
    width: 1152,
    height: 654,
    alt: 'The My Connections page in hubStudio, "Your social accounts": step-by-step cards to connect LinkedIn, Instagram, Facebook and TikTok, each with a Connect an account button.',
    caption: 'My Connections: link LinkedIn, Instagram, Facebook, TikTok and X to publish in your name.',
  },
} satisfies Record<string, AppShot>;
