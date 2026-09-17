# Donate Page

[简体中文](README.md) | [繁體中文](README.zh-TW.md) | [English](README.en.md)

A simple open-source tip jar page, free to host on **GitHub Pages**, with **WeChat** and **Alipay** QR codes.

Plain HTML / CSS / JS — zero build step; push to go live.

Visual direction “celadon & ink”: serif headlines with a misty teal atmosphere.

## Live site

https://zhengqingquan.github.io/donate-page/

## Features

- Hero: “打赏支持” plus a short line and WeChat / Alipay tip buttons
- Modal shows a large QR image; per-channel copy (WeChat tip code / Alipay pay code)
- Explore links to GitHub and the personal homepage
- Heart favicon, responsive layout, respects `prefers-reduced-motion`
- Fully static; GitHub Actions deploys to Pages

## Quick start

### 1. Add QR codes and deploy

```bash
# At the repo root
# Replace with your own QR images (keep the filenames):
#   image/wechat.jpg   ← WeChat tip / appreciation code
#   image/alipay.png   ← Alipay payment code

git add .
git commit -m "Add payment QR codes"
git push origin main
```

After the push, Actions deploys. The URL is usually:

```
https://<your-username>.github.io/donate-page/
```

You can also check status under **Settings → Pages**.

### 2. Customize

| What to change | Where |
| --- | --- |
| QR images | `image/wechat.jpg`, `image/alipay.png` |
| Titles / copy | hero section in `index.html` |
| Payment channel config | `QRCODES` at the top of `assets/js/main.js` |
| Theme colors | CSS variables at the top of `assets/css/style.css` |

## Layout

```
donate-page/
├── index.html                 # page entry
├── README.md                  # Simplified Chinese
├── README.zh-TW.md            # Traditional Chinese
├── README.en.md               # English
├── LICENSE
├── .gitignore
├── assets/
│   ├── css/style.css          # styles & theme variables
│   └── js/main.js             # modal & tip-channel config
├── image/
│   ├── wechat.jpg             # WeChat tip code
│   └── alipay.png             # Alipay payment code
└── .github/workflows/pages.yml
```

## License

MIT License — free to use, modify, and share.
