-----------------------------------------------------------------
-- Logo Watermark- A Simple FiveM Script, Made By Jordan.#2139 --
-----------------------------------------------------------------

fx_version "bodacious"
game "gta5"

-- Define the resource metadata
name "Logo Watermark"
description "A Simple Logo Watermark"
author "Jordan.#2139"
version "v1.2.0"




client_scripts {
	"client.lua",
	'config.lua'
}

ui_page 'html/ui.html'
files {
	'html/*',
	'img/logo.png'
}