# Chrome-Extension

[https://www.youtube.com/playlist?list=PLRqwX-V7Uu6bL9VOMT65ahNEri9uqLWfS](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6bL9VOMT65ahNEri9uqLWfS)


Kevin's notes

https://youtu.be/0n809nd4Zu4?si=8qNDgQOirIUcPb1Z&t=340

we need a manifest.json file to create a chrome extension

Example of one:

{
  "name": "My YT Bookmarks",
  "version": "0.1.0",
  "description": "Saving timestamps in YT videos",
  "permissions": ["storage", "tabs"],
  "host_permissions": ["https://*.youtube.com/*"],
  "background": {
    "service_worker": "background.js"
  },
  "content_scripts": [
    {
      "matches": ["https://*.youtube.com/*"],
      "js": ["contentScript.js"]
    }
  ],
  "web_accessible_resources": [
    {
      "resources": [
        "assets/bookmark.png",
        "assets/play.png",
        "assets/delete.png",
        "assets/save.png"
      ],
      "matches": ["https://*.youtube.com/*"]
    }
  ],
  "action": {
    "default_icon": {
      "16": "assets/ext-icon.png",
      "24": "assets/ext-icon.png",
      "32": "assets/ext-icon.png"
    },
    "default_title": "My YT Bookmarks",
    "default_popup": "popup.html"
  },
  "manifest_version": 3
}
