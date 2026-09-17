# 讚賞頁 · Donate Page

[简体中文](README.md) | [繁體中文](README.zh-TW.md) | [English](README.en.md)

一個簡潔的開源讚賞頁面，透過 **GitHub Pages** 免費部署，支援**微信支付**與**支付寶**收款碼。

純 HTML / CSS / JS，零建置，推送即可上線。

視覺方向為「青瓷與墨」：襯線標題字 + 霧面青綠氛圍。

## 線上地址

https://zhengqingquan.github.io/donate-page/

## 特性

- 首屏：「打賞支援」+ 一句說明 + 微信打賞 / 支付寶打賞雙入口
- 彈窗展示打賞碼大圖，渠道文案可設定（微信讚賞碼 / 支付寶收款碼）
- 探索區直達 GitHub 與個人主頁
- 愛心 favicon，響應式版面，尊重 `prefers-reduced-motion`
- 純靜態零建置，GitHub Actions 自動部署 Pages

## 快速開始

### 1. 放入收款碼並部署

```bash
# 在本倉庫根目錄
# 替換為你自己的收款碼（保持檔名）：
#   image/wechat.jpg   ← 微信讚賞碼
#   image/alipay.png   ← 支付寶收款碼

git add .
git commit -m "添加收款碼"
git push origin main
```

推送後 Actions 會部署，地址一般為：

```
https://<你的使用者名稱>.github.io/donate-page/
```

也可在倉庫 **Settings → Pages** 查看部署狀態。

### 2. 自訂

| 想要修改 | 位置 |
| --- | --- |
| 收款碼圖片 | `image/wechat.jpg`、`image/alipay.png` |
| 標題 / 文案 | `index.html` 的 hero / note |
| 收款方式設定 | `assets/js/main.js` 頂部的 `QRCODES` |
| 主題色 | `assets/css/style.css` 頂部的 CSS 變數 |

## 目錄結構

```
donate-page/
├── index.html                 # 頁面入口
├── README.md                  # 简体中文说明
├── README.zh-TW.md            # 繁體中文說明
├── README.en.md               # English docs
├── LICENSE
├── .gitignore
├── assets/
│   ├── css/style.css          # 樣式與主題變數
│   └── js/main.js             # 彈窗與打賞渠道設定
├── image/
│   ├── wechat.jpg             # 微信讚賞碼
│   └── alipay.png             # 支付寶收款碼
└── .github/workflows/pages.yml
```

## 授權

MIT License — 自由使用、修改與分享。
