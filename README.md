# GitHub Profile Fetcher

This project fetches and displays GitHub profile information using AJAX.

## Features

- Fetches GitHub profile data using `XMLHttpRequest`.
- Displays the user's name, username, avatar, number of repositories, followers, and following.
- Provides a link to the user's GitHub profile.

## Getting Started

### Prerequisites

- A web browser

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/maxh33/profile-fetcher
    ```
2. Navigate to the project directory:
    ```sh
    cd github-profile-fetcher
    ```

### Usage

1. Open `index.html` in your web browser.
2. The profile information for the specified GitHub user will be displayed.

### Choosing Between AJAX and Fetch API

By default, the project uses `XMLHttpRequest` (AJAX) to fetch GitHub profile data. If you prefer to use the Fetch API, follow these steps:

1. Open `index.html` in your code editor.
2. Locate the commented-out Fetch API example in the `<script>` section.
3. Uncomment the Fetch API example and comment out the `XMLHttpRequest` example.

