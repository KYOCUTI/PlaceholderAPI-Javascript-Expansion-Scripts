# PlaceholderAPI-Javascript-Expansion-Scripts
**JavaScript Scripts For Placeholders In Minecraft**

**Here’s a step-by-step guide on how to use the JavaScript PlaceholderAPI expansion:**

1. **Download PlaceholderAPI**: First, download PlaceholderAPI from here [PlaceholderAPI on SpigotMC](https://www.spigotmc.org/resources/placeholderapi.6245/).

2. **Install PlaceholderAPI**: Install it in your Minecraft plugins folder.

3. **Restart Your Server**: Restart your server, and then you find a folder that has been created by PlaceholderAPI called "PlaceholderAPI".

4. **Locate the PlaceholderAPI Folder**: Open it, you will find a folder called "expansions". Now depending on whether if you downloaded expansions or not it should be an empty folder.

5. **Download the JavaScript Expansion**: Now go to here and download that expansion [JavaScript Expansion for PlaceholderAPI](https://api.extendedclip.com/expansions/javascript/).

6. **Install the JavaScript Expansion**: When it finishes downloading, drag the downloaded expansion into the "expansion" folder that was created by PlaceholderAPI when you started the server.

7. **Restart Your Server Again**: Now restart the server after placing the expansion in PlaceholderAPI file.

8. **Locate the JavaScript Files**: After the server restart, go to the PlaceholderAPI folder inside the plugins folder once again. You now find a new folder that has been created called "javascripts" and a .yml file called "javascript_placeholders".

9. **Add Your JavaScript File**: But first, you are gonna have to go to the javascripts folder. Click on that. Now assuming you downloaded the .js file from my GitHub page, drag that .js file into the javascripts folder.

10. **Update the Placeholder Configuration**: And for the last step, you are gonna go back to the PlaceholderAPI file and open the javascript_placeholders.yml. You will find:

    ```yaml
    example:
      file: example.js
    ```

    Copy that and paste it underneath it. It should look like this:

    ```yaml
    example:
      file: example.js
    example:
      file: example.js
    ```

    Now you are gonna have to rename it with the name of the .js script. For an example:

    ```yaml
    this_is_a_test:
      file: this_is_a_test.js
    ```

    And then save and exit.

11. **You’re Done !**: And there you have it! You have successfully installed the JavaScript and now you can use your new placeholder. The placeholder will depend on the .js name just like our example above the placeholder is gonna look like this %javascript_this_is_a_test%.

Your JavaScript placeholders will be identified by: %javascript_<identifier>%

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/L3L8VY76N)
