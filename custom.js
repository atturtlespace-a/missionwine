////////////////////////////////////////////////////////////
// Tag Interaction
$(document).ready(function () {
  $(document)
    .on("mouseover", ".clear-tag", function () {
      $(this).find(".tag-remove").addClass("hover-in");
    })
    .on("mouseout", ".clear-tag", function () {
      $(this).find(".tag-remove").removeClass("hover-in");
    });
});

////////////////////////////////////////////////////////////
//Clear All Main Button
$(document).ready(function () {
  function checkTagsContainer() {
    if ($(".fs-cmsfilter_active").length) {
      $('[fs-cmsfilter-element="reset"]').show();
    } else {
      $('[fs-cmsfilter-element="reset"]').hide();
    }
  }

  // Check for tags-container initially
  checkTagsContainer();
  setInterval(checkTagsContainer, 1);
});

////////////////////////////////////////////////////////////
// Search Query// Get references to the input and text elements
const input = document.getElementById("search-if");
const display = document.getElementById("search-display");
const defaultText = "Wine"; // Default text for the display element

// Add an event listener to the input field
input.addEventListener("input", function () {
  // Get the current search query
  const query = input.value;

  if (query) {
    // Update the text of the display element
    display.textContent = `Searching for: "${query}"`;
  } else {
    // Set the text of the display element back to the default
    display.textContent = defaultText;
  }
});

////////////////////////////////////////////////////////////
// Pricing Range Slider Tag
$(document).ready(function () {
  $(document).on("DOMNodeInserted", function (e) {
    if ($(e.target).is("div.tag-text")) {
      var text = $(e.target).text();
      var pattern = /\[(\d*|--),\s*(\d*|--)]/;
      if (pattern.test(text)) {
        var formattedText = text.replace(pattern, function (match, p1, p2) {
          if (p1 !== "--" && p2 !== "--") {
            return "$" + p1 + " - $" + p2;
          } else if (p1 === "--") {
            return "$" + p2;
          } else {
            return "$" + p1;
          }
        });
        $(e.target).text(formattedText);
      }
    }
  });
});

////////////////////////////////////////////////////////////
// Single Clear Buttons

function initClearButtons() {
  const parentDivs = document.querySelectorAll('[clear-button="wrapper"]');

  parentDivs.forEach(function (parentDiv) {
    const buttonDiv = parentDiv.querySelector('[clear-button="button"]');

    function updateButtonVisibility() {
      const activeLabels = parentDiv.querySelectorAll(".fs-cmsfilter_active");

      if (activeLabels.length > 0) {
        buttonDiv.style.display = "block"; // show button div
      } else {
        buttonDiv.style.display = "none"; // hide button div
      }
    }

    updateButtonVisibility(); // initially update button visibility

    setInterval(function () {
      updateButtonVisibility(); // update button visibility every 2 seconds
    }, 100);
  });
}

window.onload = function () {
  initClearButtons();
};

////////////////////////////////////////////////////////////
//Get all the wrapper elements
const wrappers = document.querySelectorAll('[fs-hide-show="wrapper"]');

// Loop through the wrappers
wrappers.forEach(function (wrapper) {
  // Get the list item element for this wrapper
  const listItem = wrapper.querySelector('[fs-hide-show="list-item"]');

  // Get the button element for this wrapper
  const button = wrapper.querySelector('[fs-hide-show="button"]');
  button.textContent = "Show More";

  // Add a click event listener to the button for this wrapper
  button.addEventListener("click", function () {
    // Loop through the items after the first three for this wrapper and toggle their "display" style between "none" and "flex"
    wrapper
      .querySelectorAll('[fs-hide-show="list-item"]:nth-child(n+6)')
      .forEach(function (item) {
        const computedStyle = window.getComputedStyle(item);
        if (computedStyle.display === "none") {
          item.style.display = "flex";
          button.textContent = "Show Fewer";
        } else {
          item.style.display = "none";
          button.textContent = "Show More";
        }
      });
  });
});


//interactions for product card
/*
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".product-card-wrapper").forEach((trigger) => {
    trigger.addEventListener("mouseover", function () {
      this.querySelectorAll(".product-image-wrapper").forEach((target) =>
        target.classList.add("hover-in")
      );
    });
  });

  document.querySelectorAll(".product-card-wrapper").forEach((trigger) => {
    trigger.addEventListener("mouseout", function () {
      document
        .querySelectorAll(".product-image-wrapper")
        .forEach((target) => target.classList.remove("hover-in"));
    });
  });
});
*/
