# Adding your real photos

The site is fully built and works right now with elegant placeholders
("sliding doors" that open on hover to a photo-shaped frame). To swap
in your real photos, just add image files with these exact names into
the `images/` folder — nothing else needs to change:

| Section   | Filename                     | Suggested photo |
|-----------|-------------------------------|------------------|
| Rooms     | `images/room-standard.jpg`   | Standard room |
| Rooms     | `images/room-deluxe.jpg`     | Deluxe room |
| Rooms     | `images/room-family.jpg`     | Family room |
| Dining    | `images/dining-hall-1.jpg`   | Dining hall / guests eating |
| Fitness   | `images/gym-station.jpg`     | Multi-gym station |
| Fitness   | `images/table-tennis.jpg`    | Table tennis room |
| Fitness   | `images/free-weights.jpg`    | Dumbbells / free weights |
| Fitness   | `images/bench-treadmill.jpg` | Bench + treadmill |
| Gallery   | `images/gallery-1.jpg` … `images/gallery-5.jpg` | Any five favourites |

Tips:
- JPG or PNG both work. Landscape photos (wider than tall) crop best.
- The moment a file appears at the right path, the placeholder frame
  is replaced with your photo automatically — no code edit needed.
- Want a real menu gallery? Add a photo of each dish and swap the
  icon in `.dish-icon` for an `<img>` the same way the room cards do,
  or just ask and it can be wired up.
