# PhotoBomb!
Image processing scripts for use with PhotoShop.

---

I used this collection of scripts to facilitate my job as a street photographer.
It's functions include opening images, resizing, placing templates and overlays and setting individual photos up for print.

---
## Usage

- Place folder at `C:\`
- Load `presets/functions.atn`.
- Create keyboard shortcuts in your actions pallettes


## Files

| File                  | Use                                                                                                                                                                                                                                                                                                                                                            |
| ----                  | -------                                                                                                                                                                                                                                                                                                                                                        |
| 5x7.jsx               | Asks for name of file, or creates one automatically, resizes to 5x7 and places it on the desktop                                                                                                                                                                                                                                                               |
| ActiveIndex.jsx       | Brings Photoshop back to the index file which contains all the unedited images                                                                                                                                                                                                                                                                                 |
| BackwardSwitch.jsx    | Moves PhotoShop back one file in the documents array                                                                                                                                                                                                                                                                                                           |
| baseline.jsx          | Switch that either creates the index file, places the default templates, or replaces the images in the currently open templates                                                                                                                                                                                                                                |
| ClearAside.jsx        | Removes saved files from PhotoLab folder                                                                                                                                                                                                                                                                                                                       |
| closeAllNoSave.jsx    | Close all documents                                                                                                                                                                                                                                                                                                                                            |
| close.jsx             | Close a file without saving                                                                                                                                                                                                                                                                                                                                    |
| createIndex.jsx       | Opens a dialog to select images for the session. Scales the size of all images to fit program and places them within a document for display                                                                                                                                                                                                                    |
| deleteLayer.jsx       | Deletes an image when the customer doesn't like it                                                                                                                                                                                                                                                                                                             |
| drop.jsx              | Runs the actions that places the templates on the currently selected layer from the index document                                                                                                                                                                                                                                                             |
| forwardSwitch         | Move PhotoShop up one document in the documents array                                                                                                                                                                                                                                                                                                          |
| Index2.0.jsx          | Faster version of createIndex.jsx. Uses place in image sourced from PhotoShop's own running code using ScriptListener. It brought file opening time from 45 seconds to 13 on my system for 9 32mb images. Effectively made my card reader's read speed the bottleneck. Use this if you have a USB 3.0 card reader, since most laptop's only read at 2.0 speeds |
| replacePhotos.jsx     | Resets open templates and places a new image within them                                                                                                                                                                                                                                                                                                       |
| rotateIfLandscape.jsx | Like the name says                                                                                                                                                                                                                                                                                                                                             |
| saveFile.jsx          | Prompts user for a file name or creates one. Since the index and templates are optimized for 8x10, it only needs to save the image to the desktop for printing                                                                                                                                                                                                 |
| sendEmail.jsx         | Creates an email folder if not present. Prompts user for email address. Iterates through the index document's layers saving the photos into a folder named after the email address                                                                                                                                                                             |
| setAside.jsx          | Places complete image into PhotoLab folder. This makes it accessible for the final sales presentation                                                                                                                                                                                                                                                          |
| showAside.jsx         | Opens all the processed images in the PhotoLab folder to display to client                                                                                                                                                                                                                                                                                     |
| debug/                | A collection of debugging scripts. Their names state their actions                                                                                                                                                                                                                                                                                             |
| drop/                 | This is where templates should be placed                                                                                                                                                                                                                                                                                                                       |
| presets/              | Load the functions presets and everything works!                                                                                                                                                                                                                                                                                                               |

---
## Note:
I did not place any templates in this repo. 
You should create your own. :)

To create your own, simply make one, place it in the drop folder, and create an action that resizes the image and places in the newly opened template.
After that, you can edit the drop.jsx file to include your action following the pattern found within.
This will help you create your own default template list.
