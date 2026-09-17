# Puligadda Nagaraju — Full Stack Developer Portfolio

Premium animated React + Vite portfolio generated from the uploaded resume and profile photo.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages

The Vite config automatically derives the GitHub Pages repository base path from `GITHUB_REPOSITORY` during GitHub Actions builds, so you do not need to hard-code the repository name.

1. Create a GitHub repository.
2. Push this project to the `main` branch.
3. In GitHub, open **Settings → Pages**.
4. Set **Source** to **GitHub Actions**.
5. The workflow in `.github/workflows/deploy.yml` will build and deploy the site on every push to `main`.

### Git commands

```bash
git init
git add .
git commit -m "Create premium portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPOSITORY` with your GitHub details.

## Assets

- Profile photo: `public/profile/nagaraju.png`
- Resume: `public/resume/Puligadda_Nagaraju_Resume.docx`

LinkedIn, GitHub and Portfolio are mentioned in the resume, but their URLs were not present in the extracted resume text. The portfolio therefore does not invent those URLs.
