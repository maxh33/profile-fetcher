// Example of fetching GitHub profile data using AJAX (XMLHttpRequest)

document.addEventListener('DOMContentLoaded', function() {

        const nameElement = document.querySelector('#name');
        const usernameElement = document.querySelector('#username');
        const avatarElement = document.querySelector('#avatar');
        const reposElement = document.querySelector('#repos');
        const followersElement = document.querySelector('#followers');
        const followingElement = document.querySelector('#following');
        const linkElement = document.querySelector('#profile-link');

        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/maxh33', true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                if (nameElement) nameElement.innerText = data.name;
                if (usernameElement) usernameElement.innerText = data.login;
                if (avatarElement) avatarElement.src = data.avatar_url;
                if (followingElement) followingElement.innerText = data.following;
                if (followersElement) followersElement.innerText = data.followers;
                if (reposElement) reposElement.innerText = data.public_repos;
                if (linkElement) linkElement.href = data.html_url;
            } else if (xhr.readyState === 4) {
                console.error('Error fetching data:', xhr.statusText);
            }
        };
        xhr.send();
    });


// Example of fetching GitHub profile data using the Fetch API
    
        // document.addEventListener('DOMContentLoaded', function() {
        //     const nameElement = document.querySelector('#name');
        //     const usernameElement = document.querySelector('#username');
        //     const avatarElement = document.querySelector('#avatar');
        //     const reposElement = document.querySelector('#repos');
        //     const followersElement = document.querySelector('#followers');
        //     const followingElement = document.querySelector('#following');
        //     const linkElement = document.querySelector('#profile-link');

        //     fetch('https://api.github.com/users/maxh33')
        //         .then(function(res) {
        //             return res.json();
        //         })
        //         .then(function(data) {
        //         if (nameElement) nameElement.innerText = data.name;
        //         if (usernameElement) usernameElement.innerText = data.login;
        //         if (avatarElement) avatarElement.src = data.avatar_url;
        //         if (followingElement) followingElement.innerText = data.following;
        //         if (followersElement) followersElement.innerText = data.followers;
        //         if (reposElement) reposElement.innerText = data.public_repos;
        //         if (linkElement) linkElement.href = data.html_url;
        //         })
        //         .catch(function(err) {
        //             console.error('Error fetching data:', err.message);
        //         });
        // })
