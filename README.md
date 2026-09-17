# 赞赏页 · Donate Page

[简体中文](README.md) | [繁體中文](README.zh-TW.md) | [English](README.en.md)

一个简洁的开源赞赏页面，通过 **GitHub Pages** 免费部署，支持**微信支付**与**支付宝**收款码。

纯 HTML / CSS / JS，零构建，推送即可上线。

视觉方向为「青瓷与墨」：衬线标题字 + 雾面青绿氛围。

## 在线地址

https://zhengqingquan.github.io/donate-page/

## 特性

- 首屏：「打赏支持」+ 一句说明 + 微信打赏 / 支付宝打赏双入口
- 弹窗展示打赏码大图，渠道文案可配置（微信赞赏码 / 支付宝收款码）
- 探索区直达 GitHub 与个人主页
- 爱心 favicon，响应式布局，尊重 `prefers-reduced-motion`
- 纯静态零构建，GitHub Actions 自动部署 Pages

## 快速开始

### 1. 放入收款码并部署

```bash
# 在本仓库根目录
# 替换为你自己的收款码（保持文件名）：
#   image/wechat.jpg   ← 微信赞赏码
#   image/alipay.png   ← 支付宝收款码

git add .
git commit -m "添加收款码"
git push origin main
```

推送后 Actions 会部署，地址一般为：

```
https://<你的用户名>.github.io/donate-page/
```

也可在仓库 **Settings → Pages** 查看部署状态。

### 2. 自定义

| 想要修改 | 位置 |
| --- | --- |
| 收款码图片 | `image/wechat.jpg`、`image/alipay.png` |
| 标题 / 文案 | `index.html` 的 hero / note |
| 收款方式配置 | `assets/js/main.js` 顶部的 `QRCODES` |
| 主题色 | `assets/css/style.css` 顶部的 CSS 变量 |

## 目录结构

```
donate-page/
├── index.html                 # 页面入口
├── README.md                  # 简体中文说明
├── README.zh-TW.md            # 繁體中文說明
├── README.en.md               # English docs
├── LICENSE
├── .gitignore
├── assets/
│   ├── css/style.css          # 样式与主题变量
│   └── js/main.js             # 弹窗与打赏渠道配置
├── image/
│   ├── wechat.jpg             # 微信赞赏码
│   └── alipay.png             # 支付宝收款码
└── .github/workflows/pages.yml
```

## 许可

MIT License — 自由使用、修改与分享。
