# Local Preview (V1 / V2)

If you got `404 /preview-v1.html` or `404 /preview-v2.html`, the server is usually started in the wrong folder.

## Correct steps

```bash
cd /path/to/Ryanchou24.github.io
python3 -m http.server 4173
```

Then open:

- http://localhost:4173/preview.html
- http://localhost:4173/preview-v1.html
- http://localhost:4173/preview-v2.html

## Why your previous command failed

Your terminal prompt showed `MacBook-Pro-383:Applications ...`, which means the server root was `Applications/`, not this repo.
So `preview-v1.html` and `preview-v2.html` did not exist under that served folder and returned 404.
