// plugins/custom-header/assets/javascripts/discourse/initializers/custom-header.js

export default {
    name: "custom-header",
    initialize() {
      // Create the custom header HTML
      const customHeaderHtml = `
        <script src="https://kit.fontawesome.com/41ee1a5eed.js" crossorigin="anonymous"></script>
        <div id="custom-header">
          <div id="header-left">
            <!-- Your main logo HTML here -->
            <a href="/">
              <img src="https://www.pagalguy.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/01/cropped-Untitled-1-1.png.webp" alt="Your Logo">
            </a>
          </div>
          <div id="header-center">
            <a href="/">MBA Entrance Exam 2023</a>
            <a href="/">Bank PO Exam</a>
            <a href="/">Engineering</a>
            <a href="/">SSC</a>
            <a href="/">UPSC</a>
            <a href="/">Advertise</a>
            <div class="dropdown">
              <button class="dropbtn">Others+</button>
              <div class="dropdown-content">
                <!-- Add your options here -->
                <a href="/">Option 1</a>
                <a href="/">Option 2</a>
                <a href="/">Option 3</a>
              </div>
            </div>
          </div>
          <div id="header-right">
            <!-- Add your sign-in, sign-up, search, and menu icons here -->
            <a href="/login" class="header-button">Sign up</a>
            <a href="/signup" class="header-button">Log in</a>
            <span class="header-icon"><i class="fa fa-search"></i></span>
            <span class="header-icon"><i class="fa fa-bars"></i></span>
          </div>
        </div>
      `;
  
      // Inject the custom header HTML into the Discourse header
      $("body").prepend(customHeaderHtml);
    },
  };
  