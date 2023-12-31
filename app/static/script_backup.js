// Function to show the waiting overlay and loading message with progress bar
function showWaitingOverlay() {
  const waiting = document.getElementById("waiting");
  waiting.style.display = "block";
  var loadingMessage = document.getElementById('loadingMessage');
  loadingMessage.style.display = "block";
  var progressBar = document.getElementById('progressBar');
  var progressLabel = document.getElementById('progressLabel');
  var progress = 0;
  var intervalId = setInterval(function() {
    progress += 1;
    progressBar.style.width = progress + '%';
    progressLabel.textContent = 'Generating your images... ' + progress + '%';
    if (progress >= 100) {
      clearInterval(intervalId);
      hideWaitingOverlay();
      showOverlay();
    }
  }, 1000);
}


// Function to hide the waiting overlay and loading message
function hideWaitingOverlay() {
  const waiting = document.getElementById("waiting");
  waiting.style.display = "none";
}
// Function to show the overlay
function showOverlay() {
  const overlay = document.getElementById("overlay");
  overlay.style.display = "block";
}
// Function to hide the overlay
function hideOverlay() {
  const overlay = document.getElementById("overlay");
  overlay.style.display = "none";
}
// Example usage when "Make the Magic" button is clicked
const magicButton = document.getElementById("magicButton");
magicButton.addEventListener("click", function() {
  showWaitingOverlay();
});

// modal P
document.getElementById('password-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var passwordInput = document.getElementById('password');
    var errorMessage = document.getElementById('error-message');
    
    if (passwordInput.value === '4yVd4nt3') {
        // Password is correct, close the modal or perform desired actions
        var modalP = document.querySelector('.modalP');
        modalP.style.display = 'none';
    } else {
        // Password is incorrect, display error message
        errorMessage.textContent = 'Invalid password. Schedule a call.';
    }
});

//end modal P

document.addEventListener("DOMContentLoaded", function() {
    
 
    // Function to handle the form submission
    function handleSubmit(event) {
      event.preventDefault();
      // Disable the "Make the Magic" button to prevent multiple clicks
      const magicButton = document.getElementById("magicButton");
      magicButton.disabled = true;
      // Check if the form is being reset
      if (event.submitter.id === "clearAllButton") {
        clearAll();
        return;
      }
      showOverlay(); // Show the overlay and loading message
    const fileInput = document.getElementById("imageDisplayUrl");
      const file = fileInput.files[1];
      if (file) {
        // Image file is selected
        const apiKey = "ba238be3f3764905b1bba03fc7a22e28"; // Replace with your actual API key
        const uploadUrl = "https://api.imgbb.com/1/upload";
        const formData = new FormData();
        formData.append("key", apiKey);
        formData.append("image", file);
        fetch(uploadUrl, {
          method: "POST",
          body: formData
        })
          .then(response => response.json())
          .then(data => {
            if (data.success) {
              // Image uploaded successfully
              const imageUrl = data.data && data.data.medium && data.data.medium.url;
              const selectedValues = getSelectedValues(); // Get the selected form values
              generateImages(imageUrl, selectedValues);
            } else {
              // Image upload failed
              console.error("Image upload failed:", data.error.message);
              // Enable the "Make the Magic" button to allow another attempt
              magicButton.disabled = false;
              hideOverlay(); // Hide the overlay and loading message
            }
          })
          .catch(error => {
            console.error("Error uploading image:", error);
            // Enable the "Make the Magic" button to allow another attempt
            magicButton.disabled = false;
            hideOverlay(); // Hide the overlay and loading message
          });
      } else {
        // Image file is not selected
        const selectedValues = getSelectedValues(); // Get the selected form values
        generateImages(null, selectedValues);
        hideOverlay(); // Hide the overlay and loading message
      }
      // Update the download JSON button with the selected form values
//      const selectedValues = getSelectedValues();
//      updateDownloadButton(selectedValues);
    }
  // Function to update the download JSON button
//  function updateDownloadButton(selectedValues) {
//    const downloadJsonButton = document.getElementById("downloadJsonButton");
//    downloadJsonButton.addEventListener("click", () => {
//      const jsonData = JSON.stringify(selectedValues, null, 2);
//      downloadFile(jsonData, "selected_values.json");
//    });
//  }
  // Function to download the JSON file
//  function downloadFile(data, filename) {
//    const blob = new Blob([data], { type: "application/json" });
//    const url = URL.createObjectURL(blob);
//    const link = document.createElement("a");
//    link.href = url;
//    link.download = filename;
//    link.click();
//  }
    function getSelectedValues(imageUrl = "") {
         /* const designStyleValue = document.getElementById("design_style").value;
          const impossibleArchitectureValue = document.getElementById("impossible_architecture").value;

          const wrappedDesignStyle = "(((" + designStyleValue + ")))";
          const wrappedImpossibleArchitecture = "(((" + impossibleArchitectureValue + ")))";*/
        
                return {
                    
                
                //level shot
                point_of_view: document.getElementById("point_of_view").value,
                //colors
                primary_color: document.getElementById("primary_color").value,
                secondary_color: document.getElementById("secondary_color").value,
                tertiary_color: document.getElementById("tertiary_color").value,
                color_scheme: document.getElementById("color_scheme").value,
               
                //room size
                room_size: document.getElementById("room_size").value,
                //room design
                home_room: document.getElementById("home_room").value,
                space_to_be_designed: document.getElementById("space_to_be_designed").value,
                child_room: document.getElementById("child_room").value,
                pool: document.getElementById("pool").value,
                garden: document.getElementById("garden").value,
                room_shape: document.getElementById("room_shape").value,
                //inspiration
                inspired_by_this_interior_design_magazine: document.getElementById("inspired_by_this_interior_design_magazine").value,
                furniture_provided_by_this_vendor: document.getElementById("furniture_provided_by_this_vendor").value,
                    furniture_color: document.getElementById("furniture_color").value,
                designed_by_this_interior_designer: document.getElementById("designed_by_this_interior_designer").value,
                designed_by_this_architect: document.getElementById("designed_by_this_architect").value,
                //film
                film_used_to_take_the_shot: document.getElementById("film_used_to_take_the_shot").value,
                illumination: document.getElementById("illumination").value,
                //architecture
                door: document.getElementById("door").value,
                windows: document.getElementById("windows").value,
                ceiling_design: document.getElementById("ceiling_design").value,
                roof_material: document.getElementById("roof_material").value,
                roof_height: document.getElementById("roof_height").value,
                wall_type: document.getElementById("wall_type").value,
                wall_cladding: document.getElementById("wall_cladding").value,
                exterior_finish: document.getElementById("exterior_finish").value,
                exterior_trim_molding: document.getElementById("exterior_trim_molding").value,
                exterior_paint_color: document.getElementById("exterior_paint_color").value,
                facade_pattern: document.getElementById("facade_pattern").value,
                floors: document.getElementById("floors").value,

                    
                    //interior
                staircase_design: document.getElementById("staircase_design").value,
                railing_style: document.getElementById("railing_style").value,
                kitchen_layout: document.getElementById("kitchen_layout").value,
                countertop_material: document.getElementById("countertop_material").value,
                backsplash_design: document.getElementById("backsplash_design").value,
                cabinet_storage_design: document.getElementById("cabinet_storage_design").value,
                appliance_style_finish: document.getElementById("appliance_style_finish").value,
                bathroom_fixture_style: document.getElementById("bathroom_fixture_style").value,
                bathroom_tile_design: document.getElementById("bathroom_tile_design").value,
                bathroom_vanity_style: document.getElementById("bathroom_vanity_style").value,
                shower_bathtub_design: document.getElementById("shower_bathtub_design").value,
                bathroom_lighting_fixtures: document.getElementById("bathroom_lighting_fixtures").value,
                fireplace_design: document.getElementById("fireplace_design").value,
                balcony_design: document.getElementById("balcony_design").value,


                    
                material: document.getElementById("material").value,
                ceramic_material: document.getElementById("ceramic_material").value,
                fabric: document.getElementById("fabric").value,
                stone_material: document.getElementById("stone_material").value,
                marble_material: document.getElementById("marble_material").value,
                wood_material: document.getElementById("wood_material").value,
                    //render
                picture: document.getElementById("picture").value,
                    design_style:   document.getElementById("design_style").value
                    /*design style
                    design_style: wrappedDesignStyle,
                    impossible_architecture: wrappedImpossibleArchitecture*/
                    
                //image link
                //imageUrl: document.getElementById("imageDisplayUrl").value
                };
    }
    
   
    // Function to generate the optional text
    function generateOptionalText() {
      return "(((Rounded organic shapes, rounded shapes, organic shapes)))";
    }

 
    function generateImages(imageUrl, selectedValues) {
      const includeOptionalText = document.getElementById("optionalTextCheckbox").checked;

      const apiKey = "X0qYOcbNktuRv1ri0A8VK1WagXs9vNjpEBLfO8SnRRQhN0iWym8pOrH1dOMw"; // Replace with your actual API key

      // Retrieve the value of the custom text area
      const customText = document.getElementById("customText").value;
      // Update the promptInit variable based on the selected value from the "Render" select input
      const pictureSelect = document.getElementById("picture");
      const selectedPicture = pictureSelect.value;
      const promptInit = ` ${selectedPicture}, interiordesign, homedecor, architecture, homedesign, UHD`;

      // Generate the plain text representation of the selected values
      let plainText = Object.entries(selectedValues)
        .filter(([key, value]) => value && key !== "imageUrl")
        .map(([key, value]) => `${key}: ${value}`)
        .join(", ");

const promptEndy = ` interiordesign, homedecor, architecture, homedesign, UHD,    ${selectedPicture}, `;
      const aspectRatio = document.querySelector('input[name="aspectRatio"]:checked').value;
      const width = aspectRatio === "portrait" ? 512 : 1024;
      const height = aspectRatio === "portrait" ? 1024 : 512;

      const seedSwitch = document.getElementById("seedSwitch");
      const seedEnabled = seedSwitch.checked;
      const seedValue = seedEnabled ? null : "19071975";
        // Replace "YOUR_SEED_VALUE" with the actual seed value you want to use

       
        const optionalText = includeOptionalText ? generateOptionalText() : "";
        const promptText = `${promptInit} ${plainText} ${customText} ${promptEndy} ${optionalText}`;


        
      // Combine the promptInit with the plain text representation
//   const promptText = `${promptInit} ${plainText} ${customText} ${promptEndy}`;

      showOverlay(); // Show the overlay and loading message
      showWaitingOverlay(); // Show the waiting overlay
      const prompt = {
        key: apiKey,
        prompt: JSON.stringify(promptText),
        negative_prompt: "split image, out of frame, lowres, text, error, cropped, worst quality, low quality, jpeg artifacts, duplicate, out of frame, blurry,   bad proportions,  gross proportions,  username, watermark, signature, blurry, bad proportions, art, anime, tiling,out of frame, disfigured, deformed, watermark, ",
        width: width,
        height: height,
        samples: "4",
        num_inference_steps: "20",
        seed: seedValue, // Set the seed value based on the switch state
        guidance_scale: 7.5,
        webhook: null,
        track_id: null,
        safety_checker: null,
        enhance_prompt: null,
        multi_lingual: null,
        panorama: null,
        self_attention: null,
        upscale: null,
        embeddings_model: null,
      };

      const chipsSV = document.getElementById("chipsSV");
      chipsSV.innerHTML = ""; // Clear the existing content

      for (const [key, value] of Object.entries(selectedValues)) {
        if (value) {
          const chip = document.createElement("span");
          chip.classList.add("chipSV");

          // Check if the value is a valid hex color
          const isHexColor = /^#[0-9A-Fa-f]{6}$/i.test(value);
          if (isHexColor) {
            chip.classList.add("hexDot"); // Add the "hexDot" class
            chip.style.backgroundColor = value;
          } else {
            chip.textContent = value;
          }

          if (value.includes("_")) {
            chip.style.visibility = "visible"; // Hide "_" character
          }

          chipsSV.appendChild(chip);
        }
      }

      // Get the <span> element by its class name
      var spanElement = document.querySelector(".chipSV");

      // Get the text content of the <span> element
      var text = spanElement.textContent;

      // Replace all underscore characters with non-breaking spaces
      var modifiedText = text.replace(/_/g, "&nbsp;");

      // Update the text content of the <span> element
      spanElement.textContent = modifiedText;

      // Set the image URL as the init_image in the prompt
//      prompt.init_image = imageUrl;

      // Make an API request to Stable Diffusion API with the prompt
        // Make an API request to Stable Diffusion API with the prompt
        fetch("/generate-images", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(prompt)
        })
          .then(response => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error("Failed to generate images. Status: " + response.status);
            }
          })
          .then(data => {
            // Handle the API response and display the generated images
            if (data.status === "success" && data.output) {
              const imageUrls = data.output.map(url =>
                url.replace("https://d1okzptojspljx.cloudfront.net", "https://stablediffusionapi.com")
              );
              hideWaitingOverlay(); // Hide the waiting overlay
              showModal(imageUrls, promptText);
            } else {
              console.error("Error generating images:", data);
              displayErrorModal();
              hideWaitingOverlay(); // Hide the waiting overlay
              hideOverlay(); // Hide the overlay and loading message
            }
          })
          .catch(error => {
            console.error("Error generating images:", error);
            displayErrorModal();
            hideWaitingOverlay(); // Hide the waiting overlay
            hideOverlay(); // Hide the overlay and loading message
          });

        // Function to display the error modal window
        function displayErrorModal() {
          const errorModal = document.getElementById("errorGenerating");
          errorModal.style.display = "block";

          const tryAgainButton = document.getElementById("errorButton");
          tryAgainButton.addEventListener("click", () => {
            errorModal.style.display = "none";
            generateImages(imageUrl, selectedValues); // Relaunch the query
          });

          const closeButton = document.querySelector("#errorGenerating .closeError");
          closeButton.addEventListener("click", () => {
            errorModal.style.display = "none";
          });
        }


        }

    
    function showWaitingOverlay() {
      const waiting = document.getElementById("waiting");
      waiting.style.display = "block";
    }
    function hideWaitingOverlay() {
      const waiting = document.getElementById("waiting");
      waiting.style.display = "none";
    }
    // Function to show the overlay
    function showOverlay() {
      const overlay = document.getElementById("overlay");
      overlay.style.display = "block";
    }
    
    
    // Function to reroll the images
    function rerollImages() {
      const rerollButton = document.getElementById("rerollButton");
      //rerollButton.disabled = true;
      const selectedValues = getSelectedValues();
      generateImages(null, selectedValues);
    }

    // Add event listener to the rerollButton
    const rerollButton = document.getElementById("rerollButton");
    rerollButton.addEventListener("click", rerollImages);


    
    
    
    
    // Function to generate message
 function generateMessageDiv(message) {
      var messageDiv = document.createElement('div');
      messageDiv.id = 'message';
      messageDiv.innerHTML = `
        <div class="message-content">
      
              <img class="imgLoader" src="/static/img/modal_img/copyurl.svg">
          <p class="message-microcopy">${message}</p>
          <button class="message-close-btn" onclick="closeMessage()">Close</button>
        </div>
      `;
      document.body.appendChild(messageDiv);
    }
    window.closeMessage = function () {
      var messageDiv = document.getElementById('message');
      if (messageDiv) {
        messageDiv.remove();
      }
    }
    

    // Function to copy text to clipboard
    function copyTextToClipboard(text) {
      const tempInput = document.createElement("textarea");
      tempInput.value = text;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      
      generateMessageDiv("Prompt copied to clipboard!");
    }
    
//   upscale
    
    function getBase64Image(image) {
      const canvas = document.createElement("canvas");
      canvas.width = image.width;
      canvas.height = image.height;
      const context = canvas.getContext("2d");
      context.drawImage(image, 0, 0);
      const dataURL = canvas.toDataURL("image/jpeg");
      return dataURL.replace(/^data:image\/(png|jpeg);base64,/, "");
    }

 

    
    function showModalWithProgressBar() {
      // Create modal element
      const modalUpscale = document.createElement("div");
      modalUpscale.id = "modalUpscale";

      // Create container element
      const containerUpscale = document.createElement("div");
      containerUpscale.classList.add("containerUpscale");

      // Create <img> element
      const imgElement = document.createElement("img");
      imgElement.src = "static/img/modal_img/scaling.svg";
      imgElement.setAttribute("alt", "Image");
      imgElement.classList.add("imgLoader");

      // Create message element
      const message = document.createElement("h1");
      message.textContent = "Upscaling your image, it could take a moment...";

      // Create microcopy element
      const microcopy = document.createElement("p");
      microcopy.textContent = "The image will be automatically downloaded";

      // Create progress bar element
      const progressBar = document.createElement("div");
      progressBar.classList.add("progress-bar");

      // Append elements to container
      containerUpscale.appendChild(imgElement);
      containerUpscale.appendChild(message);
      containerUpscale.appendChild(microcopy);

      // Append container and progress bar to modal
      modalUpscale.appendChild(containerUpscale);
      modalUpscale.appendChild(progressBar);

      // Append modal to the document body
      document.body.appendChild(modalUpscale);
    }

    function hideModal() {
      // Remove the modal from the document body
      const modalUpscale = document.getElementById("modalUpscale");
      if (modalUpscale) {
        document.body.removeChild(modalUpscale);
      }
    }

    const upscaleImage = async (imageUrl) => {
      try {
        showModalWithProgressBar();

        // Load the image
        const image = new Image();
        image.crossOrigin = "anonymous";
        image.src = '/proxy-image?url=' + encodeURIComponent(imageUrl);

        image.onload = async () => {
          // Convert image to Base64
          const base64Image = getBase64Image(image);

          const url = 'https://super-image1.p.rapidapi.com/run';
          const options = {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              'X-RapidAPI-Key': '5288a49c47mshc0d528176d70522p1a13b5jsn7205ba3bf330',
              'X-RapidAPI-Host': 'super-image1.p.rapidapi.com'
            },
            body: JSON.stringify({
              upscale: 2,
              image: base64Image
            })
          };

          const response = await fetch(url, options);
          const data = await response.json();
          console.log(data);

          // Open the upscaled image in a new browser tab
          const newTab = window.open(data.output_url, '_blank');
          newTab.focus();

          hideModal();
        };
      } catch (error) {
        console.error(error);
        // Handle error here
        hideModal();
      }
    };

    



    
    // Function to copy image URL to clipboard
    function copyImageUrlToClipboard(imageUrl) {
      const tempInput = document.createElement("textarea");
      tempInput.value = imageUrl;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      
      generateMessageDiv("Image URL copied to clipboard!");
    }
    // Function to display the generated images in a modal
    function showModal(imageUrls, promptText) {
      const modal = document.getElementById("modal");
      const imageGrid = document.getElementById("imageGrid");
      // Clear previous images
      imageGrid.innerHTML = "";
      // Display the generated images
      imageUrls.forEach(imageUrl => {
        const imageContainer = document.createElement("div");
        // Create image element
        const image = document.createElement("img");
        image.src = imageUrl;
        image.alt = "Generated Image";
        image.classList.add("thumbnail");

        // Attach click event listener to open image in new tab
        image.addEventListener("click", () => {
          openImageInNewTab(imageUrl);
        });

        // Create buttons container
        const buttonsContainer = document.createElement("div");
        buttonsContainer.classList.add("image-buttons");

        // Create copy URL button
        const copyButton = document.createElement("button");
        copyButton.textContent = "Copy URL";
        copyButton.addEventListener("click", () => {
          copyImageUrlToClipboard(imageUrl);
        });

        // Create copy prompt button
        const copyPromptButton = document.createElement("button");
        copyPromptButton.textContent = "Copy Prompt";
        copyPromptButton.addEventListener("click", () => {
          copyTextToClipboard(promptText);
        });

        
          // Create upscale button
          const upscaleButton = document.createElement("button");
          upscaleButton.textContent = "Upscale";
          upscaleButton.addEventListener("click", () => {
            upscaleImage(imageUrl);
          });
          
          

        // Append buttons to buttons container
        buttonsContainer.appendChild(copyButton);
        buttonsContainer.appendChild(copyPromptButton);
        buttonsContainer.appendChild(upscaleButton);

        // Append image and buttons container to image container
        imageContainer.appendChild(image);
        imageContainer.appendChild(buttonsContainer);

        // Append image container to image grid
        imageGrid.appendChild(imageContainer);
      });

      // Show the modal
      modal.style.display = "block";
      showOverlay(); // Show the overlay
    }
  // Function to open the image in a new tab
  function openImageInNewTab(imageUrl) {
    window.open(imageUrl, "_blank");
  }
  // Function to download the image (or open in a new tab if not possible to download)
  function downloadImage(imageUrl) {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.target = "_blank";
    // Check if the browser supports the "download" attribute
    if ("download" in link) {
      link.download = "generated_image.png";
      link.click();
    } else {
      // Fallback: Open the image in a new tab if download is not supported
      window.open(imageUrl, "_blank");
    }
  }
    // Green dot
    function toggleGreenDot(selectId) {
      var selectElement = document.getElementById(selectId);
      var dotElement = document.querySelector('#' + selectId + '+ span.dot');
      if (selectElement.value === '') {
        dotElement.style.display = 'none';
      } else {
        dotElement.style.display = 'block';
      }
    }
    // Attach event listeners to all select elements
    var selectElements = document.querySelectorAll('select');
    selectElements.forEach(function(selectElement) {
      selectElement.addEventListener('change', function() {
        var selectId = this.id;
        toggleGreenDot(selectId);
      });
    });
    
    // Function to reset form

    function resetFormAndEventListeners() {
      // Reset form values
      const form = document.getElementById("imageGenerationForm");
      form.reset();

      // Remove event listeners from select elements
      const selectElements = document.querySelectorAll("select");
      selectElements.forEach(function (select) {
        select.removeEventListener("change", handleSelectChange);
      });

      // Add event listeners back to select elements
      selectElements.forEach(function (select) {
        select.addEventListener("change", handleSelectChange);
      });
    }

    
  // Function to close the modal

  
    
  function closeModal() {
    const modal = document.getElementById("modal");
    const overlay = document.getElementById("overlay");
    modal.style.display = "none";
    overlay.style.display = "none";
    // Enable the "Make the Magic" button
    const magicButton = document.getElementById("magicButton");
    magicButton.disabled = false;
    // Reset the form and event listeners
//    resetFormAndEventListeners();
  }
    // Function to clear all form values and reset the image display
    function clearAll(event) {
      /*event.preventDefault(); // Prevent form submission
      const fileInput = document.getElementById("imageDisplayUrl");
      fileInput.value = ""; // Clear the file input*/
      const form = document.getElementById("imageGenerationForm");
      form.reset(); // Reset the form
      // Hide all green dots
      const selectElements = document.querySelectorAll('select');
      selectElements.forEach(function(selectElement) {
        const dotElement = document.querySelector('#' + selectElement.id + '+ span.dot');
        dotElement.style.display = 'none';
      });
      // Enable the "Make the Magic" button
      const magicButton = document.getElementById("magicButton");
      magicButton.disabled = false;
      // Reset the form and event listeners
      resetFormAndEventListeners();
    }
  // Add event listener to the form submission
  const form = document.getElementById("imageGenerationForm");
  form.addEventListener("submit", handleSubmit);
  // Add event listener to the close button of the modal
  const closeButton = document.getElementsByClassName("close")[0];
  closeButton.addEventListener("click", closeModal);
  // Add event listener to the "Clear All" button
  const clearAllButton = document.getElementById("clearAllButton");
  clearAllButton.addEventListener("click", clearAll);
});



//disable MB

const selectElements = document.querySelectorAll("select");

// Function to check if all select options have empty values
function areAllOptionsEmpty() {
  for (const select of selectElements) {
    if (select.value !== "") {
      return false; // At least one option has a non-empty value
    }
  }
  return true; // All options have empty values
}

// Function to handle changes in select elements
function handleSelectChange() {
  const allOptionsEmpty = areAllOptionsEmpty();
  magicButton.disabled = allOptionsEmpty; // Disable magicButton if all options have empty values
}

// Listen for changes in select elements
for (const select of selectElements) {
  select.addEventListener("change", handleSelectChange);
}

// Initial check on page load
handleSelectChange();



window.addEventListener('load', function() {
  setTimeout(function() {
    var splash = document.getElementById('splash');
    var content = document.getElementById('content');

    splash.style.transition = 'top 0.5s ease-in-out'; // Add transition effect
    splash.style.top = '-100%'; // Move the splash screen to the top

    setTimeout(function() {
      splash.style.display = 'none'; // Hide the splash screen
//      content.style.display = 'block'; // Show the website content
    }, 500); // Wait for the transition to complete (0.5 seconds)
  }, 4000); // 4 seconds (4000 milliseconds)
});