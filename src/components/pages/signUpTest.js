// Wait for the DOM content to load before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Function to create a new DOM element with specified attributes
    function createElement(tag, attributes, html) {
        var element = document.createElement(tag);
        for (var key in attributes) {
            if (attributes.hasOwnProperty(key)) {
                element.setAttribute(key, attributes[key]);
            }
        }
        if (html) {
            element.innerHTML = html;
        }
        return element;
    }

    // Create link to CSS file
    var cssLink = createElement('link', {
        rel: 'stylesheet',
        href: 'signup.css'
    });

    // Create head element and append CSS link
    var head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(cssLink);

    // Create the main button to open the modal
    var openButton = createElement('button', {
        onclick: "document.getElementById('id01').style.display='block'"
    }, 'Sign Up');

    // Create the modal container
    var modal = createElement('div', {
        id: 'id01',
        class: 'modal'
    });

    // Create close button
    var closeButton = createElement('span', {
        class: 'close',
        onclick: "document.getElementById('id01').style.display='none'",
        title: 'Close Modal'
    }, 'TrueFaith');

    // Create form element
    var form = createElement('form', {
        class: 'modal-content',
        action: '/action_page.php'
    });

    // Create container for form content
    var container = createElement('div', {
        class: 'container'
    });

    // Build the form content
    container.innerHTML = `
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
        <hr>
        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required>

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required>

        <label for="psw-repeat"><b>Repeat Password</b></label>
        <input type="password" placeholder="Repeat Password" name="psw-repeat" required>

        <label for="bible-preference"><b>Select Your Preferred Bible Version</b></label>
        <select name="bible-types" id="bible">
            <option value="English Standard Version">English Standard Version</option>
            <option value="King James Version">King James Version</option>
            <option value="New International Version">NIV</option>
        </select>

        <label>
            <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
        </label>

        <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>

        <div class="clearfix">
            <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
            <button type="submit" class="signup">Sign Up</button>
        </div>
    `;

    // Append close button and form content to modal
    modal.appendChild(closeButton);
    form.appendChild(container);
    modal.appendChild(form);

    // Append main button and modal to the body of the document
    document.body.appendChild(openButton);
    document.body.appendChild(modal);
});
