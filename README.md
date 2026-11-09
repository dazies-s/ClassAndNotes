## 1. Project Title

StudyQuest

## 2. Project Description

Studying for exams or mastering complex subjects can often feel tedious, repetitive, and unengaging, leading to burnout and low retention. **StudyQuest** is a gamified web application designed to solve this problem by transforming traditional study sessions into interactive learning games. Students can use the application to practice study sets, test their knowledge, and stay motivated through gamification elements. Users would want to use StudyQuest because it turns the chore of studying into an engaging, rewarding experience.

With this application, users will be able to play study-based mini-games using their custom study sets, earn virtual currency based on their performance, and spend that currency in a shop to purchase custom cosmetics to personalize their user profile. Additionally, the platform tracks learning progress over time, allowing users to showcase their mastery and statistics directly on their profile.

## 3. Target Users

* **Students (High School and College):** Individuals looking for a more interactive and entertaining alternative to traditional flashcards or notes to prepare for tests.



## 4. Core Features

* **Study Game Mode:** Users can select or input study sets (questions and answers) and play interactive mini-games to test their knowledge.
* **Economy & Reward System:** Users earn virtual currency based on correct answers and game completion metrics.
* **Cosmetic Shop & Profile Customization:** Users can spend earned virtual currency to buy avatars, badges, themes, and profile decorations to make their profile look unique.
* **Progress Dashboard & Analytics:** Users can view detailed statistics and history of their performance across different study sets to track their learning progress over time.
* **Study Set Management:** Users can create, view, edit, or delete their own custom study questions and categories.



## 5. Project Scope & Feasibility

This project is scoped to be realistically completed within an 8-week timeframe by focusing on core functionality while keeping advanced features optional.

* **Essential Functionality:** Core study mini-game mechanics, basic point tracking, simple profile display, and local state management/mock data for study sets.
* **Optional / Stretch Features:** Advanced multiplayer mini-games, complex backend database synchronization, or an extensive animated shop inventory.
* **Anticipated Challenges:** Managing frontend state across multiple views (gameplay, shop, and profile dashboard) and cleanly mapping earned currency/stats back to the user profile.

## 6. Initial UI Sketch


---

### 1. Dashboard / Home Page

* **Purpose:** Serves as the central hub where users land upon logging in, providing quick access to games, study sets, and a summary of their current status.
* **Layout Structure:**
* **Top Navigation Bar:** Logo ("StudyQuest"), Currency Balance tracker (e.g., *Coins: 450*), and Navigation Links (*Dashboard, Games, Study Sets, Shop, Profile*).
* **Hero / Welcome Banner:** "Welcome back, [Username]!" with a quick "Resume Last Studied Set" button.
* **Quick Stats Widget:** Daily streak counter, total currency earned, and total study sets mastered.
* **Quick Actions / Shortcuts Grid:** Cards allowing the user to "Play a Game", "View Study Sets", or "Visit Shop".



### 2. Game Page

* **Purpose:** The interactive space where users play study-based mini-games to test their knowledge and earn currency.
* **Layout Structure:**
* **Header Bar:** Active Study Set Title, Timer, current score, and currency earned so far in this session.
* **Game Arena (Center):**
* A question prompt area displaying the flashcard question or quiz item.
* Multiple-choice options or a text-input box for the user's answer.


* **Feedback / Action Footer:** A "Submit Answer" button, followed by instant visual feedback (correct/incorrect indicator) and a "Next Question" button once answered.



### 3. Profile Page (Including Progressions)

* **Purpose:** Showcases the user's customized avatar, profile decorations, and detailed statistics on their study progress.
* **Layout Structure:**
* **Profile Header Section:**
* Equipped Avatar and profile background/decorations purchased from the shop.
* Username, user level, and total currency balance.


* **Study Progress Analytics Section:**
* A progress breakdown showing completed study sets, accuracy percentages, and mastery levels (e.g., *Data Structures: 85% Mastered*).


* **Recent Activity Log:** A list of recent games played and currency earned.



### 4. Shop Page

* **Purpose:** A marketplace where students can spend the virtual currency they earned from studying to buy new cosmetics.
* **Layout Structure:**
* **Shop Header:** User's current coin balance (e.g., *Balance: 450 Coins*).
* **Filter Tabs:** *All Items, Avatars, Profile Borders, Background Themes*.
* **Item Grid (Catalog):**
* Cards representing available items. Each card displays an image/preview of the item, its name, its price in currency, and a "Buy / Equip" button (e.g., *Cool Glasses - 200 Coins*).





### 5. Edit Study Set Page

* **Purpose:** Allows users to modify an existing study set by updating its title, category, or individual questions and answers.
* **Layout Structure:**
* **Header:** "Edit Study Set: [Set Title]" with a "Save Changes" button in the top right.
* **Metadata Form:** Input fields for updating the Study Set Title and Category description.
* **Question List Editor:**
* A dynamic list of current question-and-answer rows.
* Each row has editable text inputs for *Question* and *Answer*, alongside a "Delete Question" button.


* **Footer Action:** An "Add Another Question" button at the bottom of the list.



### 6. Create a Study Set Page

* **Purpose:** A form-based page where users can build a brand new study set from scratch.
* **Layout Structure:**
* **Header:** "Create New Study Set" with a "Publish / Create" button.
* **Metadata Form:** Empty input fields for *Set Name*, *Description*, and *Category*.
* **Dynamic Question Builder:**
* Clean form blocks to enter a *Question* and its corresponding *Answer*.
* "+ Add Question" button to dynamically append new input blocks.




### 7. View All Study Sets Page (Including Progressions)

* **Purpose:** Displays a comprehensive catalog of all available study sets, showing the user's individual progress on each one.
* **Layout Structure:**
* **Header:** "My Study Sets" with a prominent "+ Create New Set" button linking to the creation page.
* **Search & Filter Bar:** A search bar to look up sets by keyword and filter options (*All, In Progress, Completed*).
* **Study Set Cards Grid:**
* Each card displays the set title, category, total number of terms, and a **Progress Bar** indicating mastery (e.g., *Progress: 60% Complete*).
* Action buttons on each card: **"Study / Play Game"**, **"Edit"**, and **"Delete"**.

## 7. Initial Data Requirements

To function properly, the application will need to store and manage the following major data types:

* **Users / Profiles:** User info, currency balance, and equipped cosmetics.
* **Study Sets:** Categories, titles, and associated questions/answers.
* **Game Performance / Progress Logs:** Scores, completion timestamps, and mastery metrics per study set.
* **Shop Items:** Available cosmetics, prices, and unlock statuses.


**Milestone 2 Submission**  
**Live Application:** [https://<your-username>.github.io/ClassAndNotesProject/](https://<your-username>.github.io/ClassAndNotesProject/)

---

## 🌟 Overview

**StudyQuest** is a single-page React application designed to transform study flashcard sets into an engaging RPG-style progression system. Users can review study sets, earn gold coins by answering questions in the game arena, track daily login streaks, and spend earned coins on custom cosmetic items in the shop.

---

## ✨ Features & Component Architecture

### 7 Core Interactive Views
1. **Dashboard (`dashboard`)**: Home view displaying user streak, coin balance, and quick navigation actions.
2. **Study Sets (`studySets`)**: Displays saved study sets with category indicators, completion progress, and options to study, edit, or delete sets.
3. **Game Arena (`game`)**: Interactive study mode where answering flashcard questions rewards players with gold coins.
4. **Cosmetic Shop (`shop`)**: Virtual catalog where players spend coins on custom avatar accessories and borders.
5. **Profile & Showcase (`profile`)**: Displays player stats, active cosmetics, and subject mastery percentages.
6. **Create Set (`createSet`)**: Form interface for creating new flashcard study sets.
7. **Edit Set (`editSet`)**: Interface for updating existing questions and answers within a study set.

### Components & Data Structures
* **`Navbar.jsx`**: Modular header navigation bar receiving `activeView`, `setActiveView`, and `coins` as props. Uses `.map()` to dynamically render navigation items and highlight active states while displaying live coin balances.
* **`mockData.js`**: Centralized datasets providing initial state values:
  * `initialProfile`: Tracks user progression (`Username`, `coins`, `streak`, `equippedAvatar`, `euippedBorder`).
  * `initialStudySets`: Stores subject categories, mastery percentage (`progress`), and question/answer pairs.
  * `shopItems`: Itemized catalog of purchasable avatar cosmetics and profile borders (`name`, `category`, `price`, `color`).

---

## 🎨 Theme & Palette

The application uses custom CSS color variables defined in `src/index.css`:

* **Background Dark Blue:** `#0f0f1a` (`var(--bg-darkblue)`)
* **Card Container:** `#1e1e2e` (`var(--bg-card)`)
* **Navigation Bar:** `#161622` (`var(--bg-nav)`)
* **Purple (Primary Accent):** `#646cff` (`var(--color-purple)`)
* **Gold (Coins/Rewards):** `#eab308` (`var(--color-gold)`)
* **Green (Success/Actions):** `#22c55e` (`var(--color-green)`)
* **Orange (Streak/Highlight):** `#ff9900` (`var(--color-orange)`)
* **Blue (Secondary Buttons):** `#3b82f6` (`var(--color-blue)`)
* **Red (Delete Actions):** `#ef4444` (`var(--color-red)`)
* **Grey (Subtext/Borders):** `#94a3b8` (`var(--color-grey)`)