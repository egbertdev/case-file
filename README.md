# 📂 CaseFile: A Detective-Themed Developer Portfolio

**[Live Demo](https://egbert-joel.vercel.app/)** ## 📖 What is this?
CaseFile is my personal portfolio styled to look like an old-school detective’s folder. I built this to show that I’m not just a backend guy—I can build high-end, creative interfaces that actually feel real to the user.

## 🚀 How it Works (The Cool Stuff)

- **Physical Navigation:** The tabs at the top (PERSONNEL, CASES, etc.) aren't just buttons. They are coded to look like real folder tabs. When you click one, it "merges" into the paper stack using clever CSS tricks with borders and layers.
- **Realistic Textures:** I used a mix of paper textures and CSS "blend modes" to make the screen look like actual parchment. It’s gritty and detailed, but it still loads fast because it’s mostly code, not heavy images.
- **Handwritten Feel:** I used cursive fonts and specific alignments to make the text look like it was typed or handwritten into the file. Even my profile photo is styled to look like it was taped onto the page.
- **Mobile-First Design:** Making a horizontal folder look good on a vertical phone is hard. I wrote custom styles to make sure the "folder" stretches properly on mobile so it’s still easy to read and navigate on a small screen.

## 🛠️ Tech I Used

- **Vue 3:** For the main engine and the smooth page transitions.
- **Tailwind CSS:** For all the shadows, textures, and layout.
- **Vue Router:** To handle switching between the different "files" in the folder.

## ⚙️ How to Run it

This is a standard Vue project.

1. Clone the repo:
   git clone https://github.com/egbertdev/case-file.git

2. Install and Run:
   npm install
   npm run dev

3. Build for Production:
   npm run build

## 💡 The Challenge

The hardest part was making the "paper" area scrollable while keeping the folder background fixed. I had to build a custom scrollbar and a specific layout container so that the user feels like they are scrolling through a stack of papers inside a physical folder.
