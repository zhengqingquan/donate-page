# 赞赏页 · Donate Page

一个简洁的开源赞赏页面，通过 **GitHub Pages** 免费部署，支持**微信支付**与**支付宝**收款码。

纯 HTML / CSS / JS，零构建，推送即可上线。

视觉方向为「青瓷与墨」：衬线品牌字 + 雾面青绿氛围，与常见紫渐变模板区分开。

## 特性

- 品牌优先的首屏：大字「赞赏」+ 一句说明 + 双支付入口
- 点击弹出收款码大图，支持保存 / 长按识别
- 响应式布局，手机与桌面均可
- 尊重 `prefers-reduced-motion`
- GitHub Actions 自动部署 Pages

## 快速开始

### 1. 放入收款码并部署

```bash
# 在本仓库根目录
# 替换为你自己的收款码（保持文件名）：
#   image/wechat.png   ← 微信收款码
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
| 收款码图片 | `image/wechat.png`、`image/alipay.png` |
| 标题 / 文案 | `index.html` 的 hero / note |
| 收款方式配置 | `assets/js/main.js` 顶部的 `QRCODES` |
| 主题色 | `assets/css/style.css` 顶部的 CSS 变量 |

## 目录结构

```
donate-page/
├── index.html
├── assets/
│   ├── css/style.css
│   └── js/main.js
├── image/
│   ├── wechat.png
│   └── alipay.png
└── .github/workflows/pages.yml
```

当前 `image/` 下是占位图，请换成真实收款码后再公开部署。

## 许可

MIT License — 自由使用、修改与分享。
